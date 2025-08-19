import React, { useEffect, useState } from 'react';

// --- SVG Icons ---
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

// --- Global Styles Component ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Share+Tech+Mono&display=swap');

    :root {
      --primary-color: #00f7ff;
      --secondary-color: #f500ff;
      --background-color: #0a0a1a;
      --text-color: #e0e0e0;
      --glass-bg: rgba(20, 20, 40, 0.5);
      --glass-border: rgba(0, 247, 255, 0.2);
      --font-primary: 'Orbitron', sans-serif;
      --font-secondary: 'Share Tech Mono', monospace;
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
      font-family: var(--font-secondary);
      line-height: 1.6;
      overflow-x: hidden;
    }

    .App { position: relative; z-index: 1; }
    /* MODIFIED: Re-introduced max-width for a centered, wide layout */
    main { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }
    a { color: var(--primary-color); text-decoration: none; transition: color 0.3s ease; }
    a:hover { color: var(--secondary-color); }
    ul { list-style: none; }

    .section-title {
      font-family: var(--font-primary);
      font-size: 2.5rem;
      margin-bottom: 2rem;
      text-align: center;
      color: var(--primary-color);
      text-shadow: 0 0 10px var(--primary-color);
    }

    .background-shapes { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; overflow: hidden; }
    .shape { position: absolute; border-radius: 50%; opacity: 0.1; filter: blur(80px); }
    .shape1 { width: 400px; height: 400px; background: var(--primary-color); top: -100px; left: -100px; animation: move 20s infinite alternate; }
    .shape2 { width: 500px; height: 500px; background: var(--secondary-color); bottom: -150px; right: -150px; animation: move 25s infinite alternate-reverse; }
    @keyframes move {
      from { transform: translate(0, 0) rotate(0deg); }
      to { transform: translate(100px, 200px) rotate(180deg); }
    }

    .glass-effect {
      background: var(--glass-bg);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid var(--glass-border);
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }

    .glitch { position: relative; font-family: var(--font-primary); }
    .glitch:before, .glitch:after {
      content: attr(data-text);
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: var(--background-color);
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
    }
    .glitch:before { left: 2px; text-shadow: -2px 0 var(--secondary-color); animation: glitch-anim-1 2s infinite linear alternate-reverse; }
    .glitch:after { left: -2px; text-shadow: -2px 0 var(--primary-color); animation: glitch-anim-2 2s infinite linear alternate-reverse; }
    @keyframes glitch-anim-1 { 0% { clip: rect(42px, 9999px, 44px, 0); } 100% { clip: rect(90px, 9999px, 92px, 0); } }
    @keyframes glitch-anim-2 { 0% { clip: rect(65px, 9999px, 119px, 0); } 100% { clip: rect(20px, 9999px, 130px, 0); } }

    /* MODIFIED: Header padding adjusted for centered navbar */
    .header { position: sticky; top: 0; z-index: 10; padding: 1rem 2rem; transition: background-color 0.4s ease-in-out; }
    .header.scrolled { background-color: rgba(10, 10, 26, 0.8); backdrop-filter: blur(5px); }
    /* MODIFIED: Navbar content is now centered with a max-width */
    .navbar { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1400px; margin: 0 auto; }
    .nav-logo { font-size: 1.5rem; font-weight: bold; }
    .nav-menu { display: flex; gap: 2rem; }
    .nav-link { font-family: var(--font-secondary); font-size: 1rem; padding: 5px 0; position: relative; }
    .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background-color: var(--primary-color); transition: width 0.3s ease; }
    .nav-link:hover::after { width: 100%; }

    .hero-section { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 0 2rem; }
    .hero-content h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: 1rem; }
    .hero-subtitle { font-size: 1.2rem; max-width: 600px; margin: 0 auto 2rem; opacity: 0.8; }
    .profile-img { width: 150px; height: 150px; border-radius: 50%; border: 3px solid var(--primary-color); margin-bottom: 1.5rem; box-shadow: 0 0 20px var(--primary-color); }
    .social-links { display: flex; justify-content: center; gap: 1.5rem; margin-top: 1.5rem; }
    .social-links a { color: var(--text-color); opacity: 0.7; transition: opacity 0.3s ease, transform 0.3s ease; }
    .social-links a:hover { opacity: 1; color: var(--primary-color); transform: scale(1.2); }

    /* MODIFIED: Padding adjusted as it's now on the main tag */
    .content-section { padding: 6rem 0; }
    .about-container { text-align: center; }
    
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
    .project-card { display: flex; flex-direction: column; transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .project-card:hover { transform: translateY(-10px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px var(--primary-color); }
    .project-card h3 { font-family: var(--font-primary); color: var(--primary-color); margin-bottom: 1rem; }
    .project-card p { flex-grow: 1; margin-bottom: 1rem; opacity: 0.9; }
    .project-icon { font-size: 3rem; color: var(--primary-color); margin-bottom: 1rem; }

    .contact-container { margin: 0 auto; }
    .contact-form .form-group { margin-bottom: 1.5rem; }
    .contact-form .form-control {
      width: 100%;
      padding: 12px;
      background-color: rgba(0,0,0,0.2);
      border: 1px solid var(--glass-border);
      border-radius: 5px;
      color: var(--text-color);
      font-family: var(--font-secondary);
    }
    .contact-form .form-control:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 10px var(--primary-color);
    }
    textarea.form-control { resize: vertical; min-height: 120px; }

    .cta-button {
      display: inline-block;
      padding: 12px 24px;
      border: 2px solid var(--primary-color);
      border-radius: 5px;
      color: var(--primary-color);
      font-family: var(--font-primary);
      font-size: 1rem;
      text-transform: uppercase;
      transition: all 0.3s ease;
      box-shadow: 0 0 10px var(--primary-color);
      cursor: pointer;
      background: transparent;
    }
    .cta-button:hover { background-color: var(--primary-color); color: var(--background-color); box-shadow: 0 0 20px var(--primary-color); }
    
    .modal-backdrop { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal-content { text-align: center; }
    .modal-content .icon { font-size: 3rem; color: var(--primary-color); margin-bottom: 1rem; }

    .footer { text-align: center; padding: 2rem; border-top: 1px solid var(--glass-border); }

    @media (max-width: 768px) {
      .nav-menu { display: none; }
      .section-title { font-size: 2rem; }
      .hero-content h1 { font-size: 2.5rem; }
      main { padding: 0 1.5rem; }
      .header { padding: 1rem 1.5rem; }
      .content-section { padding: 4rem 0; }
    }
  `}</style>
);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setShowModal(true);
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const closeModal = () => setShowModal(false);

  return (
    <div className="App">
      <GlobalStyles />
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <a href="#" className="nav-logo glitch" data-text="Rifal Febiyan">Rifal Febiyan</a>
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">/tentang</a></li>
            <li><a href="#portfolio" className="nav-link">/portfolio</a></li>
            <li><a href="#contact" className="nav-link">/kontak</a></li>
            <li><a href="#contact" className="nav-link">/FaQ</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <img src="https://placehold.co/150x150/0a0a1a/00f7ff?text=RF" alt="Profile" className="profile-img" />
            <h1 className="glitch" data-text="Rifal Febiyan">Rifal Febiyan</h1>
            <p className="hero-subtitle">Web Developer | UI Designer | Data Analyst</p>
            <div className="social-links">
              <a href="https://github.com/rifalfebiyan" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <h2 className="section-title glitch" data-text="// TENTANG_SAYA">// TENTANG_SAYA</h2>
          <div className="about-container glass-effect">
            <p>
              Saya seorang pengembang web yang menyukai desain elegan dan aplikasi efisien. Dengan latar belakang yang kuat dalam pengembangan antarmuka pengguna (UI) dan analisis data, saya bersemangat untuk menciptakan pengalaman digital yang intuitif dan berdampak. Mari kita berkolaborasi untuk mewujudkan ide-ide Anda!
            </p>
          </div>
        </section>

        <section id="portfolio" className="content-section">
          <h2 className="section-title glitch" data-text="// PORTFOLIO">// PORTFOLIO</h2>
          <div className="projects-grid">
            {[
              { icon: '💻', title: 'Website Laundry', text: 'Desain website UMKM dengan UI responsif dan visual yang bersih.' },
              { icon: '🏨', title: 'Dashboard Hotel', text: 'Sistem manajemen tamu hotel dengan React, Bootstrap, dan Excel Export.' },
              { icon: '🌐', title: 'AI Translator', text: 'Aplikasi pembelajaran bahasa asing anak-anak berbasis Flask.' },
            ].map((item, index) => (
              <div key={index} className="project-card glass-effect">
                <div className="project-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section">
          <h2 className="section-title glitch" data-text="// KIRIM_PESAN">// KIRIM_PESAN</h2>
          <div className="contact-container glass-effect">
            <form action="https://formsubmit.co/rifalfebiyan123@gmail.com" method="POST" className="contact-form">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?success=true`} />
              
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Nama Anda" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Email Anda" required />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" placeholder="Pesan Anda..." required></textarea>
              </div>
              <button type="submit" className="cta-button">Kirim Pesan</button>
            </form>
          </div>
        </section>
      </main>

      {showModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content glass-effect" onClick={(e) => e.stopPropagation()}>
             <div className="icon">✔️</div>
             <h3>Pesan Terkirim!</h3>
             <p>Terima kasih telah menghubungi saya.</p>
             <button className="cta-button" onClick={closeModal}>Tutup</button>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Rifal Febiyan — All rights reserved.</p>
      </footer>
    </div>
  );
}
