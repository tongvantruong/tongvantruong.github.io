import { createGlobalState, useStorage } from "@vueuse/core";

type DarkMode = "dark" | "light";

export const darkModeStore = createGlobalState(() => {
  const storage = useStorage<DarkMode>("tvt:DarkMode", "dark");
  const darkMode = ref(storage.value);

  watch(darkMode, (newValue) => {
    storage.value = newValue;
  });

  return { darkMode };
});
