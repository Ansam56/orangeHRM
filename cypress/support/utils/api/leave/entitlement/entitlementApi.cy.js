export default class entitlementApi{


    static addLeaveEntitlement(entitlementData){
        return cy.request("POST" , "/api/v2/leave/leave-entitlements",{
            ...entitlementData,
        })
    }

    

}