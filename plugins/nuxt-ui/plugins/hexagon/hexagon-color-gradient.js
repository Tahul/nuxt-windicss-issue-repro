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

module.exports = plugin(function({ addComponents, addUtilities, theme }) {
  const hexagons = {};

  // Colors
  Object.keys(colors).forEach(txtColor => {
    colors[txtColor].forEach(color => {
      hexagons[".nui-hexagon-" + color + "-gradient"] = {
        // Icon color
        color: theme("colors." + txtColor),
        // Hexagon Border
        ".hexagon-border": {
          color: "transparent"
        },
        // Hexagon Background
        ".hexagon-gradient-top": {
          stopColor: theme("colors." + color + ".DEFAULT")
        },
        ".hexagon-gradient-bottom": {
          stopColor: theme("colors." + color + ".dark")
        },
        "&:hover": {
          ".hexagon-gradient-top": {
            stopColor: theme("colors." + color + ".dark")
          }
        },
        "&:active": {
          ".hexagon-gradient-top": {
            stopColor: theme("colors." + color + ".darker")
          }
        },
        "&:focus-visible": {
          ".hexagon-gradient": {
            // Do NOT work with IE and Safari: https://caniuse.com/?search=focus-visible
            boxShadow: "0 0 0 3px " + theme("colors." + color + ".lighter")
          }
        }
      };
    });
  });
  // Shades LIGHT
  shades.forEach(shade => {
    hexagons[".nui-hexagon-" + shade + "-light-gradient"] = {
      color: theme("colors." + shade + ".darker"),
      // Hexagon Border
      ".hexagon-border": {
        color: "transparent"
      },
      // Hexagon Background
      ".hexagon-gradient-top": {
        stopColor: theme("colors." + shade + ".surface")
      },
      ".hexagon-gradient-bottom": {
        stopColor: theme("colors." + shade + ".lightest")
      },
      "&:hover": {
        ".hexagon-gradient-top": {
          stopColor: theme("colors." + shade + ".lightest")
        }
      },
      "&:active": {
        ".hexagon-gradient-top": {
          stopColor: theme("colors." + shade + ".lighter")
        }
      },
      "&:focus-visible": {
        ".hexagon-gradient": {
          // Do NOT work with IE and Safari: https://caniuse.com/?search=focus-visible
          boxShadow: "0 0 0 3px " + theme("colors." + shade + ".light")
        }
      }
    };
  });
  // Shades DARK
  shades.forEach(shade => {
    hexagons[".nui-hexagon-" + shade + "-dark-gradient"] = {
      color: theme("colors.white"),
      // Hexagon Border
      ".hexagon-border": {
        color: "transparent"
      },
      // Hexagon Background
      ".hexagon-gradient-top": {
        stopColor: theme("colors." + shade + ".darker")
      },
      ".hexagon-gradient-bottom": {
        stopColor: theme("colors." + shade + ".darkest")
      },
      "&:hover": {
        ".hexagon-gradient-top": {
          stopColor: theme("colors." + shade + ".darkest")
        }
      },
      "&:active": {
        ".hexagon-gradient-top": {
          stopColor: theme("colors.black")
        },
        ".hexagon-gradient-bottom": {
          stopColor: theme("colors.black")
        }
      },
      "&:focus-visible": {
        ".hexagon-gradient": {
          // Do NOT work with IE and Safari: https://caniuse.com/?search=focus-visible
          boxShadow: "0 0 0 3px " + theme("colors." + shade + ".dark")
        }
      }
    };
  });
  addComponents(hexagons);
  addUtilities(hexagons, {
    variants: ["responsive"]
  });
});
