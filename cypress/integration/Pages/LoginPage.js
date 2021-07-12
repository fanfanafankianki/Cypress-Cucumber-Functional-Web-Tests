/// <reference types="cypress" />
import BasePage from "./BasePage";
export class LoginPage extends BasePage{
    LoginPage(){
        
    }
    elements = {
        email: () => cy.get("#ap_email")

    }

    login_content_is_visible() {
        this.elements.email().should('be.visible');
    }
}
export default LoginPage