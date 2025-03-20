/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from "@iconify/tailwind";
import daisyUI from "daisyui";
import { error } from "node_modules/astro/dist/core/logger/core";

export const content = ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"];
export const theme = {
  extend: {},
};
export const safelist = [
  "alert",
  "alert-info",
  "alert-success",
  "alert-warning",
  "alert-error",
];
export const plugins = [daisyUI, addDynamicIconSelectors];
export const daisyui = {
  themes: [
    "winter",
    {
      dim: {
        ...require("daisyui/src/theming/themes")["dim"],
        secondary: "#fec8c8",
        error: "#ff6266",
      },
    }
  ],
  logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
};
