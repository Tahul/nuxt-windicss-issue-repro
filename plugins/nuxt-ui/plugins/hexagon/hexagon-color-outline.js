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
      hexagons[".nui-hexagon-" + color + "-outline"] = {
        color: theme("colors." + color + ".dark"),
        // Hexagon Border
        ".hexagon-border": {
          color: theme("colors." + color + ".DEFAULT")
        },
        // Hexagon Background
        ".hexagon-gradient-top": {
          stopColor: "transparent"
        },
        ".hexagon-gradient-bottom": {
          stopColor: "transparent"
        },
        "&:hover": {
          color: theme("colors." + txtColor),
          ".hexagon-border": {
            color: "transparent"
          },
          ".hexagon-gradient-top": {
            stopColor: theme("colors." + color + ".DEFAULT")
          },
          ".hexagon-gradient-bottom": {
            stopColor: theme("colors." + color + ".DEFAULT")
          }
        },
        "&:active": {
          ".hexagon-gradient-bottom": {
            stopColor: theme("colors." + color + ".dark")
          }
        },
        "&:focus-visible": {
          // Hexagon Border
          ".hexagon-border": {
            boxShadow: "0 0 0 3px " + theme("colors." + color + ".lighter")
          }
        }
      };
    });
  });
  // Shades LIGHT
  shades.forEach(shade => {
    hexagons[".nui-hexagon-" + shade + "-light-outline"] = {
      color: theme("colors." + shade + ".lightest"),
      // Hexagon Border
      ".hexagon-border": {
        color: theme("colors." + shade + ".surface")
      },
      // Hexagon Background
      ".hexagon-gradient-top": {
        stopColor: "transparent"
      },
      ".hexagon-gradient-bottom": {
        stopColor: "transparent"
      },
      "&:hover": {
        color: theme("colors." + shade + ".darker"),
        ".hexagon-border": {
          color: "transparent"
        },
        ".hexagon-gradient-top": {
          stopColor: theme("colors." + shade + ".surface")
        },
        ".hexagon-gradient-bottom": {
          stopColor: theme("colors." + shade + ".surface")
        }
      },
      "&:active": {
        ".hexagon-gradient-bottom": {
          stopColor: theme("colors." + shade + ".lightest")
        }
      },
      "&:focus-visible": {
        // Hexagon Border
        ".hexagon-border": {
          boxShadow: "0 0 0 3px " + theme("colors." + shade + ".light")
        }
      }
    };
  });
  // Shades DARK
  shades.forEach(shade => {
    hexagons[".nui-hexagon-" + shade + "-dark-outline"] = {
      color: theme("colors." + shade + ".darkest"),
      // Hexagon Border
      ".hexagon-border": {
        color: theme("colors." + shade + ".darker")
      },
      // Hexagon Background
      ".hexagon-gradient-top": {
        stopColor: "transparent"
      },
      ".hexagon-gradient-bottom": {
        stopColor: "transparent"
      },
      "&:hover": {
        color: theme("colors.white"),
        ".hexagon-border": {
          color: "transparent"
        },
        ".hexagon-gradient-top": {
          stopColor: theme("colors." + shade + ".darker")
        },
        ".hexagon-gradient-bottom": {
          stopColor: theme("colors." + shade + ".darker")
        }
      },
      "&:active": {
        ".hexagon-gradient-bottom": {
          stopColor: theme("colors." + shade + ".darkest")
        }
      },
      "&:focus-visible": {
        // Hexagon Border
        ".hexagon-border": {
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
