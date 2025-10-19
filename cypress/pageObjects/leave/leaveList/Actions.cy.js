export default class leaveListActions{


    clickOnLeaveListLinkInNavBar(){
        cy.contains('a' , 'Leave List').click();
        return this;
    }

    typeInEmployeeName(empName){
        cy.contains('div','Employee Name').first()
          .parent()
          .find('input').clear().type(empName);
        return this;
    }
    selectEmployeeName(empName){
        cy.get('div[role="listbox"]')
          .contains('span' , empName).click();
        return this;
    }

    clickOnSearchButton(){
        cy.contains('button[type="submit"]',"Search").click();
        return this;
    }

    clickOnApproveButton(){
        cy.contains('button[type="button"]',"Approve").click();
        return this;
    }

}