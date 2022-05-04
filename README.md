
# Project
Configuração de Ambiente e Criação de um projeto Node.js com TypeScript e Express
•	Os passos abaixo descrevem todos os passos para configurar o ambiente com Node.js e criar um projeto com TypeScript e Express

1 - Instalar o editar de código Visual Studio Code (https://code.visualstudio.com/download)<br>
2 - Instalar qualquer a versão LTS do Node.js (https://nodejs.org/en/)<br>
3 - Criar uma pasta na máquina para armezar os arquivos do projeto;<br>
4 - Abrir o terminal na pasta criada e rodar o comando abaixo para inicializar o projeto: **_npm init -y_** <br>
5 - Instalar o pacate do TypeScript de modo global: **_npm i -g typescript_**<br>
6 - Inicializar o TypeScript dentro do projeto: **_tsc --init_** <br>
7 - Instalar o pacate do ts-node-dev de modo global: **_npm i -g ts-node-dev_** <br>
8 - Configurar o script de desenvolvimento do arquivo package.json<br>
**_"dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules src/server.ts"_**<br>
9 - Criar um arquivo para inicializar a aplicação e fazer um teste com a impressão de qualquer mensagem no terminal;<br>
10 - Instalar o pacote do Express e seus tipos: **_npm i express @types/express_**<br>
