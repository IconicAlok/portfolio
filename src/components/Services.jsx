import { ArrowRight } from 'lucide-react'
import services from '../assets/services.jpg'

export const Services = () => {
    return (
        <section className="w-full md:px-8
    scroll-m-24 overflow-hidden scroll-smooth border-t">
        <div className="mb-20"></div>
            <div className="relative rounded-2xl overflow-hidden mb-2 mx-4"
                data-aos="zoom-in"
                data-aos-delay="100">
                <img src={services} alt="Services" className="w-full h-95 md:h-105 object-cover"
                    data-aos="fade-in"
                    data-aos-delay="200" />
                <div className="absolute inset-0 flex items-center ">
                    <div className="px-6 md:px-16 max-w-xl text-gray-900">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight"
                            data-aos="fade-right"
                            data-aos-delay="300">
                            Let's grow your <br /> Brand together!
                        </h2>
                        <p className="mt-4 text-sm md:text-base text-gray-700"
                            data-aos="fade-right"
                            data-aos-delay="400">Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit.
                            Officiis, ipsa.
                        </p>
                        <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 
                    text-sm font-semibold text-black hover:bg-gray-100 transition-colors"
                            data-aos="zoom-in"
                            data-aos-delay="500">
                            My Services
                            <ArrowRight className="text-lg" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
