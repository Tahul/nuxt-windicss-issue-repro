const plugin = require("windicss/plugin");

const colors = {
  black: ["green", "lime", "yellow", "teal"],
  white: ["orange", "red", "pink", "purple", "indigo", "blue"]
};
const shades = ["sky", "mint", "cloud", "stone", "sand"];

module.exports = plugin(function({ addComponents, theme }) {
  const buttons = {};

  // Colors
  Object.keys(colors).forEach(txtColor => {
    colors[txtColor].forEach(color => {
      buttons[".nui-button-" + color] = {
        transition: "all .3s",
        backgroundColor: theme("colors." + color + ".DEFAULT"),
        color: theme("colors." + txtColor),
        "&:hover": {
          boxShadow: "inset 0 0 8px" + theme("colors." + color + ".dark")
        },
        "&:active": {
          backgroundColor: theme("colors." + color + ".dark")
        },
        // Do NOT work with IE and Safari: https://caniuse.com/?search=focus-visible
        "&:focus-visible": {
          boxShadow: "0 0 0 3px " + theme("colors." + color + ".lighter")
        }
      };
    });
  });
  // Shades
  shades.forEach(shade => {
    buttons[".nui-button-" + shade] = {
      transition: "all .3s",
      backgroundColor: theme("colors." + shade + ".dark"),
      color: theme("colors.white"),
      "&:hover": {
        boxShadow: "inset 0 0 8px" + theme("colors." + shade + ".darker")
      },
      "&:active": {
        backgroundColor: theme("colors." + shade + ".darker")
      },
      // Do NOT work with IE and Safari: https://caniuse.com/?search=focus-visible
      "&:focus-visible": {
        boxShadow: "0 0 0 3px " + theme("colors." + shade + ".light")
      }
    };
  });
  // Shades LIGHT
  shades.forEach(shade => {
    buttons[".nui-button-" + shade + "-light"] = {
      transition: "all .3s",
      backgroundColor: theme("colors." + shade + ".surface"),
      color: theme("colors." + shade + ".darker"),
      "&:hover": {
        boxShadow: "inset 0 0 8px" + theme("colors." + shade + ".lightest")
      },
      "&:active": {
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
    buttons[".nui-button-" + shade + "-dark"] = {
      transition: "all .3s",
      backgroundColor: theme("colors." + shade + ".darker"),
      color: theme("colors.white"),
      "&:hover": {
        boxShadow: "inset 0 0 8px" + theme("colors." + shade + ".darkest")
      },
      "&:active": {
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
