<script setup>
import { ref } from 'vue';


const props = defineProps(['username'])
const content = ref('')

</script>
<template>
    <div class="w-full">
        <p class="text-sm mb-3"> Replying to <span class=" text-[#2C53C6] font-bold ">{{ props.username }}</span></p>
        <form @submit.prevent.stop class="flex flex-col gap-y-3 w-full">
            <textarea
                class="w-full pt-2 pl-2 pb-1 border border-gray-300 rounded-2xl outline-none border-2 focus:border-gray-200"
                placeholder="Enter your comment here..." v-model="content"></textarea>
            <div class="flex justify-start gap-x-4 items-center">
                <p class="cursor-pointer" @click="$emit('reply', content)">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 17V15.8C20 14.1198 20 13.2798 19.673 12.638C19.3854 12.0735 18.9265 11.6146 18.362 11.327C17.7202 11 16.8802 11 15.2 11H4M4 11L8 7M4 11L8 15"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </p>

                <p class="cursor-pointer" @click="$emit('close')">
                    <svg width="15px" height="15px" viewBox="-0.5 0 25 25" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </p>
            </div>
        </form>
    </div>
</template>

