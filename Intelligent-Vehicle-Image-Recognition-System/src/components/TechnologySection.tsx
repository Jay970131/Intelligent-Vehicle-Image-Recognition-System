import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState("autopilot");
  
  const technologies = [
    {
      id: "autopilot",
      title: "智能自動駕駛",
      description: "Tasle 的智能自動駕駛系統使用先進的攝像頭和雷達傳感器，為您提供最安全、最便捷的駕駛體驗。系統可以自動控制方向盤、加速和制動，讓您的旅程更加輕鬆。",
      image: "https://images.unsplash.com/photo-1559415096-46fb20a5832e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "battery",
      title: "革命性電池技術",
      description: "我們的專利電池技術提供業界領先的能源密度和充電速度。Tasle 車輛配備了最先進的鋰離子電池組，可在短短15分鐘內充電至80%，讓您無需為續航里程擔憂。",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "connectivity",
      title: "全面車聯網",
      description: "Tasle 車輛與您的數字生活無縫連接。通過智能手機應用程序遠程控制車輛功能，接收實時更新，並享受先進的導航和娛樂系統，打造個性化的駕駛體驗。",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-tasle-lightGray">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">科技創新</h2>
          <Separator className="w-20 h-1 bg-tasle-yellow mx-auto mb-6" />
          <p className="text-lg text-tasle-darkBlue max-w-2xl mx-auto px-6 py-3 rounded-lg text-xl">
            Tasle 不斷推動電動車技術的邊界，為您帶來未來出行體驗
          </p>
        </div>

        <Tabs defaultValue="autopilot" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 max-w-2xl mx-auto mb-8 bg-white rounded-lg p-1">
            {technologies.map(tech => (
              <TabsTrigger 
                key={tech.id} 
                value={tech.id} 
                className="text-sm md:text-base bg-white text-tasle-darkBlue data-[state=active]:bg-tasle-yellow data-[state=active]:text-white rounded-md"
              >
                {tech.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {technologies.map(tech => (
            <TabsContent key={tech.id} value={tech.id}>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="p-6 rounded-lg h-full">
                    <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                    <p className="text-lg text-tasle-darkBlue mb-6">{tech.description}</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-tasle-yellow rounded-full mr-2"></div>
                        <span>先進的感測器技術</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-tasle-yellow rounded-full mr-2"></div>
                        <span>持續軟體更新</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-tasle-yellow rounded-full mr-2"></div>
                        <span>人工智能學習系統</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={tech.image} 
                      alt={tech.title} 
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologySection;
