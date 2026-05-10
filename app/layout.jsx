import { Lora, Nunito } from "next/font/google";
import "./globals.css";
import FloatingIcon from "@/components/FloatingIcon";
import WhatsAppButton from "@/components/WhatsAppButton";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Fewzan Homecare",
  description: "Hospital level care at the comfort of your home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${nunito.variable} antialiased`}
      >
             <div className="pt-28">

        {children}
        <WhatsAppButton/>
             </div>
      
      </body>
    </html>
  );
}
