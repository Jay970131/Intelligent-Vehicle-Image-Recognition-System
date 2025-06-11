import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Instagram, Youtube, TwitterIcon } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to open external links
  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          <span className="text-tasle-yellow">Tasle</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Tasle 打造突破性的電動車體驗，融合尖端科技與極致設計，為您帶來未來出行方式
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-tasle-yellow hover:bg-tasle-yellow/80 text-tasle-darkBlue text-lg px-8 rounded-xl"
            onClick={() => openExternalLink('https://www.tesla.com')}
          >
            探索車款
          </Button>
          
          <Button 
            size="lg" 
            className="bg-tasle-yellow hover:bg-tasle-yellow/80 text-tasle-darkBlue text-lg px-8 rounded-xl"
            onClick={() => openExternalLink('https://auto.8891.com.tw/tesla')}
          >
            中古車網
          </Button>
        </div>
        
        <div className="flex justify-center mt-6 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            size="icon"
            className="bg-white hover:bg-white/80"
            onClick={() => openExternalLink('https://twitter.com/tesla')}
          >
            <TwitterIcon className="h-5 w-5 text-black" />
          </Button>
          
          <Button
            size="icon"
            className="bg-red-600 hover:bg-red-500"
            onClick={() => openExternalLink('https://youtube.com/@tesla')}
          >
            <Youtube className="h-5 w-5 text-white" />
          </Button>
          
          <Button
            size="icon" 
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90"
            onClick={() => openExternalLink('https://instagram.com/teslamotors')}
          >
            <Instagram className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="h-10 w-10 text-white" />
      </div>
    </section>
  );
};

export default Hero;
