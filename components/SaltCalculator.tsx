"use client";

import { useMemo, useState } from "react";
import { foodData, DAILY_LIMIT_MG } from "@/lib/foods";
import FoodCard from "./FoodCard";
import JarSvg from "./JarSvg";

function formatPtBr(n: number, decimals = 0) {
  return n.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function SaltCalculator() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const changeQty = (id: string, delta: number) => {
    setQty((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, Math.min(9, current + delta));
      return { ...prev, [id]: next };
    });
  };

  const resetAll = () => setQty({});

  const totalMg = useMemo(() => {
    let total = 0;
    foodData.forEach((cat, ci) => {
      cat.items.forEach((item, ii) => {
        const id = `${ci}-${ii}`;
        total += item.mg * (qty[id] || 0);
      });
    });
    return total;
  }, [qty]);

  const saltG = (totalMg * 2.5) / 1000;
  const spoons = saltG / 5;
  const pct = (totalMg / DAILY_LIMIT_MG) * 100;

  let color = "#3F8A5B";
  let msgClass = "bg-green-bg text-green";
  let msg = "Comece selecionando o que você comeu hoje.";

  if (totalMg > 0 && pct < 60) {
    msg = "Você está dentro do recomendado. Continue de olho no sal!";
  } else if (pct >= 60 && pct < 100) {
    color = "#D89A1E";
    msgClass = "bg-amber-bg text-amber-text";
    msg = "Atenção: você já está perto do limite diário de sódio.";
  } else if (pct >= 100 && pct < 150) {
    color = "#C4392B";
    msgClass = "bg-red-bg text-red";
    msg =
      "Você ultrapassou o limite diário de sódio recomendado pela OMS (2.000mg).";
  } else if (pct >= 150) {
    color = "#C4392B";
    msgClass = "bg-red-bg text-red";
    msg =
      "Isso está bem acima do recomendado. Pequenas trocas ao longo do dia fazem grande diferença!";
  }

  return (
    <div className="mx-auto max-w-[1180px] px-5 pb-[60px] pt-[22px]">
      <header className="mb-[22px] flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-[.14em] text-coral-deep">
          De Olho no Sal
        </span>
        <h1 className="mb-1 mt-0.5 font-serif text-[clamp(28px,4vw,40px)] leading-[1.05] text-plum">
          Quanto sódio você já comeu hoje?
        </h1>
        <p className="max-w-[640px] text-[15px] text-plum-soft">
          Toque nos alimentos que você comeu em cada refeição de um dia comum. O
          pote ao lado enche conforme o sódio se acumula — o limite recomendado
          pela OMS é 2.000mg (5g de sal) por dia.
        </p>
      </header>

      <div className="grid grid-cols-1 items-start gap-[26px] md:grid-cols-[1fr_340px]">
        <div>
          {foodData.map((cat, ci) => (
            <div className="mb-[22px]" key={cat.name}>
              <div className="mb-2.5 flex items-baseline gap-2 border-b-2 border-line pb-1.5 font-serif text-[19px] text-coral-deep">
                <span className="text-xs font-bold text-plum-soft">
                  0{ci + 1}
                </span>
                {cat.name}
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2.5">
                {cat.items.map((item, ii) => {
                  const id = `${ci}-${ii}`;
                  return (
                    <FoodCard
                      key={id}
                      item={item}
                      qty={qty[id] || 0}
                      onChange={(delta) => changeQty(id, delta)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="sticky top-5 z-10 order-first rounded-[18px] border-[1.5px] border-line bg-white shadow-summary md:static md:order-none">
          {/* Botão de toggle — aparece só no mobile */}
          <button
            type="button"
            onClick={() => setIsSummaryOpen((prev) => !prev)}
            aria-expanded={isSummaryOpen}
            className="flex w-full items-center justify-between p-4 md:hidden"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-plum">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: color }}
              />
              Resumo: {Math.round(pct)}% do limite
            </span>
            <svg
              className={`h-5 w-5 text-plum-soft transition-transform duration-200 ${
                isSummaryOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M6 9l6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Conteúdo: colapsável no mobile, sempre visível no desktop */}
          <div
            className={`overflow-hidden px-5 transition-[max-height] duration-300 ease-in-out md:!max-h-none md:overflow-visible md:pt-5 ${
              isSummaryOpen ? "max-h-[1200px] pb-5" : "max-h-0"
            }`}
          >
            <div className="flex items-center justify-center py-1.5 pb-2.5">
              <JarSvg pct={pct} color={color} />
            </div>
            <div className="mb-2.5 text-center text-[11.5px] uppercase tracking-[.06em] text-plum-soft">
              do limite diário
            </div>
            <div
              className="mt-1 text-center font-serif text-[38px] font-bold leading-none transition-colors duration-300"
              style={{ color }}
            >
              {Math.round(pct)}%
            </div>

            <div className="flex justify-between border-b border-line py-[7px] text-[13.5px]">
              <span className="text-plum-soft">Sódio total</span>
              <span className="font-bold">{formatPtBr(totalMg)} mg</span>
            </div>
            <div className="flex justify-between border-b border-line py-[7px] text-[13.5px]">
              <span className="text-plum-soft">Sal equivalente</span>
              <span className="font-bold">{formatPtBr(saltG, 1)} g</span>
            </div>
            <div className="flex justify-between py-[7px] text-[13.5px]">
              <span className="text-plum-soft">Colheres de chá de sal</span>
              <span className="font-bold">{formatPtBr(spoons, 1)}</span>
            </div>

            <div
              className={`mt-3 rounded-xl p-3 text-[13px] font-semibold leading-snug ${msgClass}`}
            >
              {msg}
            </div>

            <button
              type="button"
              onClick={resetAll}
              className="mt-3.5 w-full rounded-[10px] bg-plum p-3 text-sm font-bold tracking-[.02em] text-white active:scale-[.98]"
            >
              Recomeçar (próxima pessoa)
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-line pt-3 text-[11.5px] leading-relaxed text-plum-soft">
        Limite diário: OMS recomenda até 2.000mg de sódio (5g de sal) por dia.
        Valores de sódio são médias de referência de porções comuns e rótulos de
        fabricantes — servem para fins educativos desta atividade.
      </div>
    </div>
  );
}
