import loc from './locators'

Cypress.Commands.add('cadastrar_usuarios', () => {
    cy.get(loc.DASHBOARD.BTN_CADASTRAR_USUARIOS).click()
})

Cypress.Commands.add('cadastrar_produtos', () => {
    cy.get(loc.DASHBOARD.BTN_CADASTRAR_PRODUTOS).click()
})


