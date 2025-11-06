/// <reference types="cypress" />
import "cypress-axe";
describe("Check Accessibility Testing for pages", () => {
  before(() => {
    cy.loginToOrangeHRM("Admin", "admin123");
  });
  const pages = [
    "/pim/viewEmployeeList",
    "/admin/viewSystemUsers",
    "/dashboard/index",
    "/leave/viewLeaveList",
  ];
  //   for (let i in pages) {
  //     const pageName = pages[i].split("/")[1];
  //     it(`check Accessibility Testing for ${pageName} page`, () => {
  //       cy.visit(pages[i]);
  //       cy.injectAxe();
  //       cy.checkA11y();
  //     });
  //   }

  pages.forEach((page) => {
    const pageName = page.split("/")[1];
    it(`check Accessibility Testing for ${pageName} page`, () => {
      cy.visit(page);
      cy.injectAxe();
      cy.checkA11y();
    });
  });
});
