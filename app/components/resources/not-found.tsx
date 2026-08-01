import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface NotFoundProps {
    onSubmit: () => void;
    searchQuery: string;
}

export function NotFound({ onSubmit, searchQuery }: NotFoundProps) {
    return (
        <div className="flex-1 h-[calc(100vh-11rem)] text-center space-y-6 flex flex-col justify-center items-center max-w-2xl mx-auto px-6">
            <div>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                    We couldn&apos;t find any resources matching &quot;
                    {searchQuery}&quot;.
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 py-1">
                    Submit/Open an issue and we&apos;ll add it if it fits our
                    criteria!
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link href="/" className="w-full sm:w-auto">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to all categories
                        </button>
                    </Link>
                    <button
                        type="button"
                        onClick={onSubmit}
                        className="w-full flex gap-2 items-center justify-center sm:w-auto text-sm px-3 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                        Submit missing resource
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
