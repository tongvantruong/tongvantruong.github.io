import { ref } from "vue";

const currentSectionId = ref("home");

export function useScroll() {
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentScrollTop = window.scrollY;
    const allSections = window.document.querySelectorAll("section");
    allSections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (currentScrollTop >= sectionTop) {
        const id = section.getAttribute("id");
        if (id) currentSectionId.value = id;
      }
    });
    const isReachBottom =
      currentScrollTop + window.innerHeight >=
      window.document.getElementsByTagName("body")[0].scrollHeight;
    if (isReachBottom) {
      const idOfLastSection =
        allSections[allSections.length - 1].getAttribute("id");
      if (idOfLastSection) currentSectionId.value = idOfLastSection;
    }
    if (currentScrollTop < window.innerHeight / 2) {
      window.document.querySelector("header")?.classList.add("hidden");
    } else {
      window.document.querySelector("header")?.classList.remove("hidden");
    }
  }

  function setCurrentSectionId(value: string) {
    currentSectionId.value = value;
  }

  return { currentSectionId, setCurrentSectionId };
}
