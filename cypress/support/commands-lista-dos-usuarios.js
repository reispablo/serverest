import loc from './locators'
import { variaveisGlobais } from '../support/variaveis'

Cypress.Commands.add('valida_inclusao_usuario', () => {
    cy.get(loc.TITULO.TIITULO).should('contain', Cypress.env('titulo_lista_usuarios'))
    cy.get(loc.LISTA.LISTA_USUARIOS)
        .contains(variaveisGlobais.nomeGerado)
        .should('exist')
        .parents('tr') 
        .within(() => {
            cy.get('td').contains('false').should('exist')
        })
})

Cypress.Commands.add('valida_inclusao_usuario_admin', () => {
    cy.get(loc.TITULO.TIITULO).should('contain', Cypress.env('titulo_lista_usuarios'))
    cy.get(loc.LISTA.LISTA_USUARIOS)
        .contains(variaveisGlobais.nomeGerado)
        .should('exist')
        .parents('tr') 
        .within(() => {
            cy.get('td').contains('true').should('exist')
        })
})




