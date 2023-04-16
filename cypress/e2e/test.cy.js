/// <reference types="cypress"/>
it('Google Search', () => {

cy.visit('https://google.com')

cy.get('#APjFqb', {timeout:5000}).type('Automation step by step {Enter}')
// cy.contains('Google Search').click()

cy.wait(5000)
cy.contains('Videos').click()




})