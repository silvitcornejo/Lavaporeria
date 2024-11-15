const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight : 800,
    viewportWidth : 1280,
    baseUrl: 'https://lavaporeria.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});