<template>
  <h2 class="flex flex-row flex-nowrap items-center">
    <span class="block flex-grow border-t-[0.5px] border-gray-400"></span>
    <span
      class="mx-4 block flex-none rounded bg-slate-100 px-4 py-2.5 text-xl font-medium leading-none text-black dark:bg-gray-900 dark:text-white"
    >
      {{ text }}
    </span>
    <span class="block flex-grow border-t-[0.5px] border-gray-400"></span>
  </h2>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
