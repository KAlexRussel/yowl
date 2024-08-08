<script setup>
import ButtonComponent from './ButtonComponent.vue';
import { ref } from 'vue';
import { useCommentStore } from '@/stores/CommentStore';
const user = JSON.parse(localStorage.getItem('user'))

const props = defineProps(['id'])
const comments = useCommentStore()
const content = ref('')

const show = ref(false)

const handleSave = () => {
    if (content.value.length > 0) {
        comments.createcomments(content.value, props.id, user.user.name)
        comments.createCommentStore(content.value, props.id, user.user.name)
        content.value = ''
        show.value = false
    }

}

const handleCancel = () => {
    content.value = ''
    show.value = false
}



</script>

<template>
    <div class="flex gap-x-3 w-full mt-5 items-center">
        <div class="flex gap-x-3 items-center cursor-pointer" @click="show = true" v-if="!show">
            <p class="shadow-inner cursor-pointer">
                <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-204.000000, -255.000000)"
                            fill="#000000">
                            <path
                                d="M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 L228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 L220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 L220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 L212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 L220,267 Z"
                                id="comment-3" sketch:type="MSShapeGroup">

                            </path>
                        </g>
                    </g>
                </svg>
            </p>
            <p v-if="!show"
                class="font-semibold text-base border border-2 border-gray-300 px-6 py-3 text-[#2C53C6] rounded-3xl">Add
                a comment</p>

        </div>

        <div class="flex flex-col gap-y-3 w-full" v-if="show">
            <form @submit.stop.prevent >
                <textarea
                    class="w-full pt-5 pl-7 pb-1 border border-gray-300 rounded-2xl outline-none border-2 focus:border-gray-200"
                    placeholder="Enter your comment here..." v-model.trim="content"></textarea>
                <div class="flex justify-start gap-x-4">
                    <ButtonComponent css="bg-[#2C53C6] text-white"  type="submit"  @click="handleSave">
                        save
                    </ButtonComponent>
                    <ButtonComponent css="bg-red-500 text-white" @click="handleCancel">
                        cancel
                    </ButtonComponent>
                </div>
            </form>
        </div>

    </div>
</template>
