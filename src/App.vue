<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import HeroBanner from './components/HeroBanner.vue';
import Footer from './components/Footer.vue';


</script>

<template>

  <Header />
  <div class="container mx-auto">
    <HeroBanner />
  </div>
  <Footer />
  
  <RouterView />

</template>

<style scoped>

</style>
