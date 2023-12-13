const testData = require('../../fixtures/titulos.json')

testData.forEach((testData) => {
	describe('Seccion 9 '+testData.location+' tenga de titulo '+testData.title, () => {
		       
		it('Titulos', () => {
            cy.log('testData-> ', testData)
            cy.log('testData.Location-> ', testData.location)
            cy.log('testData.Titulo-> ', testData.title)

			cy.visit(testData.location)
			cy.title().should('include', testData.title)
		})
	})
})
