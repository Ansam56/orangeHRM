/// <reference types="cypress"/>

import addEmployeeActions from "../../pageObjects/AddEmployee/Actions.cy";
import addEmployeeAssertions from "../../pageObjects/AddEmployee/Assertions.cy";
import dataUtiles from "../../support/dataUtiles.cy";


const addEmployeeactions = new addEmployeeActions();
const addEmployeeassertions = new addEmployeeAssertions();
const datautiles = new dataUtiles();
describe('Check Add a New Employee Functionality without adding a login details', () => {

    let employeeId = '';
    let name = '';
    beforeEach('',()=>{
        employeeId = parseInt(Math.random()*1000);
        name='a'.repeat(30) +parseInt(Math.random()*1000);
        cy.loginToOrangeHRM('Admin' , 'admin123');
        cy.visit('/pim/addEmployee');
    })

    it('Validate that the Admin can add a new employee using only firstname , and last name' , ()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad');
        addEmployeeactions.typeInLastNameInput('ahmad');
        addEmployeeactions.clearEmployeeId();
        addEmployeeactions.clickOnSaveButton();
        addEmployeeassertions.checkIfSuccessAlertIsApeare();
    })

    it("Validate that the Admin can add a new employee using full'employee info'",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad');
        addEmployeeactions.typeInMiddleNameInput('Ali');
        addEmployeeactions.typeInLastNameInput('ahmad');
        addEmployeeactions.typeInEmployeeId(employeeId);
        addEmployeeactions.clickOnSaveButton();
        addEmployeeassertions.checkIfSuccessAlertIsApeare();
    })

    it("validate that the admin can't able to add employee using empty first name , and valid last name" , ()=>{
        addEmployeeactions.typeInLastNameInput('ahmad');
        addEmployeeactions.clearEmployeeId();
        addEmployeeactions.clickOnSaveButton();
        addEmployeeassertions.checkIfRequiredErrorMessageAppereForFirstNameInput();
    })

    it("validate that the admin can't able to add employee using valid first name and empty last name " , ()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad');
        addEmployeeactions.clearEmployeeId();
        addEmployeeactions.clickOnSaveButton();
        addEmployeeassertions.checkIfRequiredErrorMessageAppereForLastNameInput();
    })


    it("validate that the admin can't able to add employee using empty first name and empty last name " , ()=>{
        addEmployeeactions.clearEmployeeId();
        addEmployeeactions.clickOnSaveButton();
        addEmployeeassertions.checkIfRequiredErrorMessageAppereForFirstNameInput();
        addEmployeeassertions.checkIfRequiredErrorMessageAppereForLastNameInput();
    })


    describe.only('Check Adding Employee with existing Id', () => {
        let employee=[];
        beforeEach('',()=>{
            employee= datautiles.addEmployee({firstName:'ahmad', lastName:'ahmad',employeeId:`${employeeId}`})
            
            console.log(employee);
        });
        it("validate that the admin can't able to add new employee with existing employee id and valid first name , last name" , ()=>{
        
        //  cy.get('@employee').then((employee) => {
    addEmployeeactions.typeInFirstNameInput('ahmad');
    addEmployeeactions.typeInLastNameInput('ahmad');
    addEmployeeactions.typeInEmployeeId(employee[0].employeeId);
    addEmployeeactions.clickOnSaveButton();
    addEmployeeassertions.checkIfEmployeeIdErrorMessageIsExist();
//   });
    })
    });
    

    it("validate that the admin can't able to add new employee with more than 30 characters for first name ",()=>{
        addEmployeeactions.typeInFirstNameInput(name)
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfMoreThan30lengthErrorMessageForFirstNameIsAppear();
    })

    it("validate that the admin can't able to add new employee with more than 30 characters for middle name ",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInMiddleNameInput(name)
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfMoreThan30lengthErrorMessageForMiddleNameIsAppear();
    })

    it("validate that the admin can't able to add new employee with more than 30 characters for last name ",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput(name)
                          .clearEmployeeId()
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfMoreThan30lengthErrorMessageForLastNameIsAppear();
    })

    it("validate that the admin can't able to add new employee with more than 10 characters for employee Id ",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .typeInEmployeeId(name)
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfMoreThan10lengthErrorMessageForEmployeeIdIsAppear();
    })


    it('validate that the admin will redirected to the employee list page when click on cancel button ',()=>{
        addEmployeeactions.clickOnCancelButton();
        addEmployeeassertions.checkIfUserInEmployeeListPage();
    })
});
