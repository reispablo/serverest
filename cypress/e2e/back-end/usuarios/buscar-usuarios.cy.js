/// <reference types="cypress"/>
import { gerarNomeAleatorio, gerarEmailAleatorio } from '../../../support/functions'
const nomeAleatorio = gerarNomeAleatorio()
const emailAleatorio = gerarEmailAleatorio()

describe('Buscar Usuarios', () => {
    let token
    let idUsuario

    before(() => {
        cy.login_admin_backend().then(tkn => { token = tkn })
    })

    it('Buscar Lista de usuarios', () => {
        cy.request({
            url: '/usuarios',
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        }).as('response')
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it('Valida se a resposta contem a propriedade usuarios', () => {
        cy.request({
            url: '/usuarios',
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            expect(response.body).to.have.property('usuarios')
            expect(response.body.usuarios).to.be.an('array')
        })
    })

    it('Valida se cada usuario possui propriedades obrigatórias', () => {
        cy.request({
            url: '/usuarios',
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            response.body.usuarios.forEach(usuario => {
                expect(usuario).to.have.property('nome')
                expect(usuario).to.have.property('email')
                expect(usuario).to.have.property('password')
                expect(usuario).to.have.property('_id')
            })
        })
    })

    it('Valida que o tempo de resposta é menor que 1 segundo', () => {
        cy.request({
            url: '/usuarios',
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            expect(response.duration).to.be.lessThan(1000)
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

    it('deve buscar usuário pelo id', () => {
        cy.request({
            url: '/usuarios/'+idUsuario,
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('nome')
            expect(res.body).to.have.property('email')
            expect(res.body._id).to.eq(idUsuario)
        })
    })
})
