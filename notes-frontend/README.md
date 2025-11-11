# Portfólio - Enzo Santoro (React + Vite)

Este repositório contém um portfólio pessoal convertido para uma SPA em React usando Vite.

Principais pontos
- Navegação interna implementada via estado (useState).
- A barra de navegação superior é fixa (segue a tela).
- CSS principal foi movido para src/index.css.

Como rodar (modo recomendado)
1. Abra um terminal na pasta do projeto React:
   cd notes-frontend
2. Instale dependências:
   npm install
3. Rode em modo desenvolvimento:
   npm run dev
4. Abra o endereço informado pelo vite (normalmente http://localhost:5173).

Modo alternativo (rodar a partir da raiz do repositório)
- Sem mudar de diretório:
  npm --prefix ./notes-frontend install
  npm --prefix ./notes-frontend run dev

Verifique se existe package.json em notes-frontend
- O script "dev" deve estar definido no package.json do notes-frontend (projeto Vite normalmente já inclui).
- Se você criou este projeto manualmente em outra pasta, abra notes-frontend/package.json e confirme:
  {
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    }
  }

Problemas comuns
- "Missing script: dev" → você executou npm run dev no diretório errado ou o package.json não contém o script "dev".
- Erros de caminho das imagens → coloque a pasta imagens na raiz pública (notes-frontend/public/imagens) ou mova-as para src/assets e importe-as no React.

Se quiser, eu posso:
- Adicionar um package.json de conveniência na pasta raiz que chame os scripts do subprojeto (para poder rodar npm run dev na raiz).
- Separar mais instruções ou criar scripts cross-platform.

Observação importante sobre imagens e deploy
- Coloque todas as imagens usadas pelo site em notes-frontend/public/imagens (ex.: Eu.jpeg, curriculo.png, TankVsTower.png, InsperAsk.png, GitHub.png, Gmail.jfif, LikedIN.png, Facebook.png).
- Confirme que os arquivos estão committed no repositório antes de rodar o build (git add/commit/push).
- O Vite copia automaticamente o conteúdo de public para dist no build; se os arquivos não estiverem em public no momento do build, eles não serão incluídos e o deploy exibirá 404.
- Passos recomendados:
  1. cd notes-frontend
  2. git add public/imagens/* && git commit -m "add imagens"
  3. npm install
  4. npm run build
  5. npm run deploy