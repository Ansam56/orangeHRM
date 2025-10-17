export default class entitlementAssertions{

    verifyThatLeaveTypeIsAppeare(leaveName){
        cy.get('div[role="rowgroup"]')
          .contains(leaveName);

        return this;
    }

    verifyThatLeaveDaysIsAppeare(leaveDays){
        cy.get('div[role="rowgroup"]')
          .contains(leaveDays);

        return this;
    }

}