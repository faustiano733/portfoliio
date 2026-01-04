'use client'
import { motion } from "motion/react"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { BackwardIcon, ForwardIcon, HomeIcon } from "@heroicons/react/24/outline";
interface MenuOptionProps{
  label:string
  // Icon:React.ElementType
  href?:string
}

function MenuOption({label,href /*Icon*/}:MenuOptionProps){
  return (
    <Link href={href ? href : ""}>
    <span>{label}</span>
    </Link>
  )
}



export default function Home() {
 const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  return (
    <>
    <div className="fixed z-20">
      <div onClick={()=>{
        setIsMenuActive(!isMenuActive)
      }}>
        {isMenuActive?<BackwardIcon className="w-6 h-6"/>:<ForwardIcon className="w-6 h-6"/>}
      </div>
    {isMenuActive && (
      <div className="flex justify-between gap-2 flex-col">
        <MenuOption label="Home"/>
        <MenuOption label="Sobre Mim" href="#about"/>
        <MenuOption label="Habilidades" href="#skills"/>
        <MenuOption label="Serviços" href="#services"/>
        <MenuOption label="Projectos" href="#projects"/>
        <MenuOption label="Contacte-me" href="#contacts"/>
      </div>
    )}
    </div>
    <div className="flex flex-col gap-5 overflow-y-scroll bg-[hsl(318,80%,20%)]/25">
    <div className=" flex flex-col gap-7 relative h-screen">
      <div className=" absolute top-0 left-0 w-full h-80 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-[hsl(318,80%,20%)]/70 via-[hsl(318,80%,20%)]/30 to-transparent pointer-events-none ">
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center mt-12">
        <h3 className="text-xl">Ola, <span className="text-[hsl(318,80%,20%)]">Eu sou</span></h3>
        <h2 className="text-3xl">Faustiano <span className="text-[hsl(318,50%,30%)] ">Geraldo</span></h2>
        <h3 className="font-bold">Desenvolvedor Web</h3>
        <p className=" text-sm w-10/12 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quam blanditiis, at enim nam distinctio obcaecati perferendis deserunt temporibus incidunt quos? Repellendus perferendis quaerat dolore doloribus voluptas aperiam modi eligendi.</p>
      </div>
    </div>
    <div id="about" className="h-screen flex flex-col gap-6 items-center">
      <Title title="Sobre Mim"/>
        <div className="text-center w-10/11">
          <p>Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Recusandae adipisci 
          officia sapiente cumque tempore dolorum distinctio alias illum totam. 
          Id quod totam expedita magni, 
          accusamus dolore debitis similique hic amet?
        </p>
        <p >Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Recusandae adipisci 
          officia sapiente cumque tempore dolorum distinctio alias illum totam. 
          Id quod totam expedita magni, 
          accusamus dolore debitis similique hic amet?
        </p>
        </div>
        <div className="bg-[hsl(318,80%,20%)] h-0.5 w-10/12 rounded-r-full"></div>
        <div>

        </div>
    </div>
    <div id="skills" className="h-screen flex flex-col gap-y-8">
      <Title title="Habilidades"/>
      <SkillGroup title="Linguagens" skills={[{name:'TypeScript', level:80}, {name:'PHP', level:50}]}/>
      <SkillGroup title="FrontEnd" skills={[{name:'Next.js', level:87}, {name:'HTML', level:90}, {name:"CSS", level:90}, {name:"Tailwind Css", level:70}]}/>
      <SkillGroup title="Backend" skills={[{name:"Node.js", level:85}, {name:'Express.js', level:77}, {name:'REST API', level:76}, {name:'SQL', level:89}, {name:'MongoDB', level:60}]}/>
      <SkillGroup title="Ferramentas" skills={[{name:"Git", level:75}, {name:'GitHub',level:70}]}/>
    </div>
    <div id="services" className="h-screen flex flex-col">
      <Title title="Serviços"/>
      <div className="grid grid-cols-2 gap-y-4 px-6 gap-x-4 mt-10">
        <Service/>
        <Service/>
        <Service/>
        <Service/>
        <Service/>
        <Service/>
      </div>
    </div>
    <div id="projects" className=" h-screen">
      <Title title="Projectos"/>
    </div>
    <div id="contacts" className="h-screen">
      <Title title="Contacte-me"/>

    </div>
    </div>
  </>
  )
}

