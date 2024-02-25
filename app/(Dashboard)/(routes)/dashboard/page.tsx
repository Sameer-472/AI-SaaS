"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const router = useRouter();
  const tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color:  "text-violet-500",
      bgColor: "text-violet-500/10",
      href: "/conversation"
    },
    {
      label: "Music",
      icon: Music,
      color:  "text-emerald-500",
      bgColor: "text-emerald-500/10",
      href: "/music"
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      color:  "text-pink-500",
      bgColor: "text-pink-500/10",
      href: "/image"
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      color:  "text-orange-500",
      bgColor: "text-orange-500/10",
      href: "/video"
    },
    {
      label: "Code Generation",
      icon: Code,
      color:  "text-green-500",
      bgColor: "text-green-500/10",
      href: "/code"
    }
  ]
  return (
    <div>
      <div className="mb-8 space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the Power of AI</h2>
        <p className="text-muted-foreground text-center md:text-lg text-sm">Chat with the smartest AI-Experience the power of AI</p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool)=> (
          <Card onClick={()=> router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"> 
                <div className="flex items-center gap-x-4">
                    <div className={cn("p-2 w-fit rounded-md" , tool.color)}>
                      <tool.icon className={cn("w-8 h-8" , tool.color)}/>
                    </div>
                    <div className="font-semibold">
                      {tool.label}
                    </div>
                    <ArrowRight className="w-8 h-8"/>
                </div>
          </Card>

        ))}
      </div>
    </div>
  )
}
