<script setup>
import { ref } from 'vue';
import PostCard from './PostCard.vue';
import { usePostStore } from '@/stores/PostStore';
const post_u = ref([]);
const posts = usePostStore()

const props = defineProps(['user_id'])

posts.getallpost()
post_u.value = posts.postUser(props.user_id)






</script>

<template>
    <div class="max-h-screen overflow-y-auto">
        <div v-if="props.user_id"
            class="flex flex-col gap-y-5 md:p-8 rounded-lg  md:shadow-xl md:bg-white w-full h-full">
            <div v-if="post_u.length > 0" class="flex flex-col gap-y-5 ">
                <div v-for="post in post_u" :key="post.id">

                    <PostCard :url="post.url" :content="post.content" :username="post.users.name" :id="post.id"
                        :numcom="post.comments_count" v-if="post.user_id == props.user_id" />
                </div>

            </div>
            <div v-else class="flex justify-center">
                <p class="text-red-600 font-bold text-lg">
                    Make Your First comment
                </p>
                <p>
                    <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                            fill="#000000" />
                    </svg>
                </p>

            </div>




        </div>
        <div v-else class="flex flex-col gap-y-5 md:p-8 rounded-lg  md:shadow-xl md:bg-white w-full h-full">
            <div v-for="post in posts.posts" :key="post.id">

                <PostCard :url="post.url" :content="post.content" :username="post.users.name" :id="post.id"
                    :numcom="post.comments_count" />
            </div>


        </div>

    </div>
</template>
