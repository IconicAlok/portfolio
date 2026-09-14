import React from 'react'

export const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full py-16 bg-white overflow-hidden scroll-smooth">
            <div className="max-w-6xl mx-auto px-6">
                <div
                    className="mb-10 text-center"
                    data-aos="fade-down"
                    data-aos-delay="100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3"
                        data-aos="fade-up"
                        data-aos-delay="200">Contact Us</h2>
                    <p className="text-gray-600"
                        data-aos="fade-down"
                        data-aos-delay="300">Send us a message we'll get back to you</p>
                </div>
                <div className="grid grid-cols-1 gap-8 items-center">
                    <div className="bg-gray-100 p-8 rounded-xl shadow-sm lg:mx-15">
                        <h3 className="text-xl font-bold text-gray-700 mb-3">Send Message</h3>
                        <form className="space-y-6"
                            data-aos="fade-right"
                            data-aos-delay="200" action="">
                            <div>
                                <input type="text" placeholder="Your Name"
                                    className="w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent" />
                            </div>
                            <div>
                                <input type="email" placeholder="Your Email"
                                    className="w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent" />
                            </div>
                            <div>
                                <textarea type="email" placeholder="Your Message"
                                    rows="5"
                                    className="w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent" />
                            </div>
                            <button type="submit"
                                className="w-full bg-gray-700 text-white py-3 mx-auto rounded-lg font-medium hover:bg-white hover:text-black shadow-md hover:shadow-lg transition-all duration-500">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}
