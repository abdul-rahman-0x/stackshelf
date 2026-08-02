"use client";

import { Suspense, useMemo, useState } from "react";
import { GITHUB_ISSUE_URL, resources } from "@/data/resources";
import { SearchBar } from "./components/resources/search-bar";
import { ResourceCard } from "./components/resources/resource-card";
import { NotFound } from "./components/resources/not-found";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

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
        window.open(GITHUB_ISSUE_URL, "_blank");
    };

    return (
        <div className="animate-slideUp pb-12">
            {/* Search Bar */}
            <Suspense>
                <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
            </Suspense>

            {/* Grid or NotFound fallback */}
            {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 xl:grid-cols-3">
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
