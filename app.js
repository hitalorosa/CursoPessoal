/* ============================================================
   VANTE — Dashboard de Estudos
   app.js — Dados + Lógica
   ============================================================ */

// ── SUPABASE ──
const SUPABASE_URL = 'https://hkcutqjnxxmmfxoiucrv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_M_JHR0OY_4GPnJ2GVPrCMg_bLh4nMJx';
const _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ── THUMBNAIL HELPER ──
const thumb = id => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

// ============================================================
// DADOS — TRÁFEGO PAGO (74 aulas)
// ============================================================
const TRAFEGO_MODULES = [
  {
    id: 'tp-m1', color: '#3b82f6',
    title: 'Módulo 1', subtitle: 'Fundamentos e Visão Geral',
    lessons: [
      { id:'tp-1-1',  yours:true,  title:'Tráfego Orgânico x Pago — Do Zero',                        desc:'Entenda a diferença entre orgânico e pago antes de mergulhar nos anúncios.',         url:'https://youtu.be/rqYW00ybF7M',  vid:'rqYW00ybF7M' },
      { id:'tp-1-2',  yours:true,  title:'Como Fazer Tráfego Pago do Zero Para Iniciantes (2026)',    desc:'Introdução completa para quem está começando do absoluto zero.',                     url:'https://youtu.be/cRSuqQNue3o',  vid:'cRSuqQNue3o' },
      { id:'tp-1-3',  yours:true,  title:'Tutorial Básico de Tráfego Pago (para iniciantes)',         desc:'Visão geral dos fundamentos com foco em quem nunca anunciou antes.',                 url:'https://youtu.be/O4ZRCC-LIU4',  vid:'O4ZRCC-LIU4' },
      { id:'tp-1-4',  yours:true,  title:'Como Aprender Tráfego Pago do Zero — 4 Passos',            desc:'Guia em 4 etapas para entender o caminho completo de aprendizado.',                  url:'https://youtu.be/c4DbXldEEhM',  vid:'c4DbXldEEhM' },
      { id:'tp-1-5',  yours:true,  title:'Gestão de Tráfego Pago do Zero — Sem Pagar Curso',         desc:'Roteiro gratuito e completo de gestão de tráfego pago.',                             url:'https://youtu.be/0mNB6VWrEdY',  vid:'0mNB6VWrEdY' },
      { id:'tp-1-6',  yours:true,  title:'Como Aprender Tráfego Pago e Crescer Mais Rápido em 2025', desc:'Atalhos e prioridades para acelerar o aprendizado sem queimar etapas.',              url:'https://youtu.be/kwLaP6wDq2k',  vid:'kwLaP6wDq2k' },
      { id:'tp-1-7',  yours:true,  title:'Como Utilizar o Tráfego Pago Corretamente',                desc:'Mentalidade e estratégia correta antes de investir dinheiro.',                       url:'https://youtu.be/P5CCJ2FgdAU',  vid:'P5CCJ2FgdAU' },
      { id:'tp-1-8',  yours:true,  title:'Funil de Tráfego Pago: Guia Completo Para Iniciantes',     desc:'O que é um funil e como estruturá-lo do início ao fim.',                             url:'https://youtu.be/zQ_ZiwCNsqs',  vid:'zQ_ZiwCNsqs' },
      { id:'tp-1-9',  yours:true,  title:'O que é e como aprender tráfego pago? — Live #001',        desc:'Apresentação do universo do tráfego pago e por onde começar.',                       url:'https://youtu.be/NAgbdx8lAa0',  vid:'NAgbdx8lAa0' },
      { id:'tp-1-10', yours:true,  title:'Gestor de Tráfego: o que faz, quanto ganha e como começar',desc:'O que faz um gestor de tráfego e como entrar na profissão.',                        url:'https://www.youtube.com/live/l2jKgxvi6p8', vid:'l2jKgxvi6p8' },
      { id:'tp-1-11', yours:true,  title:'Como Ganhar Dinheiro com Anúncios Online Sem Aparecer',    desc:'Monetizar com gestão de tráfego sem aparecer nas câmeras.',                          url:'https://www.youtube.com/live/kAHTt1Oyeno', vid:'kAHTt1Oyeno' },
      { id:'tp-1-12', yours:true,  title:'O Guia do Gestor de Tráfego Iniciante — Live #301',        desc:'Roteiro prático para iniciar a carreira como gestor de tráfego.',                    url:'https://www.youtube.com/live/HD_GZIUfvyg', vid:'HD_GZIUfvyg' },
      { id:'tp-1-13', yours:true,  title:'Como a IA vai Impactar a Carreira do Gestor de Tráfego',   desc:'Panorama e futuro da carreira diante da inteligência artificial.',                   url:'https://youtu.be/imCf1Flsqgc',  vid:'imCf1Flsqgc' },
    ]
  },
  {
    id: 'tp-m2', color: '#8b5cf6',
    title: 'Módulo 2', subtitle: 'Configuração das Contas e Pixel',
    subsections: [
      { label: 'Meta Ads — Configuração e Primeira Campanha', from: 0, to: 6 },
      { label: 'Pixel, API de Conversões e Rastreamento',     from: 7, to: 8 },
      { label: 'Google Ads — Configuração e Primeira Campanha',from:9, to:14 },
      { label: 'Orçamento e Destino do Tráfego',             from:15, to:16 },
      { label: 'Plataformas Adicionais',                      from:17, to:17 },
    ],
    lessons: [
      { id:'tp-2-1',  yours:false, title:'Como Criar BM (Business Manager) no Facebook',             desc:'Crie o Gerenciador de Negócios, a "casa" dos seus ativos de anúncios.',             url:'https://www.youtube.com/watch?v=k0owWhogVbY', vid:'k0owWhogVbY' },
      { id:'tp-2-2',  yours:false, title:'Facebook Ads para Iniciantes — Como Subir Campanha (2025)',desc:'Passo a passo para criar sua primeira campanha no Ads Manager.',                    url:'https://www.youtube.com/watch?v=m2N1DdyIWaE', vid:'m2N1DdyIWaE' },
      { id:'tp-2-3',  yours:true,  title:'Novo Jeito: Como Fazer Tráfego Pago para o Instagram (2026)',desc:'Tutorial atualizado de anúncios no Instagram pelo Meta Ads.',                   url:'https://youtu.be/BPcV8HF2o9w',  vid:'BPcV8HF2o9w' },
      { id:'tp-2-4',  yours:true,  title:'Tráfego Pago Iniciante: Como Anunciar no Meta Ads do Zero',desc:'Primeira campanha no Meta Ads (Facebook e Instagram) do zero.',                    url:'https://youtu.be/4BhVCkkEKOs',  vid:'4BhVCkkEKOs' },
      { id:'tp-2-5',  yours:true,  title:'Tutorial Meta Ads 2026: Como Anunciar Passo a Passo',      desc:'Tutorial completo e atualizado de criação de campanhas para iniciantes.',            url:'https://youtu.be/qErW3jyQ3DY',  vid:'qErW3jyQ3DY' },
      { id:'tp-2-6',  yours:true,  title:'Tutorial Completo de Meta Ads para Iniciantes (2024) — Live',desc:'Aula ao vivo: do cadastro à primeira campanha no ar.',                          url:'https://www.youtube.com/live/rVk67VZd2Hs', vid:'rVk67VZd2Hs' },
      { id:'tp-2-7',  yours:true,  title:'Como Fazer Anúncios no Meta Ads em 2025 — Live #314',      desc:'Tutorial completo 2025: conta, conjuntos de anúncios e criativos.',                  url:'https://www.youtube.com/live/cLnx_N11TV0', vid:'cLnx_N11TV0' },
      { id:'tp-2-8',  yours:false, title:'Como Criar e Configurar o Pixel do Facebook + API de Conversões',desc:'O Pixel rastreia quem visita seu site. Sem ele você não mede resultados.', url:'https://www.youtube.com/watch?v=gR5AAx32BJ4', vid:'gR5AAx32BJ4' },
      { id:'tp-2-9',  yours:true,  title:'Pixel, API de Conversões e UTMs no Meta e Google Ads — Live',desc:'Instale o Pixel, API de conversões e configure UTMs para rastrear com precisão.', url:'https://www.youtube.com/live/0SBpSodUjrs', vid:'0SBpSodUjrs' },
      { id:'tp-2-10', yours:true,  title:'Como Criar uma Conta no Google Ads em 5 Minutos (2024)',   desc:'Configure corretamente sua conta no Google Ads antes de criar campanhas.',           url:'https://youtu.be/W2o3S8O4Lgk',  vid:'W2o3S8O4Lgk' },
      { id:'tp-2-11', yours:true,  title:'Como Anunciar no Google Ads 2024: Tutorial Passo a Passo', desc:'Guia completo para criar a primeira campanha no Google Ads.',                        url:'https://youtu.be/pKS_D8mYE84',  vid:'pKS_D8mYE84' },
      { id:'tp-2-12', yours:false, title:'Google Ads: Guia Completo para Iniciantes (Atualizado 2025)',desc:'Do conceito à criação de campanha, para quem nunca anunciou no Google.',         url:'https://www.youtube.com/watch?v=WSxSlCteDsw', vid:'WSxSlCteDsw' },
      { id:'tp-2-13', yours:true,  title:'Google Ads para Iniciantes 2026: Tutorial Passo a Passo',  desc:'Tutorial atualizado para criar anúncios no Google Ads do zero.',                    url:'https://youtu.be/4HMDAhl15cA',  vid:'4HMDAhl15cA' },
      { id:'tp-2-14', yours:true,  title:'Tutorial Completo de Google Ads para Iniciantes (2024) — Live',desc:'Aula ao vivo: configuração e criação de campanhas no Google Ads.',            url:'https://www.youtube.com/live/s4zI03RWIH0', vid:'s4zI03RWIH0' },
      { id:'tp-2-15', yours:true,  title:'Como Criar Campanhas no Google Ads em 2025 — Live #315',   desc:'Passo a passo atualizado para campanhas eficientes no Google Ads.',                 url:'https://www.youtube.com/live/41n0lr59lXQ', vid:'41n0lr59lXQ' },
      { id:'tp-2-16', yours:false, title:'Quanto Investir no Tráfego Pago para Vender Todos os Dias',desc:'Calcule o orçamento mínimo necessário para começar a ver resultados.',             url:'https://www.youtube.com/watch?v=OECOa3XbdIg', vid:'OECOa3XbdIg' },
      { id:'tp-2-17', yours:false, title:'Como Criar Landing Pages que Vendem Muito — Tutorial 2026',desc:'Sem uma boa página de destino, o melhor anúncio não converte.',                     url:'https://www.youtube.com/watch?v=BB5bYkhD20I', vid:'BB5bYkhD20I' },
      { id:'tp-2-18', yours:true,  title:'Como Fazer Anúncios no TikTok Ads — Live #303',            desc:'Introdução ao TikTok Ads: conta, configuração e primeiros anúncios.',                url:'https://www.youtube.com/live/HWHAsqgAzh8', vid:'HWHAsqgAzh8' },
    ]
  },
  {
    id: 'tp-m3', color: '#10b981',
    title: 'Módulo 3', subtitle: 'Públicos e Segmentação',
    lessons: [
      { id:'tp-3-1', yours:true,  title:'Persona: O que é, Como Definir e Por que Faz Vender Mais', desc:'Aprenda a criar sua persona e como ela impacta os resultados das campanhas.',        url:'https://youtu.be/2bjaqOUG5OQ', vid:'2bjaqOUG5OQ' },
      { id:'tp-3-2', yours:true,  title:'5 Perguntas Para Identificar sua Persona e Vender Mais',   desc:'Metodologia prática com 5 perguntas para definir a persona ideal.',                  url:'https://youtu.be/UV07NE-1j_E', vid:'UV07NE-1j_E' },
      { id:'tp-3-3', yours:true,  title:'Os 4 Níveis de Persona e Como Vender Para Cada Um',        desc:'Estágios de consciência da persona e como adaptar a comunicação.',                   url:'https://youtu.be/P-5NFHvayvE', vid:'P-5NFHvayvE' },
      { id:'tp-3-4', yours:true,  title:'Como sua Persona Pesquisa e Como isso Ajuda a Vender Mais',desc:'Comportamento de busca da persona para criar anúncios alinhados.',                   url:'https://youtu.be/GpwtOxr2oVQ', vid:'GpwtOxr2oVQ' },
      { id:'tp-3-5', yours:true,  title:'Como Usar o Planejador de Palavras-chave do Google Ads',   desc:'Tutorial do Keyword Planner para encontrar as melhores palavras-chave.',              url:'https://youtu.be/N95tVD520zM', vid:'N95tVD520zM' },
      { id:'tp-3-6', yours:true,  title:'Ganhar Seguidores Reais no Instagram com Anúncios — Live', desc:'Segmentação de público no Instagram para seguidores qualificados.',                   url:'https://www.youtube.com/live/DGoCJ2U8v7E', vid:'DGoCJ2U8v7E' },
      { id:'tp-3-7', yours:false, title:'Públicos Personalizados no Meta Ads 2025',                  desc:'Públicos baseados em visitantes do site, vídeos assistidos e engajamento.',            url:'https://www.youtube.com/watch?v=UVlUl-NYN5o', vid:'UVlUl-NYN5o' },
      { id:'tp-3-8', yours:false, title:'Público de Lista de Clientes + Lookalike no Meta Ads',      desc:'Suba sua lista de clientes e crie públicos semelhantes no Meta.',                     url:'https://www.youtube.com/watch?v=DWcm_xN5E_g', vid:'DWcm_xN5E_g' },
      { id:'tp-3-9', yours:false, title:'Lookalike no Facebook Ads — Como Criar Público Semelhante', desc:'Públicos Lookalike: ferramenta poderosa para escalar resultados no Meta.',            url:'https://www.youtube.com/watch?v=s7QnsnbI2g8', vid:'s7QnsnbI2g8' },
    ]
  },
  {
    id: 'tp-m4', color: '#f59e0b',
    title: 'Módulo 4', subtitle: 'Criativos e Copy',
    lessons: [
      { id:'tp-4-1', yours:false, title:'Guia Definitivo: Criativos para Anúncios no Facebook Ads [2025]',desc:'Quais tipos de criativos funcionam e como produzi-los sem ser designer.', url:'https://www.youtube.com/watch?v=56W5kGy0pkA', vid:'56W5kGy0pkA' },
      { id:'tp-4-2', yours:false, title:'Como Fazer Criativos que Convertem no Facebook Ads',        desc:'Copy e persuasão: o que escrever no texto, título e CTA do anúncio.',               url:'https://www.youtube.com/watch?v=21mUmwpG5ng', vid:'21mUmwpG5ng' },
      { id:'tp-4-3', yours:false, title:'Biblioteca de Anúncios do Facebook — Criativos de Graça',  desc:'Pesquise o que os concorrentes estão rodando e se inspire.',                         url:'https://www.youtube.com/watch?v=52yxQxwApmA', vid:'52yxQxwApmA' },
      { id:'tp-4-4', yours:true,  title:'Como Criar Anúncios Persuasivos no Google: 10 Técnicas',   desc:'10 técnicas de copywriting para anúncios no Google Ads.',                            url:'https://youtu.be/nnuaTvODcM0', vid:'nnuaTvODcM0' },
      { id:'tp-4-5', yours:true,  title:'Como Criar Títulos Persuasivos que Vendem Muito no Google Ads',desc:'Headlines para Google Ads + bônus de planilha geradora de títulos.',            url:'https://youtu.be/m9fMjfRFHR0', vid:'m9fMjfRFHR0' },
      { id:'tp-4-6', yours:true,  title:'Produto Low Ticket: Como Criar e Como Vender',              desc:'Estruture e venda produtos de baixo ticket com anúncios pagos.',                     url:'https://youtu.be/imSFY473p_4', vid:'imSFY473p_4' },
      { id:'tp-4-7', yours:true,  title:'Por Dentro de Uma Mentoria de Marketing',                   desc:'Estratégias de comunicação e posicionamento de anúncios em casos reais.',            url:'https://youtu.be/CsivxdkrABQ', vid:'CsivxdkrABQ' },
      { id:'tp-4-8', yours:false, title:'Copy para Anúncios no Facebook Ads e Instagram (Templates Prontos)',desc:'Templates prontos de copy para Meta Ads em português.',                  url:'https://www.youtube.com/watch?v=G7uEIUqAkF4', vid:'G7uEIUqAkF4' },
      { id:'tp-4-9', yours:false, title:'Os Melhores Hooks (Ganchos) para Meta Ads em 2025',        desc:'Os primeiros 3 segundos que prendem a atenção e impedem o scroll.',                   url:'https://www.youtube.com/watch?v=btSgCi5LRAM', vid:'btSgCi5LRAM' },
    ]
  },
  {
    id: 'tp-m5', color: '#ef4444',
    title: 'Módulo 5', subtitle: 'Métricas e Análise',
    lessons: [
      { id:'tp-5-1', yours:false, title:'Guia Completo das Siglas: CPC, CPM, CTR, ROAS, CPA, ROI', desc:'O dicionário completo do tráfego pago — entenda cada métrica.',                      url:'https://www.youtube.com/watch?v=ePzGU-BwlPQ', vid:'ePzGU-BwlPQ' },
      { id:'tp-5-2', yours:false, title:'Análise de Métricas Facebook Ads/Meta Ads — Tutorial (2025)',desc:'Interprete os dados das campanhas: quando está bem, quando está mal.',              url:'https://www.youtube.com/watch?v=FWHdPrDLg80', vid:'FWHdPrDLg80' },
      { id:'tp-5-3', yours:false, title:'Tráfego Pago: Principais Métricas que Você Precisa Saber', desc:'As métricas mais importantes para otimização no dia a dia.',                         url:'https://www.youtube.com/watch?v=s0jrIQmYCR4', vid:'s0jrIQmYCR4' },
      { id:'tp-5-4', yours:true,  title:'Métricas x KPI no Google Ads: Entenda a Diferença',        desc:'Como olhar para a campanha de forma estratégica, não só operacional.',               url:'https://youtu.be/xhS24Bg_ElQ', vid:'xhS24Bg_ElQ' },
      { id:'tp-5-5', yours:true,  title:'Meu Primeiro Anúncio no Google Ads Não Vende Nada — O que Fazer?',desc:'Erros mais comuns em primeiras campanhas e como identificá-los.',         url:'https://youtu.be/hfBDS6Wdj2I', vid:'hfBDS6Wdj2I' },
      { id:'tp-5-6', yours:true,  title:'Muitos Cliques e Zero Vendas no Google Ads: Qual a Solução?',desc:'Interprete a discrepância entre cliques e conversões.',                          url:'https://youtu.be/01K65I7a2BM', vid:'01K65I7a2BM' },
      { id:'tp-5-7', yours:true,  title:'Como Analiso um Anúncio que Não Gera Vendas no Google Ads',desc:'Metodologia para ler dados e identificar o ponto exato de falha.',                  url:'https://youtu.be/qZ_EaucUC5k', vid:'qZ_EaucUC5k' },
      { id:'tp-5-8', yours:true,  title:'8 Erros Graves que Iniciantes Cometem no Google Ads',      desc:'Erros de análise e configuração que drenam o orçamento sem gerar resultado.',        url:'https://youtu.be/yhHp8jYikYA', vid:'yhHp8jYikYA' },
    ]
  },
  {
    id: 'tp-m6', color: '#14b8a6',
    title: 'Módulo 6', subtitle: 'Otimização e Remarketing',
    lessons: [
      { id:'tp-6-1',  yours:true,  title:'Otimização de Campanhas no Google Ads: O que é, Quando Fazer',desc:'O que analisar, quando agir e quais ajustes fazer primeiro.',                 url:'https://youtu.be/ms27JjZNQpA', vid:'ms27JjZNQpA' },
      { id:'tp-6-2',  yours:true,  title:'Otimização de Campanha Google Ads: 4 Itens Sempre a Otimizar',desc:'Os 4 elementos-chave a revisar em qualquer campanha.',                        url:'https://youtu.be/fSG84Jvuu70', vid:'fSG84Jvuu70' },
      { id:'tp-6-3',  yours:true,  title:'Como Otimizar Campanhas no Google Ads: 5 Formas Infalíveis',desc:'5 técnicas para reduzir CPC e aumentar vendas simultaneamente.',                 url:'https://youtu.be/MKNt3VqhSbg', vid:'MKNt3VqhSbg' },
      { id:'tp-6-4',  yours:true,  title:'Otimização Google Ads: Quanto Tempo Esperar e Quando Mexer',desc:'Período de aprendizado do algoritmo e momento certo de intervir.',               url:'https://youtu.be/Gv-sicmgNGQ', vid:'Gv-sicmgNGQ' },
      { id:'tp-6-5',  yours:true,  title:'Campanha Google Ads Parou de Vender: Otimizar ou Recriar?',desc:'Decisão entre otimizar campanha parada ou recriá-la do zero.',                    url:'https://youtu.be/rHkJVgRNCPc', vid:'rHkJVgRNCPc' },
      { id:'tp-6-6',  yours:true,  title:'Campanha Parou de Vender Sem Mexer em Nada: O que Aconteceu?',desc:'Causas externas e internas que travam campanhas sem alterações.',             url:'https://youtu.be/1oByS4l1oFw', vid:'1oByS4l1oFw' },
      { id:'tp-6-7',  yours:false, title:'Como Fazer Remarketing no Facebook Ads — Passo a Passo',  desc:'Reimpacte pessoas que visitaram seu site mas não compraram.',                        url:'https://www.youtube.com/watch?v=X4I905TVH_w', vid:'X4I905TVH_w' },
      { id:'tp-6-8',  yours:false, title:'Como Criar Campanha de Remarketing no Facebook Ads do Zero',desc:'Tutorial completo de remarketing no Meta: públicos e criativos.',                url:'https://www.youtube.com/watch?v=xZiRMLOP6rw', vid:'xZiRMLOP6rw' },
      { id:'tp-6-9',  yours:false, title:'O Melhor Teste de Criativo em 2025 — Facebook Ads',       desc:'Testes A/B de criativos estruturados para descobrir os melhores.',                   url:'https://www.youtube.com/watch?v=EsR6rj5Q0I0', vid:'EsR6rj5Q0I0' },
      { id:'tp-6-10', yours:true,  title:'Como Gerar Renda Mensal com Tráfego Direto',              desc:'Tráfego direto para gerar renda recorrente com anúncios.',                           url:'https://youtu.be/0Yplc_iolnE', vid:'0Yplc_iolnE' },
      { id:'tp-6-11', yours:true,  title:'R$4.873 por Mês com Tráfego Direto na Prática',           desc:'Estrutura e otimização de campanhas de tráfego direto para renda mensal.',           url:'https://youtu.be/3z2JDpDnMoY', vid:'3z2JDpDnMoY' },
    ]
  },
  {
    id: 'tp-m7', color: '#ec4899',
    title: 'Módulo 7', subtitle: 'Escala de Verba e Estratégias Avançadas',
    lessons: [
      { id:'tp-7-1', yours:true,  title:'Campanha Vendendo Bem: Aumentar Verba ou Otimizar? — Google Ads',desc:'Escalar orçamento versus otimizar custo em campanhas lucrativas.',            url:'https://youtu.be/U4vzPUJPhDM', vid:'U4vzPUJPhDM' },
      { id:'tp-7-2', yours:false, title:'CBO vs ABO no Facebook Ads: Qual a Diferença e Como Usar?',desc:'Orçamento no nível de campanha (CBO) vs conjunto de anúncios (ABO).',              url:'https://www.youtube.com/watch?v=8mkp2WW99ws', vid:'8mkp2WW99ws' },
      { id:'tp-7-3', yours:false, title:'A Melhor Estrutura de Campanha para Escalar no Facebook Ads (2025)',desc:'Configuração de campanha que aguenta escala sem quebrar a entrega.',       url:'https://www.youtube.com/watch?v=ZgCGNZKGyjo', vid:'ZgCGNZKGyjo' },
      { id:'tp-7-4', yours:false, title:'Facebook Ads: Como Escalar Campanhas Mantendo o ROI',      desc:'Aumentar investimento sem perder o retorno — escala com lucratividade.',             url:'https://www.youtube.com/watch?v=n8uGrw1XPnw', vid:'n8uGrw1XPnw' },
      { id:'tp-7-5', yours:false, title:'O Único Jeito de Escalar Campanha no Facebook Ads em 2025',desc:'Escala horizontal e vertical no Meta Ads — o que ainda funciona.',                  url:'https://www.youtube.com/watch?v=shXpe7cbiHY', vid:'shXpe7cbiHY' },
      { id:'tp-7-6', yours:false, title:'Quando e Como Aumentar o Orçamento da Campanha — Google Ads',desc:'Sinais para aumentar a verba sem interromper o aprendizado do algoritmo.',       url:'https://www.youtube.com/watch?v=hW3QA90Zcas', vid:'hW3QA90Zcas' },
    ]
  },
];

