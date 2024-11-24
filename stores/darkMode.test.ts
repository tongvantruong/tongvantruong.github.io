import { expect, it } from "vitest";
import { darkModeStore } from "./darkMode";

it("should have dark mode by default", () => {
  const { darkMode } = darkModeStore();
  expect(darkMode.value).toBe("dark");
});
