"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X } from "lucide-react";
import { GITHUB_ISSUE_URL } from "@/data/resources";

interface SubmitLinkFormProps {
    githubRepoUrl?: string;
}

export function SubmitLinkForm({
    githubRepoUrl = GITHUB_ISSUE_URL,
}: SubmitLinkFormProps) {
    const handleOpenIssue = () => {
        window.open(githubRepoUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:underline underline-offset-4 cursor-pointer transition-colors">
                    <span>Submit link</span>
                    <ArrowUpRight className="w-4 h-4" />
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-fadeIn" />

                <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white dark:bg-zinc-950 p-6 shadow-xl border border-zinc-200 dark:border-zinc-800">
                    <Dialog.Title className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        Submit a new link
                    </Dialog.Title>

                    <Dialog.Description className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        Open an{" "}
                        <b className="text-zinc-900 dark:text-zinc-100">
                            issue
                        </b>{" "}
                        in our GitHub repository and we will review and update
                        the links accordingly!
                    </Dialog.Description>

                    <div className="mt-6 flex justify-end gap-3">
                        <Dialog.Close asChild>
                            <button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer">
                                Cancel
                            </button>
                        </Dialog.Close>

                        <button
                            type="button"
                            onClick={handleOpenIssue}
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer">
                            <span>Open GitHub Issue</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>

                    <Dialog.Close asChild>
                        <button
                            type="button"
                            className="absolute right-4 top-4 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-lg transition-colors cursor-pointer"
                            aria-label="Close">
                            <X className="w-4 h-4" />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
