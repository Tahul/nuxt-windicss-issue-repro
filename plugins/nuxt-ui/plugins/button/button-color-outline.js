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
      buttons[".nui-button-" + color + "-outline"] = {
        transition: "all .3s",
        borderWidth: "1px",
        backgroundColor: "transparent",
        borderColor: theme("colors." + color + ".DEFAULT"),
        color: theme("colors." + color + ".DEFAULT"),
        "&:hover": {
          borderColor: theme("colors." + color + ".DEFAULT"),
          backgroundColor: theme("colors." + color + ".DEFAULT"),
          color: theme("colors." + txtColor)
        },
        "&:active": {
          borderColor: theme("colors." + color + ".dark"),
          backgroundColor: theme("colors." + color + ".dark")
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
    buttons[".nui-button-" + shade + "-light-outline"] = {
      transition: "all .3s",
      borderWidth: "1px",
      backgroundColor: "transparent",
      borderColor: theme("colors." + shade + ".surface"),
      color: theme("colors." + shade + ".surface"),
      "&:hover": {
        backgroundColor: theme("colors." + shade + ".surface"),
        color: theme("colors." + shade + ".darker")
      },
      "&:active": {
        borderColor: theme("colors." + shade + ".lightest"),
        backgroundColor: theme("colors." + shade + ".lightest")
      },
      // Do NOT work with IE and Safari: https://caniuse.com/?search=focus-visible
      "&:focus-visible": {
        boxShadow: "0 0 0 3px " + theme("colors." + shade + ".light")
      }
    };
  });
  // Shades DARK
  shades.forEach(shade => {
    buttons[".nui-button-" + shade + "-dark-outline"] = {
      transition: "all .3s",
      borderWidth: "1px",
      backgroundColor: "transparent",
      borderColor: theme("colors." + shade + ".darker"),
      color: theme("colors." + shade + ".darker"),
      "&:hover": {
        backgroundColor: theme("colors." + shade + ".darker"),
        color: theme("colors.white")
      },
      "&:active": {
        borderColor: theme("colors." + shade + ".darkest"),
        backgroundColor: theme("colors." + shade + ".darkest")
      },
      // Do NOT work with IE and Safari: https://caniuse.com/?search=focus-visible
      "&:focus-visible": {
        boxShadow: "0 0 0 3px " + theme("colors." + shade + ".dark")
      }
    };
  });
  addComponents(buttons);
});
