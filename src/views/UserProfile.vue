<script setup>

import UserNav from '@/components/UserNav.vue'
import NavCard from '@/components/NavCard.vue';
import ProfileSection from '@/components/ProfileSection.vue';

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
                            <h1 class="font-bold pl-2 text-black ">My Profile</h1>
                        </div>
                    </div>

                   <ProfileSection/> 
                </div>
            </section>
        </div>
    </div>

</template>
