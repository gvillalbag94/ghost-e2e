const user = require('../../fixtures/user_ghost')

context('Error en inicio de sesion por email y contraseña incorrecta.', () => {
  beforeEach(() => {
    // Ingresar a la plataforma Ghost
    cy.visit('http://54.188.89.84/ghost/');
  })

  it('Creacion, editar añadir tag, eliminar una pagina.', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[id="identification"]').type(user.email);
   
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[id="password"]').type(user.password);

     // Seleccioanr el boton de inicio de sesion.
    cy.get('button[type="submit"]').click();

    cy.wait(500);

    // La URL contiene la ruta de dashboard.
    cy.url().should('contain','/dashboard');

    // Seleccioanr el boton de pages.
  cy.get('a[href="#/pages/"]').click();

  // La URL contiene la ruta de pages.
  cy.url().should('contain','/pages');

   // Seleccioanr el boton de pages.
   cy.get('a[href="#/editor/page/"]').click();

   cy.wait(500);

   // La URL contiene la ruta de pages.
  cy.url().should('contain','/editor/page');

   // Seleccionar el campo del correo e ingresar un valor.
   cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').type('Example cypress page');
   
   cy.get('div[class="kg-prose"]').type('Este es un ejemplo con cypress');

   cy.get('button[title="Settings"]').click();

   cy.get('input[id="url"]').type('example-cypress');

   cy.get('button[title="Settings"]').click();

   cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger[data-test-button="publish-flow"]')
   .contains('Publish')
   .click();

   cy.wait(500);

   cy.get('button[data-test-button="continue"]').click();

   cy.wait(500);

   cy.get('button[data-test-button="confirm-publish"]').click();

   cy.wait(2000);

   cy.get('a[class="ember-view gh-back-to-editor"]') // Aumentar el tiempo de espera a 10 segundos
  .contains('Back to dashboard')
  .click();

   cy.wait(500);

    // Seleccioanr el boton de pages.
  cy.get('a[href="#/pages/"]').click();

   cy.wait(500);

   cy.get("div[class='posts-list gh-list  feature-memberAttribution']")
   .contains("Example cypress page")
   .click();

   cy.wait(500);

   cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').clear();

   cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]')
   .type('Edit TAG cypress page');
   cy.wait(1000);

  cy.get('button[title="Settings"]').click();

  cy.get('#tag-input > ul > input.ember-power-select-trigger-multiple-input')
  .type('News')
  .wait(500);

  cy.contains('li', 'News')
  .click();

  cy.get('button[title="Settings"]').click();
  cy.wait(1000);

   cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view[data-test-button="publish-save"]')
   .contains('Update')
  .click();

   cy.wait(500);

  cy.get('a[href="#/pages/"]').click();

  cy.get("div[class='posts-list gh-list  feature-memberAttribution']")
  .contains("Edit TAG cypress page")
  .click();

  cy.wait(500);

   cy.get('button[title="Settings"]').click();

   cy.get('button[data-test-button="delete-post"]').click();

   cy.wait(500);

   cy.get('button[data-test-button="delete-post-confirm"]').click();

   cy.get("div[class='posts-list gh-list  feature-memberAttribution']")
   .should('not.contain',"Edit TAG cypress page");
})
})
