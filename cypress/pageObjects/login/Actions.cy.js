class loginActions{

    typeInUserName(name){
        cy.contains('div label','Username').parent().parent()
          .find('input').clear().type(name);
        return this;
    }

    typeInPassword(password){
        cy.contains('div label','Password').parent().parent()
          .find('input').clear().type(password);
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