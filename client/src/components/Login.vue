<template>
  <div class="flex flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <label
          for="username"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Username</label
        >
        <div class="mt-2">
          <input
            id="username"
            v-model="username"
            name="username"
            type="text"
            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Password</label
          >
        </div>
        <div class="mt-2">
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 my-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="login()"
        >
          Sign in
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "Login",
  data () {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async login() {
      const result = await axios.post(`${process.env.BACKEND_URL}login`, {username: this.username, password: this.password});
      if (result.data.success) {
        const userInfo = {
          username: result.data.username,
          firstname: result.data.firstname,
          lastname: result.data.lastname,
          token: result.data.token
        }
        localStorage.setItem('user', JSON.stringify(userInfo));
        this.$toast.success(result.data.message);
        this.$router.push('/')
      } else {
        this.$toast.warning(result.data.message);
      }
    }
  },
};
</script>