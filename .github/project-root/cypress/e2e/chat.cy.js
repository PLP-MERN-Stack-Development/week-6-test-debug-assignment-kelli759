describe('Chat functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('input[placeholder*="username"]').type('kiki');
    cy.contains('login', { matchCase: false }).click();
  });

  it('sends a chat message', () => {
    cy.get('input[placeholder*="message"]').type('Hello world');
    cy.contains('send', { matchCase: false }).click();

    cy.contains('hello world', { matchCase: false }).should('exist');
  });
});
