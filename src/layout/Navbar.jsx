import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all
        duration-500 ${isScrolled ? 
        "glass-strong py-3" :
        "bg-transparent py-5"} z-50`
      }
    >
      <nav
        className="container mx-auto px-6
      flex items-center justify-between"
      >
        <a
          href="#"
          className="text-xl font-bold
        tracking-tight hover:text-primary"
        >
          MUNIB.DEV<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <div
            className="glass rounded-full px-2 
          py-1 flex items-center gap-1"
          >
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 text-sm py-2 rounded-full
                text-muted-foreground hover:text-foreground
                hover:bg-surface"
                >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <a href="#contact" className="hidden md:block">
          <Button size="sm">Contact</Button>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground cursor-pointer"
          >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div
            className="container mx-auto px-6 py-6 flex flex-col
            gap-4"
            >
            {navLinks.map((item, index) => (
              <a
              key={index}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground
              py-2"
              >
                {item.label}
              </a>
            ))}
            <Button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
