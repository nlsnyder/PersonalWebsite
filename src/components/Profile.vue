<template>
  <section class="background">
    <div class="w-[90%] md:w-3/5 mx-auto py-[75px]">
      <div class="flex flex-col md:flex-row justify-center gap-8 md:gap-4">
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-3/5 order-2 md:order-1 gap-4">
          <h1 class="text-gray-100">Nice to meet you! My name is Nathan.</h1>
          <p class="text-xl text-gray-300">I am a Software Developer with 2+ years of experience working in enterprise
            applications. I have a passion for web development and designing beautiful user interfaces. Below is some
            more
            information about myself along with my personal projects.</p>
        </div>
        <div class="w-full md:w-2/5 flex items-center md:items-start justify-center order-1 md:order-2">
          <img class="shadow-3xl w-[175px] h-auto rounded-full" src="/profile-picture.jpeg" alt="Profile picture" />
        </div>
      </div>
    </div>
  </section>
  <section class="w-[90%] md:w-3/5 mx-auto">
    <div class="my-10">
      <h3 class="heading font-medium">My tech stack</h3>
      <TechLogoCarousel />
    </div>
  </section>
</template>

<script setup lang="ts">
import TechLogoCarousel from './TechLogoCarousel.vue';
</script>

<style scoped>
.background {
  background-image: url('/hero-background.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.heading::after {
  content: "";
  display: block;
  border-bottom: 2px solid #28333E;
  width: 100px;
  margin: 10px 0 40px 0;
}
</style>