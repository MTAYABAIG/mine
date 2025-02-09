import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
        tech: "React",
        link: "#",
    },
    {
        title: "BAKLE Platform",
        description: "The best solution for Digital marketing",
        tech: "Angular",
        link: "https://balke.tech",
    },
    {
        title: "BALKE Dashboard",
        description: "Place for bakle's administration made with the help of tailwindcss and SCSS",
        tech: "Angular",
        link: "https://streamable.com/ceerdk",
    },
    {
        title: "Digicontest",
        description: "UI for Digicontest built with bootstrap",
        tech: "Angular",
        link: "https://streamable.com/mpgj5i",
    },
    {
        title: "ELTAO",
        description: "Ecommerce Platform UI built with bootstrap",
        tech: "JS",
        link: "https://streamable.com/tnprof",
    },
    {
        title: "TATADAV",
        description: "Portifolio website for Tatadev agency",
        tech: "Angular",
        link: "https://streamable.com/co4ijx",
    },
]

const techColors = {
    "React": "bg-blue-500",
    "NEXT": "bg-gray-900",
    "Angular": "bg-red-500",
    "JS": "bg-yellow-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}