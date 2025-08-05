import loc from './locators'
import { variaveisGlobais } from './variaveis'

Cypress.Commands.add('valida_inclusao_do_produto', () => {
    cy.get(loc.TITULO.TIITULO).should('contain', Cypress.env('titulo_lista_produtos'))
    cy.get(loc.LISTA.LISTA_PRODUTOS)
        .contains(variaveisGlobais.nomeProdutoGerado)
        .should('exist')
})




