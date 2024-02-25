"use client";

import { cn } from "@/lib/utils";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, SettingsIcon, VideoIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({weight: "600" , subsets: ["latin"]})

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/dashboard",
        color: "text-pink-500"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video-generation",
        color: "text-orange-500"
    },
    {
        label: "Music Generation",
        icon: MusicIcon,
        href: "/music-generation",
        color: "text-emerald-500"
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        href: "/code-generation",
        color: "text-green-500"
    },
    {
        label: "Settings",
        icon: SettingsIcon,
        href: "/settings",
        // color: "text-green-500"
    },
]

export const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-colf-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href={"/dashboard"} className="flex items-center mb-4 pl-4">
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill alt="logo" src={"/logo.png"} />
                    </div>
                    <h1 className={cn("text-2xl font-bold" , montserrat.className)}>Genius</h1>
                </Link>
                <div className="space-y-1 ">
                    {routes.map((item)=> (
                        <Link href={item.href} key={item.href} className={cn("flex text-sm w-full p-3 justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition" , pathname === item.href ? "bg-white/10" : "text-zinc-400")}>
                            <div className="flex items-center flex-1">
                                <item.icon className={cn("h-5 w-5 mr-3" , item.color)}/>
                                {item.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

