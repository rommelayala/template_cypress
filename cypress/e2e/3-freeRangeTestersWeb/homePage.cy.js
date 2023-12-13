describe('Homepage www.freerangetesters.com', () => {
	beforeEach(() => {
		cy.visit('https://www.freerangetesters.com/')
	})
	it('Should have a title', () => {
		// cy.wait(6000)
		cy.log('EL titulo -> ', cy.title()[0])
		cy.title().should('eq', 'Free Range Testers')
	})
	it('Check amount of elements in a courses section', () => {
		cy.get(
			'header>nav>ul>li>a[href="https://www.freerangetesters.com/cursos"]'
		).click()
		/** https://docs.cypress.io/api/commands/should#Method-and-Value */
		cy.get(
			'div[id="page_section_46411375"]>div>section>div>div>div'
		).should('have.length', 10)
	})
	it('Check class value, class="sc-dmqHEX gIllMw"', () => {
		cy.get('a[href="https://www.freerangetesters.com/contacto"]').click()
		/** https://docs.cypress.io/api/commands/should#Method-and-Value */
		cy.get('section>div[data-testid="container"]>div>header').should(
			'have.class',
			'sc-kgKVFY dSDJAr'
		)
	})
	it('Check attribute value has specific value href=https://discordloco)', () => {
		cy.get('a[href="https://www.freerangetesters.com/contacto"]').click()
		/** https://docs.cypress.io/api/commands/should#Method-and-Value */
		cy.get('a[href="https://discordloco"]').should(
			'have.attr',
			'href',
			'https://discordloco'
		)
	})
	it('Check if a button is not visible', () => {
		cy.get('header>div>button').should('not.be.visible')
	})
	it('Check image in the header is visible', () => {
		cy.get('header>div>a').should('be.visible')
	})
	it('Get element by text ', () => {
	
		// Obtén la posición inicial del scroll
		let initialScrollTop
		cy.window().then((win) => {
			initialScrollTop = win.scrollY
		})

		// Hacer clic en el botón
		cy.contains('Accedé al mejor precio').click()

		// Verificar que la página esté en la parte superior después de hacer clic en el botón
		cy.window().should((win) => {
			expect(win.scrollY).to.equal(initialScrollTop)
		})
	})
})
