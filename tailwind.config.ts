import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        blue: "var(--blue)",
        green: "var(--green)",
        dark_grey: "var(--dark-grey)",
        white: "var(--white)",
        black: "var(--black)",
        card: "var(--bg-card)",
        stroke_color: "var(--stroke-color)",
      },
      maxWidth: {
        '1920': '1920px',
      },
      fontFamily: {
        unbounded: "var(--unbounded-font)",
      },
      fontSize: {
        hl1_fs: [
          "var(--headline-font-size)",
          {
            lineHeight: "var(--line-height-small)",
          }
        ],
        hl2_fs: [
          "var(--headline2-font-size)",
          {
            lineHeight: "var(--line-height-small)",
          }
        ],
        hl3_fs: [
          "var(--headline3-font-size)",
          {
            lineHeight: "var(--line-height-medium)",
          }
        ],
        descriptor_fs: [
          "var(--descriptor-font-size)",
          {
            lineHeight: "var(--line-height-large)",
          }
        ],
        large_fs: [
          "var(--text-large-font-size)",
          {
            lineHeight: "var(--line-height-large)",
          }
        ],
        small_fs: [
          "var(--basic-font-size)",
          {
            lineHeight: "var(--line-height-normal)",
          }
        ],
        text_fs: [
          "var(--basic-font-size)",
          {
            lineHeight: "var(--line-height-small)",
          }
        ],
        tags_fs: [
          "var(--basic-font-size)",
          {
            lineHeight: "var(--line-height-large)",
            letterSpacing: "10%",
          }
        ],
        price_fs: [
          "var(--price-font-size)",
          {
            lineHeight: "var(--line-height-small)"
          }
        ]
      }
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".numeric_fs": {
          fontSize: "var(--numeric-font-size)",
          lineHeight: "var(--line-height-small)",
          textTransform: "uppercase",
        },
        ".button_fs": {
          fontSize: "var(--button-font-size)",
          lineHeight: "var(--line-height-large)",
          textTransform: "uppercase",
          letterSpacing: "10%",
        }
      });
    },
  ],
} satisfies Config;
