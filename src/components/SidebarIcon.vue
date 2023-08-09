<template>
  <font-awesome-icon class="nav-icon" :icon="['fas', props.iconName]"></font-awesome-icon>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconName: string;
}>();
</script>