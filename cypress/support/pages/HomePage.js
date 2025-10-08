class HomePage {
  visit() {
    cy.visit('/');
  }

  title() {
    return cy.get('h1.sellerHomeTitle');
  }

  logout() {
    cy.visit('/secur/logout.jsp');
  }
}

export default new HomePage();
