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
import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";

describe("Check header logo redirection", function () {
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
  //
  When("I click on header supply button", () => {
    basepage.click_header1_dostawa();
  });

  Then("supplybox content is visible", () => {
    basepage.elements.header1_dostawa_okno().should('be.visible');
  });
  //
  When("I type text into header search input", () => {
    basepage.elements.header1_search_input().type("sas");
  });
  
  And("click search button", () => {
    basepage.click_header1_search_button();
  });

  Then("I am redirected to results page", () => {
    cy.title().should('include', 'sas');
  });

  And("result content is visible", () => {
    resultspage.results_content_is_visible();
  });
  //
  When("I click on header login button", () => {
    basepage.click_header1_accountlist();
  });

  Then("I am redirected to login page", () => {
    cy.title().should('include', 'Logowanie');
  });
    
  And("login content is visible", () => {
    loginpage.login_content_is_visible();
  });
  //

  When("I click on header order button", () => {
    basepage.click_header1_orders();
  });
  //
  When("I click on header cart button", () => {
    basepage.click_header1_cart();
  });

  Then("I am redirected to cart page", () => {
    cy.title().should('include', 'koszyk');
  });
    
  And("cart content is visible", () => {
    cartpage.cart_content_is_visible();
  });
  //
  When("I click on header hamburger menu", () => {
    basepage.click_header2_menu();
  });

  Then("menubox content is visible", () => {
    basepage.elements.header2_menu_open().should('be.visible');
  });
  //
  When("I click on header Okazje button", () => {
    basepage.click_header2_okazje();
  });

  Then("I am redirected to occasions page", () => {
    cy.title().should('include', 'Okazje');
  });
    
  And("occasions content is visible", () => {
    occasionspage.occasions_content_is_visible();
  });
  //
  When("I click on header Bestsellery button", () => {
    basepage.click_header2_bestsellery();
  });

  Then("I am redirected to bestseller page", () => {
    cy.title().should('include', 'Bestsellery');
  });
    
  And("bestseller content is visible", () => {
    bestsellerpage.bestseller_content_is_visible();
  });
  //
  When("I click on header Karty podarunkowe button", () => {
    basepage.click_header2_karty();
  });

  Then("I am redirected to giftcards page", () => {
    cy.title().should('include', 'Karty');
  });
    
  And("giftcart content is visible", () => {
    giftcardpage.giftcard_content_is_visible();
  });
  //
  When("I click on header Sprzedawaj na Amazon button", () => {
    basepage.click_header2_sprzedawaj();
  });

  Then("I am redirected to seller page", () => {
    cy.title().should('include', 'Sprzedawaj');
  });
    
  And("seller content is visible", () => {
    sellerpage.seller_content_is_visible();
  });
  //
  When("I click on header Dział Obsługi Klienta button", () => {
    basepage.click_header2_dzialobslugi();
  });

  Then("I am redirected to Help page", () => {
    cy.title().should('include', 'Pomoc');
  });
    
  And("help content is visible", () => {
    helppage.help_content_is_visible();
  });
  //
  When("I click on header random text button", () => {
    basepage.click_header2_okazje();
  });

  Then("I am redirected to another page", () => {
    cy.title().should('include', 'Okazje');
  });
    
  And("another content is visible", () => {
    occasionspage.occasions_content_is_visible();
  });
  //
});
