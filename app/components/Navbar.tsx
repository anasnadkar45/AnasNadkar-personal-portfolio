import { Logo } from "@/public/Logo";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

export const socialItems = [
    { name: "Github", href: "https://github.com/anasnadkar45", icon: GithubIcon },
    { name: "Twitter", href: "https://twitter.com/NadkarAnas45", icon: TwitterIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/anas-nadkar-2765121a9/?originalSubdomain=in", icon: LinkedinIcon }
];

export function Navbar() {
    return (
        <nav className="flex justify-between fixed top-2 left-[5vw] right-[5vw] w-[90vw] 
        md:right-[15vw] md:left-[15vw] md:w-[70vw] mx-auto py-2 px-2 bg-gray-700 border 
        border-[#FCD269] rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 z-20">
            <div>
                <Logo />
            </div>
            {/* <div className="flex gap-3 items-center text-xl font-bold">
                <p>Projects</p>
                <p>About</p>
            </div> */}
            <div className="flex gap-3 items-center">
                <ModeToggle />
                <Link href={'https://github.com/anasnadkar45'}>
                    <GithubIcon />
                </Link>
                <Link href={'https://twitter.com/NadkarAnas45'}>
                    <TwitterIcon />
                </Link>
            </div>
        </nav>
    )
}