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
        const  generatePassword =()=> {
            let pass = faker.internet.password({length:10 , mix_case: true});
            pass +=faker.number.int({min:0 , max:9});
            return pass;
        }
        return{
            empNumber :empNumber,
            password : password || generatePassword(),
            status : true ,
            userRoleId :2,
            username : username || faker.internet.username()
        }
    }

    
}