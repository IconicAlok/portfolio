import { ArrowRight, Star } from "lucide-react"
import React from "react"
import { NavLink, Link } from "react-router-dom"

export const Client = () => {
    const clients = [
        {
            name: "John Smith",
            positon: "CEO, TechCrop",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsum.",
            avatar: "JS",
            rating: 5,
        },
        {
            name: "Sarah John",
            positon: "Director, InnovateCo",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsum.",
            avatar: "SJ",
            rating: 5,
        },
        {
            name: "Michel Chen",
            positon: "CTO, DigitalPlus",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsum.",
            avatar: "MC",
            rating: 5,
        },
    ]

    return (
        <section className="w-full py-20 bg-white scroll-m-24 overflow-hidden">
            <div className="border-b mb-3"></div>
            <div className="max-w-6xl mx-auto px-6">

                {/* Header Section */}
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
                    <div className="mb-6 md:mb-0">
                        <h2
                            className="text-3xl font-bold text-gray-900 text-left"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >My Clients</h2>
                        <p className="text-gray-600 mt-2 text-left"
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >Feedback from my happy clients</p>
                    </div>
                    <Link to="/client"
                        className="inline-flex items-center text-gray-700 hover:text-black font-medium group">
                        See all reviews
                        <ArrowRight className="w-4 h-4 mx-2 transition-transform group-hover:-translate-x-1" />
                    </Link>
                </div>

                {/* Clients Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clients.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-xl p-8 border border-gray-200 hover:shadow-lg
                        transition-shadow hover:border-gray-300 group"
                            data-aos="flip-up"
                            data-aos-delay={200 + (index * 100)}>
                            <div className="flex mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i}
                                        className="w-3 h-3 text-yellow-400 fill-yellow-400"
                                        strokeWidth={1.5} />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-8 font-medium leading-relaxed"
                            >"{item.feedback}"</p>
                            {/* Client info */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex
                                items-center justify-center font-bold mr-4">
                                    {item.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{item.name}</div>
                                    <div className="text-gray-600 text-sm">
                                        {item.position} </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
