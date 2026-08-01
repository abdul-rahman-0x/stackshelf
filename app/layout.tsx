import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/layout/sidebar";
import { SubmitLinkForm } from "./components/resources/submit-form";
import Image from "next/image";

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
        <html lang="en">
            <body
                className={`${inter.className} antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100`}>
                <div className="h-screen overflow-hidden">
                    {/* Header */}
                    <header className="flex items-center justify-between px-2 sm:px-6 h-14 border-b border-zinc-200 dark:border-zinc-800">
                        {/* Logo + Beta Badge */}
                        <div className="flex items-center gap-2 relative">
                            <Image
                                src="/stackshelf.svg"
                                alt="StackShelf Logo"
                                width={20}
                                height={20}
                                className="w-5 h-5"
                                priority
                            />
                            <span className="font-semibold text-sm">
                                StackShelf
                            </span>
                            <span className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2 py-px rounded-xl absolute -top-1 -right-10 border border-zinc-200 dark:border-zinc-700">
                                Beta
                            </span>
                        </div>

                        {/* Submit Link Dialog */}
                        <SubmitLinkForm />
                    </header>

                    {/* Main Layout Area */}
                    <div className="flex flex-col sm:flex-row">
                        <Sidebar />
                        <main className="flex-1 p-2 sm:p-6 overflow-y-auto">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
