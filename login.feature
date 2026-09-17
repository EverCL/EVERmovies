#language: pt

[US-0002] - Login na plataforma

Funcionalidade: Login na plataforma
Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma  
Para visualizar meus pedidos


Funcionalidade: Login na plataforma

Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma
Para visualizar meus pedidos

Contexto:
Dado que eu faça login na  Plataforma da Ebac Shop

Cenario: Usuário autenticado
Quando eu digitar o usuário "everaldoclc@.com"
E e a senha "Logever12"
Então deve ser direcionado para a tela de checkout


Cenario: senha inválida
Quando eu digitar o usuário "everaldoclc@.comb"
E e a senha "Logever123"
Então deve exibir a mensagem  de alerta: "usuário ou senha inválidos"

