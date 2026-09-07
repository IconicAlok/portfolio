import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projectsData } from '../data/projectsData' // Import here

export const WorkDetails = () => {
    const { id } = useParams()

    // Find project dynamically from our imported array
    const project = projectsData.find((item) => item.id === id)

    if (!project) {
        return (
            <div className="py-24 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h2>
                <Link to="/works" className="text-gray-600 hover:text-black underline">Back to Directory</Link>
            </div>
        )
    }

    return (
        <section className="w-full py-16 bg-white scroll-smooth">
            <div className="mb-8 mx-2" data-aos="fade-right">
                <Link to="/works" className="inline-flex items-center text-sm text-gray-600 hover:text-black font-medium group">
                    <ArrowLeft className="w-4 h-4 mx-2 transition-transform group-hover:-translate-x-1" />
                    Back to projects
                </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mx-2">
                <div className="lg:col-span-2" data-aos="fade-up">
                    <div className="rounded-xl overflow-hidden bg-gray-100 border">
                        <img src={project.image} alt={project.title} className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                </div>
                <div className="flex flex-col justify-between" data-aos="fade-left">
                    <div>
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-4">
                            {project.category}
                        </span>
                        <h1 className="text-3xl font-bold text-black mb-4">{project.title}</h1>
                        <p className="text-gray-600 text-sm leading-relaxed mb-8">{project.desc}</p>
                    </div>
                    <div className="border-t pt-6 space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Client</span>
                            <span className="font-medium text-black">{project.client || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Timeline</span>
                            <span className="font-medium text-black">{project.date || 'N/A'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
