import { Github, Linkedin, Twitter } from "lucide-react"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer className="text-gray-700 bg-gray-100 pt-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10
            border-b border-gray-700 pb-10 mt-4">
                    <div>
                        <h3 className="text-2xl font-bold text-gray mb-4">ALOKKURI
                            <span className="text-gray-400">.DEV</span>
                        </h3>
                        <p className="text:sm text-gray-800 leading-relaxed">
                            This is a portfolio website about Alok Kuri
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">
                            Follow Me
                        </h4>
                        <div className="flex gap-4 text-xl">
                            <Link to="https://www.github.com/IconicAlok" className="hover:text-gray-400 transition">
                                <Github />
                            </Link>
                            <Link to="https://www.linkedin.com/in/alok-kurii/" className="hover:text-gray-400 transition">
                                <Linkedin />
                            </Link>
                            <Link href="https://www.x.com/alok-kuri" className="hover:text-gray-400 transition">
                                <Twitter />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-center text-sm text-gray-500">
                @ {new Date().getFullYear()} AlokKuri. All rights reserved.
            </div>
        </footer>
    )
}

export { Footer }