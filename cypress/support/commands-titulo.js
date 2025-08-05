import loc from './locators'

Cypress.Commands.add('boas_vindas', () => {
    cy.get(loc.TITULO.TIITULO).should('contain', Cypress.env('titulo_bem_vindo'))
})

Cypress.Commands.add('titulo_cadastro_de_produtos', () => {
    cy.get(loc.TITULO.TIITULO).should('contain', Cypress.env('titulo_cadastro_produtos'))
})

Cypress.Commands.add('titulo_lista_produtos', () => {
    cy.get(loc.TITULO.TIITULO).should('contain', Cypress.env('titulo_lista_produtos'))
})

Cypress.Commands.add('titulo_lista_usuarios', () => {
    cy.get(loc.TITULO.TIITULO).should('contain', Cypress.env('titulo_lista_usuarios'))
})




