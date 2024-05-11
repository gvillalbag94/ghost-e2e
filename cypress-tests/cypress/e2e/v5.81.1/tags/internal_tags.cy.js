const user = require('../../fixtures/user_ghost')
context('Functionality Post.', () => {
    beforeEach(() => {
    /* Given I navigate to page*/
      cy.visit('http://54.188.89.84/ghost/#/signin');
    })
  
    
    it('Create a new internal tag', () => {
      // Given I enter my user 
      cy.get('input[id="identification"]').type(user.email);
      // And I enter my password.
      cy.get('input[id="password"]').type(user.password);
      // And  click on Login.
      cy.get('button[type="submit"]').click();
      // And URL contiene la ruta de dashboard.
      cy.url().should('contain','/dashboard');
      cy.wait(2000); 
      // And I click in Tags 
      cy.get('a[data-test-nav="tags"]').click();
      cy.wait(2000); 
      // And I click in internal tags 
      cy.get('button[class="gh-btn "]').click();
      cy.wait(2000); 
      // When I click in New Tag
      cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
      cy.wait(2000); 
      //And I enter a name of tag
      cy.get('form').within(() => {
          cy.get('input[id="tag-name"]').type('#NuevoTagInternoDePrueba')
      })
      cy.wait(2000); 
      // And I click in save
      cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
      cy.wait(3000); 
      // Then confirm that the tag was create
      cy.get('a[data-test-nav="tags"]').click();
      cy.wait(3000);
   })


   it('Edit a internal tag', () => {
    // Given I enter my user 
    cy.get('input[id="identification"]').type(user.email);
    // And I enter my password.
    cy.get('input[id="password"]').type(user.password);
    // And  click on Login.
    cy.get('button[type="submit"]').click();
    // And URL contiene la ruta de dashboard.
    cy.url().should('contain','/dashboard');
    cy.wait(2000); 
    // And I click in Tags 
    cy.get('a[data-test-nav="tags"]').click();
    cy.wait(2000); 
    // And I click in internal Tags 
    cy.get('button[class="gh-btn "]').click();
    cy.wait(2000); 
    // When I click in New Tag
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.wait(2000); 
    //And I enter a name of tag
    cy.get('form').within(() => {
        cy.get('input[id="tag-name"]').type('#NuevoTagInternoDePrueba')
    })
    cy.wait(2000); 
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.wait(2000); 
    // And I click in Tags
    cy.get('a[data-test-nav="tags"]').click();
    cy.wait(2000); 
    // And I click in tag
    cy.get('li[data-test-tag = "6638101213b8100ae3c4de20"]').click();
    cy.wait(2000);
    // When enter a description of tag
    cy.get('form').within(() => {
        cy.get('textarea[class="gh-input gh-tag-details-textarea"]').type('descripción para el tag interno de prueba')
    })
    cy.wait(2000);
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.wait(2000); 
    // And I click in Tags 
    cy.get('a[data-test-nav="tags"]').click();
    cy.wait(2000); 
    //Then I confirm that the tag was edit
    cy.get('li[data-test-tag = "6638101213b8100ae3c4de20"]').click();
    cy.wait(2000);
 })

})