@HomePage
Feature: Feature to test sci-hub main page buttons redirections 

Background: user is on home page
    Given browser is open
    And user is on sci-hub home page

  @Play
  Scenario: Check Play -> Create a game option redirection
    When user hovers over Play and clicks on Create a game
    And user choose black pieces
    Then game page is opened
    And game board is displayed
