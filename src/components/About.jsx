// import img1 from "../assets/img1.jpg"
import { NavLink, useLocation } from 'react-router-dom'
export const About = () => {

    const location = useLocation()
    const isAboutPage = location.pathname === '/about'

    return (
        <section id="about" className="w-full py-20 bg-white overflow-hidden scroll-smooth">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* <div className="md:w-1/2 md:left-20 relative z-40"
                        data-aos='fade-right'
                        data-aos-delay="200">
                        <img src={img1} alt="About" className="w-155 h-130 object-cover" />
                    </div> */}
                    <div className="relative z-20 text-center md:text-left"
                        data-aos="fade-left"
                        data-aos-delay="300">
                        <div className="border-1 border-gray-700 bg-gray-200 rounded-2xl p-8 md:p-10 shadow-1xl">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6"
                                data-aos="fade-up"
                                data-aos-delay="400">About Me</h2>
                            <p className="text-gray-600 leading-relaxed mb-8"
                                data-aos="fade-up"
                                data-aos-delay="500">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Accusamus, ducimus quos animi odio quam sequi quidem
                                placeat iste enim, labore, laboriosam quas a id eum.
                                Libero qui totam eius soluta dignissimos magni hic nihil
                                quia vitae! Aspernatur a, ducimus voluptate ad animi quae
                                quidem qui molestiae,
                                mollitia dolore magni fugiat.
                            </p>
                            {!isAboutPage &&
                                <NavLink
                                    to="/about" className="px-6 py-3 border-2 border-gray-500 text-gray-700 font-medium rounded-lg bg-white hover:bg-gray-700 hover:text-white transition">
                                    Learn More
                                </NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
