import type { Metadata } from "next";
import "./globals.scss";
import { Montserrat } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedNews",
  description: "Новости медицины",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <div className="container">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
