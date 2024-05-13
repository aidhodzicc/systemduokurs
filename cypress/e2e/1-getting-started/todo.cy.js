/// <reference types="cypress" />

describe('Registration', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Successfull registraion flow', () => {
    
    cy.get('#slider-carousel').should('be.visible')

    cy.get('a[href="/login"]').click()

    cy.get('form').find('[data-qa="signup-name"]').clear().type('Aid')

    cy.get('[data-qa="signup-email"]').clear().type('aid@example.com')

    cy.get('[data-qa="signup-button"]').click()

    cy.get('input[type="radio"]').check('Mr')

    cy.get('[data-qa="name"]').should('have.value','Aid')
    
    cy.get('[data-qa="email"]').should('have.value','aid@example.com').and('be.disabled')

    cy.get('[data-qa="password"]').type('Test123')

    cy.get('[data-qa="days"]').select(13)

    cy.get('[data-qa="months"]').select('July')

    cy.get('[data-qa="years"]').select('1997')

    cy.get('#newsletter').check()

    cy.get('#optin').check()

  })
})
