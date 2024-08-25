import { projects, Project } from "@/lib/data"
import Image from "next/image"
import GithubMark from "@/components/svg/github";
import InternetMark from "@/components/svg/internet";

export default function ProjectsSection() {
    const sizeMap: { [key: string]: string } = {
        1: "col-span-1",
        2: "md:col-span-2"
      };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-0">
            <div className="py-6">
                <div className="w-full h-[1px] from-transparent via-white to-transparent bg-gradient-to-r opacity-[.25]"></div>
            </div>
            <div className="grid grid md:grid-cols-4 gap-6 grid-cols-2">
            {projects.map((project: Project, index: number) => (
                    <div
                        key={index}
                        className={`relative h-full transition ease-in-out delay-150 duration-300 scale-[.98] ${sizeMap[project.size]}`}
                    >
                        <div 
                            className={`absolute inset-0 rounded-md blur animate-pulse-slow`}
                            style={{ animationDelay: `${Math.random() * 2}s` }}
                            ></div>
                        <div className="relative bg-custom rounded-xl border border-white border-opacity-10 p-4 transition-all h-full">
                            
                            <div className="relative">
                                <div>
                                    <Image
                                        src={project.image}
                                        height={100}
                                        width={200}
                                        alt={`Logo of ${project.name} project`}
                                        className="mx-auto relative"
                                    />
                                </div>
                                <div className="py-4">
                                    <p className="text-gray-400 uppercase text-sm">{project.langages}</p>
                                    <p className="relative text-2xl capitalize">{project.name}</p>
                                </div>
                                <hr className="opacity-[.10]" />
                                <div className="flex flex-col justify-center align-center pt-4">
                                    <a 
                                        className="text-gray-400 hover:text-gray-200 flex items-center gap-2
                                                    fill-gray-500 hover:fill-white 
                                                    transition-colors duration-300"
                                        href={project.codeSource}
                                        target="_blank"
                                    >
                                        <GithubMark width={25} height={50} />
                                        <span className="text-base">
                                            Github
                                        </span>
                                        
                                    </a>
                                    <a 
                                        className="text-gray-400 hover:text-gray-200 flex items-center gap-2
                                                    fill-gray-500 hover:fill-white 
                                                    transition-colors duration-300"
                                        href={project.demo}
                                        target="_blank"
                                    >
                                        <InternetMark width={25} height={50} />
                                        <span className="text-base">
                                            Demo
                                        </span>
                                        
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}