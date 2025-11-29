// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { VisitTracker } from "@/components/visit-tracker"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Lifely – Your Personal Life OS",
    description:
        "Lifely combines tasks, habits, journaling, and weekly review into one calm, beautiful Life OS.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-lifely-cream text-lifely-dark antialiased`}
            >
                {children}
                <Suspense fallback={null}>
                    <VisitTracker />
                </Suspense>
                <Analytics />
            </body>
        </html>
    )
}
