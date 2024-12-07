# Projeto S4 - Conclusão de Semestre

Para instalar o Projeto Node S4, siga estas etapas:

Windows:
```
git clone
```
```
npm install
```
Crie um .env e insira os dados corretos, necessário possuir um postgres instalado.

PGHOST=localhost
PGPORT=5432
PGUSER="nome do usuário"
PGPASSWORD="senha para seu acesso a database postgres"
PGDATABASE="nome da sua database postgres"

SECRET_KEY="qualquer senha que desejar"

PORT=3000
```
npm run typeorm migration:run -- -d ./src/data-source
```
```
npm run dev
```
