/// <reference types="cypress" />
import BasePage from "./BasePage";
export class GiftcardPage extends BasePage{
    GiftcardPage(){
        
    }
    elements = {
        content: () => cy.get("#s-refinements")

    }

    giftcard_content_is_visible() {
        this.elements.content().should('be.visible');
    }
}
export default GiftcardPage