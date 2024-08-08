<script setup>
import ButtonComponent from './ButtonComponent.vue';
import { ref } from 'vue';
const showMenu = ref(false)
import { RouterLink } from 'vue-router';


const userP = JSON.parse(localStorage.getItem('user'))


</script>

<template>
    <nav class="py-8 px-8 bg-[#2C53C6] ">
        <div class="flex items-center justify-between text-white">
            <div class="flex justify-between items-center w-1/2">
                <div >
                    <img src='@/assets/gunb.png' alt="agun logo" class="h-14 lg:ml-10" >
                </div>
                <ul class="hidden md:flex items-center justify-between gap-x-6 text-xl font-semibold  ">
                    <li class="cursor-pointer hover:underline"><a href="#home">Home</a></li>
                    <li class="cursor-pointer hover:underline"><a href="#goals">Goals</a></li>
                    <li class="cursor-pointer hover:underline"><a href="#about">About</a></li>
                </ul>

      </div>

      <div class="flex items-center gap-x-5">

        <div class="flex items-center gap-x-5">
 
          <div v-if="!userP">
            <RouterLink to="/login">
            <ButtonComponent
              css="hidden md:block bg-[#527EFF] border b-1 text-xl border-white text-white font-medium hover:bg-gray-500">
              Log In
            </ButtonComponent>
          </RouterLink>

          </div>
        
          <RouterLink to="/signup">
            <ButtonComponent css="bg-[#36454F] text-white md:text-xl font-medium hover:bg-gray-500">Join Us
            </ButtonComponent>
          </RouterLink>

        </div>

      </div>



      <p class="md:hidden cursor-pointer" v-if="!showMenu" @click="showMenu = true"><svg width="30px" height="30px"
          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7L4 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
          <path d="M20 12L4 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
          <path d="M20 17L4 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </p>
      <p class="md:hidden cursor-pointer" v-if="showMenu" @click="showMenu = false">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="1.5" />
          <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#ffffff" stroke-width="1.5"
            stroke-linecap="round" />
        </svg>
      </p>

    </div>


    <ul class="flex flex-col items-center md:hidden text-white gap-y-4 mt-4 " v-if="showMenu">
      <li class="cursor-pointer hover:underline"><a href="#home">Home</a></li>
      <li class="cursor-pointer hover:underline"><a href="#goals">Goals</a></li>
      <li class="cursor-pointer hover:underline"><a href="#about">About</a></li>
      <ButtonComponent css="bg-[#527EFF] border b-1 md:text-xl border-white text-white font-medium hover:bg-gray-500">
        Log In
      </ButtonComponent>


    </ul>
  </nav>
</template>

<style scoped>
/* Animation property */
.join {
  animation: wiggle 2s linear infinite;
}

/* Keyframes */
@keyframes wiggle {

  0%,
  7% {
    transform: rotateZ(0);
  }

  15% {
    transform: rotateZ(-15deg);
  }

  20% {
    transform: rotateZ(10deg);
  }

  25% {
    transform: rotateZ(-10deg);
  }

  30% {
    transform: rotateZ(6deg);
  }

  35% {
    transform: rotateZ(-4deg);
  }

  40%,
  100% {
    transform: rotateZ(0);
  }
}
</style>