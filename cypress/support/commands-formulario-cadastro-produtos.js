import loc from './locators'
import { gerarNomeProdutos, gerarPrecoProduto, gerarDescricaoProduto, gerarQuantidade } from './functions'
import { variaveisGlobais } from './variaveis'

Cypress.Commands.add('formulario_cadastro_produto', () => {
    const nomeProduto = gerarNomeProdutos()

    variaveisGlobais.nomeProdutoGerado = nomeProduto

    cy.get(loc.TITULO.TIITULO).should('contain', Cypress.env('titulo_cadastro_produtos'))
    cy.get(loc.CADASTRAR_PRODUTOS.NOME_PRODUTO).type(nomeProduto+''+Math.floor(Math.random() * 1000))
    cy.get(loc.CADASTRAR_PRODUTOS.PRECO).type(gerarPrecoProduto())
    cy.get(loc.CADASTRAR_PRODUTOS.DESCRICAO_PRODUTO).type(gerarDescricaoProduto())
    cy.get(loc.CADASTRAR_PRODUTOS.QUANTIDADE).type(gerarQuantidade())
    cy.get(loc.CADASTRAR_PRODUTOS.IMAGEM_PRODUTO).attachFile('dbz.jpg')
    cy.get(loc.CADASTRAR_PRODUTOS.BTN_CADASTRAR_PRODUTOS).click()
})





