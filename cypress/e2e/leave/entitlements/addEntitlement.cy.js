/// <reference types="cypress" />

import addEntitlementsActions from "../../../pageObjects/leave/addEntitlements/Actions.cy";
import entitlementActions from "../../../pageObjects/leave/entitlements/Actions.cy";
import entitlementAssertions from "../../../pageObjects/leave/entitlements/Assertions.cy";
import logoutActions from "../../../pageObjects/logout/Actions.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import dataUtiles from "../../../support/dataUtiles.cy";
import { employeeFactory } from "../../../support/utils/factories/pim/employee/employeeFactory.cy";

const datautiles = new dataUtiles();
const sharedactions = new sharedActions();
const addEntitlementsactions = new addEntitlementsActions();
const logoutactions = new logoutActions();
const entitlementactions = new entitlementActions();
const entitlementassertions = new entitlementAssertions();
const leaveType ='Kobbers Leave Type';
const leaveDays = '14';
describe('Check Adding Leave Entitlement Functionality', () => {
    let employees =[];
    
    before(()=>{
        cy.loginToOrangeHRM("Admin",'admin123');
          datautiles.addEmployee({},1).then((emps)=>{
            employees=emps;
            cy.url().should('include', '/dashboard/index');
            // logoutactions.clickOnLogoutMenu()
            //              .clickOnLogoutOption();
            

        })
        cy.wait(2000)
    })

     beforeEach(()=>{
        cy.visit('/');
        logoutactions.clickOnLogoutMenu()
                         .clickOnLogoutOption();
        cy.wait(2000);
        cy.loginToOrangeHRM("Admin",'admin123');
    })

   

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
    })

  

        it('Verify that the Leave Entitlement is added for employee',()=>{
            for(let i=0;i<employees.length;i++){
                 const {firstName ,middleName , lastName ,empNumber } = employees[i];
                cy.url().should('include', '/dashboard/index');
                const loginDetails = employeeFactory.addLoginDetails({empNumber:empNumber});
                datautiles.addLoginDetails(loginDetails)
                          .then((user)=>{
                            
                    console.log("user : ",user)
                    logoutactions.clickOnLogoutMenu()
                                 .clickOnLogoutOption();

                                 cy.wait(2000);

                 cy.loginToOrangeHRM(`${user.userName}`,`${loginDetails.password}`);
                 cy.url().should('include', '/dashboard/index');
                    sharedactions.clickOnLeaveMenuItem()
                    .clickOnEntitlementsLinkInNavbar();
                    entitlementactions.clickOnMyEntitlementOption();
                    entitlementassertions.verifyThatLeaveTypeIsAppeare(leaveType)
                                         .verifyThatLeaveDaysIsAppeare(leaveDays);

                });

            }
    })

   after(()=>{
    cy.loginToOrangeHRM('Admin', 'admin123');
    console.log(employees);
       const empIds = employees.map((emp)=>{
        return parseInt(emp.employeeId);
       })
        datautiles.deleteEmployees(empIds);
   })
    
    

});