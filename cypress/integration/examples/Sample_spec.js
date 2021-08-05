/// <reference types="Cypress"/>

import HomePage from '../../fixtures/PageObject/VisitCartlow'
import 'cypress-xpath'

describe('HomePage', function() {
    const hp = new HomePage()

    it('visit Url', function() {
        hp.visit()
    })
    it('Closemodal', function() {
        hp.closemodal()
    })
    it('SignInClick', function() {
        hp.clickSignIn()
    })
    it('SignUpClick', function() {
        hp.clickSignUp()
    })
    it('FBSignUP', function() {
        hp.createAccountFb()
    })
    it('GMSignUp', function() {
        hp.createAccountGoogle()
    })
})