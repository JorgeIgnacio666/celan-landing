"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  Clock, 
  Globe, 
  User, 
  Star, 
  BookOpen, 
  Award, 
  ArrowRight,
  PlayCircle,
  BarChart3,
  Stethoscope,
  ShieldCheck,
  Video,
  Layers,
  Zap,
  Timer
} from "lucide-react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const modules = [
    {
      id: 1,
      title: "Módulo 1. Tamización, evaluación e intervención nutricional",
      description: "Herramientas de tamización y evaluación nutricional en diferentes grupos poblacionales y criterios GLIM para diagnóstico nutricional.",
      duration: "5 HORAS ACADÉMICAS",
    },
    {
      id: 2,
      title: "Módulo 2. ABC del soporte enteral",
      description: "Indicaciones, vías de acceso, cuidado de sondas y manejo de complicaciones comunes en nutrición enteral.",
      duration: "5 HORAS ACADÉMICAS",
    },
    {
      id: 3,
      title: "Módulo 3. Alimentos para propósitos médicos especiales (APME)",
      description: "Selección del APME acorde a requerimientos específicos y condición clínica del paciente.",
      duration: "5 HORAS ACADÉMICAS",
    },
    {
      id: 4,
      title: "Módulo 4. ABC del soporte parenteral",
      description: "Generalidades de nutrición parenteral, vías de acceso, administración y cálculo paso a paso para soporte seguro.",
      duration: "5 HORAS ACADÉMICAS",
    },
    {
      id: 5,
      title: "Módulo 5. Uso de medicamentos en nutrición enteral por sonda",
      description: "Técnica adecuada, efectos secundarios e interacción entre fármacos y nutrientes en administración por sonda.",
      duration: "5 HORAS ACADÉMICAS",
    }
  ];

  return (
    <div className="min-h-screen bg-background text-secondary font-inter antialiased">
      {/* Top Countdown Banner - Más compacto en móvil */}
      <div className="bg-secondary text-white py-2 px-4 text-center border-b border-white/10 z-[60] sticky top-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <Timer size={12} className="text-primary animate-pulse" />
                La inscripción cierra en:
            </span>
            <div className="flex items-center gap-3 font-roboto font-black text-base md:text-xl text-primary tracking-tighter">
                <div className="flex items-center gap-1">
                    <span>{String(timeLeft.hours).padStart(2, '0')}</span><span className="text-[8px] text-white/40 uppercase">h</span>
                </div>
                <span className="text-white/20">:</span>
                <div className="flex items-center gap-1">
                    <span>{String(timeLeft.minutes).padStart(2, '0')}</span><span className="text-[8px] text-white/40 uppercase">m</span>
                </div>
                <span className="text-white/20">:</span>
                <div className="flex items-center gap-1">
                    <span>{String(timeLeft.seconds).padStart(2, '0')}</span><span className="text-[8px] text-white/40 uppercase">s</span>
                </div>
            </div>
        </div>
      </div>

      {/* Navbar Minimalista */}
      <nav className="border-b border-border/50 bg-white/90 backdrop-blur-md sticky top-[48px] md:top-[52px] z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center font-black text-white text-xs md:text-base">C</div>
            <span className="font-roboto font-black text-lg md:text-xl tracking-tight uppercase">CELAN</span>
          </div>
          <button className="bg-primary text-white px-4 md:px-5 py-2 rounded-lg text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black hover:opacity-90 transition-all">
            Ingresar
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Contenido Izquierdo */}
          <div className="flex-1 order-1">
            {/* Header del Curso */}
            <div className="mb-8 md:mb-12">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Stethoscope size={20} className="md:w-6 md:h-6" />
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.3em]">Programa Avanzado</span>
                </div>
                
                <h1 className="font-roboto font-black text-3xl sm:text-4xl md:text-6xl text-secondary leading-[1.1] md:leading-[0.95] tracking-tight uppercase mb-6 md:mb-8">
                    Aspectos Básicos del <br className="hidden md:block" /> Soporte Nutricional
                </h1>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 md:mb-10">
                    <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" className="md:w-4 md:h-4" />
                        ))}
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-secondary uppercase tracking-widest bg-secondary/5 px-3 py-1 rounded-full">4.9 / 5.0</span>
                    <span className="text-[10px] md:text-xs font-black text-secondary/40 uppercase tracking-widest hidden sm:block">Matrícula Abierta 2026</span>
                </div>

                <p className="text-base md:text-xl text-secondary/60 leading-relaxed max-w-2xl font-medium">
                    Obtén las competencias necesarias para el manejo terapéutico del paciente bajo soporte nutricional enteral y parenteral, basado en la evidencia científica del Centro Latinoamericano de Nutrición.
                </p>
            </div>

            {/* Temario Curricular */}
            <div className="mt-12 md:mt-24">
                <div className="flex items-center gap-4 mb-8 md:mb-12">
                    <BookOpen className="text-primary md:w-6 md:h-6" size={20} />
                    <h2 className="font-roboto font-black text-xl md:text-3xl text-secondary uppercase tracking-tighter">Contenido del curso</h2>
                </div>

                <div className="space-y-4 md:space-y-6 relative ml-3 md:ml-4">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border/50" />
                    
                    {modules.map((module) => (
                      <div key={module.id} className="relative pl-8 md:pl-12 group">
                        <div className="absolute left-[-4px] md:left-[-6px] top-6 w-2 md:w-3 h-2 md:h-3 rounded-full border-2 border-primary bg-white group-hover:bg-primary transition-all shadow-[0_0_10px_rgba(114,176,86,0.3)]" />
                        
                        <div className="bg-white border md:border-2 border-border/50 rounded-2xl md:rounded-[32px] p-6 md:p-10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 cursor-pointer">
                            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-8">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary/20 group-hover:text-primary/40 transition-colors shrink-0">
                                    <Video size={24} className="md:w-8 md:h-8" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-roboto font-black text-base md:text-lg text-secondary group-hover:text-primary transition-colors uppercase leading-tight mb-2">
                                    {module.title}
                                  </h4>
                                  <p className="text-sm md:text-base text-secondary/60 mb-4 font-medium leading-relaxed">
                                    {module.description}
                                  </p>
                                  <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2">
                                       <Clock size={12} /> 5 HORAS ACADÉMICAS
                                    </span>
                                  </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <aside className="w-full lg:w-[400px] order-2">
            <div className="lg:sticky lg:top-32">
                <div className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl shadow-secondary/5 border border-border/50">
                    {/* Imagen Hero - Más compacta en móvil */}
                    <div className="relative aspect-video lg:aspect-square group overflow-hidden">
                        <Image 
                            src="/hero-nutrition.png" 
                            alt="Soporte Nutricional" 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-all flex items-center justify-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                                <PlayCircle size={32} className="md:w-10 md:h-10 ml-1" />
                            </div>
                        </div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2 shadow-sm border border-border">
                            <Zap size={10} className="text-primary" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-secondary">Acceso Inmediato</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-10 border-t border-border">
                        <div className="flex items-center gap-2 text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 md:mb-6">
                            <CheckCircle2 size={14} />
                            Inscripción Garantizada
                        </div>
                        
                        <div className="mb-8 md:mb-10">
                            <div className="flex items-baseline gap-3 mb-1">
                                <span className="font-roboto font-black text-4xl md:text-6xl text-secondary">$80</span>
                                <span className="text-xl md:text-2xl font-black text-secondary/30 uppercase tracking-tighter">USD</span>
                            </div>
                            <span className="text-[9px] md:text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em]">ACCESO TOTAL E INMEDIATO</span>
                        </div>

                        <button className="w-full bg-primary text-white font-black py-4 md:py-5 rounded-2xl text-xs md:text-sm uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mb-4 md:mb-6">
                            INSCRIBIRME AHORA
                        </button>
                        
                        <p className="text-center text-[9px] font-black text-secondary/30 uppercase tracking-widest mb-8 md:mb-10">
                            SIN CONTRASEÑA • CERTIFICADO DIGITAL CELAN
                        </p>

                        <div className="space-y-4 md:space-y-6 pt-8 md:pt-10 border-t border-border/50">
                            {[
                                { icon: <Clock size={16} />, label: "6 Semanas de tutoría" },
                                { icon: <BarChart3 size={16} />, label: "25 Horas académicas" },
                                { icon: <Globe size={16} />, label: "Modalidad 100% virtual" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 text-secondary/60">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Info Cohorte - Separado para destacar */}
                <div className="mt-4 md:mt-6 bg-[#72b056]/5 border border-primary/20 rounded-[24px] md:rounded-[32px] p-6 md:p-8 text-center">
                    <span className="block text-[9px] md:text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2 md:mb-3">Próximo Cohorte</span>
                    <span className="block font-roboto font-black text-lg md:text-2xl text-secondary uppercase tracking-tight">19 de Mayo, 2026</span>
                </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer Minimalista con Enfoque en Conversión */}
      <footer className="bg-white border-t border-border py-16 md:py-32 mt-16 md:mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <h5 className="font-roboto font-black text-xl md:text-3xl text-secondary mb-4 md:mb-6 uppercase tracking-tight">
                ¿Tienes dudas o necesitas apoyo con tu inscripción?
            </h5>
            <p className="text-sm md:text-base text-secondary/50 font-medium mb-8 md:mb-10 max-w-lg mx-auto">
                Nuestro equipo académico está disponible para asistirte en todo el proceso de registro y pago. 
            </p>
            
            <a 
                href="https://wa.me/tu-numero-aqui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-[#25D366] text-white font-black px-8 md:px-10 py-4 md:py-5 rounded-2xl shadow-lg hover:scale-105 transition-all text-xs md:text-sm uppercase tracking-[0.2em]"
            >
                <Globe size={18} />
                Contactar por WhatsApp
            </a>

            <div className="mt-16 md:mt-32 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] font-black text-secondary/20 uppercase tracking-[0.3em]">
                <span>© 2026 CELAN ACADEMY</span>
                <span>EDUCACIÓN BASADA EN EVIDENCIA</span>
            </div>
        </div>
      </footer>
    </div>
  );
}
