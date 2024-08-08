<template>
    <div class="bg-[#2C53C6] lg:pt-5 h-20 lg:px-3 md:px-5 fixed bottom-0 mt-12 md:relative  z-10 w-full md:w-56 ">
        <ul class="list-reset flex lg:flex-col md:flex-col pt-3 md:py-3 px-1 md:px-2 justify-between md:text-left">
            <li class="mr-3 flex-1 lg:mb-2">
                <RouterLink to="/editprofile" class="block flex gap-3 py-1 md:py-3 pl-1 align-middle text-white no-underline hover:border-b-2 hover:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                      </svg>                      
                    <span class="pb-1 hidden lg:block md:pb-0 text-xs md:text-sm text-white md:text-gray-200 block md:inline-block">Edit Profile</span>
                </RouterLink>
            </li>
            <li class="mr-3 flex-1 lg:mb-2">
                <RouterLink to="/profile" class="block py-1 flex gap-3 md:py-3 pl-1 align-middle text-white no-underline hover:border-b-2 hover:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      
                    <span class="pb-1 hidden lg:block md:pb-0 text-xs md:text-sm text-white md:text-white block md:inline-block">My Profile</span>
                </RouterLink>
            </li>
            <li class="mr-3 flex-1 lg:mb-1">
                <RouterLink to= "/dashboard" class="block py-1 flex gap-3 md:py-3 pl-1 align-middle text-white no-underline hover:border-b-2 hover:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                      </svg>
                      
                    <span class="pb-1 hidden lg:block md:pb-0 text-xs md:text-sm text-white md:text-gray-200 block md:inline-block">Dashboard</span>
                </RouterLink>
            </li>
            <li class="mr-3 flex-1 lg:mb-2">
                <RouterLink to="/manageCat" class="block flex gap-3 py-1 md:py-3 pl-1 align-middle text-white no-underline hover:border-b-2 hover:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                      </svg>
                      
                    <span class="pb-1 hidden lg:block md:pb-0 text-xs md:text-sm text-white md:text-gray-200 block md:inline-block">Categories</span>
                </RouterLink>
            </li>
            <li class="mr-3 flex-1 lg:mb-2">
                <RouterLink to="/manageComs" class="block flex gap-3 py-1 md:py-3 pl-1 align-middle text-white no-underline hover:border-b-2 hover:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                      </svg>                      
                    <span class="pb-1 hidden lg:block md:pb-0 text-xs md:text-sm text-white md:text-gray-200 block md:inline-block">All Comments</span>
                </RouterLink>
            </li>
            <li class="mr-3 flex-1 lg:mb-2">
                <RouterLink to="/manageUsers" class="block flex gap-3 py-1 md:py-3 pl-1 align-middle text-white no-underline hover:border-b-2 hover:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>                                         
                    <span class="pb-1 hidden lg:block md:pb-0 text-xs md:text-sm text-white md:text-gray-200 block md:inline-block">All Users</span>
                </RouterLink>
            </li>
        </ul>
    </div>
          
</template>