import { ProjectsData } from "@/db/project";
import { ProjectCard } from "../components/project/ProjectCard";

export default function Projects() {
    return (
        <div className="space-y-4">
            <h1 className="text-4xl font-bold">Recent Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ProjectsData.map((o, i) => (
                    <ProjectCard
                        key={i}
                        name={o.name}
                        href={o.href}
                        description={o.description}
                        stack={o.stack}
                        imgSrc={o.imgSrc as string}
                        date={o.date} i={0}
                    />
                ))}
            </div>
        </div>
    )
}