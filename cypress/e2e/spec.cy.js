describe('page function verify',()=>{
    it('my first test',()=>{
        cy.visit('/')
        //cy.contains('.sign-in-title','User Registration')
        // cy.get('[data=cy=sign-in-inputs=input]')
    
        //enter the email user
        cy.get('[type="text"]')
        .type('bladimir.ab@gmail.com{enter}');

        //enter de password user
        cy.get('[type="password"]')
        .type('123{enter}');

        //search text in the login section
        cy.contains('My News Cover');
        
        //click the login button
        cy.get('.login-buttons > input').click();

        //2 fac
        //enter the code
        cy.get('.input-verif')
        .type(2834);
        //click the button.
        cy.get('.but-verif').click();

        //validate the length of my news lists
        cy.get('.wrap-news .flex-new') 
        .should('have.length', 240);

        //click categories filter 
        cy.contains('Noticias')
        .first()
        .click();

        //validate title
        cy.title().should('eq', 'My News Cover');

        //validate if exist text
        cy.get('.wrap-news .flex-new') 
        .should('have.text','Dentro del bosque')

    })
    // it('mi first user ',()=>{
    //     cy.visit('/home')
    // })
})
