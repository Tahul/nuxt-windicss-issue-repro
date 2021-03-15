const plugin = require("windicss/plugin");

module.exports = plugin(function({ addUtilities }) {
  const underlines = {
    ".nui-underline": {
      position: "relative"
    },
    ".nui-underline::after": {
      content: '""',
      position: "absolute",
      top: "100%",
      left: "50%",
      width: "0",
      height: "1px",
      transition: "all .3s",
      backgroundColor: "currentColor"
    },
    ".nui-underline:hover::after": {
      width: "100%",
      left: "0"
    },
    ".nui-underline-left": {
      position: "relative"
    },
    ".nui-underline-left:hover::after": {
      width: "100%",
      left: "0"
    },
    ".nui-underline-left::after": {
      content: '""',
      position: "absolute",
      top: "100%",
      left: "0",
      width: "0",
      height: "1px",
      transition: "all .3s",
      backgroundColor: "currentColor"
    }
  };

  addUtilities(underlines);
});
