import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { socialItems } from "./Navbar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
    return (
        <footer className="my-12 flex flex-wrap items-center justify-center gap-10">
            <TooltipProvider delayDuration={300}>
                {socialItems.map((link) => (
                    <Tooltip key={link.href}>
                        <TooltipTrigger asChild>
                            <Button size={"icon"} variant={"outline"} className="bg-transparent">
                                <a href={link.href}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label={link.name}>
                                    <link.icon />
                                </a>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-black">{link.name}</TooltipContent>
                    </Tooltip>
                ))}
        </TooltipProvider>
        </footer >
    );
}