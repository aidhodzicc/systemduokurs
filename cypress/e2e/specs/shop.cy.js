/// <reference types="cypress" />

describe('Shop', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {})

  it('Check if product is shown properly', () => {
    cy.get('#slider-carousel').should('be.visible')

    cy.get('.single-products').should('be.visible')

    cy.get('.single-products').first().as('firstProduct')

    cy.get('.single-products').eq(1).as('secondProduct')

    cy.get('@firstProduct').should('be.visible')

    cy.get('@firstProduct')
      .find('img[src*="/get_product_picture"]')
      .should('be.visible')

    cy.get('@firstProduct').find('h2').should('be.visible')

    cy.get('@firstProduct').find('p').should('be.visible')

    cy.get('@firstProduct').find('a.add-to-cart').should('be.visible')

    cy.get('@firstProduct').find('.fa-shopping-cart').should('be.visible')

    cy.get('.choose').eq(1).as('secondViewProduct')

    cy.get('@secondViewProduct')
      .find('a[href*="product_details"]')
      .should('be.visible')

    cy.get('@secondProduct')
      .find('img[src*="/get_product_picture"]')
      .should('be.visible')

    cy.get('.features_items')
      .find('.single-products')
      .each(($el, index, $list) => {
        cy.wrap($el).find('p').should('be.visible')
        cy.fixture('item-names.json').then(($jsonData) => {
          /*cy.wrap($el)
            .find('p')
            .should('be.visible')
            .and('contain.text', $jsonData['items'][index])

          cy.wrap($el)
            .find(
              `img[src*="${$jsonData['pictureLinkOrigin']}${$jsonData['pictureLinks'][index]}"]`
            )
            .should('be.visible')*/

          cy.wrap($el)
            .find('h2')
            .should('be.visible')
            .and('contain.text', $jsonData['prices'][index])
        })
      })
  })

  it('Open product and check layout', () => {
    cy.get('#slider-carousel').should('be.visible')

    cy.get('.single-products').should('be.visible')

    cy.get('.choose').first().find('a[href*="/product_details"]').click()

    cy.get('.product-details')
      .find('img[src*="/get_product_picture"]')
      .should('be.visible')
    cy.get('.product-details').find('h2').should('be.visible')
    cy.get('.product-details span').contains('500').should('be.visible')
    cy.get('.product-details input#quantity').should('be.visible')
    cy.get('.product-details button.cart').should('be.visible')
  })

  it('Add item to cart', () => {
    cy.get('#slider-carousel').should('be.visible')

    cy.get('.single-products').should('be.visible')

    cy.get('.choose').first().find('a[href*="/product_details"]').click()

    cy.get('.product-details')
      .find('img[src*="/get_product_picture"]')
      .should('be.visible')
    cy.get('.product-details').find('h2').should('be.visible')
    cy.get('.product-details span').contains('500').should('be.visible')
    cy.get('.product-details input#quantity').should('be.visible')
    cy.get('.product-details button.cart').should('be.visible')

    cy.get('.product-details input#quantity').clear().type(2)
    cy.get('.product-details button.cart').click()

    cy.get('#cartModal .modal-content').should('be.visible')
  })

  it.only('Check if item is added to cart', () => {
    cy.get('#slider-carousel').should('be.visible')

    cy.get('.single-products').should('be.visible')

    cy.get('.choose').first().find('a[href*="/product_details"]').click()

    cy.get('.product-details')
      .find('img[src*="/get_product_picture"]')
      .should('be.visible')
    cy.get('.product-details').find('h2').should('be.visible')
    cy.get('.product-details span').contains('500').should('be.visible')
    cy.get('.product-details input#quantity').should('be.visible')
    cy.get('.product-details button.cart').should('be.visible')

    cy.get('.product-details input#quantity').clear().type(2)
    cy.get('.product-details button.cart').click()

    cy.get('#cartModal .modal-content').should('be.visible')

    cy.get('#cartModal .modal-footer .close-modal').click()

    cy.get('#header').find('a[href="/view_cart"]').should('be.visible').click()

    cy.get('table').find('tr').contains('Blue Top').should('be.visible')
  })
})
