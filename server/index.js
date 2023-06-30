import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
import cors from 'cors';
import { Server } from 'socket.io';
import { MongoClient } from 'mongodb';
import bcrypt from "bcrypt";
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { authenticate } from './auth.js';
import * as dotenv from 'dotenv';
dotenv.config();
const accessTokenSecret = process.env.TOKEN

const client = new MongoClient(process.env.DB_URI);

async function connection() {
  await client.connect();
  const db = client.db(process.env.DB_DATABAE);
  return db
}

const app = express();
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors());
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;


app.get('/', (req, res) => {
  res.send('Welcome')
})

app.post('/login', async (req, res) => {
  const db = await connection()
  const { username, password } = req.body;
  const collection = db.collection('users');
  const userInfo = await collection.findOne({ username });

  let user = null;

  if (userInfo) {
    const match = await bcrypt.compare(password, userInfo.password);
    if (match) {
      const accessToken = jwt.sign({ username: userInfo.username, email: userInfo.email }, accessTokenSecret, { expiresIn: '1h' })
      delete userInfo.password;
      res.status(200)
      res.send({
        success: true,
        token: accessToken,
        message: 'Logged in successfully!',
        ...userInfo
      })
    } else {
      res.status(403)
      res.send({
        success: false,
        message: 'Password is not matching!'
      })
    }
  } else {
    res.status(404)
    res.send({
      success: false,
      message: 'User not found'
    })
  }
})


const server = http.createServer(app);

const io = new Server(server);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
})

