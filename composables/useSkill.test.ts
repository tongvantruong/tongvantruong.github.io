import { it, expect, expectTypeOf } from "vitest";
import { useSkill } from "./useSkill";

it("should have 19 skills", () => {
  const { skills } = useSkill();
  expect(skills.length).toBe(19);
});

it("should include name and icon attributes", () => {
  const { skills } = useSkill();
  expectTypeOf(skills[0]).toEqualTypeOf<{ name: string; icon: string }>;
});

it("should shuttle the items every time is used", () => {
  const { skills } = useSkill();
  const firstTime = skills[0].name;

  const { skills: secondSkills } = useSkill();
  expect(secondSkills[0].name).not.toBe(firstTime);
});
