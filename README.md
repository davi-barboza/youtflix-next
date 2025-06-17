
# 🎬 Youflix

Uma plataforma web inspirada na experiência do Netflix, criada para exibir vídeos organizados por categorias com um visual moderno e responsivo.

---

## 🚀 Tecnologias Utilizadas

- [Next.js 10](https://nextjs.org/) – framework React com renderização híbrida
- [React 17](https://reactjs.org/) – biblioteca para construção de UI
- [Styled-components](https://styled-components.com/) – CSS-in-JS para estilização dinâmica
- [Keen Slider](https://keen-slider.io/) – carrossel moderno e leve para vídeos
- [TypeScript](https://www.typescriptlang.org/) – tipagem estática para JavaScript
- [Next Images](https://www.npmjs.com/package/next-images) – suporte a imagens no Next.js

---

## 📂 Estrutura da Página Inicial

A home do projeto é composta por:

- `Menu`: barra de navegação superior
- `BannerMain`: destaque do primeiro vídeo da primeira categoria
- `Carousel`: lista de vídeos agrupados por categoria
- `Footer`: rodapé da aplicação

Os dados exibidos na página inicial são carregados a partir do arquivo local `data/dados_iniciais.json`.

### Exemplo de uso:

```tsx
<BannerMain
  videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
  url={dadosIniciais.categorias[0].videos[0].url}
  videoDescription={"O que é front-end? Trabalhando na área!"}
/>
```

---

## 📦 Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/youflix.git
cd youflix
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

Acesse `http://localhost:3000` no navegador.

---

## 🛠 Scripts disponíveis

| Comando         | Descrição                              |
|----------------|------------------------------------------|
| `npm run dev`  | Inicia o ambiente de desenvolvimento     |
| `npm run build`| Gera a versão de produção da aplicação   |
| `npm start`    | Inicia o servidor em produção            |

---

## 📁 Estrutura de Arquivos (parcial)

```
YOUTFLIX-NEXT/
├── public/
├── src/
│   ├── assets/
│   │   └── img/
│   │       ├── Logo.png
│   │       └── LogoInt.png
│   ├── components/
│   │   ├── BannerMain/
│   │   ├── Button/
│   │   ├── Carousel/
│   │   ├── Footer/
│   │   └── Menu/
│   ├── data/
│   │   └── dados_iniciais.json
│   ├── pages/
│   │   ├── _app.js
│   │   └── index.js
│   └── styles/
│       └── globals.css
├── .babelrc
├── .gitignore
├── next.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📌 Observações

- Projeto utiliza **Next.js 10**, o que exige Node.js >= 10.13.
- Ideal para servir como base para projetos de catálogo de mídia, video streaming ou projetos educacionais.

---

## 📃 Licença

Esse projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 🙋‍♂️ Autor

Desenvolvido por [Davi barboza](https://github.com/davi-barboza).  
Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/davi-barboza-046b8b345).
