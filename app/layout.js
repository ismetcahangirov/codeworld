import { Yatra_One, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const yatra = Yatra_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yatra",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Code World",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${yatra.variable} ${poppins.variable} ${openSans.variable}`}
    >
      <body className="antialiased font-poppins" suppressHydrationWarning>{children}</body>
    </html>
  );
}
