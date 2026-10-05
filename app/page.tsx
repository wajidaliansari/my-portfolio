import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen text-slate-50 font-sans relative selection:bg-teal-500 selection:text-white">
      
      {/* PROFESSIONAL DARK SaaS/AI BACKGROUND */}
      <div className="fixed inset-0 z-[-1] h-full w-full bg-[#111827] overflow-hidden">
        {/* Glowing Ambient Orbs - Adjusted for Dark Mode */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-900/40 blur-[120px]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/40 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-blue-900/30 blur-[120px]"></div>
        
        {/* Modern Technical Dot Pattern with Fade Mask */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(180deg,black_10%,transparent_90%)] opacity-50"></div>
      </div>

      {/* Floating Pill Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.4)] flex justify-between items-center md:gap-8 transition-all">
        <span className="font-extrabold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400 pr-4 hidden md:block">WA.</span>
        
        {/* Navigation Links */}
        <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-semibold text-slate-300 overflow-x-auto no-scrollbar items-center">
          <a href="#projects" className="hover:text-teal-400 transition-colors whitespace-nowrap">Projects</a>
          <a href="#experience" className="hover:text-teal-400 transition-colors whitespace-nowrap">Experience</a>
          <a href="#certifications" className="hover:text-teal-400 transition-colors whitespace-nowrap">Certifications</a>
          <a href="#publications" className="hover:text-teal-400 transition-colors whitespace-nowrap">Publications</a>
          <a href="#education" className="hover:text-teal-400 transition-colors whitespace-nowrap">Education</a>
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-2 px-4 py-1.5 bg-teal-500/10 text-teal-300 border border-teal-500/30 rounded-full text-xs font-bold hover:bg-teal-500 hover:text-white transition-all whitespace-nowrap">
            PDF Resume
          </a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-16 relative z-10">
        
        {/* Hero Section - Centered */}
        <header className="mb-16 max-w-3xl mx-auto flex flex-col items-center text-center">
          
          {/* PROFILE PHOTO WITH GLOWING RING */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 mb-8 mx-auto group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400 to-purple-500 opacity-50 blur-xl group-hover:opacity-80 transition-opacity duration-500"></div>
            <img 
              src="/profile.png" 
              alt="Wajid Ali Ansari" 
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-700 shadow-2xl z-10"
            />
          </div>

          <div className="inline-block mb-6 px-4 py-1.5 bg-slate-800 border border-slate-700 text-teal-400 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
            Available for Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400">Wajid.</span>
          </h1>
          
          {/* Modern Contact Badges - Centered */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-xl text-sm font-medium text-slate-300 shadow-sm">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Pune, Maharashtra
            </span>
            <a href="tel:+919919439901" className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-xl text-sm font-medium text-slate-300 shadow-sm hover:border-teal-500 hover:text-teal-300 hover:bg-slate-800 transition-all">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +91 9919439901
            </a>
            <a href="mailto:aliwajid04786@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-xl text-sm font-medium text-slate-300 shadow-sm hover:border-blue-500 hover:text-blue-300 hover:bg-slate-800 transition-all">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              aliwajid04786@gmail.com
            </a>
          </div>

          {/* Buttons - Centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold text-center hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-900/50 transition-all active:scale-95 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Download Resume
            </a>
            <a href="https://www.linkedin.com/in/wajid-ali-ansari/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl font-semibold text-center hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all active:scale-95">
              Connect on LinkedIn
            </a>
            <a href="https://github.com/wajidaliansari?tab=repositories" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl font-semibold text-center hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all active:scale-95">
              View GitHub
            </a>
          </div>
        </header>

        {/* Projects Section */}
        <section id="projects" className="mb-20 pt-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Featured Work</h3>
            <div className="h-px bg-slate-700 flex-1 mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="group relative bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border border-slate-700 hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors relative z-10">AI Chatbot with UI</h4>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed relative z-10">Developed a workflow-based AI chatbot for structured conversation, integrating a robust backend with a clean user interface.</p>
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {['LangGraph', 'Streamlit', 'Python'].map(tech => (<span key={tech} className="px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-lg text-xs font-semibold">{tech}</span>))}
              </div>
            </div>

            <div className="group relative bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border border-slate-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors relative z-10">PDF to Word Converter</h4>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed relative z-10">Built an application that instantly converts uploaded PDF files into editable Word (.docx) documents through a simple, user-friendly interface.</p>
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {['Python', 'Streamlit'].map(tech => (<span key={tech} className="px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-lg text-xs font-semibold">{tech}</span>))}
              </div>
            </div>
            
            <div className="group relative bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border border-slate-700 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors relative z-10">Production AI Microservices</h4>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed relative z-10">Developed and deployed scalable microservices for AI model inference, achieving under 100ms latency on production models handling 500+ daily requests.</p>
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {['FastAPI', 'Machine Learning', 'Python'].map(tech => (<span key={tech} className="px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-lg text-xs font-semibold">{tech}</span>))}
              </div>
            </div>

            <div className="group relative bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border border-slate-700 hover:border-slate-500 hover:shadow-2xl hover:shadow-slate-700/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-slate-300 transition-colors relative z-10">Data Validation & Scrapers</h4>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed relative z-10">Built Python validation tools using regex and developed a web scraper paired with data visualization pipelines using powerful analytics libraries.</p>
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {['Pandas', 'Matplotlib', 'Regex'].map(tech => (<span key={tech} className="px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-lg text-xs font-semibold">{tech}</span>))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20 pt-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Experience</h3>
            <div className="h-px bg-slate-700 flex-1 mt-2"></div>
          </div>
          
          <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-8 md:p-10 mb-6 shadow-sm hover:border-teal-500/50 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-5">
              <div>
                <h4 className="text-xl font-bold text-white">Machine Learning Engineering Intern</h4>
                <p className="text-teal-400 font-bold mt-1">FlyRank AI</p>
              </div>
              <span className="text-sm text-slate-300 font-semibold bg-slate-700/50 px-4 py-1.5 rounded-full mt-4 md:mt-0 w-fit">Sept 2026 - Present</span>
            </div>
            <ul className="text-slate-400 space-y-2 text-sm leading-relaxed list-disc list-inside marker:text-teal-500">
              <li>Developed and deployed FastAPI microservices for AI model inference.</li>
              <li>Achieved under 100ms latency on production models handling 500+ daily requests.</li>
            </ul>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-8 md:p-10 shadow-sm hover:border-blue-500/50 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-5">
              <div>
                <h4 className="text-xl font-bold text-white">Python Development Intern</h4>
                <p className="text-blue-400 font-bold mt-1">Cognifyz Technologies</p>
              </div>
              <span className="text-sm text-slate-300 font-semibold bg-slate-700/50 px-4 py-1.5 rounded-full mt-4 md:mt-0 w-fit">Sept 2024 - Oct 2024</span>
            </div>
            <ul className="text-slate-400 space-y-2 text-sm leading-relaxed list-disc list-inside marker:text-blue-500">
              <li>Built Python validation tools (Email, Password Strength) using regular expressions.</li>
              <li>Developed web scrapers and data visualization projects using Pandas and Matplotlib.</li>
              <li>Implemented file-handling scripts to process text files and automate repetitive tasks.</li>
            </ul>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-20 pt-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Certifications & Virtual Internships</h3>
            <div className="h-px bg-slate-700 flex-1 mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-sm">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-teal-400 text-xl">🐍</span> Python & Data Science
              </h4>
              <ul className="text-slate-400 space-y-2 text-sm leading-relaxed list-disc list-inside marker:text-teal-500">
                <li>Introduction to Python (Analytics Vidhya)</li>
                <li>Python for Data Science (IBM)</li>
                <li>Python & SQL (HackerRank)</li>
                <li>R using Python Workshop</li>
                <li>Ignition 8.3 (Inductive University)</li>
              </ul>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-sm">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400 text-xl">🗄️</span> Databases & Algorithms
              </h4>
              <ul className="text-slate-400 space-y-2 text-sm leading-relaxed list-disc list-inside marker:text-blue-500">
                <li>Fundamentals of Databases (SkillUp by Simplilearn)</li>
                <li>NPTEL (IIT Kharagpur): Data Structures & Algorithms using Java</li>
                <li>NPTEL (IIT Kharagpur): Introduction to Algorithms & Analysis</li>
              </ul>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-sm">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400 text-xl">💼</span> Virtual Internships
              </h4>
              <ul className="text-slate-400 space-y-2 text-sm leading-relaxed list-disc list-inside marker:text-purple-500">
                <li>Python Development Intern, Cognifyz Technologies</li>
                <li>Deloitte Australia – Cyber Job Simulation</li>
                <li>Deloitte – Data Analytics Completion Certificate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mb-20 pt-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Publications</h3>
            <div className="h-px bg-slate-700 flex-1 mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-sm hover:-translate-y-1 hover:border-purple-500/50 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-400 to-purple-600"></div>
              <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] font-extrabold uppercase tracking-widest rounded-full mb-4">Research Paper</span>
              <h4 className="text-lg font-bold text-white mb-3 leading-snug">An HGF-Based Innovative Methodology Integrated Multiple Biometric Fingers Vein Templates Identification Algorithm</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-2 font-medium">First Author</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">ResMilitaris, Vol. 15, Spring 2025</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-sm hover:-translate-y-1 hover:border-purple-500/50 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-400 to-purple-600"></div>
              <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] font-extrabold uppercase tracking-widest rounded-full mb-4">Research Paper</span>
              <h4 className="text-lg font-bold text-white mb-3 leading-snug">The MCMT Methodology Utilising Face Veins to Identify Humans</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-2 font-medium">First Author</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">ResMilitaris, Vol. 15, Spring 2025</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20 pt-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Education</h3>
            <div className="h-px bg-slate-700 flex-1 mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-sm hover:border-teal-500/50 transition-colors">
              <h4 className="text-xl font-bold text-white mb-1">M.Tech, Computer Science & Engineering</h4>
              <p className="text-teal-400 font-bold mb-4 text-sm">Rama University, Kanpur | 77.5%</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">April 2023 - May 2025</p>
            </div>
            
            <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-sm hover:border-blue-500/50 transition-colors">
              <h4 className="text-xl font-bold text-white mb-1">B.Tech, Computer Science & Engineering</h4>
              <p className="text-blue-400 font-bold mb-4 text-sm">Rama University, Kanpur | 79%</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">August 2019 - July 2023</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-sm hover:border-purple-500/50 transition-colors">
              <h4 className="text-xl font-bold text-white mb-1">Class 12th (Intermediate, PCM)</h4>
              <p className="text-purple-400 font-bold mb-4 text-sm">S. Kisan I.C., Ballia, U.P. | 85%</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">2013 - 2014</p>
            </div>
            
            <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-sm hover:border-slate-500 transition-colors">
              <h4 className="text-xl font-bold text-white mb-1">Class 10th (High School, Science)</h4>
              <p className="text-slate-300 font-bold mb-4 text-sm">J.S. I.C., Kushinagar, U.P. | 58%</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">2010 - 2011</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm py-12 text-center flex flex-col items-center justify-center relative z-10">
        <p className="text-sm text-slate-500 font-medium mb-3">© 2026 Wajid Ali Ansari. Built with Next.js & Tailwind.</p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400 font-semibold px-4">
          <a href="mailto:aliwajid04786@gmail.com" className="hover:text-teal-400 transition-colors">aliwajid04786@gmail.com</a>
          <span className="hidden sm:inline">•</span>
          <a href="tel:+919919439901" className="hover:text-teal-400 transition-colors">+91 9919439901</a>
        </div>
      </footer>

    </div>
  );
}