/// <reference types="cypress"/>

describe('Buscar Produtos', () => {
    let token;

    before(() => {
        cy.login_admin_backend().then(tkn => { token = tkn })
    })

    it('Buscar Lista de produtos', () => {
        cy.request({
            url: '/produtos',
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        }).as('response')
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it('Valida se a resposta contem a propriedade produtos', () => {
        cy.request({
            url: '/produtos',
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            expect(response.body).to.have.property('produtos')
            expect(response.body.produtos).to.be.an('array')
        })
    })

    it('Valida se cada produtos possui propriedades obrigatórias', () => {
        cy.request({
            url: '/produtos',
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            response.body.produtos.forEach(produtos => {
                expect(produtos).to.have.property('_id')
                expect(produtos).to.have.property('nome')
                expect(produtos).to.have.property('preco')
                expect(produtos).to.have.property('descricao')
                expect(produtos).to.have.property('quantidade')
            })
        })
    })

    it('Valida que o tempo de resposta é menor que 1 segundo', () => {
        cy.request({
            url: '/produtos',
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            expect(response.duration).to.be.lessThan(1000)
        })
    })

    it('deve buscar produtos pelo id', () => {
        cy.request({
            url: '/produtos/BeeJh5lz3k6kSIzA',
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('descricao')
            expect(res.body).to.have.property('nome')
            expect(res.body).to.have.property('preco')
            expect(res.body).to.have.property('quantidade')
            expect(res.body._id).to.eq('BeeJh5lz3k6kSIzA')
        })
    })
})
