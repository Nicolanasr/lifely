type SectionHeaderProps = {
    eyebrow?: string
    title: string
    description?: string
    align?: "left" | "center"
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    align = "center",
}: SectionHeaderProps) {
    const alignment =
        align === "left" ? "items-start text-left" : "items-center text-center"

    return (
        <div className={`flex flex-col gap-2 sm:gap-3 ${alignment}`}>
            {eyebrow && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lifely-primary shadow-sm ring-1 ring-black/5">
                    <span className="h-2 w-2 rounded-full bg-lifely-peach" />
                    {eyebrow}
                </span>
            )}
            <h2 className="text-2xl font-semibold tracking-tight text-lifely-dark sm:text-3xl">
                {title}
            </h2>
            {description && (
                <p className="max-w-2xl text-sm text-slate-600 sm:text-base">{description}</p>
            )}
        </div>
    )
}
