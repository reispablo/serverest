/// <reference types="cypress"/>

describe('Login Plataforma', () => {
    
    it('login sucesso', () => {
        cy.login_admin()
        cy.boas_vindas()
    })
    it('login inválido', () => {
        cy.login_invalido()
        cy.alerta_email_senha()
    })
})
