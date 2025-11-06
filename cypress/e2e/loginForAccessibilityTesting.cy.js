/// <reference types="cypress" />
import "cypress-axe";
describe("Check Accessibility Testing for login page", () => {
  it("login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.injectAxe();
    cy.checkA11y();
  });
});
