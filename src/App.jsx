import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-cyan-500 selection:text-white relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Sticky Glassmorphism Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/70 border-b border-white/5 flex justify-between items-center p-5 lg:px-24 transition-all">
        <h1 className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Prinsh<span className="text-white">.dev</span>
        </h1>
        <div className="space-x-6 hidden md:flex text-sm font-medium text-gray-300">
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
        </div>
        <a 
          href="#contact" 
          className="relative inline-flex h-10 items-center justify-center rounded-lg bg-cyan-500 px-6 font-medium text-white hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.5)]"
        >
          Hire Me
        </a>
      </nav>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center text-center px-6 pt-20 pb-32">
        
        {/* Animated Badge */}
        <div className="group inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-800/50 border border-cyan-500/30 text-cyan-300 text-sm font-medium backdrop-blur-sm cursor-pointer hover:border-cyan-400 transition-all">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          Accepting Freelance Clients
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Crafting Digital <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
            Experiences
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
          Hi, I'm Prinsh. A React & Tailwind expert building lightning-fast, high-converting websites. Ready to turn your vision into a stunning reality.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          <button className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 w-full sm:w-auto">
            Explore My Work
          </button>
          <button className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
            Download Resume 📄
          </button>
        </div>
      </main>

      {/* Projects Section */}
      <section id="projects" className="relative px-6 lg:px-24 pb-24 z-10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-cyan-500 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          {/* The Royal Hotel Project Card */}
<div className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden max-w-md hover:border-slate-700 transition-all cursor-pointer">
  
  {/* Icon / Image Section */}
  <div className="bg-[#0f172a] h-48 flex items-center justify-center">
    <span className="text-6xl drop-shadow-2xl hover:scale-110 transition-transform">👑</span>
  </div>

  {/* Content Section */}
  <div className="p-6">
    <h3 className="text-2xl font-bold text-white mb-2">The Royal - Luxury Hotel System</h3>
    
    <p className="text-teal-400 text-sm font-semibold tracking-wide mb-4">
      Solved: Role-based dashboards & premium UI/UX
    </p>
    
    <p className="text-slate-400 text-sm leading-relaxed">
      A dual-interface React application featuring a luxury dark-mode landing page and clean, modern portals for both guests and admin staff.
    </p>
  </div>

</div>

          {/* Project 2 */}
          <div className="group bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.4)]">
            <div className="bg-slate-900/50 h-40 rounded-xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
               <span className="text-5xl group-hover:scale-110 transition-transform duration-500">🧘‍♂️</span>
            </div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Spiritual Yoga Classes</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              A high-conversion landing page for a local yoga studio featuring a "3 Days Demo Free" registration system.
            </p>
            <div className="flex gap-2 text-xs font-semibold text-blue-300">
              <span className="bg-blue-500/10 px-3 py-1 rounded-full">HTML/CSS</span>
              <span className="bg-blue-500/10 px-3 py-1 rounded-full">JavaScript</span>
            </div>
          </div>

          {/* Contact Card */}
          <div id="contact" className="bg-gradient-to-br from-slate-800/80 to-slate-900 p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold text-white mb-2 z-10">Let's work together!</h3>
            <p className="text-gray-400 text-sm mb-8 z-10">I'm currently available for freelance frontend projects.</p>
            
            <div className="space-y-4 z-10">
              <a href="mailto:hello@prinsh.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors p-3 bg-slate-900/50 rounded-xl">
                <span>✉️</span> hello@prinsh.com
              </a>
              <div className="flex items-center gap-4 text-gray-300 p-3 bg-slate-900/50 rounded-xl">
                <span>📞</span> +91 9876543210
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;