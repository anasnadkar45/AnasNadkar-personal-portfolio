import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

interface EyeCatchingButtonProps {
    title: string;
}

export const EyeCatchingButton_v1: React.FC<EyeCatchingButtonProps> = ({ title }) => {
    return (
        <div className="relative overflow-hidden rounded-full dark:bg-zinc-900 bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-0.5">
            <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />
            <Button
                className={cn(
                    'h-10 px-8 w-full rounded-full text-lg font-semibold text-zinc-800 dark:text-[#BEF264] backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900'
                )}
            >
                <div className="flex items-center gap-3">
                    <Download size={20}/>
                    {title}
                </div>
            </Button>
        </div>
    );
};
