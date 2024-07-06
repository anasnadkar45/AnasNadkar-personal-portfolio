import { FaReact } from 'react-icons/fa'
import css from './Techs.module.css'
import * as React from 'react'
import { cn } from '@/lib/utils'

const techSkills = [
  {
    title: 'Basics',
    parag: 'Typescript, JavaScript, Html5, CSS3',
    // Icon: GoBrowser,
    classes: {
      root: cn(
        'bg-zinc-950 border border-[#FC7428] p-4 rounded-2xl text-[#FC7428] flex flex-col items-center justify-end gap-2',
        'md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-3',
        css.grain
      ),
      icon: 'text-[#FC7428]',
      title: 'font-bold',
      parag: 'text-center font-light',
    },
  },
  {
    title: 'Frontend',
    parag:
      'Nextjs, React, Tailwindcss, Shadcn-UI, Mantine, Zustand, Tanstack Query, Recharts, ReactTable, and more...',
    // Icon: FaReact,
    classes: {
      root: cn(
        'bg-[#12B5E5] w-full text-center p-4 rounded-2xl text-zinc-900 gap-2',
        'md:col-start-5 md:col-end-13 md:row-start-1 md:row-end-5',
        'flex-col-center',
        css.grain
      ),
      icon: 'text-zinc-900 spin ',
      title: 'font-bold text-2xl text-center mb-1',
      parag: 'text-xl font-medium text-center',
    },
  },
  {
    title: 'Backend',
    parag: 'Nodejs, Supabase, Vercel, Express.',
    // Icon: CgDatabase,
    classes: {
      root: cn(
        'bg-[#00C664] p-4 rounded-2xl text-zinc-900 flex flex-col items-center justify-end gap-2',
        'md:col-span-4 md:row-start-3 md:row-end-5'
      ),
      icon: 'text-zinc-900',
      title: 'font-bold',
      parag: 'text-center font-light',
    },
  },
  //---------------------------------------------------
  {
    title: 'Quality Assurance',
    parag: 'React Testing Library',
    // Icon: SiSpeedtest,
    classes: {
      root: cn(
        'bg-zinc-50 p-4 rounded-2xl text-zinc-700 flex flex-col items-center justify-end gap-2',
        'md:col-span-4'
      ),
      icon: 'text-zinc-900',
      title: 'font-bold',
      parag: 'text-center font-light',
    },
  },
  {
    title: 'Workflow Tools',
    parag: 'Git, GitHub, Figma, Notion, Eslint, Sizzy browser',
    // Icon: VscTools,
    classes: {
      root: cn(
        'bg-[#FCD269] p-4 rounded-2xl text-zinc-700 flex flex-col items-center justify-end gap-2',
        'md:col-span-4'
      ),
      icon: 'text-zinc-900',
      title: 'font-bold',
      parag: 'text-center font-light',
    },
  },

  {
    title: 'Interested in',
    parag: 'ReactNative, AI.',
    // Icon: BiHappyHeartEyes,
    classes: {
      root: cn(
        'bg-zinc-950 border border-[#9065B0] p-4 rounded-2xl text-[#9065B0] flex flex-col items-center justify-end gap-2',
        'md:col-span-4',
        css.grain
      ),
      icon: 'text-[#9065B0]',
      title: 'font-bold',
      parag: 'text-center font-light',
    },
  },
]

//======================================
export const Techs = () => {
  return (
    <div className="mb-4 bg-gradient-to-b from-zinc-950/30 to-zinc-950/30 via-zinc-950 pb-8 pt-16">
      <div className="pb-6 font-extrabold mx-auto max-w-[58rem]">
        <div className="mb-6 mx-auto ">
          <h2 className="title text-center text-4xl">
            <span className="text-[#FCD269]">Expertise</span>
            <br />
            in Modren Technologies
          </h2>
        </div>
        <div className="grid md:grid-cols-12 gap-4">
          {techSkills.map((tech, i) => (
            <div key={i} className={cn(tech.classes.root as string,"w-full")}>
              {i == 1 && <FaReact className="mx-auto animate-spin spin-in-90" size="80" />}
              <div
                className={cn(
                  'pb-1 mb-1',
                  i == 1 ? 'w-full' : 'flex-col-center'
                )}
              >
                {/* {i !== 1 && (
                      <tech.Icon className={tech.classes.icon} size="24" />
                    )} */}
                <h3
                  className="flex justify-center  text-2xl font-bold text-center"
                >
                  {tech.title}
                </h3>
                <p className={tech.classes.parag}>{tech.parag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}