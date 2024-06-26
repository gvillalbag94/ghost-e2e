describe('Filtro_para_listar_un_member_por_tag', () => {
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
  cy.get('#member-name').type('Filtro cypress 1')
  cy.wait(2000)
  cy.get('#member-email').type('fcypress1@gmail.com')
  cy.wait(2000)
  cy.get('input.ember-power-select-trigger-multiple-input').type('label1')
  cy.wait(2000)
  cy.get('li.ember-power-select-option').click()
  cy.wait(2000)
  cy.get('button[data-test-button=save]').click()
  cy.wait(2000)
  cy.get('a[data-test-nav=members]').click()
  cy.wait(2000)
  cy.get('div[data-test-button=members-filter-actions]').click()
  cy.wait(2000)
  cy.get('select[data-test-select=members-filter]').select('Label')
  cy.wait(2000)
  cy.get('input.ember-power-select-trigger-multiple-input').type('label1')
  cy.wait(2000)
  cy.get('span.dropdown-label').click()
  cy.wait(2000)
  cy.get('button[data-test-button=members-apply-filter').click()
  cy.wait(2000)
  cy.contains('fcypress1@gmail.com').should('exist')
  cy.wait(2000)
})
})