const user = require('../../fixtures/user_ghost')

context('Inicio de sesión exitoso por email y contraseña correctos.', () => {
  beforeEach(() => {
    cy.visit('http://54.188.89.84/ghost/');
  })

  it('Inicio de sesión exitoso con correo y password correcto', () => {
     // Seleccionar el campo del correo e ingresar un valor.
     cy.get('input[id="identification"]').type(user.email);
    
     // Seleccionar el campo del password e ingresar un valor.
     cy.get('input[id="password"]').type(user.password);
 
      // Seleccioanr el boton de inicio de sesion.
      cy.get('button[type="submit"]').click();
 
     // La URL contiene la ruta de dashboard.
     cy.url().should('contain','/dashboard');
  })
})
