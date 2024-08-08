<script setup>

import SideNav from '@/components/SideNav.vue';
import NavCard from '@/components/NavCard.vue';
import EditProfile from '@/components/EditProfile.vue';

</script>

<template>

    <div class="bg-[#2C53C6] min-h-screen">
        <NavCard />
        <div class="flex flex-col md:flex-row ">
            <SideNav />
            <section class="w-full ">
                <div class="flex-1 h-full bg-gray-100 pb-24 md:pb-5">
                    <div class="bg-[#2C53C6] pt-3">
                        <div class="rounded-tl-3xl bg-sky-300 opacity-90 p-4 shadow text-2xl">
                            <h1 class="font-bold pl-2 text-white ">Edit Profile</h1>
                        </div>
                    </div>
                    <EditProfile/>

                </div>
            </section>
        </div>
    </div>

</template>
