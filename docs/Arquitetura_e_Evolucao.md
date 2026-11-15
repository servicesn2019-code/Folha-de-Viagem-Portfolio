# Arquitetura e evolução

## Base existente

O projeto interno contém uma aplicação Next.js com App Router e TypeScript. A página inicial possui um formulário visual. A documentação reúne requisitos, estudos de dados e orientações de desenvolvimento.

## Fluxo pretendido

Interface → validação no servidor/API → autorização → persistência no banco → resposta à interface.

Esse fluxo é uma proposta de evolução. Nesta edição, a amostra publicada demonstra apenas a interface inicial.

## Decisões a confirmar

- Banco e ferramenta de acesso a dados para a primeira entrega.
- Entidades e regras do primeiro fluxo completo.
- Estratégia de autenticação, sessões e permissões.
- Tratamento de erros, testes e critérios de aceitação.
- Hospedagem e configuração da futura demonstração.

## Critério para atualizar a apresentação

Cada funcionalidade passará de planejada para implementada após existir código executável e validação do comportamento correspondente. Capturas e demonstrações deverão corresponder à versão descrita.
