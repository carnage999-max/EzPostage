"use client";

import { motion } from "framer-motion";
import ThreeDObject from "@/components/ThreeDObject";

export default function OrbitAnimation() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none rounded-full border border-gray-200">
            <motion.div
                className="absolute w-full h-full rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
                    <ThreeDObject />
                </div>
            </motion.div>
        </div>
    );
}
