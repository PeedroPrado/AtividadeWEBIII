Para inicialização do projeto, crie uma pasta com o nome de ListaTarefas. <br>
Instale as seguintes dependências: <br>
npm init -y <br>
npm install express prisma @prisma/client dotenv <br>
npm install -D typescript ts-node-dev @types/node @types/express <br>

Crie o arquivo de configuração do TS: <br>
npx tsc --init <br>

Sintaxe no .ENV → DATABASE_URL=postgresql://${USER}:${PASSWORD}@${HOST}:${SGBDPORT}/${DATABASE} <br>

Inicialização do Prima: <br>
npx prisma init --datasource-provider PostgreSQL <br>

Gerar as migrações e sincronizar o BD: <br>
npx prisma migrate dev --name init <br>

Edite o arquivo tsconfig.json para garantir que o código será compilado corretamente. Certifique-se de configurar <br>
as seguintes propriedades: <br>
{ <br>
 "compilerOptions": { <br>
 "outDir": "./dist", <br>
 "module": "commonjs", <br>
 "target": "ES6", <br>
 "types": [], <br>
 "sourceMap": true, <br>
 "declaration": true, <br>
 "declarationMap": true, <br>
 "noUncheckedIndexedAccess": true,<br>
 "exactOptionalPropertyTypes": true,<br>
 "strict": true,<br>
 "jsx": "react-jsx",<br>
 "verbatimModuleSyntax": false,<br>
 "isolatedModules": true,<br>
 "noUncheckedSideEffectImports": true,<br>
 "moduleDetection": "force",<br>
 "skipLibCheck": true,<br>
 "esModuleInterop": true,<br>
 "moduleResolution": "node",<br>
 }<br>
}<br>

A propriedade scripts do arquivo package.json deverá ter as seguintes propriedades para executar o projeto:<br>
"scripts": {<br>
 "test": "echo \"Error: no test specified\" && exit 1",<br>
 "dev": "ts-node-dev --respawn src/index.ts",<br>
 "seed": "ts-node prisma/seed.ts"<br>
 },<br>

