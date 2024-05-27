/// <reference types="cypress" />

import {
  registrationPage,
  password,
  name,
  loginPage,
} from '../utils/initialize'

describe('Registration', () => {
  let email
  let invalidEmail

  beforeEach(() => {
    email = `aid${Date.now()}@example.com`
    invalidEmail = `aid${Date.now()}`
    cy.visit('/')
  })

  afterEach(() => {})

  it.only('Successfull registraion flow', () => {
    // When
    registrationPage.navigateToRegistration()
    registrationPage.populateNameAndEmailForRegistration({
      name: name,
      email: email,
    })
    registrationPage.clickSignUpButton()

    // Then
    registrationPage.registrationForm.shouldBeVisible()

    registrationPage.registrationForm.selectTitle({ titleValue: 'Mr' })

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
  })

  it('Registration with blank password field', () => {
    cy.get('#slider-carousel').should('be.visible')

    cy.get('a[href="/login"]').click()

    cy.get('form').find('[data-qa="signup-name"]').clear().type('Aid')

    cy.get('[data-qa="signup-email"]').clear().type(email)

    cy.get('[data-qa="signup-button"]').click()

    cy.get('[data-qa="create-account"]').click()

    cy.get('input:invalid').should('have.length.gt', 0).and('be.visible')

    cy.get('input:invalid')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Please fill out this field.')

    cy.get('[data-qa="password"]').then(($input) => {
      expect($input[0].validationMessage).to.include(
        'Please fill out this field.'
      )
    })
  })

  it('Try to access registration form with invalid email format', () => {
    // When - user visits registration page and input invalid email format
    cy.get('#slider-carousel').should('be.visible')

    cy.get('a[href="/login"]').click()

    cy.get('form').find('[data-qa="signup-name"]').clear().type('Aid')

    cy.get('[data-qa="signup-email"]').clear().type(invalidEmail)

    // Then - error message is shown
    cy.get('[data-qa="signup-email"]').then(($input) => {
      expect($input[0].validationMessage).to.include(
        `Please include an '@' in the email address. '${invalidEmail}' is missing an '@'.`
      )
    })
  })
})
