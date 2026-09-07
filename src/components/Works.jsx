import { ArrowRight, ArrowLeft } from 'lucide-react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

export const Works = () => {
    const location = useLocation()
    const isAllWorksPage = location.pathname === '/works'

    const visibleCards = isAllWorksPage ? projectsData : projectsData.slice(0, 3);
    return (
        <section id="work" className="w-full py-16 bg-white overflow-hidden scroll-smooth">
            <div className='border-b mb-3'></div>
            {/* Back navigation only appears when viewing as a full page */}
            {isAllWorksPage && (
                <div className="mb-4" data-aos="fade-right">
                    <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-black font-medium group">
                        <ArrowLeft className="w-4 h-4 mx-2 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                </div>
            )}

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 px-16" data-aos="fade-down" data-aos-delay="100">
                <div className="mb-2 md:mb-0 items-center">
                    <h2 className="text-3xl font-bold text-gray-900 text-left">My Work</h2>
                    <p className="text-gray-500 text-left">Explore my latest projects and creations</p>
                </div>

                {!isAllWorksPage && (
                    <NavLink to="/works" className="inline-flex items-center text-gray-700 hover:text-black font-medium group m-2" data-aos="fade-left" data-aos-delay="300" >
                        See all
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </NavLink>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-3">
                {visibleCards.map((project, index) => (
                    <div key={project.id} className="bg-gray-50 border rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all group" data-aos="zoom-in" data-aos-delay={200 + (index * 150)}>
                        <div className="relative overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                {project.category}
                            </span>
                            <h3 className="text-xl font-bold text-black my-3">{project.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                            <Link to={`/works/${project.id}`} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-black transition flex items-center justify-center group/btn">
                                View details
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
