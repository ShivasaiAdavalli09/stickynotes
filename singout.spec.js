context('Cypress github login',() => {



  it('signup scenario',() =>{


cy.screenshot()
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

   cy.contains('Username').type('CypressTest2')

   cy.contains('Password').type('Washington%123')

   cy.get('form').submit()

 

  

    cy.get('form').first('js-site-search-form').type('react').click()

    



  

   

   cy.get('.dropdown-caret').first().click()

   cy.contains('New repository').click()

   



   

   //cy.get('.js-feature-preview-indicator-container > .Header-link > .avatar').click()
   cy.get('.js-feature-preview-indicator-container > .Header-link').click()

   cy.get('.dropdown-item').contains('Your profile').click()

   //cy.wait(2000)

   //cy.get('.js-feature-preview-indicator-container > .Header-link > .avatar').click()
   cy.get('.js-feature-preview-indicator-container > .Header-link').click()

   //cy.wait(2000)

   cy.get('[href="/settings/profile"]').click()

   



  

   cy.contains('Bio').type('I am a Automation Tester')

    cy.contains('Update profile').click()

   //cy.wait(2000)

   



   

   cy.get('.js-feature-preview-indicator-container > .Header-link > .avatar').click()
   //cy.get('.js-feature-preview-indicator-container > .Header-link').click()

   cy.contains('Sign out').click()

   })







})

