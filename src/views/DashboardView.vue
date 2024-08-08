<script setup>
import SideNav from '@/components/SideNav.vue';
import MetricCard from '@/components/MetricCard.vue';
import NavCard from '@/components/NavCard.vue';
// import GraphCard from '@/components/GraphCard.vue';


import { usePostStore } from '@/stores/PostStore';
import { useCategoriesStore } from '@/stores/CategoriesStore';
// import { useCommentStore } from '@/stores/CommentStore';
import { useUserStore } from '@/stores/UserStore';

const posts = usePostStore()
const categories = useCategoriesStore()
const usersP = useUserStore()
usersP.getUsers()


</script>

<template >
    <div class="bg-[#2C53C6] min-h-screen">
        <NavCard />
        <div class="flex flex-col md:flex-row ">
            <SideNav />
            <section class="w-full min-h-screen">
                <div class="main-content flex-1 bg-gray-100 h-full pb-24 md:pb-5">
    
                    <div class="bg-[#2C53C6] pt-3">
                        <div class="rounded-tl-3xl bg-sky-300 opacity-90 p-4 shadow text-2xl">
                            <h1 class="font-bold pl-2 text-white ">Dashboard</h1>
                        </div>
                    </div>
    

                    <div class="flex ">
                        <MetricCard title="Number of comment" :number="posts.posts.length" />
                        <MetricCard title="Number of Users" :number="usersP.users.length" />
                        <MetricCard title="Number of Categories " :number="categories.categories.length" />

                    </div>
    
                </div>
            </section>
        </div>
    </div> 

</template>

