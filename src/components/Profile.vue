<template>
  <section class="background">
    <div class="section-container py-[75px]">
      <div class="flex flex-col md:flex-row justify-center gap-8 md:gap-4">
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-3/5 order-2 md:order-1 gap-4">
          <h1 class="text-gray-100">Nice to meet you! My name is Nathan.</h1>
          <p class="text-xl text-gray-300">I am a Software Developer with 2+ years of experience working in enterprise
            applications. I have a passion for web development and designing beautiful user interfaces. Below is some
            more
            information about myself along with my personal projects.</p>

        </div>
        <div class="w-full md:w-2/5 flex flex-col gap-8 items-center justify-center md:justify-start order-1 md:order-2">
          <img class="shadow-3xl ring-4 ring-white w-[175px] h-auto rounded-full" src="/profile-picture.jpeg"
            alt="Profile picture" />
          <div class="flex gap-2 text-white text-base">
            <a href="https://github.com/nlsnyder" target="_blank"><font-awesome-icon
                class="w-6 h-6 rounded-full text-gray-600 p-2 bg-white hover:text-[#171515] transition-all ease-in duration-150"
                :icon="['fab', 'github']"></font-awesome-icon></a>
            <a href="#"><font-awesome-icon
                class=" p-2 text-gray-600 bg-white w-6 h-6 rounded-full hover:text-[#0A66C2] transition-all ease-in duration-150"
                :icon="['fab', 'linkedin']" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-container">
    <div class="my-10">
      <h3 class="heading font-medium">My tech stack</h3>
      <TechLogoCarousel />
    </div>
  </section>
  <section class="section-container my-10">
    <h3 class="heading font-medium">Personal projects</h3>
    <div class="flex flex-col md:flex-row flex-auto gap-10">
      <PersonalProjectCard title="Vipex" webLink="https://vipex-f68f1.web.app/"
        githubLink="https://github.com/nlsnyder/vipex" category="Web Development"
        description="Manage Your Expenses With Ease" img="vipex" />
      <PersonalProjectCard title="3 Idiots and a Star Wars Podcast" webLink="https://3idiotssw. com"
        githubLink="https://github.com/nlsnyder/3-idiots-ts" category="Web Development"
        description="Official Podcast Website" img="3idiotssw" />
    </div>
  </section>
</template>

<script setup lang="ts">
import TechLogoCarousel from './TechLogoCarousel.vue';
import PersonalProjectCard from './PersonalProjectCard.vue';
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