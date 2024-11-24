import { expect, it } from "vitest";
import { darkModeStore } from "./darkMode";

it("should have dark mode by default", () => {
  const { darkMode } = darkModeStore();
  expect(darkMode.value).toBe("dark");
});

it("should be able to change dark modes", () => {
  const { darkMode } = darkModeStore();
  darkMode.value = "light";
  const { darkMode: newDarkMode } = darkModeStore();
  expect(newDarkMode.value).toBe("light");
});
