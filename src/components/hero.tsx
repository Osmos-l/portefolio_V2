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
                        alt="New York City Skyline"
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
                Hi 👋 I&apos;m Jordan — a <b>software engineer</b> passionate about <b>web technologies</b> and <b>AI-driven solutions</b>, based in France 🇫🇷.
                </p>
                <p className="text-center text-sm mx-auto max-w-xl text-gray-400">
                I&apos;m actively exploring opportunities in the US, whether for a job or to join a graduate program.
                </p>
                <div className="flex flex-row gap-4 pt-8 justify-center items-center">
                    <a
                        href="mailto:jordan.lcq1@gmail.com"
                        className="group relative mx-auto inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        target="_blank"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.01 6.51A2 2 0 0 1 4 5h16a2 2 0 0 1 1.99 1.51l-9.99 6.24-9.99-6.24zM2 8.76V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.76l-9.34 5.83a1 1 0 0 1-1.32 0L2 8.76z"/>
                        </svg>
                        Let&apos;s talk!
                        <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jordanlcq/"
                        className="mx-auto inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-full shadow transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        target="_blank"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.562 2.845-1.562 3.042 0 3.604 2.002 3.604 4.604v4.725z"/>
                        </svg>
                        LinkedIn
                    </a>
                </div>
               </div>
            <div className="w-full h-[1px] from-transparent via-white to-transparent bg-gradient-to-r opacity-[.25]"></div>
        </div>
    )
}