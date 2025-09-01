'use client'

import { useState, useEffect } from 'react'

// Componentes de logo para diferentes secciones
function HeaderLogo() {
  return (
    <img 
      src="/logo-luthiplast3.png" 
      alt="LUTHIPLAST Logo" 
      className="w-full h-full object-contain"
    />
  )
}

function HeroLogo() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <img 
        src="/logo-luthiplast2.png" 
        alt="LUTHIPLAST Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  )
}

function FooterLogo() {
  return (
    <img 
      src="/logo-luthiplast2.png" 
      alt="LUTHIPLAST Logo" 
      className="w-full h-full object-contain"
    />
  )
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <HeaderLogo />
              </div>
              <div className="text-2xl font-bold text-[#1a2951]">LUTHIPLAST</div>
            </div>
            
            {/* Menú desktop */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-[#1a2951] transition-colors font-medium">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-[#1a2951] transition-colors font-medium">Servicios</a>
              <a href="#proyectos" className="text-gray-700 hover:text-[#1a2951] transition-colors font-medium">Proyectos</a>
              <a href="#nosotros" className="text-gray-700 hover:text-[#1a2951] transition-colors font-medium">Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-[#1a2951] transition-colors font-medium">Contacto</a>
            </nav>
            
            <div className="hidden lg:block">
              <button className="bg-[#1a2951] hover:bg-[#1a2951]/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Cotizar Proyecto
              </button>
            </div>
            
            {/* Botón menú móvil */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`h-0.5 bg-current transform transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`h-0.5 bg-current transform transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 bg-current transform transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
          
          {/* Menú móvil */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t pt-4 bg-white rounded-lg shadow-lg">
              <a href="#inicio" className="block py-3 text-gray-700 hover:text-[#1a2951] font-medium">Inicio</a>
              <a href="#servicios" className="block py-3 text-gray-700 hover:text-[#1a2951] font-medium">Servicios</a>
              <a href="#proyectos" className="block py-3 text-gray-700 hover:text-[#1a2951] font-medium">Proyectos</a>
              <a href="#nosotros" className="block py-3 text-gray-700 hover:text-[#1a2951] font-medium">Nosotros</a>
              <a href="#contacto" className="block py-3 text-gray-700 hover:text-[#1a2951] font-medium">Contacto</a>
              <button className="w-full mt-4 bg-[#1a2951] text-white py-3 rounded-lg font-semibold">
                Cotizar Proyecto
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1a2951] via-[#1a2951]/90 to-[#1a2951]/80 overflow-hidden pt-20">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8 lg:hidden">
                <HeroLogo />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Soluciones <span className="text-blue-300">Arquitectónicas</span> Profesionales
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                Especialistas en <strong>instalación profesional</strong> de ventanas de aluminio, 
                mamparas, policarbonatos y sistemas constructivos de alta calidad para proyectos residenciales y comerciales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-[#1a2951] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:transform hover:scale-105 shadow-lg">
                  Solicitar Cotización
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#1a2951] px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                  Ver Portfolio
                </button>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-96 h-96 bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <HeroLogo />
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
                    <p className="text-gray-300 text-sm">Materiales premium y instalación profesional certificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2951] mb-4">
              Servicios Profesionales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales especializadas en sistemas de aluminio y policarbonatos 
              con los más altos estándares de calidad y certificación profesional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 hover:border-[#1a2951]/30">
              <div className="w-16 h-16 bg-[#1a2951]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a2951]/20 transition-colors">
                <svg className="w-8 h-8 text-[#1a2951]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <rect x="9" y="9" width="6" height="6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2951] mb-4">Ventanas de Aluminio</h3>
              <p className="text-gray-700 mb-6">
                Sistemas de ventanería profesional con perfiles de alta resistencia, 
                aislamiento térmico superior y acabados premium.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Doble vidrio hermético certificado</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Perfiles estructurales reforzados</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Acabados anodizados premium</li>
              </ul>
              <div className="text-[#1a2951] font-semibold">Garantía 5 años</div>
            </div>
            
            <div className="group bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 hover:border-[#1a2951]/30">
              <div className="w-16 h-16 bg-[#1a2951]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a2951]/20 transition-colors">
                <svg className="w-8 h-8 text-[#1a2951]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7h20L12 2z"/>
                  <path d="M2 17h20v4H2v-4z"/>
                  <path d="M6 11v6"/>
                  <path d="M18 11v6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2951] mb-4">Mamparas Corporativas</h3>
              <p className="text-gray-700 mb-6">
                Divisiones arquitectónicas para espacios comerciales y residenciales 
                con diseños contemporáneos y funcionalidad superior.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Vidrio templado de seguridad 8mm</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Sistemas de deslizamiento premium</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Herrajes de acero inoxidable</li>
              </ul>
              <div className="text-[#1a2951] font-semibold">Instalación certificada</div>
            </div>
            
            <div className="group bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 hover:border-[#1a2951]/30">
              <div className="w-16 h-16 bg-[#1a2951]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a2951]/20 transition-colors">
                <svg className="w-8 h-8 text-[#1a2951]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12h18l-9-9-9 9z"/>
                  <path d="M5 12v8a2 2 0 002 2h10a2 2 0 002-2v-8"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2951] mb-4">Techos de Policarbonato</h3>
              <p className="text-gray-700 mb-6">
                Coberturas translúcidas de alta resistencia con protección UV 
                avanzada y estructuras de soporte profesionales.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Protección UV 99.9% certificada</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Resistencia al impacto 250x vidrio</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Estructuras galvanizadas</li>
              </ul>
              <div className="text-[#1a2951] font-semibold">Garantía 10 años</div>
            </div>
            
            <div className="group bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 hover:border-[#1a2951]/30">
              <div className="w-16 h-16 bg-[#1a2951]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a2951]/20 transition-colors">
                <svg className="w-8 h-8 text-[#1a2951]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <path d="M9 9h6v6H9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2951] mb-4">Paneles Arquitectónicos</h3>
              <p className="text-gray-700 mb-6">
                Revestimientos de aluminio compuesto para fachadas modernas 
                con acabados especiales y propiedades ignífugas.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Aluminio compuesto A2 ignífugo</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Acabados PVDF premium</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Sistema de anclaje estructural</li>
              </ul>
              <div className="text-[#1a2951] font-semibold">Certificación ASTM</div>
            </div>
            
            <div className="group bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 hover:border-[#1a2951]/30">
              <div className="w-16 h-16 bg-[#1a2951]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a2951]/20 transition-colors">
                <svg className="w-8 h-8 text-[#1a2951]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2951] mb-4">Sistemas Sol y Sombra</h3>
              <p className="text-gray-700 mb-6">
                Estructuras tensadas profesionales para protección solar 
                con telas técnicas y sistemas de tensado avanzados.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Telas HDPE con filtro UV</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Estructuras de acero galvanizado</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#1a2951] rounded-full mr-3"></span>Sistemas de tensado profesional</li>
              </ul>
              <div className="text-[#1a2951] font-semibold">Resistencia 120 km/h</div>
            </div>
            
            <div className="group bg-[#1a2951] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultoría Especializada</h3>
              <p className="text-gray-200 mb-6">
                Asesoría técnica profesional para proyectos arquitectónicos, 
                cálculos estructurales y especificaciones técnicas.
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Ingeniería y cálculos</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Especificaciones técnicas</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Supervisión de obra</li>
              </ul>
              <div className="text-blue-300 font-semibold">Ingenieros certificados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2951] mb-4">
              ¿Por Qué Elegir LUTHIPLAST?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Líderes en el mercado con certificaciones profesionales y estándares internacionales de calidad
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1a2951]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1a2951]/20 transition-colors">
                <svg className="w-10 h-10 text-[#1a2951]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2951] mb-4">5+ Años de Experiencia</h3>
              <p className="text-gray-700 text-lg">
                Más de una década liderando el mercado peruano con proyectos exitosos 
                en sectores residencial, comercial e industrial.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1a2951]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1a2951]/20 transition-colors">
                <svg className="w-10 h-10 text-[#1a2951]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2951] mb-4">Equipo Certificado</h3>
              <p className="text-gray-700 text-lg">
                Profesionales altamente capacitados con certificaciones internacionales 
                y formación continua en nuevas tecnologías.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1a2951]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1a2951]/20 transition-colors">
                <svg className="w-10 h-10 text-[#1a2951]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2951] mb-4">Calidad Garantizada</h3>
              <p className="text-gray-700 text-lg">
                Materiales premium de proveedores certificados internacionalmente 
                con garantías extendidas y soporte técnico permanente.
              </p>
            </div>
          </div>
          
          {/* Certificaciones */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-[#1a2951] mb-8 text-center">Certificaciones y Estándares</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-[#1a2951]">ISO 9001</div>
                <p className="text-gray-600 text-sm">Gestión de Calidad</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-[#1a2951]">ASTM</div>
                <p className="text-gray-600 text-sm">Estándares Americanos</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-[#1a2951]">CE</div>
                <p className="text-gray-600 text-sm">Conformidad Europea</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-[#1a2951]">SENCICO</div>
                <p className="text-gray-600 text-sm">Certificación Nacional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-[#1a2951] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Contacto Profesional
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Solicite su cotización técnica especializada. Respuesta profesional garantizada en menos de 24 horas
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-8">Información Corporativa</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Líneas Directas</p>
                      <p className="text-gray-300">+51 992 753 053 </p>
                      <p className="text-gray-300 text-sm">Lun-Vie 8AM-8PM | Sáb 8AM-6PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Contacto Ejecutivo</p>
                      <p className="text-gray-300">luthiplast.eirl@gmail.com</p>
                      <p className="text-gray-300 text-sm">Respuesta en 4 horas hábiles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Oficina Principal</p>
                      <p className="text-gray-300">Jr. Salaverry 360</p>
                      <p className="text-gray-300">MMagdalena del mar, Lima 15086</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Atención Nacional</p>
                      <p className="text-gray-300">Cobertura en Lima Metropolitana</p>
                      <p className="text-gray-300">Proyectos en provincias disponibles</p>
                      <p className="text-gray-300 text-sm">Evaluación técnica sin costo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Solicitud de Cotización Técnica</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">Nombre Completo *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                        placeholder="Nombre y apellidos"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">Empresa / Organización</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                        placeholder="Razón social (opcional)"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">Teléfono *</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                        placeholder="+51 999 888 777"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">Email Corporativo *</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                        placeholder="email@empresa.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Tipo de Proyecto *</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white">
                      <option value="" className="text-gray-800">Seleccione el tipo de proyecto</option>
                      <option value="ventanas" className="text-gray-800">Ventanas de Aluminio</option>
                      <option value="mamparas" className="text-gray-800">Mamparas Corporativas</option>
                      <option value="policarbonatos" className="text-gray-800">Techos de Policarbonato</option>
                      <option value="paneles" className="text-gray-800">Paneles Arquitectónicos</option>
                      <option value="sol-sombra" className="text-gray-800">Sistemas Sol y Sombra</option>
                      <option value="integral" className="text-gray-800">Proyecto Integral</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Descripción del Proyecto *</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="Describa las especificaciones técnicas, dimensiones aproximadas, ubicación del proyecto y cualquier requerimiento especial..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Presupuesto Aproximado</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white">
                      <option value="" className="text-gray-800">Rango de inversión (opcional)</option>
                      <option value="5-15k" className="text-gray-800">S/ 5,000 - S/ 15,000</option>
                      <option value="15-30k" className="text-gray-800">S/ 15,000 - S/ 30,000</option>
                      <option value="30-50k" className="text-gray-800">S/ 30,000 - S/ 50,000</option>
                      <option value="50k+" className="text-gray-800">Más de S/ 50,000</option>
                    </select>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-4 rounded-lg font-semibold transition-all hover:transform hover:scale-105 shadow-lg">
                    Enviar Solicitud de Cotización
                  </button>
                  <p className="text-gray-400 text-sm text-center">
                    * Campos obligatorios. Sus datos están protegidos bajo nuestra política de privacidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <FooterLogo />
                </div>
                <div className="text-2xl font-bold">LUTHIPLAST</div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md text-lg">
                Líderes en soluciones arquitectónicas profesionales de aluminio y policarbonatos en Lima. 
                Transformamos espacios con calidad certificada y excelencia técnica desde 2008.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer group">
                  <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center hover:bg-blue-900 transition-colors cursor-pointer group">
                  <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer group">
                  <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer group">
                  <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-white">Servicios Profesionales</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Ventanas de Aluminio</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Mamparas Corporativas</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Techos de Policarbonato</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Paneles Arquitectónicos</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Sistemas Sol y Sombra</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Consultoría Técnica</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-white">Contacto Directo</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +51 999 888 777
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  proyectos@luthiplast.com
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <div>Av. Javier Prado Este 4786</div>
                    <div>San Isidro, Lima 15036</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Lun-Vie 8AM-7PM | Sáb 9AM-3PM
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-center md:text-left">
                © 2024 LUTHIPLAST S.A.C. Todos los derechos reservados. | 
                <span className="text-blue-400"> RUC: 20XXXXXXXXX</span>
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-white transition-colors">Certificaciones</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}