const user = require('../../fixtures/user_ghost')
const errors = require('../../fixtures/login_errors')


context('Error en inicio de sesion por email y contraseña incorrecta.', () => {
  beforeEach(() => {
    // Ingresar a la plataforma Ghost
    cy.visit('http://54.188.89.84/ghost/');
  })

  // https://on.cypress.io/interacting-with-elements

  it('Iniciar sesión fallido con campos vacios de email y password', () => {
    // Seleccioanr el boton de inicio de sesion.
    cy.get('button[type="submit"]').click();

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.empty_form);
  })

  it('Iniciar sesión fallido con campo password vacio', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[id="identification"]').type(user.email);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');
    
    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.empty_form);
  })

  it('Iniciar sesión fallido con campo email vacio', () => {
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[id="password"]').type(user.password);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.empty_form);
  })

  it('Iniciar sesión fallido con email invalido y password incorrecto', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[id="identification"]').type(user.invalid_email);
    
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[id="password"]').type(user.invalid_password);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.invalid_email);
  })

  it('Iniciar sesión fallido con email correcto no registrado', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[id="identification"]').type(user.wrong_email);
    
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[id="password"]').type(user.invalid_password);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain', errors.incorrect_email);
  })

  it('Iniciar sesión fallido con email correcto y password incorrecto', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[id="identification"]').type(user.email);
    
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[id="password"]').type(user.invalid_password);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain', errors.incorrect_password);
  })
 
})
