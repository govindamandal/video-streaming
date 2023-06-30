<template>
  <div class="grid grid-cols-1 gap-4">
    <div>
      <label
        for="title"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Title</label>
      <div class="mt-2">
        <input
          id="title"
          v-model="title"
          name="username"
          type="username"
          class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required
          placeholder="Enter video title"
        />
      </div>
    </div>
    <div>
      <label
        for="description"
        class="block text-sm font-medium leading-6 text-gray-900"
        >description</label
      >
      <div class="mt-2">
        <input
          id="description"
          v-model="description"
          name="description"
          type="description"
          class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required
          placeholder="Enter video description"
        />
      </div>
    </div>
    <div class="mt-2">
      <label
        for="video"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Video</label>
    </div>
    <div class="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
      <div
        class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
        style="width: 450px"
      >
        <svg
          class="text-indigo-500 w-24 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <div class="input_field flex flex-col w-max mx-auto text-center">
          <label>
            <input class="text-sm cursor-pointer w-36 hidden" type="file" @change="onFileChange"/>
            <div
              class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500"
            >
              Select
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: null,
      description: null,
      file: null,
    };
  },
  methods: {
    onFileChange(input) {
      const file = input.target.files[0];
      console.log('log file ', file);
      this.file = file;
    }
  }
};
</script>