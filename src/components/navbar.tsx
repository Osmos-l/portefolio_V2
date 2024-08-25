export default function Navbar() {
    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-7xl flex items-center justify-between py-4 px-12">
                <a className="text-white" href="https://jordanlcq.vercel.app/">jordanlcq.vercel</a>
                <a href="mailto:jordan.lcq1@gmail.com" className="text-white">
                    <div className="mx-auto inline-block px-6 py-3 bg-emerald-600 text-white transition-all font-semibold rounded-lg shadow-md hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Contact Me
                    </div>
                </a>
            </div>
            <div className="w-full h-[1px] from-transparent via-white to-transparent bg-gradient-to-r opacity-[.25]"></div>
        </div>
    )
}