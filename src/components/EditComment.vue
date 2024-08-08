<script setup>
import { ref } from 'vue';

const props = defineProps(['content', 'id'])
const contents = ref('');
contents.value = props.content



</script>

<template>

  <div>
    <form @submit.prevent.stop>
      <textarea
        class="w-full py-3 px-3 h-16 border border-gray-300 rounded-2xl outline-none border-2 text-gray-600 focus:border-gray-200"
        placeholder="Edit your comment here..." v-model.trim="contents"></textarea>
      <div>
        <div class="flex justify-end gap-x-4 mt-2">
          <p @click="$emit('edit', contents)" class="cursor-pointer">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12L9 18L21 6" stroke="#000000" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>

          </p>
          <p @click="$emit('close')" class="cursor-pointer">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Menu / Close_SM">
                <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>

          </p>


        </div>


      </div>

    </form>

  </div>


</template>
