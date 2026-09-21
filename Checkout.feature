            [US-0003] - Tela de cadastro - Checkout

            #language: pt

            Funcionalidade: Conclusão de cadastro
            Como cliente da EBAC-SHOP
            Quero concluir meu cadastro
            Para finalizar a compra

            Contexto:
            Dado que eu acesse e conclua meu cadastro no site da Ebac Shop


            Esquema do Cenario: Deve permitir o cadastro apenas com login e senha corretos
            Quando eu digitar o <Email>
            E e a <senha>
            Então deve exibir a <Mensagem> de sucesso : "cadastro concluido!!"

            Exemplos:

            | Email               |  | senha        |  | mensagem              |
            | "Everclc@gmail.com" |  | "#baruch123" |  | "cadastro concluido!" |
            | "Edmargl@gmail.com" |  | "$baruch123" |  | "cadastro concluido!" |
            | "Lucelia@gmail.com" |  | "%baruch123" |  | "cadastro concluido!" |
            | "Eduardo@gmail.com" |  | "&baruch123" |  | "cadastro concluido!" |

            Esquema do Cenario: login e/ou senha incorretos
            Quando eu digitar o <Email>
            E e a <senha>
            Então deve exibir a <Mensagem> de alerta : "login ou senha inválidos!!"

            Exemplos:

            | Email               |  | senha        |  | mensagem                   |
            | "Everclc@gmail.gov" |  | "#baruch123" |  | "login ou senha inválidos! |
            | "Edmargl@gmail:com" |  | "$baruch123" |  | "login ou senha inválidos! |
            | "Lucelia@gmail.@MG" |  | "%baruch123" |  | "login ou senha inválidos! |
            | "Eduardo@gmail.com" |  | "&baRuch123" |  | "login ou senha inválidos! |

           
            Funcionalidade: Escolha dos produtos
            Contexto:
            Dado que eu selecione um produto

            Esquema do Cenario: Deve permitir apenas 10 produtos por venda
            Quando eu clicar em <produto>
            E em <quantidade>
            Então deve exibir a <Mensagem> de confirmação: "Produto adicionado!"

            Exemplos:

            | Produto                          |  | quantidade |  | mensagem              |
            | "blusa rosa tamanho M"           |  | " 2 "     |  | "Produto adicionado!" |
            | "calça jeans azul tamahno G"     |  | " 1 "     |  | "Produto adicionado!" |
            | "camisa social branca tamanho G" |  | " 1 "     |  | "Produto adicionado!" |
            | "calça jeans preta tamahno G"    |  | " 2 "     |  | "Produto adicionado!" |

            Esquema do Cenario: Campos obrigatórios não preenchidos
            Quando eu clicar em <produto>
            E em <quantidade>
            Então deve exibir a <Mensagem> de alerta: "Campo obrigatório não preenchido!"

            Exemplos:

            | Produto                          |  | quantidade |  | mensagem                               |
            | "blusa rosa tamanho M"           |  | 0          |  | "Campo obrigatório não preenchido!" |
            | "calça jeans azul tamahno G"     |  | 0          |  | "Campo obrigatório não preenchido!" |
            | "camisa social branca tamanho G" |  | 0          |  | "Campo obrigatório não preenchido!" |
            | "calça jeans preta tamahno G"    |  | 0          |  | "Campo obrigatório não preenchido!" |




