/// <reference types = "cypress"/>

before(function(){

    cy.fixture('example.json').as('test_data')

})

it('Read files using Fixture', function(){

    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })

    cy.log(this.test_data.name)
})

it('Read file using readFile function', function(){

    cy.readFile('./cypress/fixtures/example.json').then((data) =>{
        cy.log(data.name)
    })

})


it('Write file demo', function(){

    cy.writeFile('sample.txt', 'Hello yo\n')
    cy.writeFile('sample.txt', 'I\'m learning Cypress', {flag: 'a+'})

})