<template>
  <div class="flex h-screen flex-col">
    <header class="fixed right-0 top-0 z-50 mt-2">
      <TopBar />
    </header>
    <main class="flex flex-auto"><slot /></main>
    <footer id="contact">
      <Footer />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Footer, TopBar } from "#components";
</script>
