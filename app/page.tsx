"use client";

import { Suspense, useMemo, useState } from "react";
import { resources } from "@/data/resources";
import { SearchBar } from "./components/resources/search-bar";
import { ResourceCard } from "./components/resources/resource-card";
import { NotFound } from "./components/resources/not-found";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    // Memoized search filter checking title, category, subcategory & description
    const filteredResources = useMemo(() => {
        return resources.filter((item) => {
            const searchContent =
                `${item.title} ${item.category} ${item.subcategory} ${item.description}`.toLowerCase();
            return searchContent.includes(searchQuery.toLowerCase());
        });
    }, [searchQuery]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleSubmitResource = () => {
        window.open(
            "https://github.com/PraveenShinde3/resourcely.in/issues/new",
            "_blank",
        );
    };

    return (
        <div className="animate-slideUp">
            {/* Search Input with Suspense boundary */}
            <Suspense>
                <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
            </Suspense>

            {/* Grid of cards or NotFound fallback */}
            {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 xl:grid-cols-3 overflow-y-auto max-h-[calc(100vh-11rem)] sm:max-h-[calc(100vh-9rem)] [&::-webkit-scrollbar]:hidden">
                    {filteredResources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
            ) : (
                <NotFound
                    onSubmit={handleSubmitResource}
                    searchQuery={searchQuery}
                />
            )}
        </div>
    );
}
