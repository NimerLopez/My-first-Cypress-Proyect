
// Función para ingresar las credenciales
class TestLogin{
  // Visita la página de inicio de sesión
   login(credentials){
    // Ingresa el nombre de usuario
    cy.get('[type="email"]').type(credentials.email);
  
    // Ingresa la contraseña
    cy.get('[type="password"]').type(credentials.password);
  
    // Hace clic en el botón de inicio de sesión
    cy.get('.btn-primary').click();

    return('save sesion')
  }

}
export default new TestLogin();
