import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom'; // Gunakan Link, bukan tag <a> biasa
import { ChevronDown, Sparkles, Star, Rocket, Telescope, User, Atom, Sun, Moon, BrainCircuit, X, Menu, ArrowRight, ArrowLeft, Layers, Zap, RadioTower } from 'lucide-react';

// --- Sub-Komponen yang Didesain Ulang ---

// Komponen Gaya yang Dilingkupi (Scoped)
const ScopedStyles = () => (
  <style>{`
    .space-container {
        font-family: 'Inter', sans-serif;
        overflow: hidden; /* Penting untuk menjaga elemen di dalam */
        background-color: #000000;
        color: white;
        position: relative; /* Menjadi konteks untuk elemen absolute di dalamnya */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .space-container .space-bg {
        background-image: radial-gradient(circle at 50% 0, rgba(38, 7,89, 0.5) 0%, rgba(0,0,0,0) 50%), 
                          radial-gradient(circle at 80% 10%, rgba(89, 24, 52, 0.4) 0%, rgba(0,0,0,0) 40%),
                          radial-gradient(circle at 20% 90%, rgba(13, 55, 96, 0.4) 0%, rgba(0,0,0,0) 50%);
    }
    .space-container a, .space-container .nav-link-back {
      cursor: pointer;
    }
    /* ... (Semua @keyframes dan kelas utilitas lainnya tetap sama) ... */
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
    @keyframes pulse { 0%, 100% { transform: scale(1); box-shadow: 0 0 10px #a78bfa; } 50% { transform: scale(1.1); box-shadow: 0 0 20px #a78bfa; } }
    @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
    .space-container .animate-title-char { display: inline-block; opacity: 0; transform: translateY(20px) scale(0.9); animation: fadeInChar 0.5s forwards; }
    @keyframes fadeInChar { to { opacity: 1; transform: translateY(0) scale(1); } }
    .space-container .reveal { opacity: 0; transition: opacity 1s ease-out, transform 1s ease-out; }
    .space-container .reveal.from-bottom { transform: translateY(50px); }
    .space-container .reveal.from-left { transform: translateX(-50px); }
    .space-container .reveal.from-right { transform: translateX(50px); }
    .space-container .reveal.visible { opacity: 1; transform: translateY(0) translateX(0); }
    .space-container .timeline-container::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 4px; height: 100%; background-image: linear-gradient(to bottom, #4f46e5, #d946ef, #6366f1); border-radius: 2px; opacity: 0.3; }
    .space-container .timeline-item { position: relative; width: 50%; padding-bottom: 50px; }
    .space-container .timeline-item:nth-child(odd) { left: 0; padding-right: 50px; text-align: right; }
    .space-container .timeline-item:nth-child(even) { left: 50%; padding-left: 50px; text-align: left; }
    .space-container .timeline-dot { position: absolute; top: 0; width: 20px; height: 20px; background: white; border-radius: 50%; border: 4px solid #111827; animation: pulse 2s infinite; display: flex; align-items: center; justify-content: center; }
    .space-container .timeline-item:nth-child(odd) .timeline-dot { right: -12px; }
    .space-container .timeline-item:nth-child(even) .timeline-dot { left: -12px; }
    .space-container .flip-card { perspective: 1000px; }
    .space-container .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.8s; transform-style: preserve-3d; }
    .space-container .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
    .space-container .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; display: flex; align-items: center; justify-content: center; text-align: center; padding: 2rem; }
    .space-container .flip-card-back { transform: rotateY(180deg); }
    .space-container .gallery-item { break-inside: avoid; }
    .space-container .hero-bg-nebula::before {
        content: ''; position: absolute; top: -20%; left: -20%; width: 140%; height: 140%;
        background-image: url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200');
        background-size: cover; background-position: center;
        opacity: 0.15; filter: blur(10px);
        animation: rotateNebula 120s linear infinite;
        z-index: -1;
    }
    @keyframes rotateNebula { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .space-container .horizontal-scroll {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 80%;
        gap: 1rem;
        overflow-x: auto;
        padding: 2rem 0;
        scrollbar-width: none; /* Firefox */
    }
    .space-container .horizontal-scroll::-webkit-scrollbar { display: none; /* Chrome, Safari, Opera */ }
    @media (min-width: 768px) { .space-container .horizontal-scroll { grid-auto-columns: 30%; } }
  `}</style>
);

