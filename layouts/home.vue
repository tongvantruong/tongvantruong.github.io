<template>
  <client-only>
    <div
      class="flex h-screen flex-col bg-gray-600 dark:bg-black dark:text-white"
      :class="darkMode"
    >
      <header class="fixed right-0 top-0 z-50 mt-2">
        <TopBar />
      </header>
      <main class="flex flex-auto dark:bg-black dark:text-white"><slot /></main>
      <footer>
        <Footer />
      </footer>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { Footer, TopBar } from "#components";
import { darkModeStore } from "~/stores/darkMode";

const { darkMode } = darkModeStore();
</script>
