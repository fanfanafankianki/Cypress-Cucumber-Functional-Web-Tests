/// <reference types="cypress" />
import BasePage from "./BasePage";
export class HelpPage extends BasePage{
    HelpPage(){
        
    }
    elements = {
        content: () => cy.get(".a-row"),
        tracking: () => cy.get(":nth-child(1) > .a-size-medium > .a-link-normal")
    }

    help_content_is_visible() {
        this.elements.content().should('be.visible');
    }
}
export default HelpPage