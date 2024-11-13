import type { Skill } from "~/types/skill.type";

export function useSkill() {
  const skills: Skill[] = [
    { name: "VueJS", icon: "vue" },
    { name: "NuxtJS", icon: "nuxt" },
    { name: "NodeJS", icon: "node" },
    { name: "SCSS", icon: "scss" },
    { name: "CSS", icon: "css" },
    { name: "HTML", icon: "html" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TailwindCSS", icon: "typescript" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Java", icon: "java" },
    { name: "Flutter", icon: "flutter" },
    { name: "Kotlin", icon: "kotlin" },
    { name: "Swift", icon: "swift" },
    { name: "Cassandra", icon: "cassandra" },
    { name: "Postgresql", icon: "postgresql" },
    { name: "ReactJS", icon: "react" },
  ].sort(() => Math.random() - 0.5);

  return { skills };
}
