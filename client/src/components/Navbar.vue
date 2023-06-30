<script>
  export default {
    data () {
      return {
        loggedIn: false,
        openProfile: false,
        user: null,
      }
    },
    mounted() {
      const userInfo = localStorage.getItem('user');
      if (userInfo) {
        this.user = JSON.parse(userInfo);
        this.loggedIn = true;
      }
    }
  }
</script>
<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <router-link class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none" to="/">Home</router-link>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div v-if="loggedIn" class="relative ml-3">
            <div>
              <button type="button" class="flex rounded-full cursor-pointer bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" @click="openProfile = !openProfile">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </button>
            </div>

            <div v-if="openProfile" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300" to="/profile" @click="openProfile = false">Profile</router-link>
              <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300" to="/videos" @click="openProfile = false">Videos</router-link>
              <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300" to="/logout" @click="openProfile = false">Logout</router-link>
            </div>
          </div>
          <router-link v-else class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none" to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>