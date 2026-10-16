/**
 * Synapsis Clínico — Motor de Landing Pages Parametrizadas (Micro-Landings Verticais)
 * Suporta:
 *   /neuropsico -> Especialidade Psicologia & Neuropsicologia (CFP nº 06/2019)
 *   /fono       -> Especialidade Fonoaudiologia & PAC (CFFa nº 613/2021)
 *   /to         -> Especialidade Terapia Ocupacional & Integração Sensorial (COFFITO - Em Breve / VIP)
 *   /           -> Portal Integrado do Neurodesenvolvimento (Clínica Multidisciplinar)
 */

(function () {
  const path = window.location.pathname.toLowerCase();
  const searchParams = new URLSearchParams(window.location.search);
  const explicitEsp = searchParams.get('esp') || searchParams.get('specialty');

  // Detectar vertical
  let currentVertical = 'multi';
  if (path.includes('fono') || explicitEsp === 'fono') {
    currentVertical = 'fono';
  } else if (path.includes('neuro') || path.includes('psico') || explicitEsp === 'neuro' || explicitEsp === 'psico') {
    currentVertical = 'neuropsico';
  } else if (path.includes('/to') || explicitEsp === 'to') {
    currentVertical = 'to';
  }

  const VARIANTS = {
    multi: {
      docTitle: 'Synapsis Clínico — O Ecossistema Completo do Neurodesenvolvimento Infantil',
      metaDesc: 'A plataforma definitiva para clínicas multidisciplinares de neurodesenvolvimento: Psicologia, Fonoaudiologia e Terapia Ocupacional com prontuários interdisciplinares integrados.',
      pillTagHtml: `
        <span class="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-400 badge-pulse"></span>
        <span>✨ Tripé do Neurodesenvolvimento • Multidisciplinar</span>
        <span class="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-black uppercase tracking-wider">Psico + Fono + TO</span>
      `,
      headlineHtml: `
        A Plataforma Definitiva para Clínicas de <span class="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-teal-300 to-neuro-500">Neurodesenvolvimento Infantil</span>.
      `,
      subheadlineHtml: `
        O software integrado que unifica <strong>Psicologia (CFP)</strong>, <strong>Fonoaudiologia (CFFa)</strong> e <strong>Terapia Ocupacional (COFFITO)</strong> em um prontuário interdisciplinar inteligente e de fácil leitura para médicos e famílias.
      `,
      defaultPlan: 'MULTI',
      ctaText: '👑 Conhecer o Plano Multidisciplinar (Turma Pioneira)'
    },
    fono: {
      docTitle: 'Synapsis Fono — Software Clínico para Fonoaudiologia, Cabine & PAC (CFFa 613/2021)',
      metaDesc: 'O software definitivo para fonoaudiólogos: relatórios e pareceres normatizados pelo CFFa nº 613/2021, testes de Processamento Auditivo Central (PAC), protocolos ABFW/MBGR e gestão financeira.',
      pillTagHtml: `
        <span class="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-teal-400 badge-pulse"></span>
        <span>🗣️ CFFa nº 613/2021 & SBFa • Software Especializado em Fonoaudiologia & PAC</span>
        <span class="hidden sm:inline-block px-2 py-0.5 rounded-full bg-teal-400/20 text-teal-300 text-[10px] font-black uppercase tracking-wider">3 Meses Grátis</span>
      `,
      headlineHtml: `
        Ciência Fonoaudiológica, Processamento Auditivo e Gestão em <span class="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-teal-300 to-emerald-400">Perfeita Sintonia</span>.
      `,
      subheadlineHtml: `
        Relatórios e pareceres fonoaudiológicos normatizados pela <strong>Resolução CFFa nº 613/2021</strong>, protocolos padrão ouro de cabine acústica (TDD, FR, TPF, TPD, GIN), ABFW e triagem semafórica para médicos neuropediatras.
      `,
      defaultPlan: 'FONO_SOLO',
      ctaText: '🗣️ Iniciar Teste Grátis de Fonoaudiologia (3 Meses)'
    },
    neuropsico: {
      docTitle: 'Synapsis Neuro — Software para Neuropsicologia, Avaliação Cognitiva & CFP 06/2019',
      metaDesc: 'O software líder para neuropsicólogos: laudos com curva de Gauss contínua, testes SATEPSI, prontuário com prova criptográfica SHA-256 e conformidade integral com a Resolução CFP nº 06/2019.',
      pillTagHtml: `
        <span class="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-indigo-400 badge-pulse"></span>
        <span>🧠 Resolução CFP nº 06/2019 & SATEPSI • Módulo Neuropsicológico Exclusivo</span>
        <span class="hidden sm:inline-block px-2 py-0.5 rounded-full bg-indigo-400/20 text-indigo-300 text-[10px] font-black uppercase tracking-wider">3 Meses Grátis</span>
      `,
      headlineHtml: `
        Ciência Clínica, Neuropsicologia e Gestão em <span class="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-teal-300 to-neuro-500">Perfeita Sintonia</span>.
      `,
      subheadlineHtml: `
        O software definitivo com Prontuário <strong>CFP 06/2019 imutável (Hash SHA-256)</strong>, <strong>Curva Normal de Gauss contínua</strong>, testes SATEPSI e redução comprovada de 70% no tempo de elaboração de laudos neuropsicológicos.
      `,
      defaultPlan: 'NEURO_SOLO',
      ctaText: '🧠 Iniciar Teste Grátis de Neuropsicologia (3 Meses)'
    },
    to: {
      docTitle: 'Synapsis T.O. — Software para Terapia Ocupacional & Integração Sensorial (COFFITO)',
      metaDesc: 'O software clínico definitivo para Terapia Ocupacional e Integração Sensorial: Perfil Sensorial (Dunn), COPM, AVDs, PITO e Prontuário Interdisciplinar Unificado normatizado pelo COFFITO.',
      pillTagHtml: `
        <span class="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-teal-400 badge-pulse"></span>
        <span>🖐️ Resolução COFFITO nº 414/2012 • Software Especializado em Terapia Ocupacional</span>
        <span class="hidden sm:inline-block px-2 py-0.5 rounded-full bg-teal-400/20 text-teal-300 text-[10px] font-black uppercase tracking-wider">3 Meses Grátis</span>
      `,
      headlineHtml: `
        Terapia Ocupacional, Integração Sensorial e Gestão Clínica em <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400">Perfeita Sintonia</span>.
      `,
      subheadlineHtml: `
        Prontuário estruturado para <strong>Integração Sensorial de Ayres</strong>, Winnie Dunn, COPM, AVDs, PITO e acompanhamento interdisciplinar unificado (PTS) compartilhado com Neuropsicologia e Fonoaudiologia.
      `,
      defaultPlan: 'TO_SOLO',
      ctaText: '🖐️ Iniciar Teste Grátis de Terapia Ocupacional (3 Meses)'
    }
  };

  function applyVariant() {
    const v = VARIANTS[currentVertical] || VARIANTS.multi;

    // 1. Título e Metas
    document.title = v.docTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', v.metaDesc);

    // 2. Elementos de Hero
    const pillTag = document.getElementById('heroPillTag');
    if (pillTag) pillTag.innerHTML = v.pillTagHtml;

    const mainHeadline = document.getElementById('heroMainHeadline');
    if (mainHeadline) mainHeadline.innerHTML = v.headlineHtml;

    const subheadline = document.getElementById('heroSubheadline');
    if (subheadline) subheadline.innerHTML = v.subheadlineHtml;

    // 3. Botão Principal de CTA
    const mainCta = document.getElementById('heroMainCtaBtn');
    if (mainCta) {
      const span = mainCta.querySelector('span');
      if (span) span.textContent = v.ctaText;
    }

    // 4. Injeta metadados globais para o modal de cadastro/checkout
    window.__SYNAPSIS_ACTIVE_VERTICAL__ = currentVertical;
    window.__SYNAPSIS_DEFAULT_PLAN__ = v.defaultPlan;

    console.log(`[Synapsis Engine] Vertical ativa: ${currentVertical.toUpperCase()} (Plano Padrão: ${v.defaultPlan})`);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyVariant);
  } else {
    applyVariant();
  }
})();
