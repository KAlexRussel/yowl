<script setup>
const props = defineProps(["css","type"]);

</script>

<template>
    <button :class="`rounded-3xl px-5 py-2 ${props.css}  hover:bg-gray-500`" :type="`${props.type} `">
       <slot>

       </slot>
    </button>
</template>
