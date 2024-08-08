<template>
    <div class=" bg-white lg:pt-5 h-20 lg:px-5 md:px-5 fixed bottom-0 mt-12 md:relative  z-10 w-full md:w-56 border-r ">
        <ul class="list-reset flex lg:flex-col md:flex-col  sm:flex-row pt-3 md:py-3 px-1 md:px-2 justify-between md:text-left">
            
            <li class="mr-3 flex-1 lg:mb-2">
                <RouterLink to= "/edituprofile" class="block p-1 md:py-3 pl-1 align-middle text-center text-white no-underline hover:text-white hover:bg-gray-300 rounded-full hover:border-purple-600">
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-800 md:text-gray-800 block md:inline-block">Edit Profile</span>
                </RouterLink>
            </li>
            <li class="mr-3 flex-1 lg:mb-2">
                <RouterLink to= "/userprofile" class="block p-1 md:py-3 pl-1 align-middle text-center text-white no-underline hover:text-white border hover:bg-gray-300 rounded-full">
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-800 md:text-gray-800 block md:inline-block">My Profile</span>
                </RouterLink>
            </li>
        </ul>
    </div>
          
</template>