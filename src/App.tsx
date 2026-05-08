import { motion } from 'motion/react';
import { Facebook, Droplets, Wrench, ShieldCheck, PenTool as Tool, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function App() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=100064084447940";

  const whatWeHave = [
    {
      title: "Expert Technicians",
      description: "A highly trained team of professionals with years of experience in pipe systems.",
      icon: <Wrench className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Modern Tools",
      description: "State-of-the-art diagnostic and repair equipment to solve problems efficiently.",
      icon: <Tool className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Quality Materials",
      description: "We use only premium, durable piping materials built to last.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    }
  ];

  const whatWeOffer = [
    "Residential & Commercial Pipe Installation",
    "Rapid Leak Detection & Repair",
    "Drainage System Solutions",
    "Pipe Maintenance & Upgrades",
    "Water Pressure Consultation",
    "Emergency Plumbing Services"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Header/Nav */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Using Droplets as a placeholder logo to match the plumbing/pipe theme */}
            <div className="bg-white p-1 rounded-lg border border-slate-200">
              <img src="/logo.jpg" alt="Cebu Pipe Specialists Logo" className="h-8 w-8 object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:inline-block">
              Cebu Pipe <span className="text-blue-600">Specialists</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 font-medium text-sm text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1.5 rounded-lg"
          >
            <Facebook className="h-4 w-4" />
            Follow Us
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-20">
        
        {/* Hero Section */}
        <section id="home" className="text-center max-w-3xl mx-auto flex flex-col gap-6 items-center scroll-mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium"
          >
            <Droplets className="w-4 h-4" />
            Cebu's Trusted Pipe Experts
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            Professional Piping & <br/> <span className="text-blue-600">Plumbing Solutions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed max-w-2xl"
          >
            We specialize in providing top-tier pipe services for homes and businesses across Cebu. From simple repairs to complex installations, we ensure your systems flow smoothly.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4"
          >
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-sm shadow-blue-200 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <Facebook className="w-5 h-5" />
              Visit Our Facebook Page
            </a>
          </motion.div>
        </section>

        {/* What We Have (Features grid) */}
        <section id="features" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">What We Have</h2>
            <p className="mt-4 text-slate-600">The resources and expertise to get the job done right.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whatWeHave.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What We Offer (Services list) */}
        <section id="services" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-center scroll-mt-24">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">What We Can Offer</h2>
            <p className="text-slate-600 leading-relaxed text-lg pb-4">
              Our comprehensive range of services guarantees that your piping issues are resolved quickly, safely, and cost-effectively. 
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {whatWeOffer.map((offer, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{offer}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
              <Facebook className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Let's Discuss Your Project</h3>
            <p className="text-slate-600 mb-4">Connect with us on Facebook for inquiries, quotes, or emergency assistance.</p>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition-colors w-full justify-center"
            >
              Message Us
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center max-w-5xl mx-auto w-full scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contact Us</h2>
            <p className="mt-4 text-slate-600">Get in touch with us for inquiries, quotes, or emergencies.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center hover:border-blue-100 hover:shadow-md transition-all">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 flex flex-col">
                <a href="tel:09989996788" className="hover:text-blue-600 transition-colors">0998 999 6788</a>
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center hover:border-blue-100 hover:shadow-md transition-all">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">
                <a href="mailto:tobpilipinas@asia.com" className="hover:text-blue-600 transition-colors">tobpilipinas@asia.com</a>
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center hover:border-blue-100 hover:shadow-md transition-all">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">
                Cebu City, Philippines
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center mt-12 block">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-white/50 mb-4">
            <img src="/logo.jpg" alt="Logo" className="h-8 w-8 object-contain rounded-md bg-white p-0.5" />
            <span className="font-bold text-xl tracking-tight text-white/90">Cebu Pipe Specialists</span>
          </div>
          <p>© {new Date().getFullYear()} Cebu Pipe Specialists. All rights reserved.</p>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Follow us on Facebook
          </a>
        </div>
      </footer>
    </div>
  );
}
