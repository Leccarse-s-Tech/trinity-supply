export interface GoogleReview {
  firstName: string;
  role?: string;
  rating: 5;
  source: 'Google Maps';
  comment: string;
}

export interface SupplyCategory {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  whatsappText: string;
  iconName: 'bread' | 'packaging' | 'cheese' | 'meat' | 'sauces' | 'frozen';
}

export interface OperationalPillar {
  number: string;
  title: string;
  description: string;
}

export const BRAND_INFO = {
  officialName: 'Trinity Supply Distribuidora De Pães e Embalagens',
  shortName: 'TRINITY SUPPLY',
  alternateName: 'Trinity Supply | Insumos para Hamburguerias',
  categoryLabel: 'Distribuidora Atacadista de Alimentos / Insumos para Hamburguerias e Food Service',
  slogan: 'Tudo para sua hamburgueria em um só lugar',
  muralQuote: 'Qualidade que impulsiona seu negócio',
  cityRegion: 'Guarulhos - SP',
  address: {
    street: 'Av. Monte Alegre, 733',
    neighborhood: 'Cidade Soberana',
    cityState: 'Guarulhos - SP',
    cep: '07161-150',
    country: 'Brasil',
    fullFormatted: 'Av. Monte Alegre, 733 - Cidade Soberana, Guarulhos - SP, 07161-150, Brasil',
  },
  coordinates: {
    lat: -23.399886,
    lng: -46.4415113,
    display: '-23.399886, -46.4415113',
  },
  localStructure:
    'Galpão com atendimento presencial, estoque a pronta entrega e recuo frontal próprio para carga e estacionamento de clientes.',
  whatsapp: {
    raw: '5511940838995',
    display: '11 94083-8995',
    formatted: '(11) 94083-8995',
    baseUrl: 'https://wa.me/5511940838995',
    heroUrl:
      'https://wa.me/5511940838995?text=Ola,%20vim%20pelo%20site%20da%20Trinity%20Supply%20e%20gostaria%20de%20conhecer%20o%20catalogo%20de%20insumos%20para%20minha%20hamburgueria.',
    catalogUrl:
      'https://wa.me/5511940838995?text=Ola,%20gostaria%20de%20consultar%20a%20lista%20de%20produtos%20e%20marcas%20disponiveis%20na%20Trinity%20Supply.',
    consultantUrl:
      'https://wa.me/5511940838995?text=Ola,%20vim%20pelo%20site%20da%20Trinity%20Supply%20e%20gostaria%20de%20falar%20com%20um%20consultor%20comercial.',
    bannerUrl:
      'https://wa.me/5511940838995?text=Ola,%20vim%20pelo%20site%20da%20Trinity%20Supply%20e%20gostaria%20de%20atendimento%20comercial%20para%20abastecer%20minha%20operacao.',
  },
  instagram: {
    handle: '@trinitysupply_oficial',
    url: 'https://www.instagram.com/trinitysupply_oficial/',
  },
  googleMaps: {
    placeUrl:
      'https://www.google.com/maps/place/Trinity+Supply+Distribuidora+De+P%C3%A3es+e+Embalagens/@-23.399886,-46.4415113,17z',
    embedUrl:
      'https://maps.google.com/maps?q=-23.399886,-46.4415113&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Linha de Insumos', href: '#insumos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Localização', href: '#localizacao' },
] as const;

export const HERO_METRICS = [
  {
    value: '+4.500',
    label: 'Seguidores e Parceiros no Instagram',
  },
  {
    value: 'Atacado e Varejo',
    label: 'Atendimento Direto e Entrega Rápida',
  },
  {
    value: 'Guarulhos / SP',
    label: 'Sede Própria com Retirada e Estacionamento em Guarulhos/SP',
  },
] as const;

