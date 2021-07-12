/// <reference types="cypress" />
import BasePage from "../Pages/BasePage";
export class HomePage extends BasePage{
    HomePage(){
        
    }
    elements = {
        content: () => cy.get("#pageContent"),
        register: () => cy.get(".sign-in-tooltip-link")
    }

    content_is_visible() {
        this.elements.content().should('be.visible');
    }
}
export default HomePage