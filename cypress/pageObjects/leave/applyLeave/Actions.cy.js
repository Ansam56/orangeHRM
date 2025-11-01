const today = new Date();

const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();

const formattedDate = `${year}-${day}-${month}`;
const toDate = `${day}-${month}-${year}`;
export default class applyLeaveActions {
  clickOnApplyLinkInNavBar() {
    cy.contains("a", "Apply").click();
    return this;
  }

  clickOnLeaveType() {
    cy.contains("div", "Leave Type").parent().find("i").click();
    return this;
  }

  selectFirstLeave() {
    cy.get('div[role="listbox"]').find("div").eq(1).click();
    return this;
  }

  typeInFromDate() {
    cy.contains("div", "From Date").parent().find("i").click();

    return this;
  }
  selectToday() {
    cy.get(".--today").first().click();
    return this;
  }

  typeInToDate() {
    cy.contains("div", "To Date").parent().find("i").click();
    return this;
  }

  clickOnApplyButton() {
    cy.get('button[type="submit"]').click();
    return this;
  }
}
