describe('Main Comp', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('Should have a title', () => {
        cy.get('h1')
            .should('have.text', 'Fun with API')
    })
    it('Should have a form', () => {
        cy.get('form').should('be.visible')
        cy.get('label').contains('Enter prompt')
        cy.get('textarea').should('be.visible')
        cy.get('.submit-btn').should('be.visible')
            .should('have.css', 'transition')
    })
    it('Should have a space for responses', () => {
        cy.get('.responses-title').should('have.text', 'Responses')
        cy.get('.responses-container').should('be.visible')
    })
})