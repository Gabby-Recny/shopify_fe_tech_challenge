describe('Main Comp', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('Should be able to type a prompt in the text area', () => {
        cy.get('.submit-btn').should('be.disabled')
        cy.get('textarea')
            .type('Make me a milkshake')
            .should('have.text', 'Make me a milkshake')
        cy.get('.submit-btn').should('not.be.disabled')

    })
    it('Should be able to submit a prompt', () => {
        cy.get('textarea')
            .type('Why is the sky blue?')
            .should('have.text', 'Why is the sky blue?')
        cy.get('.submit-btn').click()
            .intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions', { fixture:'response.json' })
        cy.get('.loading-img').should('be.visible')
        cy.wait(2000)
        cy.get('.response-card').first()
            .should('be.visible')
            .get('#writtenResponse')
            .should('have.text', 'A phenomenon called Raleigh scattering. The scattering refers to scattering electromagnetic radiation by particles of a smaller wavelength.')
    })
})


