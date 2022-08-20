/// <reference types="cypress" />


describe('Verify the Swapi Get response.', () => {

    beforeEach(function () {
        cy.fixture("API.json").then(function (data) {
            cy.log(data)
            this.data = data
        });
    })

    it('Test - verify the Darth Vader is in the name', () => {
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/4/'
        }).then(function ({ body }) {
            expect(body.name).to.eq(this.data.name)
        })
    })

    it('Test - verify the the status response 404', () => {
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/400/',
            "failOnStatusCode": false
        }).then(function ({ status }) {
            expect(status).to.eq(this.data.status)
        })

    })
})