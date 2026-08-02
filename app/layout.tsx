import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/layout/sidebar";
import { SubmitLinkForm } from "./components/resources/submit-form";
import { Footer } from "./components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "StackShelf - Curated Collection of Resources",
    description:
        "Discover StackShelf, a handpicked collection of resources to streamline workflows, boost productivity, and empower your projects.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem>
                    {/* Viewport Height Fixed Wrapper */}
                    <div className="h-screen flex flex-col overflow-hidden bg-white dark:bg-zinc-950">
                        {/* Header Bar (shrink-0 keeps fixed height) */}
                        <header className="h-14 shrink-0 flex items-center justify-between px-3 sm:px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 z-10">
                            {/* Logo + Title + Beta Badge */}
                            <Link
                                href="/"
                                className="flex items-center gap-2.5">
                                <Image
                                    src="/stackshelf.svg"
                                    alt="StackShelf Logo"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 object-contain"
                                    priority
                                />
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">
                                        StackShelf
                                    </span>
                                    <span className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-700">
                                        Beta
                                    </span>
                                </div>
                            </Link>

                            {/* Actions */}
                            <div className="flex items-center gap-3">
                                <ThemeToggle />
                                <SubmitLinkForm />
                            </div>
                        </header>

                        <div className="flex-1 flex flex-col sm:flex-row min-h-0 overflow-hidden">
                            <Sidebar />

                            {/* Scrollable Main Area */}
                            <div className="flex-1 flex flex-col overflow-y-auto min-h-0 bg-white dark:bg-zinc-950">
                                <main className="flex-1 p-3 sm:p-6">
                                    {children}
                                </main>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
