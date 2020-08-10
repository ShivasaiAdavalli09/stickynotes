context('Cypress github login',() => {



    it('signup scenario',() =>{
  
  
  
     cy.visit('https://github.com/')
  
     cy.contains('Sign up').click()
  
     cy.go('back')
  
     cy.contains('Username').type('sindhu0000000')
  
     cy.contains('Email').type('adavallisunitha@gmail.com')
  
     cy.contains('Password').type('sertoo#%&1')
  
     cy.contains('Sign up for GitHub').click()
  
    })
  
    it('navigating home page Again',() => {
  
     cy.visit('https://github.com/')
  
     cy.get('button').first().click()
  
  
  
    })
  
  
  
    it('Sign in scenario',() => {
  
     cy.contains('Sign in').click()
  
     cy.contains('Username').type('CypressTest2')
  
     cy.contains('Password').type('Washington%123')
  
     cy.get('form').submit()
  
    })
  
    it('Search for React',() => {
  
      cy.get('form').first('js-site-search-form').type('react').click()
  
      })
  
  
  
     it('Select New Repository',() => {
  
      cy.go('https://github.com/login')
      cy.contains('Username').type('CypressTest2')
      
      cy.contains('Password').type('Washington%123')
  
     cy.get('.dropdown-caret').first().click()
  
     cy.contains('New repository').click()
  
     })
  
  
  
     it('Select Your Profile',() => {
  
     //cy.get('.js-feature-preview-indicator-container > .Header-link > .avatar').click()
     cy.get('.js-feature-preview-indicator-container > .Header-link').click()
  
     cy.get('.dropdown-item').contains('Your profile').click()
  
     //cy.wait(2000)
  
     //cy.get('.js-feature-preview-indicator-container > .Header-link > .avatar').click()
     cy.get('.js-feature-preview-indicator-container > .Header-link').click()
  
     //cy.wait(2000)
  
     cy.get('[href="/settings/profile"]').click()
  
     })
  
  
  
     it('Enter Bio and click on Update Profile',() => {
  
     cy.contains('Bio').type('I am a Automation Tester')
  
      cy.contains('Update profile').click()
  
     //cy.wait(2000)
  
     })
  
  
  
     it('Select Profile and Sign Out',() => {
  
     //cy.get('.js-feature-preview-indicator-container > .Header-link > .avatar').click()
     cy.get('.js-feature-preview-indicator-container > .Header-link')
  
     cy.contains('Sign out').click()
  
     })
  
  
  
  
  
  
  
  })
  
  