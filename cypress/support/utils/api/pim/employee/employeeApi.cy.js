
export default class employeeApi{


    static addEmployee(employeeData){
        return cy.request("POST" ,'/api/v2/pim/employees',{
            ...employeeData,
        })
       
    }


}