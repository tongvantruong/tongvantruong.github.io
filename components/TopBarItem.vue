<template>
  <NuxtLink
    class="hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent"
    :class="{ 'router-link-active': false }"
    :to="to"
    exact
  >
    <span
      :class="{
        'bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent':
          isActive,
      }"
    >
      {{ label }}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});

const { currentSectionId } = useScroll();

const isActive = computed(() => {
  const isHomeActive =
    props.to && props.to === "/" && currentSectionId.value == "home";
  return (
    isHomeActive || (props.to && props.to.endsWith(currentSectionId.value))
  );
});
</script>
