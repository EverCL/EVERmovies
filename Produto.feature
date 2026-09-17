#Language: pt

[US-0001] - Configurar produto

Funcionalidade: Configuração de produtos
Como cliente da EBAC-SHOP
Quero configurar meu produto de acordo com meu tamanho e gosto
E escolher a quantidade
Para depois inserir no carrinho

Contexto:
Dado que eu acesse o site da Ebac Shop

Cenario: Seleções de cor, tamanho e quantidade devem ser obrigatórios
Quando eu preencher todos os campos da página de seleção de produtos da Ebac Shop
E e clicar em "adicionar produto"
Então deve exibir a mensagem "produto adicionado"

Cenario: Deve permitir apenas 10 produtos por venda
Quando eu selecionar um número máxmo de até 10 produtos na página da Ebac Shop
E e clicar em "adicionar produto"
Então deve exibir a mensagem "finalizar compra"

Cenario: voltar ao estado original
Quando eu tever selecionado produtos na página da Ebac Shop
E e clicar em "limpar"
Então a página deve voltar ao estado original

Cenario: Campo obrigatório não preenchido
Quando eu não preencher todos os campos da página de seleção de produtos da Ebac Shop
E e clicar em "adicionar produto"
Então deve exibir a mensagem  de alerta: "Preencha todos os campos"

Cenario: Número de produtos por venda ultrapassado
Quando eu selecionar mais de 10 produtos na página da Ebac Shop
E e clicar em "adicionar produto"
Então deve exibir a mensagem de alerta: "Quantidade de produtos ultrapassada"