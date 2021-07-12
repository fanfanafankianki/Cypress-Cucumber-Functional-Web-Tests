/// <reference types="cypress" />
import BasePage from "./BasePage";
export class HelpPage extends BasePage{
    HelpPage(){
        
    }
    elements = {
        content: () => cy.get(".a-row")

    }

    help_content_is_visible() {
        this.elements.content().should('be.visible');
    }
}
export default HelpPage