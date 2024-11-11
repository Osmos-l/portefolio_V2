import Image from "next/image";
import FrenchFlag from "./svg/flags/fr";
import UkFlag from "./svg/flags/uk";

export default function ResumeSection() {
    return (
        <div className="w-full max-h-xl max-w-4xl mx-auto">
            <div className="px-4 md:px-0">
                <div className="flex py-4 justify-between">
                    <div className="flex flex-col justify-end">
                        <h3 className="font-bold text-5xl py-2">My Resume</h3>
                    </div>
                </div>
                <hr className="opacity-[.10]" />
                <p className="text-gray-400 md:text-base text-sm w-full text-justify py-2">
                    If you&apos;d like to dive deeper into my qualifications and experience, feel free to explore my detailed resumes in both English and French.
                </p>
                <div className="w-full mx-auto text-center py-4 text-7xl">
                    <a
                        href="/resumes/resume.pdf"
                        target="_blank"
                        className="transition-all inline-block bg-custom px-2 rounded-tl-lg rounded-bl-lg border-t border-l border-b border-white border-opacity-10 hover:border-opacity-100"
                    >
                        <UkFlag
                            width={75}
                            height={75}
                        />
                    </a>
                    <a
                        href="/resumes/cv.pdf"
                        target="_blank"
                        className="transition-all inline-block bg-custom px-2 rounded-tr-lg rounded-br-lg border-t border-r border-b border-white border-opacity-10 hover:border-opacity-100"
                    >
                        <FrenchFlag
                            width={75}
                            height={75}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}