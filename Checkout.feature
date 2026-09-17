            [US-0003] - Tela de cadastro - Checkout

            #language: pt

            Funcionalidade: Configuração de produtos
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Contexto:
            Dado que eu acesse e conclua meu cadastro no site da Ebac Shop


            Esquema do Cenario: Deve permitir apenas 10 produtos por venda
            Quando eu digitar o <Email>
            E e a <senha>
            Então deve exibir a <Mensagem> de sucesso : "cadastro concluido!!"

            Exemplos:

            | "Email"           |  |"senha"     |  | "mensagem"         |
            | Everclc@gmail.com |  | #baruch123 |  | cadastro concluido!|
            | Edmargl@gmail.com |  | $baruch123 |  | cadastro concluido!|
            | Lucelia@gmail.com |  | %baruch123 |  | cadastro concluido!|
            | Eduardo@gmail.com |  | &baruch123 |  | cadastro concluido!|           



