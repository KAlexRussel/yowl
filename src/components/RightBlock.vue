<script setup>
import { ref } from 'vue';
import QuicKComment from './QuicKComment.vue';
const show = ref(false);
const user = JSON.parse(localStorage.getItem('user'))

</script>

<template>
    <div class="rounded-2xl  py-8 px-5  bg-gray-100">
        <div class="flex flex-col gap-y-7" v-if="!show">
            <div class="flex justify-start">
                <button class="py-4 px-5 w-3/4 text-xl font-semibold shadow-md shadow-[#007AFFD9] bg-[#007AFFD9] opacity-85 text-white rounded-2xl hover:bg-gray-500"
                    type="button" @click="show = true">
                    Quick Comment
                </button>

            </div>

            <div class="flex  justify-end">
                <button class="py-4 px-5 w-3/4 text-xl font-semibold shadow-md shadow-[#5E00FF61] bg-[#5E00FF61] opacity-38 text-white rounded-2xl hover:bg-gray-500"
                    type="button">
                    Hello {{ user.user.name }}
                </button>

            </div>
            <div>
                <RouterLink to="/comments/create">
                    <button
                        class="py-4 px-5 w-3/4 text-xl font-semibold shadow-md shadow-[#116095A1] bg-[#116095A1] opacity-63 text-white rounded-2xl hover:bg-gray-500"
                        type="button">

                        Share thoughts

                    </button>
                </RouterLink>


            </div>


        </div>

        <QuicKComment @close="show = false" v-else />

    </div>



</template>
