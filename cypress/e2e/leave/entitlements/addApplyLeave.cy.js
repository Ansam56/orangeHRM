/// <reference types="cypress" />

import addEmployeeAssertions from "../../../pageObjects/AddEmployee/Assertions.cy";
import applyLeaveActions from "../../../pageObjects/leave/applyLeave/Actions.cy";
import leaveListActions from "../../../pageObjects/leave/leaveList/Actions.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import dataUtiles from "../../../support/dataUtiles.cy";
import { employeeFactory } from "../../../support/utils/factories/pim/employee/employeeFactory.cy";

const datautiles = new dataUtiles();
const sharedactions = new sharedActions();
const applyLeaveAction = new applyLeaveActions();
const leaveListAction = new leaveListActions();
const addEmployeeassertions = new addEmployeeAssertions();

describe("Check Accept Leave Entitlement Functionality", () => {
  let employees = [];
  let loginDetails = [];
  let users = [];
  let leaveIds = [];
  before(() => {
    cy.loginToOrangeHRM("Admin", "admin123");

    datautiles.addEmployee({}, 5).then((emps) => {
      employees = emps;
    });

    cy.then(() => {
      for (let i = 0; i < employees.length; i++) {
        const user = employeeFactory.addLoginDetails({
          empNumber: employees[i].empNumber,
        });
        loginDetails.push(user);

        datautiles.addLoginDetails(user).then((loginedUser) => {
          users.push(loginedUser);
        });
        datautiles.addLeaveType();
        datautiles.getRandomLeaveType().then((leave) => {
          const leaveId = leave.id;
          leaveIds.push(leaveId);
          datautiles.addLeaveEntitlemet({
            empNumber: employees[i].empNumber,
            leaveTypeId: `${leaveId}`,
          });
        });
      }
    });

    cy.then(() => {
      cy.logout();
    });
  });

  it("validate that the employee can apply for his leave", () => {
    for (let i = 0; i < employees.length; i++) {
      cy.loginToOrangeHRM(users[i].userName, loginDetails[i].password);
      sharedactions.clickOnLeaveMenuItem();
      applyLeaveAction
        .clickOnApplyLinkInNavBar()
        .clickOnLeaveType()
        .selectFirstLeave()
        .typeInFromDate()
        .selectToday()
        // .typeInToDate()
        // .selectToday()
        .clickOnApplyButton();
      addEmployeeassertions.checkIfSuccessAlertIsApeare();

      cy.logout();
    }

    cy.loginToOrangeHRM("Admin", "admin123");
    cy.url().should("include", "/dashboard/index");
    for (let i = 0; i < employees.length; i++) {
      const { firstName, middleName, lastName } = employees[i];
      const empName = `${firstName} ${middleName} ${lastName}`;

      sharedactions.clickOnLeaveMenuItem();
      leaveListAction
        .clickOnLeaveListLinkInNavBar()
        .typeInEmployeeName(empName)
        .selectEmployeeName(empName)
        .clickOnSearchButton()
        .clickOnApproveButton();
    }
    cy.logout();
  });

  after(() => {
    cy.loginToOrangeHRM("Admin", "admin123");
    console.log(employees);
    const empIds = loginDetails.map((emp) => {
      return parseInt(emp.empNumber);
    });
    datautiles.deleteEmployees(empIds);
    datautiles.deleteLeaveTypes(leaveIds);
  });
});