function About(){
  return (
    <div  id="sobre" className="h-screen flex flex-col gap-6 items-center">
      <div className="bg-[hsl(318,80%,20%)] w-10/15 self-start flex justify-center py-1 rounded-r-full ">
          <h3 className=" text-2xl">Sobre Mim</h3>
      </div>
        <div className="text-center w-10/11">
          <p>Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Recusandae adipisci 
          officia sapiente cumque tempore dolorum distinctio alias illum totam. 
          Id quod totam expedita magni, 
          accusamus dolore debitis similique hic amet?
        </p>
        <p >Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Recusandae adipisci 
          officia sapiente cumque tempore dolorum distinctio alias illum totam. 
          Id quod totam expedita magni, 
          accusamus dolore debitis similique hic amet?
        </p>
        </div>
        <div className="bg-[hsl(318,80%,20%)] h-0.5 w-10/12 rounded-r-full"></div>
        <div>

        </div>
    </div>
  )
}

function Title({title}:{title:string}){
  return(
    <div className="bg-linear-to-r from-[hsl(318,80%,20%)] via-[hsl(318,80%,70%)]/20 to-transparent w-10/15 self-start flex justify-center py-1 rounded-br-full ">
          <h3 className=" text-2xl">{title}</h3>
      </div>
  )
}

// function Service(){
//   return (
//     <motion.div className="border border-[hsl(318,80%,20%)]/40 text-center">
//          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[hsl(318,80%,20%)]/0 via-[hsl(318,80%,20%)]/30 to-transparent overflow-hidden">
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
//           initial={{ x: '-100%' }}
//           animate={{ x: '100%' }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         />
//       </div>
//         <span>React</span>
//         <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing
//            elit. Ex repudiandae dicta, architecto labore 
//            optio cumque hic porro non numquam eius repellat 
//            provident at alias 
//           laboriosam minima ea ab ipsam. Minima.</p>
//       </motion.div>
//   )
// }

function Service(){
  return(
    <motion.div
      className="relative"
      whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}
    >
    <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-[hsl(318,80%,20%)] via-[hsl(318,80%,20%)]/30 to-transparent overflow-hidden">
      <motion.div 
      className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
      initial={{x:'-100%'}}
      animate={{x:'100%'}}
      transition={{duration:1.5, repeat:Infinity}}
      />
    </div>
    <div className="relative px-5 py-2 border border-[hsl(318,80%,20%)] rounded-2xl bg-linear-to-br from-[hsl(318,80%,20%)]/20 to-purple-900/30 backdrop-blur-sm overflow-hidden">
    <div className="relative z-10">
       <span>React</span>
         <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ex repudiandae dicta, architecto labore 
            optio cumque hic porro non numquam eius repellat 
          provident at alias 
           laboriosam minima ea ab ipsam. Minima.</p>
    </div>
    </div>

    </motion.div>
  )
}
function Skill({skill, level=80}:{skill:string, level?:number}){
  return(
    <motion.div
      className="relative"
      whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}
    >
    <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-[hsl(318,80%,20%)] via-[hsl(318,80%,20%)]/30 to-transparent overflow-hidden">
      <motion.div 
      className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
      initial={{x:'-100%'}}
      animate={{x:'100%'}}
      transition={{duration:1.5, repeat:Infinity}}
      />
    </div>
    <div className="relative px-5 py-2 border border-[hsl(318,80%,20%)] rounded-2xl bg-linear-to-br from-[hsl(318,80%,20%)]/20 to-purple-900/30 backdrop-blur-sm overflow-hidden">
    <div className="relative z-10">
      <div className="flex justify-between items-center mb-2">
        <motion.span
          className="text-white font-medium"
          animate={{color:'hsl(318,80%, 70%)'}}
        >
          {skill}
        </motion.span> 
        <span className="text-sm text-gray-300">{level} %</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-[hsl(318,80%,50%)] to-purple-500"
          initial={{width:0}}
          animate={{width:`${level}%`}}
          transition={{duration:1,delay:1}}
        />
      </div>
    </div>
    </div>

    </motion.div>
  )
}

function SkillGroup({title, skills}:{title:string, skills:{name:string,level:number}[]}){
  return(
    <div className="flex flex-col gap-y-2 px-2">
      <h4>{title}</h4>
      <div className="grid grid-cols-2 gap-y-4 gap-x-3 ">
       {
        skills.map((skill, index)=><Skill key={index} level={skill.level} skill={skill.name}/>)
       }
      </div>
      </div>
  )
}
