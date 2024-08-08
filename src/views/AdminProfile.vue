<script setup>

import SideNav from '@/components/SideNav.vue';
import NavCard from '@/components/NavCard.vue';
import ProfileSection from '@/components/ProfileSection.vue';

</script>

<template>
    <div class="bg-[#2C53C6] ">
        <NavCard />
        <div class="flex flex-col md:flex-row ">
            <SideNav />
            <section class="w-full">
                <div class="flex-1 h-full bg-gray-100 pb-24 md:pb-5">
                    <div class="bg-[#2C53C6] pt-3">
                        <div class="rounded-tl-3xl bg-sky-300 opacity-90 p-4 shadow text-2xl">
                            <h1 class="font-bold pl-2 text-white ">My Profile</h1>
                        </div>
                    </div>
                    <ProfileSection/>  
                </div>
            </section>
        </div>
    </div>

</template>
