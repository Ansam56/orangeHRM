const claimsData = require("../../../fixtures/claimsData.json");

export default class addClaimsAssertions {
  verifyClaimsSubmittedSuccessfully(claim) {
    cy.contains("a", "Claim").click();

    cy.get(".oxd-table-card").should("contain", claim.event);
    cy.get(".oxd-table-card").should("contain", claim.currency);
    cy.get(".oxd-table-card").should("contain", claim.remarks);
    cy.contains('button[type="button"]', " View Details ").click();
    let total = 0;

    claim.expenses.forEach((expense) => {
      cy.get(".oxd-table-card").should("contain", expense.expensesType);
      cy.get(".oxd-table-card").should("contain", expense.amount + ".00");
      total += +expense.amount;
      cy.get(".oxd-table-card").should("contain", expense.date);
      cy.get(".oxd-table-card").should("contain", expense.note);
    });
    cy.get(".orangehrm-bottom-container p").should(
      "contain",
      "Total Amount" + " (" + claim.currency + ")" + " : " + total + ".00"
    );
  }

  verifyClaimsAppearsInAdmin(claim) {
    cy.get(".oxd-table-card").should("contain", claim.event);
    cy.get(".oxd-table-card").should("contain", claim.currency);
    cy.get(".oxd-table-card").should("contain", claim.remarks);
    cy.contains('button[type="button"]', " View Details ").click();
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
  }
}
