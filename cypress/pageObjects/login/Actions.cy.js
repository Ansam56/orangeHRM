class loginActions{

    typeInUserName(name){
        cy.get('input[placeholder="Username"]').clear().type(name);
        return this;
    }

    typeInPassword(password){
        cy.get('input[placeholder="Password"]').clear().type(password);
        return this;
    }
    clickOnLoginButton(){
        cy.get('.orangehrm-login-button').click();
        return this;
    }

    clickOnForgetPasswordLink(){
        cy.get('.orangehrm-login-forgot').click();
        return this;
    }
}
export default loginActions;