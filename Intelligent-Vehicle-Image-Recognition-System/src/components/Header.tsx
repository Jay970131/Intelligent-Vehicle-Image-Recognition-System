
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-tasle-yellow rounded-full flex items-center justify-center">
            <span className="text-tasle-darkBlue font-bold">T</span>
          </div>
          <span className="text-xl font-bold text-foreground">Tasle</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#home" 
            className="font-medium bg-tasle-yellow text-tasle-darkBlue px-4 py-2 rounded-md hover:bg-tasle-yellow/90 transition-colors"
          >
            首頁
          </a>
          <a 
            href="#about" 
            className="font-medium bg-tasle-yellow text-tasle-darkBlue px-4 py-2 rounded-md hover:bg-tasle-yellow/90 transition-colors"
          >
            關於Tasle
          </a>
          <a 
            href="#models" 
            className="font-medium bg-tasle-yellow text-tasle-darkBlue px-4 py-2 rounded-md hover:bg-tasle-yellow/90 transition-colors"
          >
            車款系列
          </a>
          <a 
            href="#technology" 
            className="font-medium bg-tasle-yellow text-tasle-darkBlue px-4 py-2 rounded-md hover:bg-tasle-yellow/90 transition-colors"
          >
            科技創新
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

