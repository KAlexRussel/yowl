<script setup>
import EditModal from './EditModal.vue';
import DeleteModal from './DeleteModal.vue';
import { usePostStore } from '@/stores/PostStore';
import LoaderCom from './LoaderCom.vue';
import LinkPreview from '@ashwamegh/vue-link-preview';
import router from '@/router';

const posts = usePostStore()


const props = defineProps(["url", "content", "username", 'id', 'numcom'])
const user = JSON.parse(localStorage.getItem('user'))
const handleMove = () => {
    router.push('/comment/' + props.id)
}

</script>

<template>

    <div
        class="flex flex-col w-full lg:h-48 lg:flex-row gap-y-5 gap-x-1 items-center rounded-2xl shadow-lg bg-white border-2 border-blue-100  ">
        <div class="w-full lg:w-2/3 h-full bg-gray-300 rounded-l-2xl" @click="handleMove">
            <LinkPreview :url="props.url" >
                <template v-slot:loader>
                    <div class="flex justify-center items-center text-center h-full w-full">
                        loader...
                        <LoaderCom />

                    </div>

                </template>
                <template v-slot:default="preview">
                    <div class="h-full w-full rounded-tl-2xl  ">
                        <img class=" w-full h-36 rounded-l-2xl" :src="preview.img" :alt="preview.title" />
                        <!--  <p>Domain: {{ preview.domain }}</p> -->

                        <p class="textSize text-center flex justify-center items-center h-full ">Title: {{ preview.title
                            }}</p>
                        <!-- <p class="text-sm">Description: {{ preview.description }}</p>  -->

                    </div>
                </template>
            </LinkPreview>

        </div>

        <div class="flex flex-col w-full h-full gap-y-3 px-2 break-all  relative">
            <div class="flex justify-end items-center " v-if="posts.loaders == false">
                <div class="mt-1" v-if="user.user.name == props.username">
                    <EditModal size="16" :idPost="props.id" :contents="props.content" :urls="props.url" />

                </div>

                <DeleteModal size="18" :colors="`rounded-full p-2 hover:bg-gray-300`" :id-post="id"
                    v-if="user.user.name == props.username" />


            </div>
            <div class="flex justify-end" v-else>

                <LoaderCom />

            </div>


            <a :href="`${props.url}`" target="_blank" class="textSize  flex flex-col w-fit font-semibold underline">View
                Source</a>

            <p class="textSize break-all " @click="handleMove">{{ props.content.length > 200 ?
                props.content.slice(0, 200) :
                props.content }}</p>


            <div class="flex justify-end absolute w-full bottom-0 mb-2 " @click="handleMove">
                <p class="w-full text-sm">By <span class="text-blue-500 ml-1">{{ props.username }}</span></p>


                <div class="relative mr-10">
                    <p><svg fill="#000000" height="24px" width="24px" version="1.1" id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 217.762 217.762" xml:space="preserve">
                            <path d="M108.881,5.334C48.844,5.334,0,45.339,0,94.512c0,28.976,16.84,55.715,45.332,72.454
            c-3.953,18.48-12.812,31.448-12.909,31.588l-9.685,13.873l16.798-2.153c1.935-0.249,47.001-6.222,79.122-26.942
            c26.378-1.92,50.877-11.597,69.181-27.364c19.296-16.623,29.923-38.448,29.923-61.455C217.762,45.339,168.918,5.334,108.881,5.334z
            M115.762,168.489l-2.049,0.117l-1.704,1.145c-18.679,12.548-43.685,19.509-59.416,22.913c3.3-7.377,6.768-17.184,8.499-28.506
            l0.809-5.292l-4.741-2.485C30.761,142.547,15,119.42,15,94.512c0-40.901,42.115-74.178,93.881-74.178s93.881,33.276,93.881,74.178
            C202.762,133.194,164.547,165.688,115.762,168.489z" />
                        </svg></p>
                    <p class="textSize absolute z-10 -top-2 left-4 text-white px-1  rounded-full bg-[#889ede]"> {{
                        props.numcom ? props.numcom : 0 }} </p>

                </div>



            </div>

        </div>
    </div>

</template>

<style scoped>
.textSize {
    font-size: 12px;
}

.link-preview {
    height: 100%;
}
</style>
