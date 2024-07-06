"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
export function LettersPullUp({
    text,
    className = "",
}: {
    text: string
    className?: string
}) {
    const splittedText = text.split("")

    const pullupVariant = {
        initial: { y: 10, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.02,
            },
        }),
    }

    return (

        <div className="flex justify-center">
            {splittedText.map((current, i) => (
                <motion.div
                    key={i}
                    variants={pullupVariant}
                    initial="initial"
                    animate="animate"
                    custom={i}
                    className={cn(
                        'text-lg text-center sm:text-lg font-bold tracking-tighter md:text-lg md:leading-[4rem]',
                        className
                    )}
                >
                    {current == ' ' ? <span>&nbsp;</span> : current}
                </motion.div>
            ))}
        </div>
    )
}
