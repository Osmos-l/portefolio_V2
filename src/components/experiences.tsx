import { experiences, Experience } from "@/lib/data";
import Image from "next/image";

export default function ExperiencesSection() {
    const colorMap: { [key: string]: string } = {
        "pink-700": "bg-pink-700",
        "orange-700": "bg-orange-700",
        "green-700": "bg-green-700",
      };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-0">
            <div className="grid gap-6 grid-cols-2">
                {experiences.map((experience: Experience, index: number) => (
                    <a href={experience.website} 
                        target="_blank" 
                        key={index}
                        className={`relative h-full hover:scale-100 hover:-translate-y-1 transition ease-in-out delay-150 duration-300 scale-[.98] ${index === 0 ? 'col-span-2' : ''}`}
                    >
                        <div 
                            className={`absolute inset-0 ${colorMap[experience.color]} rounded-md blur animate-pulse-slow`}
                            style={{ animationDelay: `${Math.random() * 2}s` }}
                            ></div>
                        <div className="relative bg-custom rounded-xl border border-white border-opacity-10 p-4 transition-all h-full">
                            
                            <div className="relative">
                                <div>
                                    <Image
                                        src={experience.image}
                                        width={300}
                                        height={300}
                                        alt={`Logo of ${experience.company} company`}
                                        className="mx-auto relative"
                                    />
                                </div>
                                <div className="py-4">
                                    <p className="text-gray-400 uppercase text-sm">{experience.company}</p>
                                    <p className="relative text-2xl capitalize">{experience.position}</p>
                                </div>
                                <hr className="opacity-[.10]" />
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                                    {
                                        experience.skills.map((skill: string, index: number) => (
                                            <span 
                                                className="inline-flex items-center rounded-md transition-all
                                                            bg-opacity-5 bg-gray-50 
                                                            px-2 py-1 
                                                            text-xs hover:text-gray-300 text-gray-400 
                                                            ring-1 ring-inset ring-gray-500/10"
                                                key={index}
                                                ># {skill}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}