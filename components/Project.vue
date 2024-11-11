<template>
  <div
    class="flex w-full flex-col items-center justify-center md:flex-row md:gap-4"
    :class="{ 'md:flex-row-reverse': !isLtr }"
  >
    <div
      class="h-60 w-full bg-red-200 md:w-2/3"
      :class="{ 'md:relative md:-left-16': !isLtr }"
    ></div>
    <div
      class="relative -top-5 md:text-start"
      :class="{ 'md:relative md:-left-16': isLtr, 'z-10': !isLtr }"
    >
      <h2 class="text-3xl">{{ name }}</h2>
      <p class="pb-3">{{ description }}</p>
      <ButtonRight v-if="link" text="Live App" :href="link" />
      <ButtonRight
        class="ml-4"
        v-if="repoLink"
        text="Learn More"
        :href="repoLink"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ButtonRight } from "#components";

defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  repoLink: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  isLtr: {
    type: Boolean,
    default: true,
  },
});
</script>
