/// <reference types="cypress" />
import BasePage from "./BasePage";
export class CartPage extends BasePage{
    CartPage(){
        
    }
    elements = {
        content: () => cy.get("#sc-retail-cart-container")
    }

    cart_content_is_visible() {
        this.elements.content().should('be.visible');
    }
}
export default CartPage