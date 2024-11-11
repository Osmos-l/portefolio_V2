import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative w-full text-center">
            <div className="absolute inset-0 flex justify-center items-center backdrop-blur-xl overflow-hidden">
                <div className="relative w-full p-[1px] opacity-[.35]">
                    <Image
                        src="/nycv.jpeg"
                        width={5000}
                        height={5000}
                        alt="Formula 1"
                        className="object-contain w-full"
                    />
                </div>
            </div>
            <div className="relative w-full max-w-4xl mx-auto py-10">
                <div className="flex items-center">
                    <Image
                        src="/bitmoji_wall.png"
                        width={300}
                        height={300}
                        alt="Angel Bitmoji of Jordan"
                        className="mx-auto relative"
                    />
                </div>
                <h1 className="text-center font-bold text-4xl">Software Engineer</h1>
                <p className="text-center pt-4 text-lg mx-auto max-w-xl">
                Hi 👋, I’m Jordan, a Software Engineer specializing in <b>web development</b> and <b>scalable</b> projects, based in France 🇫🇷.<br />
                </p>
                <p className="text-center text-small mx-auto max-w-xl text-gray-400">
                I’m currently exploring opportunities in the US.
                </p>
                <a href="mailto:jordan.lcq1@gmail.com" className="animate-bounce-slow mx-auto inline-block px-6 py-3 my-10 bg-emerald-600 text-white transition-all font-semibold rounded-lg shadow-md hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Let&apos;s connect !
                </a>
            </div>
            <div className="w-full h-[1px] from-transparent via-white to-transparent bg-gradient-to-r opacity-[.25]"></div>
        </div>
    )
}