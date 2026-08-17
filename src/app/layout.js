import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Congresso SOBEI — Em breve",
  description: "O Congresso SOBEI está chegando. Em breve, mais informações sobre o evento da Sociedade Beneficente Equilíbrio de Interlagos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: '1' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
