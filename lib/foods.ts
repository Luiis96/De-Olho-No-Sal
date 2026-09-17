export type FoodItem = {
  name: string;
  mg: number;
  tip?: string;
};

export type FoodCategory = {
  name: string;
  items: FoodItem[];
};

export const DAILY_LIMIT_MG = 2000;

export const foodData: FoodCategory[] = [
  {
    name: "Café da manhã",
    items: [
      { name: "Pão francês (1 unid.)", mg: 290 },
      { name: "Pão de forma (2 fatias)", mg: 230 },
      { name: "Margarina (1 col. chá)", mg: 45 },
      {
        name: "Presunto (2 fatias)",
        mg: 370,
        tip: "Troque por ovo ou frango desfiado",
      },
      { name: "Queijo (2 fatias)", mg: 320 },
      {
        name: "Sardinha em lata (1 porção)",
        mg: 420,
        tip: "Prefira peixe fresco assado",
      },
      { name: "Requeijão (1 col. sopa)", mg: 130 },
      { name: "Bolacha água e sal (5 unid.)", mg: 130 },
      { name: "Leite em pó (1 copo)", mg: 65 },
      { name: "Cereal matinal açucarado", mg: 150 },
      { name: "Fruta (banana, mamão...)", mg: 2 },
      { name: "Café com leite", mg: 5 },
      { name: "Tapioca simples", mg: 5 },
    ],
  },
  {
    name: "Almoço",
    items: [
      {
        name: "Arroz e feijão com tempero pronto",
        mg: 800,
        tip: "Troque por tempero caseiro",
      },
      { name: "Arroz e feijão caseiros (sem tempero pronto)", mg: 15 },
      { name: "Bife grelhado com sal", mg: 300 },
      {
        name: "Carne seca / charque (porção)",
        mg: 2000,
        tip: "Dessalgue bem antes de cozinhar ou prefira carne fresca",
      },
      {
        name: "Linguiça calabresa (porção)",
        mg: 800,
        tip: "Troque por frango grelhado",
      },
      {
        name: "Bacon (porção)",
        mg: 450,
        tip: "Troque por carne fresca grelhada",
      },
      {
        name: "Feijoada (porção, com carnes salgadas)",
        mg: 1200,
        tip: "Reduza as carnes salgadas ou dessalgue antes",
      },
      {
        name: "Macarrão com molho de tomate industrializado",
        mg: 500,
        tip: "Troque por molho de tomate fresco",
      },
      { name: "Coxinha (salgado de padaria)", mg: 380 },
      { name: "Batata frita de pacote", mg: 400 },
      { name: "Farofa pronta temperada", mg: 350 },
      { name: "Salada crua", mg: 50 },
      { name: "Refrigerante", mg: 30 },
      { name: "Suco natural", mg: 5 },
    ],
  },
  {
    name: "Lanche da tarde",
    items: [
      {
        name: "Miojo (pacote inteiro)",
        mg: 1607,
        tip: "Troque por macarrão com legumes",
      },
      {
        name: "Sopa de pacote (creme instantâneo)",
        mg: 900,
        tip: "Troque por sopa caseira de legumes",
      },
      { name: "Cream cracker (6 unidades)", mg: 260 },
      {
        name: "Salgadinho de pacote",
        mg: 400,
        tip: "Troque por pipoca caseira",
      },
      { name: "Pastel de feira (1 unid.)", mg: 350 },
      { name: "Biscoito recheado (pacotinho)", mg: 110 },
      { name: "Pão de queijo (2 unid.)", mg: 200 },
      { name: "Suco de caixinha", mg: 15 },
      { name: "Iogurte natural", mg: 60 },
      { name: "Barra de cereal", mg: 80 },
      { name: "Fruta", mg: 2 },
    ],
  },
  {
    name: "Jantar",
    items: [
      {
        name: "Sopa com 1 cubo de caldo",
        mg: 1400,
        tip: "Troque por tempero caseiro congelado",
      },
      {
        name: "Marmita (arroz, feijão, carne salgada e farofa)",
        mg: 1000,
        tip: "Peça pouco sal e menos farofa",
      },
      {
        name: "Pão com mortadela",
        mg: 690,
        tip: "Prefira peito de peru ou queijo branco",
      },
      { name: "Pizza (2 fatias)", mg: 1200 },
      { name: "Sanduíche / lanche natural", mg: 700 },
      {
        name: "Carne de panela com tempero pronto",
        mg: 600,
        tip: "Tempero caseiro reduz muito o sódio",
      },
      { name: "Frango grelhado", mg: 250 },
      { name: "Canja de galinha caseira", mg: 200 },
      { name: "Omelete simples", mg: 200 },
      { name: "Arroz e feijão caseiros", mg: 15 },
      { name: "Salada", mg: 50 },
    ],
  },
];
