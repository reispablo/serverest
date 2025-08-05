/// <reference types="cypress"/>

describe('cadastra usuarios e verificar cadastro', () => {

    it('cadastra usuario e valida sua inclusao', () => {
        cy.login_admin()
        cy.cadastrar_usuarios()
        cy.formulario_cadastro_usuario()     
        cy.botao_cadastrar()   
        cy.valida_inclusao_usuario()   
    })

    it('cadastra usuario admin e valida sua inclusao', () => {
        cy.login_admin()
        cy.cadastrar_usuarios()        
        cy.formulario_cadastro_usuario()  
        cy.cadastrar_como_administrador() 
        cy.botao_cadastrar()     
        cy.valida_inclusao_usuario_admin()      
    })    
})
