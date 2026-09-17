import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "De Olho no Sal — Calculadora do Dia",
  description:
    "Toque nos alimentos que você comeu em cada refeição de um dia comum e veja quanto sódio já consumiu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
