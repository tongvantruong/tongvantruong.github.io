<template>
  <main
    class="relative flex flex-col items-center justify-center bg-gray-100 text-center"
  >
    <section
      id="home"
      class="hero flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 text-center md:px-12"
    >
      <h2 class="text-4xl">
        Hello, I'm
        <span
          class="to bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text font-extrabold tracking-wide text-transparent"
          >Truong Tong</span
        >
        <br />-<br />
        Sr. Front End Engineer
      </h2>
      <h1 class="text-4xl md:text-6xl">
        with
        <span
          class="to bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text font-extrabold tracking-wide text-transparent"
          >over 10 years</span
        >
        of experience<span class="hidden md:inline"
          >, skilled in TypeScript, VueJS, NuxtJS</span
        >
      </h1>
      <ButtonDown
        id="main-button"
        class="mt-4 md:mt-10"
        text="View my work"
        href="#about"
      />
    </section>
    <section id="about" class="px-4 pt-14 md:px-12">
      <LazyHeading text="About Me" />
      <div
        class="flex flex-col items-center justify-between gap-4 py-6 md:flex-row"
      >
        <div class="flex flex-col items-center justify-center gap-4 md:w-1/2">
          <img class="h-40" src="/assets/images/person.svg" alt="Person" />
          <p>
            Experienced front end engineer with over 10 years of experience in
            software development, skilled in VueJS, NuxtJS, NodeJS, TypeScript,
            Clean Code, Testing including unit test with Jest, integration/e2e
            test with Cypress, TDD and all other tech stacks related to web and
            mobile development.
          </p>
          <p>
            With my passion about coding, learning with a growth mindset, deep
            understanding of SCRUM and ability to work independently or team
            work, I can quickly adapt to any new working environment.
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-2 md:w-1/2">
          <client-only>
            <Skill
              :name="skill.name"
              :logo="skill.icon"
              v-for="skill in skills"
              :key="skill.name"
            />
          </client-only>
        </div>
      </div>
    </section>
    <section id="project" class="w-full px-4 py-14 md:px-12">
      <LazyHeading text="Projects" />
      <div class="flex w-full flex-col items-center justify-between gap-4 py-6">
        <div class="flex w-full flex-col gap-10">
          <Project
            v-for="(project, index) in projects"
            :key="index"
            :name="project.name"
            :description="project.description"
            :liveLink="project.liveLink"
            :iosLink="project.iosLink"
            :androidLink="project.androidLink"
            :repoLink="project.repoLink"
            :image="project.image"
            :isLtr="index % 2 == 0"
            :skills="project.skills"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ButtonDown, LazyHeading } from "#components";

definePageMeta({
  layout: "home",
});

onMounted(() => {
  magnify("home", 1.5);
});

const { projects } = useProject();
const { skills } = useSkill();
const { magnify } = useMagnifier();
useScroll();
</script>

<style>
.hero {
  background-image: linear-gradient(
      rgba(243, 244, 246, 0.95) 100%,
      rgba(0, 0, 0, 0) 0%
    ),
    url("/assets/images/bg.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.img-magnifier-glass {
  position: absolute;
  border: 3px solid #000;
  border-radius: 50%;
  cursor: none;
  /*Set the size of the magnifier glass:*/
  width: 100px;
  height: 100px;
}
</style>
