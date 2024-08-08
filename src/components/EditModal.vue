<script setup>
import { ref, watch } from 'vue';
import { usePostStore } from '@/stores/PostStore';
import { useCategoriesStore } from '@/stores/CategoriesStore';

const categories = useCategoriesStore()
const props = defineProps(['size', 'idPost', 'contents', 'urls'])
const url = ref('')
const content = ref('')
const category = ref('')
const posts = usePostStore()
content.value = props.contents
url.value = props.urls
const error = ref('')
const go = ref(false)

watch(url, (value => {
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

    if ((content.value.length > 0) && (url.value.length > 0 && !error.value)) {
        posts.editPost(url.value, content.value, props.idPost)

        posts.updatespost(url.value, content.value, props.idPost)

        go.value = false
    }
}

</script>

<template>
    <v-dialog max-width="500" v-model="go">

        <v-card class="pt-4 rounded-3xl">
            <form @submit.prevent.stop class=" flex flex-col pt-8 w-full">
                <div class="flex gap-x-3 border-b py-6 px-8 items-center">
                    <label class="font-semibold text-base w-1/3"> Link:</label>
                    <div class="w-full">
                        <p class="text-red text-sm">{{ error }}</p>
                        <input type="text"
                            class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 "
                            v-model.trim="url">

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
                        v-model.trim="content">

                    </textarea>
                </div>

            </form>

            <v-card-actions class="mx-5 my-4 ">
                <v-spacer></v-spacer>
                <v-btn text="Discard" @click="go = false" class="bg-[#FF3B30] text-white rounded-xl"></v-btn>
                <v-btn text="Edit" @click="handleEdit" class="rounded-xl bg-[#2C53C6] text-white"></v-btn>
            </v-card-actions>


        </v-card>

    </v-dialog>

    <v-btn @click="go = !go" density="compact" icon="mdi-plus" class="p-0" :append-icon="null">
        <p class="cursor-pointer rounded-full  hover:p-2 hover:bg-gray-300"><svg :width="`12`" :height="`12`"
                viewBox="0 0 24 24" id="_24x24_On_Light_Edit" data-name="24x24/On Light/Edit"
                xmlns="http://www.w3.org/2000/svg">
                <rect id="view-box" width="24" height="24" fill="none" />
                <path id="Shape"
                    d="M.75,17.5A.751.751,0,0,1,0,16.75V12.569a.755.755,0,0,1,.22-.53L11.461.8a2.72,2.72,0,0,1,3.848,0L16.7,2.191a2.72,2.72,0,0,1,0,3.848L5.462,17.28a.747.747,0,0,1-.531.22ZM1.5,12.879V16h3.12l7.91-7.91L9.41,4.97ZM13.591,7.03l2.051-2.051a1.223,1.223,0,0,0,0-1.727L14.249,1.858a1.222,1.222,0,0,0-1.727,0L10.47,3.91Z"
                    transform="translate(3.25 3.25)" fill="#141124" />
            </svg>
        </p>

    </v-btn>


</template>

<style scoped>
.v-btn--variant-elevated {
    box-shadow: none !important;
}

.v-card {
    border-radius: 16px !important;
}
</style>
