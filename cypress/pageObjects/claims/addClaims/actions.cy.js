export default class addClaimsActions {
  clickOnClaimMenuItem() {
    //cy.visit("/");
    cy.contains("span", "Claim").click();
    return this;
  }

  clickOnSubmitClaimLink() {
    cy.contains("a", "Submit Claim").click();
    return this;
  }

  submitClaimsForm(claim) {
    cy.get(".oxd-select-text--arrow").eq(0).click();
    cy.contains("div", claim.event).click();

    cy.get(".oxd-select-text--arrow").eq(1).click();
    cy.contains("div", claim.currency).click();

    cy.get(".oxd-textarea").type(claim.remarks);

    cy.get('button[type="submit"]').click();

    claim.expenses.forEach((expense) => {
      this.submitExpensesForm(expense);
    });
    //cy.wait(3000);
    return this;
  }

  submitExpensesForm(expense) {
    cy.contains('button[type="button"]', "Add").eq(0).click();
    cy.get(".oxd-select-text--arrow").click();
    cy.contains("div", expense.expensesType).click();

    cy.get(".oxd-date-input-icon").click();

    const day = expense.date.split("-")[1];
    const dayNumber = parseInt(day, 10).toString();
    cy.contains(".oxd-calendar-date", dayNumber).click();

    cy.get(".oxd-input").last().type(expense.amount);

    cy.get(".oxd-textarea").last().type(expense.note);
    cy.get('button[type="submit"]').click();
  }
}
