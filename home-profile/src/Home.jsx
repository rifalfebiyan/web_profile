import React from 'react';
// --- UPDATED: Using lucide-react for icons ---
// To simplify the code, we're now using the 'lucide-react' library.
// Make sure to add it to your project: npm install lucide-react
import {
    Github, Instagram, Facebook, Braces, Atom, Server, Container, Code, Figma, Cloud,
    ArrowUpRight, Search, Menu, X
} from 'lucide-react';

import { SiPython, SiGo, SiReact, SiFigma, SiJavascript, SiNodedotjs, SiTailwindcss, SiHtml5, SiBootstrap, SiJupyter, SiLaravel,
  SiCanva, SiAdobephotoshop, 
} from "react-icons/si";

// --- Global Styles Component (No Changes) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    :root {
      --primary-color: #BEF264;
      --background-color: #111111;
      --card-background: #181818;
      --text-color: #E4E4E7;
      --text-secondary-color: #A1A1AA;
      --border-color: rgba(255, 255, 255, 0.1);
      --font-primary: 'Inter', sans-serif;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      background-color: var(--background-color);
      color: var(--text-color);
      font-family: var(--font-primary);
      line-height: 1.6;
      overflow-x: hidden;
    }

    .App { position: relative; z-index: 1; }
    main { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
    a { color: var(--text-color); text-decoration: none; transition: color 0.3s ease; }
    a:hover { color: var(--primary-color); }
    ul { list-style: none; }

    .section-title {
      font-family: var(--font-primary);
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 3rem;
      text-align: center;
      color: var(--text-color);
    }

    /* --- Animation Keyframes & Classes --- */
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .animate-on-scroll {
        opacity: 0;
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .animate-on-scroll.is-visible {
        opacity: 1;
        transform: none;
    }
    
    .fade-in-up {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .background-shapes { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; overflow: hidden; }
    .shape { position: absolute; border-radius: 50%; opacity: 0.08; filter: blur(100px); }
    .shape1 { width: 500px; height: 500px; background: var(--primary-color); top: -150px; left: -150px; animation: move 20s infinite alternate; }
    .shape2 { width: 500px; height: 500px; background: #6366F1; bottom: -200px; right: -200px; animation: move 25s infinite alternate-reverse; }
    @keyframes move {
      from { transform: translate(0, 0) rotate(0deg) scale(1); }
      to { transform: translate(100px, 200px) rotate(90deg) scale(1.2); }
    }
    
    .header { 
      position: sticky; 
      top: 0; 
      z-index: 10; 
      transition: background-color 0.4s ease-in-out, border-bottom 0.4s ease-in-out; 
    }
    .header.scrolled { 
      background-color: rgba(17, 17, 17, 0.5); 
      backdrop-filter: blur(10px); 
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-color);
    }
    .navbar { 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      width: 100%; 
      max-width: 1100px; 
      margin: 0 auto; 
      padding: 1rem 2rem; 
    }
    .nav-logo { font-size: 1.2rem; font-weight: 700; }
    .nav-menu { display: flex; gap: 2rem; }
    .nav-link { font-size: 1rem; color: var(--text-secondary-color); position: relative; }
    .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: var(--primary-color);
        transition: width 0.3s ease;
    }
    .nav-link:hover::after {
        width: 100%;
    }


    .hero-section { 
      min-height: 90vh; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      text-align: center; 
      padding: 4rem 2rem; 
    }
    .hero-content .profile-img { animation: fadeIn 1s 0.2s ease-out forwards; opacity: 0; }
    .hero-content h1 { animation: fadeInUp 0.8s 0.4s ease-out forwards; opacity: 0; }
    .hero-content .hero-subtitle { animation: fadeInUp 0.8s 0.6s ease-out forwards; opacity: 0; }
    .hero-content .cta-button { animation: fadeInUp 0.8s 0.8s ease-out forwards; opacity: 0; }

    .hero-content h1 { 
      font-size: clamp(3rem, 6vw, 5rem); 
      font-weight: 700;
      margin-bottom: 1rem; 
      line-height: 1.1;
    }
    .hero-subtitle { 
      font-size: 1.25rem; 
      max-width: 600px; 
      margin: 0 auto 2.5rem; 
      color: var(--text-secondary-color);
    }
    .profile-img { 
      width: 120px; 
      height: 120px; 
      border-radius: 50%; 
      margin-bottom: 2rem; 
      border: 3px solid var(--border-color);
      box-shadow: 0 0 20px rgba(190, 242, 100, 0.2);
    }

    .content-section { padding: 6rem 0; }
    .about-container { 
      max-width: 800px; 
      margin: 0 auto; 
      text-align: center; 
      font-size: 1.1rem;
      color: var(--text-secondary-color);
    }
    
    .skills-scroller {
        overflow: hidden;
        -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
        mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
        padding-bottom: 40px;
        margin-bottom: -40px;
    }
    .skills-track {
        display: flex;
        width: max-content;
        animation: scroll 30s linear infinite;
        gap: 3rem;
        padding: 1rem 0;
    }
    .skills-track.reverse {
        animation-direction: reverse;
    }
    .skill-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        background-color: var(--card-background);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        position: relative;
    }
    .skill-item svg {
        width: 48px;
        height: 48px;
        color: var(--text-secondary-color);
        transition: all 0.3s ease;
    }
    .skill-item .skill-name {
        position: absolute;
        bottom: -30px;
        font-size: 0.875rem;
        color: var(--text-color);
        background-color: var(--background-color);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        opacity: 0;
        transition: opacity 0.3s ease, bottom 0.3s ease;
        white-space: nowrap;
    }
    .skill-item:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        border-color: var(--primary-color);
    }
    .skill-item:hover svg {
        color: var(--primary-color);
        transform: scale(1.1);
    }
    .skill-item:hover .skill-name {
        opacity: 1;
        bottom: -40px;
    }

    @keyframes scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
    }

    .projects-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; }
    .project-card {
      background-color: var(--card-background);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
    }
    .project-card:hover { 
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3); 
    }
    .project-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-bottom: 1px solid var(--border-color);
    }
    .project-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .project-card h3 { 
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem; 
    }
    .project-card p { 
      color: var(--text-secondary-color);
      margin-bottom: 1rem; 
      flex-grow: 1;
    }
    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    .tag {
      background-color: rgba(190, 242, 100, 0.1);
      color: var(--primary-color);
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.875rem;
      font-weight: 500;
    }
    .project-links {
      display: flex;
      gap: 1rem;
      margin-top: auto;
    }

    .filter-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 3rem;
    }
    .search-container { position: relative; }
    .search-input {
      background-color: var(--card-background);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      color: var(--text-color);
      padding: 0.75rem 1rem 0.75rem 2.5rem;
      font-family: var(--font-primary);
      width: 280px;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .search-input:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 10px rgba(190, 242, 100, 0.2);
    }
    .search-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-secondary-color);
    }
    .filter-buttons { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;}
    .filter-button {
      background-color: transparent;
      border: 1px solid var(--border-color);
      color: var(--text-secondary-color);
      padding: 0.75rem 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .filter-button:hover {
      background-color: var(--card-background);
      color: var(--text-color);
      transform: translateY(-2px);
    }
    .filter-button.active {
      background-color: var(--primary-color);
      color: var(--background-color);
      border-color: var(--primary-color);
      font-weight: 700;
      transform: translateY(-2px);
    }
    .certificates-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .certificate-card-link {
        display: block;
        color: var(--text-color);
    }
    .certificate-card {
      background-color: var(--card-background);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 1.5rem;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: 100%;
    }
    .certificate-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    .certificate-card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    .certificate-card h4 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }
    .certificate-card p {
      font-size: 0.9rem;
      color: var(--text-secondary-color);
    }


    .contact-container { text-align: center; }
    .contact-container h2 { font-size: 2rem; }
    .contact-container p { color: var(--text-secondary-color); margin: 1rem auto 2rem; max-width: 500px; }
    .social-links { display: flex; justify-content: center; gap: 1.5rem; }
    .social-links a { color: var(--text-secondary-color); transition: color 0.3s ease, transform 0.3s ease; }
    /* The size of social icons is now controlled by width/height props in JSX */
    .social-links a:hover { color: var(--primary-color); transform: scale(1.2) rotate(5deg); }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      color: var(--background-color);
      background-color: var(--primary-color);
      font-family: var(--font-primary);
      font-size: 1rem;
      font-weight: 700;
      transition: all 0.3s ease;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(190, 242, 100, 0.2);
    }
    .cta-button:hover { 
        filter: brightness(1.1); 
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(190, 242, 100, 0.3);
    }
    .cta-button svg { transition: transform 0.3s ease; }
    .cta-button:hover svg { transform: translateX(3px) translateY(-3px); }
    
    .footer { text-align: center; padding: 4rem 2rem 2rem; color: var(--text-secondary-color); }
    
    /* --- Mobile Menu Styles --- */
    .mobile-menu-toggle {
        display: none;
        background: none;
        border: none;
        color: var(--text-color);
        cursor: pointer;
        z-index: 1001;
    }
    
    .mobile-menu-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.4s ease;
    }
    .mobile-menu-backdrop.open {
        opacity: 1;
        visibility: visible;
    }

    .mobile-nav-sidebar {
        position: fixed;
        top: 0;
        right: 0;
        width: min(80vw, 320px);
        height: 100%;
        background-color: var(--card-background);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        padding-top: 5rem;
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: translateX(100%);
    }

    .mobile-nav-sidebar.open {
        transform: translateX(0);
    }

    .mobile-nav-menu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
        width: 100%;
    }

    .mobile-nav-link {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-color);
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .mobile-nav-sidebar.open .mobile-nav-link {
        opacity: 1;
        transform: translateY(0);
    }
    
    .mobile-menu-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: none;
        border: none;
        color: var(--text-color);
        cursor: pointer;
    }


    @media (max-width: 768px) {
      .nav-menu { display: none; }
      .mobile-menu-toggle { display: block; }
      main { padding: 0 1.5rem; }
      .navbar { padding: 1rem 1.5rem; }
      .content-section { padding: 4rem 0; }
    }
  `}</style>
);

// --- Main App Component ---
export default function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // --- Scroll listener for header style ---
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Intersection Observer for scroll animations ---
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => elementsToAnimate.forEach(el => observer.unobserve(el));
  }, []);
  
  // --- Effect to lock body scroll when mobile menu is open ---
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // --- Data ---
  const projectData = [
    { 
      title: 'Website Laundry', 
      description: 'Desain website UMKM dengan UI responsif dan visual yang bersih, dibangun untuk meningkatkan kehadiran digital dan memudahkan pelanggan.',
      tags: ['UI/UX Design', 'React', 'Vite'],
      image: './img/portfolio/portofolio9.png'
    },
    { 
      title: 'E-GuestBook DISKOMINFO DIY', 
      description: 'It is expected that this solution will not only improve efficiency but also simplify the institutions process of managing and analyzing the required data, enabling public services at Diskominfo DIY to continue evolving in line with the demands of digitalization.',
      tags: ['React', 'Bootstrap', 'Data Management','Golang'],
      image: './img/portfolio/portfolio6.png'
    },
    { 
      title: 'AI Translator', 
      description: 'Aplikasi pembelajaran bahasa asing untuk anak-anak berbasis Flask, menggunakan teknologi AI untuk terjemahan interaktif.',
      tags: ['Python', 'Flask', 'AI/ML'],
      image: 'https://placehold.co/600x400/181818/BEF264?text=Projek+AI'
    },
  ];

  const certificateData = [
    // Data Analyst
    { title: 'Basic Feature Discovering for Machine Learning', issuer: 'DQLab', category: 'Data Analyst', image: './img/certified/sertifikat_1.jpg', credentialUrl: 'https://academy.dqlab.id/Certificate_check/result/DQLABFATPYQPOWOS' },
    
    // UI/UX
    { title: 'UI/UX Design Mastery', issuer: 'Skilvul', category: 'UI/UX', image: 'https://placehold.co/400x300/181818/BEF264?text=Sertifikat+UI/UX', credentialUrl: '#' },
    { title: 'Cloud Practitioner Essentials', issuer: 'AWS', category: 'Cloud', image: 'https://placehold.co/400x300/181818/BEF264?text=Sertifikat+Cloud', credentialUrl: '#' },
    
    // Web Development
    { title: 'Belajar JavaScript Lanjutan', issuer: 'Dicoding', category: 'Web Development', image: 'https://placehold.co/400x300/181818/BEF264?text=Sertifikat+JS', credentialUrl: '#' },
    
    // Internship
    { title: 'Figma for UI Design', issuer: 'Skilvul', category: 'UI/UX', image: 'https://placehold.co/400x300/181818/BEF264?text=Sertifikat+Figma', credentialUrl: '#' },
    { title: 'Architecting on AWS', issuer: 'AWS', category: 'Cloud', image: 'https://placehold.co/400x300/181818/BEF264?text=Sertifikat+AWS', credentialUrl: '#' },
  
  // Digital Marketing
    { title: 'Pemasaran Digital Dasar Digital Entrepreuneurship Academy Digital Talent Scholarship 2023', issuer: 'Digitalent BBPTIK Cikarang', category: 'Digital Marketing', image: './img/certified/Certif1.png', credentialUrl: '#' },
  ];
  
  // --- UPDATED: Using lucide-react components for icons ---
  const skillsData = [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Laravel', icon: <SiLaravel /> },
    { name: 'Golang', icon: <SiGo /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Figma', icon: <SiFigma/> },
    { name: 'Tailwind', icon: <SiTailwindcss/> },
    { name: 'NodeJs', icon: <SiNodedotjs/> },
    { name: 'Tailwind', icon: <SiTailwindcss/> },
    { name: 'HTML', icon: <SiHtml5/> },
    { name: 'Bootstrap', icon: <SiBootstrap/> },
    { name: 'Jupyter', icon: <SiJupyter/> },
    { name: 'Canva', icon: <SiCanva/> },
    { name: 'Photshop', icon: <SiAdobephotoshop/> },

  ];

  
  const skillsTrack1 = [...skillsData, ...skillsData];
  const skillsTrack2 = [...skillsData.slice(3), ...skillsData.slice(0, 3), ...skillsData.slice(3), ...skillsData.slice(0, 3)];

  const certificateCategories = ['All', ...new Set(certificateData.map(c => c.category))];

  const filteredCertificates = certificateData
    .filter(cert => activeFilter === 'All' || cert.category === activeFilter)
    .filter(cert => cert.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
  const navLinks = [
      { href: "#about", text: "Tentang" },
      { href: "#skills", text: "Keterampilan" },
      { href: "#portfolio", text: "Projek" },
      { href: "#certificates", text: "Sertifikat" },
      { href: "#contact", text: "Kontak" },
  ];

  return (
    <div className="App">
      <GlobalStyles />
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <a href="#" className="nav-logo">Rifal Febiyan</a>
          <ul className="nav-menu">
            {navLinks.map(link => (
                <li key={link.href}><a href={link.href} className="nav-link">{link.text}</a></li>
            ))}
          </ul>
          <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <Menu />
          </button>
        </nav>
      </header>
      
      <div className={`mobile-menu-backdrop ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)} />
      <div className={`mobile-nav-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <X />
        </button>
        <ul className="mobile-nav-menu">
            {navLinks.map((link, index) => (
                <li key={link.href}>
                    <a 
                        href={link.href} 
                        className="mobile-nav-link" 
                        onClick={() => setIsMenuOpen(false)}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
      </div>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <img src="./profile2.jpg" alt="Profile" className="profile-img" />
            <h1>Rifal Febiyan</h1>
            <p className="hero-subtitle">Seorang Web Developer & Data Analyst yang bersemangat dalam menciptakan pengalaman digital yang modern dan fungsional.</p>
            <a href="#contact" className="cta-button">
              Kontak Saya <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section id="about" className="content-section">
          <h2 className="section-title animate-on-scroll fade-in-up">Tentang Saya</h2>
          <div className="about-container animate-on-scroll fade-in-up" style={{transitionDelay: '200ms'}}>
            <p>
              Saya seorang pengembang web yang menyukai desain elegan dan aplikasi efisien. Dengan latar belakang yang kuat dalam pengembangan antarmuka pengguna (UI) dan analisis data, saya bersemangat untuk menciptakan pengalaman digital yang intuitif dan berdampak. Mari kita berkolaborasi untuk mewujudkan ide-ide Anda!
            </p>
          </div>
        </section>
        
        <section id="skills" className="content-section">
            <h2 className="section-title animate-on-scroll fade-in-up">Keterampilan Saya</h2>
            <div className="skills-scroller animate-on-scroll fade-in-up" style={{transitionDelay: '200ms'}}>
                <div className="skills-track">
                    {skillsTrack1.map((skill, index) => (
                        <div className="skill-item" key={`track1-${index}`}>
                            {skill.icon}
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
                <div className="skills-track reverse">
                    {skillsTrack2.map((skill, index) => (
                        <div className="skill-item" key={`track2-${index}`}>
                            {skill.icon}
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="portfolio" className="content-section">
          <h2 className="section-title animate-on-scroll fade-in-up">Projek Pilihan</h2>
          <div className="projects-grid">
            {projectData.map((item, index) => (
              <div key={index} className="project-card animate-on-scroll fade-in-up" style={{transitionDelay: `${index * 150}ms`}}>
                <img src={item.image} alt={item.title} className="project-image" />
                <div className="project-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="project-tags">
                    {item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <div className="project-links">
                      <a href="#" className="cta-button">Live Preview</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

         <section id="certificates" className="content-section">
          <h2 className="section-title">Sertifikat & Lisensi</h2>
          <div className="filter-controls">
            <div className="search-container">
              <span className="search-icon"><Search size={16} /></span>
              <input
                type="text"
                className="search-input"
                placeholder="Cari sertifikat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-buttons">
              {certificateCategories.map(category => (
                <button
                  key={category}
                  className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="certificates-grid">
            {filteredCertificates.map((cert, index) => (
              <a href={cert.credentialUrl} key={index} target="_blank" rel="noopener noreferrer" className="certificate-card-link">
                <div className="certificate-card">
                  <img src={cert.image} alt={cert.title} />
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="contact-container">
            <h2 className="section-title animate-on-scroll fade-in-up">Hubungi Saya</h2>
            <p className="animate-on-scroll fade-in-up" style={{transitionDelay: '200ms'}}>Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar menyapa. Jangan ragu untuk menghubungi saya melalui media sosial.</p>
            <div className="social-links animate-on-scroll fade-in-up" style={{transitionDelay: '400ms'}}>
              <a href="https://github.com/rifalfebiyan" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={24} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Rifal Febiyan</p>
      </footer>
    </div>
  );
}
