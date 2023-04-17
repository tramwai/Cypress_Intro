const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    // test do not run by themselves when a change occurs(change to "true" otherwise)
    watchForFileChanges: false,
    // custom timeout
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
  },
});
