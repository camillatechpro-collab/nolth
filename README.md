# NOLTH Digital Studio — Site institucional

> Da ideia à experiência digital.

Site institucional de página única (one page) da NOLTH Digital Studio, construído com
**React + Vite + TypeScript**, **Tailwind CSS v4** e **Lucide Icons**. Não depende de nenhum serviço
pago nem de API externa: as fontes são servidas pelo próprio site e o formulário envia a solicitação
pelo WhatsApp (ou por e-mail).

---

## 1. Requisitos

- **Node.js 20.19+** (recomendado: versão LTS mais recente) — https://nodejs.org
- npm (já vem com o Node)

Confira com:

```bash
node -v
npm -v
```

## 2. Instalar dependências

Na pasta do projeto:

```bash
npm install
```

## 3. Configurar contato (WhatsApp e e-mail)

Copie o arquivo de exemplo e preencha com os dados reais:

```bash
cp .env.example .env
```

```env
# DDI + DDD + número, só dígitos
VITE_WHATSAPP_NUMBER=5511999999999
VITE_CONTACT_EMAIL=contato@seudominio.com.br
```

> ⚠️ Enquanto o `.env` não for criado, o site usa um número fictício (`5500000000000`).
> Os links das redes sociais e o domínio (`https://www.nolth.com.br`) ficam em
> `src/config/site.ts`, `index.html`, `public/robots.txt` e `public/sitemap.xml` — troque pelos reais.

## 4. Rodar localmente

```bash
npm run dev
```

Acesse http://localhost:5173. As alterações aparecem na hora (hot reload).

Outros comandos:

| Comando             | O que faz                                         |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento                       |
| `npm run build`     | Verifica os tipos e gera a versão final em `dist/` |
| `npm run preview`   | Abre localmente a versão gerada pelo build        |
| `npm run typecheck` | Apenas verifica os tipos TypeScript               |

## 5. Publicar o site

O comando `npm run build` gera a pasta **`dist/`** — um site estático que pode ser hospedado em
qualquer serviço gratuito. Lembre-se de configurar as variáveis `VITE_WHATSAPP_NUMBER` e
`VITE_CONTACT_EMAIL` no painel do serviço escolhido (elas são lidas no momento do build).

> Site de empresa é uso comercial: prefira Netlify ou Cloudflare Pages, cujos planos gratuitos permitem
> isso. O plano gratuito (Hobby) da Vercel é restrito a uso pessoal e não comercial.

### Opção A — Netlify, arrastando a pasta (recomendado para começar)
1. Preencha o `.env` e rode `npm run build`.
2. Crie uma conta gratuita em https://app.netlify.com e abra https://app.netlify.com/drop.
3. Arraste a pasta **`dist/`** para a página. Em segundos o site fica no ar em `algo.netlify.app`.
4. Em **Site configuration → Change site name**, troque para algo como `nolth.netlify.app`.
5. Para atualizar: rode `npm run build` de novo e, em **Deploys**, arraste a nova `dist/`.

### Opção B — Netlify ou Cloudflare Pages, com GitHub (atualização automática)
1. Envie o projeto para um repositório no GitHub (o `.gitignore` já exclui `node_modules`, `dist` e `.env`).
2. Netlify: **Add new site → Import an existing project**. Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
3. Build command: `npm run build` · Pasta de saída: `dist`.
4. Adicione `VITE_WHATSAPP_NUMBER` e `VITE_CONTACT_EMAIL` nas variáveis de ambiente do painel e publique.
5. A cada alteração enviada ao GitHub, o site é atualizado sozinho.

### Domínio próprio (opcional, pago)
Registre o domínio `.com.br` em https://registro.br (cerca de R$ 40 por ano) e, no painel da hospedagem,
use **Domain management** (Netlify) ou **Custom domains** (Cloudflare) para conectar. O certificado HTTPS é gratuito e automático.
Depois, troque `https://www.nolth.com.br` pelo domínio real em `index.html`, `public/robots.txt` e `public/sitemap.xml`.

### Opção C — Hospedagem tradicional (cPanel, Hostinger etc.)
1. Rode `npm run build` (com o `.env` preenchido).
2. Envie **o conteúdo** da pasta `dist/` para a pasta `public_html` via gerenciador de arquivos ou FTP.

---

## Estrutura do projeto

