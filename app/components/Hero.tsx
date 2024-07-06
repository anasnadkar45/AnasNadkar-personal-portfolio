import { HeroSvg } from "@/public/Hero";
import { EyeCatchingButton_v1 } from "./ButtonShimmer1";
import { cn } from "@/lib/utils";
import { amaranth } from "../layout";
import { BlurIn } from "./Blur-in";
import { LettersPullUp } from "./words-pull-up";

export function Hero() {
    return (
        <div className="pt-[100px] w-[90vw] md:right-[15vw] md:left-[15vw] md:w-[70vw] mx-auto">
            <div className="relative flex justify-center items-center">
                <HeroSvg />
                <div className="absolute space-y-4 mt-[100px]">
                    <div className="w-full flex justify-center">
                        <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-gray-300'>
                            🟢 Available for work
                        </span>
                    </div>

                    <BlurIn>
                        <div className={cn(amaranth.className, "text-4xl md:text-6xl text-center font-bold")}>
                            Anas <span className="text-[#FCD269]">Nadkar</span><br />
                            <span className="text-[#FCD269]">Full-Stack</span> Developer
                        </div>
                    </BlurIn>

                    <LettersPullUp className="text-sm md:text-lg" text="Obsessed with developer experience, robust, scalable
                        and user-friendly applications." />

                    {/* <p className="text-center text-lg">Obsessed with developer experience, robust, scalable
                        and user-friendly applications.
                    </p> */}

                    <div className="w-[150px] mx-auto">
                        <EyeCatchingButton_v1 title="Resume" />
                    </div>
                </div>
            </div>

        </div>
    )
}