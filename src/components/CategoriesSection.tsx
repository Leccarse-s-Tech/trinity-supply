import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { CategoryVectorIcon, WhatsAppIcon } from './Icons';
import { BRAND_INFO, SUPPLY_CATEGORIES } from '../data/siteData';

export const CategoriesSection: React.FC = () => {
  return (
    <section
      id="insumos"
      className="bg-[#F8F9FA] text-[#111827] py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* 1. Cabecalho da Secao */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B88208] mb-2.5">
            PORTFÓLIO DE ABASTECIMENTO B2B
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111827] tracking-tight leading-tight">
            Tudo para sua hamburgueria em um único fornecedor
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Centralize suas compras com padronização de qualidade e regularidade de estoque.
            Trabalhamos com as principais linhas de insumos secos, refrigerados, congelados e
            embalagens.
          </p>
        </div>

        {/* 2. Grid de Categorias (6 Cards Brancos #FFFFFF com borda #E5E7EB e icone vetorial em preto e amarelo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPLY_CATEGORIES.map((category) => (
            <article
              key={category.id}
              className="group bg-[#FFFFFF] rounded-2xl border border-[#E5E7EB] hover:border-[#F5B014] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-[0_2px_10px_rgba(17,24,39,0.03)] hover:shadow-[0_12px_30px_rgba(17,24,39,0.07)]"
            >
              <div>
                {/* Icone Vetorial Minimalista em Preto e Amarelo */}
                <div className="w-14 h-14 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] group-hover:border-[#F5B014]/60 flex items-center justify-center mb-5 transition-colors">
                  <CategoryVectorIcon type={category.iconName} className="w-9 h-9" />
                </div>

                {/* Titulo da Categoria */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#111827] leading-snug">
                  {category.title}
                </h3>

                {/* Descricao Tecnica */}
                <p className="mt-2.5 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {category.description}
                </p>

                {/* Destaques Operacionais */}
                <ul className="mt-4 pt-4 border-t border-[#E5E7EB] space-y-2">
                  {category.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#111827] font-medium">
                      <Check className="w-4 h-4 text-[#B88208] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link Direto de Consulta B2B via WhatsApp para a Linha */}
              <div className="mt-6 pt-3 border-t border-[#F8F9FA]">
                <a
                  href={category.whatsappText}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#111315] hover:text-[#B88208] transition-colors"
                >
                  <span>Consultar linha via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F5B014]" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* 3. Observacao Comercial Abaixo do Grid (Consulta Direta B2B) */}
        <div
          className="mt-10 sm:mt-12 bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[0_4px_20px_rgba(17,24,39,0.04)]"
          style={{ borderLeft: '4px solid #F5B014' }}
        >
          <div className="space-y-1.5 max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#B88208]">
              Atendimento Comercial Atacadista e Food Service
            </span>
            <p className="text-base sm:text-lg font-bold text-[#111827] leading-snug">
              Deseja consultar a disponibilidade de marcas e condições comerciais para o seu CNPJ ou
              operação?
            </p>
          </div>

          <a
            href={BRAND_INFO.whatsapp.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#F5B014] hover:bg-[#D99B0E] active:scale-[0.98] text-[#111315] font-bold text-sm sm:text-base transition-all shadow-[0_4px_14px_rgba(245,176,20,0.28)] whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Consultar Catálogo no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
