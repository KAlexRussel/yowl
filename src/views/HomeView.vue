<script setup>
import AboutComponent from '@/components/AboutComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import GoalsComponent from '@/components/GoalsComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import NavBar from '@/components/NavBar.vue';

</script>

<template>
  <NavBar />
  <section id='home'>
    <HomeComponent />
  </section>
  <section id='about'>
    <AboutComponent />
  </section>
  <section id='goals'>
    <GoalsComponent />
  </section>
  <FooterComponent />
</template>
