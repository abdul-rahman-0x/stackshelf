export function Footer() {
    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-6 px-4 sm:px-6 text-xs text-zinc-500 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-zinc-950">
            {/* Left: My Name  */}
            <div className="flex items-center gap-1">
                <span>Built by</span>
                <a
                    href="https://github.com/abdul-rahman-0x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative font-semibold text-zinc-900 dark:text-zinc-100 ml-0.5 inline-block">
                    <span>Abdul Rahman</span>
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ease-out group-hover:w-full" />
                </a>
            </div>

            {/* Right: Source Code & Year */}
            <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
                <a
                    href="https://github.com/abdul-rahman-0x/stackshelf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                    {/* GitHub SVG Icon */}
                    <svg
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>Source Code</span>
                </a>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span>StackShelf © {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
}
