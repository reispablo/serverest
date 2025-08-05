import loc from './locators'

Cypress.Commands.add('alerta_email_senha', () => {
    cy.get(loc.ALERTA.ALERTA).should('contain', Cypress.env('Email e/ou senha inválidos'))
})