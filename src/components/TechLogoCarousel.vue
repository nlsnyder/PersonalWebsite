<template>
  <Carousel :value="logos" :numVisible="3" :responsiveOptions="responsiveOptions" circular :autoplayInterval="2500">
    <template #item="props">
      <div
        class="flex flex-col gap-1 justify-between items-center h-full border border-gray-900 rounded-xl shadow-xl mx-4 md:mx-6 overflow-hidden">
        <div class="gradient" :style="{ background: props.data.gradient }"></div>
        <div class="flex flex-col items-center py-4 gap-4">
          <img :src="props.data.src" alt="Logo" class="bg-white w-20 h-auto rounded-full ring-8 ring-white mt-[-60px]" />
          <span class="text-base font-medium text-gray-700">{{ props.data.title }}</span>
        </div>
      </div>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import Carousel from 'primevue/carousel';
import { ref } from 'vue';

const imageDirectory = '/tech-logos';

const logos = ref([
  {
    src: imageDirectory + '/angular-logo.png',
    title: "Angular",
    gradient: "radial-gradient(circle at 10.6% 22.1%, rgb(206, 18, 18) 0%, rgb(122, 21, 21) 100.7%)"
  },
  {
    src: imageDirectory + '/vue-logo.png',
    title: "Vue",
    gradient: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)"
  },
  {
    src: imageDirectory + '/react-logo.png',
    title: "React",
    gradient: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)"
  },
  {
    src: imageDirectory + '/Javascript_logo.png',
    title: "JavaScript",
    gradient: "linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%)"
  },
  {
    src: imageDirectory + '/java-logo.png',
    title: "Java",
    gradient: "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
  },
  {
    src: imageDirectory + '/spring-boot-logo.png',
    title: "Spring",
    gradient: "linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%)"
  },
  {
    src: imageDirectory + '/HTML5_logo.png',
    title: "HTML",
    gradient: "radial-gradient(circle at 10% 20%, rgb(205, 33, 42) 0%, rgb(236, 95, 5) 90%)"
  },
  {
    src: imageDirectory + '/CSS3_logo.png',
    title: "CSS",
    gradient: "radial-gradient(465px at -15.1% -25%, rgb(17, 130, 193) 0%, rgb(67, 166, 238) 49%, rgb(126, 203, 244) 90.2%)"
  },
  {
    src: imageDirectory + '/bootstrap-logo.jpeg',
    title: "Bootstrap",
    gradient: "linear-gradient(109.6deg, rgba(119, 44, 232, 0.68) 11.5%, rgb(119, 44, 232) 91.2%)"
  },
  {
    src: imageDirectory + '/firebase-logo.png',
    title: "Firebase",
    gradient: "radial-gradient(circle at 10% 20%, rgb(251, 221, 19) 0.1%, rgb(255, 153, 1) 90%)"
  },
]);
const responsiveOptions = ref([
  {
    breakpoint: '1199px',
    numVisible: 4,
    numScroll: 1
  },
  {
    breakpoint: '991px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '568px',
    numVisible: 2,
    numScroll: 1
  }
]);
</script>

<style scoped>
.gradient {
  height: 100px;
  width: 100%;
}
</style>