// ============================================================
// DADOS — DESIGN GRÁFICO (57 aulas)
// ============================================================
const DESIGN_MODULES = [
  {
    id: 'dg-m1', color: '#f97316',
    title: 'Módulo 1', subtitle: 'Fundamentos do Design Gráfico',
    lessons: [
      { id:'dg-1-1', title:'Como Estudar Design Gráfico em 2025: Guia Completo para Iniciantes', desc:'Transforme sua paixão em projetos profissionais e comece a viver de design.', url:'https://www.youtube.com/watch?v=TFkHQZny3J0', vid:'TFkHQZny3J0' },
      { id:'dg-1-2', title:'Princípios Básicos do Design Gráfico — Guia para Iniciantes',        desc:'Os princípios que você precisa dominar para trabalhar com design.',           url:'https://www.youtube.com/watch?v=MnEFzKGVqb8', vid:'MnEFzKGVqb8' },
      { id:'dg-1-3', title:'Como Estudar Design Gráfico do Zero (Sem Gastar)',                   desc:'Guia prático e completo para começar design sem gastar nada.',                url:'https://www.youtube.com/watch?v=kGK7BN04Lss', vid:'kGK7BN04Lss' },
      { id:'dg-1-4', title:'Superaula de Design Gráfico — Curso Completo',                       desc:'Aula definitiva para quem está começando ou quer migrar de carreira.',        url:'https://www.youtube.com/watch?v=GWXgnHV2Qvg', vid:'GWXgnHV2Qvg' },
      { id:'dg-1-5', title:'PRINCÍPIOS de DESIGN GRÁFICO para INICIANTES',                       desc:'Fundamentos essenciais apresentados de forma visual e didática.',              url:'https://www.youtube.com/watch?v=pVlCTdb1c90', vid:'pVlCTdb1c90' },
      { id:'dg-1-6', title:'Como Começar a Estudar Design Gráfico em 2025 — Guia Completo',      desc:'Roteiro de estudo completo com ferramentas e recursos para iniciantes.',       url:'https://www.youtube.com/watch?v=9SgSLJv7gJo', vid:'9SgSLJv7gJo' },
      { id:'dg-1-7', title:'Como Iniciar no Design Gráfico em 2025 e Ingressar no Mercado',      desc:'Da decisão de aprender design até conseguir os primeiros clientes.',           url:'https://www.youtube.com/watch?v=0kLzTQ_GZJw', vid:'0kLzTQ_GZJw' },
    ]
  },
  {
    id: 'dg-m2', color: '#a855f7',
    title: 'Módulo 2', subtitle: 'Teoria das Cores e Psicologia',
    lessons: [
      { id:'dg-2-1', title:'O Guia Completo para Escolher as Cores do Seu Design',               desc:'Teoria das cores, psicologia e roda de cores na prática.',                    url:'https://www.youtube.com/watch?v=U0HIPpZPKxw', vid:'U0HIPpZPKxw' },
      { id:'dg-2-2', title:'Teoria das Cores — Sistema de Cores no Design',                      desc:'Estudo das cores desde os aspectos fisiológicos até a aplicação no design.',  url:'https://www.youtube.com/watch?v=mPD8sloDNlM', vid:'mPD8sloDNlM' },
      { id:'dg-2-3', title:'Domine o Significado das Cores — Psicologia das Cores no Design',   desc:'O que cada cor representa e transmite em projetos de design gráfico.',         url:'https://www.youtube.com/watch?v=iNjw7rMF-UE', vid:'iNjw7rMF-UE' },
      { id:'dg-2-4', title:'Psicologia das Cores — Significado das Cores no Design',             desc:'Como aplicar o significado das cores para criar designs mais eficazes.',       url:'https://www.youtube.com/watch?v=uIHkJE2oWDA', vid:'uIHkJE2oWDA' },
      { id:'dg-2-5', title:'Teoria das Cores: Psicologia, Harmonia e Expressão no Design',       desc:'Psicologia das cores, roda cromática, contraste, brilho e saturação.',        url:'https://www.youtube.com/watch?v=pWgapVDe7SI', vid:'pWgapVDe7SI' },
    ]
  },
  {
    id: 'dg-m3', color: '#0ea5e9',
    title: 'Módulo 3', subtitle: 'Tipografia',
    lessons: [
      { id:'dg-3-1', title:'Tipografia — Escolhendo a Tipografia Perfeita [Aulão Completo]',     desc:'Guia completo para dominar a tipografia e escolher as fontes certas.',         url:'https://www.youtube.com/watch?v=DpSbHbtV3dw', vid:'DpSbHbtV3dw' },
      { id:'dg-3-2', title:'Conceitos Básicos de Tipografia no Design Gráfico',                  desc:'Os conceitos fundamentais que todo designer precisa conhecer em tipografia.',  url:'https://www.youtube.com/watch?v=Yl-dR4EWWuY', vid:'Yl-dR4EWWuY' },
      { id:'dg-3-3', title:'Tipografia: Guia sobre Tipos — Aula 01 — Curso de Design',           desc:'Introdução ao universo dos tipos e como usá-los corretamente.',                url:'https://www.youtube.com/watch?v=4DVqU0MsCsI', vid:'4DVqU0MsCsI' },
      { id:'dg-3-4', title:'A Verdade Sobre Tipografia — Como Escolher Fontes para Identidades Visuais',desc:'Como escolher fontes que comunicam a personalidade da marca.', url:'https://www.youtube.com/watch?v=FUZDiFyeGlk', vid:'FUZDiFyeGlk' },
      { id:'dg-3-5', title:'Design Gráfico para Iniciantes — Tipografia',                        desc:'Tipografia explicada de forma simples e visual para quem está começando.',     url:'https://www.youtube.com/watch?v=1GgJyfC4iK8', vid:'1GgJyfC4iK8' },
      { id:'dg-3-6', title:'Como Escolher a Fonte Perfeita para Qualquer Projeto de Design',     desc:'Metodologia prática para selecionar tipografias em diferentes contextos.',     url:'https://www.youtube.com/watch?v=i-cgm3thbTU', vid:'i-cgm3thbTU' },
      { id:'dg-3-7', title:'10 Fontes GRÁTIS que Você Não Conhece — Design Gráfico',             desc:'Descoberta de fontes profissionais gratuitas para seus projetos.',              url:'https://www.youtube.com/watch?v=trLEm1TLLOw', vid:'trLEm1TLLOw' },
    ]
  },
  {
    id: 'dg-m4', color: '#10b981',
    title: 'Módulo 4', subtitle: 'Canva — Do Zero ao Avançado',
    lessons: [
      { id:'dg-4-1', title:'Canva Para Iniciantes — Tutorial Completo Para Criar Seu 1º Design (2025)',desc:'Crie seu primeiro design no Canva passo a passo, atualizado.',          url:'https://www.youtube.com/watch?v=IrL7Zots7bA', vid:'IrL7Zots7bA' },
      { id:'dg-4-2', title:'Canva Passo a Passo para Iniciantes — Tutorial Completo 2025',       desc:'Aprenda do zero todos os recursos do Canva de forma prática.',                url:'https://www.youtube.com/watch?v=IheE_u3tAY0', vid:'IheE_u3tAY0' },
      { id:'dg-4-3', title:'Canva para Iniciantes — Tutorial Completo, Passo a Passo',           desc:'Tutorial completo cobrindo as principais ferramentas do Canva.',              url:'https://www.youtube.com/watch?v=31I3lxhWp08', vid:'31I3lxhWp08' },
      { id:'dg-4-4', title:'Curso Canva com I.A para Iniciantes Gratuito 2025 [Passo a Passo]', desc:'Use inteligência artificial dentro do Canva para criar designs incríveis.',    url:'https://www.youtube.com/watch?v=oQQsOv-FX0A', vid:'oQQsOv-FX0A' },
      { id:'dg-4-5', title:'Canva para Iniciantes: Como Criar Suas Primeiras Artes — 2025',      desc:'Cadastro, acesso e criação das primeiras artes no Canva.',                     url:'https://www.youtube.com/watch?v=dxJgGjaUHO4', vid:'dxJgGjaUHO4' },
      { id:'dg-4-6', title:'Como Criar Artes Profissionais no Canva Grátis — Instagram e Redes', desc:'Crie posts profissionais para redes sociais usando apenas o Canva gratuito.',  url:'https://www.youtube.com/watch?v=h_UEzzg7aEA', vid:'h_UEzzg7aEA' },
    ]
  },
  {
    id: 'dg-m5', color: '#3b82f6',
    title: 'Módulo 5', subtitle: 'Adobe Photoshop',
    lessons: [
      { id:'dg-5-1', title:'Como Aprender Photoshop em 2025 — Tutorial Adobe Photoshop',         desc:'Principais tópicos do Photoshop para começar projetos de imagem e manipulação.', url:'https://www.youtube.com/watch?v=xPCcyLXO9M8', vid:'xPCcyLXO9M8' },
      { id:'dg-5-2', title:'Domine o Photoshop em 1 Vídeo: Curso Completo e Gratuito 2025!',     desc:'Curso completo com as últimas ferramentas e recursos do Photoshop 2025.',      url:'https://www.youtube.com/watch?v=5t_zNDDrFf4', vid:'5t_zNDDrFf4' },
      { id:'dg-5-3', title:'Curso Completo de Photoshop — Do Zero ao Pro — Módulo 01',           desc:'Curso prático e objetivo para designers, publicitários e criadores de conteúdo.', url:'https://www.youtube.com/watch?v=a7aIyfb5dj0', vid:'a7aIyfb5dj0' },
      { id:'dg-5-4', title:'Curso de Photoshop para Iniciantes — Aula 01: Começando do Zero',   desc:'Aprenda Photoshop do início, passo a passo, com linguagem simples.',           url:'https://www.youtube.com/watch?v=KbetTkLTCHk', vid:'KbetTkLTCHk' },
      { id:'dg-5-5', title:'Curso de Photoshop Grátis para Iniciantes (com Certificado!) 2025',  desc:'100% gratuito e com certificado — do zero ao profissional.',                   url:'https://www.youtube.com/watch?v=zwbV4_xT178', vid:'zwbV4_xT178' },
    ]
  },
  {
    id: 'dg-m6', color: '#f59e0b',
    title: 'Módulo 6', subtitle: 'Adobe Illustrator',
    lessons: [
      { id:'dg-6-1', title:'Como Começar no Illustrator em 2025 — Tutorial Adobe Illustrator',   desc:'Aprenda os principais tópicos do Illustrator para começar ilustrações.',        url:'https://www.youtube.com/watch?v=feNNE6wURRM', vid:'feNNE6wURRM' },
      { id:'dg-6-2', title:'Illustrator Tutorial Completo — Aula para Iniciantes',               desc:'Aula completa ideal para quem não sabe por onde começar no Illustrator.',      url:'https://www.youtube.com/watch?v=2NcvL1YK5_0', vid:'2NcvL1YK5_0' },
      { id:'dg-6-3', title:'Illustrator para Iniciantes: Curso Completo Gratuito',               desc:'Do zero ao avançado: um dos softwares mais importantes do mercado.',           url:'https://www.youtube.com/watch?v=traHZwya_jU', vid:'traHZwya_jU' },
      { id:'dg-6-4', title:'Illustrator para Iniciantes — Do Zero à Primeira Arte',              desc:'Tutorial descomplicado para criar sua primeira arte mesmo nunca tendo aberto.', url:'https://www.youtube.com/watch?v=pSjjPvgOl2g', vid:'pSjjPvgOl2g' },
      { id:'dg-6-5', title:'Adobe Illustrator para Iniciantes: Aprenda em 10 Minutos',           desc:'Visão geral rápida e prática dos recursos essenciais do Illustrator.',          url:'https://www.youtube.com/watch?v=PtCwyiuT5Gc', vid:'PtCwyiuT5Gc' },
    ]
  },
  {
    id: 'dg-m7', color: '#ec4899',
    title: 'Módulo 7', subtitle: 'Figma',
    lessons: [
      { id:'dg-7-1', title:'Como Usar o Figma 2025/26 em 1 Hora — Do Zero para Iniciantes',      desc:'Aula prática de 1 hora para dominar o Figma completamente do zero.',           url:'https://www.youtube.com/watch?v=udY4Id6bK6U', vid:'udY4Id6bK6U' },
      { id:'dg-7-2', title:'Como Usar o Figma: Aulão Gratuito do Absoluto Zero [2025]',          desc:'Todos os recursos do Figma de forma gratuita e completa para iniciantes.',      url:'https://www.youtube.com/watch?v=5U2Sxj8AEks', vid:'5U2Sxj8AEks' },
      { id:'dg-7-3', title:'Curso de Figma 2025 do Básico ao Avançado',                          desc:'Jornada completa no Figma cobrindo desde os fundamentos até recursos avançados.',url:'https://www.youtube.com/watch?v=SJ6sTj-LCjA', vid:'SJ6sTj-LCjA' },
      { id:'dg-7-4', title:'Figma para Iniciantes — Tutorial Completo Atualizado',               desc:'Tutorial atualizado cobrindo todos os recursos essenciais do Figma.',           url:'https://www.youtube.com/watch?v=eU18Mn63Mi4', vid:'eU18Mn63Mi4' },
      { id:'dg-7-5', title:'Mini Curso Gratuito de Figma para Iniciantes [ATUALIZADO 2025]',     desc:'Os conceitos essenciais para começar do zero e dominar a ferramenta.',         url:'https://www.youtube.com/watch?v=lXFQ3i07KpI', vid:'lXFQ3i07KpI' },
      { id:'dg-7-6', title:'Como Usar o Figma — Tutorial Completo para Iniciantes + Dicas Bônus',desc:'Tutorial completo com dicas extras para quem está começando no Figma.',        url:'https://www.youtube.com/watch?v=oE_08KTRA9w', vid:'oE_08KTRA9w' },
    ]
  },
  {
    id: 'dg-m8', color: '#14b8a6',
    title: 'Módulo 8', subtitle: 'Design para Redes Sociais e Anúncios',
    lessons: [
      { id:'dg-8-1', title:'Guia de Dimensões e Margens Oficiais do Instagram 2025 (no Figma)',  desc:'Crie posts e carrosséis nas dimensões corretas do Instagram em 2025.',         url:'https://www.youtube.com/watch?v=FVNMQNdLsQs', vid:'FVNMQNdLsQs' },
      { id:'dg-8-2', title:'Como Fazer 50 Posts Para Instagram em 10 Minutos — Tutorial',        desc:'Crie grandes volumes de conteúdo visual de forma rápida e gratuita.',          url:'https://www.youtube.com/watch?v=_uyP5cuq0Jw', vid:'_uyP5cuq0Jw' },
      { id:'dg-8-3', title:'Aula de Figma para Redes Sociais — Como Criar Posts para o Instagram',desc:'Do layout à exportação: posts profissionais para Instagram no Figma.',       url:'https://www.youtube.com/watch?v=PHWKStKhAtg', vid:'PHWKStKhAtg' },
      { id:'dg-8-4', title:'Como Fazer Post Para Instagram Profissional — Tutorial Completo',    desc:'Processo completo de criação de posts profissionais do zero.',                  url:'https://www.youtube.com/watch?v=2WGdkWlbmMA', vid:'2WGdkWlbmMA' },
      { id:'dg-8-5', title:'Canva Instagram Posts — Crie Posts Profissionais para Redes Sociais',desc:'Tutorial de criação de posts profissionais para todas as redes sociais.',       url:'https://www.youtube.com/watch?v=v6V7A4zSv_g', vid:'v6V7A4zSv_g' },
    ]
  },
  {
    id: 'dg-m9', color: '#8b5cf6',
    title: 'Módulo 9', subtitle: 'Identidade Visual e Branding',
    lessons: [
      { id:'dg-9-1', title:'Como Criar uma Marca e Logotipo do Zero — Identidade Visual e Branding',desc:'Criação de marca completa: identidade visual, briefing e branding.',        url:'https://www.youtube.com/watch?v=mZsIjxu0hAU', vid:'mZsIjxu0hAU' },
      { id:'dg-9-2', title:'Criando uma Identidade Visual do Zero — Parte 1',                    desc:'Processo de briefing e pesquisa para criar uma identidade visual.',            url:'https://www.youtube.com/watch?v=jNa8UbZqK80', vid:'jNa8UbZqK80' },
      { id:'dg-9-3', title:'Como Criar uma Identidade Visual com Branding — Aula Gratuita',      desc:'Identidade visual completa com branding integrado.',                            url:'https://www.youtube.com/watch?v=wqwiAcfHpo4', vid:'wqwiAcfHpo4' },
      { id:'dg-9-4', title:'Ideia de Criação de Logotipo para Iniciante — Identidade Visual',    desc:'Conceitos e ideias para criação de logotipos para quem está começando.',       url:'https://www.youtube.com/watch?v=TdfFKEt07dY', vid:'TdfFKEt07dY' },
      { id:'dg-9-5', title:'Como Criar um Manual de Identidade Visual',                          desc:'A importância do manual de marca e como estruturá-lo profissionalmente.',      url:'https://www.youtube.com/watch?v=PAi1hmVAgP8', vid:'PAi1hmVAgP8' },
      { id:'dg-9-6', title:'Como Criar Logotipo com Iniciais — Identidade Visual',               desc:'Criação de logos personalizados usando as iniciais da marca.',                  url:'https://www.youtube.com/watch?v=_850OjzTMxw', vid:'_850OjzTMxw' },
      { id:'dg-9-7', title:'Como Criar a Identidade Visual de uma Marca de Luxo',                desc:'Processo criativo para marcas premium: diferenciais e posicionamento visual.',  url:'https://www.youtube.com/watch?v=mhAZBc5GFgs', vid:'mhAZBc5GFgs' },
    ]
  },
  {
    id: 'dg-m10', color: '#ef4444',
    title: 'Módulo 10', subtitle: 'Portfólio e Mercado de Trabalho',
    lessons: [
      { id:'dg-10-1', title:'Como Montar um Portfólio para Design Gráfico',                      desc:'Supere o desafio inicial de montar um portfólio do zero.',                     url:'https://www.youtube.com/watch?v=GqUudbKY-m0', vid:'GqUudbKY-m0' },
      { id:'dg-10-2', title:'Como Trabalhar Como Designer Gráfico Freelancer',                   desc:'Tudo sobre trabalho freelancer em design gráfico + curso gratuito.',           url:'https://www.youtube.com/watch?v=jMVSt1BVq30', vid:'jMVSt1BVq30' },
      { id:'dg-10-3', title:'Tudo que Eu Fiz para Virar Freelancer de Design Gráfico',           desc:'Experiência real de quem se tornou designer freelancer do zero.',               url:'https://www.youtube.com/watch?v=hucZdGMFMZc', vid:'hucZdGMFMZc' },
      { id:'dg-10-4', title:'Designer Gráfico Freelancer: O Que Você Precisa Saber Antes de Começar',desc:'Mercado, habilidades necessárias e o que esperar da carreira freelancer.',  url:'https://www.youtube.com/watch?v=SHpO0YwD6K4', vid:'SHpO0YwD6K4' },
      { id:'dg-10-5', title:'Tudo para Criar Seu Portfólio de Design em um Site Próprio',        desc:'Como criar e divulgar seu portfólio de designer no seu próprio site.',          url:'https://www.youtube.com/watch?v=44c2wD5WNEQ', vid:'44c2wD5WNEQ' },
      { id:'dg-10-6', title:'Como Criar um Portfólio SEM Ter Clientes Ainda?',                   desc:'Estratégia para montar portfólio profissional antes do primeiro cliente.',     url:'https://www.youtube.com/watch?v=043UgfOYJzk', vid:'043UgfOYJzk' },
    ]
  },
];

