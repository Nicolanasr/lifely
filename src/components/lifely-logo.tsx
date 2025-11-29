// components/lifely-logo.tsx
import * as React from "react"

type LifelyLogoProps = {
    size?: number
    withText?: boolean
}

export function LifelyLogo({ size = 40, withText = false }: LifelyLogoProps) {
    return (
        <div className="flex items-center gap-2">
            <div
                className="flex items-center justify-center rounded-full bg-white shadow-sm"
                style={{ width: size, height: size }}
            >
                <svg
                    viewBox="0 0 48 48"
                    className="text-lifely-indigo"
                    aria-hidden="true"
                >
                    <circle
                        cx="24"
                        cy="24"
                        r="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity={0.12}
                    />
                    {/* double wave – placeholder shape */}
                    <path
                        d="M10 22c3 3 5.5 4 8 4s5-1 8-4 5.5-4 8-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M10 28c3 3 5.5 4 8 4s5-1 8-4 5.5-4 8-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        opacity={0.7}
                    />
                </svg>
            </div>
            {withText && (
                <span className="text-lg font-semibold tracking-tight text-lifely-indigo">
                    Lifely
                </span>
            )}
        </div>
    )
}
