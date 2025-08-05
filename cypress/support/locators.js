const locators = {
    LOGIN: {
        EMAIL: '[data-testid="email"]',
        SENHA: '[data-testid="senha"]',
        BTN_ENTRAR: '[data-testid="entrar"]'
    },
    DASHBOARD: {       
        BTN_CADASTRAR_USUARIOS: '[data-testid="cadastrarUsuarios"]',
        BTN_CADASTRAR_PRODUTOS: '[data-testid="cadastrarProdutos"]'
    },
    CADASTRAR_USUARIO: {
        NOME: '[data-testid="nome"]',
        EMAIL: '[data-testid="email"]',
        SENHA: '[data-testid="password"]',
        CHECK_BOX_ADM: '[data-testid="checkbox"]',
        BTN_CADASTRAR_USUARIO: '[data-testid="cadastrarUsuario"]'        
    },
    LISTA: {        
        LISTA_USUARIOS: '.jumbotron',
        LISTA_PRODUTOS: '.jumbotron'
    },
    CADASTRAR_PRODUTOS: {
        NOME_PRODUTO: '[data-testid="nome"]',
        PRECO: '[data-testid="preco"]',
        DESCRICAO_PRODUTO: '[data-testid="descricao"]',
        QUANTIDADE: '[data-testid="quantity"]',
        IMAGEM_PRODUTO: '[data-testid="imagem"]',
        BTN_CADASTRAR_PRODUTOS: '[data-testid="cadastarProdutos"]'
    },
    TITULO:{
        TIITULO: 'h1',
    },
    ALERTA: {
        ALERTA: '.alert > :nth-child(2)',          
    }
}
export default locators





