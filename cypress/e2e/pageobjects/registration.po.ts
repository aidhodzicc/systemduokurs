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

    inputNameShouldHaveValue: (value: { name: string }) => {
      this.registrationForm.inputName.should('have.value', value.name)
    },

    inputEmailShouldHaveValue: (value: { email: string }) => {
      this.registrationForm.inputEmail
        .should('be.disabled')
        .and('have.value', value.email)
    },

    inputPassword: (value: { password: string }) => {
      this.registrationForm.inputPasswordField.clear().type(value.password)
    },

    selectDayOfBirth: (value: { day: number }) => {
      this.registrationForm.daySelector.select(value.day)
    },

    selectMonthOfBirth: (value: { month: string }) => {
      this.registrationForm.monthSelector.select(value.month)
    },

    selectYearOfBirth: (value: { year: string }) => {
      this.registrationForm.yearSelector.select(value.year)
    },

    checkNewsletter: () => {
      this.registrationForm.newsletterCheckbox.check()
    },

    checkReceiveOffers: () => {
      this.registrationForm.offersCheckbox.check()
    },

    inputFirstName: (value: { firstName: string }) => {
      this.registrationForm.inputFirstNameField.clear().type(value.firstName)
    },

    inputLastName: (value: { lastName: string }) => {
      this.registrationForm.inputLastNameField.clear().type(value.lastName)
    },

    inputCompany: (value: { companyName: string }) => {
      this.registrationForm.inputCompanyField.clear().type(value.companyName)
    },

    inputFirstAddress: (value: { address: string }) => {
      this.registrationForm.inputAddress1Field.clear().type(value.address)
    },

    get registrationFormElement() {
      return cy.get('form[action="/signup"]')
    },

    get titleRadioButton() {
      return cy.get('input[type="radio"]')
    },

    get inputName() {
      return cy.get('[data-qa="name"]')
    },

    get inputEmail() {
      return cy.get('[data-qa="email"]')
    },

    get inputPasswordField() {
      return cy.get('[data-qa="password"]')
    },

    get daySelector() {
      return cy.get('[data-qa="days"]')
    },

    get monthSelector() {
      return cy.get('[data-qa="months"]')
    },

    get yearSelector() {
      return cy.get('[data-qa="years"]')
    },

    get newsletterCheckbox() {
      return cy.get('#newsletter')
    },

    get offersCheckbox() {
      return cy.get('#optin')
    },

    get inputFirstNameField() {
      return cy.get('[data-qa="first_name"]')
    },

    get inputLastNameField() {
      return cy.get('[data-qa="last_name"]')
    },

    get inputCompanyField() {
      return cy.get('[data-qa="company"]')
    },

    get inputAddress1Field() {
      return cy.get('[data-qa="address"]')
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
