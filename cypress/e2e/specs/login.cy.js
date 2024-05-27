/// <reference types="cypress" />

describe('Login', () => {
  let email
  let unexistingUserEmail
  const password = 'Test123'

  before(() => {
    email = `aid${Date.now()}@example.com`
    unexistingUserEmail = `unexisting${Date.now()}@example.com`
  })

  beforeEach(() => {
    cy.visit('/')

    cy.get('#slider-carousel').should('be.visible')
    // Given - user has existing account
    cy.get('a[href="/login"]').click()

    cy.get('form').find('[data-qa="signup-name"]').clear().type('Aid')

    cy.get('[data-qa="signup-email"]').clear().type(email)

    cy.get('[data-qa="signup-button"]').click()

    cy.get('input[type="radio"]').check('Mr')

    cy.get('[data-qa="name"]').should('have.value', 'Aid')

    cy.get('[data-qa="email"]').should('have.value', email).and('be.disabled')

    cy.get('[data-qa="password"]').type(password)

    cy.get('[data-qa="days"]').select(13)

    cy.get('[data-qa="months"]').select('July')

    cy.get('[data-qa="years"]').select('1997')

    cy.get('#newsletter').check()

    cy.get('#optin').check()

    cy.get('[data-qa="first_name"]').clear().type('Aid')

    cy.get('[data-qa="last_name"]').clear().type('Hodzic')

    cy.get('[data-qa="company"]').clear().type('QA')

    cy.get('[data-qa="address"]').clear().type('Zmaja od Bosne')

    cy.get('[data-qa="address2"]').clear().type('Zmaja od Bosne')

    cy.get('[data-qa="country"]').select('Canada')

    cy.get('[data-qa="state"]').clear().type('Sarajevo')

    cy.get('[data-qa="city"]').clear().type('Sarajevo')

    cy.get('[data-qa="zipcode"]').clear().type('71000')

    cy.get('[data-qa="mobile_number"]').clear().type('061123123')

    cy.get('[data-qa="create-account"]').click()

    cy.get('[data-qa="account-created"]')
      .should('be.visible')
      .and('have.text', 'Account Created!')

    cy.get('[data-qa="continue-button"]').click()

    cy.get('a[href="/logout"]').click()
  })

  afterEach(() => {})

  it('Successfull login with existing user', () => {
    cy.visit('/')

    cy.get('#slider-carousel').should('be.visible')

    cy.get('a[href="/login"]').click()

    cy.get('.login-form').should('be.visible')

    cy.get('[data-qa="login-email"]').clear().type(email)

    cy.get('[data-qa="login-password"]').clear().type(password)

    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as Aid').should('be.visible')
  })

  it('User tries to log in with inccorect passowrd', () => {
    cy.visit('/')

    cy.get('#slider-carousel').should('be.visible')

    cy.get('a[href="/login"]').click()

    cy.get('.login-form').should('be.visible')

    cy.get('[data-qa="login-email"]').clear().type(email)

    cy.get('[data-qa="login-password"]').clear().type(`${password}12345`)

    cy.get('[data-qa="login-button"]').click()

    cy.get('form[action="/login"]')
      .find('p[style="color: red;"]')
      .should('be.visible')
      .as('errorMessageLogin')

    cy.get('@errorMessageLogin').should(
      'contain.text',
      'Your email or password is incorrect!'
    )
  })

  it('User tries to login with unexisting email', () => {
    cy.visit('/')

    cy.get('#slider-carousel').should('be.visible')

    cy.get('a[href="/login"]').click()

    cy.get('.login-form').should('be.visible')

    cy.get('[data-qa="login-email"]').clear().type(unexistingUserEmail)

    cy.get('[data-qa="login-password"]').clear().type(password)

    cy.get('[data-qa="login-button"]').click()

    cy.get('form[action="/login"]')
      .find('p[style="color: red;"]')
      .should('be.visible')
      .as('errorMessageLogin')

    cy.get('@errorMessageLogin').should(
      'contain.text',
      'Your email or password is incorrect!'
    )
  })
})
