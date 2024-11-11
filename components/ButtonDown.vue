<template>
  <a
    :href="href"
    class="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-red-500 px-8 py-1.5 text-2xl text-white focus:ring-4 focus:ring-blue-300"
  >
    <span class="z-40">{{ text }}</span>
    <svg
      class="z-40 -mr-1 ml-2 h-6 w-6 animate-bounce"
      fill="#fff"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M12 19L6 13M12 19L18 13"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <div
      class="absolute inset-0 z-20 h-[200%] w-[200%] translate-x-[-70%] rotate-45 bg-white/30 transition-all duration-1000 group-hover:translate-x-[50%] group-hover:scale-100"
    ></div>
  </a>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>
