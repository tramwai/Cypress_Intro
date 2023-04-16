const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // test do not run by themselves when a change occurs(change to "true" otherwise)
    watchForFileChanges: false,
    // custom timeout
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
