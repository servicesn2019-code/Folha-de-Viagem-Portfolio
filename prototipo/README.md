# Protótipo — versão 2

Página inicial com acesso Gestor e acesso individual do condutor. Painéis mensais com gráfico, comparação percentual, consumos demonstrativos e lista de condutores. Registo de viagens com datas e horas, países, locais e quilómetros. Consulta mensal e relatório imprimível para guardar como PDF.

A assinatura do relatório é uma simulação com nome e data, sem certificado criptográfico. Não existe autenticação ou backend. Registos criados ficam apenas na memória da página. O período mensal considera a data de início da viagem; os consumos são exemplos estáticos identificados na tela.

O PDF v1 nesta pasta é um arquivo histórico da primeira versão visual; a versão atual é o HTML navegável.

## Consumos e relatórios

Gestor e condutor possuem página de consumos com combustível, parques, litros e valores em euros. A consulta permite escolher viagens, consumos ou ambos, filtrados pelo mês e pelo condutor (o gestor também pode consultar todos). O PDF usa a impressão do relatório apresentado, incluindo sua assinatura simulada quando preenchida. Uma nova consulta remove a assinatura anterior. Consumos fictícios não são criados automaticamente ao incluir viagens.
