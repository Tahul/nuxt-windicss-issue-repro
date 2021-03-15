const plugin = require("windicss/plugin");

module.exports = plugin(function({ addComponents, addUtilities, theme }) {
  const icons = {
    ".nui-icon-button": {
      "&-sm": {
        // 14px / 18px / 20px
        width: "calc(" + theme("fontSize.xs") + " + 4px)",
        height: "calc(" + theme("fontSize.xs") + " + 4px)"
      },
      "&-md": {
        // 18px / 20px / 22px
        width: "calc(" + theme("fontSize.sm") + " + 4px)",
        height: "calc(" + theme("fontSize.sm") + " + 4px)"
      },
      // 20px / 22px / 24px
      width: "calc(" + theme("fontSize.base") + " + 4px)",
      height: "calc(" + theme("fontSize.base") + " + 4px)",
      "&-lg": {
        // 22px / 24px / 26px
        width: "calc(" + theme("fontSize.lg") + " + 4px)",
        height: "calc(" + theme("fontSize.lg") + " + 4px)"
      },
      "&-xl": {
        // 24px / 26px / 28px
        width: "calc(" + theme("fontSize.xl") + " + 4px)",
        height: "calc(" + theme("fontSize.xl") + " + 4px)"
      }
    }
  };
  addComponents(icons);
  addUtilities(icons, {
    variants: ["responsive"]
  });
});
