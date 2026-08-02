"use client";

import { Suspense, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { GITHUB_ISSUE_URL, resources } from "@/data/resources";
import { SearchBar } from "@/app/components/resources/search-bar";
import { ResourceCard } from "@/app/components/resources/resource-card";
import { NotFound } from "@/app/components/resources/not-found";

export default function CategoryPage() {
    const params = useParams();
    const category = (params.category as string) || "";
    const [searchQuery, setSearchQuery] = useState("");

    const filteredResources = useMemo(() => {
        return resources.filter((item) => {
            const searchContent =
                `${item.title} ${item.category} ${item.subcategory} ${item.description}`.toLowerCase();
            const matchesQuery = searchContent.includes(
                searchQuery.toLowerCase(),
            );
            const matchesCategory =
                item.category.toLowerCase() === category.toLowerCase();

            return matchesQuery && matchesCategory;
        });
    }, [searchQuery, category]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleSubmitResource = () => {
        window.open(GITHUB_ISSUE_URL, "_blank");
    };

    return (
        <div className="animate-slideUp pb-12">
            {/* Header */}
            <div className="flex gap-2 items-center pb-3">
                <Link
                    href="/"
                    className="inline-flex items-center gap-1 p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    aria-label="Back to home">
                    <ArrowLeft className="w-4 h-4" />
                </Link>
                <h1 className="capitalize font-semibold text-zinc-900 dark:text-zinc-100 text-base">
                    {category}
                </h1>
            </div>

            <Suspense>
                <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
            </Suspense>

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
