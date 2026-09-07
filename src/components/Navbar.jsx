import { Code2, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Works', href: '/works' },
    { name: 'Services', href: '/service' },
    { name: 'Client', href: '/client' },
    { name: 'Contacts', href: '/contact' },
  ]
  const socialLinks = [
    { icon: <Github className="h5 w5" />, href: 'https://www.github.com/IconicAlok', label: 'Github' },
    { icon: <Linkedin className="h5 w5" />, href: 'https://www.linkedin.com/in/alok-kurii/', label: 'Linkedin' },
    { icon: <Mail className="h5 w5" />, href: 'https://mail.google.com', label: 'Mail' }
  ]
  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm"
      data-aos='fade-down'
      data-aos-delay='100'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <div className="flex items-center"
            data-aos-fade='fade-right'
            data-aos-delay='200'
          >
            <Code2 className="h-6 w-6 text-gray-800" />
            <span className="text-xl font-semibold w-12 h-full p-4">ALOKKURI</span>
          </div>
          <div className="hidden md:flex items:center space-x-8">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-200 ${isActive
                    ? "text-gray-600 font-semibold"
                    : "text-gray-700 hover:text-gray-400"
                  }`
                }

                data-aos='fade-down'
                data-aos-delay={300 + (index * 50)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-gray-400 transition-colors"
                aria-label={link.href}
                data-aos='fade-left'
                data-aos-delay={600 + (index * 50)}
              >
                {link.icon}
              </a>
            ))}
          </div>
          {/* mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Manu" : "Open Manu"}
            data-aos="fade-left"
            data-aos-delay="200">
            {isMenuOpen
              ? <X className="w-6 h-6" />
              : <Menu className="w-6 h-6" />
            }
          </button>
        </div>
        {/* mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-gray-600/60 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) =>
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `py-2 px-3 text-base font-medium transition-colors duration-200 rounded-md ${isActive
                      ? "text-gray-300 bg-gray-700/50"
                      : "text-gray-100 hover:text-gray-300 hover:bg-gray-500"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                  data-aos="fade-up"
                  data-aos-delay={100 + (index * 50)}>
                  {item.name}
                </NavLink>
              )}
            </div >
            <div className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t border-gray-100/20 ">
              {socialLinks.map((link, index) =>
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-200 hover:text-gray-400 transition-colors"
                  aria-label={link.label}
                  onClick={() => setIsMenuOpen(false)}>
                  {link.icon}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}