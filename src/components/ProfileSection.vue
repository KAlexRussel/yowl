<script setup>
///import ButtonComponent from './ButtonComponent.vue';

const user = JSON.parse(localStorage.getItem('user'))

</script>

<template>
    <div class="w-11/12 lg:w-4/5 md:w-4/5  my-8 px-4 mx-auto ">
        <div class="flex pt-3 lg:flex-row items-center lg:items-start  flex-col mx-auto mt-8 gap-20">
            <div class="flex flex-col space-y-5 sm:flex-row sm:space-y-0">
                <img class="object-cover avatar w-40 h-40 p-1 rounded-full ring-4 bg-white ring-blue-400" src='@/assets/cercle-bleu.png'
                    alt="User Picture">
            </div>
            <div
            class="lg:w-2/3 w-full items-center text-[#202142] border rounded-xl lg:p-4 bg-white shadow-md">
            <div class="flex gap-x-3 border-b py-4 px-5 items-center">
                <label class="font-semibold text-base w-1/3"> Username:</label>
                <div  v-html="user.user.name"
                    class="w-full h-12 outline-0 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 focus:border-2 focus:border-gray-200 " ></div>
            </div>
            <div class="flex gap-x-3 border-b py-4 px-5 items-center">
                <label class="font-semibold text-base w-1/3"> Email:</label>
                <div v-html="user.user.email"
                    class="w-full outline-0 h-12 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-12 focus:border-2 focus:border-gray-200 " ></div>
            </div>
            <div class="flex gap-x-3 border-b py-4 px-5 items-center">
                <label class="font-semibold text-base w-1/3"> Password:</label>
                <div  
                    class="w-full outline-0 h-12 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 focus:border-2 focus:border-gray-200 text-lg font-bold " >*********</div>
            </div>
            <div class="flex gap-x-3 border-b py-4 px-5 items-center">
                <label class="font-semibold text-base w-1/3"> Age:</label>
                <div v-html="user.user.age"
                    class="w-full h-12 outline-0 px-4 py-3 rounded-lg bg-[#D9D9D938] opacity-22 focus:border-2 focus:border-gray-200 " ></div>
            </div>
            

            <div class="flex justify-end gap-x-6 px-8 py-6">
                <!-- <RouterLink to="/edituprofile">
                    <ButtonComponent css="bg-[#2C53C6] text-white text-sm"> Edit
                    </ButtonComponent>
                </RouterLink>  -->
            </div>
        </div>  
        </div>
    </div>
</template>

<style scoped>
@keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}

.avatar {
	transform: translatey(0px);
	animation: float 4s ease-in-out infinite;
}


</style>