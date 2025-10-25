const claimsData = require("../../../fixtures/claimsData.json");

export default class manageClaimsAssertions {
  verifyClaimsManagedSuccessfully() {
    const status = ["Paid", "Rejected", "Submitted"];
    claimsData.forEach((claim, index = 0) => {
      //cy.wait("3000");

      cy.get(".oxd-table-card")
        .eq(claimsData.length - index - 1)
        .should("contain", status[index]);
    });

    return this;
  }
}
