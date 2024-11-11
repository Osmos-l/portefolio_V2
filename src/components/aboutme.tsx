import FrenchFlag from "./svg/flags/fr";
import UkFlag from "./svg/flags/uk";

export default function AboutMe() {
    return (
        <div className="w-full max-h-xl max-w-4xl mx-auto py-8 px-4 md:px-0">
            <div>
                <h3 className="font-bold text-5xl py-2">Who I Am</h3>
                <hr className="opacity-[.10]" />
                <p className="text-gray-400 md:text-base text-sm w-full text-justify py-2">
                    🚀 <b className="text-gray-300">Software Engineer</b> with +4 years of experience, I began my coding journey by developing custom game servers on Garry&apos;s Mod using Lua, where I learned the importance of <b className="text-gray-300">creativity</b> and <b className="text-gray-300">problem-solving</b> in building something from scratch. 
                    This passion for development grew into a deep specialization in back-end engineering.
                    <br />
                    <br />
                    🌱 I thrive on designing and scaling complex systems. Currently, I&apos;m leading the development of a <b className="text-gray-300">web application for SNCF</b>, managing incident and accident feedback for thousands of daily users. This project is critical for improving safety and operations within the company.
                    <br />
                    <br />
                    💼 My professional experience also includes working on applications for industry giants like <b className="text-gray-300">Thales</b> and <b className="text-gray-300">Total Energies</b>, where I gained invaluable experience in building scalable, secure, and high-performance solutions.
                    <br />
                    <br />
                    🚀 Constantly eager to grow, I am always excited to learn new technologies and improve my skills to build innovative and impactful solutions.
                </p>
            </div>
        </div>
    )
}