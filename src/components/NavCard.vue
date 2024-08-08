<script setup>
import { RouterLink } from 'vue-router';
import SearchBar from './SearchBar.vue';
import ButtonComponent from './ButtonComponent.vue';
import { ref } from 'vue';
import router from '@/router';
import { useUserStore } from '@/stores/UserStore';
import { logoutapi } from '@/api/AuthentificateApi';
import { useCategoriesStore } from '@/stores/CategoriesStore';
import { useCommentStore } from '@/stores/CommentStore';
import { usePostStore } from '@/stores/PostStore';

const user = JSON.parse(localStorage.getItem('user'))
const store=useUserStore()
const showMenu = ref(false)
const post=usePostStore()
const comment=useCommentStore()
const categories=useCategoriesStore()

const logout = () => {
    
    logoutapi()
    store.$reset
    post.$reset
    comment.$reset
    categories.$reset
    localStorage.removeItem('user')
   
    localStorage.clear()
    router.push('/')
}


const HandleProfile= () =>{
    if(user.user.isadmin == 0 ){

        router.push("/userprofile")

    }else{
        router.push("/profile")

    }
}
</script>

<template>
    <nav class="py-4  px-3 md:px-8 bg-[#2C53C6] ">
        <div class="flex items-center gap-y-3 md:flex-row md:items-center justify-between text-white">
            <div >
                <img src='@/assets/gunb.png' alt="agun logo" class="h-14 lg:ml-7" >
            </div>
            <ul class="hidden md:flex items-center gap-x-10 text-xl font-medium">
                <li class="cursor-pointer  hover:underline">
                    <RouterLink to="/comments">Home</RouterLink>
                </li>
                <li class="cursor-pointer  hover:underline">
                    <RouterLink to="/mycomments">MyComments</RouterLink>
                </li>

                <RouterLink to="/comments/create">
                    <ButtonComponent css="bg-purple-600 text-white"> Comment </ButtonComponent>
                </RouterLink>

            </ul>

            <div class="flex justify-center">
                <SearchBar />
            </div>

            <div class=" flex items-center gap-x-3 md:gap-x-9 " @click="HandleProfile">
                
                    <p class="cursor-pointer">
                        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                                stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                                stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </p>
              
                <p @click="logout" class="cursor-pointer">
                    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Iconly/Curved/Logout">
                            <g id="Logout">
                                <path id="Stroke 1" d="M21.791 12.1208H9.75" stroke="#fff" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path id="Stroke 3" d="M18.8643 9.20483L21.7923 12.1208L18.8643 15.0368" stroke="#fff"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path id="Stroke 4"
                                    d="M16.3597 7.63C16.0297 4.05 14.6897 2.75 9.35974 2.75C2.25874 2.75 2.25874 5.06 2.25874 12C2.25874 18.94 2.25874 21.25 9.35974 21.25C14.6897 21.25 16.0297 19.95 16.3597 16.37"
                                    stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </g>
                    </svg>

                </p>
                <p class="md:hidden cursor-pointer" v-if="!showMenu" @click="showMenu = true"><svg width="30px"
                        height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>


        <ul v-if="showMenu" class="flex  flex-col md:hidden items-center gap-y-5 mt-5 text-white">
            <li class="cursor-pointer hover:underline">
                <RouterLink to="/comments">Home</RouterLink>
            </li>
            <li class="cursor-pointer  hover:underline">
                <RouterLink to="/mycomments">MyComments</RouterLink>
            </li>

            <RouterLink to="/comments/create">
                <ButtonComponent css="bg-blue-400 text-white hover:bg-gray-500"> Comment </ButtonComponent>
            </RouterLink>



        </ul>



    </nav>
</template>
