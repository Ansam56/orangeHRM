import { faker } from "@faker-js/faker";

export default class entitlementFactory{


    static addLeaveEntitlemet({empNumber, leaveTypeId, fromDate, toDate,entitlement}={}){
        const currentYear = new Date().getFullYear();
        
        return {
            empNumber ,
            leaveTypeId,
            fromDate : fromDate || `${currentYear}-01-01`,
            toDate : toDate ||`${currentYear}-12-31`,
            entitlement : entitlement || faker.number.int({min : 10 , max : 50}).toString(),
        }
    }


}