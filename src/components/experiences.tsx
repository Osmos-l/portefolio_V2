import { experiences, Experience } from "@/lib/data";
import Image from "next/image";

export default function ExperiencesSection() {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
                {experiences.map((experience: Experience, index: number) => (
                    <a href={experience.website} 
                        target="_blank" 
                        key={index}
                    >
                        <div className="bg-white bg-opacity-10 rounded-xl border border-white border-opacity-10 p-4">
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
                                <p className="text-2xl">{experience.position}</p>
                            </div>
                            <hr className="opacity-[.10]" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}