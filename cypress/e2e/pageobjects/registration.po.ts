import { Page } from '../pageobjects/base.po'

export class RegistrationPage extends Page {
  constructor() {
    super(`signup`, cy)
  }

  navigateToRegistration() {
    this.registrationLink.should('be.visible').click()
    this.registrationNameEmailform.should('be.visible')
  }

  populateNameAndEmailForRegistration(value: { name: string; email: string }) {
    this.registraionNameInput.clear().type(value.name)
    this.registrationEmailInput.clear().type(value.email)
  }

  clickSignUpButton() {
    this.signUpButton.should('be.visible').click()
  }

  registrationForm = {
    shouldBeVisible: () => {
      this.registrationForm.registrationFormElement.should('be.visible')
    },

    selectTitle: (value: { titleValue: string }) => {
      this.registrationForm.titleRadioButton.check(value.titleValue)
    },

    get registrationFormElement() {
      return cy.get('form[action="/signup"]')
    },

    get titleRadioButton() {
      return cy.get('input[type="radio"]')
    },
  }

  get registrationLink() {
    return cy.get('a[href="/login"]')
  }

  get registrationNameEmailform() {
    return cy.get('.signup-form')
  }

  get registraionNameInput() {
    return cy.get('[data-qa="signup-name"]')
  }

  get registrationEmailInput() {
    return cy.get('[data-qa="signup-email"]')
  }

  get signUpButton() {
    return cy.get('[data-qa="signup-button"]')
  }
}
