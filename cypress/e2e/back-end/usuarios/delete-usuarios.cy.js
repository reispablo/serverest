/// <reference types="cypress"/>
import { gerarNomeAleatorio, gerarEmailAleatorio } from '../../../support/functions'
const nomeAleatorio = gerarNomeAleatorio()
const emailAleatorio = gerarEmailAleatorio()

describe('Delete Usuarios', () => {
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

    it('deve deletar usuário criado', () => {
        cy.request({
            url: `/usuarios/${idUsuarioAdm}`,
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.message).to.eq('Registro excluído com sucesso')
        })
    })

    it('deve retornar mensagem ao tentar deletar usuário inexistente', () => {
        cy.request({
            url: `/usuarios/usuarioNaoExiste456`,
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.message).to.eq('Nenhum registro excluído')
        })
    })

    it('buscar participante com carrinho', () => {
        cy.request({
            url: '/carrinhos',
            method: 'GET',     
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            expect(res.status).to.eq(200)
            idUsuario = res.body.carrinhos[0]._id
        })
    })

    it('não deve permitir excluir usuário com carrinho cadastrado', () => {
        //estamos recebendo a mensagem errada para esse endpoint
        cy.request({
            url: `/usuarios/${idUsuario}`,
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.message).to.eq('Não é permitido excluir usuário com carrinho cadastrado')
        })
    })
})