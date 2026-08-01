import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Resource } from "@/data/resources";

interface ResourceCardProps {
    resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
    const { title, description, url, category, subcategory, icon } = resource;

    return (
        <div className="p-5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors flex flex-col justify-between gap-4">
            {/* Top Header: Title, Category & Logo */}
            <div className="flex items-start justify-between gap-3">
                <div>
                    {/* Title with External Link */}
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 group text-base">
                        <span>{title}</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                    </a>

                    {/* Category & Subcategory Tag Line */}
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-zinc-500 dark:text-zinc-400 capitalize">
                        <span>{category}</span>
                        <span className="text-zinc-300 dark:text-zinc-700">
                            •
                        </span>
                        <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                            {subcategory}
                        </span>
                    </div>
                </div>

                {/* Brand SVG Logo */}
                <div className="w-9 h-9 relative shrink-0 flex items-center justify-center p-1.5 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-100 dark:border-zinc-800">
                    <Image
                        src={icon}
                        alt={`${title} logo`}
                        width={28}
                        height={28}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Resource Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
