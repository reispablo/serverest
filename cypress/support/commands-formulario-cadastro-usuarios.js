import loc from './locators'
import { gerarNomeAleatorio, gerarEmailAleatorio } from './functions'
import { variaveisGlobais } from './variaveis'

Cypress.Commands.add('formulario_cadastro_usuario', () => {
    const nomeAleatorio = gerarNomeAleatorio()
    const emailAleatorio = gerarEmailAleatorio()

    variaveisGlobais.nomeGerado = nomeAleatorio
    variaveisGlobais.emailGerado = emailAleatorio

    cy.get(loc.TITULO.TIITULO).should('contain', Cypress.env('titulo_cadastro_usuarios'))
    cy.get(loc.CADASTRAR_USUARIO.NOME).type(nomeAleatorio)
    cy.get(loc.CADASTRAR_USUARIO.EMAIL).type(emailAleatorio)
    cy.get(loc.CADASTRAR_USUARIO.SENHA).type(Cypress.env('senha'))
})

Cypress.Commands.add('cadastrar_como_administrador', () => {
    cy.get(loc.CADASTRAR_USUARIO.CHECK_BOX_ADM)
    .should('be.visible')
    .click()
})

Cypress.Commands.add('botao_cadastrar', () => {
    cy.get(loc.CADASTRAR_USUARIO.BTN_CADASTRAR_USUARIO)
    .should('be.visible')
    .click()
})

