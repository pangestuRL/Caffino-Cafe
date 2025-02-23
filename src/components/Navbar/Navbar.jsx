import logoCafino from './assets/logo-caffino.png';
import { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#E5CFB5] transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={logoCafino} alt="Logo Caffino" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-black ml-auto">
                        {links.map((link) => (
                            <ScrollLink 
                                key={link.id} 
                                to={link.id} 
                                smooth={true} 
                                duration={500} 
                                className="cursor-pointer hover:text-gray-700 hover:font-bold"
                            >
                                {link.name}
                            </ScrollLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-black ml-auto" 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#E6D2B5] text-black py-4">
                    <ul className="space-y-4 text-center">
                        {links.map((link) => (
                            <li key={link.id}>
                                <ScrollLink
                                    to={link.id}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer block py-2 hover:text-gray-700 hover:font-bold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
