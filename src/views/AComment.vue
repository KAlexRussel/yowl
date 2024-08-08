<script setup>
import NavCard from '@/components/NavCard.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import PostComment from '@/components/PostComment.vue';
import CommentComponent from '@/components/CommentComponent.vue';
import AddComment from '@/components/AddComment.vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';
import { useCommentStore } from '@/stores/CommentStore';

const route = useRoute()
const posts = usePostStore();
const post = posts.getOnePost(route.params.id)
const comments = useCommentStore();

</script>

<template>
  <NavCard />
  <div class="flex flex-col md:flex-row justify-between  items-start md:my-1 gap-x-20 mx-5 mt-5">
    <div class=" md:w-1/2 flex flex-col gap-y-4 mt-3 mb-3">
      <PostComment :url="post.url" :content="post.content" :date="posts.getDate(post.created_at)"
        :author="post.users.name" :id="post.id"/>
    </div>
    <div class="md:w-1/2 flex flex-col gap-y-3">

      <AddComment :id="post.id" />
      <div class="max-h-svh h-full overflow-y-auto mb-5 px-3">
        <div v-for="comment in comments.comments" :key="comment.id" class="flex flex-col gap-y-3">
          <div class="flex justify-start" v-if="!comment.parent_id && comment.post_id == post.id">
            <CommentComponent :username="comment.username" css="w-full" :content="comment.content" :id="comment.id" :date="comment.created_at" :post_id = "post.id" />

          </div>

        </div>

      </div>

    </div>

  </div>
  <FooterComponent />
</template>
