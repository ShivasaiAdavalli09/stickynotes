context('Cypress github login',() => {
    it('signup scenario',() =>{
        
        cy.visit('https://github.com/')
        cy.contains('Sign up').click()
        cy.go('back')
        cy.contains('Username').type('sindhu0000000')
        cy.contains('Email').type('adavallisunitha@gmail.com')
        cy.contains('Password').type('sertoo#%&1')
        cy.contains('Sign up for GitHub').click()
        cy.visit('https://github.com/')
        cy.get('button').first().click()


        //to sign in from sign in page
        cy.contains('Sign in').click()
        cy.contains('Username').type('sindhutest')
        cy.contains('Password').type('Johnwick#123')
        cy.get('form').submit()
        
    })

    
})