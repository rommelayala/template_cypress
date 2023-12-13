// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// returning false here prevents Cypress from
// failing the test. We want to keep the test running
// in case of an error.
// See https://docs.cypress.io/api/events/catalog-of-events.html#Uncaught-Exceptions for details.
// Also see https://docs.cypress.io/guides/references/error-messages.html#Cypress-detected-an-uncaught-exception-in-your-application
// for more information.
// Note: this is a workaround for a known issue with Cypress.
// See https://github.com/cypress-io/cypress/issues/9681
// for more details.
// Note: this is a workaround for a known issue with Cypress.
// See https://github.com/cypress-io/cypress/issues/9681
// for more details.
// Note: this is a workaround for a known issue with Cypress.
// See https://github.com/cypress-io/
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;  
}) 
// Alternatively you can use CommonJS syntax:
// require('./commands')
