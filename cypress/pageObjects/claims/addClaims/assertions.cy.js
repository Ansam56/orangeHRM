const claimsData = require("../../../fixtures/claimsData.json");

export default class addClaimsAddertions {
  verifyClaimsSubmittedSuccessfully() {
    claimsData.forEach((claim, index) => {
      cy.contains("a", "My Claims").click();

      cy.get(".oxd-table-card").should("contain", claim.event);
      cy.get(".oxd-table-card").should("contain", claim.currency);
      cy.get(".oxd-table-card").should("contain", claim.remarks);
      cy.get(".oxd-table-cell-action-space")
        .eq(claimsData.length - 1)
        .click();
      let total = 0;

      claim.expenses.forEach((expense) => {
        cy.get(".oxd-table-card").should("contain", expense.expensesType);
        cy.get(".oxd-table-card").should("contain", expense.amount + ".00");
        total += +expense.amount;
        const parts = expense.date.split("-");
        const formattedDate = `${parts[1]}-${parts[2]}-${parts[0]}`;
        cy.get(".oxd-table-card").should("contain", formattedDate);
        cy.get(".oxd-table-card").should("contain", expense.note);
      });
      cy.get(".orangehrm-bottom-container p").should(
        "contain",
        "Total Amount" + "(" + claim.currency + ")" + " : " + total + ".00"
      );
    });
  }
}
