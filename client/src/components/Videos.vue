<template>
<div class="container mt-2">
  <div class="flex flex-row justify-around">
    <h1 class="text-center text-2xl">Videos</h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <router-link to="/upload">Upload</router-link>
    </button>    
  </div>
  <table class="table-auto border-collapse border border-slate-500">
  <thead>
    <tr>
      <th class="border border-slate-700">Title</th>
      <th class="border border-slate-700">Description</th>
      <th class="border border-slate-700">File</th>
      <th class="border border-slate-700">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(video, key) in videos" :key="key">
      <td class="border border-slate-700">{{ video.title }}</td>
      <td class="border border-slate-700">{{ video.description }}</td>
      <td class="border border-slate-700">{{ video.filename }}</td>
      <td class="border border-slate-700"><router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300" :to="`video/{{ video.videoId }}`">Details</router-link></td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      videos: [],
      loading: false
    }
  },
  mounted() {
    
  }
}
</script>