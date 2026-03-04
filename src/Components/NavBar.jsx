import { useEffect, useState } from "react";
import image from '../assets/Logo.png'

const NavLinks = [
    {label: 'About', href: '#about'},
    {label: 'Skills', href: '#skills'},
    {label: 'Projects', href: '#projects'},
    {label: 'Experience', href: '#experience'},
]

function NavBar () {

    const [scrolled, setScrolled] = useState(false)

    useEffect (() =>{
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return(
        <nav id="nav" 
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 px-15 backdrop-blur-md border-b border-b-transparent border-(--border) transition-colors duration-200 ${scrolled
                ? 'bg-[rgba(8,11,16,0.85)] backdrop-blur-md border-(--border)' 
                : 'bg-transparent'
            }`}>
            
            {/*<div className="font-syne text-(--text) capitalize font-extrabold text-[1.1rem] tracking-tight no-underline">
                alex<span className="text-(--accent)">.</span>
            </div>--*/}
            
            <div className="flex items-center gap-6">
                <img src={image} className="max-h-10 max-w-10 "/>
                <span className="flex md:hidden text-(--text) font-syne text-[0.9rem] font-bold tracking-widest">Maleesha Prabash</span>
            </div>
           
            
            <div className="hidden md:flex gap-10 items-center">
                {NavLinks.map(({label, href}) => (
                    <a
                        key={label}
                        href={href}
                        className="text-[0.7rem] tracking-[0.1rem] font-dm-mono uppercase text-(--muted) relative group pb-0.5 hover:text-(--text) transition-colors duration-200 "
                    >
                        {label}
                        <span className="absolute -bottom-1 left-0 right-0 h-px bg-(--accent) scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                ))}
            </div>

            <a 
                href="#contacts"
                className="hidden md:flex text-[0.7rem] tracking-[0.2rem] uppercase px-6 py-2 border border-(--accent) text-(--accent) transition-all duration-200 hover:bg-(--accent) hover:text-(--bg)">
                Let's Talk
            </a>

        </nav>
    )
}

export default NavBar