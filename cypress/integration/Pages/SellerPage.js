/// <reference types="cypress" />
import BasePage from "./BasePage";
export class SellerPage extends BasePage{
    SellerPage(){
        
    }
    elements = {
        content: () => cy.get("#a-page")

    }

    seller_content_is_visible() {
        this.elements.content().should('be.visible');
    }
}
export default SellerPage