<script setup>
import { ref,watch } from 'vue';
import ButtonComponent from './ButtonComponent.vue';
import DeleteModal from './DeleteModal.vue';
const props = defineProps(['url', 'content', 'author', 'date', 'id'])
const showEdit = ref(false)
import { usePostStore } from '@/stores/PostStore';
import { useCategoriesStore } from '@/stores/CategoriesStore';
import LinkPreview from '@ashwamegh/vue-link-preview';
import LoaderCom from './LoaderCom.vue';
import imgSrc from '@/assets/error-icon-32.png';

const user = JSON.parse(localStorage.getItem('user'))

const categories = useCategoriesStore()
const urls = ref('')
const error = ref('')
const contents = ref('')
const category = ref('')
const posts = usePostStore()
contents.value = props.content
urls.value = props.url

watch(urls, (value => {
    value = value.trim()
    verifyUrl(value)

}))


const verifyUrl = (value) => {
    const letter = "^(http|https)://[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(/[a-zA-Z0-9-._~:?#@!$&'()*+,;=]*)*$"

    if (value.match(letter) === null) {
        error.value = " Invalid url"
    }
    else {
        error.value = ''
    }

}
const handleEdit = () => {
    if (contents.value.length > 0 && urls.value.length > 0 && !error.value) {
        posts.editPost(urls.value, contents.value, props.id, category)
        posts.updatespost(urls.value, contents.value, props.id, category)
        contents.value = props.content
        urls.value = props.url

        showEdit.value = false
    }
}

</script>

<template>
    <div class="rounded-xl shadow-lg border border-2 border-gray-300 w-full">
        <div v-if="!showEdit" class="rounded-t-xl">
            <div class="w-full relative rounded-t-xl">
                <p class="absolute z-10 top-15 mt-2 right-2 cursor-pointer hover:bg-gray-300 hover:rounded-full p-2 "
                    @click="showEdit = true" v-if="user.user.name == props.author"><svg width="23px" height="23px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                            stroke="#2C53C6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                            stroke="#2C53C6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></p>
                <LinkPreview :url="props.url" >
                    <template v-slot:loader>
                        <a :href="props.url" class="flex justify-center items-center h-64 min-h-64 w-full">
                            loader...
                            <LoaderCom />
                        </a>
                    </template>
                    <template v-slot:default="preview">
                        <a :href="props.url" target="_blank" class="h-64 w-full rounded-t-2xl  ">
                            <img class="h-64 w-full rounded-t-2xl" :src="preview.img ? preview.img : imgSrc"
                                :alt="preview.title" />
                            <!--  <p>Domain: {{ preview.domain }}</p> -->
                            <p class="textSize mx-2 mt-2 text-center">Title: {{ preview.title }}</p>
                            <!-- <p class="text-sm">Description: {{ preview.description }}</p>  -->
                        </a>
                    </template>
                </LinkPreview>

            </div>
            <div class="flex flex-col gap-y-5 px-6 py-4">
                <a :href="props.url" class="text-base font-bold underline text-center">
                    view link
                </a>
                <div class="flex justify-end items-center">
                    <div class="flex items-center gap-x-3">
                        <div class="mb-2">
                            <DeleteModal size="23" :colors="`rounded-full p-2 hover:bg-gray-300`" :id-post="props.id"
                                redirect="redirect" v-if="user.user.name == props.author" />
                        </div>

                    </div>
                </div>

                <p class="text-base text-gray-700  break-all">
                    {{ props.content }}

                </p>

                <div class="flex justify-between items-center text-gray-400">
                    <p class="text-sm">
                        By <span class="text-[#2C53C6]">{{ props.author }}</span>

                    </p>
                    <p class="text-sm">
                        <i>
                            {{ props.date }}

                        </i>


                    </p>

                </div>
            </div>

        </div>
        <div v-else>
            <form @submit.stop.prevent class="shadow-lg rounded-3xl flex flex-col pt-8 w-full">
                <div class="flex gap-x-3 border-b py-6 px-8 items-center">

                    <label class="font-semibold text-base w-1/3"> Link:</label>
                    <div class="w-full ">
                        <p class="text-red text-sm">{{ error }}</p>
                    <input type="text"
                        class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 "
                        v-model.trim="urls">

                    </div>
                   
                </div>
                <div class="flex gap-x-3 border-b py-6 px-8 items-center">
                    <label class="font-semibold text-base w-1/3"> Category:</label>
                    <select v-model="category"
                        class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 focus:border-2 focus:border-gray-200">

                        <option value="" selected disabled>
                            Choose
                        </option>
                        <option v-for="categori in categories.categories" :value="categori.id" :key="categori.id">
                            {{ categori.name }}
                        </option>


                    </select>
                </div>
                <div class="flex gap-x-3 border-b py-6 px-8 items-start">
                    <label class="font-semibold text-base w-1/3"> Content:</label>
                    <textarea
                        class=" outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 w-full h-20"
                        v-model.trim="contents">

            </textarea>
                </div>
                <div class="flex justify-end gap-x-6 px-8 py-6 h-full">
                    <ButtonComponent css="bg-[#FF3B30] text-white text-sm" @click="showEdit = false"> Discard
                    </ButtonComponent>
                    <ButtonComponent css="bg-[#2C53C6] text-white text-sm" @click="handleEdit" type="submit"> Edit
                    </ButtonComponent>
                </div>
            </form>


        </div>

    </div>

</template>
