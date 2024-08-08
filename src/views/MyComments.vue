<script setup>
import FilterBlock from '@/components/FilterBlock.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavCard from '@/components/NavCard.vue';
import PostBLock from '@/components/PostBLock.vue';
import RightBlock from '@/components/RightBlock.vue';

const user = JSON.parse(localStorage.getItem('user'))

</script>

<template>
  <NavCard />
  <div class="flex flex-col gap-y-5  md:flex-row gap-x-5 h-full py-5 px-2 bg-gray-100">
    <div class="md:w-1/4">
      <FilterBlock  condition="there"/>

    </div>
   
    <div class="md:w-1/2 h-full">
      <PostBLock  :user_id="user.user.id"/>
    </div>

    <div class="md:w-1/4 h-full">
      <RightBlock />
    </div>

  </div>
  <FooterComponent />
</template>
