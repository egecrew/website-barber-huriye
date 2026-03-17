import { useState, useEffect } from 'react'
import './index.css'

/**
 * EGECREW MASTER TEMPLATE v2.0
 * 
 * This template is designed to be:
 * - Responsive at ALL viewport sizes (375px to 4K+)
 * - Accessible (WCAG AA compliant)
 * - Fast (optimized for Core Web Vitals)
 * - Easy to customize (CSS variables)
 * 
 * CUSTOMIZATION GUIDE:
 * 1. Update business info in the data objects below
 * 2. Customize colors in :root CSS variables (index.css)
 * 3. Replace placeholder images with actual business photos
 * 4. Update category-specific icons and services
 */

// ========== BUSINESS DATA (CUSTOMIZE PER SITE) ==========
const BUSINESS = {
  name: 'İşletme Adı',
  tagline: 'Profesyonel Hizmet, Güler Yüzlü Yaklaşım',
  category: 'Hizmet',
  emoji: '🏪',
  
  contact: {
    phone: '+90 252 XXX XX XX',
    email: 'info@example.com',
    address: 'Adres bilgisi buraya gelecek, Bodrum/Muğla',
    hours: 'Her Gün: 09:00 - 20:00',
  },
  
  rating: {
    score: 4.5,
    count: 50,
  },
  
  socialLinks: {
    instagram: '#',
    facebook: '#',
    whatsapp: '#',
  },
}

// ========== SERVICES DATA ==========
const SERVICES = [
  { icon: '⭐', title: 'Hizmet 1', desc: 'Hizmet açıklaması buraya gelecek.' },
  { icon: '🎯', title: 'Hizmet 2', desc: 'Hizmet açıklaması buraya gelecek.' },
  { icon: '💼', title: 'Hizmet 3', desc: 'Hizmet açıklaması buraya gelecek.' },
]

