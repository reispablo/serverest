/// <reference types="cypress"/>
import { gerarNomeProdutos, gerarPrecoProduto, gerarDescricaoProduto, gerarQuantidade } from '../../../support/functions'

describe('Cadastrar produtos', () => {
    let token

    const nomeProduto = gerarNomeProdutos()

    before(() => {
        cy.login_admin_backend().then(tkn => { token = tkn })
    })

    it('cadastrar produtos', () => {
        cy.request({
            url: '/produtos',
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
            body: {
                "nome": nomeProduto+''+Math.floor(Math.random() * 1000),
                "preco": gerarPrecoProduto,
                "descricao": gerarDescricaoProduto,
                "quantidade": gerarQuantidade
            }
        }).as('response')
        cy.get('@response').then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.message).to.eq('Cadastro realizado com sucesso')
            idUsuarioAdm = res.body._id
        })
    })
})

    