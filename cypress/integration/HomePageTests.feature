
Feature:Features to test Amazon.pl Home Page 

  Background: I am on home page
    Given I am on home page

  @Test1 @Header @Header1 
  Scenario: Check header logo redirection
    When I click on header logo 
    Then I am redirected to homepage
    And home content is visible

  @Test2 @Header @Header1 
  Scenario: Check header supply button form
    When I click on header supply button
    Then supplybox content is visible
    
  @Test3 @Header @Header1 
  Scenario: Check header search input redirection
    When I type text into header search input
    And click search button
    Then I am redirected to results page
    And result content is visible
  
  @Test4 @Header @Header1
  Scenario: Check header login redirection
    When I click on header login button
    Then I am redirected to login page
    And login content is visible
    
  @Test5 @Header @Header1
  Scenario: Check header order redirection
    When I click on header order button
    Then I am redirected to login page
    And login content is visible
    
  @Test6 @Header @Header1
  Scenario: Check header cart redirection
    When I click on header cart button 
    Then I am redirected to cart page
    And cart content is visible

  @Test7 @Header @Header2
  Scenario: Check header hamburger menu form
    When I click on header hamburger menu
    Then menubox content is visible

  @Test8 @Header @Header2
  Scenario: Check header "Okazje" button redirection
    When I click on header Okazje button 
    Then I am redirected to occasions page
    And occasions content is visible

  @Test9 @Header @Header2
  Scenario: Check header "Bestsellery" button redirection
    When I click on header Bestsellery button 
    Then I am redirected to bestseller page
    And bestseller content is visible

  @@Test10 @Header @Header2
  Scenario: Check header "Karty podarunkowe" button redirection
    When I click on header Karty podarunkowe button 
    Then I am redirected to giftcards page
    And giftcart content is visible

  @Test11 @Header @Header2
  Scenario: Check header "Sprzedawaj na Amazon" button redirection
    When I click on header Sprzedawaj na Amazon button 
    Then I am redirected to seller page
    And seller content is visible

  @Test12 @Header @Header2
  Scenario: Check header "Dział Obsługi Klienta" redirection
    When I click on header Dział Obsługi Klienta button 
    Then I am redirected to Help page
    And help content is visible

  @Test13 @Header @Header2
  Scenario: Check header random text redirection
    When I click on header random text button 
    Then I am redirected to another page
    And another content is visible



  


