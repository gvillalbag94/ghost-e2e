const user = require('../../../fixtures/user_ghost')

context('Error en inicio de sesion por email y contraseña incorrecta.', () => {
  beforeEach(() => {
    // Ingresar a la plataforma Ghost
    cy.visit('http://54.188.89.84/ghost/');
  })

  it('Creacion, editar una pagina.', () => {
     // Seleccionar el campo del correo e ingresar un valor.
     cy.get('input[id="identification"]').type(user.email);
     cy.screenshot('../screenshots/create_edit_add_tag_delete/before_0');
     cy.wait(500);
    
     // Seleccionar el campo del password e ingresar un valor.
     cy.get('input[id="password"]').type(user.password);
     cy.screenshot('../screenshots/create_edit_add_tag_delete/before_1');
     cy.wait(500);
 
      // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();
     cy.screenshot('../screenshots/create_edit_add_tag_delete/before_2');
     cy.wait(500);
 
     // La URL contiene la ruta de dashboard.
     cy.url().should('contain','/dashboard');
     cy.screenshot('../screenshots/create_edit_add_tag_delete/before_3');
     cy.wait(500);
 
     // Seleccioanr el boton de pages.
   cy.get('a[href="#/pages/"]').click();
   cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_4');
   cy.wait(500);
 
   // La URL contiene la ruta de pages.
   cy.url().should('contain','/pages');
   cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_5');
   cy.wait(500);
 
    // Seleccioanr el boton de pages.
    cy.get('a[href="#/editor/page/"]').click();
    cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_6');
    cy.wait(500);
 
    // La URL contiene la ruta de pages.
   cy.url().should('contain','/editor/page');
   cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_7');
   cy.wait(500);
 
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').type('Example cypress page');
     cy.screenshot('../screenshots/create_edit_add_tag_delete/before_8');
     cy.wait(500);
 
    cy.get('div[class="kg-prose"]').type('Este es un ejemplo con cypress');
  cy.screenshot('../screenshots/create_edit_add_tag_delete/befo_9');
     cy.wait(500);
 
    cy.get('button[title="Settings"]').click();
  cy.screenshot('../screenshots/create_edit_add_tag_delete/befo_10');
     cy.wait(500);
 
    cy.get('input[id="url"]').type('example-cypress');
  cy.screenshot('../screenshots/create_edit_add_tag_delete/befo_11');
     cy.wait(500);
 
    cy.get('button[title="Settings"]').click();
  cy.screenshot('../screenshots/create_edit_add_tag_delete/befo_12');
     cy.wait(500);
 
    cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger[data-test-button="publish-flow"]')
    .contains('Publish')
    .click();
  cy.screenshot('../screenshots/create_edit_add_tag_delete/befo_13');
     cy.wait(500);
 
    cy.get('button[data-test-button="continue"]').click();
    cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_14');
    cy.wait(500);
 
    cy.get('button[data-test-button="confirm-publish"]').click();
    cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_15');
    cy.wait(2000);
 
    cy.get('a[class="ember-view gh-back-to-editor"]') // Aumentar el tiempo de espera a 10 segundos
   .contains('Back to dashboard')
   .click();
   cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_16');
   cy.wait(500);
 
     // Seleccioanr el boton de pages.
   cy.get('a[href="#/pages/"]').click();
   cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_17');
   cy.wait(500);
 
    cy.get("div[class='posts-list gh-list  feature-memberAttribution']")
    .contains("Example cypress page")
    .click();
    cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_18');
    cy.wait(500);
 
    cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').clear();
    cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_19');
    cy.wait(500);
 
    cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').type('Edit delete cypress page');
    cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_20');
    cy.wait(1000);
 
    cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view[data-test-button="publish-save"]')
    .contains('Update')
   .click();
   cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_21');
   cy.wait(500);
 
   cy.get('a[href="#/pages/"]').click();
   cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_22');
   cy.wait(500);
 
   cy.get("div[class='posts-list gh-list  feature-memberAttribution']")
   .contains("Edit delete cypress page")
   .click();
  cy.screenshot('../screenshots/create_edit_add_tag_delete/befo_23');
     cy.wait(500);
 
    cy.get('button[title="Settings"]').click();
    cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_24');
    cy.wait(500);
 
    cy.get('button[data-test-button="delete-post"]').click();
  cy.screenshot('../screenshots/create_edit_add_tag_delete/befo_25');
     cy.wait(500);
 
    cy.get('button[data-test-button="delete-post-confirm"]').click();
    cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_26');
    cy.wait(500);
 
    cy.get("div[class='posts-list gh-list  feature-memberAttribution']")
    .should('not.contain',"Edit delete cypress page");
    cy.screenshot('../screenshots/create_edit_add_tag_delete/befor_27');
    cy.wait(500);
})
})
