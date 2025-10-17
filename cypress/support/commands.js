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

import loginActions from "../pageObjects/login/Actions.cy";

const loginactions = new loginActions();
Cypress.Commands.add('loginToOrangeHRM',(username , password)=>{
    cy.visit("/auth/login");
    cy.url().should('include', '/auth/login');
    loginactions.typeInUserName(username);
    loginactions.typeInPassword(password);
    loginactions.clickOnLoginButton();
    cy.url().should('include', '/dashboard/index');
});