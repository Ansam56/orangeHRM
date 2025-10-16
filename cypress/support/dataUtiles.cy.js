import employeeApi from "./utils/api/pim/employee/employeeApi.cy";
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
        console.log("arr = ",cy.wrap(arr));
         return arr
    }

}
export default dataUtiles;