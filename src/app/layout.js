import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import FloatingSocialIcons from "@/components/ui/FloatingSocialIcons";
import { Inter, Poppins, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${inter.variable} ${poppins.variable} ${sourceSerif.variable} `}>
      <body>
        <Header />
        <main className="page-main">{children}</main>
        <Footer />
        <FloatingSocialIcons />
      </body>
    </html>
  );
}
