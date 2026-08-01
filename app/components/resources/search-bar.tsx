"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

interface SearchBarProps {
    onSearch: (query: string) => void;
    initialQuery?: string;
}

export function SearchBar({ onSearch, initialQuery = "" }: SearchBarProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(initialQuery);

    // Debounce input by 300ms using the 'use-debounce' package
    const [debouncedQuery] = useDebounce(searchQuery, 300);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        onSearch(debouncedQuery);

        // Sync search parameter with URL (?query=...)
        const params = new URLSearchParams(searchParams.toString());
        if (debouncedQuery) {
            params.set("query", debouncedQuery);
        } else {
            params.delete("query");
        }

        if (params.toString() !== searchParams.toString()) {
            router.push(`?${params.toString()}`, { scroll: false });
        }
    }, [debouncedQuery, onSearch, router, searchParams]);

    return (
        <div className="relative w-full">
            {/* Search Icon */}
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />

            {/* Input Field */}
            <input
                type="search"
                placeholder="Search Links..."
                value={searchQuery}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/10 transition-all"
            />
        </div>
    );
}
