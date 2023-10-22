<template>
  <header class="flex justify-between items-center py-2 px-4">
    <button @click="toggleNav" class="border-0 bg-transparent">
      <font-awesome-icon :icon="['fas', 'bars']"
        class="w-8 h-auto rounded-xl p-2 text-gray-900 hover:bg-gray-800 hover:text-gray-200 transition-all ease-linear duration-200" />
    </button>
    <img src="/logoipsum-244.svg" alt="Personal logo" />
  </header>
  <Transition name="slide">
    <nav v-if="mobileOpen" class="navigation">
      <font-awesome-icon @click="toggleNav" :icon="['fas', 'circle-xmark']"
        class="mt-2 mb-6 hover:cursor-pointer text-gray-300 hover:text-gray-500 transition-all duration-200 ease-out flex items-center justify-center w-6 h-auto mx-auto shadow-lg" />
      <router-link to="/home">
        <SidebarIcon iconName="user" />
      </router-link>
      <SidebarIcon iconName="school" />
    </nav>
  </Transition>
</template>

<script setup lang="ts">
import SidebarIcon from './SidebarIcon.vue';
import { ref } from 'vue';

let mobileOpen = ref(false);

const toggleNav = () => {
  mobileOpen.value = !mobileOpen.value;
}
</script>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  scale: 0;
  transform-origin: top;
}

@media(min-width: 768px) {

  .slide-enter-from,
  .slide-leave-to {
    scale: 1;
    opacity: 1;
    transform: translateX(-100px);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-to,
.slide-leave-from {
  scale: 1;
  transform-origin: top;
}

@media(min-width: 768px) {

  .slide-enter-to,
  .slide-leave-from {
    opacity: 1;
    scale: 1;
    transform: translateX(0px);
  }
}
</style>