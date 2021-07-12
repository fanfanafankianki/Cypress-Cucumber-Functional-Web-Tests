/// <reference types="cypress" />
import BasePage from "./BasePage";
export class RegisterPage extends BasePage{
    RegisterPage(){
        
    }
    elements = {
        content: () => cy.get(".a-box a-spacing-extra-large"),
        username: () => cy.get("#ap_customer_name"),
        email: () => cy.get("#ap_email"),
        password: () => cy.get("#ap_password"),
        password_check: () => cy.get("#ap_password_check"),
        continue: () => cy.get("#continue")
    }

    register_content_is_visible() {
        this.elements.content().should('be.visible');
    }
}
export default RegisterPage;