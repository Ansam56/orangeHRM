/// <reference types="cypress"/>

import loginActions from "../pageObjects/login/Actions.cy";
import loginAssertions from "../pageObjects/login/Assertions.cy";

const loginassertions = new loginAssertions();
const loginactions = new loginActions();
describe('Ckeck Login Functionality', () => {
    
    
beforeEach('', ()=>{
        cy.visit("/auth/login");
    })
    
    it("Validate that the user can login using valid username & valid password", () => {
        cy.loginToOrangeHRM("Admin" , "admin123");
         loginassertions.checkIfMenuContainsDashboard();
    });
    
    it("Vlaidate that the user can't login with invalid username and valid password",()=>{
        cy.loginToOrangeHRM('user','admin123');
        loginassertions.checkIfLoginErrorIsAppear();
    })

    it("Validate that the user can't login with valid username and invalid password",()=>{
        cy.loginToOrangeHRM('Admin','admin');
        loginassertions.checkIfLoginErrorIsAppear();
    })

    it("Validate that the user can't login with invalid username and invalid password",()=>{
        cy.loginToOrangeHRM('user','admin');
        loginassertions.checkIfLoginErrorIsAppear();
    })

    
     it("Validate that the user can't login with valid username and empty password",()=>{
        loginactions.typeInUserName('Admin');
        loginactions.clickOnLoginButton();
        loginassertions.checkIfRequiredValidationErrorForPasswordFieldIsExit();
    })

    it("Validate that the user can't login with empty username and valid password",()=>{
        loginactions.typeInPassword('admin123');
        loginactions.clickOnLoginButton();
        loginassertions.checkIfRequiredValidationErrorForUsernameFieldIsExist();
    })

    it("Validate that the user can't login with empty username and empty password",()=>{
        loginactions.clickOnLoginButton();
        loginassertions.checkIfRequiredValidationErrorForUsernameFieldIsExist();
        loginassertions.checkIfRequiredValidationErrorForPasswordFieldIsExit();
    })

    it("Verify that the user will redirected to the correct page when click on 'Forgot your password?' link",()=>{
        loginactions.clickOnForgetPasswordLink();
        loginassertions.checkIfUserInResetPassPage();
    })
});