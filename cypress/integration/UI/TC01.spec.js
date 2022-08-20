/// <reference types="cypress" />

describe('Verify Open roles for QA', () => {
    
    beforeEach(function(){
        cy.visit('/')
        cy.fixture("UI.json").then(function (data) {
            cy.log(data)
            this.data = data
        });
    })

    it('Test QA Automation', function () {

        cy.log("Verify that the Careers option is in the menu and can click on it")
        cy.get(":nth-child(8) > .Link__NavLink-sc-1ryxvh0-1 > span")
            .should('be.visible').and('contain.text', this.data.career)
            .click()

        cy.log("Verify that the Careers page is open and navigate to open positions")
        cy.get(".Buttons__StyledButton-sc-ellota-0.iPdZMG.contact-btn span")
            .scrollIntoView()
            .should("be.visible").and("contain.text", this.data.btnposition)
            .click()

        let count = 0
        cy.log("verify that is only 1 Senior QA Automation Engineer position open")
        cy.get('.job-offer__title').each(function (title){
            if (title.text() === this.data.jobTitle) {
                count += 1
            }
        }).then(() => {
            expect(count).to.equal(1)
        })

        const qaRole = [];
        cy.get('.job-offer__title').each(function (title) {
            if (title.text() === this.data.jobTitle) {
                qaRole.push(title.text())
            }
        }).then(() => {
            expect(qaRole).length(1)
        })

    })

    it('Test - filter for role QA', function () {

        cy.log("Verify that the Careers option is in the menu and can click on it")
        cy.get(":nth-child(8) > .Link__NavLink-sc-1ryxvh0-1 > span")
            .should('be.visible').and('contain.text', this.data.career)
            .click()

        cy.log("Verify that the Careers page is open and navigate to open positions")
        cy.get(".Buttons__StyledButton-sc-ellota-0.iPdZMG.contact-btn span")
            .scrollIntoView()
            .should("be.visible").and("contain.text", this.data.btnposition)

        cy.get(".job-offers__header-description").scrollIntoView().should('be.visible')

        cy.log("Verify that the dropdown is visible and can select the QA option")
        cy.get(":nth-child(1) > .select--desktop")
            .should("be.visible").and('have.text','All departmentsDepartment')
            .click()

        cy.get('ul > li:nth-child(11)')
            .should('be.visible')
            .and('contain.text', 'QA')
            .click()

        cy.log("Verify the job offer has QA Automation or QA Engineer")
        let ttl = " "
        const qaRole = [];
        cy.get('.job-offer__title').each(function (title, index) {
                ttl = title.text()
                if(ttl.includes(this.data.jobTitleDes1) || ttl.includes(this.data.jobTitleDes2) ){
                    qaRole.push(title.text())
                }
        }).then(() => {

            expect(qaRole).length.greaterThan(0)
        })
    })
})