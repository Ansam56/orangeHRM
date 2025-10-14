/// <reference types="cypress" />


import addEmployeeActions from "../../pageObjects/AddEmployee/Actions.cy";
import addEmployeeAssertions from "../../pageObjects/AddEmployee/Assertions.cy";


const addEmployeeactions = new addEmployeeActions();
const addEmployeeassertions = new addEmployeeAssertions();

describe('Check Add A New Employee Functionality With Login Details', () => {
    let randomUsername = 'ahmad'+ parseInt(Math.random()*1000);
    let Username='' ;
    let invalidUserName= 'a'.repeat(40) + parseInt(Math.random()*1000);
    let invalidPassword = 'a'.repeat(64) + parseInt(Math.random()*1000);
    beforeEach('' , ()=>{
        cy.loginToOrangeHRM('Admin' , 'admin123');
        cy.visit('/pim/addEmployee');
         Username = 'ahmad'+ parseInt(Math.random()*1000);
         
    })

    it("Validate that the admin can add employee with required login details using uniqe username , matching password & confirm password using 7 char contain 'number & lower case letter' and enabled status",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(randomUsername)
                          .typeInPasswordInput('user123')
                          .typeInConfirmPasswordInput('user123')
                          .clickOnSaveButton()
        addEmployeeassertions.checkIfSuccessAlertIsApeare();
    })


    it("Validate that the admin can add employee with required login details with uniqe username , matching password & confirm password using 7 char contain 'number & lower case letter' and disabled status",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(Username)
                          .selectDisabledStatus()
                          .typeInPasswordInput('user123')
                          .typeInConfirmPasswordInput('user123')
                          .clickOnSaveButton()
        addEmployeeassertions.checkIfSuccessAlertIsApeare();
    })

    it("validate that the admin can't able to add new employee using existing username",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(randomUsername)
                          .typeInPasswordInput('ahmad123@')
                          .typeInConfirmPasswordInput('ahmad123@')
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfExistingUsernameErrorMessageIsExist();
    })


    it("validate that the admin can't able to add new employee with less than 5 characters for username",()=>{
         addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput('user')
                          .typeInPasswordInput('ahmad123@')
                          .typeInConfirmPasswordInput('ahmad123@')
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfUsernameLengthErrorMessageIsAppear();
    })

    it("validate that the admin can't able to add new employee with more than 40 characters for username",()=>{
        let longRandomUsername = 'a'.repeat(40)+parseInt(Math.random()*1000);
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(longRandomUsername)
                          .typeInPasswordInput('ahmad123@')
                          .typeInConfirmPasswordInput('ahmad123@')
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfUsernameLongLengthErrorMessageIsAppear();
    })

    it("validate that the admin can't able to add new employee with not matching password & confirm password",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(Username)
                          .typeInPasswordInput('ahmad123@')
                          .typeInConfirmPasswordInput('ahmad123')
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfNotMatchingPasswordErrorMessageIsAppear();
    })


    it("validate that the admin can't able to add new employee with less than 7 characters for password",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(Username)
                          .typeInPasswordInput('a123@')
                          .typeInConfirmPasswordInput('a123@')
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfLessThan7LengthForPasswordErrorMessageIsAppear();
    })

    it("validate that the admin can't able to add new employee with equle 7 characters without lower case letter & with number for password",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(Username)
                          .typeInPasswordInput('123123@')
                          .typeInConfirmPasswordInput('123123@')
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfMissingLowerCaseInPasswordErrorMessageIsAppear();
    })

    it("validate that the admin can't able to add new employee with equle 7 characters with lower case letter & without number for password",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(Username)
                          .typeInPasswordInput('ahmad@@')
                          .typeInConfirmPasswordInput('ahmad@@')
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfMissingNumberInPasswordErrorMessageIsAppear();
    })

    it("validate that the admin can't able to add new employee with equle 7 characters without lower case letter & without number for password",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(Username)
                          .typeInPasswordInput('@@@@@@@')
                          .typeInConfirmPasswordInput('@@@@@@@')
                          .clickOnSaveButton();
        addEmployeeassertions.checkIfMissingLowerCaseInPasswordErrorMessageIsAppear();
    })

    it("validate that the admin can't able to add new employee with empty username and valid another info",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInPasswordInput('user123')
                          .typeInConfirmPasswordInput('user123')
                          .clickOnSaveButton()
        addEmployeeassertions.checkIfRequiredErrorMessageAppereForUsernameInput();
    })


    it("validate that the admin can't able to add new employee with empty password and valid another info",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(Username)
                          .typeInConfirmPasswordInput('user123')
                          .clickOnSaveButton()
        addEmployeeassertions.checkIfRequiredErrorMessageAppereForPasswoedInput()
                             .checkIfNotMatchingPasswordErrorMessageIsAppear();
    })

    it("validate that the admin can't able to add new employee with empty confirm password and valid another info",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(Username)
                          .typeInPasswordInput('user123')
                          .clickOnSaveButton()
        addEmployeeassertions.checkIfNotMatchingPasswordErrorMessageIsAppear();
    })


    it("validate that the admin can't able to add new employee with more than 40 characters for username ",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(invalidUserName)
                          .typeInPasswordInput('user123')
                          .typeInConfirmPasswordInput('user123')
                          .clickOnSaveButton()
        addEmployeeassertions.checkIfMoreThan40lengthErrorMessageForUsernameIsAppear();
    })

    it("validate that the admin can't able to add new employee with more than 64 characters for password",()=>{
        addEmployeeactions.typeInFirstNameInput('ahmad')
                          .typeInLastNameInput('ahmad')
                          .clearEmployeeId()
                          .clickOnLoginDetailsSwitch()
                          .typeInUsernameInput(Username)
                          .typeInPasswordInput(invalidPassword)
                          .typeInConfirmPasswordInput('user123')
                          .clickOnSaveButton()
        addEmployeeassertions.checkIfMoreThan64lengthErrorMessageForPasswordIsAppear();
    })
});