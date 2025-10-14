class loginAssertions {

    checkIfMenuContainsDashboard(){
        cy.get("a").contains("Dashboard").should("be.visible");
        return this;
    }

    checkIfLoginErrorIsAppear(){
        cy.get(".orangehrm-login-error").should("be.visible")
                                        .and("contain.text","Invalid credentials");
                                    
        return this;
    }

    checkIfRequiredValidationErrorForUsernameFieldIsExist(){
        cy.get('input[placeholder="Username"]').parents('.oxd-input-group')
                                            .find('.oxd-input-field-error-message')
                                            .should("contain.text","Required");
        return this;
    }

    checkIfRequiredValidationErrorForPasswordFieldIsExit(){
        cy.get('input[placeholder="Password"]').parents('.oxd-input-group')
                                .find('.oxd-input-field-error-message')
                                .should("contain.text","Required");
        return this;
    }

    checkIfUserInResetPassPage(){
        cy.url().should('include' ,'/auth/requestPasswordResetCode');
        return this;
    }
}

export default loginAssertions;