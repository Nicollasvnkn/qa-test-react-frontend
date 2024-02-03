const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001', 

    specPattern: 'cypress/e2e_testing/**/*.ts',

    setupNodeEvents(on, config) {
    },
  },
});
