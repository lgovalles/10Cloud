
class MainPage {
    navMenu = '.nav-link-container'

    linkCareer = ':nth-child(8) > .Link__NavLink-sc-1ryxvh0-1 > span'

    getNavMenu() {
        return cy.get(this.navMenu)
    }

    getLinkCareer() {
        return this.getNavMenu().find(this.linkCareer)
    }

}

export default MainPage;