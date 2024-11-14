<template>
  <a
    target="_blank"
    @click="onClick"
    class="group relative w-28 overflow-hidden shadow-md dark:shadow-gray-600"
    :class="{
      'cursor-default brightness-50': isAppDead,
      'cursor-pointer': !isAppDead,
    }"
  >
    <img
      src="/assets/images/download-google-play.svg"
      :alt="`Download App on Google PLay Store`"
    />
    <div
      v-if="isAppDead"
      class="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-md bg-black text-sm text-white opacity-0 hover:opacity-100"
    >
      Unavailable
    </div>
    <div
      v-if="!isAppDead"
      class="absolute inset-0 z-20 h-[200%] w-[200%] translate-x-[-70%] rotate-45 bg-white/30 transition-all duration-1000 group-hover:translate-x-[50%] group-hover:scale-100"
    ></div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});

const isAppDead = computed(() => props.href === "--DEAD--");
function onClick() {
  if (isAppDead.value) return;
  window.open(props.href, "_blank");
}
</script>
