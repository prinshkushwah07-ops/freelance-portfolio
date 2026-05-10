import React, { useState } from "react";

function App1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 font-sans selection:bg-purple-500 selection:text-white relative overflow-hidden scroll-smooth">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b14]/90 border-b border-white/5 flex justify-between items-center p-5 lg:px-24 transition-all">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-400 blur-md opacity-50 rounded-full animate-pulse"></div>
            <img
              src="https://ui-avatars.com/api/?name=Prinsh+Kushwah&background=0D8ABC&color=fff&rounded=true&bold=true"
              className="relative w-12 h-12 rounded-full border-2 border-teal-400 object-cover"
              alt="Prinsh Kushwah"
            />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-xl md:text-2xl font-black tracking-wide text-white leading-none">
              Prinsh Kushwah
            </h1>
            <span className="text-[10px] font-medium text-teal-400 tracking-[0.2em] uppercase mt-1">
              Digital Growth Partner
            </span>
          </div>
        </div>

        <div className="space-x-8 hidden md:flex items-center text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-teal-400 transition">
            Services
          </a>
          <a href="#projects" className="hover:text-purple-400 transition">
            Work
          </a>
          <a href="#contact" className="hover:text-teal-400 transition">
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-2xl text-white focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[88px] left-0 w-full bg-[#070b14]/95 backdrop-blur-xl border-b border-white/10 z-40 flex flex-col p-6 gap-6 text-center shadow-2xl">
          <a
            href="#about"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-300 hover:text-purple-400"
          >
            About
          </a>
          <a
            href="#services"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-300 hover:text-teal-400"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-300 hover:text-purple-400"
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg font-bold text-white mx-10"
          >
            Contact Now
          </a>
        </div>
      )}

      {/* HERO SECTION */}
      <main className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-24 z-10">
        <div className="group inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-slate-800/60 border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          </span>
          Helping local businesses grow online
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
          I build websites that <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
            Get You More Customers
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Specializing in high-performance <strong>Landing Pages</strong> and{" "}
          <strong>Frontend</strong> development using{" "}
          <strong>React, JavaScript, and Tailwind CSS</strong> to turn visitors
          into clients.
        </p>
        <a
          href="#services"
          className="bg-white text-[#070b14] px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all"
        >
          See How I Can Help
        </a>
      </main>

      {/* ABOUT ME & BUSINESS LOGIC */}
      <section id="about" className="relative px-6 lg:px-24 pb-24 z-10">
        <div className="bg-slate-800/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-10 md:p-16 max-w-5xl mx-auto shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-left">
            More Than Just A Web Developer
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 text-left">
            Main aapke business ke liye modern aur fast{" "}
            <strong>Frontend</strong> solutions create karta hoon. Using{" "}
            <strong>React, JavaScript, and Tailwind CSS</strong>, I ensure your
            website looks premium and works flawlessly on every device.
          </p>

          {/* BUSINESS LOGIC IN ENGLISH */}
          <div className="mt-10 p-8 rounded-2xl bg-[#0a0f1d] border border-purple-500/20">
            <h3 className="text-teal-400 font-bold mb-4 uppercase tracking-widest text-sm">
              Business Logic for Growth
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed font-medium">
              A high-performance landing page built with modern tech ensures
              lightning-fast loading speeds, which directly reduces bounce
              rates. Professional UI/UX establishes immediate trust with your
              visitors. By strategically optimizing the frontend journey and
              call-to-actions, I help your business capture more leads and scale
              revenue effectively.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30">
              React Expert
            </span>
            <span className="bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold border border-teal-500/30">
              Tailwind Design
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
              JavaScript Logic
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative px-6 lg:px-24 pb-32 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Can I Do For Your Business?
          </h2>
          <p className="text-gray-400">
            Everything you need to establish a strong digital presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/60 p-8 rounded-3xl border border-white/10 hover:border-teal-500/50 transition-colors">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">
              React Landing Pages
            </h3>
            <p className="text-gray-400 text-sm">
              Highly optimized landing pages designed to convert visitors into
              paying customers using React and Tailwind.
            </p>
          </div>
          <div className="bg-slate-800/60 p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-colors">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Modern Frontend
            </h3>
            <p className="text-gray-400 text-sm">
              Building fast, responsive, and secure frontend architectures for
              your digital storefronts and retail brands.
            </p>
          </div>
          <div className="bg-slate-800/60 p-8 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-colors">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Business Growth
            </h3>
            <p className="text-gray-400 text-sm">
              Implementing business logic that automates your daily tasks and
              saves your valuable time.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative px-6 lg:px-24 pb-32 z-10">
        <h2 className="text-3xl font-bold text-white mb-12">
          Examples of My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-slate-800/40 p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all">
            <div className="bg-slate-900/50 h-48 rounded-xl mb-6 flex items-center justify-center text-6xl">
              🏨
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Hotel Booking System
            </h3>
            <p className="text-teal-400 text-sm font-semibold mb-3">
              Solved: Manual entry & double bookings
            </p>
            <p className="text-gray-400 text-sm">
              A seamless interface for room availability and management.
            </p>
          </div>
          <div className="group bg-slate-800/40 p-8 rounded-3xl border border-white/5 hover:border-teal-500/50 transition-all">
            <div className="bg-slate-900/50 h-48 rounded-xl mb-6 flex items-center justify-center text-6xl">
              🧘‍♂️
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Spiritual Yoga Classes
            </h3>
            <p className="text-teal-400 text-sm font-semibold mb-3">
              Solved: Low walk-in leads
            </p>
            <p className="text-gray-400 text-sm">
              Created an attractive webpage featuring a '3 Days Demo Free'
              system to capture daily leads.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM CONTACT SECTION */}
      <section id="contact" className="relative px-6 lg:px-24 pb-24 z-10">
        <div className="bg-gradient-to-br from-purple-900/60 to-slate-900/80 backdrop-blur-lg p-10 rounded-[2.5rem] border border-purple-500/30 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
            Let's Discuss Your Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Developer Card (Prinsh) */}
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-teal-500/30 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/10 blur-xl rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">Prinsh Kushwah</h3>
              <p className="text-teal-400 text-sm mb-6 font-semibold uppercase tracking-wider">
                Lead Developer
              </p>
              <div className="mb-8">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">
                  Direct Line
                </p>
                <p className="text-2xl font-black text-white tracking-wide">
                  +91 89625 23092
                </p>
                <p className="text-sm text-gray-400 mt-1 font-medium">
                  prinshkushwah07@gmail.com
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="https://wa.me/918962523092?text=Hi%20Prinsh,%20I%20need%20a%20website"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#1fae54] transition-all"
                >
                  💬 Message on WhatsApp
                </a>
                <div className="flex gap-2 text-xs">
                  <a
                    href="tel:+918962523092"
                    className="flex-1 text-center bg-slate-800 hover:bg-slate-700 border border-white/5 transition py-3 rounded-lg"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href="mailto:prinshkushwah07@gmail.com"
                    className="flex-1 text-center bg-slate-800 hover:bg-slate-700 border border-white/5 transition py-3 rounded-lg"
                  >
                    ✉️ Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Manager Card (Priya) */}
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-purple-500/30 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 blur-xl rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">Priya Kushwah</h3>
              <p className="text-purple-400 text-sm mb-6 font-semibold uppercase tracking-wider">
                Client Relations
              </p>
              <div className="mb-8">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">
                  Direct Line
                </p>
                <p className="text-2xl font-black text-white tracking-wide">
                  +91 73896 86959
                </p>
                <p className="text-sm text-gray-400 mt-1 font-medium">
                  prinshkushwah07@gmail.com
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="https://wa.me/917389686959?text=Hi%20Priya,%20I%20have%20a%20project%20query"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#1fae54] transition-all"
                >
                  💬 Message on WhatsApp
                </a>
                <div className="flex gap-2 text-xs">
                  <a
                    href="tel:+919685535001"
                    className="flex-1 text-center bg-slate-800 hover:bg-slate-700 border border-white/5 transition py-3 rounded-lg"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href="mailto:prinshkushwah07@gmail.com"
                    className="flex-1 text-center bg-slate-800 hover:bg-slate-700 border border-white/5 transition py-3 rounded-lg"
                  >
                    ✉️ Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-12 border-t border-white/5 text-center text-gray-500 text-sm bg-[#070b14]">
        <p>© 2026 Prinsh Kushwah. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4 font-bold text-gray-400 uppercase tracking-widest text-[10px]">
          <a href="#" className="hover:text-cyan-400 transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-purple-400 transition">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App1;
