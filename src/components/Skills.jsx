import reactImg from '../assets/react.png'
import jsImg from '../assets/js.png'
import pythonImg from '../assets/python.png'
import tailwindImg from '../assets/tailwind.png'
import mongodbImg from '../assets/mongodb.png'
import expressImg from '../assets/express.png'
import restapiImg from '../assets/rest-api.svg'
import mysqlImg from '../assets/mysql.png'
export const Skills = () => {
    const skills = [
        {
            name: 'React',
            img: reactImg,
            desc: 'Lorem ipsum dolor sit amet.'
        },
        {
            name: 'JavaScript',
            img: jsImg,
            desc: 'Lorem ipsum dolor sit amet.'
        },
        {
            name: 'Python',
            img: pythonImg,
            desc: 'Lorem ipsum dolor sit amet.'
        },
        {
            name: 'Tailwind CSS',
            img: tailwindImg,
            desc: 'Lorem ipsum dolor sit amet.'
        },
        {
            name: 'MongoDB',
            img: mongodbImg,
            desc: 'Lorem ipsum dolor sit amet.'
        },
        {
            name: 'MySQL',
            img: mysqlImg,
            desc: 'Lorem ipsum dolor sit amet.'
        },
        {
            name: 'Express Js',
            img: expressImg,
            desc: 'Lorem ipsum dolor sit amet.'
        },
        {
            name: 'RestAPI',
            img: restapiImg,
            desc: 'Lorem ipsum dolor sit amet.'
        },
    ]
    return (

        <section id="skills"
            className="w-full py-16 bg-gray-150 scroll-m-24 overflow-hidden scroll-smooth">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12"
                    data-aos="fade-down"
                    data-aos-delay="100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2"
                        data-aos="fade-up"
                        data-aos-delay="100">My Tech Stack</h2>
                    <p className="text-gray-400"
                        data-aos="fade-up"
                        data-aos-delay="300">Technologies I specialize in</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index}
                            className="bg-gray-200 border border-gray-700 rounded-xl p-6 text-center
            hover:border-indigo-800 transition-all duration-300 transform hover:-translate-y-0.5"
                            data-aos="zoom-in"
                            data-aos-delay={200 + (index * 100)}>
                            <div className="flex justify-center mb-4">
                                <img src={skill.img} alt={skill.name}
                                    className="w-20 h-20 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {skill.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {skill.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
