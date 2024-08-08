<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <div class="text-center h-screen flex flex-col justify-center items-center">
    <h1 class="mb-4 text-8xl font-semibold text-[#2C53C6]">404</h1>
    <p class="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
    <div class="animate-bounce">
      <svg class="mx-auto h-16 w-16 text-[#2C53C6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8">
        </path>
      </svg>
    </div>
    <p class="mt-4 text-gray-600">Let's get you back <RouterLink to="/" class="text-blue-500">home</RouterLink>.</p>
  </div>
</template>
