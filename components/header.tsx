import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";
// import SheetButton from "./sheet-button";


const Header = () => {
  return (
    <header className="py-4 px-4 md:px-6 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        KM.
      </Link>
      <nav className=" flex">
        <ul className="flex space-x-4 items-center">
          <li>
            <Link
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Button variant="outline">Resume</Button>
          </li>

          {/* <SheetButton/> */}

          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
};

export default Header;