// ============================================================
// DADOS — SOCIAL MEDIA (32 aulas)
// ============================================================
const SOCIAL_MODULES = [
  {
    id: 'sm-m1', color: '#f97316',
    title: 'Módulo 1', subtitle: 'Profissão e Fundamentos',
    lessons: [
      { id:'sm-1-1', title:'O que um Social Media Faz? Entenda a Profissão em 2026',          desc:'Entenda de vez o que faz um social media, responsabilidades e mercado de trabalho.',    url:'https://www.youtube.com/watch?v=__wJcTHtLL0', vid:'__wJcTHtLL0' },
      { id:'sm-1-2', title:'Como começar como Social Media em 2025',                           desc:'Guia prático para entrar na profissão de social media sem experiência prévia.',           url:'https://www.youtube.com/watch?v=MEuP0IgUCCA',  vid:'MEuP0IgUCCA'  },
      { id:'sm-1-3', title:'SOCIAL MEDIA: Por ONDE COMEÇAR SUA CARREIRA em 2025',             desc:'Roteiro completo para iniciar a carreira de social media com foco e estratégia.',        url:'https://www.youtube.com/watch?v=CEwgOI_t2Bw',  vid:'CEwgOI_t2Bw'  },
      { id:'sm-1-4', title:'O que você precisa ESTUDAR para ser SOCIAL MEDIA em 2025',        desc:'Habilidades, ferramentas e conhecimentos essenciais para o social media moderno.',       url:'https://www.youtube.com/watch?v=jX4u-ZgQdrM',  vid:'jX4u-ZgQdrM'  },
      { id:'sm-1-5', title:'Como COMEÇAR a trabalhar como SOCIAL MEDIA — do zero',            desc:'Experiência real de quem começou do zero na carreira de social media.',                  url:'https://www.youtube.com/watch?v=rol7s2FV2FE',  vid:'rol7s2FV2FE'  },
      { id:'sm-1-6', title:'Trabalho de SOCIAL MEDIA NA PRÁTICA: Processos e Organização',   desc:'Bastidores da rotina profissional: processos, organização e entrega para clientes.',     url:'https://www.youtube.com/watch?v=CkPEY_M9nuo',  vid:'CkPEY_M9nuo'  },
    ]
  },
  {
    id: 'sm-m2', color: '#ec4899',
    title: 'Módulo 2', subtitle: 'Estratégia de Conteúdo',
    lessons: [
      { id:'sm-2-1', title:'COMO DESENVOLVER UMA ESTRATÉGIA DE SOCIAL MEDIA',                 desc:'Passo a passo para criar uma estratégia de social media orientada a resultados.',        url:'https://www.youtube.com/watch?v=mPcqfh-SmOc',  vid:'mPcqfh-SmOc'  },
      { id:'sm-2-2', title:'Como Desenvolver uma Estratégia de Social Media PASSO a PASSO',   desc:'Metodologia completa para planejar e executar estratégias de conteúdo nas redes.',       url:'https://www.youtube.com/watch?v=v96WG7OfgxU',  vid:'v96WG7OfgxU'  },
      { id:'sm-2-3', title:'5 ESTRATÉGIAS DE CONTEÚDO QUE TODO SOCIAL MEDIA PRECISA CONHECER',desc:'As cinco estratégias fundamentais que todo profissional de social media deve dominar.',  url:'https://www.youtube.com/watch?v=RD91npm7xig',  vid:'RD91npm7xig'  },
      { id:'sm-2-4', title:'Como criar uma ESTRATÉGIA DE CONTEÚDO em 10 PASSOS',              desc:'Metodologia em 10 passos para criar estratégias de conteúdo eficazes e consistentes.',  url:'https://www.youtube.com/watch?v=OntLfvp2Rn0',  vid:'OntLfvp2Rn0'  },
      { id:'sm-2-5', title:'Aula 01 — Como criar uma estratégia de conteúdo em 10 passos',    desc:'Primeira aula do curso sobre estratégia de conteúdo: visão geral e fundamentos.',        url:'https://www.youtube.com/watch?v=VfQoUzD1pps',  vid:'VfQoUzD1pps'  },
      { id:'sm-2-6', title:'O básico que ninguém faz — 10 passos para ser Social Media em 2026',desc:'Os erros mais comuns e o que você precisa fazer de diferente para se destacar.',       url:'https://www.youtube.com/watch?v=n782N5GMtrk',  vid:'n782N5GMtrk'  },
    ]
  },
  {
    id: 'sm-m3', color: '#8b5cf6',
    title: 'Módulo 3', subtitle: 'Instagram — Crescimento e Algoritmo',
    lessons: [
      { id:'sm-3-1',  title:'Nova Atualização do Instagram 2025: Mudanças no Algoritmo',       desc:'O que mudou no algoritmo do Instagram e como adaptar sua estratégia de conteúdo.',      url:'https://www.youtube.com/watch?v=ovZcx2YtZis',  vid:'ovZcx2YtZis'  },
      { id:'sm-3-2',  title:'A Verdade sobre o algoritmo do Instagram em 2025',                desc:'O que ninguém está te contando sobre o algoritmo e como usar isso a seu favor.',         url:'https://www.youtube.com/watch?v=gFsHKTn_NBk',  vid:'gFsHKTn_NBk'  },
      { id:'sm-3-3',  title:'O Algoritmo do Instagram Finalmente Explicado',                   desc:'Explicação completa do algoritmo do Instagram para Feed, Reels, Explore e Stories.',    url:'https://www.youtube.com/watch?v=UegzypfYi5A',  vid:'UegzypfYi5A'  },
      { id:'sm-3-4',  title:'Como Crescer no Instagram em 2026 (Sem Tráfego Pago)',            desc:'Estratégias orgânicas atualizadas para crescer no Instagram sem gastar com anúncios.',  url:'https://www.youtube.com/watch?v=ie2xhtwxoYo',  vid:'ie2xhtwxoYo'  },
      { id:'sm-3-5',  title:'Como CRESCER RÁPIDO no Instagram DO ZERO em 2026 — Passo a Passo',desc:'Guia completo para crescer do zero no Instagram com consistência e estratégia.',        url:'https://www.youtube.com/watch?v=_zd7BuQu_fg',  vid:'_zd7BuQu_fg'  },
      { id:'sm-3-6',  title:'NOVO Algoritmo do Instagram! Como VENDER e CRESCER com Conteúdo', desc:'Como usar o algoritmo a seu favor para vender e crescer com conteúdo orgânico.',        url:'https://www.youtube.com/watch?v=hyPRLudjGT8',  vid:'hyPRLudjGT8'  },
      { id:'sm-3-7',  title:'Como CRESCER no INSTAGRAM em 2025: Estratégias ATUALIZADAS',      desc:'Estratégias atualizadas para crescimento sólido e consistente no Instagram.',           url:'https://www.youtube.com/watch?v=E9zEGb-6O-4',  vid:'E9zEGb-6O-4'  },
      { id:'sm-3-8',  title:'7 dicas de como aumentar o engajamento no Instagram em 2025',     desc:'Técnicas práticas para aumentar curtidas, comentários e compartilhamentos.',            url:'https://www.youtube.com/watch?v=c5ax_9QUUoI',  vid:'c5ax_9QUUoI'  },
      { id:'sm-3-9',  title:'Como Bombar no Instagram em 2025: Novas Estratégias e Tendências',desc:'Tendências e estratégias atuais para bombar o perfil e alcançar novos seguidores.',     url:'https://www.youtube.com/watch?v=A9sqWbxKFj8',  vid:'A9sqWbxKFj8'  },
      { id:'sm-3-10', title:'O NOVO ALGORITMO dos STORIES 2024 — Guia Definitivo',             desc:'Como funciona o algoritmo dos Stories e como usá-lo para aumentar visualizações.',      url:'https://www.youtube.com/watch?v=sqUkv9wPWQU',  vid:'sqUkv9wPWQU'  },
    ]
  },
  {
    id: 'sm-m4', color: '#10b981',
    title: 'Módulo 4', subtitle: 'Calendário Editorial e Planejamento',
    lessons: [
      { id:'sm-4-1', title:'Como Criar Um CALENDÁRIO EDITORIAL para as Redes Sociais',        desc:'Como montar um calendário editorial eficiente para manter consistência nas redes.',     url:'https://www.youtube.com/watch?v=NmLcA0LRY64',  vid:'NmLcA0LRY64'  },
      { id:'sm-4-2', title:'SOCIAL MEDIA — COMO MONTAR CRONOGRAMA DE CONTEÚDO',               desc:'Processo prático de criação de cronograma de conteúdo para clientes de social media.',  url:'https://www.youtube.com/watch?v=0TgAj66AavE',  vid:'0TgAj66AavE'  },
      { id:'sm-4-3', title:'Planejamento para Redes Sociais — Template de Calendário Editorial',desc:'Template completo de calendário editorial com 4 passos para planejamento estratégico.',url:'https://www.youtube.com/watch?v=GW3AwVTz_d8',  vid:'GW3AwVTz_d8'  },
      { id:'sm-4-4', title:'Como criar um Planejamento Estratégico para as redes sociais',    desc:'Passo a passo completo para criar planejamento estratégico de redes sociais eficaz.',   url:'https://www.youtube.com/watch?v=pd7TQ-rwQyo',  vid:'pd7TQ-rwQyo'  },
      { id:'sm-4-5', title:'Gestão de Conteúdo para Redes Sociais 2024',                      desc:'Como organizar e gerenciar a produção de conteúdo para múltiplas redes sociais.',       url:'https://www.youtube.com/watch?v=-1gjaW30xGM',  vid:'-1gjaW30xGM'  },
    ]
  },
  {
    id: 'sm-m5', color: '#3b82f6',
    title: 'Módulo 5', subtitle: 'Métricas, Ferramentas e Agendamento',
    lessons: [
      { id:'sm-5-1', title:'5 FERRAMENTAS PARA ANALISAR MÉTRICAS DAS REDES SOCIAIS',          desc:'As melhores ferramentas gratuitas e pagas para analisar métricas de redes sociais.',    url:'https://www.youtube.com/watch?v=exL-RgeGOpg',  vid:'exL-RgeGOpg'  },
      { id:'sm-5-2', title:'5 FERRAMENTAS GRATUITAS PARA AGENDAR POSTS',                      desc:'Conheça 5 ferramentas gratuitas para agendar posts e organizar sua rotina de conteúdo.', url:'https://www.youtube.com/watch?v=WwPUqg-mgWk',  vid:'WwPUqg-mgWk'  },
      { id:'sm-5-3', title:'Como Agendar Posts Usando Canva — Planejador de Conteúdo',        desc:'Tutorial completo de como usar o Canva para agendar posts direto na plataforma.',        url:'https://www.youtube.com/watch?v=htkx0B8GWHA',  vid:'htkx0B8GWHA'  },
      { id:'sm-5-4', title:'Agendar posts no TikTok, Instagram, YouTube, Facebook e LinkedIn',desc:'Como usar o mLabs para agendar posts em todas as principais redes sociais de uma vez.',  url:'https://www.youtube.com/watch?v=pCPgZ-BoABw',  vid:'pCPgZ-BoABw'  },
      { id:'sm-5-5', title:'Como agendar posts no TikTok — Nova Ferramenta',                  desc:'Passo a passo para agendar publicações no TikTok usando a ferramenta nativa.',          url:'https://www.youtube.com/watch?v=C4CX7-aK4y8',  vid:'C4CX7-aK4y8'  },
    ]
  },
];

