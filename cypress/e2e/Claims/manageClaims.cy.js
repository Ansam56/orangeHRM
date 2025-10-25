/// <reference types="cypress" />

import manageClaimsActions from "../../pageObjects/claims/manageClaims/actions.cy.js";
import manageClaimsAssertions from "../../pageObjects/claims/manageClaims/assertions.cy.js";

const manageClaimsAction = new manageClaimsActions();
const manageClaimsAssertion = new manageClaimsAssertions();

describe("Check Manage Claims Functionality", () => {
  let employees = [];
  let loginDetails = [];
  before(() => {
    cy.loginToOrangeHRM("Admin", "admin123");
    cy.fixture("employees.json").then((emps) => {
      employees = emps;
    });
    cy.fixture("loginDetails.json").then((logins) => {
      loginDetails = logins;
    });
  });

  it("verify that the admin can manage the employee's claims", () => {
    manageClaimsAction
      .clickOnClaimMenuItem()
      .typeInEmployeeNameField(
        employees[0].firstName +
          " " +
          employees[0].middleName +
          " " +
          employees[0].lastName
      )
      .clickSearchButton()
      .manageClaimsForEmployee();

    manageClaimsAction
      .clickOnEmployeeClaimsLink()
      .typeInEmployeeNameField(
        employees[0].firstName +
          " " +
          employees[0].middleName +
          " " +
          employees[0].lastName
      );

    manageClaimsAssertion.verifyClaimsManagedSuccessfully();
    cy.logout();
    cy.loginToOrangeHRM(loginDetails[0].username, loginDetails[0].password);
    //    manageClaimsAction.clickOnClaimMenuItem();

    manageClaimsAction.clickOnClaimMenuItem();
    manageClaimsAssertion.verifyClaimsManagedSuccessfully();
  });
});
