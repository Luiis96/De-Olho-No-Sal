# De Olho no Sal — Calculadora do Dia

Projeto Next.js (App Router) + TypeScript + Tailwind CSS, convertido a partir
do arquivo `Calculadora_De_Olho_no_Sal.html` original.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000 no navegador.

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
app/
  layout.tsx        # layout raiz (fonte, metadata)
  page.tsx           # página inicial, renderiza o SaltCalculator
  globals.css         # diretivas do Tailwind + estilos globais
components/
  SaltCalculator.tsx # componente principal (estado, cálculo de sódio/sal)
  FoodCard.tsx        # card de alimento com stepper de porções
  JarSvg.tsx           # ilustração SVG do "pote" que enche
lib/
  foods.ts             # dados das categorias/alimentos e limite diário (OMS)
tailwind.config.ts     # paleta de cores e tipografia originais mapeadas como tokens
```

## O que foi convertido

- O HTML/CSS/JS único do arquivo original virou componentes React com estado
  via `useState`/`useMemo`, em vez de manipulação direta do DOM.
- Todas as cores, espaçamentos e tipografia da versão original (`--coral`,
  `--plum`, `--cream`, etc.) foram migrados para o `tailwind.config.ts` como
  tokens de tema (`coral`, `plum`, `cream`, `green`, `amber`, `red`, `line`).
- A lista de alimentos e seus valores de sódio (incluindo as dicas de troca)
  foi extraída para `lib/foods.ts`, tipada com TypeScript.
- O SVG do "pote" que enche de acordo com o percentual do limite diário virou
  o componente `JarSvg`, recebendo `pct` e `color` como props.
- O botão "Recomeçar" limpa o estado de todas as porções selecionadas.

## Observações

Não foi possível rodar `npm install` neste ambiente (sem acesso à rede), mas
o código foi revisado cuidadosamente. Ao rodar `npm install` localmente, tudo
deve funcionar normalmente com Next.js 14 + Tailwind 3.
