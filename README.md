# Serverest - Guia de Instalação e Execução de Testes

Este projeto utiliza o Cypress para automação de testes. Siga o passo a passo abaixo para instalar as dependências e rodar os testes.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina
- [npm](https://www.npmjs.com/) instalado

## Instalação

1. Clone o repositório:
   https://github.com/reispablo/serverest.git

2. Instale as dependências necessárias:
   npm install cypress
   npm install dotenv --save-dev
   npm install --save-dev cypress-file-upload

## Executando os Testes

- Para abrir a interface do Cypress e rodar os testes:
  npm run open


## Pipeline de Testes Automatizados (GitHub Actions)

Este projeto possui integração com o **GitHub Actions**, que executa os testes automaticamente nas seguintes situações:

- Push na branch `main`
- Pull request direcionado para a branch `main`

### Executando a Pipeline Manualmente

Você também pode rodar os testes manualmente pelo GitHub:

1. Acesse a aba **[Actions](https://github.com/reispablo/serverest/actions)** do repositório no GitHub.
2. Selecione o workflow **"Cypress Tests"** na lista à esquerda.
3. Clique no botão **"Run workflow"** no canto superior direito.
4. Escolha a branch (por padrão, `main`) e clique em **"Run workflow"** novamente.

A pipeline será executada em servidores do GitHub e você poderá acompanhar os logs em tempo real.

---

## Observações

- Certifique-se de configurar corretamente as variáveis de ambiente no arquivo `.env`, se necessário.
- se necessário alterar login e senha no arquivo `.env`. 

"email": "reispablo87@gmail.com",
"senha": "123456",
  
---
