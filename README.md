# 🚗 Atividade de Associação Carro - Pessoa  

📌 **Primeira Atividade da disciplina Desenvolvimento WEB III**  

Este projeto tem como objetivo praticar a **associação entre entidades (Carro e Pessoa)** utilizando **Prisma** com **PostgreSQL**.  

---

## ⚙️ Configuração do Projeto  

### 1. Criação da pasta do projeto  
```bash
mkdir ListaTarefas
cd ListaTarefas
2. Inicialização do Node.js
```bash

npm init -y
3. Instalação das dependências
```bash

npm install express prisma @prisma/client dotenv
npm install -D typescript ts-node-dev @types/node @types/express
4. Configuração do TypeScript
```bash

npx tsc --init
Edite o arquivo tsconfig.json e adicione:

json

{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "commonjs",
    "target": "ES6",
    "types": [],
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": false,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "moduleResolution": "node"
  }
}
🗄️ Configuração do Banco de Dados
Crie o arquivo .env com a seguinte sintaxe:

env

DATABASE_URL=postgresql://${USER}:${PASSWORD}@${HOST}:${SGBDPORT}/${DATABASE}
🔧 Configuração do Prisma
1. Inicialização
```bash

npx prisma init --datasource-provider PostgreSQL
2. Criação da primeira migração
```bash

npx prisma migrate dev --name init
📜 Scripts do Projeto
No arquivo package.json, configure a propriedade scripts da seguinte forma:

json

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "ts-node-dev --respawn src/index.ts",
  "seed": "ts-node prisma/seed.ts"
}
🚀 Execução do Projeto
Para rodar o projeto em ambiente de desenvolvimento:

```bash

npm run dev
Para rodar o script de seed (caso configurado):

```bash

npm run seed
