import { expect, it, vi } from "vitest";
import { useScroll } from "./useScroll";
import { mount } from "@vue/test-utils";

const TestComponent = defineComponent({
  setup() {
    return {
      ...useScroll(),
    };
  },
  render: () => "",
});

it("default currentSectionId should be home", () => {
  const { currentSectionId } = useScroll();
  expect(currentSectionId.value).toBe("home");
});

it("should be able to set new section id", () => {
  const { currentSectionId, setCurrentSectionId } = useScroll();
  const newId = "xxx";
  setCurrentSectionId(newId);
  expect(currentSectionId.value).toBe(newId);
});

it("should add scroll event onMounted", () => {
  const addEventListenerSpy = vi.spyOn(window, "addEventListener");
  mount(TestComponent);
  expect(addEventListenerSpy).toBeCalledWith("scroll", expect.any(Function));
});

it("should remove scroll event onUnmounted", () => {
  const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
  const wrapper = mount(TestComponent);
  wrapper.unmount();
  expect(removeEventListenerSpy).toBeCalledWith("scroll", expect.any(Function));
});
