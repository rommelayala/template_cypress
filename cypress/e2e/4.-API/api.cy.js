describe('template to test API', () => {

/**Test GET */
	it('http response is 200', () => {
		cy.request({
			url:'https://jsonplaceholder.typicode.com/posts/1'
		}).then((result) => {
			expect(result.status).to.eq(200);

		})		
	});
		
	it('http response has 100 elements', () => {
		cy.visit('https://jsonplaceholder.typicode.com')
		cy.request('/posts')
		.its('body')
		.should('have.length', 100)
	});
	
	it('http response has title XXX in element 1', () => {
		cy.visit('https://jsonplaceholder.typicode.com')
		cy.request('/posts')
        .its('body')
        .should('be.an', 'array') // Verifica que el cuerpo sea un array
        .and('not.be.empty') // Verifica que el array no esté vacío
        .its('0.title') // Accede al título del primer elemento del array
        .should('include', 'sunt aut'); // Verifica que el título incluya el texto esperado

	});
	
	it('all posts of http response body contains a piece of text', () => {
		cy.visit('https://jsonplaceholder.typicode.com');
	
		cy.request('/posts')
			.its('body')
			.should('be.an', 'array') // Verifica que el cuerpo sea un array
        	.and('not.be.empty') // Verifica que el array no esté vacío
			.each((post) => {
				// Verifica que al menos uno de los elementos del array tenga el texto esperado
				expect(post.body).to.include('a');
			});
	});

	it('http response body contains a piece of text', () => {
		cy.visit('https://jsonplaceholder.typicode.com')
		cy.request('/posts')
		.its('body')
		.should('be.an', 'array') // Verifica que el cuerpo sea un array
        .and('not.be.empty') // Verifica que el array no esté vacío
		.each((post) => {
            // Verifica que al menos uno de los elementos del array tenga el texto esperado
            if (post.title.includes('quia et suscipit')) {
                // Verifica que el valor no se haya encontrado antes
                expect(found).to.be.false;
                found = true;
            }
	
		});
	});
	/**Test POST */
	it('El post req', ()=>{
		/**
			cy.request({
				method: 'POST',
				url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
				body: {
					title: 'foo',
					body: 'bar',
					userId: 1,
				},
			})
	 	*/
		cy.request('post','https://jsonplaceholder.typicode.com/posts',{
			userId: 1,
			id: 1,
			title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body:"Una peli"
		}).then((response)=>{
			expect(response.status).to.eq(201)
			expect(response.body).to.have.property('body', 'Una peli')
		
		})
	})

	/**Test PUT */
	it('El put req', ()=>{
	/**
		cy.request('put','XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',{
			userId: 1,
			id: 1,
			title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body:"Una peli"
		}).then((response)=>{
			expect(response.status).to.eq(200)
			expect(response.body).to.have.property('body', 'Una peli')
		
		})
	 */
		cy.request('put','https://jsonplaceholder.typicode.com/posts/2',{
			title: 'Hola',
			body: 'Mundo'
		}).then((response)=>{
			expect(response.status).to.eq(200)
			expect(response.body).to.have.property('body', 'Mundo')
		
		})
	})
	/**Test DELETE */
	it('El delete req', ()=>{
		cy.request('delete','https://jsonplaceholder.typicode.com/posts/2')
		.then((response)=>{
			expect(response.status).to.eq(200)
		})
	
	})

})
