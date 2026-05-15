import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Gamepad2, User, Mail, Trophy, Cpu, ArrowLeft, Award, Medal, MapPin, Phone, GraduationCap, Briefcase, ExternalLink } from 'lucide-react';
import './index.css';

const screens = {
  START: 'START',
  MENU: 'MENU',
  ABOUT: 'ABOUT',
  SKILLS: 'SKILLS',
  EXPERIENCE: 'EXPERIENCE',
  PROJECTS: 'PROJECTS',
  CERTIFICATIONS: 'CERTIFICATIONS',
  ACHIEVEMENTS: 'ACHIEVEMENTS',
};

const MENU_ITEMS = [
  { id: screens.ABOUT, label: '1 PLAYER (PROFILE)', icon: User },
  { id: screens.SKILLS, label: 'POWER-UPS (SKILLS)', icon: Cpu },
  { id: screens.EXPERIENCE, label: 'QUEST LOG (EXPERIENCE)', icon: Briefcase },
  { id: screens.PROJECTS, label: 'HIGH SCORES (PROJECTS)', icon: Trophy },
  { id: screens.CERTIFICATIONS, label: 'UNLOCKABLES (CERTS)', icon: Award },
  { id: screens.ACHIEVEMENTS, label: 'TROPHIES (AWARDS)', icon: Medal },
];

const SKILLS = [
  { category: "LANGUAGES", items: ["Python", "Java", "C++", "JavaScript", "HTML", "CSS"] },
  { category: "FRAMEWORKS & TOOLS", items: ["Flask", "Flutter", "Figma", "FlutterFlow", "OpenCV"] },
  { category: "DATABASES", items: ["MySQL", "SQLite"] },
  { category: "CORE CONCEPTS", items: ["Machine Learning", "Computer Vision", "NLP", "RAG", "LLMs", "Data Structures", "Algorithms", "OOP", "Problem Solving"] },
];

const EXPERIENCE = [
  {
    role: "Web Development Intern",
    company: "InAmigos Foundation (NGO)",
    period: "2026 | Virtual",
    points: ["Built portfolio showcasing projects & skills", "UI enhancements & performance updates for foundation website", "Research on web and AI tools"]
  },
  {
    role: "Android Developer Virtual Intern",
    company: "Google (via Eduskills)",
    period: "Oct 2025 – Dec 2025",
    points: ["Android app fundamentals and UI development"]
  },
  {
    role: "AI/ML Virtual Intern",
    company: "Google (via Eduskills)",
    period: "Jul 2025 – Sep 2025",
    points: ["Hands-on ML concepts and model building", "Real-world case studies and project simulations"]
  },
  {
    role: "Social Intern – Digi-Permit Project",
    company: "Digital Governance Initiative, KCT",
    period: "May 2025",
    points: ["Proposed digital permit system for real-time tracking", "Improved accessibility for rural users"]
  },
  {
    role: "AI/ML Short Term Intern",
    company: "Futura Robotics",
    period: "Jul 2023",
    points: ["Built flood identification system using ML", "Dataset curation and preprocessing"]
  }
];

const PROJECTS = [
  {
    title: "Expense Tracker Application",
    tech: "HTML, CSS, JS, Java (JDBC), MySQL",
    desc: "Personal finance system with categorization, budgeting, and interactive data visualizations.",
    period: "Apr 2026 – May 2026"
  },
  {
    title: "Cafe-Style Cozy Planner",
    tech: "Flask, SQLite, JavaScript, HTML, CSS",
    desc: "Full-stack NLP-based task manager with dynamic prioritization and glassmorphism UI.",
    period: "Feb 2026 – Mar 2026"
  },
  {
    title: "LLM-Based RAG Chatbot",
    tech: "Python, LLM, RAG",
    desc: "Document-based QA system using Retrieval-Augmented Generation with embeddings.",
    period: "Feb 2026"
  },
  {
    title: "Driver Fatigue Detection",
    tech: "Python, OpenCV",
    desc: "Real-time fatigue detection using facial landmark detection and safety alerts.",
    period: "Feb 2026"
  },
  {
    title: "Assistive Vision Technology",
    tech: "Python, Computer Vision",
    desc: "AI assistive system for visually impaired — object detection & environmental awareness.",
    period: "Jan 2026"
  },
  {
    title: "AI-Based Siddha Platform",
    tech: "HTML, CSS",
    desc: "Responsive healthcare UI for Siddha-based remedies platform.",
    period: "Dec 2025 – Jan 2026"
  }
];

