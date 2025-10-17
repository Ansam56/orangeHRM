import {faker} from "@faker-js/faker"

export class employeeFactory{
    
    
    static createEmployee({firstName , middleName ,lastName , employeeId}={} ){
        return {
            firstName : firstName || faker.person.firstName(),
            middleName: middleName || faker.person.middleName(),
            lastName: lastName || faker.person.lastName(),
            employeeId : employeeId || faker.number.int({min:1000 ,max:9999}).toString(),
            empPicture :null 
        }
    }

    static addLoginDetails({empNumber,password,status,userRoleId,username}={}){
        return{
            empNumber :empNumber,
            password : password || faker.internet.password(),
            status : true ,
            userRoleId :2,
            username : username || faker.internet.username()
        }
    }
}