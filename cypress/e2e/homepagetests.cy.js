import LoginPage from "../support/pages/LoginPage";

describe('Salesforce Lightning Home Page Test', () => {
  it('Navigate to Login Page', () => {
    LoginPage.visit();
    cy.url().should('contain', 'centricasfteam--frameworks.sandbox');
  });

  it('Login to Salesforce', () => {
    LoginPage.visit();
    cy.get('#username').type(Cypress.env('salesforceUsername'));
    cy.get('#password').type(Cypress.env('salesforcePassword'));
    cy.get('#Login').click();
  });
});