// ============================================================
// DADOS — COPYWRITING (27 aulas)
// ============================================================
const COPY_MODULES = [
  {
    id: 'cp-m1', color: '#f59e0b',
    title: 'Módulo 1', subtitle: 'O que é Copy e Como Começar',
    lessons: [
      { id:'cp-1-1', title:'Copywriting: O que é, como funciona e como se tornar em 30 dias', desc:'Guia completo para entender o copywriting e traçar um plano de 30 dias para começar.',  url:'https://www.youtube.com/watch?v=xqkm3jwbvoQ',  vid:'xqkm3jwbvoQ'  },
      { id:'cp-1-2', title:'Copywriter em 2024 — Vale a Pena? Como Começar na Prática?',      desc:'Análise honesta da profissão, mercado atual e os primeiros passos práticos.',            url:'https://www.youtube.com/watch?v=geHN2UM-95U',  vid:'geHN2UM-95U'  },
      { id:'cp-1-3', title:'Como Começar Como Copywriter Profissional',                        desc:'Roteiro para profissionalizar sua carreira de copywriter do início ao primeiro cliente.', url:'https://www.youtube.com/watch?v=8ax4VqNdPCI',  vid:'8ax4VqNdPCI'  },
      { id:'cp-1-4', title:'Como COMEÇAR RÁPIDO na Profissão COPYWRITER',                     desc:'As ações mais importantes para acelerar o início da carreira de copywriter.',            url:'https://www.youtube.com/watch?v=jnNcOhva_GE',  vid:'jnNcOhva_GE'  },
      { id:'cp-1-5', title:'[COPYWRITING] O que eu faria para começar HOJE!',                 desc:'Conselho direto e prático de quem já está na profissão sobre os primeiros passos.',      url:'https://www.youtube.com/watch?v=RYAobekOXuo',  vid:'RYAobekOXuo'  },
      { id:'cp-1-6', title:'AS 5 ESPECIALIZAÇÕES MAIS BEM PAGAS DO COPYWRITING EM 2025',      desc:'Quais nichos de copy pagam mais e como se posicionar em cada especialização.',           url:'https://www.youtube.com/watch?v=OPJOseqbk20',  vid:'OPJOseqbk20'  },
      { id:'cp-1-7', title:'Curso Prático de Copywriting Para Iniciantes [100% GRATUITO]',    desc:'Curso completo e gratuito de copywriting para quem está começando do absoluto zero.',    url:'https://www.youtube.com/watch?v=43js9hV2lLc',  vid:'43js9hV2lLc'  },
    ]
  },
  {
    id: 'cp-m2', color: '#ef4444',
    title: 'Módulo 2', subtitle: 'Gatilhos Mentais e Persuasão',
    lessons: [
      { id:'cp-2-1', title:'COPYWRITING E OS GATILHOS MENTAIS QUE MAIS VENDEM e PERSUADEM',   desc:'Os gatilhos mentais mais poderosos do copywriting e como aplicá-los nas suas copies.',  url:'https://www.youtube.com/watch?v=yfbZstttsYM',  vid:'yfbZstttsYM'  },
      { id:'cp-2-2', title:'5 GATILHOS MENTAIS de COPYWRITING para VENDER MAIS',              desc:'Guia completo com os 5 gatilhos mentais mais eficazes para aumentar suas vendas.',       url:'https://www.youtube.com/watch?v=Au6YsvElzxs',  vid:'Au6YsvElzxs'  },
      { id:'cp-2-3', title:'Curso de Copywriting Básico — Aula 2: Gatilhos Mentais',          desc:'Segunda aula do curso básico focada em como aplicar os gatilhos mentais na prática.',    url:'https://www.youtube.com/watch?v=XqmbLwB6-IE',  vid:'XqmbLwB6-IE'  },
      { id:'cp-2-4', title:'Gatilhos Mentais — Curso de Copywriting Aula 02',                 desc:'Aula completa sobre os principais gatilhos mentais utilizados nos melhores copywriters.', url:'https://www.youtube.com/watch?v=vnDtscaUnNc',  vid:'vnDtscaUnNc'  },
      { id:'cp-2-5', title:'Gatilho Mental da Curiosidade — CURSO DE COPYWRITING',            desc:'Como usar o gatilho da curiosidade para prender a atenção e gerar desejo no leitor.',    url:'https://www.youtube.com/watch?v=yIBcv1heaVA',  vid:'yIBcv1heaVA'  },
      { id:'cp-2-6', title:'COPYWRITING: Como PERSUADIR, Gatilhos Mentais e Objeções',        desc:'Aula abrangente sobre persuasão, gatilhos mentais e como lidar com objeções em copy.',  url:'https://www.youtube.com/watch?v=BROtYwcONuk',  vid:'BROtYwcONuk'  },
      { id:'cp-2-7', title:'Por que o Copywriter Deve Estudar Persuasão?',                    desc:'A relação profunda entre persuasão e copywriting e por que estudar persuasão é vital.',  url:'https://www.youtube.com/watch?v=m-KlzIAnmKg',  vid:'m-KlzIAnmKg'  },
    ]
  },
  {
    id: 'cp-m3', color: '#8b5cf6',
    title: 'Módulo 3', subtitle: 'Headlines e Títulos que Vendem',
    lessons: [
      { id:'cp-3-1', title:'Como Escrever Headlines Irresistíveis (Sem Saber Nada de Copy)',  desc:'Técnicas para criar títulos que capturam atenção, geram interesse e despertam desejo.',  url:'https://www.youtube.com/watch?v=jB3zBNdJcac',  vid:'jB3zBNdJcac'  },
      { id:'cp-3-2', title:'Como CRIAR HEADLINES QUE VENDEM: 9 Ideias de Títulos',            desc:'9 modelos práticos de headlines de alta conversão que você pode usar imediatamente.',    url:'https://www.youtube.com/watch?v=J8Y5dWnkuNU',  vid:'J8Y5dWnkuNU'  },
      { id:'cp-3-3', title:'Como fazer uma COPY que VENDE MUITO em 3 Passos',                 desc:'Processo em 3 etapas para criar copies de vendas, conteúdo e anúncios que convertem.',  url:'https://www.youtube.com/watch?v=s-y0Pia9_Dc',  vid:'s-y0Pia9_Dc'  },
    ]
  },
  {
    id: 'cp-m4', color: '#3b82f6',
    title: 'Módulo 4', subtitle: 'Copy para Anúncios, Páginas e VSL',
    lessons: [
      { id:'cp-4-1', title:'Como fazer ANÚNCIOS CRIATIVOS usando técnicas de COPYWRITING',    desc:'Como aplicar copywriting na criação de anúncios criativos que convertem nas redes.',     url:'https://www.youtube.com/watch?v=FmjLOPtFbyQ',  vid:'FmjLOPtFbyQ'  },
      { id:'cp-4-2', title:'Como escrever COPY para Página de Vendas de ALTA CONVERSÃO',      desc:'Estrutura completa para escrever uma página de vendas persuasiva e de alta conversão.',  url:'https://www.youtube.com/watch?v=YYZ6lrkCzR4',  vid:'YYZ6lrkCzR4'  },
      { id:'cp-4-3', title:'Copy para VSL — Criando uma Carta de Vendas em Vídeo',            desc:'Como estruturar e escrever uma VSL (Video Sales Letter) do início ao fim na prática.',  url:'https://www.youtube.com/watch?v=5Dyctg6SLHU',  vid:'5Dyctg6SLHU'  },
      { id:'cp-4-4', title:'Copywriting: 10 Modelos de Copy para Vídeos, E-mails e Anúncios',desc:'10 modelos prontos de copy para vídeos de vendas, e-mails e anúncios que você pode adaptar.',url:'https://www.youtube.com/watch?v=2VAnwmYYwfw',vid:'2VAnwmYYwfw'},
    ]
  },
  {
    id: 'cp-m5', color: '#10b981',
    title: 'Módulo 5', subtitle: 'Storytelling e Quebra de Objeções',
    lessons: [
      { id:'cp-5-1', title:'Copywriting: Storytelling e a Jornada do Herói para Vender Mais', desc:'Como usar o storytelling e a estrutura da Jornada do Herói para vender com emoção.',    url:'https://www.youtube.com/watch?v=SQXXi6fw9mA',  vid:'SQXXi6fw9mA'  },
      { id:'cp-5-2', title:'COMO QUEBRAR OBJEÇÕES seguindo uma ESTRATÉGIA DE COPYWRITING',    desc:'Como identificar e quebrar as principais objeções do cliente usando técnicas de copy.',   url:'https://www.youtube.com/watch?v=MMJ12qlKnQU',  vid:'MMJ12qlKnQU'  },
      { id:'cp-5-3', title:'Livro Objeções de Jeb Blount — Fundamentos Poderosos de Copy',    desc:'Os insights do livro Objeções aplicados ao copywriting para aumentar conversões.',        url:'https://www.youtube.com/watch?v=AkYNhBNBGUY',  vid:'AkYNhBNBGUY'  },
    ]
  },
  {
    id: 'cp-m6', color: '#ec4899',
    title: 'Módulo 6', subtitle: 'Copy Avançado e Estratégias de Vendas',
    lessons: [
      { id:'cp-6-1', title:'Como fazer COPYWRITING? Dicas AVANÇADAS para criar um copy perfeito',desc:'Técnicas avançadas para elevar o nível das suas copies e se diferenciar no mercado.',  url:'https://www.youtube.com/watch?v=wYMS-CZ8DVI',  vid:'wYMS-CZ8DVI'  },
      { id:'cp-6-2', title:'Estratégias de Copywriting para Vendas — 15 Técnicas',             desc:'15 técnicas avançadas de copy aplicadas diretamente a processos de vendas complexos.',   url:'https://www.youtube.com/watch?v=HpMdSp3N20Q',  vid:'HpMdSp3N20Q'  },
      { id:'cp-6-3', title:'COPYWRITING, GATILHOS MENTAIS, PERSUASÃO E SUAS BALELAS',         desc:'Visão crítica e avançada sobre copywriting: o que realmente funciona e o que é mito.',  url:'https://www.youtube.com/watch?v=bh8aEJnLFxs',  vid:'bh8aEJnLFxs'  },
    ]
  },
];

