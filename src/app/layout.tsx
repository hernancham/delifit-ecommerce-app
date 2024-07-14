import type { Metadata, Viewport } from "next";
import { Inter, Quicksand, Roboto_Slab } from "next/font/google";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/context/ThemeProvider";
import { QueryProvider } from "@/components/context/QueryProvider";
import { AuthProvider } from "@/components/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delifit App",
  description: "Engriete Saludable",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={cn(
          "flex min-h-screen w-full flex-col bg-background antialiased",
          inter.className,
          quicksand.className,
          robotoSlab.className
        )}
      >
        <AuthProvider>
          <QueryProvider>
            {/* recuerda auth Provider */}
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
