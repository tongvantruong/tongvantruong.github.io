<template>
  <footer class="z-10 flex flex-col items-center justify-center border-t pb-2">
    <Tooltip hoveredText="Go to Top" class="-top-3">
      <NuxtLink to="#home">
        <div class="relative rounded-lg bg-black pt-2">
          <svg
            class="h-6 w-7 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 18L12 12L6 18" stroke="#fff" stroke-width="2" />
            <path d="M18 12L12 6L6 12" stroke="#fff" stroke-width="2" />
          </svg>
        </div>
      </NuxtLink>
    </Tooltip>
    <div class="flex gap-4 pb-2">
      <Tooltip hoveredText="Github">
        <NuxtLink to="https://github.com/tongvantruong" target="_blank">
          <img
            src="/assets/images/github.svg"
            class="h-8 w-8 hover:scale-110"
          />
        </NuxtLink>
      </Tooltip>
      <Tooltip hoveredText="Email">
        <NuxtLink href="mailto:tong.tvt.truong@gmail.com" target="_blank">
          <img
            class="h-8 w-8 hover:scale-110"
            src="/assets/images//mail.svg"
            alt="Contact via Email"
          />
        </NuxtLink>
      </Tooltip>
      <Tooltip hoveredText="Linkedin">
        <NuxtLink
          to="https://www.linkedin.com/in/truongtong-jay/"
          target="_blank"
        >
          <img
            class="h-8 w-8 hover:scale-110"
            src="/assets//images//linkedin.svg"
            alt="Contact via Linkedin"
          />
        </NuxtLink>
      </Tooltip>
    </div>
    <span class="text-gray-500">Truong Tong @{{ currentYear }}</span>
  </footer>
</template>
<script setup lang="ts">
import { NuxtLink, Tooltip } from "#components";

const currentYear = computed(() => new Date().getFullYear());
</script>
