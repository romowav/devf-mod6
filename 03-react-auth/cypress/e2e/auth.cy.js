describe('template spec', () => {
  it('Mi aplicacion esta leyendo Home en /', () => {
    cy.visit('/')

    cy.get('h1')
      .contains('Home')
  })
  it('probar login como CUSTOMER', () => {
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('login')

    cy.visit('/login')

    cy.get('input[name="email"]').type('drstrange@marvel.com')
    cy.get('input[name="password"]').type('multiverso')
    cy.get('button[type="submit"]').click()

    cy.wait('@login')

    cy.get('h1')
      .contains('Home')
  })

  it('Cuando haga logout como ADMIN me lleve a la pagina de Home', () => {
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('login')

    cy.visit('/login')

    cy.get('input[name="email"]').type('superman@dc.com')
    cy.get('input[name="password"]').type('superman')
    cy.get('button[type="submit"]').click()

    cy.wait('@login')

    cy.get('nav > ul > li:last').click()
    
    cy.get('h1')
      .contains('Home')
  })
})