const LoadingScreen = ({ onLoaded }) => {
    useEffect(() => {
        const timer = setTimeout(() => onLoaded(), 1800);
        return () => clearTimeout(timer);
    }, [onLoaded]);

    return (
        <div className="absolute inset-0 bg-black z-[101] flex flex-col items-center justify-center gap-4 transition-opacity duration-500">
            <style>{`
                .loader-star { animation: shimmer 1.5s infinite; }
                @keyframes shimmer { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
            `}</style>
            <Sparkles size={64} className="text-purple-400 loader-star" />
            <p className="text-lg tracking-widest animate-pulse">MEMUAT KOSMOS...</p>
        </div>
    );
};

const Header = ({ onMenuToggle }) => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="text-xl font-bold tracking-wider flex items-center gap-2 text-white nav-link-back"><ArrowLeft size={24} className="mr-2"/> Kembali ke Beranda</a>
                <nav className="hidden md:flex space-x-8">
                    {['Jelajah', 'Ekstrem', 'Linimasa', 'Galeri'].map(item => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-200 hover:text-purple-300 transition-colors">{item}</a>
                    ))}
                </nav>
                <button onClick={onMenuToggle} className="md:hidden z-50">
                    <Menu size={28} />
                </button>
            </div>
        </header>
    );
};

const MobileMenu = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="absolute inset-0 bg-black/90 backdrop-blur-lg z-[60] flex flex-col items-center justify-center">
            <button onClick={onClose} className="absolute top-6 right-6">
                <X size={32} />
            </button>
            <nav className="flex flex-col space-y-8 text-center text-2xl">
                <a href="/" onClick={onClose} className="text-gray-200 hover:text-purple-300 transition-colors">Kembali ke Beranda</a>
                {['Jelajah', 'Ekstrem', 'Fakta', 'Linimasa', 'Galeri'].map(item => (
                    <a key={item} href={`#${item.toLowerCase()}`} onClick={onClose} className="text-gray-200 hover:text-purple-300 transition-colors">{item}</a>
                ))}
            </nav>
        </div>
    );
};

