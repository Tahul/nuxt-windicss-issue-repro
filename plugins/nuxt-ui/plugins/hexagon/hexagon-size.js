const plugin = require("windicss/plugin");
const base = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  whiteSpace: "nowrap",
  cursor: "pointer",
  fontWeight: "500",
  "&.disabled": {
    pointerEvents: "none",
    opacity: "0.5"
  },
  "&:focus": {
    outline: "2px solid transparent",
    outlineOffset: "2px"
  },
  ".hexagon": {
    width: "100%",
    position: "absolute",
    zIndex: "0"
  },
  ".icon": {
    zIndex: "1"
  }
};

module.exports = plugin(function({ addComponents, addUtilities, theme }) {
  const hexagons = {
    ".nui-hexagon": {
      "&-sm": {
        ...base,
        width: "2rem",
        height: "2rem",
        fontSize: theme("fontSize.xs")
      },
      "&-md": {
        ...base,
        width: "2.5rem",
        height: "2.5rem",
        fontSize: theme("fontSize.sm")
      },
      ...base,
      width: "3rem",
      height: "3rem",
      fontSize: theme("fontSize.base"),
      "&-lg": {
        ...base,
        width: "3.5rem",
        height: "3.5rem",
        fontSize: theme("fontSize.lg")
      },
      "&-xl": {
        ...base,
        width: "4rem",
        height: "4rem",
        fontSize: theme("fontSize.xl")
      }
    }
  };
  addComponents(hexagons);
  addUtilities(hexagons, {
    variants: ["responsive"]
  });
});
