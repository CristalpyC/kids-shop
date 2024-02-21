import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({ subsets: ["latin"] });

export const metadata = {
  title: "Kids zone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={arimo.className}>{children}</body>
    </html>
  );
}
