import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { siLeetcode, siCodeforces } from 'simple-icons';
import Link from 'next/link';
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

// Fixed Helper: Correctly accesses the 'path' property from simple-icons
const SiIcon = ({ icon }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Simple Icons provides the path as a raw string */}
    <path d={icon.path} />
  </svg>
);

const socialData = [
  {
    title: "Instagram",
    icon: <Instagram className='w-5 h-5' />,
    link: "https://www.instagram.com/dany.binu_/",
  },
  {
    title: "GitHub",
    icon: <Github className='w-5 h-5' />,
    link: "https://www.github.com/danybinuluke",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className='w-5 h-5' />,
    link: "https://www.linkedin.com/in/dany-binu-luke/",
  },
  {
    title: "LeetCode",
    icon: <SiIcon icon={siLeetcode} />,
    link: "https://leetcode.com/u/ExTerminator969",
  },
  {
    title: "Codeforces",
    icon: <SiIcon icon={siCodeforces} />,
    link: "https://codeforces.com/profile/Exterminator969",
  },
  {
    title: "Gmail",
    icon: <Mail className='w-5 h-5' />,
    link: "mailto:danybinu2005@gmail.com",
  },
];

const SocialLinks = () => {
  return (
    <TooltipProvider>
      <div className='flex items-center gap-3'>
        {socialData?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link 
                href={item?.link} 
                className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:text-lightSky hoverEffect flex items-center justify-center transition-all duration-300"
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className='text-xs uppercase font-medium rounded-[6px]'>
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialLinks;