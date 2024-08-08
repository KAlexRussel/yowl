<script setup>
import { usePostStore } from '@/stores/PostStore';
import { ref } from 'vue';
const posts = usePostStore()
const search = ref('')

const handleSearch = () =>{
    posts.filterStore(search.value)

}
</script>

<template>
    <div
        class="bg-[#617ed4]  flex justify-between px-5 py-2 rounded-2xl items-center focus:border w-2/3 hover:border-2 hover:border-blue-400 ">
        <div class=" md:hidden">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
        <div class="hidden md:block">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="handleSearch">
                <path
                    d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>


        <input type="text" class="outline-0 border-0 bg-[#617ed4] py-1 px-2 w-full" v-model.trim="search">
        <p class="text-sm md:text-xl font-medium ">Search</p>
    </div>
</template>
