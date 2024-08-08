<script setup>
const props = defineProps(['number','title'])
</script>
<template>

    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
        <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-green-600"><i class="fa fa-wallet fa-2x fa-inverse"></i></div>
                </div>
                <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">{{ props.title }}</h2>
                   <p class="font-bold text-3xl">{{ props.number }} <span class="text-green-500"><i class="fas fa-caret-up"></i></span></p>
                </div>
            </div>
        </div>             
    </div>
    
</template>