import { Page } from './base.po'

export class ProductPage extends Page {
  constructor() {
    super('shop', cy)
  }

  productShouldBeVisible() {
    this.firstProductOnPage.should('be.visible')
  }

  get firstProductOnPage() {
    return cy.get('.single-products').first()
  }
}
