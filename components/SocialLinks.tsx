import { Braces, Code, CodeXml, Github, Instagram, Linkedin, Mails } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const socialData=[
  {
    title: "Instagram",
    icon: <Instagram className='w-5 h-5' />,
    link: "https://www.instagram.com/dany.binu_/",
  },
  {
    title: "GitHub",
    icon: <Github className='w-5 h-5'/>,
    link: "https://www.github.com/danybinuluke",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className='w-5 h-5' />,
    link: "https://www.linkedin.com/in/dany-binu-luke/",
  },
  {
    title: "LeetCode",
    icon: <Code className='w-5 h-5' />,
    link: "https://leetcode.com/u/ExTerminator969",
  },
  {
    title: "Codeforces",
    icon: <CodeXml className='w-5 h-5' />,
    link: "https://codeforces.com/profile/Exterminator969",
  },
  {
    title: "Gmail",
    icon: <Mails className='w-5 h-5' />,
    link: "mailto:danybinu2005@gmail.com",
  },
];


const SocialLinks = () => {
  return (
    <TooltipProvider>
        <div className='flex items-center gap-3'>
        {socialData?.map((item)=>(
            <Tooltip key={item?.title}>
                <TooltipTrigger asChild>
                <Link href={item?.link} className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:text-lightSky hoverEffect">
            {item?.icon}
            </Link>
            </TooltipTrigger>
            <TooltipContent className='text-xs uppercase font-medium rounded-[6px]'>{item?.title}</TooltipContent>
            </Tooltip>
        ))}
    </div>
    </TooltipProvider>
  )
}

export default SocialLinks