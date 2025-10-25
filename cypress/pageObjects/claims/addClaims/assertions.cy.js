const claimsData = require("../../../fixtures/claimsData.json");

export default class addClaimsAssertions {
  verifyClaimsSubmittedSuccessfully() {
    claimsData.forEach((claim, index = 0) => {
      //cy.wait("3000");
      cy.contains("a", "My Claims").click();

      cy.get(".oxd-table-card").should("contain", claim.event);
      cy.get(".oxd-table-card").should("contain", claim.currency);
      cy.get(".oxd-table-card").should("contain", claim.remarks);
      cy.get(".oxd-table-cell-action-space")
        .eq(claimsData.length - index - 1)
        .click();
      let total = 0;

      claim.expenses.forEach((expense) => {
        cy.get(".oxd-table-card").should("contain", expense.expensesType);
        cy.get(".oxd-table-card").should("contain", expense.amount + ".00");
        total += +expense.amount;
        // const parts = expense.date.split("-");
        // const formattedDate = `${parts[1]}-${parts[2]}-${parts[0]}`;
        // const parts = expense.date.split("-");
        // const formattedDate = `${parts[0]}-${parts[2]}-${parts[1]}`;
        cy.get(".oxd-table-card").should("contain", expense.date);
        cy.get(".oxd-table-card").should("contain", expense.note);
      });
      cy.get(".orangehrm-bottom-container p").should(
        "contain",
        "Total Amount" + " (" + claim.currency + ")" + " : " + total + ".00"
      );
    });
  }

  verifyClaimsAppearsInAdmin() {
    claimsData.forEach((claim, index = 0) => {
      //cy.wait("3000");
      cy.get(".oxd-table-card").should("contain", claim.event);
      cy.get(".oxd-table-card").should("contain", claim.currency);
      cy.get(".oxd-table-card").should("contain", claim.remarks);
      cy.get(".oxd-table-cell-action-space")
        .eq(claimsData.length - index - 1)
        .click();
      //let total = 0;

      claim.expenses.forEach((expense) => {
        cy.get(".oxd-table-card").should("contain", expense.expensesType);
        cy.get(".oxd-table-card").should("contain", expense.amount + ".00");
        //total += +expense.amount;
        // const parts = expense.date.split("-");
        // const formattedDate = `${parts[0]}-${parts[2]}-${parts[1]}`;
        cy.get(".oxd-table-card").should("contain", expense.date);
        cy.get(".oxd-table-card").should("contain", expense.note);
      });
      cy.go("back");
    });
  }
}
