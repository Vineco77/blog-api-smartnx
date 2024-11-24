# Blog API - SmartNX

API RESTful para gerenciamento de posts e comentários, desenvolvida com Node.js, Express, Sequelize e PostgreSQL.

## Requisitos

- Node.js >= 14.x
- PostgreSQL >= 12
- npm >= 6.x

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/blog-api-smartnx.git
cd blog-api-smartnx
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações locais.

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Scripts Disponíveis

- `npm start`: Inicia o servidor em produção
- `npm run dev`: Inicia o servidor em modo desenvolvimento
- `npm test`: Executa os testes
- `npm run test:coverage`: Executa os testes com relatório de cobertura
- `npm run lint`: Executa a verificação de lint
- `npm run lint:fix`: Corrige automaticamente problemas de lint

## Licença

ISC
