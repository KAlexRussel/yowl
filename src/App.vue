<script setup>
import { usePostStore } from '@/stores/PostStore';
import { useCommentStore } from '@/stores/CommentStore';
import { useCategoriesStore } from './stores/CategoriesStore';


const categories = useCategoriesStore()
const posts = usePostStore()
const comments = useCommentStore()
categories.getallcategories()
comments.getallcomment()
posts.getallpost()

</script>

<template>

  <RouterView />
</template>

<style scoped></style>
