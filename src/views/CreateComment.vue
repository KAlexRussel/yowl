<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import NavCard from '@/components/NavCard.vue';
import CreatePost from '@/components/CreatePost.vue';
</script>

<template>
  <NavCard />
  <div class="bg-gray-100 py-20">
    <div class="md:w-2/3  mx-auto max-w-md ">
      <CreatePost />

    </div>

  </div>


  <FooterComponent />
</template>
