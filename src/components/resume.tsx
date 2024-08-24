import Image from "next/image";

export default function ResumeSection() {
    return (
        <div className="w-full max-h-xl max-w-4xl mx-auto py-8">
            <div className="px-4 md:px-0">
                <div className="flex py-4 justify-between">
                    <div className="flex flex-col justify-end">
                        <h3 className="font-bold text-5xl py-2">Resume</h3>
                        <p className="text-gray-400 uppercase md:text-base text-sm w-full md:w-2/3">
                            If you&apos;d like to learn more about my qualifications, please review my resume below.
                        </p>
                    </div>
                    <Image
                        src="/bitmoji_books.png"
                        width={200}
                        height={200}
                        className="hidden md:block"
                        alt="Jordan bitmoji with books"
                        />
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
    )
}