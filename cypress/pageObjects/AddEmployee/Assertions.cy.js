class addEmployeeAssertions{

    checkIfSuccessAlertIsApeare(){
        cy.get('.oxd-toast-content--success')
            .should('be.visible') 
            .and('contain.text', 'Successfully Saved')
            .and('contain.text', 'Success');

        return this;
    }

    checkFieldErrorMessage(fieldIndex, expectedMessage) {
        cy.get('.oxd-input-group')
          .eq(fieldIndex)
          .should('be.visible')
          .and('contain.text', expectedMessage);
        return this;
    }

    checkSpanErrorMessage(expectedMessage) {
        cy.contains('span', expectedMessage).should('be.visible');
        return this;
    }

    checkIfRequiredErrorMessageAppereForFirstNameInput(){
        return this.checkFieldErrorMessage(2,'Required');
     
    }

    checkIfRequiredErrorMessageAppereForLastNameInput(){
        return this.checkFieldErrorMessage(4,'Required');
    
    }

    checkIfRequiredErrorMessageAppereForUsernameInput(){
        return this.checkFieldErrorMessage(6,'Required');

       
    }

    checkIfRequiredErrorMessageAppereForPasswoedInput(){
        return this.checkFieldErrorMessage(10,'Required');

    }

  

    checkIfEmployeeIdErrorMessageIsExist(){
        return this.checkSpanErrorMessage('Employee Id already exists');
     
    }

    checkIfExistingUsernameErrorMessageIsExist(){
        return this.checkSpanErrorMessage('Username already exists');
      
    }

    checkIfUsernameLengthErrorMessageIsAppear(){
        return this.checkSpanErrorMessage('Should be at least 5 characters');

    }

    checkIfUsernameLongLengthErrorMessageIsAppear(){
        return this.checkSpanErrorMessage('Should not exceed 40 characters');

    }


    checkIfNotMatchingPasswordErrorMessageIsAppear(){
        return this.checkSpanErrorMessage('Passwords do not match');

        
    }

    checkIfLessThan7LengthForPasswordErrorMessageIsAppear(){
        return this.checkSpanErrorMessage('Should have at least 7 characters');

    }

    checkIfMissingLowerCaseInPasswordErrorMessageIsAppear(){
        return this.checkSpanErrorMessage('Your password must contain minimum 1 lower-case letter');

        
    }
    


    checkIfMissingNumberInPasswordErrorMessageIsAppear(){
        return this.checkSpanErrorMessage('Your password must contain minimum 1 number');

    }

    checkIfMoreThan30lengthErrorMessageForFirstNameIsAppear(){
        return this.checkFieldErrorMessage(2,'Should not exceed 30 characters');

    
    }

    checkIfMoreThan30lengthErrorMessageForMiddleNameIsAppear(){
        return this.checkFieldErrorMessage(3,'Should not exceed 30 characters');

       
    }

    checkIfMoreThan30lengthErrorMessageForLastNameIsAppear(){
        return this.checkFieldErrorMessage(4,'Should not exceed 30 characters');

       
    }

    checkIfMoreThan10lengthErrorMessageForEmployeeIdIsAppear(){
        return this.checkFieldErrorMessage(5,'Should not exceed 10 characters');

        
    }

    checkIfMoreThan40lengthErrorMessageForUsernameIsAppear(){
        return this.checkFieldErrorMessage(6,'Should not exceed 40 characters');

    }

    checkIfMoreThan64lengthErrorMessageForPasswordIsAppear(){
        return this.checkFieldErrorMessage(10,'Should not exceed 64 characters');

        
    }


    checkIfUserInEmployeeListPage(){
        cy.url().should('include','/pim/viewEmployeeList');
        return this;
    }
}
export default addEmployeeAssertions;