const { fontFamily } = require("windicss/defaultTheme");

module.exports = {
  fontFamily: {
    sans: ["DM Sans", ...fontFamily.sans],
    mono: ["DM Mono", ...fontFamily.mono]
  },
  fontSize: {
    // Headings (line-height: 1rem + 8px)
    "display-6": ["calc(2rem - 16px)", { lineHeight: "calc(2rem - 8px)" }], // 16px / 20px / 24px
    "display-5": ["calc(2rem - 8px)", { lineHeight: "2rem" }], // 24px / 28px / 32px
    "display-4": ["2rem", { lineHeight: "calc(2rem + 8px)" }], // 32px / 36px / 40px
    "display-3": ["calc(3rem - 16px)", { lineHeight: "calc(3rem - 8px)" }], // 32px / 38px / 44px
    "display-2": ["calc(3rem - 8px)", { lineHeight: "3rem" }], // 40px / 46px / 52px
    "display-1": ["3rem", { lineHeight: "calc(3rem + 8px)" }] // 48px / 54px / 60px
  }
};
