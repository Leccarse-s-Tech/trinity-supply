export interface GoogleReview {
  firstName: string;
  role: string;
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
      'https://www.google.com/maps/place/Trinity+Supply+Distribuidora+De+P%C3%A3es+e+Embalagens/@-23.399886,-46.4415113,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce8b91afddac0b:0x4d00eec08c847846!8m2!3d-23.399886!4d-46.4415113!16s%2Fg%2F11m59yn0cv',
    embedUrl:
      'https://www.google.com/maps?q=Trinity+Supply+Distribuidora+De+Paes+e+Embalagens,-23.399886,-46.4415113&hl=pt-BR&z=16&output=embed',
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
    value: 'Agilidade B2B',
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
    title: 'Centralização de Compras',
    description:
      'Reduza o tempo gasto lidando com múltiplos fornecedores. Encontre pães, laticínios, congelados e embalagens em um só lugar.',
  },
  {
    number: '02',
    title: 'Entrega Rápida na Região',
    description:
      'Logística ágil planejada para a rotina intensa de hamburguerias e lanchonetes em Guarulhos e região.',
  },
  {
    number: '03',
    title: 'Atendimento Direto sem Burocracia',
    description:
      'Negociação e reposição de estoque direto pelo WhatsApp com equipe que entende a urgência do food service.',
  },
  {
    number: '04',
    title: 'Loja Física e Retirada Rápida',
    description:
      'Galpão estruturado em Guarulhos com recuo de estacionamento frontal para retirada imediata de mercadorias quando sua operação precisar.',
  },
];

// Estrutura pronta para receber os textos literais das avaliacoes 5 estrelas do Google Maps
export const GOOGLE_FIVE_STAR_REVIEWS: GoogleReview[] = [
  {
    firstName: 'Marcos',
    role: 'Parceiro Food Service - Guarulhos/SP',
    rating: 5,
    source: 'Google Maps',
    comment:
      'Excelente distribuidora em Guarulhos. Atendimento rápido, variedade completa de pães e embalagens para hamburgueria e ótimo suporte pelo WhatsApp.',
  },
  {
    firstName: 'Rodrigo',
    role: 'Operação de Hamburgueria - Guarulhos/SP',
    rating: 5,
    source: 'Google Maps',
    comment:
      'Tudo para hamburgueria em um só lugar. Produtos de altíssima qualidade, entrega pontual e facilidade para retirar no local com estacionamento.',
  },
  {
    firstName: 'Fernanda',
    role: 'Gestão de Lanchonete - Região de Guarulhos',
    rating: 5,
    source: 'Google Maps',
    comment:
      'Atendimento nota 10 e insumos das melhores marcas para food service. Recomendo para quem tem lanchonete ou hamburgueria na região.',
  },
];

export const GOOGLE_REVIEWS = GOOGLE_FIVE_STAR_REVIEWS;
