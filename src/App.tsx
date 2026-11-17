import { useState } from 'react';
import HeroSection from './components/HeroSection';
import { 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Gift, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Check, 
  GraduationCap, 
  ArrowRight, 
  Shield, 
  Layers, 
  Compass, 
  Target, 
  DollarSign, 
  HelpCircle, 
  FileCheck2, 
  BookOpen, 
  Cpu, 
  BadgeCheck, 
  Zap 
} from 'lucide-react';

export default function CrisViannaAcademyLanding() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // WhatsApp click handler with pre-filled message
  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Cris%20Vianna%20Academy!%20Vim%20pelo%20site%20e%20quero%20garantir%20minha%20vaga%20na%20pr%C3%B3xima%20turma%20com%20o%20Kit%20Gr%C3%A1tis.";

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const steps = [
    {
      num: "01",
      title: "Fundamentação & Colorimetria Científica",
      badge: "A Base Inabalável",
      desc: "Anatomia das camadas dérmicas, espessura da pele e a matemática exata dos pigmentos. Você aprende como a melanina reage e neutraliza subtons para nunca mais ter fios azulados, avermelhados ou cinzas."
    },
    {
      num: "02",
      title: "Memória Muscular em Pele Sintética",
      badge: "Calibragem Milimétrica",
      desc: "Treino prático intensivo em pele de silicone cirúrgica. Domine a calibragem de peso, profundidade da agulha, velocidade do dermógrafo e curvas fluidas que reproduzem o nascimento natural dos pelos."
    },
    {
      num: "03",
      title: "Prática Real Supervisionada em Modelos Vivas",
      badge: "Mão na Massa Lado a Lado",
      desc: "O divisor de águas da sua carreira: você realiza o procedimento completo em modelo viva com a Grand Master Cris Vianna ao seu lado em cada traço, eliminando qualquer insegurança antes de entrar no mercado."
    },
    {
      num: "04",
      title: "Certificação Nacional & Posicionamento High-Ticket",
      badge: "Autoridade Imediata",
      desc: "Receba seu Certificado Oficial Válido em Todo Brasil, saia com portfólio profissional impecável e aprenda o método de atração de clientes para cobrar de R$ 450 a R$ 1.200 por atendimento já no 1º mês."
    }
  ];

  const modules = [
    {
      num: "01",
      tag: "Visagismo Áureo",
      title: "Design & Mapeamento Geométrico",
      desc: "Domine a simetria facial com paquímetro digital e técnicas de proporção áurea. Adeus moldes engessados: crie sobrancelhas únicas e harmônicas para cada formato de rosto.",
      highlights: ["Mapeamento com linha e paquímetro", "Visagismo e personalização anatômica", "Correção de assimetrias severas"]
    },
    {
      num: "02",
      tag: "Fios Hiper-Realistas",
      title: "Hair Strokes & Nanoblading",
      desc: "O padrão internacional mais desejado pelas clientes de alta renda: fios ultrafinos, delicados, com curvaturas orgânicas e ramificações que se fundem aos fios naturais.",
      highlights: ["Profundidade correta sem expansão", "Direção de caimento anatômico", "Retenção duradoura pós-cicatrização"]
    },
    {
      num: "03",
      tag: "Efeito Aveludado",
      title: "Técnica Shadowline & Híbrida",
      desc: "A combinação perfeita da naturalidade dos fios no início com a densidade suave do sombreamento pixelado no corpo e cauda. Ideal para clientes que amam efeito maquiada moderna.",
      highlights: ["Transição suave de degradê", "Controle de saturação de sombra", "Preenchimento de falhas profundas"]
    },
    {
      num: "04",
      tag: "Revitalização Nobre",
      title: "Micropigmentação Labial",
      desc: "Técnica aquarela com iluminação e redefinição de contorno. Procedimento de altíssima procura no consultório que complementa o faturamento das alunas com tíquetes expressivos.",
      highlights: ["Neutralização de lábios arroxeados", "Efeito gloss e revitalização saudável", "Pigmentação uniforme sem dor"]
    },
    {
      num: "05",
      tag: "Propósito & Arte",
      title: "Reconstrução Paramédica & Areolar",
      desc: "A especialidade que transforma vidas: reconstrução do complexo aréolo-mamilar pós-mastectomia e camuflagem humanizada de cicatrizes cirúrgicas em parceria médica.",
      highlights: ["Desenho 3D de aréola realista", "Técnicas pós-cirúrgicas seguras", "Atendimento ético e humanizado"]
    },
    {
      num: "06",
      tag: "Negócio de Elite",
      title: "Gestão, Vendas & Captação High-Ticket",
      desc: "Não basta ser uma artista excepcional; você precisa de uma agenda disputada. Estrutura de precificação, fotografia com iluminação de estúdio e funil de conversão no WhatsApp.",
      highlights: ["Como cobrar de R$ 450 a R$ 1.200", "Fotografia e edição para Instagram", "Scripts de fechamento no WhatsApp"]
    }
  ];

  const testimonials = [
    {
      name: "Camila Santos",
      city: "Guarulhos / SP",
      achievement: "Faturou R$ 4.800 nas primeiras 3 semanas",
      text: "Eu nunca tinha pegado num dermógrafo e morria de medo de tremer na hora. A Cris ficou literalmente ao meu lado na modelo viva, segurando na minha mão quando precisei. Abri minha agenda e em menos de 1 mês já paguei o curso com sobra!",
      stars: 5,
      seal: "Transição de Carreira"
    },
    {
      name: "Juliana Oliveira",
      city: "São Paulo / SP",
      achievement: "Tíquete médio subiu de R$ 60 para R$ 650",
      text: "Eu já trabalhava com design simples cobrando R$ 40 por cliente. Depois da Academy, passei a cobrar R$ 650 na micropigmentação. Minhas clientes ficaram encantadas com a naturalidade dos fios e meu faturamento triplicou.",
      stars: 5,
      seal: "Especialização High-Ticket"
    },
    {
      name: "Fernanda Lima",
      city: "Ribeirão Preto / SP",
      achievement: "Abriu estúdio próprio em 45 dias",
      text: "O kit que ganhamos é surreal. Você não sai da sala precisando gastar mais nada; no dia seguinte já tem dermógrafo, agulhas e os melhores pigmentos do Brasil para atender. O certificado nacional me deu autoridade imediata na minha cidade.",
      stars: 5,
      seal: "Certificada Oficial"
    },
    {
      name: "Siobhan M.",
      city: "Dublin / Irlanda 🇮🇪",
      achievement: "Aluna Internacional atuando na Europa",
      text: "Viajei da Irlanda até o Brasil exclusivamente para fazer a mentoria presencial com a Cris Vianna. O nível técnico do método brasileiro ensinado por ela está anos-luz à frente do que vi na Europa. Minhas clientes em Dublin estão apaixonadas!",
      stars: 5,
      seal: "Aluna Internacional"
    }
  ];

  const faqs = [
    {
      q: "Não tenho dom nem qualquer experiência anterior na estética. Eu consigo aprender?",
      a: "Com absoluta certeza! Nosso método foi desenvolvido exatamente para quem está saindo do zero absoluto. Você desenvolve coordenação motora e memória muscular passo a passo em pele sintética e só atende a modelo viva quando estiver 100% calibrada e segura, sempre com a Cris ao seu lado."
    },
    {
      q: "O Kit Profissional Completo é realmente gratuito?",
      a: "Sim, sem nenhuma pegadinha. Ao garantir sua vaga na turma presencial, você recebe em mãos no primeiro dia de aula a maleta profissional contendo dermógrafo de precisão, fonte de alimentação, agulhas descartáveis esterilizadas, pigmentos aprovados pela Anvisa, paquímetro e pele sintética para iniciar seus atendimentos sem custo adicional."
    },
    {
      q: "A prática é feita em pessoas de verdade ou apenas em bonecos?",
      a: "A prática é 100% em modelos humanas vivas selecionadas pela Cris Vianna Academy! O treino em pele sintética serve apenas para destreza inicial; o procedimento real é feito em modelo viva sob supervisão rigorosa e contínua da Grand Master Cris Vianna."
    },
    {
      q: "O certificado é válido para abrir meu próprio espaço ou atuar em clínicas?",
      a: "Sim! O certificado emitido pela Cris Vianna Academy possui validade e reconhecimento em todo o território nacional, cumprindo todas as exigências legais e sanitárias para você abrir seu próprio estúdio ou atuar como especialista em clínicas de estética renomadas."
    },
    {
      q: "E se eu tiver dúvidas após o término do curso presencial?",
      a: "Você não fica desamparada! Nossas alunas têm acesso a um canal exclusivo de suporte pós-curso onde podem enviar fotos dos atendimentos, tirar dúvidas sobre colorimetria, cicatrização e receber feedbacks técnicos da equipe e da própria Cris Vianna."
    },
    {
      q: "Quais são as opções de pagamento e parcelamento?",
      a: "Você pode parcelar sua inscrição no cartão de crédito em até 12x, pagar à vista via Pix com desconto especial ou consultar condições personalizadas com nossa equipe de atendimento direto no WhatsApp."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-[#E5E5E5] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* =========================================================================
          PRIMEIRA DOBRA (HERO SECTION 3D ULTRA PREMIUM COM FOTO OFICIAL DA CRIS)
          ========================================================================= */}
      <HeroSection />

      {/* =========================================================================
          BARRA DE MÉTRICAS & CREDIBILIDADE (HIGH-TICKET PROOF)
          ========================================================================= */}
      <section className="py-12 bg-[#0C0B0A] border-y border-[#221F1E]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="text-3xl md:text-5xl font-serif font-bold text-[#FFF3D1]">100%</span>
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Prática em Modelos Vivas</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl md:text-5xl font-serif font-bold text-[#FFF3D1]">R$ 450 - 1.200</span>
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Valor por Procedimento</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl md:text-5xl font-serif font-bold text-[#FFF3D1]">Kit Incluso</span>
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Economize +R$ 1.500 no Início</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl md:text-5xl font-serif font-bold text-[#FFF3D1]">Brasil & Europa</span>
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Alunas da Irlanda a SP</p>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SEÇÃO 1: 'PARA QUEM É ESTE CURSO' (QUALIFICAÇÃO & DOR VS. DESEJO)
          ========================================================================= */}
      <section className="py-28 bg-[#070707] relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141212] border border-[#D4AF37]/35 text-[#FFF3D1] text-xs font-semibold uppercase tracking-widest">
              <Target size={14} className="text-[#D4AF37]" />
              <span>Qualificação Profissional</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
              Identifique Seu Momento Atual na Estética
            </h2>
            
            <p className="text-neutral-400 font-light text-base sm:text-lg">
              A Cris Vianna Academy foi desenhada sob medida para 3 perfis de mulheres que recusam o amadorismo e buscam destaque imediato no mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Iniciante do Zero */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#141212] via-[#0E0D0C] to-[#0A0909] border border-[#2D2825] hover:border-[#D4AF37]/60 transition-all duration-300 group hover:-translate-y-2 shadow-2xl relative flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <Compass size={28} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#FFF3D1] border border-[#D4AF37]/30">
                    Transição de Carreira
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-white font-bold mb-2">Quem Está Começando do Zero</h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold text-[#D4AF37]">
                    Sem experiência prévia
                  </p>
                </div>

                {/* Dor */}
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-xs text-neutral-300 leading-relaxed">
                  <span className="text-red-400 font-bold block mb-1">O Desafio Atual:</span>
                  "Tenho medo de não ter 'dom' ou não saber por onde começar. Não quero errar nem arriscar meu dinheiro em cursos rasos."
                </div>

                {/* Solução / Desejo */}
                <div className="space-y-3 pt-2 text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Treino prévio em pele sintética para soltar a mão e calibrar o peso</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Kit completo grátis para começar a faturar no dia seguinte</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Acompanhamento direto passo a passo sem deixar você sozinha</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-neutral-800/80">
                <span className="text-xs font-serif italic text-[#FFF3D1]">
                  ✦ Da primeira linha ao atendimento com segurança absoluta.
                </span>
              </div>
            </div>

            {/* Card 2: Profissional Insegura */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#181514] via-[#12100F] to-[#0C0B0A] border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 group hover:-translate-y-2 shadow-[0_15px_40px_rgba(212,175,55,0.15)] relative flex flex-col justify-between">
              
              {/* Highlight Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFF3D1] via-[#D4AF37] to-[#8C6216] text-black text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                Maior Salto de Carreira
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <Zap size={28} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#D4AF37]/25 text-[#FFF3D1] border border-[#D4AF37]/40">
                    Aperfeiçoamento VIP
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-white font-bold mb-2">Quem Já Atua mas Se Sente Insegura</h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold text-[#D4AF37]">
                    Medo da cicatrização e cor
                  </p>
                </div>

                {/* Dor */}
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-xs text-neutral-300 leading-relaxed">
                  <span className="text-red-400 font-bold block mb-1">O Desafio Atual:</span>
                  "Já fiz outros cursos, mas tenho pavor da sobrancelha cicatrizar azulada/acinzentada ou dos fios expandirem e ficarem marcados."
                </div>

                {/* Solução / Desejo */}
                <div className="space-y-3 pt-2 text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Colorimetria científica definitiva para nunca mais errar o subtom</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Técnica Hair Strokes de altíssima precisão com nanoblades</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Correção e neutralização segura de procedimentos antigos</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-neutral-800/80">
                <span className="text-xs font-serif italic text-[#FFF3D1]">
                  ✦ Transforme insegurança em domínio técnico indiscutível.
                </span>
              </div>
            </div>

            {/* Card 3: Buscando Alta Renda */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#141212] via-[#0E0D0C] to-[#0A0909] border border-[#2D2825] hover:border-[#D4AF37]/60 transition-all duration-300 group hover:-translate-y-2 shadow-2xl relative flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <DollarSign size={28} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#FFF3D1] border border-[#D4AF37]/30">
                    Posicionamento High-Ticket
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-white font-bold mb-2">Quem Quer Faturar Alto na Estética</h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold text-[#D4AF37]">
                    Sair da esteira de baixo preço
                  </p>
                </div>

                {/* Dor */}
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-xs text-neutral-300 leading-relaxed">
                  <span className="text-red-400 font-bold block mb-1">O Desafio Atual:</span>
                  "Trabalho 12 horas por dia cobrando R$ 40 a R$ 60 por cliente. Estou exausta fisicamente e não sobra dinheiro no fim do mês."
                </div>

                {/* Solução / Desejo */}
                <div className="space-y-3 pt-2 text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Cobrar de R$ 450 a R$ 1.200 por atendimento de 2 horas</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Faturar R$ 8.000 a R$ 15.000 atendendo menos clientes com mais valor</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Estar entre o 1% das micropigmentadoras mais bem pagas</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-neutral-800/80">
                <span className="text-xs font-serif italic text-[#FFF3D1]">
                  ✦ Menos volume de trabalho, muito mais lucro e prestígio.
                </span>
              </div>
            </div>

          </div>

          <div className="mt-14 text-center">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFF3D1] hover:text-[#D4AF37] transition-colors group"
            >
              <span>Se você se identificou com um desses perfis, converse agora com nossa consultora no WhatsApp</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SEÇÃO 2: 'O MÉTODO CRIS VIANNA' (LINHA DO TEMPO EM 4 ETAPAS)
          ========================================================================= */}
      <section id="metodo" className="py-28 bg-[#0C0B0A] border-y border-[#221F1E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161413] border border-[#D4AF37]/35 text-[#FFF3D1] text-xs font-semibold uppercase tracking-widest">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span>Jornada de Aprendizado</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
              O Método Cris Vianna em 4 Etapas
            </h2>
            
            <p className="text-neutral-400 font-light text-base sm:text-lg">
              Uma metodologia linear e comprovada que elimina a curva de tentativa e erro, conduzindo você da teoria até o atendimento de clientes pagantes.
            </p>
          </div>

          {/* Timeline Grid Connected by Golden Glow Line */}
          <div className="relative">
            
            {/* Desktop Golden Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="p-8 rounded-3xl bg-[#141212]/95 border border-[#2D2825] hover:border-[#D4AF37]/60 transition-all duration-300 group hover:-translate-y-2 shadow-2xl backdrop-blur-xl relative flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    
                    {/* Step Number Circle */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2A2420] to-[#12100F] border border-[#D4AF37]/40 flex items-center justify-center text-[#FFF3D1] font-brand font-bold text-xl shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-110 group-hover:border-[#D4AF37] transition-all">
                      {step.num}
                    </div>

                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#D4AF37] block">
                      {step.badge}
                    </span>

                    <h3 className="text-xl font-serif text-white font-bold leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center gap-2 text-[11px] text-[#FFF3D1] font-medium">
                    <CheckCircle2 size={14} className="text-[#D4AF37]" />
                    <span>Etapa Fundamental</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Callout Strip below timeline */}
          <div className="mt-16 rounded-2xl bg-[#141212] border border-[#D4AF37]/35 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg font-bold">Turmas Presenciais com Vagas Reduzidas</h4>
                <p className="text-xs text-neutral-400">Limitamos o número de alunas por turma para garantir mentoria individual com a Cris Vianna ao seu lado.</p>
              </div>
            </div>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FFF3D1] via-[#D4AF37] to-[#8C6216] text-black font-bold text-xs uppercase tracking-widest whitespace-nowrap hover:scale-105 transition-all shadow-md"
            >
              Consultar Vagas da Próxima Turma
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SEÇÃO 3: 'GRADE CURRICULAR COMPLETA' (BENTO GRID 3D COM NÚMEROS GIGANTES)
          ========================================================================= */}
      <section id="conteudo" className="py-28 bg-[#070707] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141212] border border-[#D4AF37]/35 text-[#FFF3D1] text-xs font-semibold uppercase tracking-widest">
              <BookOpen size={14} className="text-[#D4AF37]" />
              <span>Ementa Pedagógica Completa</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
              Grade Curricular High-Ticket
            </h2>
            
            <p className="text-neutral-400 font-light text-base sm:text-lg">
              Um programa 360° estruturado em Bento Grid que une arte, precisão anatômica e estratégias de negócios para você se tornar a maior autoridade da sua região.
            </p>
          </div>

          {/* Bento Grid 3D Cards with Huge Background Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {modules.map((mod, idx) => (
              <div 
                key={idx}
                className="group relative p-8 rounded-3xl bg-[#121010] border border-[#262220] hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Huge Sculpted 3D Watermark Number in Background */}
                <span className="font-brand font-black text-8xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37]/15 to-transparent select-none absolute -right-2 -bottom-4 pointer-events-none group-hover:from-[#D4AF37]/25 transition-all duration-500">
                  {mod.num}
                </span>

                <div className="relative z-10 space-y-4">
                  
                  {/* Tag Pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#FFF3D1] border border-[#D4AF37]/30">
                      Módulo {mod.num} • {mod.tag}
                    </span>
                    <Sparkles size={16} className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif text-white font-bold leading-tight group-hover:text-[#FFF3D1] transition-colors">
                    {mod.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="relative z-10 pt-6 mt-6 border-t border-neutral-800/70 space-y-2">
                  {mod.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check size={13} className="text-[#D4AF37] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SEÇÃO 4: 'A OFERTA IRRESISTÍVEL + KIT PROFISSIONAL GRÁTIS' (MOCKUPS EM CSS)
          ========================================================================= */}
      <section id="kit" className="py-28 bg-[#0C0B0A] border-y border-[#221F1E] relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/45 text-[#FFF3D1] text-xs font-semibold uppercase tracking-widest shadow-md">
              <Gift size={16} className="text-[#D4AF37]" />
              <span>Condição Especial com Maleta Grátis</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
              A Oferta Irresistível: Saia Pronta Para Faturar
            </h2>
            
            <p className="text-neutral-300 font-light text-base sm:text-lg">
              Ao garantir sua vaga, você recebe todos os materiais profissionais de primeira linha entregues em mãos no primeiro dia de aula, além de suporte e certificação completa.
            </p>
          </div>

          {/* MONUMENTAL CARD WITH CSS VISUAL MOCKUPS */}
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#1C1816] via-[#12100F] to-[#0A0909] border-2 border-[#D4AF37]/50 p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(212,175,55,0.25)] relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Visual Pure CSS Mockups (Kit Box & Certificate) */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* CSS MOCKUP 1: LUXURY STARTER KIT BOX */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-[#201B18] to-[#110F0E] border border-[#D4AF37]/50 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/25 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                        <Gift size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-medium">Bônus Exclusivo da Academia</span>
                        <h4 className="text-base font-serif font-bold text-white">Maleta Profissional de Primeiros Trabalhos</h4>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-[#D4AF37] text-black uppercase tracking-wider">
                      100% Grátis
                    </span>
                  </div>

                  {/* Visual Compartments in CSS */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl bg-black/60 border border-[#D4AF37]/20 text-center space-y-1">
                      <Cpu size={16} className="text-[#D4AF37] mx-auto" />
                      <p className="text-[10px] text-white font-semibold">Dermógrafo</p>
                      <p className="text-[9px] text-neutral-400">Precisão Cirúrgica</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/60 border border-[#D4AF37]/20 text-center space-y-1">
                      <ShieldCheck size={16} className="text-[#D4AF37] mx-auto" />
                      <p className="text-[10px] text-white font-semibold">Pigmentos</p>
                      <p className="text-[9px] text-neutral-400">Regulamentados Anvisa</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/60 border border-[#D4AF37]/20 text-center space-y-1">
                      <Layers size={16} className="text-[#D4AF37] mx-auto" />
                      <p className="text-[10px] text-white font-semibold">Paquímetro</p>
                      <p className="text-[9px] text-neutral-400">Mapeamento Áureo</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/60 border border-[#D4AF37]/20 text-center space-y-1">
                      <Sparkles size={16} className="text-[#D4AF37] mx-auto" />
                      <p className="text-[10px] text-white font-semibold">Agulhas & Cartuchos</p>
                      <p className="text-[9px] text-neutral-400">Esterilizadas</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/60 border border-[#D4AF37]/20 text-center space-y-1">
                      <FileCheck2 size={16} className="text-[#D4AF37] mx-auto" />
                      <p className="text-[10px] text-white font-semibold">Peles de Treino</p>
                      <p className="text-[9px] text-neutral-400">Silicone Hospitalar</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/60 border border-[#D4AF37]/20 text-center space-y-1">
                      <BookOpen size={16} className="text-[#D4AF37] mx-auto" />
                      <p className="text-[10px] text-white font-semibold">Apostila Completa</p>
                      <p className="text-[9px] text-neutral-400">Colorida & Passo a Passo</p>
                    </div>
                  </div>
                </div>

                {/* CSS MOCKUP 2: CERTIFICATE CARD IN PURE CSS */}
                <div className="p-5 rounded-2xl bg-[#0A0909] border-2 border-[#D4AF37]/40 shadow-xl relative overflow-hidden flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FFF3D1] via-[#D4AF37] to-[#8C6216] flex items-center justify-center text-black font-bold shadow-md flex-shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                        Validade Nacional Reconhecida
                      </span>
                      <h4 className="text-base font-serif font-bold text-white">Certificado Oficial Cris Vianna Academy</h4>
                      <p className="text-[11px] text-neutral-400">Habilitação legal para atuar em clínicas ou abrir seu próprio estúdio.</p>
                    </div>
                  </div>
                  <BadgeCheck size={28} className="text-[#D4AF37] hidden sm:block flex-shrink-0" />
                </div>

              </div>

              {/* Right Column: Value Anchoring & CTA */}
              <div className="lg:col-span-6 space-y-6 text-left">
                
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block">
                    Ancoragem de Valor Total
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold mt-1">
                    Tudo que Está Incluso na Sua Formação:
                  </h3>
                </div>

                {/* Breakdown List */}
                <div className="space-y-3 border-t border-neutral-800 pt-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-300">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#D4AF37]" /> Formação Presencial Completa (Teoria + Prática em Modelos)
                    </span>
                    <span className="line-through text-neutral-500 font-mono">R$ 3.500</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-300">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#D4AF37]" /> Kit Profissional Completo de Materiais (Maleta Completa)
                    </span>
                    <span className="text-[#D4AF37] font-bold uppercase text-xs">GRÁTIS</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-300">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#D4AF37]" /> Apostila Técnica Impressa Colorida Passo a Passo
                    </span>
                    <span className="text-[#D4AF37] font-bold uppercase text-xs">GRÁTIS</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-300">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#D4AF37]" /> Suporte Pós-Curso VIP Vitalício Direto com a Grand Master
                    </span>
                    <span className="text-[#D4AF37] font-bold uppercase text-xs">GRÁTIS</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-300">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#D4AF37]" /> Certificado Oficial com Registro Nacional
                    </span>
                    <span className="text-[#D4AF37] font-bold uppercase text-xs">GRÁTIS</span>
                  </div>
                </div>

                {/* Total Value vs Promo */}
                <div className="p-5 rounded-2xl bg-black/60 border border-[#D4AF37]/35 space-y-2">
                  <p className="text-xs text-neutral-400">
                    Valor total de tudo que você recebe: <span className="line-through text-neutral-500 font-mono">Mais de R$ 6.400</span>
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-white font-bold">
                    Condição Especial de Inscrição no WhatsApp
                  </p>
                  <p className="text-xs text-neutral-400">
                    Vagas limitadas por turma presencial em Guarulhos/SP. Parcelamento facilitado em até 12x ou desconto à vista no Pix.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <a 
                    href={whatsappUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full group relative inline-flex items-center justify-center px-8 py-5 rounded-full bg-gradient-to-r from-[#FFF3D1] via-[#D4AF37] to-[#8C6216] text-black font-extrabold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(212,175,55,0.45)] overflow-hidden"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none animate-light-sweep" />
                    <span className="relative z-10 flex items-center gap-3">
                      <MessageCircle size={20} />
                      <span>QUERO GARANTIR MINHA VAGA COM KIT GRÁTIS</span>
                      <ArrowRight size={18} />
                    </span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SEÇÃO 5: 'DEPOIMENTOS E AUTORIDADE' (CARDS DE TEXTO PREMIUM COM SELOS)
          ========================================================================= */}
      <section id="depoimentos" className="py-28 bg-[#070707] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141212] border border-[#D4AF37]/35 text-[#FFF3D1] text-xs font-semibold uppercase tracking-widest">
              <Star size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
              <span>Resultados Comprovados</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
              Histórias de Sucesso das Nossas Alunas
            </h2>
            
            <p className="text-neutral-400 font-light text-base sm:text-lg">
              Veja o que dizem as profissionais formadas pela Cris Vianna Academy que já estão atuando e faturando alto no mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((item, idx) => (
              <div 
                key={idx} 
                className="p-7 rounded-3xl bg-[#121010] border border-[#262220] hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Stars + Seal */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} size={14} fill="#D4AF37" />
                      ))}
                    </div>
                    <span className="text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#FFF3D1] border border-[#D4AF37]/30">
                      {item.seal}
                    </span>
                  </div>

                  {/* Achievement Metric Badge */}
                  <div className="p-2.5 rounded-xl bg-black/60 border border-[#D4AF37]/25 text-[11px] font-bold text-[#FFF3D1]">
                    ✦ {item.achievement}
                  </div>
                  
                  {/* Testimonial Quote */}
                  <p className="text-neutral-300 italic text-xs sm:text-sm leading-relaxed pt-1">
                    "{item.text}"
                  </p>
                </div>

                {/* Student Info Footer */}
                <div className="pt-5 mt-6 border-t border-neutral-800">
                  <span className="font-serif text-white font-bold block text-base">{item.name}</span>
                  <span className="text-xs text-[#D4AF37] flex items-center gap-1.5 mt-0.5 font-medium">
                    <MapPin size={12} /> {item.city}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Strip */}
          <div className="mt-14 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Mais de 500 profissionais formadas • Referência Nacional e Internacional
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SEÇÃO 6: FAQ ESTRATÉGICO DE QUEBRA DE OBJEÇÕES
          ========================================================================= */}
      <section className="py-28 bg-[#0C0B0A] border-t border-[#221F1E]">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161413] border border-[#D4AF37]/35 text-[#FFF3D1] text-xs font-semibold uppercase tracking-widest">
              <HelpCircle size={14} className="text-[#D4AF37]" />
              <span>Transparência Total</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">Perguntas Frequentes</h2>
            
            <p className="text-neutral-400 font-light text-sm sm:text-base">
              Tire todas as suas dúvidas antes de tomar a decisão que vai transformar o seu futuro financeiro.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl bg-[#141212] border border-[#282422] overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/45"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between text-white font-serif text-lg hover:text-[#D4AF37] transition-colors"
                >
                  <span className="font-semibold pr-4 leading-snug">{faq.q}</span>
                  <span className="text-[#D4AF37] text-xl font-sans flex-shrink-0">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-neutral-300 text-sm leading-relaxed border-t border-neutral-800/50 pt-4 bg-[#100E0E]/80">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <p className="text-neutral-400 text-sm">
              Tem alguma dúvida específica sobre hospedagem, turmas ou parcelamento?{' '}
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FFF3D1] font-semibold underline underline-offset-4 hover:text-[#D4AF37]"
              >
                Fale agora com nossa equipe no WhatsApp
              </a>
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SEÇÃO 7: CTA FINAL DE FECHAMENTO NO WHATSAPP COM URGÊNCIA
          ========================================================================= */}
      <section id="inscricao" className="py-32 relative overflow-hidden text-center bg-gradient-to-b from-[#090808] via-[#141212] to-[#070707]">
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/8 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#FFF3D1] text-xs uppercase tracking-widest font-semibold shadow-lg">
            <Clock size={15} />
            <span>Últimas Vagas para a Próxima Turma Presencial</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight">
            Sua Nova Carreira de Sucesso Começa com Esta Decisão
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Não adie mais o seu potencial de faturar de <strong>R$ 5.000 a R$ 15.000+ por mês</strong> com a arte da micropigmentação. Receba o kit profissional grátis e tenha mentoria lado a lado com a Grand Master Cris Vianna.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#FFF3D1] via-[#D4AF37] to-[#8C6216] text-black font-extrabold text-base sm:text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(212,175,55,0.5)] tracking-wider uppercase"
            >
              <MessageCircle size={24} />
              <span>Garantir Minha Vaga pelo WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Shield size={14} className="text-[#D4AF37]" /> Atendimento Seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Gift size={14} className="text-[#D4AF37]" /> Kit Completo Incluso
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-[#D4AF37]" /> Guarulhos / SP
            </span>
          </div>

        </div>
      </section>


      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="py-14 border-t border-[#221F1E] bg-[#050505] text-neutral-400 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-900">
            
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFF3D1] to-[#8C6216] flex items-center justify-center text-black font-serif font-bold text-sm">
                  CV
                </div>
                <span className="font-serif text-white tracking-widest text-lg font-bold">CRIS VIANNA ACADEMY</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                Academia especializada em formação e aperfeiçoamento profissional em micropigmentação de sobrancelhas, lábios e micropigmentação paramédica de reconstrução areolar.
              </p>
              <p className="text-xs text-neutral-400">
                📍 Guarulhos / SP • Próximo ao Aeroporto Internacional
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h5 className="font-serif text-white text-sm font-semibold tracking-wider uppercase">Navegação Rápida</h5>
              <ul className="text-xs space-y-2">
                <li><a href="#metodo" className="hover:text-[#FFF3D1] transition-colors">O Método</a></li>
                <li><a href="#conteudo" className="hover:text-[#FFF3D1] transition-colors">Grade Curricular</a></li>
                <li><a href="#kit" className="hover:text-[#FFF3D1] transition-colors">Kit Profissional Grátis</a></li>
                <li><a href="#depoimentos" className="hover:text-[#FFF3D1] transition-colors">Alunas Formadas</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h5 className="font-serif text-white text-sm font-semibold tracking-wider uppercase">Instagram Oficial</h5>
              <p className="text-xs text-neutral-400">
                Acompanhe o dia a dia dos nossos cursos presenciais, dicas técnicas e bastidores:
              </p>
              <a 
                href="https://www.instagram.com/crisvianna.academy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFF3D1] hover:underline"
              >
                <span>@crisvianna.academy</span>
                <ChevronRight size={14} />
              </a>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <p>© {new Date().getFullYear()} Cris Vianna Academy. Todos os direitos reservados.</p>
            <p>CNPJ & Direitos Registrados • Formação Presencial High-Ticket.</p>
          </div>
        </div>
      </footer>


      {/* =========================================================================
          FLOATING WHATSAPP BUTTON COM PULSE
          ========================================================================= */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-110 transition-all duration-300 group flex items-center gap-3"
        aria-label="Falar no WhatsApp"
      >
        <span className="hidden sm:inline-block text-xs font-bold pl-2 pr-1 text-white">
          Falar com a Cris no WhatsApp
        </span>
        <div className="relative">
          <MessageCircle size={26} className="fill-white text-transparent" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white" />
        </div>
      </a>

    </div>
  );
}
