import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Gift, 
  ShieldCheck, 
  GraduationCap, 
  Star, 
  MessageCircle,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Cris%20Vianna%20Academy!%20Vim%20pela%20Hero%20Section%20do%20site%20e%20gostaria%20de%20garantir%20minha%20vaga%20com%20o%20Kit%20Gr%C3%A1tis.";

  return (
    <div className="relative min-h-screen bg-[#070707] text-[#E5E5E5] overflow-hidden selection:bg-[#D4AF37] selection:text-black font-sans">
      
      {/* =========================================================================
          ATMOSPHERE & STUDIO LIGHTING (Luxury Dark & Warm Taupe)
          ========================================================================= */}
      
      {/* Studio Backdrop Gradient - Blends #070707 with warm taupe #2A2625 from the photoshoot */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 68% 42%, rgba(42, 38, 37, 0.75) 0%, rgba(18, 16, 16, 0.85) 45%, #070707 80%),
            radial-gradient(circle at 15% 20%, rgba(35, 30, 28, 0.45) 0%, transparent 60%)
          `
        }}
      />

      {/* Volumetric Radial Glow: Warm Champagne Gold (#D4AF37) behind the right photo */}
      <div 
        className="absolute top-1/4 right-[10%] w-[620px] h-[620px] rounded-full blur-[150px] pointer-events-none opacity-40 animate-pulse-glow z-0"
        style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, rgba(170, 124, 17, 0.15) 50%, transparent 75%)' }}
      />

      {/* Volumetric Radial Glow: Deep Bronze (#AA7C11) behind the left typography */}
      <div 
        className="absolute top-1/3 left-[-5%] w-[520px] h-[520px] rounded-full blur-[140px] pointer-events-none opacity-30 z-0"
        style={{ background: 'radial-gradient(circle, rgba(170, 124, 17, 0.28) 0%, rgba(212, 175, 55, 0.08) 60%, transparent 80%)' }}
      />

      {/* Luxury subtle ambient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-0" />

      {/* =========================================================================
          NAVBAR: LUXURY TRANSPARENT GLASSMORPHISM
          ========================================================================= */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#070707]/85 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3' 
            : 'bg-transparent border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Signature Monogram */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FFF3D1] via-[#D4AF37] to-[#8C6216] shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0E0D0D] rounded-full flex items-center justify-center">
                <span className="font-brand font-bold text-sm tracking-widest text-[#FFF3D1] group-hover:text-[#D4AF37] transition-colors">
                  CV
                </span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-brand font-semibold text-lg tracking-[0.22em] text-[#FFF3D1] leading-none group-hover:text-white transition-colors">
                CRIS VIANNA
              </span>
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#D4AF37] font-semibold mt-1">
                ACADEMY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-neutral-300 font-medium">
            <a href="#metodo" className="hover:text-[#FFF3D1] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all">
              O Método
            </a>
            <a href="#pratica" className="hover:text-[#FFF3D1] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all">
              Aulas Práticas
            </a>
            <a href="#kit" className="hover:text-[#FFF3D1] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all">
              Kit Grátis
            </a>
            <a href="#autoridade" className="hover:text-[#FFF3D1] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all">
              A Grand Master
            </a>
            <a href="#depoimentos" className="hover:text-[#FFF3D1] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all">
              Alunas
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FFF3D1] via-[#D4AF37] to-[#8C6216] p-[1px] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300"
            >
              <div className="px-5 py-2 rounded-full bg-[#0F0D0C] group-hover:bg-transparent transition-colors flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[#FFF3D1] group-hover:text-black transition-colors">
                  Garantir Vaga
                </span>
                <ArrowRight size={14} className="text-[#D4AF37] group-hover:text-black transition-colors" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-[#FFF3D1] transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0909]/95 backdrop-blur-2xl border-b border-[#D4AF37]/30 px-6 py-6 space-y-4">
            <a 
              href="#metodo" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-neutral-300 hover:text-[#D4AF37] py-2"
            >
              O Método
            </a>
            <a 
              href="#pratica" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-neutral-300 hover:text-[#D4AF37] py-2"
            >
              Aulas Práticas
            </a>
            <a 
              href="#kit" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-neutral-300 hover:text-[#D4AF37] py-2"
            >
              Kit Grátis Incluso
            </a>
            <a 
              href="#autoridade" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-neutral-300 hover:text-[#D4AF37] py-2"
            >
              Cris Vianna Grand Master
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-neutral-300 hover:text-[#D4AF37] py-2"
            >
              Alunas Formadas
            </a>
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full mt-4 py-3.5 rounded-full bg-gradient-to-r from-[#FFF3D1] via-[#D4AF37] to-[#8C6216] text-black font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              <MessageCircle size={16} />
              <span>Garantir Vaga no WhatsApp</span>
            </a>
          </div>
        )}
      </header>


      {/* =========================================================================
          MAIN HERO SECTION (PRIMEIRA DOBRA MONUMENTAL & CINEMATOGRÁFICA)
          ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* ===================================================================
                COLUNA DA ESQUERDA: COPYWRITING DE ALTO IMPACTO & TIPOGRAFIA 3D
                =================================================================== */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left z-20">
              
              {/* Top Badge: Referência Nacional e Internacional */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#141212]/90 border border-[#D4AF37]/35 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] animate-ping" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#FFF3D1] uppercase">
                  ✦ Referência Nacional e Internacional em Micropigmentação
                </span>
              </div>

              {/* MONUMENTAL 3D METALLIC BRAND NAME */}
              <div className="space-y-3">
                <div className="relative inline-block">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-serif font-bold tracking-tight text-metallic-gold-3d leading-[0.98] select-none">
                    CRIS VIANNA
                  </h1>
                </div>

                {/* Glassmorphic ACADEMY Plate */}
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="px-6 py-1.5 rounded-lg bg-gradient-to-r from-[#181514]/80 via-[#221D1A]/90 to-[#181514]/80 border border-[#D4AF37]/40 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.7)] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/80" />
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.45em] uppercase text-[#FFF3D1]">
                      ACADEMY
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/80" />
                  </div>
                </div>
              </div>

              {/* HEADLINE PRINCIPAL */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-medium leading-snug max-w-2xl mx-auto lg:mx-0">
                É assim que transformamos sobrancelhas em confiança e alunas em{' '}
                <span className="italic text-[#FFF3D1] font-semibold border-b border-[#D4AF37]/50 pb-0.5">
                  profissionais de elite.
                </span>
              </h2>

              {/* SUBTÍTULO REFINADO */}
              <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Domine as técnicas mais lucrativas do mercado da estética avançada com acompanhamento lado a lado, prática real assistida e ganhe um <strong className="text-white font-semibold">Kit Profissional Completo</strong> para iniciar seus atendimentos imediatamente.
              </p>

              {/* BOTÃO CTA MAGNÉTICO (3D GLOW COM FEIXE DE LUZ) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-5 rounded-full bg-gradient-to-r from-[#FFF3D1] via-[#D4AF37] to-[#8C6216] text-black font-extrabold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] overflow-hidden"
                >
                  {/* Animated Light Sweep / Feixe de Luz Shimmer */}
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none animate-light-sweep" />

                  <span className="relative z-10 flex items-center gap-3">
                    <span>QUERO GARANTIR MINHA VAGA NA ACADEMY</span>
                    <ArrowRight size={20} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </a>
              </div>

              {/* BARRA DE CREDIBILIDADE INFERIOR (3 INDICADORES RÁPIDOS COM ÍCONES DOURADOS) */}
              <div className="pt-6 border-t border-[#262423] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                
                {/* Indicador 1 */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121010]/60 border border-[#2A2625] backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <Gift size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Kit Inicial Grátis</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Incluso no 1º Dia de Aula</p>
                  </div>
                </div>

                {/* Indicador 2 */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121010]/60 border border-[#2A2625] backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Certificado Nacional</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Válido em Todo Território</p>
                  </div>
                </div>

                {/* Indicador 3 */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121010]/60 border border-[#2A2625] backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Do Zero ao Avançado</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Prática Real em Modelos</p>
                  </div>
                </div>

              </div>

            </div>


            {/* ===================================================================
                COLUNA DA DIREITA: COMPOSIÇÃO ELEGANTE COM FOTO ESTÁTICA & BADGES
                =================================================================== */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Outer Ambient Aura Glow (Dourado Estático ao Fundo) */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#D4AF37]/25 via-[#AA7C11]/15 to-transparent blur-2xl opacity-75 pointer-events-none" />

              {/* MOLDURA ESTÁTICA, LIMPA E ELEGANTE DA PROFISSIONAL */}
              <div className="relative w-full max-w-md mx-auto rounded-3xl p-3 bg-gradient-to-b from-[#2A2625]/90 via-[#161413]/90 to-[#0C0B0A] border border-[#D4AF37]/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.15)] backdrop-blur-2xl select-none group">
                
                {/* Arched Photo Frame with Warm Studio Texture */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#1E1B1A]">
                  
                  {/* Photo of Cris Vianna with Tools & Black Gloves */}
                  <img 
                    src="/images/cris-hero-full.jpg" 
                    alt="Cris Vianna - Grand Master PhiBrows e Especialista em Micropigmentação" 
                    className="w-full h-full object-cover object-center"
                  />

                  {/* High Fashion Vignette Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-80 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/30 via-transparent to-transparent opacity-50 pointer-events-none" />

                  {/* Corner Brand Stamp on Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                    <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/40">
                      <span className="text-[10px] font-semibold text-[#FFF3D1] uppercase tracking-widest flex items-center gap-1.5">
                        <Star size={11} className="text-[#D4AF37] fill-[#D4AF37]" />
                        Grand Master Cris Vianna
                      </span>
                    </div>
                  </div>

                </div>

                {/* Decorative Chamfered Border Accent */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-lg pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr-lg pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl-lg pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-lg pointer-events-none" />

              </div>


              {/* =================================================================
                  FLOATING GLASS BADGES (CARDS DE VIDRO FLUTUANTES AO REDOR)
                  ================================================================= */}

              {/* BADGE 1: TOP / DIREITA */}
              {/* 'Anatomia • Colorimetria • Técnica • Resultados' com ícone de brilho dourado */}
              <div className="absolute -top-6 -right-2 sm:-right-8 z-30 animate-float-1 pointer-events-none">
                <div className="p-3.5 sm:p-4 rounded-2xl glass-gold-card max-w-[230px] sm:max-w-[260px] shadow-[0_15px_35px_rgba(0,0,0,0.8)] border border-[#D4AF37]/50">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <Sparkles size={14} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#FFF3D1]">
                      Pilares de Domínio
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif font-semibold text-white tracking-wide">
                    Anatomia • Colorimetria • Técnica • Resultados
                  </p>
                </div>
              </div>


              {/* BADGE 2: ESQUERDA / CENTRO */}
              {/* 'Mais que um curso, é o início da sua liberdade profissional' em fonte serifada itálica elegante */}
              <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-30 animate-float-2 pointer-events-none">
                <div className="p-4 rounded-2xl glass-gold-card max-w-[220px] sm:max-w-[250px] shadow-[0_20px_45px_rgba(0,0,0,0.85)] border border-[#D4AF37]/45">
                  <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="#D4AF37" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm font-serif italic text-[#FFF3D1] leading-relaxed">
                    “Mais que um curso, é o início da sua liberdade profissional.”
                  </p>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-2 font-medium">
                    — Cris Vianna Academy
                  </p>
                </div>
              </div>


              {/* BADGE 3: BASE / INFERIOR */}
              {/* Selo dourado 'Formação Internacional • Prática em Modelos Reais' */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-right-4 z-30 animate-float-3 pointer-events-none w-[90%] sm:w-auto">
                <div className="p-3.5 sm:p-4 rounded-2xl glass-gold-card shadow-[0_20px_40px_rgba(0,0,0,0.85)] border border-[#D4AF37]/60 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFF3D1] via-[#D4AF37] to-[#8C6216] flex items-center justify-center text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] flex-shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#D4AF37]">
                        Reconhecimento Global
                      </span>
                      <CheckCircle2 size={12} className="text-[#D4AF37]" />
                    </div>
                    <p className="text-xs sm:text-sm font-serif font-bold text-white tracking-wide">
                      Formação Internacional • Prática em Modelos Reais
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
