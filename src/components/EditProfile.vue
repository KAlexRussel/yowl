<script setup>
import { ref , watch} from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { editprofile  } from '@/api/userProfile'

const user = JSON.parse(localStorage.getItem('user'))
const name = ref(user.user.name)
const email = ref(user.user.email)
const password  = ref()
const newpassword= ref()
const errors = ref([])

let url = ref(null)

const onFileChange = (e) => {
    const file = e.target.files[0];
    url.value = URL.createObjectURL(file);
}



watch(name, (value) => {
    verifyUsername(value)
})

function verifyUsername(value) {
    const letters = /^[A-Za-z0-9'_\- ]+$/;
    if (value.length < 3 || value.length == 0) {
        errors.value['username'] = "name too short"
    } else if (value.match(letters) === null) {
        errors.value['username'] = " Invalid name"
    } else if (value.length > 20) {
        errors.value['username'] = " name too long"
    }
    else {
        errors.value['username'] = ''
    }
}

watch(email, (value) => {
    verifyEmail(value)
})


function verifyEmail(value) {
    const letters = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.length == 0) {
        errors.value['email'] = "email to short"
    } else if (value.match(letters) === null) {
        errors.value['email'] = " invalid email"
    }
    else {
        errors.value['email'] = ''
    }
}

watch(password, (value) => {
    verifyPassword(value)

})

function verifyPassword(value) {
    const letters = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (value.length < 8 || value.length == 0) {
        errors.value['password'] = "password too short"
    } else if (value.match(letters) === null) {
        errors.value['password'] = "password must have a letter,number and special character"
    } else {
        errors.value['password'] = ''
        errors.value['confPwd'] = ''
    }
}

watch(newpassword, (value) => {
    verifyConfPassword(value,password.value)

})

function verifyConfPassword(value,pwd) {
    if (value !== pwd) {
        errors.value['confPwd'] = "password and confirm password must be the same."
    } else {
        errors.value['confPwd'] = ''
    }
}



const handleEdit = () => {
    editprofile(name.value, email.value, password.value)
}
</script>

<template>
    <div class="w-11/12 lg:w-4/5 md:w-4/5  my-8 px-4 mx-auto ">
        <form @submit.stop.prevent  class="flex pt-3 lg:flex-row items-center lg:items-start  flex-col mx-auto mt-8 gap-20">
            <div class="space-y-5 flex lg:flex-col sm:space-y-5">
                <img id="preview" v-if="url"
                    class="object-cover w-40 h-40 p-1 rounded-full ring-4 bg-white ring-blue-400"
                    :src="url" alt="User Picture">
                <img v-else id="preview"
                    class="object-cover w-40 h-40 p-1 rounded-full ring-4 bg-white ring-blue-400"
                    src="@/assets/cercle-bleu.png" alt="User Picture">
                    <div class="justify-center mx-5 ">
                        <div class="rounded-3xl px-5 py-2 bg-[#2C53C6] text-center hover:bg-gray-500 text-white text-sm">
                            <label for="customPhoto">Change photo</label>
                            <input type="file" @change="onFileChange" class="form-control d-none"
                                id="customPhoto" />
                        </div>
                    </div>
            </div>
            <div
            class="lg:w-2/3 sm:w-full items-center text-[#202142] border rounded-xl lg:p-4 bg-white shadow-md">
            <div class="flex gap-x-3 border-b py-4 px-5 items-center">
                <label class="font-semibold text-base w-1/3"> Username:</label>
                <input type="text" v-model="name"
                    class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 focus:border-2 focus:border-gray-200 ">
            </div>
            <div class="flex gap-x-3 border-b py-4 px-5 items-center">
                <label class="font-semibold text-base w-1/3"> Email:</label>
                <input type="email" v-model="email"
                    class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 focus:border-2 focus:border-gray-200 ">
            </div>
            <div class="flex gap-x-3 border-b py-4 px-5 items-center">
                <label class="font-semibold text-base w-1/3"> Password:</label>
                <input type="password"
                    class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 focus:border-2 focus:border-gray-200 " v-model="password">
            </div>
            <div class="flex gap-x-3 border-b py-4 px-5 items-center">
                <label class="font-semibold text-base w-1/3"> New Password:</label>
                <input type="password"
                    class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 focus:border-2 focus:border-gray-200 " v-model="newpassword">
            </div>
            <div class="flex justify-end gap-x-6 px-8 py-6">
                <ButtonComponent css="bg-[#2C53C6] text-white text-sm" @click="handleEdit()"> Save </ButtonComponent>
            </div>
        </div>  
    </form>
    </div>
</template>