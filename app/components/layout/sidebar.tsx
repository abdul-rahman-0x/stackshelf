"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { resources } from "@/data/resources";

export default function Sidebar() {
    const pathname = usePathname();

    // Dynamically calculate resource count for each category
    const categories = [
        { name: "All", url: "/", count: resources.length },
        {
            name: "Design",
            url: "/categories/design",
            count: resources.filter((r) => r.category === "design").length,
        },
        {
            name: "AI",
            url: "/categories/ai",
            count: resources.filter((r) => r.category === "ai").length,
        },
        {
            name: "Development",
            url: "/categories/development",
            count: resources.filter((r) => r.category === "development").length,
        },
        {
            name: "Productivity",
            url: "/categories/productivity",
            count: resources.filter((r) => r.category === "productivity")
                .length,
        },
    ];

    return (
        <aside className="w-full sm:w-64 h-fit sm:min-h-[calc(100vh-3.5rem)] border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4">
            <nav className="flex sm:flex-col gap-1 overflow-x-auto pb-2 sm:pb-0">
                {categories.map((category) => {
                    // Check if link is currently active
                    const isActive = pathname === category.url;

                    return (
                        <Link
                            key={category.name}
                            href={category.url}
                            className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                                isActive
                                    ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold"
                                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100"
                            }`}>
                            <span>{category.name}</span>

                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium border border-zinc-200/80 dark:border-zinc-700">
                                {category.count}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
