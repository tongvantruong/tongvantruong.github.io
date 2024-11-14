<template>
  <footer
    class="z-10 flex flex-col items-center justify-center border-t-gray-300 bg-gray-100 pb-2 dark:bg-gray-800"
  >
    <Tooltip hoveredText="Go to Top" class="-top-3">
      <NuxtLink to="#home">
        <div
          class="relative rounded-lg border border-gray-600 bg-black pt-2 dark:shadow-gray-500"
        >
          <svg
            class="h-6 w-7 animate-bounce fill-current text-gray-200"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 18L12 12L6 18" stroke-width="2" />
            <path d="M18 12L12 6L6 12" stroke-width="2" />
          </svg>
        </div>
      </NuxtLink>
    </Tooltip>
    <span class="text-gray-500">Truong Tong @{{ currentYear }}</span>
  </footer>
</template>
<script setup lang="ts">
import { NuxtLink, Tooltip } from "#components";

const currentYear = computed(() => new Date().getFullYear());
</script>
