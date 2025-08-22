Para inicialização do projeto, crie uma pasta com o nome de ListaTarefas.
Instale as seguintes dependências:
npm init -y
npm install express prisma @prisma/client dotenv
npm install -D typescript ts-node-dev @types/node @types/express

Crie o arquivo de configuração do TS:
npx tsc –-init

Sintaxe no .ENV → DATABASE_URL=postgresql://${USER}:${PASSWORD}@${HOST}:${SGBDPORT}/${DATABASE}

Inicialização do Prima:
npx prisma init --datasource-provider PostgreSQL

Gerar as migrações e sincronizar o BD:
npx prisma migrate dev --name init

Edite o arquivo tsconfig.json para garantir que o código será compilado corretamente. Certifique-se de configurar
as seguintes propriedades:
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
 "moduleResolution": "node",
 }
}

A propriedade scripts do arquivo package.json deverá ter as seguintes propriedades para executar o projeto:
"scripts": {
 "test": "echo \"Error: no test specified\" && exit 1",
 "dev": "ts-node-dev --respawn src/index.ts",
 "seed": "ts-node prisma/seed.ts"
 },

