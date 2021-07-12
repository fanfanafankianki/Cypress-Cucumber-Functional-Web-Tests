/// <reference types="cypress" />
import BasePage from "./BasePage";
export class ResultsPage extends BasePage{
    ResultsPage(){
        
    }
    elements = {
        content: () => cy.get("#a-page"),
        results: () => cy.get(".a-color-state")
    }

    results_content_is_visible() {
        this.elements.content().should('be.visible');
    }
}
export default ResultsPage