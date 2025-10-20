/// <reference types="cypress" />

import addEntitlementsActions from "../../../pageObjects/leave/addEntitlements/Actions.cy";
import entitlementActions from "../../../pageObjects/leave/entitlements/Actions.cy";
import entitlementAssertions from "../../../pageObjects/leave/entitlements/Assertions.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import dataUtiles from "../../../support/dataUtiles.cy";
import { employeeFactory } from "../../../support/utils/factories/pim/employee/employeeFactory.cy";

const datautiles = new dataUtiles();
const sharedactions = new sharedActions();
const addEntitlementsactions = new addEntitlementsActions();

const entitlementactions = new entitlementActions();
const entitlementassertions = new entitlementAssertions();
const leaveType ='CAN - Vacation';
const leaveDays = '14';
describe('Check Adding Leave Entitlement Functionality', () => {
    let employees =[];
    let loginDetails =[];
    let users=[];
    
 before(() => {
  cy.loginToOrangeHRM("Admin", "admin123");


  datautiles.addEmployee({}, 5).then((emps) => {
    employees = emps;


    employees.forEach((emp) => {
        const user = employeeFactory.addLoginDetails({ empNumber: emp.empNumber });
       loginDetails .push(user );

      datautiles.addLoginDetails(user).then((response) => {
        users.push(response);
      });
    });
  });

console.log("users : ",users);

});



    it('validate that the admin can add leave entitlement for a number of employees',()=>{
            
        for(let i=0;i<employees.length;i++){ 
             sharedactions.clickOnLeaveMenuItem()
                     .clickOnEntitlementsLinkInNavbar()
                     .clickOnAddEntitlementsLink();
           const {firstName ,middleName , lastName } = employees[i];
            const empName = `${firstName} ${middleName} ${lastName}`;
        
        addEntitlementsactions.typeInEmployeeNameInput(empName)
                              .SelectFirstOptionOfSearchResultForEmployeeName(empName)
                              .selectLeaveType(leaveType)
                              .typeInEntitlementInput(leaveDays)
                              .clickOnSaveButton()
                              .clickOnConfirmButton();
        
        
        }
        cy.logout();
  });


  

        it('Verify that the Leave Entitlement is added for employee',()=>{
            for(let i=0;i<users.length;i++){

                 cy.loginToOrangeHRM(users[i].userName,loginDetails[i].password);
                 cy.url().should('include', '/dashboard/index');
                    sharedactions.clickOnLeaveMenuItem()
                    .clickOnEntitlementsLinkInNavbar(); 
                    entitlementactions.clickOnMyEntitlementOption();
                    entitlementassertions.verifyThatLeaveTypeIsAppeare(leaveType)
                                         .verifyThatLeaveDaysIsAppeare(leaveDays);

                cy.logout();
            }
            
    })

   after(()=>{
    cy.loginToOrangeHRM('Admin', 'admin123');
    console.log(employees);
       const empIds = loginDetails.map((emp)=>{
        return parseInt(emp.empNumber);
       })
        return datautiles.deleteEmployees(empIds);
   })
    
    
});
