import { books, Book } from "@/lib/data"
import Image from "next/image"
import GithubMark from "@/components/svg/github";
import InternetMark from "@/components/svg/internet";

export default function BooksSection() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-0">
            <div className="py-6">
                <div className="w-full h-[1px] from-transparent via-white to-transparent bg-gradient-to-r opacity-[.25]"></div>
            </div>
            <div className="grid grid md:grid-cols-4 gap-6 grid-cols-2">
            {books.map((book: Book, index: number) => (
                    <div
                        key={index}
                        className={`relative h-full transition ease-in-out delay-150 duration-300 scale-[.98] col-span-1`}
                    >
                        <div 
                            className={`absolute inset-0 rounded-md blur animate-pulse-slow`}
                            style={{ animationDelay: `${Math.random() * 2}s` }}
                            ></div>
                        <div className="relative bg-custom rounded-xl border border-white border-opacity-10 p-4 transition-all h-full">
                            
                            <div className="relative">
                                <div className="w-full h-[350px] flex items-center justify-center overflow-hidden rounded-md">
                                    <Image
                                        src={book.image}
                                        alt={`Logo of ${book.name} book`}
                                        width={400}
                                        height={400}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="py-4">
                                    <p className="text-gray-400 uppercase text-sm">{book.authors}</p>
                                    <p className="relative text-2xl capitalize">{book.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}