<template>
  <div
    class="flex w-full flex-col items-center justify-center md:flex-row md:gap-4"
    :class="{ 'md:flex-row-reverse': !isLtr }"
  >
    <div
      class="w-full bg-gray-100 dark:bg-black md:w-2/3"
      :class="{ 'md:relative md:-left-16': !isLtr }"
    >
      <div class="relative hover:z-30 hover:scale-105">
        <img v-if="image" :src="image" :alt="image" />
        <img v-else src="/assets/images/soon.png" alt="Coming Soon" />
        <div
          class="absolute top-0 h-full w-full bg-gradient-to-b from-transparent to-gray-100 hover:opacity-0 dark:to-gray-700"
          :class="{
            'md:right-0 md:bg-gradient-to-l md:from-transparent md:to-gray-100 dark:md:to-gray-700':
              !isLtr,
            'md:left-0 md:bg-gradient-to-r md:from-transparent md:to-gray-100 dark:md:to-gray-700':
              isLtr,
          }"
        ></div>
      </div>
    </div>
    <div
      class="relative -top-14 z-10 hover:z-40 md:top-0 md:w-1/3 md:text-start"
      :class="{ 'md:-left-24': isLtr, 'md:-right-24': !isLtr }"
    >
      <h2 class="text-3xl">{{ name }}</h2>
      <p class="md:line-clamp-[10]">
        {{ description }}
      </p>
      <div
        v-if="skills"
        class="mt-1 flex flex-wrap justify-center gap-1 md:justify-start"
      >
        <span
          class="rounded-e bg-slate-500 px-1 text-sm text-white"
          v-for="(skill, index) in skills"
          :key="index"
          >{{ skill }}</span
        >
      </div>
      <div
        class="mt-4 inline-flex items-start justify-center gap-4 md:flex-col"
      >
        <ButtonIos v-if="iosLink" :href="iosLink" />
        <ButtonAndroid v-if="androidLink" :href="androidLink" />
        <ButtonRight v-if="liveLink" text="View Live" :href="liveLink" />
        <ButtonRight v-if="repoLink" text="Github Repo" :href="repoLink" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ButtonIos, ButtonRight } from "#components";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: false,
  },
  repoLink: {
    type: String,
    required: false,
  },
  iosLink: {
    type: String,
    required: false,
  },
  androidLink: {
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
  skills: {
    type: Array as PropType<Array<String>>,
    required: false,
  },
});
</script>
