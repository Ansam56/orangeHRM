/// <reference types="cypress" />

import applyLeaveActions from "../../../pageObjects/leave/applyLeave/Actions.cy";
import leaveListActions from "../../../pageObjects/leave/leaveList/Actions.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import dataUtiles from "../../../support/dataUtiles.cy";
import { employeeFactory } from "../../../support/utils/factories/pim/employee/employeeFactory.cy";

const datautiles = new dataUtiles();
const sharedactions = new sharedActions();
const applyLeaveAction = new applyLeaveActions();
const leaveListAction = new leaveListActions();

describe('Check Accept Leave Entitlement Functionality', () => {
    let employees =[];
    let loginDetails =[];
    let users=[];
    
before(() => {
   cy.loginToOrangeHRM("Admin", "admin123");

      datautiles.addEmployee({}, 3).then((emps)=>{
        employees=emps;


        employees.forEach((emp)=>{

      
      const user = employeeFactory.addLoginDetails({ empNumber: emp.empNumber });
            loginDetails.push(user);

            datautiles.addLoginDetails(user).then((loginedUser)=>{
              users.push(loginedUser);
              datautiles.addLeaveEntitlemet({empNumber: emp.empNumber ,leaveTypeId :6 }).then(()=>{
                cy.logout();
              });
            });
          });
      })


      
          });

    it('validate that the employee can apply for his leave',()=>{
            
        for(let i=0;i<employees.length;i++){ 

            cy.loginToOrangeHRM(users[i].userName,loginDetails[i].password);
            sharedactions.clickOnLeaveMenuItem();
            applyLeaveAction.clickOnApplyLinkInNavBar()
                            .clickOnLeaveType()
                            .selectFirstLeave()
                            .typeInFromDate()
                            .typeInToDate()
                            .clickOnApplyButton();

        
        cy.logout();
        }
        
  });


  

        it('Validate that the admin can accept the employee leave',()=>{
            for(let i=0;i<users.length;i++){
                const {firstName ,middleName , lastName } = employees[i];
                const empName = `${firstName} ${middleName} ${lastName}`;
                 cy.loginToOrangeHRM('Admin' , 'admin123');
                 cy.url().should('include', '/dashboard/index');
                    sharedactions.clickOnLeaveMenuItem();
                    leaveListAction.clickOnLeaveListLinkInNavBar()
                                   .typeInEmployeeName(empName)
                                   .selectEmployeeName(empName)
                                   .clickOnSearchButton()
                                   .clickOnApplyButton();

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