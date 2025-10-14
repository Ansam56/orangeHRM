

class dataUtiles{

    addEmployee(fname ,lname ,eId){

        return cy.request("POST" , '/api/v2/pim/employees',{
                "firstName":fname,
                "middleName":"",
                "lastName":lname,
                "empPicture":null,
                "employeeId":`${eId}`,
                // failOnStatusCode: false
        },
        
    )
        
        
    }

}
export default dataUtiles;