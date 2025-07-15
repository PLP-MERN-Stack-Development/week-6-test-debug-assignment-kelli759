describe('Login flow', () => {
  it('logs in with valid username', () => {
    cy.visit('http://localhost:5173');

    cy.get('input[placeholder*="username"]')
      .type('kiki')
      .should('have.value', 'kiki');

    cy.contains('login', { matchCase: false }).click();

    cy.contains('welcome, kiki', { matchCase: false }).should('exist');
  });
});
