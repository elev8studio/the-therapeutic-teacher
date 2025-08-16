import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Leaf, Heart } from 'lucide-react'
import logo from '../assets/logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="The Therapeutic Teacher Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="text-xl font-bold">The Therapeutic Teacher</div>
                <div className="text-sm text-slate-300">Primary Tutoring Services</div>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Passionate about helping primary-aged children flourish through personalised tutoring 
              in a warm, therapeutic classroom environment. Every child deserves to succeed.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Heart className="w-4 h-4" />
              <span>Made with care for young learners</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Leaf className="w-4 h-4 mr-2" />
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link to="/" className="block text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-slate-300 hover:text-white transition-colors">
                About Lucy
              </Link>
              <Link to="/services" className="block text-slate-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/process" className="block text-slate-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link to="/testimonials" className="block text-slate-300 hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300">+44 7850 989629</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300 text-sm">thetherapeuticteacher.uk@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300">Home-based therapeutic classroom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-600 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; 2025 The Therapeutic Teacher. All rights reserved. | 
            Helping children grow and flourish through personalised learning.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

