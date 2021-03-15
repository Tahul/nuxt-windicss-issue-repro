const plugin = require("windicss/plugin");

const colors = {
  black: ["green", "lime", "yellow", "teal"],
  white: [
    "orange",
    "red",
    "pink",
    "purple",
    "indigo",
    "blue",
    "sky",
    "mint",
    "cloud",
    "stone",
    "sand"
  ]
};
const shades = ["sky", "mint", "cloud", "stone", "sand"];

module.exports = plugin(function({ addComponents, theme }) {
  const buttons = {};

  // Colors
  Object.keys(colors).forEach(txtColor => {
    colors[txtColor].forEach(color => {
      buttons[".nui-button-" + color + "-gradient"] = {
        transition: "all .3s",
        backgroundImage:
          "linear-gradient(" +
          theme("colors." + color + ".DEFAULT") +
          "," +
          theme("colors." + color + ".dark") +
          ")",
        color: theme("colors." + txtColor),
        "&:hover": {
          backgroundImage:
            "linear-gradient(" +
            theme("colors." + color + ".dark") +
            "," +
            theme("colors." + color + ".dark") +
            ")"
        },
        "&:active": {
          boxShadow: "inset 0 0 8px" + theme("colors." + color + ".darker")
        },
        // Do NOT work with IE and Safari: https://caniuse.com/?search=focus-visible
        "&:focus-visible": {
          boxShadow: "0 0 0 3px " + theme("colors." + color + ".lighter")
        }
      };
    });
  });
  // Shades LIGHT
  shades.forEach(shade => {
    buttons[".nui-button-" + shade + "-light-gradient"] = {
      transition: "all .3s",
      backgroundImage:
        "linear-gradient(" +
        theme("colors." + shade + ".surface") +
        "," +
        theme("colors." + shade + ".lightest") +
        ")",
      color: theme("colors." + shade + ".darker"),
      "&:hover": {
        backgroundImage:
          "linear-gradient(" +
          theme("colors." + shade + ".lightest") +
          "," +
          theme("colors." + shade + ".lightest") +
          ")"
      },
      "&:active": {
        boxShadow: "inset 0 0 8px" + theme("colors." + shade + ".lighter")
      },
      // Do NOT work with IE and Safari: https://caniuse.com/?search=focus-visible
      "&:focus-visible": {
        boxShadow: "0 0 0 3px " + theme("colors." + shade + ".light")
      }
    };
  });
  // Shades DARK
  shades.forEach(shade => {
    buttons[".nui-button-" + shade + "-dark-gradient"] = {
      transition: "all .3s",
      backgroundImage:
        "linear-gradient(" +
        theme("colors." + shade + ".darker") +
        "," +
        theme("colors." + shade + ".darkest") +
        ")",
      color: theme("colors.white"),
      "&:hover": {
        backgroundImage:
          "linear-gradient(" +
          theme("colors." + shade + ".darkest") +
          "," +
          theme("colors." + shade + ".darkest") +
          ")"
      },
      "&:active": {
        boxShadow: "inset 0 0 8px" + theme("colors.black")
      },
      // Do NOT work with IE and Safari: https://caniuse.com/?search=focus-visible
      "&:focus-visible": {
        boxShadow: "0 0 0 3px " + theme("colors." + shade + ".dark")
      }
    };
  });
  addComponents(buttons);
});
