const plugin = require("windicss/plugin");
const base = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
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
  }
};

module.exports = plugin(function({ addComponents, addUtilities, theme }) {
  const buttons = {
    ".nui-button": {
      "&-sm": {
        ...base,
        height: "calc(2rem - 8px)",
        fontSize: theme("fontSize.xs"),
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderRadius: "0.1875rem"
      },
      "&-md": {
        ...base,
        height: "2rem",
        fontSize: theme("fontSize.sm"),
        paddingLeft: "calc(1rem + 4px)",
        paddingRight: "calc(1rem + 4px)",
        borderRadius: "0.25rem"
      },
      ...base,
      height: "calc(3rem - 8px)",
      fontSize: theme("fontSize.base"),
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      borderRadius: "0.375rem",
      "&-lg": {
        ...base,
        height: "3rem",
        fontSize: theme("fontSize.lg"),
        paddingLeft: "1.75rem",
        paddingRight: "1.75rem",
        borderRadius: "0.5rem"
      },
      "&-xl": {
        ...base,
        height: "calc(4rem - 8px)",
        fontSize: theme("fontSize.xl"),
        paddingLeft: "2rem",
        paddingRight: "2rem",
        borderRadius: "0.625rem"
      }
    }
  };
  addComponents(buttons);
  addUtilities(buttons, {
    variants: ["responsive"]
  });
});
