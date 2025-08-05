/// <reference types="cypress"/>

Cypress.Commands.add('login_backend', (email, senha) => {
    it('Login back-end', () => {
        cy.request({
            url: '/login',
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
            body: {
                "email": email,
                "password": senha
            }
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.body.message).to.include("Login realizado com sucesso")
            token = res.body.authorization
            cy.log(`Token gerado: ${token}`)
        })
    })
})

Cypress.Commands.add('login_admin_backend', () => {
    cy.login_backend(Cypress.env('email'), Cypress.env('senha'))
})
