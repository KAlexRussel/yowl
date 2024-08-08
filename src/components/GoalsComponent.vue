<script setup>
import GoalsCard from './GoalsCard.vue';
</script>

<template>
    <div class="">
        <div class="text-center flex flex-col gap-y-8 ">
            <h1 class="text-3xl md:text-6xl font-bold text-[#2C53C6]">Our Goals</h1>
        
            <p class="md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum viverra nunc sed convallis.
            </p>

        </div>
        <div class="flex flex-col lg:flex-row gap-y-48 gap-x-5 justify-around mb-10 mt-52">
            <GoalsCard />
            <GoalsCard />
            <GoalsCard />
        </div>

    </div>


</template>