const CERTIFICATIONS = [
  "Introduction to NLP – Infosys Springboard (Apr 2026)",
  "Introduction to AI – Infosys Springboard (Apr 2026)",
  "Introduction to Data Science – Infosys Springboard (Mar 2026)",
  "FlutterFlow Bootcamp – Lets Upgrade (Aug 2025)",
  "StudioX: Android Native Edition – KCT (2025–2026)",
  "The Complete HTML Course – Udemy (Nov 2024)",
  "AI/ML – Futura Robotics (Jul 2023)"
];

const ACHIEVEMENTS = [
  "Mahatma Gandhi Merit Scholarship Awardee for Academic Excellence",
  "Team Lead – KCT Intra Ideathon 2024: Directed team in ideation & presentation",
  "Participant – VIT Tech Ideathon 2026: Collaborative problem-solving",
  "Paper Presentation – SRM Institute of Science and Technology",
  "Hands-on Workshops in Android Development and UI/UX Design"
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(screens.START);
  const [score, setScore] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentScreen === screens.START) {
        if (e.key === 'Enter') {
          setCurrentScreen(screens.MENU);
          setScore(prev => prev + 100);
        }
      } else if (currentScreen === screens.MENU) {
        if (e.key === 'ArrowUp') {
          setSelectedMenuItem((prev) => (prev > 0 ? prev - 1 : MENU_ITEMS.length - 1));
        } else if (e.key === 'ArrowDown') {
          setSelectedMenuItem((prev) => (prev < MENU_ITEMS.length - 1 ? prev + 1 : 0));
        } else if (e.key === 'Enter') {
          setCurrentScreen(MENU_ITEMS[selectedMenuItem].id);
          setScore(prev => prev + 50);
        }
      } else {
        if (e.key === 'Escape' || e.key === 'Backspace') {
          setCurrentScreen(screens.MENU);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen, selectedMenuItem]);

  return (
    <div className="relative min-h-screen flex flex-col p-2 md:p-8 font-share-tech text-arcade-neon-cyan">
      <div className="scanlines"></div>
      <div className="crt-flicker"></div>

      {/* Top Arcade HUD */}
      <header className="relative z-10 flex justify-between items-center mb-4 md:mb-8 border-b-4 border-arcade-neon-pink pb-4 text-shadow-neon">
        <div className="flex flex-col">
          <span className="text-arcade-neon-pink font-press-start text-xs md:text-sm">SCORE</span>
          <span className="font-press-start text-lg md:text-2xl">{score.toString().padStart(6, '0')}</span>
        </div>
        <div className="text-center hidden md:block">
          <span className="font-press-start text-arcade-neon-yellow text-xl tracking-widest">SRINIDHI_OS</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-arcade-neon-pink font-press-start text-xs md:text-sm">LIVES</span>
          <div className="flex gap-2 text-arcade-neon-yellow text-lg mt-1">
            {'♥ ♥ ♥'}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center border-2 md:border-4 border-arcade-neon-cyan rounded-lg p-3 md:p-8 box-shadow-neon bg-black/50 backdrop-blur-sm overflow-hidden">

        <AnimatePresence mode="wait">
          {currentScreen === screens.START && (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center gap-12 text-center"
            >
              <div className="flex items-center gap-4 text-arcade-neon-yellow">
                <Gamepad2 size={64} className="animate-pulse" />
              </div>

              <h1 className="font-press-start text-3xl md:text-6xl text-arcade-neon-pink glitch text-shadow-neon" data-text="SRINIDHI">
                SRINIDHI
              </h1>

              <p className="text-xl md:text-2xl text-arcade-neon-cyan max-w-2xl mt-4 leading-relaxed tracking-wider">
                COMPUTER SCIENCE ENGINEERING STUDENT
              </p>

              <div className="mt-8 md:mt-12 opacity-80 hover:opacity-100 cursor-pointer" onClick={() => { setCurrentScreen(screens.MENU); setScore(s => s + 100); }}>
                <p className="font-press-start text-arcade-neon-yellow text-sm md:text-2xl blinking-text">
                  &gt; TAP OR PRESS ENTER &lt;
                </p>
                <p className="mt-4 text-[10px] text-arcade-neon-pink/70 font-press-start">
                  TO INITIALIZE PORTFOLIO
                </p>
              </div>
            </motion.div>
          )}

          {currentScreen === screens.MENU && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="w-full max-w-3xl flex flex-col gap-6"
            >
              <h2 className="font-press-start text-3xl text-arcade-neon-pink text-center mb-4 text-shadow-neon">MAIN MENU</h2>

              <div className="flex flex-col gap-3 md:gap-4">
                {MENU_ITEMS.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = selectedMenuItem === index;
                  return (
                    <div
                      key={item.id}
                      className={`flex items-center gap-4 p-3 md:p-4 border-2 transition-all cursor-pointer ${isSelected
                        ? 'border-arcade-neon-yellow bg-arcade-neon-yellow/10 text-arcade-neon-yellow scale-105'
                        : 'border-transparent text-arcade-neon-cyan/70 hover:border-arcade-neon-cyan/50'
                        }`}
                      onMouseEnter={() => setSelectedMenuItem(index)}
                      onClick={() => {
                        setCurrentScreen(item.id);
                        setScore(s => s + 50);
                      }}
                    >
                      <span className="font-press-start w-8 text-center">{isSelected ? '►' : ''}</span>
                      <Icon className={isSelected ? 'animate-bounce' : ''} size={20} md:size={24} />
                      <span className="font-press-start text-xs md:text-lg">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 text-center text-[10px] md:text-xs text-arcade-neon-pink font-press-start opacity-70">
                <span className="hidden md:inline">USE ARROWS ⬆️⬇️ | ENTER TO SELECT</span>
                <span className="md:hidden">TAP ITEM TO SELECT</span>
              </div>
            </motion.div>
          )}

          {currentScreen === screens.ABOUT && (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="w-full max-w-4xl flex flex-col h-full"
            >
              <div className="flex items-center mb-6 border-b-2 border-arcade-neon-pink pb-2">
                <button onClick={() => setCurrentScreen(screens.MENU)} className="mr-4 hover:text-arcade-neon-pink transition-colors">
                  <ArrowLeft size={32} />
                </button>
                <h2 className="font-press-start text-sm md:text-2xl text-arcade-neon-pink text-shadow-neon">PLAYER PROFILE</h2>
              </div>

              <div className="flex-1 overflow-y-auto pr-4 text-sm md:text-lg leading-relaxed flex flex-col gap-6 font-share-tech text-arcade-neon-cyan">
                <div className="flex flex-col md:flex-row gap-6 items-start border-l-4 border-arcade-neon-cyan pl-4 bg-arcade-neon-cyan/5 p-4">
                  <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-arcade-neon-pink/20 border-2 border-arcade-neon-pink flex items-center justify-center overflow-hidden">
                    <User size={64} className="text-arcade-neon-pink" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-press-start text-arcade-neon-yellow mb-2 text-[10px] md:text-sm">NAME: SRINIDHI SUBRAMANIAN</h3>
                    <h3 className="font-press-start text-arcade-neon-yellow mb-4 text-[10px] md:text-sm">CLASS: COMPUTER SCIENCE ENGINEER</h3>
                    <p className="mb-2 text-justify">
                      Passionate Computer Science student focused on building practical AI and full-stack solutions, including computer vision systems and LLM-based chatbots. Eager to join a fast-paced team as a software or AI intern, where I can contribute, learn quickly, and turn ideas into working products.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-arcade-neon-pink text-xs md:text-sm">
                      <div className="flex items-center gap-2"><MapPin size={16} /> Coimbatore, Tamil Nadu</div>
                      <div className="flex items-center gap-2"><Phone size={16} /> 9500274020</div>
                    </div>
                  </div>
                </div>

                <div className="border border-arcade-neon-green/30 p-4">
                  <h3 className="font-press-start text-arcade-neon-green text-xs md:text-sm mb-4 flex items-center gap-2"><GraduationCap size={18} /> EDUCATION:</h3>
                  <div className="mb-4">
                    <h4 className="text-arcade-neon-yellow font-bold">Kumaraguru College of Technology</h4>
                    <p>B.E. Computer Science and Engineering (Expected: 2028)</p>
                    <p className="text-arcade-neon-pink text-sm">CGPA: 8.76</p>
                  </div>
                  <div>
                    <h4 className="text-arcade-neon-yellow font-bold">Vairams Matric Higher Secondary School</h4>
                    <p>Percentage: 97% | Year: 2024</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex gap-4 items-center p-4 border border-arcade-neon-yellow/30 text-arcade-neon-yellow justify-center cursor-pointer hover:bg-arcade-neon-yellow/10" onClick={() => window.location.href = "mailto:srinidhis1177@gmail.com"}>
                    <Mail size={18} /> <span className="font-press-start text-[8px] md:text-[10px]">srinidhis1177@gmail.com</span>
                  </div>
                  <div className="flex gap-4 items-center p-4 border border-arcade-neon-pink/30 text-arcade-neon-pink justify-center cursor-pointer hover:bg-arcade-neon-pink/10" onClick={() => window.open("https://github.com/Srinidhi1177", "_blank")}>
                    <Terminal size={18} /> <span className="font-press-start text-[10px]">GITHUB</span>
                  </div>
                  <div className="flex gap-4 items-center p-4 border border-arcade-neon-cyan/30 text-arcade-neon-cyan justify-center cursor-pointer hover:bg-arcade-neon-cyan/10" onClick={() => window.open("https://www.linkedin.com/in/srinidhi-subramanian-26a45b284/", "_blank")}>
                    <ExternalLink size={18} /> <span className="font-press-start text-[10px]">LINKEDIN</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center text-[10px] text-arcade-neon-pink font-press-start opacity-70 border-t-2 border-arcade-neon-pink pt-4">
                <span className="hidden md:inline">PRESS ESC TO RETURN</span>
                <span className="md:hidden">USE TOP ARROW TO RETURN</span>
              </div>
            </motion.div>
          )}

          {currentScreen === screens.SKILLS && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="w-full max-w-4xl flex flex-col h-full"
            >
              <div className="flex items-center mb-6 border-b-2 border-arcade-neon-green pb-2 text-arcade-neon-green">
                <button onClick={() => setCurrentScreen(screens.MENU)} className="mr-4 hover:text-arcade-neon-yellow transition-colors">
                  <ArrowLeft size={32} />
                </button>
                <h2 className="font-press-start text-sm md:text-2xl text-shadow-neon">POWER-UPS & SKILLS</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-2 overflow-y-auto">
                {SKILLS.map((skillGroup, idx) => (
                  <div key={idx} className="border-2 border-arcade-neon-green p-4 bg-arcade-neon-green/5 relative group hover:scale-[1.02] transition-transform">
                    <h3 className="font-press-start text-arcade-neon-yellow text-[10px] md:text-xs mb-4 flex items-center justify-between">
                      {skillGroup.category} <Cpu size={16} />
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, i) => (
                        <span key={i} className="bg-arcade-neon-green/20 border border-arcade-neon-green px-2 md:px-3 py-1 font-mono text-xs md:text-sm shadow-[0_0_8px_var(--color-arcade-neon-green)]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 text-center text-[10px] text-arcade-neon-green font-press-start opacity-70">
                <span className="hidden md:inline">PRESS ESC TO RETURN</span>
                <span className="md:hidden">USE TOP ARROW TO RETURN</span>
              </div>
            </motion.div>
          )}

          {currentScreen === screens.EXPERIENCE && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="w-full max-w-4xl flex flex-col h-full"
            >
              <div className="flex items-center mb-6 border-b-2 border-arcade-neon-yellow pb-2 text-arcade-neon-yellow">
                <button onClick={() => setCurrentScreen(screens.MENU)} className="mr-4 hover:text-arcade-neon-cyan transition-colors">
                  <ArrowLeft size={32} />
                </button>
                <h2 className="font-press-start text-sm md:text-2xl text-shadow-neon">QUEST LOG (EXPERIENCE)</h2>
              </div>

              <div className="flex flex-col gap-4 overflow-y-auto pr-2 md:pr-4">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="border-l-4 border-arcade-neon-yellow bg-black p-4 md:p-6 hover:bg-arcade-neon-yellow/5 transition-colors group">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1">
                      <h3 className="font-press-start text-arcade-neon-pink text-[10px] md:text-sm group-hover:animate-pulse leading-normal">
                        {exp.role}
                      </h3>
                      <span className="text-arcade-neon-yellow/70 text-[10px] font-share-tech md:text-right whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-arcade-neon-cyan/80 text-xs md:text-sm mb-3 font-bold">{exp.company}</p>
                    <ul className="text-arcade-neon-cyan/70 text-xs md:text-sm space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-arcade-neon-pink font-bold mt-0.5">&gt;</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 text-center text-[10px] text-arcade-neon-yellow font-press-start opacity-70">
                <span className="hidden md:inline">PRESS ESC TO RETURN</span>
                <span className="md:hidden">USE TOP ARROW TO RETURN</span>
              </div>
            </motion.div>
          )}

          {currentScreen === screens.PROJECTS && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="w-full max-w-4xl flex flex-col h-full"
            >
              <div className="flex items-center mb-6 border-b-2 border-arcade-neon-cyan pb-2 text-arcade-neon-cyan">
                <button onClick={() => setCurrentScreen(screens.MENU)} className="mr-4 hover:text-arcade-neon-pink transition-colors">
                  <ArrowLeft size={32} />
                </button>
                <h2 className="font-press-start text-sm md:text-2xl text-shadow-neon">HIGH SCORES (PROJECTS)</h2>
              </div>

              <div className="flex flex-col gap-4 overflow-y-auto pr-2 md:pr-4">
                {PROJECTS.map((project, idx) => (
                  <div key={idx} className="border-l-4 border-arcade-neon-cyan bg-black p-4 md:p-6 hover:bg-arcade-neon-cyan/5 transition-colors group flex justify-between items-center">
                    <div>
                      <h3 className="font-press-start text-arcade-neon-pink text-[10px] md:text-sm mb-2 group-hover:animate-pulse leading-normal">
                        {idx + 1}. {project.title}
                      </h3>
                      <p className="text-arcade-neon-cyan/80 text-xs md:text-sm mb-2">{project.desc}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-arcade-neon-yellow/70 text-[10px] md:text-xs mt-2">
                        <p className="flex items-center gap-2">
                          <Terminal size={12} /> {project.tech}
                        </p>
                        <p className="flex items-center gap-2 opacity-70">
                          [ {project.period} ]
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex text-arcade-neon-cyan/50 font-press-start text-xl h-full items-center">
                      {(10000 - (idx * 1500)).toString().padStart(6, '0')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 text-center text-[10px] text-arcade-neon-cyan font-press-start opacity-70">
                <span className="hidden md:inline">PRESS ESC TO RETURN</span>
                <span className="md:hidden">USE TOP ARROW TO RETURN</span>
              </div>
            </motion.div>
          )}

          {currentScreen === screens.CERTIFICATIONS && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="w-full max-w-3xl flex flex-col h-full"
            >
              <div className="flex items-center mb-6 border-b-2 border-arcade-neon-pink pb-2 text-arcade-neon-pink">
                <button onClick={() => setCurrentScreen(screens.MENU)} className="mr-4 hover:text-arcade-neon-yellow transition-colors">
                  <ArrowLeft size={32} />
                </button>
                <h2 className="font-press-start text-sm md:text-2xl text-shadow-neon">UNLOCKABLES (CERTS)</h2>
              </div>

              <div className="flex flex-col gap-3 overflow-y-auto pr-2">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="border border-arcade-neon-pink/50 p-3 flex items-center gap-4 bg-arcade-neon-pink/5 hover:bg-arcade-neon-pink/20 transition-colors">
                    <Award className="text-arcade-neon-yellow animate-pulse shrink-0" size={24} />
                    <span className="font-share-tech text-arcade-neon-cyan text-sm md:text-lg">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 text-center text-[10px] text-arcade-neon-pink font-press-start opacity-70">
                <span className="hidden md:inline">PRESS ESC TO RETURN</span>
                <span className="md:hidden">USE TOP ARROW TO RETURN</span>
              </div>
            </motion.div>
          )}

          {currentScreen === screens.ACHIEVEMENTS && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="w-full max-w-3xl flex flex-col h-full"
            >
              <div className="flex items-center mb-6 border-b-2 border-arcade-neon-yellow pb-2 text-arcade-neon-yellow">
                <button onClick={() => setCurrentScreen(screens.MENU)} className="mr-4 hover:text-arcade-neon-cyan transition-colors">
                  <ArrowLeft size={32} />
                </button>
                <h2 className="font-press-start text-sm md:text-2xl text-shadow-neon">TROPHIES (ACHIEVEMENTS)</h2>
              </div>

              <div className="flex flex-col gap-4 overflow-y-auto pr-2">
                {ACHIEVEMENTS.map((achievement, idx) => (
                  <div key={idx} className="border-l-4 border-arcade-neon-yellow p-4 bg-arcade-neon-yellow/10 flex items-start gap-4">
                    <Medal className="text-arcade-neon-pink shrink-0" size={28} />
                    <span className="font-share-tech text-arcade-neon-yellow text-sm md:text-lg leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 text-center text-[10px] text-arcade-neon-yellow font-press-start opacity-70">
                <span className="hidden md:inline">PRESS ESC TO RETURN</span>
                <span className="md:hidden">USE TOP ARROW TO RETURN</span>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </main>

      {/* Footer Area */}
      <footer className="relative z-10 mt-6 text-center opacity-50 flex justify-between items-center px-4">
        <span className="font-press-start text-[8px] md:text-[10px]">VER 1.1</span>
        <span className="font-press-start text-[8px] md:text-[10px]">INSERT COIN TO CONTINUE</span>
        <span className="font-press-start text-[8px] md:text-[10px]">© 2026</span>
      </footer>
    </div>
  );
}
