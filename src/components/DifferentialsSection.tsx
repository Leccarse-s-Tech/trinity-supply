import React from 'react';
import { Building2, Clock, MessageSquare, Store } from 'lucide-react';
import { OPERATIONAL_PILLARS } from '../data/siteData';

const PILLAR_ICONS = [Store, Clock, MessageSquare, Building2];

export const DifferentialsSection: React.FC = () => {
  return (
    <section
      id="diferenciais"
      className="bg-[#FFFFFF] text-[#111827] py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Cabecalho da Secao */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111827] tracking-tight leading-tight">
            Qualidade que impulsiona seu negócio
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Estrutura pensada para garantir regularidade de abastecimento, agilidade logística e
            atendimento direto para hamburguerias, lanchonetes e restaurantes em Guarulhos e região.
          </p>
        </div>

        {/* Pilares em 4 Colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OPERATIONAL_PILLARS.map((pillar, index) => {
            const IconComponent = PILLAR_ICONS[index] || Store;
            return (
              <div
                key={pillar.number}
                className="relative rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] p-6 sm:p-7 flex flex-col justify-between hover:border-[#F5B014] transition-colors"
              >
                <div>
                  {/* Topo do Card: Numero em Destaque + Icone */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-2xl sm:text-3xl text-[#111315] bg-[#F5B014] px-3 py-1 rounded-lg leading-none">
                      {pillar.number}.
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#111315] text-[#F5B014] flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Titulo do Pilar */}
                  <h3 className="font-display font-bold text-lg text-[#111827] leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Descricao do Pilar */}
                  <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-semibold text-[#111827]">
                  <span>Padrão Trinity Supply</span>
                  <span className="w-2 h-2 rounded-full bg-[#F5B014]" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
