export default function ContactSection() {
    return (
        <div className="w-full max-h-xl max-w-4xl mx-auto py-8 px-4 md:px-0">
            <div>
                <h3 className="font-bold text-5xl py-2">About me</h3>
                <p className="text-gray-400 md:text-base text-sm w-full text-justify py-2">
                    🖥️  I am a Software Engineer with over 4 years of professional experience in a diverse range of technologies,
                    including Ruby (Rails), JavaScript & TypeScript (React, Next.JS, Node.JS), Java (Spring), PHP (Symfony), SQL, Docker and Kubernetes.
                    <br />
                    <br />
                    💡 I enjoy tackling complex technical challenges and creating exceptional user experiences. 
                    My goal is to continue pushing the boundaries of technology and contributing to impactful projects.
                    <br />
                    <br />
                    Feel free to reach out to discuss new opportunities 😊.
                </p>
            </div>
            <div className="flex items-center justify-center gap-6 py-3">
                <a href="https://www.linkedin.com/in/jordanlcq" 
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
                                hover:bg-blue-700 
                                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Linkedin
                </a>
                <a href="mailto:jordan.lcq1@gmail.com" 
                    className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md 
                                hover:bg-gray-700 
                                focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                    Email
                </a>
            </div>
        </div>
    )
}