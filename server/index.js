import express from 'express';
import http from 'http';
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();


app.get('/', (req, res) => {
  res.send('Welcome')
})


const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
})

