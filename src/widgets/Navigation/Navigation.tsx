import { useState } from "react";
import { Link } from "react-router-dom";
import { useThemeStore } from "@app/store/themeStore";
import { Button } from "@shared/ui";
import {
  GiConsoleController,
  GiHamburgerMenu,
  GiCrossMark,
} from "react-icons/gi";
import { Moon, Sun } from "lucide-react";

export function Navigation() {
  const { isDark, toggleTheme } = useThemeStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navigation fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-sm bg-black/20">
      <nav className="container mx-auto! p-4!">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <GiConsoleController className="text-primary text-3xl" />
            <h2 className="text-white text-2xl font-black leading-tight tracking-tighter uppercase italic">
              Aether Realms
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              <a
                href="#world"
                className="text-white/80 hover:text-primary text-sm font-black uppercase tracking-widest transition-colors"
              >
                World
              </a>
              <a
                href="#characters"
                className="text-white/80 hover:text-primary text-sm font-black uppercase tracking-widest transition-colors"
              >
                Characters
              </a>
              <a
                href="#roadmap"
                className="text-white/80 hover:text-primary text-sm font-black uppercase tracking-widest transition-colors"
              >
                Roadmap
              </a>
            </div>

            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              className="p-2! text-white hover:bg-transparent rounded-md transition-colors focus:outline-none focus:ring-0! focus:ring-offset-0! focus:ring-transparent!"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="text-white" />
              ) : (
                <Moon className="text-white" />
              )}
            </Button>

            {/* CTA Button */}
            <Button
              variant="primary"
              className="px-8! py-2.5! text-sm font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              Play Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden p-2! text-white hover:bg-transparent rounded-md transition-colors focus:outline-none focus:ring-0! focus:ring-offset-0! focus:ring-transparent!"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <GiCrossMark className="text-white" />
            ) : (
              <GiHamburgerMenu className="text-white" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4! border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a
                href="#world"
                className="text-white/80 hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors"
              >
                World
              </a>
              <a
                href="#characters"
                className="text-white/80 hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors"
              >
                Characters
              </a>
              <a
                href="#roadmap"
                className="text-white/80 hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors"
              >
                Roadmap
              </a>
              <div className="flex items-center gap-4 pt-4 justify-between">
                <Button
                  onClick={toggleTheme}
                  variant="ghost"
                  className="p-2 text-white hover:bg-transparent rounded-md transition-colors focus:outline-none focus:ring-0! focus:ring-offset-0! focus:ring-transparent!"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Sun className="text-white" />
                  ) : (
                    <Moon className="text-white" />
                  )}
                </Button>
                <Button
                  variant="primary"
                  className="px-8! py-2.5! text-sm font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
                >
                  Play Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
