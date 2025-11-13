/// <reference types="cypress" />

import manageClaimsActions from "../../pageObjects/claims/manageClaims/actions.cy.js";
import manageClaimsAssertions from "../../pageObjects/claims/manageClaims/assertions.cy.js";
import dataUtiles from "../../support/dataUtiles.cy.js";
const actions = require("../../fixtures/actions.json");
const claimsData = require("../../fixtures/claimsData.json");

const datautiles = new dataUtiles();
const manageClaimsAction = new manageClaimsActions();
const manageClaimsAssertion = new manageClaimsAssertions();

describe("Check Manage Claims Functionality", () => {
  let employees = [];
  let loginDetails = [];
  before(() => {
    cy.fixture("employees.json").then((emps) => {
      employees = emps;
    });
    cy.fixture("loginDetails.json").then((logins) => {
      loginDetails = logins;
    });
  });

  actions.forEach((action, index = 0) => {
    it(`verify that the admin can ${
      action.action == "Back" ? "perform no action on" : action.action
    } the employee's claim`, () => {
      cy.loginToOrangeHRM("Admin", "admin123");
      manageClaimsAction
        .clickOnClaimMenuItem()
        .typeInEmployeeNameField(
          employees[0].firstName +
            " " +
            employees[0].middleName +
            " " +
            employees[0].lastName
        )
        .clickSearchButton();
      manageClaimsAction.manageClaimsForEmployee(actions.length, action, index);

      manageClaimsAction
        .clickOnEmployeeClaimsLink()
        .typeInEmployeeNameField(
          employees[0].firstName +
            " " +
            employees[0].middleName +
            " " +
            employees[0].lastName
        )
        .clickSearchButton();

      manageClaimsAssertion.verifyClaimsManagedSuccessfully(action.status);
      cy.logout();
      cy.loginToOrangeHRM(loginDetails[0].username, loginDetails[0].password);

      manageClaimsAction.clickOnClaimMenuItem();
      manageClaimsAssertion.verifyClaimsManagedSuccessfully(action.status);
      cy.logout();
    });
  });

  after(() => {
    //cy.logout();
    cy.loginToOrangeHRM("Admin", "admin123");
    console.log(employees);
    const empIds = loginDetails.map((emp) => {
      return parseInt(emp.empNumber);
    });
    return datautiles.deleteEmployees(empIds);
  });
});
