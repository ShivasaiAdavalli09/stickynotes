context('Cypress github login',() => {



    it('signup scenario',() =>{
  
  
  
     cy.visit('https://github.com/')

     cy.screenshot()
  
     cy.contains('Sign up').click()
     
  
     cy.go('back')
  
     cy.contains('Username').type('sindhu0000000')
  
     cy.contains('Email').type('adavallisunitha@gmail.com')
  
     cy.contains('Password').type('sertoo#%&1')
  cy.screenshot()
     cy.contains('Sign up for GitHub').click()
     cy.screenshot()
  
    })
  
    it('navigating home page Again',() => {
  
     cy.visit('https://github.com/')
  
     cy.get('button').first().click()
  
  cy.screenshot()
  
    })
  
  
  
    it('Sign in scenario',() => {
  
     cy.contains('Sign in').click()
  
     cy.contains('Username').type('CypressTest1')
  
     cy.contains('Password').type('Washington%123')
  
     cy.get('form').submit()
     cy.screenshot()
  
    })
})