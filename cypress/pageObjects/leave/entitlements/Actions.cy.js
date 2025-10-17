export default class entitlementActions {

    clickOnMyEntitlementOption(){
        cy.contains('a','My Entitlements').click();
        return this;
    }

}