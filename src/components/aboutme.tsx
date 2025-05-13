import FrenchFlag from "./svg/flags/fr";
import UkFlag from "./svg/flags/uk";

export default function AboutMe() {
    return (
        <div className="w-full max-h-xl max-w-4xl mx-auto py-8 px-4 md:px-0">
            <div>
                <h3 className="font-bold text-5xl py-2">Who I Am</h3>
                <hr className="opacity-[.10]" />
                <p className="text-gray-400 md:text-base text-sm w-full text-justify py-2">
                    🚀 <b className="text-gray-300">Software Engineer with +5 years of experience</b>, my career began by developing custom game servers on Garry&apos;s Mod using Lua. This early exposure to coding taught me how to approach complex problems from unique angles, laying the foundation for my later work in <b className="text-gray-300">back-end engineering</b> and <b className="text-gray-300">AI</b>. 
                    <br />
                    <br />
                    💡 With a deep interest in artificial intelligence, I’ve advanced my expertise in <b className="text-gray-300">machine learning</b> and <b className="text-gray-300">deep learning</b> models. Today, I lead the development of <b className="text-gray-300">web applications for SNCF</b>, responsible for managing critical incident and accident data, used by thousands of employees daily. This <b className="text-gray-300">high-scale</b> project focuses on enhancing operational efficiency and safety, using cutting-edge technologies to improve real-world processes.
                    <br />
                    <br />
                    🌐 I’ve also worked with industry leaders like  <b className="text-gray-300">Thales</b> and <b className="text-gray-300">TotalEnergies</b>, where I contributed to building <b className="text-gray-300">secure, scalable, and high-performance systems</b>. My experience with these global players has given me a strong grasp of developing solutions that can scale and adapt to ever-evolving needs.
                    <br />
                    <br />
                    ⚡️ <b className="text-gray-300">Passionate about AI and innovation</b>, I continuously seek new technologies and methodologies to solve complex challenges. My goal is to build <b className="text-gray-300">intelligent, efficient systems</b> that drive meaningful change, and I’m always pushing myself to stay ahead of the curve in this rapidly evolving field.
                </p>
            </div>
        </div>
    )
}