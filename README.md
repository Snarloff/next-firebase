
# Projeto de Cadastro de Tecnologias com Chakra UI, Firebase, Next.js, DatoCMS e GraphQL

Este é um projeto que permite o cadastro e listagem de tecnologias. Foi desenvolvido com Chakra UI para a interface, autenticação com o login do GitHub via Firebase, Next.js para a camada de frontend, DatoCMS para gerenciamento de conteúdo e GraphQL para acessar e listar as tecnologias.

## Visão Geral

Este projeto inclui as seguintes funcionalidades:

- Cadastro de tecnologias por meio do DatoCMS, que permite definir títulos e imagens para cada tecnologia.
- Listagem das tecnologias a partir dos dados armazenados no DatoCMS usando GraphQL.
- Autenticação de usuário com o GitHub por meio do Firebase.
- Interface de usuário amigável com Chakra UI.

## Tecnologias Utilizadas

- [Chakra UI](https://chakra-ui.com/): Biblioteca de componentes de UI para React.
- [Firebase](https://firebase.google.com/): Plataforma de desenvolvimento de aplicativos móveis e web.
- [Next.js](https://nextjs.org/): Framework de React para renderização do lado do servidor.
- [DatoCMS](https://www.datocms.com/): Plataforma de gerenciamento de conteúdo.
- [GraphQL](https://graphql.org/): Linguagem de consulta e manipulação de dados.

## Instalação e Configuração

Certifique-se de ter o Node.js e as dependências do projeto instaladas na sua máquina. Em seguida, siga os passos abaixo:

1. Clone este repositório:

   ```shell
   git clone https://github.com/Snarloff/next-firebase.git
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```shell
   npm install
   ```

4. Crie um arquivo `.env.local` na raiz do projeto e configure as variáveis de ambiente necessárias:

   ```env
   DATOCMS_READ_ONLY_API_TOKEN=sua-api-token-do-DatoCMS
   NEXT_PUBLIC_FIREBASE_API_KEY=sua-chave-de-api-do-Firebase
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu-domínio-de-autenticação-do-Firebase
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu-ID-de-projeto-do-Firebase
   ```

5. Configure o modelo de dados no DatoCMS para representar as tecnologias com títulos e imagens.

6. Execute o servidor de desenvolvimento:

   ```shell
   npm run dev
   ```

7. Acesse a aplicação em seu navegador em `http://localhost:3000`.

## Uso do DatoCMS e GraphQL

Utilize o painel do DatoCMS para criar e gerenciar os dados das tecnologias. Crie modelos, insira dados e publique-os para que possam ser acessados via GraphQL. Configure consultas GraphQL para recuperar as tecnologias e exibi-las em seu aplicativo.

![Exemplo de um dado criado no Dato CMS](https://i.imgur.com/z0j1XQE.png)

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as diretrizes de contribuição e envie um pull request.

## Problemas e Sugestões

Se você encontrar algum problema ou tiver sugestões para melhorar este projeto, por favor, abra uma issue neste repositório.

## Licença

Este projeto está sob a licença [especificar a licença utilizada, se houver].

---

Agradecemos por visitar este repositório e por seu interesse no projeto de cadastro de tecnologias com Chakra UI, Firebase, Next.js, DatoCMS e GraphQL. Esperamos que este projeto seja útil e educativo para outros desenvolvedores interessados em criar aplicativos com essas tecnologias.
