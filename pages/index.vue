<template>
  <main
    class="flex flex-col items-center justify-center bg-gray-100 px-4 text-center"
  >
    <section
      id="home"
      class="flex min-h-screen flex-col items-center justify-center py-20 text-center md:px-12"
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
          >, skilled in VueJS, NuxtJS, TypeScript, etc.</span
        >
      </h1>
      <ButtonDown class="mt-4" text="View my work" href="#about" />
    </section>
    <section id="about" class="pt-14">
      <LazyHeading text="About Me" />
      <div
        class="flex flex-col items-center justify-between gap-4 py-6 md:flex-row"
      >
        <p class="md:w-1/2">
          Experienced front end engineer with over 10 years of experience in
          software development, skilled in VueJS, NuxtJS, NodeJS, TypeScript,
          Clean Code, Testing including unit test with Jest, integration
          test/e2e test with Cypress, TDD and all other tech stacks related web
          development
        </p>
        <div class="flex flex-wrap justify-center gap-2 md:w-1/2">
          <div
            v-for="skill in skillItems"
            :key="skill.name"
            class="flex items-center justify-center"
          >
            <div
              class="w-full rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 p-1"
            >
              <div
                class="back flex h-full w-full items-center justify-center rounded-md bg-white"
              >
                <span class="m-4 h-20 w-20">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="project" class="w-full py-14">
      <LazyHeading text="Projects" />
      <div class="flex w-full flex-col items-center justify-between gap-4 py-6">
        <div class="flex w-full flex-col gap-10">
          <Project
            v-for="(project, index) in projects"
            :key="index"
            :name="project.name"
            :description="project.description"
            :link="project.link"
            :repoLink="project.codeRepo"
            :isLtr="index % 2 == 0"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ButtonDown, LazyHeading, Project } from "#components";

definePageMeta({
  layout: "home",
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const projects = [
  {
    name: "USERGRAM",
    description:
      "a Japanese cloud service that captures user behaviors in web apps or mobile phones so the clients can improve the customer's experience of their products",
    link: "https://www.bebit.co.jp/services/ux-ops/usergram/",
    codeRepo: "1",
  },
  {
    name: "USERGRAM 2",
    description:
      "a Japanese cloud service that captures user behaviors in web apps or mobile phones so the clients can improve the customer's experience of their products",
    link: "https://www.bebit.co.jp/services/ux-ops/usergram/",
    codeRepo: "",
  },
  {
    name: "USERGRAM",
    description:
      "a Japanese cloud service that captures user behaviors in web apps or mobile phones so the clients can improve the customer's experience of their products",
    link: "https://www.bebit.co.jp/services/ux-ops/usergram/",
    codeRepo: "",
  },
  {
    name: "USERGRAM 2",
    description:
      "a Japanese cloud service that captures user behaviors in web apps or mobile phones so the clients can improve the customer's experience of their products",
    link: "https://www.bebit.co.jp/services/ux-ops/usergram/",
    codeRepo: "",
  },
  {
    name: "USERGRAM",
    description:
      "a Japanese cloud service that captures user behaviors in web apps or mobile phones so the clients can improve the customer's experience of their products",
    link: "https://www.bebit.co.jp/services/ux-ops/usergram/",
    codeRepo: "",
  },
  {
    name: "USERGRAM 2",
    description:
      "a Japanese cloud service that captures user behaviors in web apps or mobile phones so the clients can improve the customer's experience of their products",
    link: "https://www.bebit.co.jp/services/ux-ops/usergram/",
    codeRepo: "",
  },
];

const skillItems = [
  { name: "VueJS", icon: "" },
  { name: "NuxtJS", icon: "" },
  { name: "NodeJS", icon: "" },
  { name: "SCSS", icon: "" },
  { name: "CSS", icon: "" },
  { name: "HTML", icon: "" },
  { name: "JavaScript", icon: "" },
  { name: "TailwindCSS", icon: "" },
  { name: "Git", icon: "" },
];

const { setCurrentSectionId } = useScroll();

function handleScroll() {
  const currentScrollTop = window.scrollY;
  const allSections = window.document.querySelectorAll("section");
  allSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (currentScrollTop >= sectionTop) {
      const id = section.getAttribute("id");
      if (id) setCurrentSectionId(id);
    }
  });
  if (currentScrollTop < window.innerHeight / 2) {
    window.document.querySelector("header")?.classList.add("hidden");
  } else {
    window.document.querySelector("header")?.classList.remove("hidden");
  }
}
</script>
