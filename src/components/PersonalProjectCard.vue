<template>
  <div class="shadow-2xl w-full md:w-1/2 rounded-sm text-center background-properties hover:overlay">
    <div class="h-full relative flex flex-col">
      <div class="overlay">
        <h3>{{ props.title }}</h3>
        <div class="flex gap-4">
          <a :href=props.webLink target="_blank">
            <font-awesome-icon :icon="['fas', 'link']"
              class="p-2 bg-white text-gray-800 rounded-full h-[20px] w-[20px] hover:bg-slate-700 hover:text-white hover:opacity-90 hover:cursor-pointer transition-all"
              title="Go to vipex" />
          </a>
          <a :href=props.githubLink target="_blank"><font-awesome-icon :icon="['fab', 'github']"
              class="p-2 bg-white text-gray-800 rounded-full h-[20px] w-[20px] hover:bg-slate-700 hover:text-white hover:opacity-90 hover:cursor-pointer transition-all"
              title="View code on Github" /></a>
        </div>
      </div>
      <div class="pt-[50px]">
        <h6 class="text-sm font-medium uppercase text-primary-700 mb-1">{{ props.category }}</h6>
        <p class="px-8 text-[18px] font-semibold mb-4">{{ props.description }}</p>
        <img :src=imgUrl :alt=img />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title: string;
  img: string;
  githubLink: string;
  webLink: string;
  category: string;
  description: string;
}>();

const imgUrl = computed(() => {
  return props.img + '.png';
});
</script>

<style scoped>
.background-properties {
  height: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(99, 97, 97, 0.124), rgba(178, 171, 171, 0.3)), url("/personal-project-card-background.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  /* Black overlay with transparency */
  color: white;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  /* Initially hidden */
  transition: opacity 0.2s ease-in-out;
}

.hover\:overlay:hover .overlay {
  opacity: 1;
  /* Show the overlay on hover */
}
</style>