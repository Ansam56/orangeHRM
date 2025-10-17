
export default class employeeApi{


    static addEmployee(employeeData){
        return cy.request("POST" ,'/api/v2/pim/employees',{
            ...employeeData,
        })
       
    }

    static addLoginDetails(loginDetails){
        return cy.request("POST","/api/v2/admin/users",{
            ...loginDetails,
        })
    }

     static deleteEmployees(empIds){
        return cy.request("DELETE","/api/v2/pim/employees",{
             ids: empIds 
        })
    }

}