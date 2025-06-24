import React, { useEffect, useState } from 'react';

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
        <nav className={`navbar navbar-expand-lg fixed-top py-3 ${ scrolled ? 'bg-dark navbar-dark shadow' : 'bg-transparent navbar-light'
        }`}
        style={{ fontSize: '1.1rem', transition: 'all 0.3s ease-in-out' }}
        >
        <div className="container-fluid">
            <a className="navbar-brand fw-bold ms-5" href="#" style={{ fontSize: '1.4rem' }}> Rifal Febiyan</a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a className="nav-link fw-bold px-3" href="#about">Tentang</a>
                </li>
                <li className="nav-item">
                <a className="nav-link fw-bold px-3" href="#portfolio">Portofolio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link fw-bold px-3" href="#contact">Kontak</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>


      {/* Hero Section */}
        <section
        className="text-white text-center d-flex align-items-center position-relative"
        style={{
            height: '100vh',
            background: 'linear-gradient(135deg,rgb(186, 13, 152), #00c6ff)',
            paddingTop: '70px',
        }}
        >
        <div className="container-fluid animate__animated animate__fadeInDown">
            <img
            src="/profile2.jpg"
            alt="Profile"
            className="rounded-circle mb-4 shadow"
            width="150"
            height="150"
            />
            <h1 className="display-4 fw-bold animate__animated animate__zoomIn">Rifal Febiyan</h1>
            <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
            Web Developer | UI Designer | Data Analyst
            </p>

            {/* Social Icons */}
            <div className="d-flex justify-content-center gap-3 mt-4">
            {[
                { icon: 'bi-github', link: 'https://github.com/rifalfebiyan' },
                { icon: 'bi-instagram', link: '#' },
                { icon: 'bi-facebook', link: '#' },
                { icon: 'bi-twitter', link: '#' },
                { icon: 'bi-tiktok', link: '#' },
            ].map((item, index) => (
                <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fff';
                    e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
                >
                <i className={`bi ${item.icon} fs-5`}></i>
                </a>
            ))}
            </div>
        </div>

        {/* Wave Separator */}
        <div style={{ position: 'absolute', bottom: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
            <svg viewBox="0 0 1440 150" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path
                fill="#f8f9fa"
                d="M0,0 C360,90 720,-60 1080,90 C1260,150 1440,90 1440,90 L1440,150 L0,150 Z"
            />
            </svg>
        </div>
        </section>


   

      {/* About Section */}
<section id="about" className="bg-light py-5 position-relative">
  <div className="container-fluid px-5">
    <h2 className="text-center fw-bold mb-4 animate__animated animate__fadeIn">Tentang Saya</h2>
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div
          className="fs-5 text-center animate__animated animate__fadeInUp animate__delay-1s"
          style={{ animation: 'floatText 3s ease-in-out infinite' }}
        >
          Saya seorang pengembang web yang menyukai desain elegan dan aplikasi efisien.
            <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />

  
        </div>
      </div>
    </div>
  </div>

  {/* Wave Separator bawah About */}
  <div style={{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
  }}>
<svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '150px' }}>
  <path
    fill="#ffffff"
    d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,160C672,181,768,235,864,234.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
/>
</svg>
  </div>
</section>




      {/* Portfolio Section */}
      <section id="portfolio" className="py-5 bg-white">
        <div className="container-fluid px-5">
          <h2 className="text-center fw-bold mb-5 animate__animated animate__fadeIn">Portofolio</h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                icon: 'bi-pc-display',
                title: 'Website Laundry',
                text: 'Desain website UMKM dengan UI responsif dan visual yang bersih.',
                delay: '0s',
              },
              {
                icon: 'bi-building',
                title: 'Dashboard Hotel',
                text: 'Sistem manajemen tamu hotel dengan React, Bootstrap, dan Excel Export.',
                delay: '0.3s',
              },
              {
                icon: 'bi-translate',
                title: 'AI Translator',
                text: 'Aplikasi pembelajaran bahasa asing anak-anak berbasis Flask.',
                delay: '0.6s',
              },
            ].map((item, index) => (
              <div key={index} className="col-md-4 text-center">
                <div
                  className="card h-100 border-0 shadow animate__animated animate__fadeInUp"
                  style={{
                    animationDelay: item.delay,
                    transition: 'transform 0.3s ease, border 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) =>
                    e.currentTarget.style.transform = 'translateY(-10px)'
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.style.transform = 'translateY(0)'
                  }
                >
                  <div className="card-body">
                    <div className="mb-3">
                      <i className={`bi ${item.icon} fs-1 text-primary`}></i>
                    </div>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-light py-5">
        <div className="container-fluid px-5">
          <h2 className="text-center fw-bold mb-4 animate__animated animate__fadeIn">Kontak</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-light">
                  Email: <a href="mailto:rifal@example.com">rifal@example.com</a>
                </li>
                <li className="list-group-item bg-light">
                  LinkedIn: <a href="https://linkedin.com/in/rifalfebiyan" target="_blank" rel="noopener noreferrer">linkedin.com/in/rifalfebiyan</a>
                </li>
                <li className="list-group-item bg-light">
                  GitHub: <a href="https://github.com/rifalfebiyan" target="_blank" rel="noopener noreferrer">github.com/rifalfebiyan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container-fluid">
          <small>&copy; {new Date().getFullYear()} Rifal Febiyan — All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default Home;
