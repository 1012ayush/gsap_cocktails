import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { navLinks } from '../../constants/index.js';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    useGSAP(() => {
        gsap.to('nav', {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: '+=100',
                scrub: 0.5,
            },
            backdropFilter: 'blur(1px)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            ease: 'power1.in'
        });
    });

    return (
        <nav className="fixed w-full top-0 left-0 z-50 px-6 py-4 flex justify-between items-center bg-transparent backdrop-blur-0 transition-all duration-300">
            <a href="#home" className="flex items-center gap-2">
                <img
                    src="/images/logo.png"
                    alt="logo"
                    className="h-10 w-auto"
                />
                <p className="text-white  font-bold text-xxl">Velvet Pour</p>
            </a>

            <ul className="flex gap-8">
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a
                            href={`#${link.id}`}
                            className="text-white hover:text-amber-400 transition-colors"
                        >
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;