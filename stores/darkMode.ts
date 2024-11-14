import { createGlobalState, useStorage } from "@vueuse/core";

type DarkMode = "dark" | "light";

export const darkModeStore = createGlobalState(() => {
  const storage = useStorage<DarkMode>("tvt:DarkMode", "dark");

  const darkMode = computed({
    get(): DarkMode {
      return storage.value;
    },
    set(value: DarkMode) {
      storage.value = value;
    },
  });

  return { darkMode };
});
