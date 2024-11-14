<template>
  <nav class="z-50 flex h-10 justify-end">
    <ul
      class="mr-4 flex h-full items-center gap-4 rounded-full border-[0.5px] bg-slate-100 bg-opacity-90 py-5 pl-5 pr-2 dark:border-none dark:bg-slate-900 dark:bg-opacity-80 dark:text-gray-200"
    >
      <li v-for="item in topBarItems" :key="item.label">
        <TopBarItem
          @click="onClick(item.to)"
          :label="item.label"
          :to="item.to"
        />
      </li>
      <li>
        <ButtonDarkMode />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ButtonDarkMode, TopBarItem } from "#components";

const topBarItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "#about" },
  { label: "Projects", to: "#project" },
  { label: "Contact", to: "#contact" },
];

const { setCurrentSectionId } = useScroll();

function onClick(to: string) {
  if (to === topBarItems[0].to) setCurrentSectionId("home");
  else setCurrentSectionId(to.substring(1));
}
</script>
