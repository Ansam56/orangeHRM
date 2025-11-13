/// <reference types="cypress" />

import dataUtiles from "../../support/dataUtiles.cy";
import { employeeFactory } from "../../support/utils/factories/pim/employee/employeeFactory.cy";
import addClaimsActions from "../../pageObjects/claims/addClaims/actions.cy.js";
import addClaimsAssertions from "../../pageObjects/claims/addClaims/assertions.cy.js";
const claimsData = require("../../fixtures/claimsData.json");
const addClaimsAction = new addClaimsActions();
const addClaimsAssertion = new addClaimsAssertions();
const datautiles = new dataUtiles();

describe("Check Adding Claims Functionality", () => {
  let employees = [];
  let loginDetails = [];
  let users = [];

  before(() => {
    cy.loginToOrangeHRM("Admin", "admin123");

    datautiles
      .addEmployee({}, 1)
      .then((emps) => {
        employees = emps;

        employees.forEach((emp) => {
          const user = employeeFactory.addLoginDetails({
            empNumber: emp.empNumber,
          });
          loginDetails.push(user);

          datautiles.addLoginDetails(user).then((response) => {
            users.push(response);
          });
        });
      })
      .then(() => {
        cy.writeFile("cypress/fixtures/employees.json", employees);
        cy.writeFile("cypress/fixtures/loginDetails.json", loginDetails);
        cy.logout();
      });

    console.log("users : ", users);
    console.log("employees : ", employees);
    console.log("loginDetails : ", loginDetails);
  });

  claimsData.forEach((claim, index = 0) => {
    it(`validate that the user can add ${claim.event} claim with ${claim.currency} currency `, () => {
      cy.loginToOrangeHRM(loginDetails[0].username, loginDetails[0].password);

      addClaimsAction
        .clickOnClaimMenuItem()
        .clickOnSubmitClaimLink()
        .submitClaimsForm(claim);

      addClaimsAction.clickOnSubmitButton();

      addClaimsAssertion.verifyClaimsSubmittedSuccessfully(claim);
      cy.logout();
      cy.loginToOrangeHRM("Admin", "admin123");
      addClaimsAction.clickOnClaimMenuItem();
      addClaimsAction.typeInEmployeeNameField(
        employees[0].firstName +
          " " +
          employees[0].middleName +
          " " +
          employees[0].lastName
      );

      addClaimsAction.clickSearchButton();
      addClaimsAssertion.verifyClaimsAppearsInAdmin(claim);
    });
  });
});
