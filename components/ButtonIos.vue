<template>
  <a target="_blank" :href="href" class="group relative w-28 overflow-hidden">
    <img
      src="/assets/images/download-app-store.svg"
      :alt="`Download App on App Store`"
    />
    <div
      class="absolute inset-0 z-20 h-[200%] w-[200%] translate-x-[-70%] rotate-45 bg-white/30 transition-all duration-1000 group-hover:translate-x-[50%] group-hover:scale-100"
    ></div>
  </a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
