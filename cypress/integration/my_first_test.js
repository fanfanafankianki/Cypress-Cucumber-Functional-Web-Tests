import { Given, Then, Before } from "cypress-cucumber-preprocessor/steps"
/// <reference types="cypress" />


it('google test', function() {

    cy.visit('https://google.com/')
    cy.get('gLFyf').type('Automation Step by Step{enter}')
    cy.wait(4000)
    cy.contains('Videos').click()
})

it.only('login test', function(){

    cy.visit('https://orangehrm-demo-6x.orangehrmlive.com/auth/login')
    cy.get('#btnLogin').click()
    
})