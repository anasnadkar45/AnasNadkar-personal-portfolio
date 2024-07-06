import Image from "next/image";
import { Hero } from "./components/Hero";
import Projects from "./project/page";
import { Techs } from "./components/tech/Techs";

export default function Home() {
  return (
    <main className=" w-[90vw] md:right-[15vw] md:left-[15vw] md:w-[70vw] mx-auto space-y-20 scroll-ms-96 pb-20">
      <Hero />
      <Projects />
      <Techs />
    </main>
  );
}
