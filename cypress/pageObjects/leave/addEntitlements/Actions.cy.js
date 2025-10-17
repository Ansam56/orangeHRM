export default class addEntitlementsActions{

    typeInEmployeeNameInput(eName){
         cy.get('input[placeholder="Type for hints..."]').clear().type(eName+'{enter}');
         return this;
    }
    SelectFirstOptionOfSearchResultForEmployeeName(empName){
         cy.get('.oxd-autocomplete-dropdown')
                 .find('div')
                 .contains(empName)
                 .click();
        return this;
    }

    selectLeaveType(leaveName){
        cy.contains('div','Leave Type')
          .parent()
          .find('i').click();
                 
        cy.contains('div[role="option"] span',leaveName)
          .click();

        return this;
    }

    typeInEntitlementInput(entitlementBalance){
         cy.contains('div label','Entitlement')
                 .parent()
                 .parent() 
                 .find('input')
                 .clear().type(entitlementBalance);
        return this;
    }

    clickOnSaveButton(){
         cy.get('button[type="submit"]').click();
         return this;
    }

    clickOnConfirmButton(){
        cy.contains('button','Confirm').click();
        return this;
    }

}