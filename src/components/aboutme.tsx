import FrenchFlag from "./svg/flags/fr";
import UkFlag from "./svg/flags/uk";

export default function AboutMe() {
    return (
        <div className="w-full max-h-xl max-w-4xl mx-auto py-8 px-4 md:px-0">
            <div>
                <h3 className="font-bold text-5xl py-2">Who I Am</h3>
                <hr className="opacity-[.10]" />
                <p className="text-gray-400 md:text-base text-sm w-full text-justify py-2">
                    🚀 <b className="text-gray-300">Software engineer with over 5 years of experience</b>, I started my journey building custom game servers on Garry&apos;s Mod using Lua. That early tinkering spirit taught me to dive deep, experiment fearlessly, and turn ideas into working systems — a mindset that still drives me today in <b className="text-gray-300">back-end engineering</b> and <b className="text-gray-300">AI</b>.
                    <br />
                    <br />
                    💡 My passion for artificial intelligence has led me to train <b className="text-gray-300">neural networks from scratch</b>, explore <b className="text-gray-300">deep learning architectures</b>, and apply ML to real-world use cases. I love bridging the gap between theory and practice — whether it’s a model running in production or just a paper turned into code.
                    <br />
                    <br />
                    🏗️ Today, I lead the development of <b className="text-gray-300">critical web platforms at SNCF</b>, helping manage incident and accident data across the organization. These tools are used daily by thousands of employees and play a key role in improving safety and operations — high-impact, high-responsibility work that I take to heart.
                    <br />
                    <br />
                    🌐 I’ve also contributed to large-scale systems at <b className="text-gray-300">Thales</b> and <b className="text-gray-300">TotalEnergies</b>, where I helped build <b className="text-gray-300">secure, scalable solutions</b> used in demanding industrial contexts. These experiences sharpened my ability to adapt, deliver, and keep a clear focus under pressure.
                    <br />
                    <br />
                    👤 Beyond the code, I’m a curious mind who loves learning how things work — and making them better. Whether I’m optimizing a SQL query, or prototyping a CNN on CIFAR-10, I thrive on solving real problems with elegant, thoughtful solutions.
                    <br />
                    <br />
                    ⚡️ I’m driven by a simple goal: to build <b className="text-gray-300">intelligent, efficient systems</b> that actually help people. I stay close to the latest tools, and far from hype. If there’s something new to learn or create, you’ll probably find me in the middle of it.
                </p>

            </div>
        </div>
    )
}