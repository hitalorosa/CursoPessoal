# Vante — Dashboard de Estudos

Dashboard pessoal para acompanhamento de estudos de marketing digital, design e negócios, com autenticação via Supabase e progresso salvo na nuvem.

## Matérias

| Matéria | Módulos | Aulas |
|---|---|---|
| 📈 Tráfego Pago | 7 | 74 |
| 🎨 Design Gráfico | 10 | 57 |
| 📱 Social Media | 5 | 32 |
| ✍️ Copywriting | 6 | 27 |
| 🤖 IA Aplicada | 5 | 38 |
| 💼 Agência & Negócios | 7 | 39 |
| **Total** | **40** | **267** |

## Funcionalidades

- 🔐 Login com e-mail e senha via **Supabase Auth**
- ☁️ Progresso salvo na nuvem (Supabase) com fallback para localStorage offline
- 🎬 Cards com thumbnail do YouTube + link direto para assistir
- ✅ Marcação de aulas assistidas com barra de progresso por módulo e global
- 🌙 Interface dark mode com sidebar responsiva
- 📊 Contador de aulas assistidas por aba e progresso geral
- 🔄 Sessão persistida — não precisa logar de novo ao reabrir

## Tecnologias

- HTML5 + CSS3 + JavaScript (vanilla, sem frameworks)
- **Supabase** — autenticação e banco de dados em nuvem
- YouTube Thumbnail API para miniaturas dos cards
- `localStorage` como cache offline de progresso

## Estrutura

```
CursoPessoal/
├── index.html   → Estrutura principal (login + app + 6 abas)
├── style.css    → Estilos (dark theme, cards, sidebar, responsivo)
└── app.js       → Dados dos 267 vídeos + lógica + integração Supabase
```

## Deploy

- **Repositório:** [github.com/hitalorosa/CursoPessoal](https://github.com/hitalorosa/CursoPessoal)
- **Hosting:** Vercel (deploy automático a cada push no `master`)
- **Banco de dados:** Supabase (tabela `progress` com RLS por usuário)

## Como usar

Acesse o link do Vercel e faça login com o e-mail e senha cadastrados no Supabase.

---

*Projeto pessoal — uso interno Vante.*
