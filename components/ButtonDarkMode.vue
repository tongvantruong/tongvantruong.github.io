<template>
  <client-only>
    <img
      class="h-8 w-8 cursor-pointer rounded-full border-[0.5px] border-gray-400 p-1 hover:bg-slate-500"
      v-if="darkMode === 'dark'"
      src="/assets/images/light.svg"
      alt="Dark Mode"
      @click="darkMode = 'light'"
    />
    <img
      v-else
      class="h-8 w-8 cursor-pointer rounded-full border-[0.5px] border-gray-400 p-1 hover:bg-slate-500"
      src="/assets/images/dark.svg"
      alt="Light Mode"
      @click="darkMode = 'dark'"
    />
  </client-only>
</template>

<script setup lang="ts">
import { darkModeStore } from "~/stores/darkMode";

const { darkMode } = darkModeStore();
</script>
