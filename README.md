RELATORIO:

Descrição Geral:

O projeto desenvolvido é um Sistema de Gerenciamento de Produtos e Tarefas, cujo propósito principal é auxiliar os usuários
a gerenciar suas tarefas diárias e manter um controle eficiente sobre seus produtos. O sistema permite que os usuários
cadastrem, visualizem, editem e removam produtos, além de oferecer funcionalidades básicas de login para garantir
a segurança e personalização das informações de cada usuário.

Usuário-Alvo:

Os usuários finais do aplicativo são pequenos empresários, gerentes de estoque e profissionais que necessitam de um sistema
para organizar tarefas e gerenciar produtos de forma prática e eficiente.

Detalhamento Técnico:

O projeto foi desenvolvido utilizando o framework Angular, estruturado em diversos componentes, serviços e módulos
para garantir a modularidade e a escalabilidade do sistema.
Componentes de Visualização:

AppComponent: Componente principal que hospeda a aplicação.
CabecalhoComponent: Componente de cabeçalho que fornece a navegação principal.
RodapeComponent: Componente de rodapé para informações adicionais.
PaginaInicialComponent: Página inicial que apresenta as funcionalidades do sistema.
CadastrarProdutoComponent: Formulário para cadastrar e editar produtos.
LoginComponent: Página de login para autenticação do usuário.

Serviços:
ProdutoService: Serviço responsável por gerenciar operações relacionadas aos produtos (adicionar, atualizar, buscar
e remover produtos).

Módulos:

AppModule: Módulo principal que importa e declara todos
os componentes e serviços necessários.

Desafios e Soluções:

Durante o desenvolvimento do projeto, foram encontrados diversos desafios:

Integração de Componentes e Serviços:

Desafio: Garantir que os componentes e serviços se comuniquem de forma eficiente.
Solução: Utilização de ReactiveFormsModule para gerenciamento de formulários e injeção de dependência para os serviços.
Validação de Formulários:

Desafio: Implementar validação adequada dos formulários para garantir dados precisos e completos.
Solução: Uso de validadores personalizados e exibição de mensagens de erro dinâmicas.
Autenticação e Segurança:

Desafio: Implementar uma funcionalidade de login segura e eficaz.
Solução: Utilização de formulários reativos e bibliotecas como SweetAlert para fornecer feedback ao usuário.

Resultados Alcançados:

O projeto conseguiu atingir seus principais objetivos:

Implementação de um sistema funcional para gerenciamento de produtos e tarefas.
Interface amigável e intuitiva para o usuário final.
Funcionalidades básicas de segurança.

Futuras Melhorias:

Adicionar funcionalidades para diferentes níveis de acesso e permissões.
Integrar funcionalidades para gerar relatórios e análises de estoque e desempenho de tarefas.
Implementar notificações por e-mail ou push para lembrar os usuários de suas tarefas e atualizações de produtos.
