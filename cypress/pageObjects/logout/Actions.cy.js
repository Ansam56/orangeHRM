export default class logoutActions {

    clickOnLogoutMenu(){
        cy.get('ul').eq(1).click();

        return this;
    }

    clickOnLogoutOption(){
        cy.contains('a','Logout').click();

        return this;
    }

}