// ============================================================
// ESTADO GLOBAL
// ============================================================
let currentSubject = 'trafego'; // 'trafego' | 'design' | 'social' | 'copy'
let _progressCache = {};        // carregado do Supabase após login
let _saveTimer = null;          // debounce para salvar no Supabase

function getProgress() { return _progressCache; }

function saveProgress(p) {
  _progressCache = p;
  // Salva localmente como cache offline
  try { localStorage.setItem('vante_progress_cache', JSON.stringify(p)); } catch {}
  // Salva no Supabase com debounce de 800ms
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(async () => {
    const { data: { user } } = await _sb.auth.getUser();
    if (!user) return;
    await _sb.from('progress').upsert(
      { user_id: user.id, data: p, updated_at: new Date().toISOString() },
      { onConflict: 'user_id' }
    );
  }, 800);
}

async function loadProgressFromDB() {
  const { data: { user } } = await _sb.auth.getUser();
  if (user) {
    const { data } = await _sb.from('progress')
      .select('data').eq('user_id', user.id).single();
    if (data?.data) {
      _progressCache = data.data;
      try { localStorage.setItem('vante_progress_cache', JSON.stringify(data.data)); } catch {}
      return;
    }
  }
  // Fallback: cache local offline
  try { _progressCache = JSON.parse(localStorage.getItem('vante_progress_cache')) || {}; } catch {}
}

