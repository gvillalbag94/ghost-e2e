describe('Editar_un_member_creado', () => {
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
  cy.get('#member-name').type('Prueba cypress 4')
  cy.wait(2000)
  cy.get('#member-email').type('pcypress4@gmail.com')
  cy.wait(2000)
  cy.get('button[data-test-button=save]').click()
  cy.wait(2000)
  cy.get('a[data-test-nav=members]').click()
  cy.wait(2000)
  cy.get('a[data-test-new-member-button=true]').click()
  cy.wait(2000)
  cy.get('#member-name').type('Prueba cypress 5')
  cy.wait(2000)
  cy.get('#member-email').type('pcypress5@gmail.com')
  cy.wait(2000)
  cy.get('button[data-test-button=save]').click()
  cy.wait(2000)
  cy.get('a[data-test-nav=members]').click()
  cy.wait(2000)
  cy.reload()
  cy.wait(5000)
  cy.get('tbody:nth-child(2)').click()
  cy.wait(2000)
  cy.get('#member-name').clear()
  cy.wait(2000)
  cy.get('#member-name').type('Editado cypress')
  cy.wait(2000)
  cy.get('#member-email').clear()
  cy.wait(2000)
  cy.get('#member-email').type('editadocypress@gmail.com')
  cy.wait(2000)
  cy.get('button[data-test-button=save]').click()
  cy.wait(2000)
  cy.get('a[data-test-nav=dashboard]').click()
  cy.wait(2000)
  cy.get('a[data-test-nav=members]').click()
  cy.wait(2000)
  cy.contains('editadocypress@gmail.com').should('exist')
  cy.wait(2000)
})
})