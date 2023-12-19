"use client"
import {useRouter} from "next/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, Home, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react";

const tools=[
  {
    label: "Conversation",
    icon:MessageSquare,
    color:"text-pink-500",
    bg:"bg-pink-500/10",
    href:"/conversation"
  },{
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-violet-500",
    bg:"bg-violet-500/10",
    href:"/image",
},{
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bg:"bg-orange-700/10",
    href:"/video",
},{
    label: "Music Generation",
    icon: MusicIcon,
    color: "text-green-500",
    bg:"bg-green-500/10",
    href:"/music",
},{
    label: "Code Generation",
    icon: Code,
    color: "text-yellow-500",
    bg:"bg-yellow-500/10",
    href:"/code",
},{
  label: "Room Generation",
  icon: Home,
  color: "[#C5FFF8]",
  bg:"bg-[#C5FFF8]",
  href:"/room"
}
]


const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          chat with the smartest AI- Experiance the power of AI
        </p>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
            {tools.map((tool)=>(
              <Card onClick={()=>router.push(tool.href)}
                    key={tool.href}
                    className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
          
                      <div className="flex items-center gap-x-4">
                        <div className={cn("p-2 w-fit rounded-md",tool.bg)}>
                          <tool.icon className={cn("w-8 h-8",tool.color)}/>
                        </div>
                          <div className="font-semibold">
                            {tool.label}
                          </div>
                      </div>
                      <ArrowRight className="w-5 h-5"/>

              </Card>
            ))}
        </div>
        
      </div>
    </div>
  )
}

export default DashboardPage;