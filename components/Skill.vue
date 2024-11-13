<template>
  <div class="flex items-center justify-center">
    <div
      class="w-full rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 p-1"
    >
      <div
        class="back flex h-full w-full flex-1 flex-grow flex-col items-center justify-center rounded-md bg-white p-1"
      >
        <img class="h-16 w-16" :src="`${logo}.svg`" :alt="name" />
        <span class="w-20 text-xs">{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});
</script>
