import React, { useState } from 'react';

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
            <h1 className="text-xl md:text-2xl font-black tracking-wide text-white leading-none">Prinsh Kushwah</h1>
            <span className="text-[10px] font-medium text-teal-400 tracking-[0.2em] uppercase mt-1">Digital Growth Partner</span>
          </div>
        </div>

        <div className="space-x-8 hidden md:flex items-center text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#services" className="hover:text-teal-400 transition">Services</a>
          <a href="#projects" className="hover:text-purple-400 transition">Work</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
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
          <a href="#about" onClick={closeMenu} className="text-lg font-medium text-gray-300">About</a>
          <a href="#services" onClick={closeMenu} className="text-lg font-medium text-gray-300">Services</a>
          <a href="#projects" onClick={closeMenu} className="text-lg font-medium text-gray-300">Work</a>
          <a href="#contact" onClick={closeMenu} className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg font-bold text-white mx-10">Contact Now</a>
        </div>
      )}

      {/* HERO SECTION */}
      <main className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-24 z-10">
        <div className="group inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-slate-800/60 border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm">
          Expert in React & Modern Frontend
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
          High-Converting <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
            Landing Pages
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          I build lightning-fast frontends using <strong>React, JavaScript, and Tailwind CSS</strong> that turn casual visitors into loyal customers.
        </p>
        <a href="#contact" className="bg-white text-[#070b14] px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all">
          Get Started
        </a>
      </main>

      {/* ABOUT & LOGIC SECTION */}
      <section id="about" className="relative px-6 lg:px-24 pb-24 z-10">
        <div className="bg-slate-800/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-10 md:p-16 max-w-5xl mx-auto shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-left">The Logic Behind Growth</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-teal-400 font-bold mb-4 uppercase tracking-widest text-sm">Tech Stack</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Main modern technologies ka use karta hoon jaise <strong>React.js</strong> aur <strong>Tailwind CSS</strong>. Iska fayda ye hai ki aapki website seconds mein load hoti hai, jo SEO aur customer retention ke liye sabse zaroori hai.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded border border-blue-500/20 text-xs font-bold">React.js</span>
                <span className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded border border-yellow-500/20 text-xs font-bold">JavaScript ES6</span>
                <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded border border-cyan-500/20 text-xs font-bold">Tailwind CSS</span>
              </div>
            </div>

            <div>
              <h3 className="text-purple-400 font-bold mb-4 uppercase tracking-widest text-sm">Business Logic</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ek landing page sirf "achha" nahi dikhna chahiye, use <strong>Logic</strong> par kaam karna chahiye. Fast loading se bounce rate kam hota hai, aur clean interface se user ka trust badhta hai. Main design ko aise structure karta hoon ki user ka dhyan seedha aapke "Call to Action" par jaye, jis se aapka business grow hota hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (Numbers ready for update) */}
      <section id="contact" className="relative px-6 lg:px-24 pb-24 z-10">
        <div className="bg-gradient-to-br from-purple-900/60 to-slate-900/80 backdrop-blur-lg p-10 rounded-[2.5rem] border border-purple-500/30 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Connect With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            
            {/* Yahan aap apna naya number daal sakte hain */}
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-teal-500/30 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white">Prinsh Kushwah</h3>
              <p className="text-teal-400 text-sm mb-6 font-semibold uppercase tracking-wider">Frontend Specialist</p>
              
              <div className="mb-8">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">WhatsApp & Call</p>
                <p className="text-2xl font-black text-white tracking-wide">+91 89625 23092</p>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <a href="https://wa.me/918962523092?text=Hi%20Prinsh,%20I%20want%20to%20grow%20my%20business" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#1fae54] transition-all">💬 WhatsApp</a>
                <a href="tel:+918962523092" className="text-center bg-slate-800 hover:bg-slate-700 py-3 rounded-lg text-sm">📞 Quick Call</a>
              </div>
            </div>

            {/* Manager Card */}
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-purple-500/30 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white">Priya Kushwah</h3>
              <p className="text-purple-400 text-sm mb-6 font-semibold uppercase tracking-wider">Client Relations</p>
              <div className="mb-8">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Direct Support</p>
                <p className="text-2xl font-black text-white tracking-wide">+91 73896 86959</p>
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <a href="https://wa.me/917389686959?text=Hi%20Priya,%20I%20have%20a%20project%20query" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#1fae54] transition-all">💬 WhatsApp</a>
                <a href="tel:+917389686959" className="text-center bg-slate-800 hover:bg-slate-700 py-3 rounded-lg text-sm">📞 Call Priya</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="p-12 border-t border-white/5 text-center text-gray-500 text-sm bg-[#070b14]">
        <p>© 2026 Prinsh Kushwah. Expert in React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App1;