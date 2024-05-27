/// <reference types="cypress" />

describe("Contact form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(() => {});

  it("Contact us through form", () => {
    cy.get("#slider-carousel").should("be.visible");

    cy.get('a[href="/contact_us"]').should("be.visible").click();

    cy.get("#contact-us-form").should("be.visible");

    cy.get('input[name="name"]').clear().type("Aid");

    cy.get('input[name="email"]').clear().type("aid@example.com");

    cy.get('input[name="subject"]').clear().type("Subject");

    cy.get("#message").clear().type("Message");

    cy.get('[data-qa="submit-button"]').click();

    cy.get(".alert-success")
      .should("be.visible")
      .and(
        "contain.text",
        "Success! Your details have been submitted successfully."
      );
  });
});
