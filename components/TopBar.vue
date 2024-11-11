<template>
  <nav class="flex h-10 justify-end">
    <ul
      class="mr-4 flex h-full items-center gap-4 rounded-full border bg-slate-100 bg-opacity-90 p-5"
    >
      <li v-for="item in topBarItems" :key="item.label">
        <TopBarItem :label="item.label" :to="item.to" />
      </li>
      <li><div>Dark</div></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { TopBarItem } from "#components";

const topBarItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "#about" },
  { label: "Projects", to: "#project" },
];
</script>
