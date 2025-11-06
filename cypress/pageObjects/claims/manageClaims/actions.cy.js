const claimsData = require("../../../fixtures/claimsData.json");

export default class manageClaimsActions {
  manageClaimsForEmployee(actionsLength, action, index) {
    cy.get(".oxd-table-cell-action-space")
      .eq(actionsLength - index - 1)
      .click();

    cy.contains(action.action).click();

    cy.go("back");
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
  }
}
