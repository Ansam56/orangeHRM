/// <reference types="cypress" />

import dataUtiles from "../../../support/dataUtiles.cy";

const datautiles = new dataUtiles();
describe('Check Adding Leave Entitlement Functionality', () => {
    let employees =[];
    before(()=>{
        cy.loginToOrangeHRM("Admin",'admin123');
        employees = datautiles.addEmployee(5);
    })

});