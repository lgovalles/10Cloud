/// <reference types="cypress" />

import MainPage from "../../support/PageObjects/mainPage"
import CareersPage from "../../support/PageObjects/careersPage"

let mainPage = new MainPage()
let careerPage = new CareersPage()

describe('Verify Open roles for QA', () => {
    
    beforeEach(function(){
        cy.visit('/')

        cy.fixture("UI.json").then(function (data) {
            cy.log(data)
            this.data = data

            mainPage.getLinkCareer()
            .should('be.visible').and('contain.text', this.data.career)
            .click()
            careerPage.getBtnPositions()
            .scrollIntoView()
            .should("be.visible").and("contain.text", this.data.btnposition)
        });

    })

    it('Test QA Automation', function () {
        careerPage.getBtnPositions().click()
        careerPage.getJogTitle(this.data.jobTitle).should('have.length',1)
    })

    it('Test - filter for role QA', function () {

        careerPage.getHeaderDescription().scrollIntoView().should('be.visible')
        careerPage.getdropdawnDeparment()
            .should("be.visible").and('have.text','All departmentsDepartment')
            .click()
        careerPage.getRoleList(this.data.role)
        careerPage.getJogTitle(this.data.jobTitleDes).should('have.length.greaterThan',0)
    })
})