function countTotal(modules) { return modules.reduce((s,m)=>s+m.lessons.length,0); }
function countDone(modules, p) {
  return modules.reduce((s,m)=>s+m.lessons.filter(l=>p[l.id]).length,0);
}

// ============================================================
// RENDER — LOGIN (Supabase Auth)
// ============================================================
function setupLogin() {
  const form     = document.getElementById('login-form');
  const emailIn  = document.getElementById('email-input');
  const pwdIn    = document.getElementById('pwd-input');
  const eyeBtn   = document.getElementById('eye-btn');
  const eyeShow  = document.getElementById('eye-show');
  const eyeHide  = document.getElementById('eye-hide');
  const errMsg   = document.getElementById('login-error');
  const btnLogin = document.getElementById('btn-login');

  // Toggle visibilidade da senha
  eyeBtn.addEventListener('click', () => {
    const isPassword = pwdIn.type === 'password';
    pwdIn.type = isPassword ? 'text' : 'password';
    eyeShow.style.display = isPassword ? 'none' : '';
    eyeHide.style.display = isPassword ? '' : 'none';
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    btnLogin.textContent = 'Entrando…';
    btnLogin.disabled = true;
    errMsg.classList.remove('show');

    const { error } = await _sb.auth.signInWithPassword({
      email:    emailIn.value.trim(),
      password: pwdIn.value,
    });

    if (error) {
      errMsg.classList.add('show');
      pwdIn.value = '';
      pwdIn.focus();
      setTimeout(() => errMsg.classList.remove('show'), 4000);
      btnLogin.textContent = 'Entrar';
      btnLogin.disabled = false;
    } else {
      await enterApp();
    }
  });
}

