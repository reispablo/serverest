import loc from './locators'

Cypress.Commands.add('login', (email, senha) => {
    cy.visit('https://front.serverest.dev/login')
    cy.get(loc.LOGIN.EMAIL, { timeout: 100000 }).type(email)
    cy.get(loc.LOGIN.SENHA).type(senha)
    cy.get(loc.LOGIN.BTN_ENTRAR).click()
})
Cypress.Commands.add('login_admin', () => {
    cy.login(Cypress.env('email'), Cypress.env('senha'))
})

Cypress.Commands.add('login_invalido', () => {
    cy.login(Cypress.env('not-email'), Cypress.env('not-senha'))
})