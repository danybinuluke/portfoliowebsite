'use client'
import { useTypeWriter } from "@/hooks/user-type-writer";
import { use, useEffect, useState } from "react";
import {motion} from 'motion/react';

const HomeDescription = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const description =  " As a B.Tech Computer Science and Engineering student at the National Institute of Technology, Surat, passionate about building innovative solutions at the intersection of software development, Web Development and AI. Whether it's crafting seamless backend systems, leveraging AI for intelligent insights, or Deploying Full-Stack Applications, I am always eager to learn, experiment, and create impactful solutions.";
    const {displayedText, isComplete} = useTypeWriter(description, 30);
    useEffect(() => {
        setHasLoaded(true)
    },[])
return <motion.p 
initial = {{ opacity: 0}}
animate = {{opacity: 1}}
transition = {{delay:1, duration:0.5 }}
className="w-auto font-normal leading-7 mb-6 min-h-32">
{
    hasLoaded ? (displayedText.split('').map((char,index)=>(
        <motion.span key ={index} initial = {{color:"rgb(156 163 175"}} animate={{color:isComplete ? "rgb(255 255 255)" : "rgb(156 163 175)"}} transition={{duration:0.5,delay:index*0.03}} >
            {char}
        </motion.span>
    ))): <span className="text-white/60">{description}</span>
    }
</motion.p>
}

export default HomeDescription