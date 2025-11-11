# Portfólio - Enzo Santoro (React + Vite)

Este repositório contém um portfólio pessoal convertido para uma SPA em React usando Vite.
- Navegação interna implementada via estado (useState).
- A barra de navegação superior é fixa (segue a tela) para acesso rápido às seções.
- Todo o CSS principal foi injetado no componente App para facilitar a migração do layout estático.

Como rodar
1. Instale dependências:
   npm install
2. Rode em modo desenvolvimento:
   npm run dev
3. Build para produção:
   npm run build

Observações
- As imagens referenciadas (p.ex. "imagens/...") devem estar na pasta pública do projeto ou você pode movê-las para src/assets e ajustar os imports.
- Se preferir, posso separar as páginas em componentes individuais e extrair o CSS para arquivos separados.
