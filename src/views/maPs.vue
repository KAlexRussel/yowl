<script setup>
import NavCard from '@/components/NavCard.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import PostComment from '@/components/PostComment.vue';
import CommentComponent from '@/components/CommentComponent.vue';
import AddComment from '@/components/AddComment.vue';

</script>

<template>
  <NavCard />
  <div class="flex justify-center my-5 overflow-auto">
    <div class="w-1/2 flex flex-col gap-y-4">
      <PostComment url="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        content="Pellentesque accumsan auctor arcu a venenatis. Quisque ultrices, tellus  non hendrerit lacinia, elit purus ullamcorper justo, in fringilla velit  leo ac sem. Mauris id congue magna. Proin ut libero eget mauris porta  convallis vel sed nisi. Class aptent taciti sociosqu ad litora torquent  per conubia nostra, per inceptos himenaeos. Curabitur ullamcorper  volutpat lobortis. Aenean non mi in tellus pharetra sagittis. Ut  sagittis gravida nunc pellentesque convallis."
        date="" author="alex" />
      <AddComment />
      <div class="max-h-64 h-full overflow-y-auto">
        <div v-for="n in 4" :key="n.id" class="flex flex-col gap-y-3">
          <CommentComponent username="alex"
            content="ellentesque accumsan auctor arcu a verices, rerit lacinia, elit purus ullamcorper justo, in
                    fringilla velit . Mauris interdum efficitur tortor non dignissim. Nulla vitae facilisis leo,...." />
        </div>

      </div>


    </div>
  </div>
  <FooterComponent />
</template>
