import { expect, expectTypeOf, it } from "vitest";
import { useProject } from "./useProject";

it("should have 13 projects", () => {
  const { projects } = useProject();
  expect(projects.length).toBe(16);
});

it("should include correct attributes", () => {
  const { projects } = useProject();
  expectTypeOf(projects[0]).toEqualTypeOf<{
    name: string;
    description: string;
    liveLink?: string;
    repoLink?: string;
    image?: string;
    iosLink?: string;
    androidLink?: string;
    skills?: string[];
  }>;
});
