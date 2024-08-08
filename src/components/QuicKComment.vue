<script setup>
import ButtonComponent from './ButtonComponent.vue';
import { ref ,watch} from 'vue';
import { usePostStore } from '@/stores/PostStore';

const user = JSON.parse(localStorage.getItem('user'))
const posts = usePostStore();
const error = ref('')

const content = ref('')
const url = ref('')

watch(url, (value => {
    value = value.trim()
    verifyUrl(value)

}))


const verifyUrl = (value) =>{
 const letter = "^(http|https)://[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(/[a-zA-Z0-9-._~:?#@!$&'()*+,;=]*)*$"

    if (value.match(letter) === null) {
        error.value = " Invalid url"
    } 
    else {
        error.value= ''
    }

}

const handleSubmit = () => {
    if ((content.value.length > 0) && (url.value.length > 0 && !error.value )) {
        posts.createposts(url.value, user.user.id, content.value)
        posts.createPostStore(url.value, user.user.id, content.value)
        content.value = ''
        url.value = ''
       
       
    }
}
</script>

<template>
    <div class="bg-white rounded-lg px-3 ">
        <div class="flex justify-end ">
            <p @click="$emit('close')" class="cursor-pointer mt-2">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu / Close_SM">
                        <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>

            </p>
        </div>
        <form @submit.stop.prevent class="flex flex-col gap-y-3 w-full h-full py-4 rounded-lg">
            <div class="flex flex-col gap-y-4 border-b pb-4 px-4">
                <label class="font-semibold">Link :</label>
                <p class="text-red text-sm">{{ error  }}</p>
                <input type="text"
                    class="py-3 px-3 bg-[#D9D9D938] focus:border-2 focus:border-gray-200  rounded-2xl outline-0"
                    placeholder="link" v-model.trim="url">
            </div>
            <div class="flex flex-col gap-y-4 border-b pb-4 px-4">
                <label class="font-semibold">Content :</label>
                <input type="text"
                    class="py-3 px-3 bg-[#D9D9D938]  focus:border-2 focus:border-gray-200 rounded-2xl outline-0 "
                    placeholder="enter a comment" v-model.trim="content">
            </div>

            <div class="flex justify-end mr-2">
                <ButtonComponent css="bg-[#2C53C6] text-white" type="submit" @click="handleSubmit">
                    comment

                </ButtonComponent>
            </div>
        </form>
    </div>
</template>
