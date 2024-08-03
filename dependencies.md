# Documentação de Bibliotecas do Projeto

Este documento fornece uma visão geral das bibliotecas usadas no projeto, explicando seu propósito e como são utilizadas.

## Dependências do Projeto

### 1. `express`

- **Descrição:** Framework web minimalista para Node.js.
- **Uso no Projeto:**
    - Gerenciamento de rotas HTTP.
    - Middleware para manipulação de solicitações e respostas.

### 2. `sequelize`

- **Descrição:** ORM (Object-Relational Mapping) para Node.js, que suporta vários bancos de dados SQL.
- **Uso no Projeto:**
    - Modelagem e interação com o banco de dados PostgreSQL.
    - Definição de modelos, associações e execução de consultas.

### 3. `pg` e `pg-hstore`

- **Descrição:** Pacotes necessários para usar o PostgreSQL com o Sequelize.
- **Uso no Projeto:**
    - `pg`: Driver para PostgreSQL.
    - `pg-hstore`: Serialização e deserialização de objetos JSON no PostgreSQL.

### 4. `bcryptjs`

- **Descrição:** Biblioteca para hashing de senhas.
- **Uso no Projeto:**
    - Criptografia de senhas antes de armazená-las no banco de dados.
    - Comparação de senhas durante o processo de autenticação.

### 5. `jsonwebtoken`

- **Descrição:** Biblioteca para gerar e verificar tokens JWT (JSON Web Tokens).
- **Uso no Projeto:**
    - Geração de tokens de autenticação para usuários logados.
    - Verificação de tokens para proteger rotas com autenticação.

### 6. `dotenv`

- **Descrição:** Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **Uso no Projeto:**
    - Gerenciamento de variáveis de ambiente como configurações de banco de dados e credenciais de API.
    - Facilitar o uso de diferentes configurações para ambientes de desenvolvimento e produção.

### 7. `helmet`

- **Descrição:** Conjunto de middlewares para adicionar cabeçalhos de segurança a aplicações Express.
- **Uso no Projeto:**
    - Proteção contra vulnerabilidades comuns de segurança da web (XSS, cliques de script, etc.).
    - Configuração de cabeçalhos HTTP de segurança.

### 8. `express-rate-limit`

- **Descrição:** Middleware para limitar o número de solicitações a uma API.
- **Uso no Projeto:**
    - Prevenção de abusos e ataques DDoS limitando o número de solicitações que um usuário pode fazer em um período de tempo específico.

### 9. `eslint`

- **Descrição:** Ferramenta para identificar e corrigir problemas no código JavaScript.
- **Uso no Projeto:**
    - Linting do código para garantir a conformidade com os padrões de estilo e qualidade do código.
    - Integração com Prettier para formatação de código.

### 10. `prettier`

- **Descrição:** Formatador de código opinativo.
- **Uso no Projeto:**
    - Garantia de formatação de código consistente em todo o projeto.
    - Integração com ESLint para corrigir automaticamente problemas de estilo de código.

### 11. `eslint-config-prettier` e `eslint-plugin-prettier`

- **Descrição:** Integração entre ESLint e Prettier.
- **Uso no Projeto:**
    - `eslint-config-prettier`: Desativa regras de ESLint que conflitam com o Prettier.
    - `eslint-plugin-prettier`: Executa o Prettier como uma regra de ESLint.

### 12. `eslint-plugin-react`

- **Descrição:** Plugin para adicionar regras de lint específicas para React.
- **Uso no Projeto:**
    - Garantia de conformidade com as melhores práticas de desenvolvimento React.

### 13. `eslint-config-airbnb`

- **Descrição:** Conjunto de regras de estilo de código baseadas no guia de estilo do Airbnb.
- **Uso no Projeto:**
    - Aplicação de regras de estilo de código amplamente reconhecidas e adotadas.

## Outras Ferramentas

### 14. `swagger-ui-express` e `swagger-jsdoc`

- **Descrição:** Ferramentas para documentar APIs RESTful usando Swagger.
- **Uso no Projeto:**
    - Geração automática de documentação interativa da API.
    - Visibilidade das rotas disponíveis e seus parâmetros.