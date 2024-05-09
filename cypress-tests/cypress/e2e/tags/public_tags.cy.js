
const user = require('../../fixtures/user_ghost')

context('Functionality Post.', () => {
  beforeEach(() => {
  /* Given I navigate to page*/
    cy.visit('http://54.188.89.84/ghost/#/signin');
  })

 
  it('Create a new public tag', () => {
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
    // When I click in New Tag
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.wait(2000); 
    //And I enter a name of tag
    cy.get('form').within(() => {
        cy.get('input[id="tag-name"]').type('NuevoTagDePrueba')
    })
    cy.wait(2000); 
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.wait(3000); 
    // Then confirm that the tag was create
    cy.get('a[data-test-nav="tags"]').click();
    cy.wait(3000);
 })


 it('Edit a public tag', () => {
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
    // When I click in New Tag
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.wait(2000); 
    //And I enter a name of tag
    cy.get('form').within(() => {
        cy.get('input[id="tag-name"]').type('NuevoTagDePrueba')
    })
    cy.wait(2000); 
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.wait(2000); 
    // And I click in Tags
    cy.get('a[data-test-nav="tags"]').click();
    cy.wait(2000); 
    // And I click in tag
    cy.get('li[data-test-tag = "6638211713b8100ae3c4dfe9"]').click();
    cy.wait(2000);
    // When enter a description of tag
    cy.get('form').within(() => {
        cy.get('textarea[class="gh-input gh-tag-details-textarea"]').type('descripción para el tag de prueba')
    })
    cy.wait(2000);
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.wait(2000); 
    // And I click in Tags 
    cy.get('a[data-test-nav="tags"]').click();
    cy.wait(2000); 
    //Then I confirm that the tag was edit
    cy.get('li[data-test-tag = "6638211713b8100ae3c4dfe9"]').click();
    cy.wait(2000);
 })


 it('Delete a public tag', () => {
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
    // When I click in New Tag
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.wait(2000); 
    //And I enter a name of tag
    cy.get('form').within(() => {
        cy.get('input[id="tag-name"]').type('NuevoTagDePrueba')
    })
    cy.wait(2000); 
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.wait(2000); 
    // And I click in Tags
    cy.get('a[data-test-nav="tags"]').click();
    cy.wait(2000); 
    // And I click in tag
    cy.get('li[data-test-tag = "663827fb13b8100ae3c4e07a"]').click();
    cy.wait(2000);
    // When I click in delete tag
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon"]').click();
    cy.wait(2000); 
    // And I confirm the action
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
    cy.wait(7000);
    // Then I confirm that the tag doesn't exist
    cy.get('a[data-test-nav="tags"]').click();
    cy.wait(2000); 
 })

})
