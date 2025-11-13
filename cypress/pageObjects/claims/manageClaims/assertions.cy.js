const claimsData = require("../../../fixtures/claimsData.json");

export default class manageClaimsAssertions {
  verifyClaimsManagedSuccessfully(status) {
    cy.get(".oxd-table-card").should("contain", status);

    return this;
  }
}
