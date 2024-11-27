/// <reference types="vite/client" />

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    cssTarget: "chrome61",
    sourcemap: true,
    rollupOptions: {
      external: ["klinecharts"],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "kline-pro.css";
          }
        },
        globals: {
          klinecharts: "kline",
        },
      },
    },
    lib: {
      entry: "./src/index.ts",
      name: "kline-pro",
      fileName: (format) => {
        if (format === "es") {
          return "kline-pro.js";
        }
        if (format === "umd") {
          return "kline-pro.umd.js";
        }
      },
    },
  },
});
