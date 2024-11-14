<template>
  <div class="group relative">
    <span
      ref="tooltip"
      class="group-hover:x-50 absolute -top-8 hidden text-nowrap rounded-lg bg-gray-700 px-2 text-gray-200 after:absolute after:-bottom-1 after:left-1/2 after:h-0 after:w-0 after:-translate-x-1/2 after:rotate-45 after:border-4 after:border-gray-700 after:content-[''] group-hover:inline-block"
    >
      {{ hoveredText }}
    </span>
    <div class="relative" ref="target" @mouseover="onMouseOver">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  hoveredText: {
    type: String,
    required: true,
  },
});

const target: Ref<HTMLElement | undefined> = ref();
const tooltip: Ref<HTMLElement | undefined> = ref();

function onMouseOver() {
  if (target.value && tooltip.value) {
    tooltip.value.style.left =
      -(tooltip.value.clientWidth - target.value.clientWidth) / 2 + "px";

    tooltip.value.style.top = -tooltip.value.clientHeight - 7 + "px";
  }
}
</script>
