import { Logo } from "@/public/Logo";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function Navbar() {
    return (
        <nav className="flex justify-between fixed top-2 left-[5vw] right-[5vw] w-[90vw] 
        md:right-[15vw] md:left-[15vw] md:w-[70vw] mx-auto py-2 px-2 bg-gray-700 border 
        border-[#FCD269] rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 z-20">
            <div>
                <Logo />
            </div>
            <div className="flex gap-3 items-center">
                <ModeToggle />
                <p>Projects</p>
                <p>About</p>
                <GithubIcon />
                <TwitterIcon />
                <LinkedinIcon />
            </div>
        </nav>
    )
}