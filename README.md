# Motors Shop 🚗

Motors Shop é um e-commerce de veículos que permite que os usuários se cadastrem como vendedores ou compradores, publiquem, editem e excluam anúncios, filtrem os tipos de busca, visualizem outros perfis de vendedores e seus respectivos anúncios, entre outras funcionalidades.

## Como executar o projeto

### Setup de ambiente:

-   [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
-   [Node LTS](https://nodejs.org/en/)

### Como rodar na minha máquina?

-   Clone o projeto `https://github.com/KenzieKars/Frontend.git`;
-   Execute o comando `yarn install` no diretório do projeto para instalar todas as dependências necessárias;
-   Execute o comando `yarn start dev` no diretório do projeto para rodar a aplicação em modo de desenvolvedor;
-   Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador;
-   Pronto 🎉

**Como realizar contribuições para o projeto?**

-   Execute o comando `git checkout -b <nome-da-nova-branch> develop` no diretório do projeto para criar uma nova branch;
-   Realize um commit convencional das alterações realizadas `git commit -m "feat: <descrição-do-commit>`
-   Execute o comando `git push origin <sua-branch>` para enviar as contribuições.
-   Pronto 🎉

### `yarn start dev`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

A página será recarregada se você fizer edições.\
Você também poderá visualizar erros de lint no console.

## Como o projeto está estruturado

```
my-app
├── 📁 node_modules ➡️ Dependências instaladas pelo yarn.
├── 📁 public ➡️ Arquivos estáticos públicos.
├── 📂 src ➡️ Código fonte do projeto.
│   ├── 📁 assets ➡️ Arquivos estáticos como imagens, fontes e etc.
│   ├── 📁 components ➡️ Componentes React reutilizáveis.
│   ├── 📁 contexts ➡️ Contextos React para compartilhamento de dados.
│   ├── 📁 interfaces ➡️ Interfaces TypeScript do projeto.
│   ├── 📁 pages ➡️ Páginas principais da aplicação.
│   ├── 📁 routes ➡️ Definições de rotas da aplicação.
│   ├── 📁 serializers ➡️ Serializações dos formulários.
│   ├── 📁 services ➡️ Configuração das APIs externas.
│   ├── 📁 styles ➡️ Arquivos de estilização do projeto.
│   ├── 📁 util ➡️ Configurações utilitárias.
│   ├── App.tsx ➡️ Componente principal.
│   ├── index.tsx ➡️ Inicia o aplicativo e o renderiza na página HTML.
│   └── react-app-env.d.ts ➡️ Permite ao TypeScript reconhecer variáveis globais.
├── .gitignore ➡️ Arquivo que devem ser ignorados pelo Git.
├── package.json ➡️ Informações do projeto e as dependências utilizadas.
├── README.md ➡️ Documentação do projeto.
├── tsconfig.json ➡️ Configuração do TypeScript.
├── yarn-error.log ➡️ Gerado pelo yarn.
└── yarn.lock ➡️ Gerado pelo yarn.
```

## Funcionalidades

1. Cadastro de Usuário\
   O usuário pode se cadastrar como vendedor ou comprador, fornecendo as informações necessárias.

2. Edição e Exclusão de Perfil\
   O usuário pode editar ou excluir sua própria conta, caso queira.

3. Publicação de Anúncios\
   O vendedor pode publicar um novo anúncio de veículo, fornecendo as informações necessárias, como modelo, ano, preço, fotos, descrição, entre outras.

4. Edição e Exclusão de Anúncios\
   O vendedor pode editar ou excluir seus próprios anúncios, caso necessário.

5. Filtro de Busca\
   O comprador pode filtrar a busca de veículos por diversos critérios, como marca, modelo, ano, preço, entre outros.

6. Visualização de Perfis de Vendedores\
   O comprador pode visualizar o perfil de outros vendedores, incluindo seus anúncios ativos e informações de contato.

## Tecnologias 💻

-   **React**
    -   React Router DOM
    -   React Hook Form
    -   React Icons
-   **TypeScript**
-   **Axios**
-   **CORS**
-   **JSON Web Token (JWT)**
    -   Decode
-   **Yup**
-   **Styled Components**

## Créditos 👨‍💻

-   Mickel Barros [:octocat:](https://github.com/Mickel-Barros)
-   Felipe Bravo [:octocat:](https://github.com/felipebravo)
-   Lucas Cruz [:octocat:](https://github.com/LucasCruz0103)
-   Wesley Carvalho [:octocat:](https://github.com/wesCarv)
-   Marcela Ferreira [:octocat:](https://github.com/mamadipaula)

## Saiba mais

Você pode conhecer mais em [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, veja [React documentation](https://reactjs.org/).
