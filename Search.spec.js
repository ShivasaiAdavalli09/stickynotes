context('Cypress github login',() => {
    
        
        cy.visit('https://github.com/')
        cy.contains('Sign up').click()
        cy.go('back')
        cy.contains('Username').type('sindhu0000000')
        cy.contains('Email').type('adavallisunitha@gmail.com')
        cy.contains('Password').type('sertoo#%&1')
        cy.contains('Sign up for GitHub').click()
        cy.visit('https://github.com/')
        cy.get('button').first().click()
    
       
        cy.contains('Sign in').click()
        cy.contains('Username').type('Sindhutest1')
        cy.contains('Password').type('Moneyheist!123')
       // cy.contains('Username').type('sindhu0000000')
       // cy.contains('Password').type('sertoo#%&1')
        cy.get('form').submit()

    
        

        
        cy.get('form').first('js-site-search-form').type('react').submit()
        //cy.get('Header py-md-0 js-details-container Details flex-wrap flex-md-nowrap px-3').find('Header-item position-relative d-none d-md-flex')
       // cy.get('.dropdown-caret').first().click().get('.Header-item position-relative d-none d-md-flex').children('.details-overlay details-reset').find('New repository').click()
       cy.get('.dropdown-caret').first().click()
       cy.contains('New repository').click() 
    
       //cy.get('.dropdown-caret').next().click()
     // cy.get('.Header-link').find('.dropdown-caret').click()
     cy.get('.js-feature-preview-indicator-container > .Header-link').click()
       
       
       //cy.get('.dropdown-caret').find('.Header py-md-0 js-details-container Details flex-wrap flex-md-nowrap px-3')
       //cy.get('.Header py-md-0 js-details-container Details flex-wrap flex-md-nowrap px-3').children('.Header-item position-relative mr-0 d-none d-md-flex')
       //Header-item position-relative d-none d-md-flex
        //details-overlay details-reset
       //cy.get('position-relative js-header-wrapper ').find('.Header-item position-relative d-none d-md-flex').find('.details-overlay details-reset js-feature-preview-indicator-container').click(

}