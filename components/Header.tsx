"use client";
import { NavbarData } from "@/constants";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header=()=>{
    const [isSidebarOpen, setIsSidebarOpen]= useState(false);
    const pathname = usePathname();
    return <header className="border-b border-b-hoverColor/10 sticky top-0 z-50 bg-bodyColor">
        <Container className="py-5 flex items-center justify-between">
            {/*Logo */}
            <Logo title="Dany" subtitle="."/>
            <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
                {NavbarData?.map((item)=>(
                    <Link key={item?.title} href={item?.href} className={'hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${pathname === item?.href && "text-hoverColor"}'}>{item?.title}
                    <span className={'absolute left-0 bottom-0 w-full h-px bg-hoverColor opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 ${pathname === item?.href ? "translate-x-0" : "-translate-x-full"} '}/>
                    </Link>
                ))}
                <Link href={'/Resume.pdf'} target='_blank' rel='noopener noreferrer' className='text-sm bg-lightSky/10 px-4 py-2 rounded-[6px] border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect'>Hire Me</Link>
            </div>
            <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)}className="inline-flex md:hidden">
                <Menu className="hover:text-hoverColor hoverEffect" />
            </button>
        </Container>
        <div className="md:hidden">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} pathname={pathname}/>
        </div>
    </header>
};

export default Header;