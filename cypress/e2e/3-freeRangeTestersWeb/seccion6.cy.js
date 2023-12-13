describe('Seccion 6 https://the-internet.herokuapp.com/', () => {
	beforeEach(() => {
		cy.visit('https://the-internet.herokuapp.com/')
	})
	it('Doing click on link Challenging DOM', () => {
		cy.wait(3000)
        cy.contains('Challenging DOM').click()
			
	})
    it('Doing click on link Challenging DOM', () => {
    
        cy.contains('Multiple Windows').click()
        cy.get('a[href="/windows/new"]').invoke('removeAttr', 'target').click()
        cy.get('.example>h3')
        .should('be.visible')
        .and('have.text','New Window')

    

    })

	
})
