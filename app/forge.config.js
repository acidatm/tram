// config.forge.js
const path = require('path');

module.exports = {
  packagerConfig: {
    icon: path.resolve(__dirname, "icons/logo.icns")
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        // name: "ACID",
        // version: "0.1.0",
        // author: "Johannes Hassenstein",
        // description: "ACID is a general purpose video synthesizer.",
        // iconUrl: path.resolve(__dirname, "icons/logo.ico")
      }
    },
    {
      name: "@electron-forge/maker-zip",
      config: {
        icon: path.resolve(__dirname, "icons/logo.icns")
      },
      platforms: [
        "darwin"
      ]
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        name: "TRAM",
        icon: path.resolve(__dirname, "icons/logo.icns"),
      }
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          name: "TRAM",
          maintainer: 'Johannes Hassenstein',
          homepage: 'https://johassenstein.de',
          categories: ["AudioVideo","Video","Graphics"],
          description: "TRAM is a typographic drumcomputer.",
          icon: path.resolve(__dirname, "icons/logo_512.png")
        }
      }
    }
  ]
}
