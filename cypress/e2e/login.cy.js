describe('Login', () => {
  it('Successful login as creator', () => {
    cy.visit('/');
    cy.login('creator');
    cy.contains('shayne member');
    cy.get('img[alt="Admin"]').should('not.exist');
  })

  it('Successful login as super admin', () => {
    cy.visit('/');
    cy.login('superAdmin');
    cy.contains('Demo User');
    cy.get('img[alt="Admin"]').should('exist');
  })
})