/// <reference types="cypress"/>

describe('cadastrar produto e validar na lista de produtos', () => {

  it('cadastrar usuario e valida sua inclusao', () => {
    cy.login_admin()
    cy.cadastrar_produtos()
    cy.formulario_cadastro_produto()  
    cy.valida_inclusao_do_produto()
  })
})





