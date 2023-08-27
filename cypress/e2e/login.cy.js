describe('Login', () => {
  it('Successful login as creator', () => {
    cy.visit('/');
    cy.login('creator');
    cy.contains('Josephine Neric');
  })

  it('Successful login as super admin', () => {
    cy.visit('/');
    cy.login('superAdmin');
    cy.contains('Shayne');
  })
})