// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import testData from '../fixtures/testData.json'

Cypress.Commands.add('login', (userType) => {
    let email;
    let password;
    if (userType == 'creator') {
        email = testData.creatorEmail;
        password = testData.creatorPassword;
    } else if (userType == 'superAdmin') {
        email = testData.superAdminEmail;
        password = testData.superAdminPassword;
    }

    cy.get('button[id="login-btn"]').click();
    cy.get('input[id="admin_email"]').type(email);
    cy.get('input[id="admin_password"]').type(password);
    cy.get('input[name="commit"]').click();
})

Cypress.Commands.add('changeApplication', (application) => {
    cy.get('div[id="user-details"]').realHover();
    cy.contains('Change Application').click();
    cy.get('input[id="search"]').type(application);
    cy.contains(application).click();
})