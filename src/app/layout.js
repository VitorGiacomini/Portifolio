// src/app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Meu Portfólio",
  description: "Portfólio de projetos desenvolvidos em Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}