async function enterApp() {
  // Carrega progresso do Supabase
  await loadProgressFromDB();

  // Atualiza nome do usuário na sidebar
  const { data: { user } } = await _sb.auth.getUser();
  if (user) {
    const email = user.email || '';
    const name  = email.split('@')[0];
    const avatar = name.charAt(0).toUpperCase();
    const el = document.getElementById('user-name');
    const av = document.getElementById('user-avatar');
    if (el) el.textContent = name;
    if (av) av.textContent = avatar;
  }

  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app-screen').classList.add('visible');
  renderApp();
}

// ============================================================
// RENDER — APP
// ============================================================
function renderApp() {
  updateGlobalProgress();
  switchSubject(currentSubject);

  // Tabs
  document.querySelectorAll('.subject-tab').forEach(tab => {
    tab.addEventListener('click', () => switchSubject(tab.dataset.subject));
  });

  // Sidebar nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Logout
  document.getElementById('btn-logout').addEventListener('click', async () => {
    await _sb.auth.signOut();
    _progressCache = {};
    document.getElementById('app-screen').classList.remove('visible');
    document.getElementById('login-screen').style.display = 'flex';
    const pwdInput = document.getElementById('pwd-input');
    const emailInput = document.getElementById('email-input');
    if (pwdInput) pwdInput.value = '';
    if (emailInput) emailInput.value = '';
    const btn = document.getElementById('btn-login');
    if (btn) { btn.textContent = 'Entrar'; btn.disabled = false; }
  });
}

