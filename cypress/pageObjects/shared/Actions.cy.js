export default class sharedActions{

    clickOnLeaveMenuItem(){
         cy.contains('span','Leave').click();
         return this;
    }

    clickOnEntitlementsLinkInNavbar(){
        cy.contains('span','Entitlements').click();
        return this;
    }

    clickOnAddEntitlementsLink(){
        cy.contains('a','Add Entitlements').click();
        return this;
    }

}