```
├── index.html               # HTML base + SEO (meta tags, Open Graph, JSON-LD)
├── brand-src/               # Arte original da logo (fonte; não é publicada)
├── public/
│   ├── brand/               # Logo oficial: emblema e nome "NOLTH" (WebP p/ o site, PNG transparente)
│   └── …                    # favicon, apple-touch-icon, og-image.jpg, robots.txt, sitemap.xml
├── src/
│   ├── main.tsx             # Ponto de entrada (fontes + estilos)
│   ├── App.tsx              # Monta as seções da página
│   ├── index.css            # Tema (cores, fontes, animações) e estilos globais
│   ├── config/site.ts       # ⚙️ Dados da marca: contatos, redes sociais, menu
│   ├── data/                # 📝 Textos editáveis: serviços, portfólio, diferenciais, processo
│   ├── lib/                 # Validação do formulário e geração de links do WhatsApp
│   ├── hooks/               # Animação ao rolar, menu ativo, estado de rolagem
│   └── components/
│       ├── layout/          # Header (menu desktop/mobile) e Footer
│       ├── sections/        # Hero, Vitrine (Showcase), Serviços, Portfólio, Sobre + Diferenciais, Processo, Contato
│       ├── visual/          # Globo de partículas do hero e painéis holográficos da vitrine
│       ├── mockups/         # Ilustrações em código dos projetos demonstrativos
│       ├── icons/           # Ícones de redes sociais
│       └── ui/              # Componentes reutilizáveis: Button, Logo, Reveal, SectionHeading…
```

### Onde editar o quê
- **Textos de serviços, portfólio, diferenciais e etapas:** `src/data/*.ts`
- **WhatsApp, e-mail, redes sociais e menu:** `src/config/site.ts` / `.env`
- **Cores e fontes:** bloco `@theme` em `src/index.css`
- **Projetos reais no portfólio:** edite `src/data/portfolio.ts`. Para usar imagens, coloque-as em
  `public/` e substitua o `<ProjectMockup />` em `src/components/sections/Portfolio.tsx` por uma
  `<img>` com `loading="lazy"` e um `alt` descritivo. Ao trocar por projetos reais, remova o selo
  "Projeto demonstrativo" e o aviso acima da galeria.

## Sistemas reais no portfólio (demonstração interativa)

O portfólio destaca o **HOSeg**, sistema desenvolvido pela NOLTH, que o visitante pode usar de verdade:

- A cópia do sistema fica em `public/demos/hoseg/index.html` e é publicada junto com o site
  (endereço final: `seudominio.com.br/demos/hoseg/index.html`). Ela não é indexada pelo Google (`noindex`).
- Os dados são fictícios e ficam salvos só no navegador de cada visitante. A faixa
  "Demonstração NOLTH · dados fictícios" tem o botão **Restaurar dados** para voltar ao estado inicial.
- O texto do card (descrição, funcionalidades, tecnologias) fica em `featuredProject`, em `src/data/portfolio.ts`.

O **Inteligência de Vencimentos** (Python/Streamlit) aparece com uma galeria de telas reais
(`public/portfolio/vencimentos/`) e o link para o código. Depois de publicá-lo no Streamlit Community Cloud
(passo a passo no README do repositório `controle-de-vencimentos-sso`), preencha em `src/data/portfolio.ts`:

```ts
demoUrl: 'https://SEU-APP.streamlit.app',
embedUrl: 'https://SEU-APP.streamlit.app/?embed=true',
```

O card passa a mostrar **Experimentar o sistema**, abrindo a demonstração dentro do site.

**Para adicionar outro sistema:** coloque o HTML (ou o build) em `public/demos/<nome>/index.html`, use dados
fictícios e aponte `demoUrl` para `/demos/<nome>/index.html`. Se o sistema estiver hospedado em outro endereço,
basta usar a URL completa — desde que ele permita ser exibido dentro de outro site.

## Como funciona o formulário
1. Valida cada campo (nome, e-mail, WhatsApp com DDD, tipo de projeto e descrição) com mensagens
   claras e acessíveis; o WhatsApp é formatado automaticamente.
2. Ao enviar, abre o WhatsApp com uma mensagem já preenchida com todos os dados.
3. A tela de confirmação oferece reabrir o WhatsApp ou **enviar por e-mail** (mailto).
4. Os botões "Tenho interesse" dos serviços levam ao formulário com o tipo de projeto já selecionado.

> Quer receber as solicitações também por e-mail automaticamente, sem depender do WhatsApp?
> Dá para integrar um serviço com plano gratuito (como Formspree ou Web3Forms) em
> `src/components/sections/Contact.tsx`, na função `handleSubmit`.

## Recursos incluídos
- Layout mobile first, testado em 375 px, tablet e desktop, sem rolagem lateral
- Menu fixo com destaque da seção atual e menu mobile acessível (ESC fecha, foco gerenciado)
- Animações leves que respeitam `prefers-reduced-motion`
- Acessibilidade: link "pular para o conteúdo", foco visível, rótulos e erros ligados aos campos, `aria-*`
- SEO: título, descrição, canonical, Open Graph, dados estruturados (schema.org), `robots.txt` e `sitemap.xml`
- Performance: fontes auto-hospedadas, ilustrações em código (sem imagens pesadas), CSS e JS minificados
- Botão flutuante de WhatsApp
- Visual futurista: globo de partículas animado (pausa fora da tela e respeita "reduzir movimento"), botões HUD chanfrados, cards com brilho neon e trilhos laterais em telas largas
- Botões "Tenho interesse" e "Quero um projeto assim" já selecionam o tipo de projeto no formulário
