/// <reference types="cypress" />
import BasePage from "./BasePage";

export class OccassionsPage extends BasePage{
    OccassionsPage(){
        
    }
    elements = {
        content: () => cy.get("#slot-15")
    }

    occasions_content_is_visible() {
        this.elements.content().should('be.visible');
    }
}
export default OccassionsPage