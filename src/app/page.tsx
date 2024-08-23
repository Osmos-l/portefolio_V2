import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-full">
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between py-4 px-12">
        <p className="text-white">jordan.dev</p>
        <p className="text-white">Contact me</p>
      </div>
      <div className="w-full h-[1px] from-transparent via-white to-transparent bg-gradient-to-r opacity-[.25]"></div>
    </div>
    <div className="w-full">
      <div className="w-full max-w-4xl mx-auto py-10">
      <div className="flex items-center">
          <Image
            src="/bitmoji_wall.png"
            width={300}
            height={300}
            alt="Angel Bitmoji of Jordan"
            className="mx-auto"
          />
        </div>
        <h1 className="text-center font-bold text-4xl">Software Engineer</h1>
        <p className="text-center py-4 text-lg mx-auto max-w-xl">
          Hi 👋, nice to meet you. My name is Jordan, I am a <b>Software Engineer</b> living in France 🇫🇷🥖🍷.
        </p>
      </div>
    </div>
    </>
  );
}
