/// <reference types="cypress"/>
import { gerarNomeAleatorio, gerarEmailAleatorio } from '../../../support/functions'
const nomeAleatorio = gerarNomeAleatorio()
const emailAleatorio = gerarEmailAleatorio()

describe('GET Usuarios', () => {
    let token
    let idUsuarioAdm
    let idUsuario

    before(() => {
        cy.login_admin_backend().then(tkn => { token = tkn })
    })

    it('cadastrar usuarios admin', () => {
        cy.request({
            url: '/usuarios',
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
            body: {
                "nome": nomeAleatorio,
                "email": emailAleatorio,
                "password": "123456",
                "administrador": "true"
            }
        }).as('response')
        cy.get('@response').then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.message).to.eq('Cadastro realizado com sucesso')
            idUsuarioAdm = res.body._id
            cy.log(`Usuario = ${idUsuarioAdm}`)
        })
    })

    it('cadastrar usuarios', () => {
        cy.request({
            url: '/usuarios',
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
            body: {
                "nome": nomeAleatorio,
                "email": 'meu'+emailAleatorio,
                "password": "123456",
                "administrador": "false"
            }
        }).as('response')
        cy.get('@response').then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.message).to.eq('Cadastro realizado com sucesso')
            idUsuario = res.body._id
            cy.log(`Usuario = ${idUsuario}`)
        })
    })

    it('editar usuarios', () => {
        cy.request({
            url: '/usuarios/'+idUsuario,
            method: 'PUT',
            headers: { Authorization: `Bearer ${token}` },
            body: {
                "nome": "outro"+nomeAleatorio,
                "email": 'outro'+emailAleatorio,
                "password": "123456",
                "administrador": "false"
            }
        }).as('response')
        cy.get('@response').then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.message).to.eq('Registro alterado com sucesso')
            idUsuario = res.body._id
            cy.log(`Usuario = ${idUsuario}`)
        })
    })

    it('não deve permitir cadastro com email já existente', () => {
        cy.request({
            url: '/usuarios',
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
            body: {
                "nome": gerarNomeAleatorio(),
                "email": emailAleatorio, 
                "password": "123456",
                "administrador": "false"
            },
            failOnStatusCode: false
        }).as('response')
        cy.get('@response').then((res) => {
            expect(res.status).to.eq(400)
            expect(res.body.message).to.eq('Este email já está sendo usado')
        })
    })

    it('deve buscar usuário pelo id', () => {
        cy.request({
            url: `/usuarios/${idUsuarioAdm}`,
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('nome')
            expect(res.body).to.have.property('email')
            expect(res.body._id).to.eq(idUsuarioAdm)
        })
    })    
})