"use client";

import type { FoodItem } from "@/lib/foods";

type FoodCardProps = {
  item: FoodItem;
  qty: number;
  onChange: (delta: number) => void;
};

export default function FoodCard({ item, qty, onChange }: FoodCardProps) {
  const active = qty > 0;

  return (
    <div
      className={`flex flex-col gap-1.5 rounded-xl border-[1.5px] p-3 transition-colors duration-150 select-none ${
        active
          ? "border-coral-deep bg-coral text-white"
          : "border-line bg-white hover:border-coral"
      }`}
    >
      <div className="text-[14.5px] font-semibold leading-tight">
        {item.name}
      </div>
      <div
        className={`text-xs ${active ? "text-white/85" : "text-plum-soft"}`}
      >
        {item.mg} mg de sódio por porção
      </div>

      <div className="mt-0.5 flex items-center gap-2.5">
        <button
          type="button"
          aria-label="Diminuir"
          disabled={qty === 0}
          onClick={() => onChange(-1)}
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border-[1.5px] text-lg font-bold leading-none ${
            qty === 0 ? "pointer-events-none opacity-35" : ""
          } ${
            active
              ? "border-white/60 bg-white/15 text-white"
              : "border-line bg-white text-plum"
          } active:scale-90`}
        >
          −
        </button>
        <div className="min-w-[20px] text-center text-[15px] font-bold">
          {qty}
        </div>
        <button
          type="button"
          aria-label="Aumentar"
          onClick={() => onChange(1)}
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border-[1.5px] text-lg font-bold leading-none ${
            active
              ? "border-white/60 bg-white/15 text-white"
              : "border-line bg-white text-plum"
          } active:scale-90`}
        >
          +
        </button>
        <div className={`text-[11px] ${active ? "text-white/80" : "text-plum-soft"}`}>
          porções
        </div>
      </div>

      {active && (
        <div className="text-[11.5px] font-bold text-white">
          Total: {item.mg * qty} mg
        </div>
      )}

      {active && item.tip && (
        <div className="mt-0.5 border-t border-dashed border-white/40 pt-1 text-[11.5px] text-white">
          💡 {item.tip}
        </div>
      )}
    </div>
  );
}