// ========== GALLERY DATA ==========
const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600', title: 'Mekanımız' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600', title: 'Hizmetlerimiz' },
  { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600', title: 'Ekibimiz' },
  { src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600', title: 'Atmosfer' },
]

// ========== FEATURES DATA ==========
const FEATURES = [
  'Profesyonel Ekip',
  'Kaliteli Hizmet',
  'Uygun Fiyatlar',
  'Güler Yüzlü Yaklaşım',
  'Merkezi Konum',
  'Kolay Ulaşım',
]

// ========== MAIN COMPONENT ==========
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  // Generate star rating display
  const renderStars = (score) => {
    const fullStars = Math.floor(score)
    const hasHalf = score % 1 >= 0.5
    return '★'.repeat(fullStars) + (hasHalf ? '½' : '') + '☆'.repeat(5 - fullStars - (hasHalf ? 1 : 0))
  }

  return (
    <div className="min-h-screen bg-background-light text-foreground overflow-x-hidden">
      {/* ===== HEADER ===== */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-primary py-4'
      }`}>
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-2xl">{BUSINESS.emoji}</span>
            <span className={scrolled ? 'text-foreground' : 'text-white'}>
              {BUSINESS.name}
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {['about', 'services', 'gallery', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-foreground-muted' : 'text-white/90'
                }`}
              >
                {section === 'about' && 'Hakkımızda'}
                {section === 'services' && 'Hizmetler'}
                {section === 'gallery' && 'Galeri'}
                {section === 'contact' && 'İletişim'}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary !py-2 !px-4 text-sm"
            >
              Bize Ulaşın
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 text-2xl ${scrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'
        } overflow-hidden`}>
          <div className="container py-4 flex flex-col gap-3">
            {['about', 'services', 'gallery', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                {section === 'about' && 'Hakkımızda'}
                {section === 'services' && 'Hizmetler'}
                {section === 'gallery' && 'Galeri'}
                {section === 'contact' && 'İletişim'}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 text-center py-24">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-yellow-400 text-lg">{renderStars(BUSINESS.rating.score)}</span>
            <span className="font-semibold">{BUSINESS.rating.score}</span>
            <span className="text-white/70 text-sm">({BUSINESS.rating.count}+ yorum)</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {BUSINESS.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            {BUSINESS.tagline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary !bg-white !text-primary hover:!bg-white/90"
            >
              Bize Ulaşın
            </button>
            <a 
              href={`tel:${BUSINESS.contact.phone.replace(/\s/g, '')}`}
              className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-primary"
            >
              📞 Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="badge mb-4">Hakkımızda</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {BUSINESS.name}
            </h2>
            <div className="divider-decorated" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                {BUSINESS.name} olarak yıllardır Bodrum'da hizmet vermekteyiz. 
                Müşteri memnuniyeti ve kaliteli hizmet anlayışımızla 
                bölgenin en güvenilir işletmelerinden biriyiz.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3">
                {FEATURES.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-background-light rounded-lg">
                    <span className="text-success">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Rating Card */}
            <div className="flex justify-center">
              <div className="card p-8 text-center max-w-sm">
                <div className="text-5xl font-bold text-primary mb-2">
                  ⭐ {BUSINESS.rating.score}
                </div>
                <div className="text-yellow-500 text-xl mb-2">
                  {renderStars(BUSINESS.rating.score)}
                </div>
                <p className="text-foreground-muted">
                  {BUSINESS.rating.count}+ mutlu müşteri
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="section bg-background-light">
        <div className="container">
          <div className="section-header">
            <span className="badge mb-4">Hizmetlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Neler Sunuyoruz?
            </h2>
            <div className="divider-decorated" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <div 
                key={i}
                className="card p-8 text-center hover:border-primary border-2 border-transparent cursor-pointer group"
              >
                <span className="text-5xl mb-4 block group-hover:animate-bounce-subtle">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section id="gallery" className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="badge mb-4">Galeri</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mekanımızdan Kareler
            </h2>
            <div className="divider-decorated" />
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((img, i) => (
              <div 
                key={i}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="section bg-background-light">
        <div className="container">
          <div className="section-header">
            <span className="badge mb-4">İletişim</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bize Ulaşın
            </h2>
            <div className="divider-decorated" />
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: '📍', title: 'Adres', content: BUSINESS.contact.address },
                { icon: '📞', title: 'Telefon', content: BUSINESS.contact.phone, link: `tel:${BUSINESS.contact.phone.replace(/\s/g, '')}` },
                { icon: '⏰', title: 'Çalışma Saatleri', content: BUSINESS.contact.hours },
                { icon: '⭐', title: 'Google Reviews', content: `${BUSINESS.rating.score}/5.0 (${BUSINESS.rating.count} yorum)` },
              ].map((item, i) => (
                <div key={i} className="card flex gap-4 p-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-primary hover:underline text-sm">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-foreground-muted text-sm">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 card p-8">
              {submitted && (
                <div className="bg-success/10 text-success p-4 rounded-xl text-center font-semibold mb-6">
                  ✅ Mesajınız gönderildi! En kısa sürede sizinle iletişime geçeceğiz.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label">Adınız Soyadınız</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Adınız"
                  />
                </div>
                <div>
                  <label className="label">E-posta</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="label">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>

              <div className="mb-6">
                <label className="label">Mesajınız</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Mesaj Gönder →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-background-dark text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                {BUSINESS.emoji} {BUSINESS.name}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {BUSINESS.tagline}
              </p>
              <span className="inline-flex items-center gap-2 mt-4 bg-white/10 px-3 py-1 rounded-full text-sm">
                📁 {BUSINESS.category}
              </span>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">İletişim</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                📞 {BUSINESS.contact.phone}<br/>
                📍 {BUSINESS.contact.address.split(',')[0]}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Çalışma Saatleri</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {BUSINESS.contact.hours}
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} {BUSINESS.name}. Tüm hakları saklıdır. | Bodrum, Türkiye 🇹🇷
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
