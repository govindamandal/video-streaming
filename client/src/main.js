import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'
import toast from '@k90mirzaei/vue-toast'
import '@k90mirzaei/vue-toast/dist/index.css'

import User from './lib/user'

router.beforeEach( async(to, from, next) => {
  let user = localStorage.getItem('user');
  const restricted = ['video', 'profile']
  if (restricted.includes(to.name) && !user) {
    return false;
  }
  return next()
})

createApp(App).use(router).use(toast).mount('#app')
