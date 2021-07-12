/// <reference types="cypress" />
import BasePage from "./BasePage";
export class LoginPage extends BasePage{
    LoginPage(){
        
    }
    elements = {
        email: () => cy.get("#ap_email"),
        continue: () => cy.get("#continue"),
        password: () => cy.get("#ap_password"),
        signin: () => cy.get("#signInSubmit"),
        warning: () => cy.get("#auth-warning-message-box")
    }

    login_content_is_visible() {
        this.elements.email().should('be.visible');
    }
}
export default LoginPage