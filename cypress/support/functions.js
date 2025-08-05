export function gerarNomeAleatorio() {
  const nomes = ['João', 'Maria', 'Carlos', 'Ana', 'Pedro', 'Mariana', 'Lucas', 'Juliana']
  const sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Pereira', 'Costa', 'Almeida', 'Ferreira']

  const nome = nomes[Math.floor(Math.random() * nomes.length)]
  const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)]

  return `${nome} ${sobrenome}`
}

export function gerarEmailAleatorio() {
  const prefixo = Math.random().toString(36).substring(2, 10)
  const sufixo = Math.floor(Math.random() * 10000)          

  return `user.${prefixo}${sufixo}@teste.com`
}

export function gerarNomeProdutos() {
  const nomes = ['PS', 'Xbox', 'Wii', 'Nitendo', 'Android', 'MAC', 'Iphone']
  const sobrenomes = ['01', 'One', 'U', 'Switch', 'Mobile', 'OS', '30']

  const nome = nomes[Math.floor(Math.random() * nomes.length)]
  const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)]

  return `${nome} ${sobrenome}`
}

export function gerarPrecoProduto() {
  return Cypress._.random(100, 500).toString()
}

export function gerarQuantidade() {
  return Cypress._.random(1, 500).toString()
}

export function gerarDescricaoProduto() {
  const descricoes = [
    'Camisa Dragon Ball Z',
    'Mouse gamer RGB',
    'Teclado mecânico azul',
    'Camiseta anime Naruto',
    'Fone Bluetooth preto',
    'Boneco Goku pequeno',
    'Caneca personalizada DBZ',
    'Capinha celular anime',
    'Mochila escolar Gohan',
    'Action figure Vegeta'
  ]
  return Cypress._.sample(descricoes)
}



