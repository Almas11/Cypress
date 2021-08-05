/// <reference types="Cypress"/>
import 'cypress-xpath'

class HomePage {
    visit() {
        cy.visit('https://cartlow.com')
    }
    closemodal() {
        const modal = cy.get('#app-modal > .modal-dialog > .modal-content > .modal-header > .close > span', { timeout: 1000 })
        modal.should('be.visible')
        modal.click()
    }
    SearchProduct() {
        // Set random Product 
        const data = ["Lays", "Snacks", "Grocery", "Sugar"];
        var randomIndex = Math.floor(Math.random() * data.length)
        var randomElement = data[randomIndex]

        // Get random product
        const searchbar = cy.get('#app-search')
        searchbar.type(randomElement)
        searchbar.type('{enter}')
        cy.get(this.closemodal(), { timeout: 1000 }).should('be.visible')
    }
    Selectcountry() {
        const country = cy.get('.flagBox > div > div')
        country.invoke('show')
        cy.get('[value="KSA"] > .text > .locationName').trigger('mouseover').click()
    }
    selectlanguage() {

    }
    clickSignIn() {
        const clickSigninbtn = cy.get('ul > :nth-child(4) > a > .text')
        clickSigninbtn.click()
    }
    clickSignUp() {
        const clickSignupbtn = cy.get('.nav > :nth-child(2) > .nav-link')
        clickSignupbtn.click()
    }
    createAccountFb() {
        const clickfbbtn = cy.get('.fb_login')
        clickfbbtn.click()
        cy.go('back')
    }
    createAccountGoogle() {
        this.closemodal()
        this.clickSignIn()
        this.clickSignUp()
        const clickgmbtn = cy.get('.gm_login ')
        clickgmbtn.click()
        cy.contains('Google').should('be.visible')
        cy.go('back')
    }
}
export default HomePage