<script setup>
import ButtonComponent from './ButtonComponent.vue';
</script>

<template>
    <div class="flex flex-col md:flex-row justify-around px-4 gap-y-3 py-8 gap-x-6 items-center">
        <div class="flex text-center md:text-start flex-col gap-y-10 md:w-1/3">
            <h1 class="text-5xl text-[#2C53C6] font-bold ">LET'S GET SOCIAL WITH</h1>
            <p class="text-xl">AGUN is a web application enabling users to comment freely on any content found on the
                Internet.</p>
            <div>
                <ButtonComponent css="text-white bg-[#36454F]">Get Started for free</ButtonComponent>
            </div>
        </div>
        <div class="md:w-1/2">
            <img src="../assets/home.png" alt="">

        </div>
    </div>
</template>
