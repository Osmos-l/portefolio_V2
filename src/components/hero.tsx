import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative w-full text-center">
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
                <p className="text-center py-4 text-lg mx-auto max-w-xl">
                Hi 👋, nice to meet you. My name is Jordan, I am a <b>Software Engineer</b> living in France 🇫🇷🥖🍷.
                </p>
                <a href="#" className="animate-bounce-slow mx-auto inline-block px-6 py-3 my-10 bg-emerald-600 text-white transition-all font-semibold rounded-lg shadow-md hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Let&apos;s be in touch
                </a>
            </div>
        </div>
    )
}