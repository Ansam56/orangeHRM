class addEmployeeActions{

    typeInFirstNameInput(fname){
        cy.get('input[placeholder="First Name"]').clear().type(fname);
        return this;
    }

    typeInMiddleNameInput(mname){
        cy.get('input[placeholder="Middle Name"]').clear().type(mname);
        return this;
    }
    typeInLastNameInput(lname){
        cy.get('input[placeholder="Last Name"]').clear().type(lname);
        return this;
    }

    clearEmployeeId(){
        cy.contains('label' , 'Employee Id').parent().parent()
                            .find('input').clear();
        return this;
    }

    typeInEmployeeId(eId){
        cy.get('input').eq(5).clear().type(eId);
        return this;
    }

    clickOnSaveButton(){
        cy.get('button[type="submit"]').click();
        return this;
    }

    clickOnCancelButton(){
        cy.contains('button','Cancel').click();
        return this;
    }

    clickOnLoginDetailsSwitch(){
        cy.get('.oxd-switch-wrapper').click();
        return this;
    }

    typeInUsernameInput(username){
        cy.contains('label','Username').parent().parent()
                                .find('input')
                                .clear().type(username);
        return this;
    }

    selectDisabledStatus(){
        cy.contains('label','Disabled').click();
        return this;
    }

    typeInPasswordInput(pass){
        cy.contains('label','Password').parent().parent()
        .find('input[type="password"]').clear().type(pass);
        return this;
    }

    typeInConfirmPasswordInput(pass){
        cy.contains('label','Confirm Password').parent().parent()
        .find('input[type="password"]').clear().type(pass);
        return this;
    }
}
export default addEmployeeActions;