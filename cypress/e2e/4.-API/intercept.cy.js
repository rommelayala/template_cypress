describe('template to test api using intercept', () => {
	/** 
    it.only('Simula request Get a posts con stub', () => {
	
        //Datos de ejemplo para la simulacion
        const sampleposts= [
            {
                userId: 1,
                id: 1,
                title: "Hola que ase",
                body:  "body del Hola que ase"
            },
            {
                userId: 2,
                id: 2,
                title: "Que pasa chaval",
                body:  "body del Que pasa chaval"
            }
        ]
        //Creacion del Stub  para simular la respuesta del servidor
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', sampleposts).as('getPosts') 
        //visita la pagina de la APP SUT 
        cy.visit('https://jsonplaceholder.typicode.com')
        
        cy.get('body > div:nth-child(2) > main > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > a')
        .click({force:true})
        // cy.document().its('readyState').should('equal', 'complete');
        //Espera que se complete la solicitud interceptada
        cy.wait('@getPosts')

        //Realiza las verificaciones necesarias en la interfaz de user
        //cy.get('.posts').find('.post').should('have.length', 2)
        cy.get('pre[style^="word-wrap:"]').find('.post').should('have.length', 2)
   })
   

	it.only('Simula request Get a posts con stub', () => {
		const sampleposts = [
			{
				userId: 1,
				id: 1,
				title: 'Hola que ase',
				body: 'body del Hola que ase',
			},
			{
				userId: 2,
				id: 2,
				title: 'Que pasa chaval',
				body: 'body del Que pasa chaval',
			},
		]

		cy.intercept(
			'GET',
			'https://jsonplaceholder.typicode.com/posts',
			sampleposts
		).as('getPosts')

		cy.visit('https://jsonplaceholder.typicode.com')

		cy.get(
			'body > div:nth-child(2) > main > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > a'
		).click()
		cy.document().its('readyState').should('equal', 'complete')
		//Espera que se complete la solicitud interceptada
		cy.wait('@getPosts')
		let pre = cy.get('pre[style^="word-wrap:"]')

		cy.log(pre)
		cy.get('pre[style^="word-wrap:"]').should('be.visible')
	})
    */
    it('cy.intercept() - route responses to matching requests', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        // https://on.cypress.io/intercept
    
        let message = 'whoa, this comment does not exist'
    
        // Listen to GET to comments/1
        cy.intercept('GET', '**/comments/*').as('getComment')
    
        // we have code that gets a comment when
        // the button is clicked in scripts.js
        cy.get('.network-btn').click()
    
        // https://on.cypress.io/wait
        cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
    
        // Listen to POST to comments
        cy.intercept('POST', '**/comments').as('postComment')
    
        // we have code that posts a comment when
        // the button is clicked in scripts.js
        cy.get('.network-post').click()
        cy.wait('@postComment').should(({ request, response }) => {
          expect(request.body).to.include('email')
          expect(request.headers).to.have.property('content-type')
          expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
        })
    
        // Stub a response to PUT comments/ ****
        cy.intercept({
          method: 'PUT',
          url: '**/comments/*',
        }, {
          statusCode: 404,
          body: { error: message },
          headers: { 'access-control-allow-origin': '*' },
          delayMs: 500,
        }).as('putComment')
    
        // we have code that puts a comment when
        // the button is clicked in scripts.js
        cy.get('.network-put').click()
    
        cy.wait('@putComment')
    
        // our 404 statusCode logic in scripts.js executed
        cy.get('.network-put-comment').should('contain', message)
      })

})
