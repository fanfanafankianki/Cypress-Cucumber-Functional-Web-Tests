/// <reference types="cypress" />
import BasePage from "./BasePage";
export class BestsellerPage extends BasePage{
    BestsellerPage(){
        
    }
    elements = {
        content: () => cy.get("#zg")

    }

    bestseller_content_is_visible() {
        this.elements.content().should('be.visible');
    }
}
export default BestsellerPage