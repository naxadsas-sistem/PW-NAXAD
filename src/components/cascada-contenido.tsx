'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

export interface ContentItem {
  id: number;
  type: 'video' | 'article' | 'demo';
  title: string;
  description: string;
  image: string;
  logo: string;
  duration?: string;
  readTime?: string;
  cta: string;
  href?: string;
}

const contentItems: ContentItem[] = [
  {
    id: 1,
    type: 'video',
    title: 'Caso DentalDesk: De planillas a sistema en producción',
    description: 'Cómo el Centro Odontológico Belgrano redujo 14 horas semanales de carga manual y eliminó errores de facturación.',
    image: '/images/case-dentaldesk.jpg',
    logo: 'DentalDesk',
    duration: '12 min',
    cta: 'Ver caso de éxito',
    href: '/#ecosistema',
  },
  {
    id: 2,
    type: 'article',
    title: 'El costo oculto de la gestión informal',
    description: 'Análisis: ¿Cuánto le cuesta realmente a tu PyME depender de planillas Excel y WhatsApp para operar?',
    image: '/images/article-costos.jpg',
    logo: 'Naxad Insights',
    readTime: '8 min lectura',
    cta: 'Leer artículo',
    href: '/contacto',
  },
  {
    id: 3,
    type: 'demo',
    title: 'Pharmalyze AI: Control de stock con IA',
    description: 'Demo en vivo del monitor FEFO que previene vencimientos y optimiza compras en farmacias.',
    image: '/images/demo-pharmalyze.jpg',
    logo: 'Pharmalyze AI',
    duration: '5 min',
    cta: 'Ver demo',
    href: '/#ecosistema',
  },
  {
    id: 4,
    type: 'video',
    title: 'De la administración al código: Nuestro enfoque',
    description: 'El equipo de dirección de NAXAD explica por qué cada sistema empieza por entender el negocio, no por escribir código.',
    image: '/images/video-fundador.jpg',
    logo: 'NAXAD',
    duration: '15 min',
    cta: 'Ver video',
    href: '/nosotros',
  },
];

export function CascadaContenido() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      
      // Actualizar índice actual
      const newIndex = direction === 'left' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(contentItems.length - 1, currentIndex + 1);
      setCurrentIndex(newIndex);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const itemWidth = 420;
      const index = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(Math.min(contentItems.length - 1, Math.max(0, index)));
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden border-t border-slate-200/80">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white pointer-events-none" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Recursos & Casos Reales
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Contenido y casos de éxito
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Historias reales de empresas que transformaron su operación con NAXAD.
            </p>
          </div>
          
          {/* Controles de navegación */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => scroll('left')}
              disabled={currentIndex === 0}
              className="p-3 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-2xs"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={currentIndex === contentItems.length - 1}
              className="p-3 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-2xs"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CASCADA DE TARJETAS (Scroll Horizontal) */}
        <div className="relative">
          {/* Gradientes laterales para indicar scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          
          {/* Contenedor scrollable */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {contentItems.map((item) => (
              <article
                key={item.id}
                className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] snap-start group"
              >
                <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 hover:border-blue-200 transition-all duration-300 h-full flex flex-col">
                  
                  {/* Imagen con overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10 pointer-events-none" />
                    
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 450px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge de tipo */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                        {item.type === 'video' && '🎬 Video'}
                        {item.type === 'article' && '📄 Artículo'}
                        {item.type === 'demo' && '🎥 Demo'}
                      </span>
                      {item.duration && (
                        <span className="px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-xs font-semibold text-white">
                          {item.duration}
                        </span>
                      )}
                      {item.readTime && (
                        <span className="px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-xs font-semibold text-white">
                          {item.readTime}
                        </span>
                      )}
                    </div>
                    
                    {/* Logo de la solución */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="text-white font-bold text-lg drop-shadow-md">
                        {item.logo}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3 flex-1 text-sm sm:text-base">
                      {item.description}
                    </p>

                    {/* CTA */}
                    <Link
                      href={item.href || `/contenido/${item.id}`}
                      className="inline-flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link mt-auto w-fit text-sm sm:text-base"
                    >
                      {item.cta}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Indicador de play (solo para videos) */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle className="w-8 h-8 text-blue-600 ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Indicadores de progreso */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollRef.current?.scrollTo({
                    left: index * 420,
                    behavior: 'smooth',
                  });
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-blue-600'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir al item ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default CascadaContenido;
