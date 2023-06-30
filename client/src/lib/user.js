import axios from 'axios';

const User = {
  async load() {
    const user = localStorage.getItem('user');
    const userInfo = JSON.parse(user);
    const auth = await axios.get(`${process.env.BACKEND_URL}authenticate`, { token: userInfo.token }).data;
    if (auth) {
      localStorage.setItem('user', JSON.stringify(auth));
      return user;
    } else {
      return false;
    }
  }
}

export default User;