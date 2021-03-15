const plugin = require("windicss/plugin");

const multipleBoxShadow = function(n, color) {
  let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(
    Math.random() * 2000
  )}px ${color}`;
  for (let i = 0; i < n; i++) {
    value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(
      Math.random() * 2000
    )}px ${color}`;
  }
  return value;
};

module.exports = plugin(function({ addComponents, addUtilities, theme }) {
  const stars = {
    ".nui-stars": {
      "&-sm": {
        width: "1px",
        height: "1px",
        background: "transparent",
        boxShadow: multipleBoxShadow(700, theme("colors.white")),
        animation: "animStar 60s linear infinite",
        "&:after": {
          content: " ",
          position: "absolute",
          top: "2000px",
          width: "1px",
          height: "1px",
          background: "transparent",
          boxShadow: multipleBoxShadow(700, theme("colors.white"))
        }
      },
      "&-md": {
        width: "2px",
        height: "2px",
        background: "transparent",
        boxShadow: multipleBoxShadow(200, theme("colors.cloud.surface")),
        animation: "animStar 90s linear infinite",
        "&:after": {
          content: " ",
          position: "absolute",
          top: "2000px",
          width: "2px",
          height: "2px",
          background: "transparent",
          boxShadow: multipleBoxShadow(200, theme("colors.cloud.surface"))
        }
      },
      "&-lg": {
        width: "3px",
        height: "3px",
        background: "transparent",
        boxShadow: multipleBoxShadow(100, theme("colors.sky.surface")),
        animation: "animStar 120s linear infinite",
        "&:after": {
          content: " ",
          position: "absolute",
          top: "2000px",
          width: "3px",
          height: "3px",
          background: "transparent",
          boxShadow: multipleBoxShadow(100, theme("colors.sky.surface"))
        }
      }
    }
  };
  addComponents(stars);
  addUtilities(stars, {
    variants: ["responsive"]
  });
});
