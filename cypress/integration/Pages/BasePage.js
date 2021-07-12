/// <reference types="cypress" />

class BasePage {
  
  elements = {
    ////////////////////////////////
    ///Header Locators
    ////////////////////////////////
    header1_logo: () => cy.get("#nav-logo-sprites"),
    header1_dostawa: () => cy.get("#nav-global-location-popover-link"),
    header1_dostawa_okno: () => cy.get("#a-popover-1"),
    header1_search_dropdown: () => cy.get("#searchDropdownBox"),
    header1_search_input: () => cy.get("#twotabsearchtextbox"),
    header1_search_button: () => cy.get("#nav-search-submit-button"),
    header1_language: () => cy.get("#icp-nav-flyout"),
    header1_accountlist: () => cy.get("#nav-link-accountList"),
    header1_orders: () => cy.get("#nav-orders"),
    header1_cart: () => cy.get("#nav-cart"),

    header2_menu: () => cy.get("#nav-hamburger-menu"),
    header2_menu_open: () => cy.get("#hmenu-content"),
    header2_okazje: () => cy.get("[data-csa-c-slot-id='nav_cs_0']"),
    header2_bestsellery: () => cy.get("[data-csa-c-slot-id='nav_cs_1']"),
    header2_karty: () => cy.get("[data-csa-c-slot-id='nav_cs_2']"),
    header2_sprzedawaj: () => cy.get("[data-csa-c-slot-id='nav_cs_3']"),
    header2_dzialobslugi: () => cy.get("[data-csa-c-slot-id='nav_cs_4']"),
    header2_randomtext: () => cy.get("#navSwmHoliday"),

    ////////////////////////////////
    ///Footer Locators
    ////////////////////////////////
    footer_blog: () => cy.get("[href='https://blog.aboutamazon.pl/']"),
    footer_jobs: () => cy.get("[href='https://www.amazon.jobs/pl']"),
    footer_prasa: () => cy.get("[href='https://www.biuroprasoweamazon.pl']"),
    footer_sell: () =>
      cy.get("[href='https://sell.amazon.pl/?ld=AZPLSOAFooter']"),
    footer_fulfilment: () =>
      cy.get(
        "[href='https://sell.amazon.pl/fulfilment-by-amazon?ld=AZPLFBAFooter']"
      ),
    footer_affiliate: () =>
      cy.get("[href='https://affiliate-program.amazon.pl/']"),
    footer_publications: () => cy.get("[href='https://kdp.amazon.com"),
    footer_payment: () =>
      cy.get(
        "[href='https://www.amazon.pl/gp/help/customer/display.html/?nodeId=GFBWMNXEPYVJAY9A']"
      ),
    footer_transfer: () =>
      cy.get(
        "[href='https://www.amazon.pl/gp/help/customer/display.html/?nodeId=202189210']"
      ),
    footer_giftcards: () =>
      cy.get("[href='/gp/browse.html?node=20657799031&ref_=footer_giftcards']"),
    footer_youtube: () =>
      cy.get(
        "[href='https://www.youtube.com/channel/UCn-aanchPMFuFqlc3IUsDSQ/featured']"
      ),
    footer_twitter: () => cy.get("[href='https://twitter.com/AmazonNewsPL']"),
    footer_tracking: () =>
      cy.get("[href='/gp/css/order-history?ref_=footer_hp_ss_comp_tmp']"),
    footer_shipment: () =>
      cy.get(
        "[href='/gp/help/customer/display.html?nodeId=201910060&ref_=footer_shiprates']"
      ),
    footer_returns: () =>
      cy.get("[href='/gp/css/returns/homepage.html?ref_=hy_f_4']"),
    footer_disposal: () =>
      cy.get("[href='/gp/browse.html?node=22440778031&ref_=footer_disposal']"),
    footer_mobapp: () =>
      cy.get("[href='/gp/browse.html?node=22719623031&ref_=footer_mobapp']"),
    footer_help: () =>
      cy.get(
        "[href='/gp/help/customer/display.html?nodeId=508510&ref_=gw_m_b_he']"
      ),
    footer_logo: () => cy.get("[href='/?ref_=footer_logo']")
  };

  ////////////////////////////////
  ///Header clicks
  ////////////////////////////////
  click_header1_logo() {
    this.elements.header1_logo().click();
  }
  click_header1_dostawa() {
    this.elements.header1_dostawa().click();
  }
  click_header1_dostawa_okno() {
    this.elements.header1_dostawa_okno().click();
  }
  click_header1_search_dropdown() {
    this.elements.header1_search_dropdown().click();
  }
  click_header1_search_input() {
    this.elements.header1_search_input().click();
  }
  click_header1_search_button() {
    this.elements.header1_search_button().click();
  }
  click_header1_language() {
    this.elements.header1_language().click();
  }
  click_header1_accountlist() {
    this.elements.header1_accountlist().click();
  }
  hover_header1_accountlist() {
    this.elements.header1_accountlist().hover();
  }
  click_header1_orders() {
    this.elements.header1_orders().click();
  }
  click_header1_cart() {
    this.elements.header1_cart().click();
  }
  ///Header2 clicks
  click_header2_menu() {
    this.elements.header2_menu().click();
  }
  click_header2_menu_open() {
    this.elements.header2_menu_open().click();
  }
  click_header2_okazje() {
    this.elements.header2_okazje().click();
  }
  click_header2_bestsellery() {
    this.elements.header2_bestsellery().click();
  }
  click_header2_karty() {
    this.elements.header2_karty().click();
  }
  click_header2_sprzedawaj() {
    this.elements.header2_sprzedawaj().click();
  }
  click_header2_dzialobslugi() {
    this.elements.header2_dzialobslugi().click();
  }
  click_header2_odkryj() {
    this.elements.header2_odkryj().click();
  }

  ////////////////////////////////
  //Footer clicks
  ////////////////////////////////
  click_footer_blog() {
    this.elements.footer_blog().click();
  }
  click_footer_jobs() {
    this.elements.footer_jobs().click();
  }
  click_footer_prasa() {
    this.elements.footer_prasa().click();
  }
  click_footer_sell() {
    this.elements.footer_sell().click();
  }
  click_footer_fulfilmen() {
    this.elements.footer_fulfilment().click();
  }
  click_footer_affiliate() {
    this.elements.footer_affiliate().click();
  }
  click_footer_publications() {
    this.elements.footer_publications().click();
  }
  click_footer_payment() {
    this.elements.footer_payment().click();
  }
  click_footer_transfer() {
    this.elements.footer_transfer().click();
  }
  click_footer_giftcards() {
    this.elements.footer_giftcards().click();
  }
  click_footer_youtube() {
    this.elements.footer_youtube().click();
  }
  click_footer_twitter() {
    this.elements.footer_twitter().click();
  }
  click_footer_tracking() {
    this.elements.footer_tracking().click();
  }
  click_footer_shipment() {
    this.elements.footer_shipment().click();
  }
  click_footer_returns() {
    this.elements.footer_returns().click();
  }
  click_footer_disposal() {
    this.elements.footer_disposal().click();
  }
  click_footer_mobapp() {
    this.elements.footer_mobapp().click();
  }
  click_footer_help() {
    this.elements.footer_help().click();
  }
  click_footer_logo() {
    this.elements.footer_logo().click();
  }
}
export default BasePage;