const Lightbox = ({ image, onClose, onNext, onPrev }) => {
    if (!image) return null;
    return (
        <div className="absolute inset-0 bg-black/90 z-[100] flex items-center justify-center" onClick={onClose}>
            <div className="relative" onClick={e => e.stopPropagation()}>
                <img src={image.src} alt={image.alt} className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl shadow-purple-500/20"/>
                <p className="text-center text-gray-300 mt-2">{image.alt}</p>
                <button onClick={onClose} className="absolute -top-4 -right-4 bg-gray-800 rounded-full p-1 text-white text-3xl">&times;</button>
                <button onClick={onPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gray-800/50 p-2 rounded-full hover:bg-gray-700"><ArrowLeft size={28} /></button>
                <button onClick={onNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-gray-800/50 p-2 rounded-full hover:bg-gray-700"><ArrowRight size={28} /></button>
            </div>
        </div>
    );
};


// --- Komponen Utama ---
function Space() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const heroRef = useRef(null);
    const heroContentRef = useRef(null);
    const titleRef = useRef(null);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const galleryImages = useMemo(() => [
        { src: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=800", alt: "Galaksi Andromeda" },
        { src: "https://images.unsplash.com/photo-1543722530-53bce72886c1?q=80&w=800", alt: "Nebula Orion" },
        { src: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=800", alt: "Pilar Penciptaan" },
        { src: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=800", alt: "Aurora Borealis" },
        { src: "https://images.unsplash.com/photo-1446776811953-b23d579212de?q=80&w=800", alt: "Bumi dari Angkasa" },
        { src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800", alt: "Pusat Galaksi Bima Sakti" },
        { src: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=800", alt: "Gerhana Matahari Total" },
        { src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=800", alt: "Langit Malam Berbintang" },
        { src: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=800", alt: "Bima Sakti di atas Pegunungan" },
        { src: "https://images.unsplash.com/photo-1522036324838-92f5b0811e5d?q=80&w=800", alt: "Planet Jupiter" },
        { src: "https://images.unsplash.com/photo-1614726353900-195e48711317?q=80&w=800", alt: "Planet Saturnus" },
        { src: "https://images.unsplash.com/photo-1538370965246-fe2b07285181?q=80&w=800", alt: "Nebula Carina" },
    ], []);

    const handleLightboxOpen = (index) => setLightboxIndex(index);
    const handleLightboxClose = () => setLightboxIndex(null);
    const handleLightboxNext = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
    const handleLightboxPrev = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    
    // Efek Canvas Bintang
    useEffect(() => {
        if (isLoading || !containerRef.current || !canvasRef.current) return;
        const container = containerRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let mouseX = container.offsetWidth / 2, mouseY = container.offsetHeight / 2;
        const handleMouseMove = e => { 
            const rect = container.getBoundingClientRect();
            mouseX = e.clientX - rect.left; 
            mouseY = e.clientY - rect.top; 
        };
        container.addEventListener('mousemove', handleMouseMove);
        let animationFrameId, stars = [], numStars = 300;
        class Star { constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.z = Math.random() * canvas.width; this.x_ = this.x; this.y_ = this.y; } draw() { ctx.beginPath(); const size = (1 - this.z / canvas.width) * 3; const alpha = (1 - this.z / canvas.width) * 0.8; ctx.arc(this.x, this.y, size, 0, Math.PI * 2); ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`; ctx.fill(); } update() { this.z -= 0.3; if (this.z < 1) this.z = canvas.width; const dx = this.x - mouseX; const dy = this.y - mouseY; const dist = Math.sqrt(dx * dx + dy * dy); const fdx = dx / dist; const fdy = dy / dist; const maxDist = 150; const force = (maxDist - dist) / maxDist; const dirX = fdx * force * (1 - this.z/canvas.width) * 2; const dirY = fdy * force * (1-this.z/canvas.width) * 2; if (dist < maxDist) { this.x += dirX; this.y += dirY; } else { if (this.x !== this.x_) this.x -= (this.x - this.x_) * 0.01; if (this.y !== this.y_) this.y -= (this.y - this.y_) * 0.01; } } }
        const resizeCanvas = () => { if(container && canvas) { canvas.width = container.offsetWidth; canvas.height = container.offsetHeight; stars = []; for (let i = 0; i < numStars; i++) stars.push(new Star()); }};
        const observer = new ResizeObserver(resizeCanvas);
        observer.observe(container);
        resizeCanvas();
        const animate = () => { if(ctx && canvas) { ctx.clearRect(0, 0, canvas.width, canvas.height); stars.forEach(star => { star.update(); star.draw(); }); animationFrameId = requestAnimationFrame(animate); }};
        animate();
        return () => { cancelAnimationFrame(animationFrameId); container.removeEventListener('mousemove', handleMouseMove); observer.disconnect(); };
    }, [isLoading]);

    // Efek Animasi Judul & Parallax Hero
    useEffect(() => {
        if (isLoading) return;

        const titleContainer = titleRef.current;
        if (titleContainer) {
            const titleText = "Jelajah Kosmos";
            titleContainer.innerHTML = titleText.split('').map((char, index) => `<span class="animate-title-char" style="animation-delay: ${index * 50}ms">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
        }
        
        const hero = heroRef.current;
        const heroContent = heroContentRef.current;

        if (hero && heroContent) {
            const handleMouseMove = (e) => { 
                const rect = hero.getBoundingClientRect();
                const clientX = e.clientX - rect.left;
                const clientY = e.clientY - rect.top;
                const xPos = (clientX / hero.offsetWidth - 0.5) * 40; 
                const yPos = (clientY / hero.offsetHeight - 0.5) * 40; 
                heroContent.style.transform = `translate(${xPos}px, ${yPos}px)`; 
            };
            hero.addEventListener('mousemove', handleMouseMove);
            return () => hero.removeEventListener('mousemove', handleMouseMove);
        }
    }, [isLoading]);
    
    // Efek Scroll Reveal
    useEffect(() => {
        if (isLoading || !containerRef.current) return;
        
        const revealElements = containerRef.current.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => { 
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); 
        }, { root: null, threshold: 0.1 });
        
        revealElements.forEach(el => observer.observe(el));
        return () => revealElements.forEach(el => observer.unobserve(el));
    }, [isLoading]);

    return (
        <div ref={containerRef} className="space-container">
            <ScopedStyles />
            <Lightbox image={lightboxIndex !== null ? galleryImages[lightboxIndex] : null} onClose={handleLightboxClose} onNext={handleLightboxNext} onPrev={handleLightboxPrev} />
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}

            <div className="space-bg bg-black">
                <canvas ref={canvasRef} id="starfield" className="absolute top-0 left-0 w-full h-full z-0"></canvas>
                <div className="relative z-10">
                    <Header onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
                    
                    <section id="beranda" ref={heroRef} className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden hero-bg-nebula">
                         <div className="max-w-4xl z-10" ref={heroContentRef}>
                            <h2 ref={titleRef} className="text-5xl md:text-8xl font-black uppercase mb-4 tracking-tighter" id="main-title"></h2>
                            <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto reveal from-bottom">
                                Selamat datang di penjelajahan tak terbatas. Temukan keajaiban galaksi, misteri lubang hitam, dan keindahan nebula yang memukau.
                            </p>
                            <a href="#jelajah" className="mt-8 inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50 reveal from-bottom" style={{ transitionDelay: '200ms' }}>
                                Mulai Penjelajahan
                            </a>
                        </div>
                        <a href="#jelajah" className="absolute bottom-10 left-1/2 -translate-x-1/2">
                          <ChevronDown size={48} className="animate-bounce text-white/50" />
                        </a>
                    </section>
                    
                    <section id="jelajah" className="py-20 px-4">
                        <div className="container mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold reveal from-bottom">Jelajahi Keajaiban Angkasa</h2>
                                <p className="text-gray-400 mt-2 reveal from-bottom" style={{ transitionDelay: '100ms' }}>Tiga pilar kosmos yang menjadi fondasi pemahaman kita.</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-10">
                                 <div className="group bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-2xl shadow-purple-900/20 reveal from-left transition-all duration-300 hover:border-purple-400 hover:shadow-purple-700/30 hover:-translate-y-2" style={{ transitionDelay: '200ms' }}>
                                    <img src="https://images.unsplash.com/photo-1570280437489-ce5f83fb838b?q=80&w=800" alt="Ilustrasi Planet" className="w-full h-48 object-cover rounded-lg mb-6" style={{ animation: 'float 6s ease-in-out infinite' }} />
                                    <h3 className="text-2xl font-bold mb-3 text-purple-300">Dunia Penuh Warna</h3>
                                    <p className="text-gray-400">Setiap planet, dari raksasa gas yang bergejolak hingga dunia bebatuan sunyi, adalah laboratorium alam yang unik, menceritakan kisah pembentukan tata surya.</p>
                                </div>
                                <div className="group bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-900/20 reveal from-bottom transition-all duration-300 hover:border-blue-400 hover:shadow-blue-700/30 hover:-translate-y-2" style={{ transitionDelay: '400ms' }}>
                                    <img src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=800" alt="Ilustrasi Galaksi" className="w-full h-48 object-cover rounded-lg mb-6" style={{ animation: 'float 6s ease-in-out infinite 1s' }} />
                                    <h3 className="text-2xl font-bold mb-3 text-blue-300">Pulau Bintang Raksasa</h3>
                                    <p className="text-gray-400">Galaksi adalah kota kosmik yang megah, rumah bagi miliaran hingga triliunan bintang yang terikat oleh gravitasi, menari dalam spiral dan elips yang anggun.</p>
                                </div>
                                <div className="group bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-pink-500/20 shadow-2xl shadow-pink-900/20 reveal from-right transition-all duration-300 hover:border-pink-400 hover:shadow-pink-700/30 hover:-translate-y-2" style={{ transitionDelay: '600ms' }}>
                                    <img src="https://images.unsplash.com/photo-1538370965246-fe2b07285181?q=80&w=800" alt="Ilustrasi Nebula" className="w-full h-48 object-cover rounded-lg mb-6" style={{ animation: 'float 6s ease-in-out infinite 2s' }} />
                                    <h3 className="text-2xl font-bold mb-3 text-pink-300">Awan Kosmik Artistik</h3>
                                    <p className="text-gray-400">Nebula adalah kanvas alam semesta, tempat lahir dan kuburan bintang, dilukis dengan spektrum cahaya dari elemen-elemen yang membentuk kita semua.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section id="ekstrem" className="py-20">
                      <div className="container mx-auto">
                         <div className="text-center mb-8 px-4">
                            <h2 className="text-4xl md:text-5xl font-bold reveal from-bottom">Objek Paling Ekstrem</h2>
                            <p className="text-gray-400 mt-2 reveal from-bottom" style={{ transitionDelay: '100ms' }}>Menyelami batas-batas fisika di alam semesta.</p>
                        </div>
                        <div className="horizontal-scroll pl-4 md:pl-0">
                          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 w-full flex flex-col justify-between">
                            <div>
                              <Layers size={40} className="mb-4 text-red-400"/>
                              <h3 className="text-xl font-bold mb-2">Lubang Hitam</h3>
                              <p className="text-gray-400 text-sm">Sebuah wilayah ruang-waktu di mana gravitasi begitu kuat sehingga tidak ada, bahkan cahaya, yang bisa lolos.</p>
                            </div>
                            <p className="text-sm mt-4 font-mono text-red-300">Massa: Hingga 66 Miliar Matahari</p>
                          </div>
                          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 w-full flex flex-col justify-between">
                            <div>
                              <Zap size={40} className="mb-4 text-yellow-400"/>
                              <h3 className="text-xl font-bold mb-2">Bintang Neutron</h3>
                              <p className="text-gray-400 text-sm">Sisa-sisa inti bintang raksasa yang runtuh, begitu padatnya sehingga satu sendok teh materinya berbobot miliaran ton.</p>
                            </div>
                            <p className="text-sm mt-4 font-mono text-yellow-300">Rotasi: Hingga 716 kali/detik</p>
                          </div>
                          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 w-full flex flex-col justify-between">
                            <div>
                              <RadioTower size={40} className="mb-4 text-cyan-400"/>
                              <h3 className="text-xl font-bold mb-2">Quasar</h3>
                              <p className="text-gray-400 text-sm">Pusat galaksi aktif yang sangat terang, ditenagai oleh lubang hitam supermasif yang melahap materi di sekitarnya.</p>
                            </div>
                            <p className="text-sm mt-4 font-mono text-cyan-300">Cahaya: {'>'}1 Triliun Matahari</p>
                          </div>
                           <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 w-full flex flex-col justify-between">
                            <div>
                              <Sparkles size={40} className="mb-4 text-purple-400"/>
                              <h3 className="text-xl font-bold mb-2">Magnetar</h3>
                              <p className="text-gray-400 text-sm">Jenis bintang neutron dengan medan magnet yang luar biasa kuat, triliunan kali lebih kuat dari medan magnet Bumi.</p>
                            </div>
                            <p className="text-sm mt-4 font-mono text-purple-300">Medan Magnet: 1 Kuadriliun Gauss</p>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section id="fakta" className="py-20 px-4 bg-black/20">
                      <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold reveal from-bottom">Tahukah Kamu?</h2>
                            <p className="text-gray-400 mt-2 reveal from-bottom" style={{ transitionDelay: '100ms' }}>Fakta mengejutkan dari alam semesta.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-10">
                             <div className="flip-card h-[250px] reveal from-left" style={{ transitionDelay: '200ms' }}>
                                <div className="flip-card-inner rounded-2xl">
                                    <div className="flip-card-front bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-center">
                                        <Telescope size={48} className="mb-4 text-yellow-300" />
                                        <h3 className="text-xl font-bold">Jejak Kaki Abadi</h3>
                                        <p className="mt-2 text-gray-400">Sentuh untuk melihat</p>
                                    </div>
                                    <div className="flip-card-back bg-yellow-900/50 backdrop-blur-md rounded-2xl border border-yellow-700">
                                        <p>Jejak kaki para astronot di Bulan akan tetap ada di sana selama jutaan tahun karena tidak ada angin atau air untuk menghapusnya.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="flip-card h-[250px] reveal from-bottom" style={{ transitionDelay: '400ms' }}>
                                <div className="flip-card-inner rounded-2xl">
                                    <div className="flip-card-front bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-center">
                                        <Star size={48} className="mb-4 text-cyan-300" />
                                        <h3 className="text-xl font-bold">Hujan Berlian</h3>
                                        <p className="mt-2 text-gray-400">Sentuh untuk melihat</p>
                                    </div>
                                    <div className="flip-card-back bg-cyan-900/50 backdrop-blur-md rounded-2xl border border-cyan-700">
                                        <p>Para ilmuwan percaya bahwa di atmosfer planet Neptunus dan Uranus, tekanan ekstrem menekan karbon menjadi berlian padat yang turun sebagai hujan.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="flip-card h-[250px] reveal from-right" style={{ transitionDelay: '600ms' }}>
                                <div className="flip-card-inner rounded-2xl">
                                    <div className="flip-card-front bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-center">
                                        <Sun size={48} className="mb-4 text-red-300" />
                                        <h3 className="text-xl font-bold">Matahari Terbenam Biru</h3>
                                        <p className="mt-2 text-gray-400">Sentuh untuk melihat</p>
                                    </div>
                                    <div className="flip-card-back bg-red-900/50 backdrop-blur-md rounded-2xl border border-red-700">
                                        <p>Di Mars, partikel debu halus di atmosfer menyebarkan cahaya merah, membiarkan cahaya biru menembus lurus ke mata, menciptakan pemandangan matahari terbenam yang berwarna biru.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </section>
                    <section id="linimasa" className="py-20 px-4">
                        <div className="container mx-auto">
                            <div className="text-center mb-24">
                                <h2 className="text-4xl md:text-5xl font-bold reveal from-bottom">Linimasa Kosmik</h2>
                                <p className="text-gray-400 mt-2 reveal from-bottom" style={{ transitionDelay: '100ms' }}>Perjalanan waktu dari awal hingga kini.</p>
                            </div>
                            <div className="timeline-container relative max-w-3xl mx-auto">
                                <div className="timeline-item reveal from-left flex items-start justify-end"><div className="text-right pr-12"><h3 className="text-2xl font-bold text-indigo-300">13.8 Miliar Tahun Lalu</h3><p className="text-gray-400 mt-2">Big Bang, kelahiran alam semesta dari singularitas.</p></div><div className="timeline-dot"><Sparkles size={10} className="text-black"/></div></div>
                                <div className="timeline-item reveal from-right flex items-start"><div className="timeline-dot"><Star size={10} className="text-black"/></div><div className="text-left pl-12"><h3 className="text-2xl font-bold text-purple-300">13.6 Miliar Tahun Lalu</h3><p className="text-gray-400 mt-2">Bintang & galaksi pertama terbentuk.</p></div></div>
                                <div className="timeline-item reveal from-left flex items-start justify-end"><div className="text-right pr-12"><h3 className="text-2xl font-bold text-pink-300">4.6 Miliar Tahun Lalu</h3><p className="text-gray-400 mt-2">Tata surya kita terbentuk.</p></div><div className="timeline-dot"><Sun size={10} className="text-black"/></div></div>
                                <div className="timeline-item reveal from-right flex items-start"><div className="timeline-dot"><Moon size={10} className="text-black"/></div><div className="text-left pl-12"><h3 className="text-2xl font-bold text-gray-300">4.5 Miliar Tahun Lalu</h3><p className="text-gray-400 mt-2">Bulan terbentuk dari tabrakan besar.</p></div></div>
                                <div className="timeline-item reveal from-left flex items-start justify-end"><div className="text-right pr-12"><h3 className="text-2xl font-bold text-green-300">3.7 Miliar Tahun Lalu</h3><p className="text-gray-400 mt-2">Kehidupan pertama muncul di Bumi.</p></div><div className="timeline-dot"><Atom size={10} className="text-black"/></div></div>
                                <div className="timeline-item reveal from-right flex items-start"><div className="timeline-dot"><User size={10} className="text-black"/></div><div className="text-left pl-12"><h3 className="text-2xl font-bold text-blue-300">200,000 Tahun Lalu</h3><p className="text-gray-400 mt-2">Manusia modern berevolusi.</p></div></div>
                                <div className="timeline-item reveal from-left flex items-start justify-end"><div className="text-right pr-12"><h3 className="text-2xl font-bold text-yellow-300">Tahun 1977</h3><p className="text-gray-400 mt-2">Wahana Voyager diluncurkan.</p></div><div className="timeline-dot"><Rocket size={10} className="text-black" style={{transform: "rotate(45deg)"}}/></div></div>
                            </div>
                        </div>
                    </section>
                    <section id="galeri" className="py-20 px-4">
                        <div className="container mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold reveal from-bottom">Galeri Kosmik</h2>
                                <p className="text-gray-400 mt-2 reveal from-bottom" style={{ transitionDelay: '100ms' }}>Potret-potret keindahan alam semesta.</p>
                            </div>
                            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                                {galleryImages.map((img, index) => (
                                    <div key={index} className="gallery-item reveal from-bottom" onClick={() => handleLightboxOpen(index)}>
                                        <img className="h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer gallery-img shadow-lg" src={img.src} alt={img.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <footer className="text-center py-10 border-t border-gray-800 px-4">
                        <div className="container mx-auto">
                          <h3 className="text-xl font-bold mb-4">Lanjutkan Penjelajahan Anda</h3>
                          <div className="flex justify-center space-x-6 mb-8 text-gray-400">
                            <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">NASA</a>
                            <a href="https://www.esa.int/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">ESA</a>
                            <a href="https://www.space.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">Space.com</a>
                          </div>
                          <p className="text-gray-500">&copy; 2024 Jelajah Kosmos. Dibuat dengan keajaiban semesta.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Space;