function switchSubject(subject) {
  currentSubject = subject;
  document.querySelectorAll('.subject-tab').forEach(t=>t.classList.toggle('active', t.dataset.subject===subject));
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.toggle('active', c.id===`tab-${subject}`));
  updateTabCounts();
}

function updateTabCounts() {
  const p = getProgress();
  const sets = [
    { id: 'tp-tab-count', mods: TRAFEGO_MODULES },
    { id: 'dg-tab-count', mods: DESIGN_MODULES  },
    { id: 'sm-tab-count', mods: SOCIAL_MODULES  },
    { id: 'cp-tab-count', mods: COPY_MODULES    },
  ];
  sets.forEach(({ id, mods }) => {
    const el = document.getElementById(id);
    if (el) el.textContent = `${countDone(mods,p)}/${countTotal(mods)}`;
  });
}

function updateGlobalProgress() {
  const p     = getProgress();
  const allMods = [...TRAFEGO_MODULES, ...DESIGN_MODULES, ...SOCIAL_MODULES, ...COPY_MODULES];
  const total = allMods.reduce((s,m)=>s+m.lessons.length, 0);
  const done  = allMods.reduce((s,m)=>s+m.lessons.filter(l=>p[l.id]).length, 0);
  const elDone  = document.getElementById('global-done');
  const elTotal = document.getElementById('global-total');
  const elBar   = document.getElementById('global-bar');
  const elPct   = document.getElementById('global-pct');
  if (elDone)  elDone.textContent  = done;
  if (elTotal) elTotal.textContent = total;
  if (elBar)   elBar.style.width   = (total ? (done/total*100) : 0)+'%';
  if (elPct)   elPct.textContent   = (total ? Math.round(done/total*100) : 0)+'%';
  updateTabCounts();
}

// ============================================================
// RENDER — MODULES & CARDS
// ============================================================
function buildSubjectContent(modules, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const p = getProgress();

  modules.forEach(mod => {
    const section = document.createElement('div');
    section.className = 'module-section';
    section.id = `section-${mod.id}`;

    const done = mod.lessons.filter(l=>p[l.id]).length;
    const pct  = Math.round(done/mod.lessons.length*100);

    // heading
    const heading = document.createElement('div');
    heading.className = 'module-heading';
    heading.innerHTML = `
      <div class="module-dot" style="background:${mod.color}"></div>
      <div>
        <div class="module-name" style="color:${mod.color}">${mod.title}</div>
        <div class="module-sub-label">${mod.subtitle}</div>
      </div>
      <div class="module-prog-inline">
        <div class="bar"><div class="fill" style="background:${mod.color};width:${pct}%" id="mpf-${mod.id}"></div></div>
        <div class="txt" id="mpt-${mod.id}">${done}/${mod.lessons.length}</div>
      </div>
    `;
    section.appendChild(heading);

    // Build grid with optional subsections
    if (mod.subsections) {
      mod.subsections.forEach(sub => {
        const subLabel = document.createElement('div');
        subLabel.className = 'subsection-label';
        subLabel.textContent = sub.label;
        section.appendChild(subLabel);

        const grid = document.createElement('div');
        grid.className = 'card-grid';
        mod.lessons.slice(sub.from, sub.to + 1).forEach(lesson => {
          grid.appendChild(buildCard(lesson, mod, p));
        });
        section.appendChild(grid);
      });
    } else {
      const grid = document.createElement('div');
      grid.className = 'card-grid';
      mod.lessons.forEach(lesson => grid.appendChild(buildCard(lesson, mod, p)));
      section.appendChild(grid);
    }

    container.appendChild(section);
  });
}

function buildCard(lesson, mod, p) {
  const watched = !!p[lesson.id];
  const card = document.createElement('div');
  card.className = 'lesson-card' + (watched ? ' watched' : '');
  card.id = `card-${lesson.id}`;

  const modTag = `${mod.title} · ${mod.subtitle}`;
  const yoursBadge = lesson.yours
    ? `<span class="card-yours-badge">🔗 Seu link</span>` : '';

  card.innerHTML = `
    <div class="card-thumb">
      <img src="${thumb(lesson.vid)}" alt="${lesson.title}"
           onerror="this.style.background='#1e2030';this.style.display='block'">
      <div class="play-btn">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
      ${yoursBadge}
      <span class="card-watched-badge">✓ Assistido</span>
    </div>
    <div class="card-body">
      <div class="card-module-tag" style="color:${mod.color}">${modTag}</div>
      <div class="card-title">${lesson.title}</div>
      <div class="card-desc">${lesson.desc}</div>
    </div>
    <div class="card-footer">
      <div class="card-check-wrap">
        <input type="checkbox" class="card-check" id="chk-${lesson.id}" ${watched?'checked':''}>
        <label for="chk-${lesson.id}" style="font-size:.75rem;color:var(--text-muted);cursor:pointer">Assistido</label>
      </div>
      <a href="${lesson.url}" target="_blank" rel="noopener" class="btn-watch-sm">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        Assistir
      </a>
    </div>
  `;

  // checkbox logic
  const chk = card.querySelector('.card-check');
  chk.addEventListener('change', () => {
    const prog = getProgress();
    prog[lesson.id] = chk.checked;
    saveProgress(prog);
    card.classList.toggle('watched', chk.checked);
    updateModuleProgress(mod);
    updateGlobalProgress();
  });

  return card;
}

function updateModuleProgress(mod) {
  const p = getProgress();
  const done = mod.lessons.filter(l=>p[l.id]).length;
  const pct  = Math.round(done/mod.lessons.length*100);
  const fill = document.getElementById(`mpf-${mod.id}`);
  const text = document.getElementById(`mpt-${mod.id}`);
  if (fill) fill.style.width = pct+'%';
  if (text) text.textContent = `${done}/${mod.lessons.length}`;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
  // Pré-renderiza os cards (sem progresso ainda)
  buildSubjectContent(TRAFEGO_MODULES, 'tp-content');
  buildSubjectContent(DESIGN_MODULES,  'dg-content');
  buildSubjectContent(SOCIAL_MODULES,  'sm-content');
  buildSubjectContent(COPY_MODULES,    'cp-content');

  // Configura formulário de login
  setupLogin();

  // Verifica se já há sessão ativa (token salvo no navegador)
  const { data: { session } } = await _sb.auth.getSession();
  if (session) {
    await enterApp();
  }
});