export const SUPPLY_CATEGORIES: SupplyCategory[] = [
  {
    id: 'paes-profissionais',
    title: 'Pães Profissionais para Hamburgueria',
    description:
      'Linhas selecionadas de pães artesanais e industriais com maciez, estrutura e padronização para suportar molhos e blends suculentos.',
    highlights: ['Brioche, Australiano e Tradicional', 'Padronização de corte e fermentação', 'Alta resistência térmica na selagem'],
    whatsappText:
      'https://wa.me/5511940838995?text=Ola,%20gostaria%20de%20consultar%20as%20linhas%20de%20Paes%20Profissionais%20para%20Hamburgueria%20na%20Trinity%20Supply.',
    iconName: 'bread',
  },
  {
    id: 'embalagens-delivery',
    title: 'Embalagens para Delivery e Salão',
    description:
      'Caixas para hambúrguer, embalagens térmicas, sacolas kraft, papel acoplado e descartáveis que preservam a temperatura e a apresentação do lanche.',
    highlights: ['Caixas clamshell e fundo automático', 'Papel acoplado antigordura e sacolas kraft', 'Proteção térmica para transporte'],
    whatsappText:
      'https://wa.me/5511940838995?text=Ola,%20gostaria%20de%20consultar%20a%20linha%20de%20Embalagens%20para%20Delivery%20e%20Salao%20na%20Trinity%20Supply.',
    iconName: 'packaging',
  },
  {
    id: 'queijos-laticinios',
    title: 'Queijos e Laticínios Food Service',
    description:
      'Cheddar fatiado e cremoso, queijo prato, mussarela e linhas culinárias com derretimento perfeito na chapa.',
    highlights: ['Cheddar fatiado e bisnagas profissionais', 'Queijo prato e mussarela de alto rendimento', 'Estabilidade térmica para chapa e forno'],
    whatsappText:
      'https://wa.me/5511940838995?text=Ola,%20gostaria%20de%20consultar%20a%20linha%20de%20Queijos%20e%20Laticinios%20Food%20Service%20na%20Trinity%20Supply.',
    iconName: 'cheese',
  },
  {
    id: 'carnes-bacon-proteinas',
    title: 'Carnes, Bacon e Proteínas',
    description:
      'Cortes selecionados, bacon em tiras ou cubos e insumos proteicos para manter o padrão de sabor da sua operação.',
    highlights: ['Bacon fatiado padrão chapa e cubos', 'Proteínas padronizadas para food service', 'Rigoroso controle de temperatura'],
    whatsappText:
      'https://wa.me/5511940838995?text=Ola,%20gostaria%20de%20consultar%20a%20linha%20de%20Carnes,%20Bacon%20e%20Proteinas%20na%20Trinity%20Supply.',
    iconName: 'meat',
  },
  {
    id: 'molhos-condimentos',
    title: 'Molhos, Condimentos e Complementos',
    description:
      'Maioneses, catchup, mostarda, barbecue, picles e acompanhamentos em embalagens institucionais (food service) e sachês.',
    highlights: ['Bag-in-box, galões, bisnagas e sachês', 'Picles fatiado, cebola crispy e complementos', 'Marcas líderes em food service'],
    whatsappText:
      'https://wa.me/5511940838995?text=Ola,%20gostaria%20de%20consultar%20a%20linha%20de%20Molhos,%20Condimentos%20e%20Complementos%20na%20Trinity%20Supply.',
    iconName: 'sauces',
  },
  {
    id: 'congelados-acompanhamentos',
    title: 'Congelados e Acompanhamentos',
    description:
      'Batatas pré-fritas, anéis de cebola e porções congeladas de alta crocância e rendimento para fritura profissional.',
    highlights: ['Batatas crinkle, palito tradicional e rústica', 'Onion rings e porções para entrada', 'Alta crocância para operação de delivery'],
    whatsappText:
      'https://wa.me/5511940838995?text=Ola,%20gostaria%20de%20consultar%20a%20linha%20de%20Congelados%20e%20Acompanhamentos%20na%20Trinity%20Supply.',
    iconName: 'frozen',
  },
];

export const OPERATIONAL_PILLARS: OperationalPillar[] = [
  {
    number: '01',
    title: 'Atacado e Varejo',
    description:
      'Flexibilidade para atender tanto a compra programada quanto a reposição pontual da sua operação.',
  },
  {
    number: '02',
    title: 'Entrega Dentro do Prazo',
    description:
      'Logística ágil e pontual estruturada para não interromper a sua produção de hambúrgueres e lanches.',
  },
  {
    number: '03',
    title: 'Atendimento Rápido e Atencioso',
    description:
      'Equipe dedicada para orçamentos diretos no WhatsApp, com agilidade e clareza técnica.',
  },
  {
    number: '04',
    title: 'Retirada Presencial',
    description:
      'Galpão próprio em Guarulhos com fácil acesso e recuo frontal para estacionamento e carga ágil.',
  },
];

// Avaliacoes 5 estrelas legitimas do Google Maps
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    firstName: "Janaina",
    rating: 5,
    source: "Google Maps",
    comment: "Bom atendimento, vende no varejo e atacado."
  },
  {
    firstName: "Brenda",
    rating: 5,
    source: "Google Maps",
    comment: "Atendimento rapido e eficiente. Sempre muito atenciosos. Entrega sempre dentro do prazo!! Recomendo."
  },
  {
    firstName: "Pdpners",
    rating: 5,
    source: "Google Maps",
    comment: "Excelente servico, rapidez, qualidade e confiabilidade. Recomendo."
  },
  {
    firstName: "Priscila",
    rating: 5,
    source: "Google Maps",
    comment: "Produtos de qualidade e atendimento excelente."
  },
  {
    firstName: "Ketlyn",
    rating: 5,
    source: "Google Maps",
    comment: "Otimos profissionais."
  }
];

export const GOOGLE_FIVE_STAR_REVIEWS = GOOGLE_REVIEWS;
