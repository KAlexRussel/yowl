<script setup>
import { ref } from 'vue';
import DeleteModal from './DeleteModal.vue';
import EditComment from './EditComment.vue';
import { useCommentStore } from '@/stores/CommentStore';
import LoaderCom from './LoaderCom.vue';

const comments = useCommentStore()
const user = JSON.parse(localStorage.getItem('user'))
const props = defineProps(['content', 'username', 'date', 'css', 'id'])

const showEdit = ref(false)
const handleEdit = (contents) => {
  if (contents.length > 0) {
    comments.editComment(contents, props.id)
    comments.updatecomments(contents, props.id)
    showEdit.value = false
  }

}



</script>

<template>
  <div :class="`rounded-2xl shadow-lg px-5 pb-2  pt-3 border border-2 border-gray-300 mt-3 ${props.css}`">
    <div class="flex flex-col gap-y-1 " v-if="!showEdit">
      <p class="text-sm font-medium text-[#2C53C6]">{{ props.username }}</p>

      <p class="textSize">{{ props.content.length < 200 ? props.content : props.content.slice(0, 200) + '...' }}</p>
          <p class="textSize text-gray-400 "> <i> {{ comments.getDate(props.date) }} </i></p>

          <div class="flex justify-start  items-center gap-x-4" v-if="!comments.loader">

            <p @click="showEdit = true" class="flex items-center gap-x-2 cursor-pointer" v-if="user.user.name == props.username">
              <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                  stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                  stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="text-sm lowercase">Edit</span>
            </p>
            <div class="mx-3" v-if="user.user.name == props.username">
              <DeleteModal size="14" message="Delete" :idCom="props.id" />

            </div>


          </div>

          <div v-else>

            <LoaderCom />

          </div>
    </div>

    <div v-else>
      <EditComment @close="showEdit = false" :id="props.id" :content="props.content" @edit="handleEdit"/>
    </div>


  </div>


</template>

<style scoped>
.textSize {
  font-size: 13px;
}
</style>
