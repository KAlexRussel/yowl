<script setup>

import UserNav from '@/components/UserNav.vue'
import NavCard from '@/components/NavCard.vue';
import EditProfile from '@/components/EditProfile.vue';

</script>

<template>
    <div >
        <NavCard />
        <div class="flex flex-col md:flex-row ">
            <UserNav />
            <section class="w-full">
                <div class="flex-1 h-full pb-24 md:pb-5">
                    <div >
                        <div class="p-4 text-2xl">
                            <h1 class="font-bold pl-2 text-black ">Edit Profile</h1>
                        </div>
                    </div>
                    <EditProfile/>               
                </div>
            </section>
        </div>
    </div>

</template>
