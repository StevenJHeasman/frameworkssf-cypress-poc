class LoginPage {
  visit() {
    cy.visit('/');
  }

  enterUsername(username) {
    cy.get('#username').type(username);
  }

  enterPassword(password) {
    cy.get('#password').type(password);
  }
  
  clickLogin() {
    cy.get('#Login').click();
  }
}

export default new LoginPage();