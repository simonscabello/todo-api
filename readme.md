# Todo API

Esta é uma API simples de lista de tarefas (to-do list) construída com Node.js, Express, Sequelize e MySQL. A API permite criar, ler, atualizar e excluir tarefas.

## Requisitos

- Docker
- Docker Compose
- MySQL ou Postgres

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/todo-api.git
   cd todo-api
   ```
   
2. Crie o banco de dados e um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

    ```sh
    DB_HOST=seuhost
    DB_USER=seu-usuario
    DB_PASSWORD=sua-senha
    DB_NAME=todo
    DB_DRIVER=mysql/postgres
    ```

3. Faça o build do container:

    ```sh
    docker-compose build
    ```

4. Suba o container:

    ```sh
    docker-compose up
    ```

O servidor estará em execução em http://localhost:3000.