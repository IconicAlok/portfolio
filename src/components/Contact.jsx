import { React, useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from "@emailjs/browser"

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // 'success', 'error'
        message: ""

    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publickKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            if (!serviceId || !templateId || !publickKey) {
                throw new Error(
                    "EmailJs configuration is messing. Please check environment variable"
                )
            }
            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publickKey);
            setSubmitStatus({
                type: "success",
                message: "Message sent successfully"
            })
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            console.error("EmailJS error: ", error)
            setSubmitStatus({
                type: "Failed",
                message: error.text || "Failed to sent message! Try again"
            })
        } finally {
            setIsLoading(false);
        }
    }

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
                            data-aos-delay="200"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
                                <input type="text"
                                    required placeholder="Your Name"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full p-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent" />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
                                <input type="email"
                                    required placeholder="your@email.com"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent" />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
                                <textarea required placeholder="Your Message"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none" />
                            </div>
                            <button type="submit"
                                disabled={isLoading}
                                className="w-full bg-gray-700 text-white py-2 rounded-lg font-medium hover:bg-white hover:text-black border border-transparent hover:border-gray-700 shadow-md hover:shadow-lg transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">

                                {isLoading ? (<>Sending..</>) :
                                    (<>Send Message <Send size={16} /> </>
                                    )}
                            </button>
                            {submitStatus.type &&
                                (
                                    <div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/200 text-green" : "bg-red-500/10 border border-gred-500/200 text-green"}`}>
                                        {submitStatus.type === "success" ?
                                            (<CheckCircle className='w-5 h-5 flex-shrink-0' />)
                                            :
                                            (<AlertCircle className='w-5 h-5 flex-shrink-0' />)
                                        }
                                        <span>{submitStatus.message}</span>
                                    </div>

                                )}
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}
