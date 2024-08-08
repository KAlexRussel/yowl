<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import { ref, watch } from 'vue';
import { useCategoriesStore } from '@/stores/CategoriesStore';
import { usePostStore } from '@/stores/PostStore';
const user = JSON.parse(localStorage.getItem('user'))
const posts = usePostStore();
const categories = useCategoriesStore()
const error = ref('')
const category = ref(0)
const content = ref('')
const url = ref('')
const message = ref('')
const show = ref(false)

watch(url, (value => {
  value = value.trim()
  verifyUrl(value)

}))


const verifyUrl = (value) => {
  const letter = "^(http|https)://[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(/[a-zA-Z0-9-._~:?#@!$&'()*+,;=]*)*$"

  if (value.match(letter) === null) {
    error.value = " Invalid url"
  }
  else {
    error.value = ''
  }

}

const handleSubmit = async () => {
  if ((content.value.length > 0) && (url.value.length > 0) && !error.value) {
    message.value = await posts.createposts(url.value, user.user.id, content.value, category.value)
    posts.createPostStore(url.value, user.user.id, content.value, category.value)
    show.value = true
    // content.value = ''
    // url.value = ''

  }
}


</script>

<template>
  <p class="text-center text-green-600 mb-8 text-lg font-semibold" v-if="show">Post Created </p>
  <div class="flex justify-center relative w-full bg-white rounded-3xl  ">
    <button
      class="px-4 py-4 bg-[#527EFF] opacity-64  shadow-md shadow-blue-600 text-white font-semibold rounded-2xl absolute -top-5">Share
      Your thougts</button>
    <form @submit.prevent.stop class="shadow-lg rounded-3xl flex flex-col pt-8 w-full">
      <div class="flex gap-x-3 border-b py-6 px-8 items-center">

        <label class="font-semibold text-base w-1/3"> Link :</label>
        <div class="w-full">
          <p class="w-full text-red text-sm">{{ error }}</p>
          <input type="text"
            class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 focus:border-2 focus:border-gray-200 "
            v-model.trim="url">
        </div>
      </div>
      <div class="flex gap-x-3 border-b py-6 px-8 items-center">
        <label class="font-semibold text-base w-1/3"> Category :</label>
        <select v-model="category"
          class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 focus:border-2 focus:border-gray-200">

          <option value="" selected disabled>
            Choose
          </option>
          <option v-for="categori in categories.categories" :value="categori.id" :key="categori.id">
            {{ categori.name }}
          </option>


        </select>
      </div>
      <div class="flex gap-x-3 border-b py-6 px-8 items-start">
        <label class="font-semibold text-base w-1/3"> Content :</label>
        <textarea v-model.trim="content"
          class=" outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 w-full h-20 focus:border-2 focus:border-gray-200">

        </textarea>
      </div>
      <div class="flex justify-end gap-x-6 px-8 py-6 h-full">
        <!-- <ButtonComponent css="bg-[#FF3B30] text-white text-sm"> Discard</ButtonComponent> -->
        <ButtonComponent css="bg-[#2C53C6] text-white text-sm" type="submit" @click="handleSubmit"> Comment
        </ButtonComponent>
      </div>
    </form>
  </div>
</template>
