const plugin = require("windicss/plugin");

module.exports = plugin(function({ addComponents, addUtilities }) {
  const icons = {
    ".nui-icon": {
      "&-sm": {
        // 16px / 18px / 20px
        width: "1rem",
        height: "1rem"
      },
      "&-md": {
        // 24px / 28px / 32px
        width: "calc(2rem - 8px)",
        height: "calc(2rem - 8px)"
      },
      // 32px / 36px / 40px
      width: "2rem",
      height: "2rem",
      "&-lg": {
        // 40px / 46px / 52px
        width: "calc(3rem - 8px)",
        height: "calc(3rem - 8px)"
      },
      "&-xl": {
        // 48px / 54px / 60px
        width: "3rem",
        height: "3rem"
      }
    }
  };
  addComponents(icons);
  addUtilities(icons, {
    variants: ["responsive"]
  });
});
