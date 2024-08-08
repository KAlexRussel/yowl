<script setup>
//import ButtonComponent from '@/components/ButtonComponent.vue';
import { onBeforeMount, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import {register  } from '@/api/AuthentificateApi';
import moment from 'moment'



let router = useRouter()
let username = ref("")
let email = ref("")
let date = ref("")
let age = ref()
let password = ref("")
let confPassword = ref("")
let errors = ref([])
const disabled = ref(false)

onBeforeMount(() => {
    if (localStorage.getItem("user")) {
        router.push("/comments")
    }
})

watch(date, (value) => {
    if (birthDate(value) < 13 || birthDate(value) > 35) {
        errors.value['age'] = "You must be between 13 and 35 years old to access this platform."
    } else {
        errors.value['age'] = ""
    }
})

function birthDate(date) {
    let format = moment(date, "YYYYMMDD").format("MM/DD/YYYY")
    let birth = new Date(format);
    let today = new Date();
    age.value = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age.value--;
    }
    return age.value;
}


watch(username, (value) => {
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

watch(confPassword, (value) => {
    verifyConfPassword(value, password.value)
})

function verifyConfPassword(value, pwd) {
    if (value !== pwd) {
        errors.value['confPwd'] = "password and confirm password must be the same."
    } else {
        errors.value['confPwd'] = ''
    }
}


async function handleSubmit() {

    if (username.value.length == 0 && date.value.length == 0 && email.value.length == 0 && password.value.length == 0) {
        errors.value['password'] = "Invalid password"
        errors.value['email'] = "Invalid email"
        errors.value['username'] = "Invalid name"
        errors.value['age'] = "Invalid age"
        errors.value['confPwd'] = "Invalid Confirm password "
    } else if (username.value.length == 0 || username.value.trim() == '') {
        errors.value['username'] = "Invalid username"
    } else if (date.value.length == 0 || date.value.trim() == '') {
        errors.value['age'] = "Invalid age"
    } else if (email.value.length == 0 || email.value.trim() == '') {
        errors.value['email'] = "Invalid email"
    } else if (password.value.length == 0 || password.value.trim() == '') {
        errors.value['password'] = "Invalid password"
    }

    if (!errors.value.username && !errors.value.age && !errors.value.email && !errors.value.password && !errors.value.confPwd && username.value.length > 0 && email.value.length > 0 && password.value.length > 0 && password.value === confPassword.value) {
        register(username.value, email.value, birthDate(date.value), password.value)
        router.push("/login")
    } else {
        warnDisabled()
    }

}



function warnDisabled() {
    disabled.value = true
    setTimeout(() => {
        disabled.value = false
    }, 1500)
}

</script>

<template>
    <div class="flex flex-col gap-y-3 mx-4 px-5 py-5">
        <div class="mb-4 justify-center flex  before:flex-1 after:mt-0.5 after:flex-1 ">
            <img src='@/assets/gunBleu.png' alt="agun logo" class=" ">
        </div>
        <div class="flex justify-center items-center w-full">
            <div class="w-full flex flex-col justify-center items-center">
                <p class="text-4xl font-bold text-center mb-8 opacity-80">
                    SIGN UP

                </p>
                <form @submit.prevent.stop class="flex flex-col w-full gap-y-5 max-w-md ">

                    <p class="text-red-500 text-sm italic" v-show="errors['username'] !== ''"> {{ errors['username'] }}
                    </p>
                    <input type="text" v-model="username"
                        class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#E5E5E5] placeholder:text-base "
                        placeholder="Username*">

                    <p class="text-red-500 text-sm italic" v-show="errors['age'] !== ''"> {{ errors['age'] }} </p>
                    <input type="date" v-model="date"
                        class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#E5E5E5] placeholder:text-base "
                        placeholder="Date of Birth*">

                    <p class="text-red-500 text-sm italic" v-show="errors['email'] !== ''"> {{ errors['email'] }} </p>
                    <input type="email" v-model="email"
                        class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#E5E5E5] placeholder:text-base "
                        placeholder="Email*">

                    <p class="text-red-500 text-sm italic" v-show="errors['password'] !== ''"> {{ errors['password'] }}
                    </p>
                    <input type="password" v-model="password"
                        class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#E5E5E5] placeholder:text-base "
                        placeholder="Password*">
                    <!-- <svg @click="show = !show" xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                        class="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                        <path
                            d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                            data-original="#000000"></path>
                    </svg> -->

                    <p class="text-red-500 text-sm italic" v-show="errors['confPwd'] !== ''"> {{ errors['confPwd'] }}
                    </p>
                    <input type="password" v-model="confPassword"
                        class="w-full outline-0 border border-gray-300 px-4 py-3 rounded-lg bg-[#E5E5E5] placeholder:text-base "
                        placeholder="Confirm Password*">
                    <div class="flex justify-start">
                        <p class="text-sm "> Already have an account ?
                            <router-link to="/login">
                                <span class="text-[#2C53C6] ml-1">
                                    LogIn</span>
                            </router-link>
                        </p>

                    </div>

                    <div class="flex justify-center">

                        <button :class="{ shake: disabled }"
                            class="bg-[#2C53C6] rounded-full text-white text-xl w-2/3 py-3" type="submit"
                            @click="handleSubmit()">
                            Sign Up
                        </button>

                    </div>


                </form>

            </div>


        </div>

    </div>

</template>

<style scoped>
.shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

@keyframes shake {

    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
</style>