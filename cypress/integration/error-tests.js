describe('Error Flows', () => {
    it('Should show 404 Error Page when user types in wrong URL', () => {
        cy.visit('http://localhost:3000/sdfsdf')
        cy.get('.error-page-img').should('be.visible').should('have.attr', 'alt', 'Crystal ball for a 404 error')
        cy.get('.error-page-msg').should('have.text', `We're sorry, there seems to be a 404 Error. The crystyal ball says to refresh or press the  magic button below.`)
        cy.get('.error-page-btn').should('be.visible').click()
            .visit('http://localhost:3000/')
        cy.get('textarea').should('be.visible')
    })
    it('Should show an error message if a response does not come through', () => {
        cy.visit('http://localhost:3000/')
        cy.get('textarea')
        .type('How many woods does a woodchuck chuck?')
        .should('have.text', 'How many woods does a woodchuck chuck?')
        cy.get('.submit-btn').click()
            .intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions', {
            body: {
                prompt: `How many woods does a woodchuck chuck?`,
                temperature: 0.5,
                max_tokens: 64,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0
            }
        })
        .get('.prompt-error-msg').should('have.text', 'There seems to be an error on our end. Please refresh and try again!')
    })
})
