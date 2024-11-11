import { ref } from "vue";

const currentSectionId = ref("home");

export function useScroll() {
  function setCurrentSectionId(value: string) {
    currentSectionId.value = value;
  }

  return { currentSectionId, setCurrentSectionId };
}
