const claimsData = require("../../../fixtures/claimsData.json");

export default class manageClaimsActions {
  manageClaimsForEmployee() {
    claimsData.forEach((claim, index = 0) => {
      cy.get(".oxd-table-cell-action-space")
        .eq(claimsData.length - index - 1)
        .click();
      const status = ["Approve", "Reject", "Back"];
      cy.contains(status[index]).click();
      // cy.get(".oxd-button").click();
      //.eq(claimsData.length - index - 1)

      cy.go("back");
    });
  }

  clickOnClaimMenuItem() {
    //cy.visit("/");
    cy.contains("span", "Claim").click();
    return this;
  }

  typeInEmployeeNameField(employeeName) {
    cy.get(".oxd-autocomplete-text-input").eq(0).type(employeeName);
    cy.contains(".oxd-autocomplete-dropdown", employeeName).click();
    return this;
  }

  clickOnEmployeeClaimsLink() {
    cy.contains("a", "Employee Claims").click();
    return this;
  }

  clickSearchButton() {
    cy.contains('button[type="submit"]', "Search").click();
    return this;
    //cy.wait("1000")
  }
}
