import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";
// import SheetButton from "./sheet-button";


const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full glass glass-dark border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-gradient">
          KM.
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-8 items-center text-sm font-medium">
            <li>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4 border-l pl-6 ml-2">
            <Button variant="outline" size="sm">Resume</Button>
            <ThemeToggle />
          </div>
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;