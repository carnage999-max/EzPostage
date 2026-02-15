import Image from "next/image";

export function SectionDivider({ variant = "red" }: { variant?: "red" | "blue" }) {
    return (
        <div className="relative w-full">
            {/* Banner gradient background */}
            <div className={`h-3 w-full ${variant === "red" ? "bg-gradient-to-r from-red-600 via-red-500 to-red-600" : "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"}`} />

            {/* Envelope Seal - EzPost Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className={`relative w-16 h-16 rounded-full ${variant === "red" ? "bg-red-600 ring-4 ring-red-700" : "bg-blue-900 ring-4 ring-blue-950"} shadow-xl flex items-center justify-center p-2`}>
                    <Image
                        src="/images/ez-post-logo.png"
                        alt="EzPost"
                        width={48}
                        height={48}
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
