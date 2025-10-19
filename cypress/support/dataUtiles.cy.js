import entitlementApi from "./utils/api/leave/entitlement/entitlementApi.cy";
import employeeApi from "./utils/api/pim/employee/employeeApi.cy";
import entitlementFactory from "./utils/factories/leave/entitlement/entitlementFactory.cy";
import { employeeFactory } from "./utils/factories/pim/employee/employeeFactory.cy";

class dataUtiles{

    addEmployee(data={},length=1){
        const arr=[];
        for(let i=1;i<=length ;i++){
             employeeApi.addEmployee(
                                employeeFactory.createEmployee(data))
                     .then((response)=>{
             arr.push( response.body.data);
        })    
                
        }
         return cy.wrap(arr);


    }

    addLoginDetails(data={}){
        return cy.then(()=>{
            return employeeApi.addLoginDetails(
                    data
        )
        .then((response)=>{
            return response.body.data;
        })
        })
        
    }

    deleteEmployees(data){
        return employeeApi.deleteEmployees(data);
    }

    addLeaveEntitlemet(data={}){
        return cy.then(()=>{
            return entitlementApi.addLeaveEntitlement(
                entitlementFactory.addLeaveEntitlemet(data)
            );
        })
    }

}
export default dataUtiles;