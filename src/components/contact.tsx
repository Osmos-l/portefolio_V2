export default function Contact() {
    return (
        <div className="w-full max-h-xl max-w-4xl mx-auto py-12 px-4 md:px-0">
            <div>
                <h3 className="font-bold text-center text-5xl py-2">Open to New Opportunities 🚀</h3>
                <hr className="opacity-[.10]" />
                <p className="text-gray-400 md:text-base text-sm w-full text-justify py-2">
                Feel free to reach out if you have new opportunities or ideas you&apos;d like to discuss! I&apos;m always open and eager to explore new possibilities.  😊.
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