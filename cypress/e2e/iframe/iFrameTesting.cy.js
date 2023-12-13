describe('My First Test usinf Iframe', () => {
    it('Iframe', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame')
        .iframe('body #button-find-out-more > b')
        .should('have.text', 'Find Out More!')

    });

})