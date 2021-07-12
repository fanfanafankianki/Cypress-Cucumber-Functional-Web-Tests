    /// <reference types="cypress" />

import BasePage from "../Pages/BasePage";
import HomePage from "../Pages/HomePage";
import ResultsPage from "../Pages/ResultsPage";
import LoginPage from "../Pages/LoginPage";
import CartPage from "../Pages/CartPage";
import OccasionPage from "../Pages/OccasionsPage";
import BestsellerPage from "../Pages/BestsellerPage";
import GiftcardPage from "../Pages/GiftcardPage";
import SellerPage from "../Pages/SellerPage";
import HelpPage from "../Pages/HelpPage";
import RegisterPage from "../Pages/RegisterPage";
import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";

describe("Amazon Web Tests", function () {
  const basepage = new BasePage();
  const homepage = new HomePage();
  const resultspage = new ResultsPage();
  const loginpage = new LoginPage();
  const cartpage = new CartPage();
  const occasionspage = new OccasionPage();
  const bestsellerpage = new BestsellerPage();
  const giftcardpage = new GiftcardPage();
  const sellerpage = new SellerPage();
  const helppage = new HelpPage();
  const registerpage = new RegisterPage();
    it("Try to login with bad credentials", () =>{
        cy.visit("https://www.amazon.pl/");
        cy.get('#sp-cc-accept').click();
        basepage.click_header1_accountlist();
        cy.title().should('include', 'Logowanie');
        loginpage.login_content_is_visible();
        loginpage.elements.email().type('kudlas@gmail.com');
        loginpage.elements.continue().click();
        loginpage.elements.password().type('kudlas@gmail.com');
        loginpage.elements.signin().click();
        loginpage.elements.warning().should('be.visible');
    }),
    
    it("Try to search for 'playstation 4'", () =>{
        cy.visit("https://www.amazon.pl/");
        cy.get('#sp-cc-accept').click();
        basepage.elements.header1_search_input().type("playstation 4");
        basepage.elements.header1_search_button().click();
        resultspage.elements.content().should("be.visible");

    }),

    it("Try to select 'Uroda' and search for 'pomadka'", () =>{
        cy.visit("https://www.amazon.pl/");
        cy.get('#sp-cc-accept').click();
        basepage.elements.header1_search_dropdown().select("Uroda");
        basepage.elements.header1_search_input().type("pomadka");
        basepage.elements.header1_search_button().click();
        resultspage.elements.results().contains("pomadka")

    }),

    it("Try to register with bad credentials", () =>{
        cy.visit("https://www.amazon.pl/");
        cy.get('#sp-cc-accept').click();
        cy.scrollTo("bottom");
        homepage.elements.register().should("be.visible");
        homepage.elements.register().scrollIntoView().click();
        registerpage.elements.username().type("Lastbinder");
        registerpage.elements.email().type("Lastbindergmail.com");
        registerpage.elements.password().type("Lastbinder");
        registerpage.elements.password_check().type("Lastbinder");
        registerpage.elements.continue().click();
        cy.title().should('include', 'Rejestracja');
    })

    it("Try to register with good credentials", () =>{
        cy.visit("https://www.amazon.pl/");
        cy.get('#sp-cc-accept').click();
        cy.scrollTo("bottom");
        homepage.elements.register().should("be.visible");
        homepage.elements.register().scrollIntoView().click();
        registerpage.elements.username().type("Lastbinder");
        registerpage.elements.email().type("Lastbinder@gmail.com");
        registerpage.elements.password().type("Lastbinder");
        registerpage.elements.password_check().type("Lastbinder");
        registerpage.elements.continue().click();
        cy.title().should('include', 'Potwierd');
    })
})