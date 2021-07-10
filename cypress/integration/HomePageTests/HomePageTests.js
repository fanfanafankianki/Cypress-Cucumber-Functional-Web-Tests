/// <reference types="cypress" />
import BasePage from "../Pages/BasePage";
import HomePage from "../Pages/HomePage";
import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";

describe("Check header logo redirection", function () {
  const basepage = new BasePage();
  const homepage = new HomePage();

  Before(() => {

  });

  Given("I am on home page", () => {
    cy.visit("https://www.amazon.pl/");
    cy.get('#sp-cc-accept').click();
  });

  When("I click on header logo", () => {
    basepage.click_header1_logo();
  });

  Then("I am redirected to homepage", () => {
    cy.url().should('eq',"https://www.amazon.pl/ref=nav_logo");
  });

  And("home content is visible", () => {
    homepage.content_is_visible();
  });
});
