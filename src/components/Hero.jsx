//import hero from '../assets/abstract.jpg'
import { Link } from 'react-router-dom'
export const Hero = () => {
    return (
        <section id="home"
            className="relative min-h-screen  md:flex md:items-center overflow-hidden scroll-smooth">
            {/* <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{backgroundImage: `url(${hero})` }}/>
        */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8
            flex flex-col lg:flex-row items-center justify-between
            w-full pb-16 pt-2 sm:pt-16 md:pt-0 md:pb-0">
                <div
                    className="max-w-2xl mt-24 lg:mt-0 mb-8 lg:mb-0
                lg:pr-8 text-center lg:text-left order-1"
                    data-aos="fade-right"
                    data-aos-delay="200">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl
                font-bold text-gray-900 mb-4 leading-tight">Hello I'm <span className="md:text-gray-800 text-gray-700">
                            Alok Kuri</span></h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 mb-6" >FullStack Developer</h2>
                    <p className="text-base sm:text-lg md:text-xl md:text-gray-900 text-gray-800 mb-8 max-w-lg mx-auto lg:mx-0">
                        I specialize in building robust, scalable code, but what really drives me is the creative process of bringing digital products to life from scratch.
                        I’m always looking to connect with fellow builders and innovators in the tech space.
                        Great to connect with you!
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">

                        <Link to="works" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gray-600 text-white
                        font-medium rounded-lg hover:bg-gray-700 transition duration-300 text-sm sm:text-base"
                            data-aos="zoom-in"
                            data-aos-delay="400">View Project</Link>

                        <Link to="contact" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-transparent text-gray-600 border-2 border-gray-600
                        font-medium rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 text-sm sm:text-base"
                            data-aos="zoom-in"
                            data-aos-delay="500">Contact Me</Link>
                    </div>
                </div>

                <div className="border-2 border-gray-600 rounded-xl bg-transparent
            p-4 md:p-5 w-full max-w-xs sm:max-w-xs mx-auto lg:mx-0 order-2 mt-36 md:mt-0"
                    data-aos="fade-left"
                    data-aos-delay="300">

                    <div className="space-y-3 sm:space-y-4">
                        {[
                            { label: 'Experience', value: '2+ Years' },
                            { label: 'Project', value: '20+' },
                            { label: 'Clients', value: '25+' }
                        ].map((item, index) => (
                            <div key={index}
                                className="flex items-center justify-between"
                                data-aos="fade-left"
                                data-aos-delay={400 + (index * 100)}>
                                <span className="text-sm sm:text-base md:text-gray-700 text-gray-700 font-medium">
                                    {item.label}
                                </span>
                                <span className="text-base sm:text-lg md:text-xl font-bold text-gray-700">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                        <div className="border-t border-gray/20 pt-3">
                            <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span className="md:text-gray-700 text-gray-700">Availability:</span>
                                <span className="text-green-700 font-semibold">Available for work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
