describe('Creacion_de_un_member', () => {
  beforeEach(()=>{
    cy.visit('http://54.188.89.84/ghost/')
    cy.wait(5000)
    
 })
 it('Login', ()=>{
  cy.get('#identification').type('user@example.com')
  cy.wait(2000)
  cy.get('#password').type('123456789**')
  cy.wait(2000)
  cy.get('#ember5').click()
  cy.wait(2000)
  cy.get('a[data-test-nav=members]').click()
  cy.wait(2000)
  cy.get('a[data-test-new-member-button=true]').click()
  cy.wait(2000)
  cy.get('#member-name').type('Prueba cypress 1')
  cy.wait(2000)
  cy.get('#member-email').type('pcypress1@gmail.com')
  cy.wait(2000)
  cy.get('button[data-test-button=save]').click()
  cy.wait(2000)
  cy.get('svg.w3.mr1.fill-darkgrey').click()
  cy.wait(2000)
  cy.get('a.ember-view.dropdown-item.user-menu-signout').click()
  cy.wait(5000)
  cy.get('#identification').type('user@example.com')
  cy.wait(2000)
  cy.get('#password').type('123456789**')
  cy.wait(2000)
  cy.get('#ember5').click()
  cy.wait(2000)
  cy.get('a[data-test-nav=members]').click()
  cy.wait(2000)
  cy.contains('pcypress1@gmail.com').should('exist')
  cy.wait(2000)
})
})