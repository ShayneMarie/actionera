describe('Login', () => {
  it('Successful changing of application', () => {
    cy.visit('/');
    cy.login('superAdmin');
    cy.changeApplication('Shayne-Demo');
    cy.get('img[alt="Setup"]').realHover();
    cy.contains('Web Setup').click();
    cy.get('a[href="https://ae-web.techtank.ca/Shayne"]').realHover().invoke('removeAttr', 'target').click();
    cy.url().should('eq', 'https://ae-web.techtank.ca/Shayne');
  })
})