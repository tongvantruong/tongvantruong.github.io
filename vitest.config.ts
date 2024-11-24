import AutoImport from "unplugin-auto-import/vite";

export default {
  plugins: [
    AutoImport({
      imports: ["vue"],
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  coverage: {
    all: true,
  },
};
