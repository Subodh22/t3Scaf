import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";

export const metadata = {
  title: "t3scaf",
  description: "scaffer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

 





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider> 
    <html lang="en" className={`flex flex-col gap-4 ${GeistSans.variable} `}>
      
      <body>
      <TopNav/>
        {children}</body>
    </html></ClerkProvider>
  );
}
