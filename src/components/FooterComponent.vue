<script setup>
const date = new Date();
const year = date.getFullYear();
</script>

<template>
    <div class="flex flex-col gap-y-3 bg-[#8C9AA4]">
        <div class="flex flex-col md:flex-row gap-y-3 justify-center py-4 px-8 gap-x-9 items-center w-full">
            <div>
                <img src="../assets/logoemau.png" alt="emau logo">
            </div>
            <p class="md:leading-10 w-4/6 flex flex-col gap-y-7 text-white md:text-base">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras mollis magna velit,
                a lobortis orci
                condimentum ac. Nunc at orci ac orci imperdiet finibus at id odio. Vivamus odio urna, suscipit
                in neque at, dignissim.
            </p>
        </div>
        <div class="flex justify-center gap-x-9 ">
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px">
                    <path
                        d="M 16 4 C 9.3844276 4 4 9.3844276 4 16 C 4 22.615572 9.3844276 28 16 28 C 22.615572 28 28 22.615572 28 16 C 28 9.3844276 22.615572 4 16 4 z M 16 6 C 21.534692 6 26 10.465308 26 16 C 26 21.027386 22.311682 25.161277 17.488281 25.878906 L 17.488281 18.916016 L 20.335938 18.916016 L 20.783203 16.023438 L 17.488281 16.023438 L 17.488281 14.443359 C 17.488281 13.242359 17.882859 12.175781 19.005859 12.175781 L 20.810547 12.175781 L 20.810547 9.6523438 C 20.493547 9.6093438 19.822688 9.515625 18.554688 9.515625 C 15.906688 9.515625 14.355469 10.913609 14.355469 14.099609 L 14.355469 16.023438 L 11.632812 16.023438 L 11.632812 18.916016 L 14.355469 18.916016 L 14.355469 25.853516 C 9.6088556 25.070647 6 20.973047 6 16 C 6 10.465308 10.465308 6 16 6 z" />
                </svg></p>
            <p>

                <svg fill="#000000" width="32px" height="32px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin" class="jam jam-linkedin-circle">
                    <path
                        d='M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z' />
                    <path
                        d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z' />
                </svg>
            </p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30px" height="30px">
                    <path
                        d="M27.816,27.422l-9.069-12.803l8.381-9.224c0.546-0.6,0.482-1.512-0.142-2.038c-0.623-0.526-1.57-0.464-2.116,0.136	l-7.869,8.66l-3.329-4.699c-0.32-0.452-0.943-0.557-1.395-0.238c-0.45,0.319-0.558,0.943-0.238,1.395L25.066,27h-3.549L5.934,5h3.55	l0.694,0.981c0.319,0.451,0.944,0.557,1.395,0.238c0.45-0.319,0.557-0.943,0.238-1.395l-0.994-1.403C10.629,3.158,10.324,3,10,3H4	C3.626,3,3.283,3.209,3.111,3.542C2.94,3.874,2.968,4.273,3.184,4.579l9.068,12.802l-8.381,9.224	c-0.546,0.6-0.482,1.512,0.142,2.038C4.297,28.882,4.648,29,4.999,29c0.418,0,0.833-0.167,1.13-0.494l7.869-8.66l6.186,8.733	C20.371,28.843,20.676,29,21,29h6c0.374,0,0.717-0.209,0.889-0.541C28.06,28.127,28.032,27.728,27.816,27.422z" />
                </svg>

            </p>
        </div>

        <div class="text-white py-3 md:text-base text-center">
            <p>Copyright {{ year }} EMAUlimitless</p>

        </div>


    </div>
</template>
