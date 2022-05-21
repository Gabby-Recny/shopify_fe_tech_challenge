describe('Error Flows', () => {
    it('Should show 404 Error Page when user types in wrong URL', () => {
        cy.visit('http://localhost:3000/sdfsdf')
        cy.get('.error-page-img').should('be.visible').should('have.attr', 'alt', 'Crystal ball for a 404 error')
        cy.get('.error-page-msg').should('have.text', `We're sorry, there seems to be a 404 Error. The crystyal ball says to refresh or press the  magic button below.`)
        cy.get('.error-page-btn').should('be.visible').click()
            .visit('http://localhost:3000/')
        cy.get('textarea').should('be.visible')
    })
})