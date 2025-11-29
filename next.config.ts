// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				lifely: {
					indigo: "#2F3A8A",
					peach: "#F8B88B",
					cream: "#FFF9F2",
					dark: "#1A1A1A",
				},
			},
			borderRadius: {
				"2xl": "1.5rem",
			},
		},
	},
	plugins: [],
};
export default config;
