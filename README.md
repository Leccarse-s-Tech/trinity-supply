# Trinity Supply | Distribuidora de Paes e Embalagens (B2B Food Service)

Landing Page institucional B2B desenvolvida para a **Trinity Supply Distribuidora De Paes e Embalagens** (`@trinitysupply_oficial`), localizada em **Guarulhos - SP**.

O projeto posiciona a marca como distribuidora completa de insumos e embalagens para hamburguerias, lanchonetes e operacoes de food service sob o conceito **"Tudo para sua hamburgueria em um so lugar"** e **"Qualidade que impulsiona seu negocio"**.

---

## Diretrizes Arquitetonicas e de Negocio

1. **Contraste Arquitetonico (Fachada Escura vs. Corpo Claro Institucional)**:
   - **Navbar e Footer (`#111315` / `#1A1D20` / `#F5B014`)**: Replica digital fiel da fachada fisica em ACM preto fosco da sede em Guarulhos, incluindo o friso superior amarelo de `4px`, simulacao dos 8 spots de LED embutidos no beiral, logotipo vetorial 3D, placa central em relevo e testeira inferior da marquise.
   - **Corpo da Pagina (`#FFFFFF` / `#F8F9FA`)**: Ambiente claro, limpo e corporativo para transmitir conformidade sanitaria, organizacao logistica e credibilidade B2B.
2. **Foco Exclusivo em Conversao Consultiva B2B via WhatsApp**:
   - Sem elementos de e-commerce, carrinho ou precos unitarios.
   - Todos os CTAs direcionam para o canal comercial oficial no WhatsApp (`11 94083-8995` - `https://wa.me/5511940838995`) com mensagens pre-preenchidas contextualizadas por secao.
3. **Zero Emojis**:
   - Interface 100% construida com iconografia vetorial limpa (Lucide Icons e SVGs institucionais customizados).
4. **Pagina 404 Personalizada**:
   - Rota de erro 404 exclusiva onde o digito `0` e representado pela **Caixa 3D e Hexagono Oficial do Logotipo da Trinity Supply**.

---

## Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite 6** (Build otimizado para producao)
- **Tailwind CSS v4** + Custom Properties semânticas
- **React Router DOM v7** (Roteamento SPA e pagina 404 customizada)
- **Lucide React** + SVGs Vetoriais Proprietarios
- **Schema.org JSON-LD** (`WholesaleStore` / `FoodEstablishment`) para SEO Local em Guarulhos/SP

---

## Estrutura do Projeto

```text
trinity-supply/
├── public/
│   ├── images/
│   │   ├── fachada.png
│   │   ├── fachada-2.png
│   │   └── logo.png
│   ├── _redirects
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── BrandLogo.tsx          # Logotipo vetorial 3D e Caixa 3D para o 0 do 404
│   │   ├── CategoriesSection.tsx  # Grid das 6 categorias de insumos B2B
│   │   ├── DifferentialsSection.tsx # 4 pilares operacionais B2B
│   │   ├── FloatingWhatsApp.tsx   # Sticky CTA de WhatsApp no canto inferior direito
│   │   ├── Footer.tsx             # Banner de conversao pre-footer + Footer escuro
│   │   ├── HeroSection.tsx        # Hero B2B 60/40 com metricas e moldura da sede
│   │   ├── Icons.tsx              # Icones vetoriais customizados
│   │   ├── LocationSection.tsx    # Ficha oficial do Google Maps + Iframe interativo
│   │   ├── Navbar.tsx             # Replica digital da fachada fisica
│   │   └── ReviewsSection.tsx     # Avaliacoes 5 estrelas verificadas no Google Maps
│   ├── data/
│   │   └── siteData.ts            # Constantes institucionais e GOOGLE_FIVE_STAR_REVIEWS
│   ├── pages/
│   │   ├── HomePage.tsx           # Pagina principal institucional
│   │   └── NotFoundPage.tsx       # Pagina 404 com a caixa do logo como numero 0
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── netlify.toml
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---

## Como Executar Localmente

1. Instale as dependencias:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Gere a versao otimizada para producao (Deploy):
   ```bash
   npm run build
   ```

4. Visualize a build de producao localmente:
   ```bash
   npm run preview
   ```

---

## Deploy

O projeto esta pronto para deploy imediato na **Vercel**, **Netlify** ou **Cloudflare Pages**:
- Comando de Build: `npm run build`
- Diretorio de Saida: `dist`
- Regras de Rewrite SPA pre-configuradas em `vercel.json`, `netlify.toml` e `public/_redirects`.
