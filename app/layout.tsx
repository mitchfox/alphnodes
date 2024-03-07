import "./css/style.css";

import { Inter, Inter_Tight } from "next/font/google";
import Theme from "./theme-provider";
// import { WalletConfigProvider } from './path/to/WalletConfigProvider';
import AlephiumWalletProvider from "@alephium/web3-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inter_tight = Inter_Tight({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata = {
  title: "AlphWiki",
  description: "Embark on your Alephium journey today. Access the tools, insights, and community support to unlock the full potential of your blockchain endeavors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
     

      <body
        className={`${inter.variable} ${inter_tight.variable} font-inter antialiased bg-cyan-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 tracking-tight`}
      >
        {/* <AlephiumWalletProvider useTheme="win95"> */}
          <Theme>
            <div className="relative flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
              {children}
            </div>
          </Theme>
        {/* </AlephiumWalletProvider> */}
      </body>
      
    </html>
  );
}
