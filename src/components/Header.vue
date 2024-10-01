<script setup>
import abletonLogo from '@/assets/Ableton-logo.svg'
import { onMounted } from 'vue';


let lastKnownScrollPosition = 0;
let up = true;

onMounted(() => {
  const header = document.getElementById('second-header');
  document.addEventListener("scroll", (event) => {
  let scrollPosition = window.scrollY

  // console.log(scrollPosition, lastKnownScrollPosition)
  
  if (scrollPosition > 71) {
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed')
  }

  if (scrollPosition > lastKnownScrollPosition & up & scrollPosition > 300) {
    console.log('down')
    up = false
    header.classList.add('colapsed')
  } else if (scrollPosition < lastKnownScrollPosition & !up) {
    console.log('up')
    up = true
    header.classList.remove('colapsed')
  }

  lastKnownScrollPosition = scrollPosition
});

})

</script>

<template>
  <header class="">
    <section class="first-header w-full flex items-center border-b-2 border-[#eee]">
      <div class="container mx-auto flex justify-between w-full md:text-xl">
        <nav class="flex gap-5 items-center md:gap-8">
          <a href="" class="logo"><img :src="abletonLogo" class="ableton-logo" alt=""></a>
          <a href="">Live</a>
          <a href="">Push</a>
          <a href="">Note</a>
          <a href="">Link</a>
          <a href="">Shop</a>
          <a href="">Packs</a>
          <a href="">Help</a>
          <a href="" class="text-rouge more-link relative">
            <span>More</span>
            <span class="ml-1 text-2xl plus absolute">+</span>
          </a>
        </nav>
        <nav class="flex gap-5 md:gap-8">
          <a href="" class="text-bleu-fonce">Try Live 12 for free</a>
          <a href="">Log in or register</a>
        </nav>
      </div>
    </section>
    <section class="second-header w-full flex items-center z-50 top-0" id="second-header">
      <ul class="container mx-auto flex flex-row gap-4">
        <li><a href="" class="text-rouge">About</a></li>
        <li><a href="">Jobs</a></li>
        <li><a href="">Apprenticeships</a></li>
      </ul>
    </section>

  </header>
</template>

<style scoped>

.first-header {
  height: 71px;
}

.first-header a {
  position: relative;
}

.first-header a:not(.logo)::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: currentColor;
    transition: width 100ms ease-out;
}

.first-header a:not(.logo):hover::after {
  width: 100%;
}

.second-header a {
  /* border-radius: 2rem; */
  padding: 0.5rem;
  transition: 100ms ease;
}

.second-header a:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

nav, ul {
  font-family: 'Futura PT Medium';
}

.plus {
  font-family: 'Futura PT Book';
  top: -0.2em;
}

.ableton-logo {
  width: 3.75em;
  height: 1.75em;
}

.second-header {
  background-color: rgba(255, 255, 255, 0.9);
  height: 60px;
  transition: transform 200ms ease-out;
}

.second-header.colapsed {
  transform: translateY(-60px);
}
</style>