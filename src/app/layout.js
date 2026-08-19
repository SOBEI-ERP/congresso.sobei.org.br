import "./globals.css";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
  variable: "--font-serif",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-script",
});

export const metadata = {
  title: "XX Congresso de Educação Infantil SOBEI - 20 Anos",
  description: "20 Anos de Congresso de Educação Infantil SOBEI — Cuidar, acolher e incluir: construindo vínculos na primeiríssima infância. Celebrando histórias, inspirando futuros!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <body style={{ minHeight: '100vh', margin: 0, padding: 0, overflowX: 'hidden' }}>
        <main style={{ width: '100%' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
