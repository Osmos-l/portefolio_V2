import Image from "next/image";

export default function ResumeSection() {
    return (
        <div className="w-full h-full max-h-xl max-w-2xl mx-auto py-8">
            <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
                <div className="hidden md:block">
                    <Image
                        src="/bitmoji_books.png"
                        width={800}
                        height={800}
                        alt="Jordan bitmoji with books"
                    />
                </div>
                <div className="text-center flex flex-col justify-center px-4 md:px-0">
                    <div className="py-4">
                        <h3 className="text-center font-bold text-4xl py-2">Resume</h3>
                        <p className="text-gray-400 uppercase text-xs text-justify">
                            If you&apos;d like to learn more about my qualifications, please review my resume below.
                        </p>
                    </div>
                    <hr className="opacity-[.10]" />
                    <div className="w-full mx-auto text-center py-4 text-7xl">
                        <a
                            href="/resumes/resume.pdf"
                            target="_blank"
                            className="transition-all inline-block bg-custom px-2 rounded-tl-lg rounded-bl-lg border-t border-l border-b border-white border-opacity-10 hover:border-opacity-100"
                        >
                            🇬🇧
                        </a>
                        <a
                            href="/resumes/cv.pdf"
                            target="_blank"
                            className="transition-all inline-block bg-custom px-2 rounded-tr-lg rounded-br-lg border-t border-r border-b border-white border-opacity-10 hover:border-opacity-100"
                        >
                            🇫🇷
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}