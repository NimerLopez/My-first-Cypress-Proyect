import TestLogin from './login.js';
const credentials = require('../../credentials.json');

describe('Login', () => {
  it('should login successfully', () => {
    // Carga las credenciales del archivo JSON
    // Llama a la función `login` dentro de un bloque Cypress
    cy.visit('/admin/login');
    TestLogin.login(credentials);

    // Agrega afirmaciones aquí para verificar que el inicio de sesión fue exitoso
  });
});
