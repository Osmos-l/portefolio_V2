export default function Navbar() {
    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-7xl flex items-center justify-between py-4 px-12">
                <a className="text-white" href="https://jordanlcq.vercel.app/">jordanlcq.vercel</a>
                <p className="text-white">Contact me</p>
            </div>
            <div className="w-full h-[1px] from-transparent via-white to-transparent bg-gradient-to-r opacity-[.25]"></div>
        </div>
    )
}