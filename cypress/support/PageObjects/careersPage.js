
class CareersPage {

    btnPositions = '.Buttons__StyledButton-sc-ellota-0.iPdZMG.contact-btn span'
    headerDescription = '.job-offers__header-description'
    jobOffer = '.job-offer__title'
    dropdawnDeparment = ':nth-child(1) > .select--desktop'
    roleOfferList = '#job-offers__search > div > div:nth-child(1) > ul > li'

    getBtnPositions() {
        return cy.get(this.btnPositions)
    }
    getJobOffer() {
        return cy.get(this.jobOffer)
    }

    getHeaderDescription() {
        return cy.get(this.headerDescription)
    }

    getdropdawnDeparment() {
        return cy.get(this.dropdawnDeparment)
    }

    getJobOfferList() {
        return cy.get(this.roleOfferList)
    }

    getRole(num) {
        return this.getJobOfferList().within(() => {
            cy.get(`:nth-child(${num + 1})`)
        })
    }

    getJogTitle(roleTitles) {
        const qaRole = [];
        return this.getJobOffer().each((title) => {
            roleTitles.forEach((roletitle) => {
                if (title.text().includes(roletitle)) {
                    qaRole.push(title.text())
                }
            });

        }).then(() => {
            return qaRole
        })
    }

    getRoleList(roletxt) {
        let isRole = false
        this.getJobOfferList().each(function (role, index) {
            if (role.text() === roletxt) {
                isRole = true
                cy.get(`#job-offers__search > div > div:nth-child(1) > ul > li:nth-child(${index + 1})`).click()
            }
        }).then(() => {
            return isRole
        })
    }

}

export default CareersPage;