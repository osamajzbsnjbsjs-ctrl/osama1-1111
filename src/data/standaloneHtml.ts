export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Osama Soft | Next-Gen Software Solutions</title>
  <meta name="description" content="Osama Soft delivers cutting-edge software solutions: Custom Web Applications, Browser-Based 3D Games, Mobile & Android Solutions, and Premium UI/UX Design." />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  
  <style>
    /* Reset & Base Variables */
    :root {
      --bg-midnight: #060b18;
      --bg-surface: #0c1427;
      --bg-surface-elevated: #111d38;
      --crimson: #dc2626;
      --crimson-bright: #ef4444;
      --crimson-glow: rgba(239, 68, 68, 0.45);
      --gold: #f59e0b;
      --gold-light: #fbbf24;
      --gold-glow: rgba(245, 158, 11, 0.4);
      --text-main: #f1f5f9;
      --text-muted: #94a3b8;
      --border-subtle: rgba(148, 163, 184, 0.12);
      --border-glow: rgba(220, 38, 38, 0.35);
      --font-body: 'Outfit', -apple-system, sans-serif;
      --font-heading: 'Space Grotesk', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      background-color: var(--bg-midnight);
      color: var(--text-main);
      font-family: var(--font-body);
    }

    body {
      min-height: 100vh;
      overflow-x: hidden;
      background: radial-gradient(circle at 50% 0%, #101c3d 0%, #060b18 70%);
      background-attachment: fixed;
    }

    /* Cyber grid overlay */
    .bg-grid {
      background-image: 
        linear-gradient(to right, rgba(30, 41, 69, 0.25) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(30, 41, 69, 0.25) 1px, transparent 1px);
      background-size: 40px 40px;
    }

    /* Typography */
    h1, h2, h3, h4 {
      font-family: var(--font-heading);
      color: #ffffff;
      letter-spacing: -0.02em;
    }

    p {
      line-height: 1.7;
      color: var(--text-muted);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .text-gold {
      color: var(--gold-light);
    }

    .text-crimson {
      color: var(--crimson-bright);
    }

    .gradient-gold-text {
      background: linear-gradient(135deg, #fef08a 0%, #fbbf24 50%, #d97706 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .gradient-crimson-text {
      background: linear-gradient(135deg, #fca5a5 0%, #ef4444 50%, #b91c1c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* Layout Containers */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    section {
      padding: 90px 0;
      position: relative;
    }

    /* Navigation Bar */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      background: rgba(6, 11, 24, 0.88);
      border-bottom: 1px solid var(--border-subtle);
      transition: all 0.3s ease;
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 76px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Logo Styling */
    .logo-container {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
    }

    .logo-emblem {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, #0f1c3a, #16264e);
      border: 1px solid rgba(245, 158, 11, 0.4);
      box-shadow: 0 0 16px rgba(245, 158, 11, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .logo-emblem svg {
      width: 26px;
      height: 26px;
      color: var(--gold-light);
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .logo-title {
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -0.01em;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .logo-tag {
      font-size: 10px;
      font-family: var(--font-mono);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--gold);
    }

    /* Nav Links */
    .nav-menu {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 8px;
    }

    .nav-link {
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-muted);
      border-radius: 8px;
      transition: all 0.25s ease;
      cursor: pointer;
      position: relative;
    }

    .nav-link:hover {
      color: #ffffff;
    }

    .nav-link.active {
      color: #ffffff;
      background: rgba(220, 38, 38, 0.15);
      border: 1px solid rgba(220, 38, 38, 0.4);
      box-shadow: 0 0 16px var(--crimson-glow);
    }

    .nav-cta {
      background: linear-gradient(135deg, #dc2626, #991b1b);
      color: #ffffff;
      padding: 10px 22px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 8px;
      border: 1px solid rgba(245, 158, 11, 0.5);
      cursor: pointer;
      box-shadow: 0 0 18px rgba(220, 38, 38, 0.35);
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .nav-cta:hover {
      background: linear-gradient(135deg, #ef4444, #b91c1c);
      box-shadow: 0 0 25px rgba(239, 68, 68, 0.6), 0 0 15px rgba(245, 158, 11, 0.4);
      transform: translateY(-1px);
    }

    /* Mobile Hamburger */
    .mobile-toggle {
      display: none;
      background: none;
      border: 1px solid var(--border-subtle);
      color: #ffffff;
      padding: 8px;
      border-radius: 6px;
      cursor: pointer;
    }

    /* Hero Section */
    .hero {
      padding-top: 150px;
      padding-bottom: 100px;
      text-align: center;
      position: relative;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px;
      background: rgba(245, 158, 11, 0.1);
      border: 1px solid rgba(245, 158, 11, 0.3);
      border-radius: 9999px;
      font-size: 12px;
      font-family: var(--font-mono);
      color: var(--gold-light);
      margin-bottom: 24px;
      box-shadow: 0 0 14px rgba(245, 158, 11, 0.15);
    }

    .hero-headline {
      font-size: clamp(34px, 5vw, 62px);
      font-weight: 800;
      line-height: 1.15;
      max-width: 900px;
      margin: 0 auto 20px;
    }

    .hero-tagline {
      font-size: clamp(16px, 2vw, 19px);
      max-width: 720px;
      margin: 0 auto 36px;
      color: #cbd5e1;
    }

    .hero-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .btn-primary {
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
      color: #ffffff;
      font-weight: 600;
      padding: 14px 32px;
      border-radius: 10px;
      border: 1px solid rgba(245, 158, 11, 0.4);
      box-shadow: 0 0 22px rgba(220, 38, 38, 0.4);
      cursor: pointer;
      font-size: 16px;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      box-shadow: 0 0 32px rgba(239, 68, 68, 0.65), 0 0 15px rgba(245, 158, 11, 0.4);
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: rgba(17, 29, 56, 0.7);
      color: #ffffff;
      font-weight: 600;
      padding: 14px 30px;
      border-radius: 10px;
      border: 1px solid rgba(245, 158, 11, 0.3);
      cursor: pointer;
      font-size: 16px;
      transition: all 0.3s ease;
      backdrop-filter: blur(8px);
    }

    .btn-secondary:hover {
      border-color: var(--gold-light);
      background: rgba(245, 158, 11, 0.12);
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
      transform: translateY(-2px);
    }

    /* Showcase Center Emblem */
    .hero-emblem-showcase {
      margin-top: 50px;
      display: flex;
      justify-content: center;
    }

    .emblem-card {
      background: rgba(12, 20, 39, 0.85);
      border: 1px solid rgba(245, 158, 11, 0.25);
      border-radius: 20px;
      padding: 32px 48px;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 0 40px rgba(6, 11, 24, 0.8), 0 0 30px rgba(220, 38, 38, 0.15);
      backdrop-filter: blur(12px);
      position: relative;
    }

    .emblem-card::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: 20px;
      padding: 1px;
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.6), transparent, rgba(220, 38, 38, 0.6));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    /* Section Header */
    .section-header {
      text-align: center;
      max-width: 680px;
      margin: 0 auto 56px;
    }

    .section-badge {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--gold-light);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 12px;
    }

    .section-title {
      font-size: clamp(28px, 3.5vw, 42px);
      font-weight: 700;
      margin-bottom: 16px;
    }

    /* Services Grid */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .service-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 16px;
      padding: 32px 28px;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .service-card:hover {
      transform: translateY(-6px);
      border-color: rgba(220, 38, 38, 0.5);
      background: var(--bg-surface-elevated);
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45), 0 0 28px var(--crimson-glow);
    }

    .service-card.gold-accent:hover {
      border-color: rgba(245, 158, 11, 0.6);
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45), 0 0 28px var(--gold-glow);
    }

    .service-icon-wrap {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      background: rgba(220, 38, 38, 0.12);
      border: 1px solid rgba(220, 38, 38, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      color: var(--crimson-bright);
      transition: all 0.3s ease;
    }

    .service-card:hover .service-icon-wrap {
      background: rgba(220, 38, 38, 0.25);
      box-shadow: 0 0 18px var(--crimson-glow);
      transform: scale(1.05);
    }

    .service-card.gold-accent .service-icon-wrap {
      background: rgba(245, 158, 11, 0.12);
      border-color: rgba(245, 158, 11, 0.3);
      color: var(--gold-light);
    }

    .service-card.gold-accent:hover .service-icon-wrap {
      background: rgba(245, 158, 11, 0.25);
      box-shadow: 0 0 18px var(--gold-glow);
    }

    .service-title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 12px;
      color: #ffffff;
    }

    .service-desc {
      font-size: 15px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .service-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: auto;
    }

    .service-tag {
      font-size: 11px;
      font-family: var(--font-mono);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 4px 10px;
      border-radius: 6px;
      color: #cbd5e1;
    }

    /* About Us Layout */
    .about-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 56px;
      align-items: center;
    }

    .about-card-box {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 20px;
      padding: 40px;
      position: relative;
    }

    .about-card-box:hover {
      border-color: rgba(245, 158, 11, 0.4);
      box-shadow: 0 0 30px rgba(245, 158, 11, 0.15);
    }

    .pillar-list {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .pillar-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 18px;
      background: rgba(17, 29, 56, 0.4);
      border: 1px solid rgba(148, 163, 184, 0.08);
      border-radius: 10px;
    }

    .pillar-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--gold);
      box-shadow: 0 0 8px var(--gold-glow);
      margin-top: 6px;
      flex-shrink: 0;
    }

    /* Contact Section */
    .contact-wrap {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 48px;
    }

    .contact-info-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 20px;
      padding: 36px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      background: var(--bg-surface-elevated);
      border: 1px solid rgba(148, 163, 184, 0.1);
      border-radius: 12px;
      margin-top: 16px;
      transition: all 0.25s ease;
    }

    .contact-method:hover {
      border-color: rgba(220, 38, 38, 0.4);
      box-shadow: 0 0 16px var(--crimson-glow);
    }

    .contact-method svg {
      color: var(--crimson-bright);
      flex-shrink: 0;
    }

    .contact-form-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 20px;
      padding: 36px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: #cbd5e1;
      margin-bottom: 8px;
    }

    .form-input, .form-textarea, .form-select {
      width: 100%;
      background: #070d1d;
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 10px;
      padding: 12px 16px;
      color: #ffffff;
      font-family: var(--font-body);
      font-size: 15px;
      transition: all 0.25s ease;
    }

    .form-input:focus, .form-textarea:focus, .form-select:focus {
      outline: none;
      border-color: var(--gold);
      box-shadow: 0 0 14px var(--gold-glow);
      background: #091227;
    }

    .form-textarea {
      min-height: 120px;
      resize: vertical;
    }

    /* Footer */
    footer {
      border-top: 1px solid var(--border-subtle);
      padding: 48px 0 32px;
      background: #04070e;
      text-align: center;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .about-wrap, .contact-wrap {
        grid-template-columns: 1fr;
        gap: 32px;
      }
    }

    @media (max-width: 768px) {
      .nav-menu {
        display: none;
        position: absolute;
        top: 76px;
        left: 0;
        right: 0;
        background: #081022;
        border-bottom: 1px solid var(--border-subtle);
        flex-direction: column;
        padding: 20px 24px;
        gap: 12px;
        box-shadow: 0 12px 24px rgba(0,0,0,0.5);
      }

      .nav-menu.open {
        display: flex;
      }

      .mobile-toggle {
        display: block;
      }

      .nav-cta {
        display: none;
      }

      section {
        padding: 60px 0;
      }
    }
  </style>
</head>
<body class="bg-grid">

  <!-- Fixed Top Navigation -->
  <header class="navbar" id="navbar">
    <div class="nav-container">
      <!-- Top-Left Logo -->
      <div class="logo-container" onclick="navigateTo('home')">
        <div class="logo-emblem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
            <circle cx="12" cy="12" r="3" fill="currentColor"></circle>
          </svg>
        </div>
        <div class="logo-text">
          <span class="logo-title">OSAMA <span class="gradient-crimson-text">SOFT</span></span>
          <span class="logo-tag">SOFTWARE LABS</span>
        </div>
      </div>

      <!-- Navigation Links -->
      <ul class="nav-menu" id="navMenu">
        <li><a class="nav-link active" data-target="home" onclick="navigateTo('home')">Home</a></li>
        <li><a class="nav-link" data-target="about" onclick="navigateTo('about')">About Us</a></li>
        <li><a class="nav-link" data-target="services" onclick="navigateTo('services')">Services</a></li>
        <li><a class="nav-link" data-target="opinion" onclick="navigateTo('opinion')">Public Opinion</a></li>
        <li><a class="nav-link" data-target="contact" onclick="navigateTo('contact')">Contact</a></li>
      </ul>

      <!-- CTA Button -->
      <button class="nav-cta" onclick="navigateTo('contact')">
        <span>Get In Touch</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      <!-- Mobile Hamburger -->
      <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle Navigation" onclick="toggleMobileMenu()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  </header>

  <!-- Main Content Container (SPA View Switcher) -->
  <main>
    
    <!-- 1. HOME SECTION -->
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-badge">
          <span>HIGH-PERFORMANCE SOFTWARE ENGINEERING</span>
        </div>
        
        <h1 class="hero-headline">
          Engineering The Future With <br>
          <span class="gradient-crimson-text">Precision</span> & 
          <span class="gradient-gold-text">Innovation</span>
        </h1>
        
        <p class="hero-tagline">
          Osama Soft delivers high-impact digital solutions: from scalable full-stack web platforms and interactive 3D browser game engines, to robust Android mobile deployments and bespoke UI/UX designs.
        </p>

        <div class="hero-actions">
          <button class="btn-primary" onclick="navigateTo('services')">
            <span>Explore Services</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          
          <button class="btn-secondary" onclick="navigateTo('contact')">
            <span>Start a Project</span>
          </button>
        </div>

        <!-- Built-in Osama Soft Logo & Emblem Showcase -->
        <div class="hero-emblem-showcase">
          <div class="emblem-card">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
              <div class="logo-emblem" style="width: 60px; height: 60px; border-radius: 16px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 34px; height: 34px;">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                  <circle cx="12" cy="12" r="3" fill="currentColor"></circle>
                </svg>
              </div>
              <div style="text-align: left;">
                <div style="font-size: 28px; font-weight: 800; letter-spacing: -0.01em;">
                  OSAMA <span class="gradient-crimson-text">SOFT</span>
                </div>
                <div style="font-family: var(--font-mono); font-size: 12px; color: var(--gold-light); letter-spacing: 0.2em;">
                  OFFICIAL SOFTWARE COMPANY
                </div>
              </div>
            </div>
            <p style="font-size: 14px; margin-top: 8px; color: #94a3b8;">
              Modern Architecture • WebGL Games • Android Solutions • Premium UI/UX
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. ABOUT US SECTION -->
    <section id="about" style="border-top: 1px solid var(--border-subtle);">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Who We Are</span>
          <h2 class="section-title">Driven By Code, <span class="gradient-gold-text">Defined By Quality</span></h2>
          <p>Discover the core mission and engineering values behind Osama Soft's digital solutions.</p>
        </div>

        <div class="about-wrap">
          <div>
            <h3 style="font-size: 26px; margin-bottom: 16px;">Company Mission</h3>
            <p style="margin-bottom: 20px;">
              At <strong>Osama Soft</strong>, our mission is to deliver cutting-edge software solutions that bridge the gap between imagination and technical execution. We believe software should not merely function—it should captivate, perform at blazing speed, and deliver measurable business value.
            </p>
            <p style="margin-bottom: 24px;">
              Founded with an uncompromising passion for code craftsmanship, we combine deep technical rigor in modern JavaScript architectures with state-of-the-art interactive graphics, seamless Android OS engineering, and elegant human-centric interface design.
            </p>

            <div class="pillar-list">
              <div class="pillar-item">
                <div class="pillar-dot"></div>
                <div>
                  <h4 style="font-size: 16px; margin-bottom: 4px; color: #fff;">Cutting-Edge Standards</h4>
                  <p style="font-size: 14px; color: #94a3b8;">Modern ESNext, hardware-accelerated WebGL, modular component design, and scalable deployment pipelines.</p>
                </div>
              </div>
              <div class="pillar-item">
                <div class="pillar-dot" style="background: var(--crimson-bright); box-shadow: 0 0 8px var(--crimson-glow);"></div>
                <div>
                  <h4 style="font-size: 16px; margin-bottom: 4px; color: #fff;">Direct Client Collaboration</h4>
                  <p style="font-size: 14px; color: #94a3b8;">Transparent development sprints, immediate responsiveness, and solutions tailored to your unique market goals.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="about-card-box">
            <h3 style="font-size: 22px; margin-bottom: 20px; color: #fff;">Core Technical Capabilities</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div style="background: #081023; padding: 18px; border-radius: 12px; border: 1px solid rgba(148,163,184,0.1);">
                <div style="font-size: 24px; font-weight: 700; color: var(--gold-light); font-family: var(--font-heading);">100%</div>
                <div style="font-size: 13px; color: #cbd5e1; margin-top: 4px;">Responsive Delivery</div>
              </div>
              <div style="background: #081023; padding: 18px; border-radius: 12px; border: 1px solid rgba(148,163,184,0.1);">
                <div style="font-size: 24px; font-weight: 700; color: var(--crimson-bright); font-family: var(--font-heading);">60 FPS</div>
                <div style="font-size: 13px; color: #cbd5e1; margin-top: 4px;">WebGL & Game Loops</div>
              </div>
              <div style="background: #081023; padding: 18px; border-radius: 12px; border: 1px solid rgba(148,163,184,0.1);">
                <div style="font-size: 24px; font-weight: 700; color: #38bdf8; font-family: var(--font-heading);">Android</div>
                <div style="font-size: 13px; color: #cbd5e1; margin-top: 4px;">Sideloading & Systems</div>
              </div>
              <div style="background: #081023; padding: 18px; border-radius: 12px; border: 1px solid rgba(148,163,184,0.1);">
                <div style="font-size: 24px; font-weight: 700; color: #a855f7; font-family: var(--font-heading);">Pixel-Perfect</div>
                <div style="font-size: 13px; color: #cbd5e1; margin-top: 4px;">UI/UX Craftsmanship</div>
              </div>
            </div>
            
            <div style="margin-top: 24px; padding: 18px; background: rgba(220, 38, 38, 0.1); border: 1px solid rgba(220, 38, 38, 0.3); border-radius: 12px;">
              <span style="font-family: var(--font-mono); font-size: 13px; color: #fca5a5;">
                ⚡ "Building robust digital ecosystems with zero fluff and maximum speed."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. SERVICES SECTION -->
    <section id="services" style="border-top: 1px solid var(--border-subtle); background: rgba(8, 14, 30, 0.5);">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Our Expertise</span>
          <h2 class="section-title">Specialized <span class="gradient-crimson-text">Software Services</span></h2>
          <p>Engineered for stability, designed for engagement. Explore the four core domains powered by Osama Soft.</p>
        </div>

        <div class="services-grid">
          <!-- Service 1: Custom Web App Dev -->
          <div class="service-card">
            <div class="service-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 class="service-title">Custom Web Application Development</h3>
            <p class="service-desc">
              Building responsive, dynamic platforms using HTML, CSS, and modern JavaScript. We craft bespoke single-page applications, fast admin dashboards, and dynamic client-side experiences with high-level optimization.
            </p>
            <div class="service-tags">
              <span class="service-tag">HTML5 / CSS3</span>
              <span class="service-tag">Vanilla & Modern JS</span>
              <span class="service-tag">SPA Routing</span>
              <span class="service-tag">Responsive Layouts</span>
            </div>
          </div>

          <!-- Service 2: Browser-Based 3D Game Dev -->
          <div class="service-card gold-accent">
            <div class="service-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3 class="service-title">Browser-Based 3D Game Development</h3>
            <p class="service-desc">
              Creating interactive web games, physics engines, and custom game mechanics directly in the browser. Zero plugins required—powered by WebGL, HTML5 Canvas, collision physics, and 60FPS render loops.
            </p>
            <div class="service-tags">
              <span class="service-tag">WebGL / Canvas</span>
              <span class="service-tag">Physics Engines</span>
              <span class="service-tag">Custom Game Mechanics</span>
              <span class="service-tag">Gamepad / Touch Input</span>
            </div>
          </div>

          <!-- Service 3: Mobile & Android Solutions -->
          <div class="service-card">
            <div class="service-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h3 class="service-title">Mobile & Android Solutions</h3>
            <p class="service-desc">
              Comprehensive Android OS diagnostics, app deployment, package sideloading (APK/AAB), permission debugging, and OS environment troubleshooting for personal and enterprise device setups.
            </p>
            <div class="service-tags">
              <span class="service-tag">App Deployment</span>
              <span class="service-tag">Package Sideloading</span>
              <span class="service-tag">ADB & Permissions</span>
              <span class="service-tag">OS Troubleshooting</span>
            </div>
          </div>

          <!-- Service 4: Premium UI/UX Design -->
          <div class="service-card gold-accent">
            <div class="service-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <h3 class="service-title">Premium UI/UX Design</h3>
            <p class="service-desc">
              Crafting digital business cards, custom profiles, and engaging user interfaces. We produce striking visual identities, high-contrast dark and midnight themes, interactive prototypes, and typography systems.
            </p>
            <div class="service-tags">
              <span class="service-tag">Digital Business Cards</span>
              <span class="service-tag">Custom Profile Design</span>
              <span class="service-tag">Midnight Aesthetics</span>
              <span class="service-tag">Neon Glow Effects</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. PUBLIC OPINION SECTION -->
    <section id="opinion" style="border-top: 1px solid var(--border-subtle); background: rgba(5, 10, 24, 0.95);">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Verified Feedback</span>
          <h2 class="section-title">Public Opinion & <span class="gradient-gold-text">Client Endorsements</span></h2>
          <p>Authentic appraisals from founders, engineering leads, and clients who partnered with Osama Soft.</p>
        </div>

        <div class="services-grid">
          <div class="service-card crimson-accent">
            <div style="color: #f59e0b; margin-bottom: 12px; font-size: 14px;">★★★★★ (5.0)</div>
            <p style="font-style: italic; color: #cbd5e1; margin-bottom: 16px; font-size: 14px; line-height: 1.6;">
              "Osama Soft engineered our mission-critical enterprise client portal. Clean architecture, ultra-responsive across every breakpoint, and sub-400ms loading. A true full-stack powerhouse."
            </p>
            <div style="font-weight: 700; color: #fff; font-size: 14px;">Sarah Jenkins</div>
            <div style="font-size: 12px; color: #94a3b8;">VP of Engineering, Apex Cloud Labs (London, UK)</div>
          </div>

          <div class="service-card gold-accent">
            <div style="color: #f59e0b; margin-bottom: 12px; font-size: 14px;">★★★★★ (5.0)</div>
            <p style="font-style: italic; color: #cbd5e1; margin-bottom: 16px; font-size: 14px; line-height: 1.6;">
              "Commissioned Osama Soft to build a hardware-accelerated 3D browser game demo. The 60 FPS framerate on mobile touchscreens and desktop WebGL canvas blew our investors away."
            </p>
            <div style="font-weight: 700; color: #fff; font-size: 14px;">Dr. Marcus Vance</div>
            <div style="font-size: 12px; color: #94a3b8;">Creative Director, Hyperion Interactive (Berlin, Germany)</div>
          </div>

          <div class="service-card">
            <div style="color: #f59e0b; margin-bottom: 12px; font-size: 14px;">★★★★★ (5.0)</div>
            <p style="font-style: italic; color: #cbd5e1; margin-bottom: 16px; font-size: 14px; line-height: 1.6;">
              "We faced complex Android sideloading and ADB device permission hurdles across our commercial logistics tablets. Osama diagnosed and resolved the OS issues in under 24 hours."
            </p>
            <div style="font-weight: 700; color: #fff; font-size: 14px;">Khalid Al-Ghamdi</div>
            <div style="font-size: 12px; color: #94a3b8;">Head of Operations, Rawasi Logix (Riyadh, KSA)</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. CONTACT SECTION -->
    <section id="contact" style="border-top: 1px solid var(--border-subtle);">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Get Connected</span>
          <h2 class="section-title">Let's Build Your <span class="gradient-gold-text">Next Solution</span></h2>
          <p>Reach out directly to Osama Soft. We are available for projects, inquiries, and technical consultations.</p>
        </div>

        <div class="contact-wrap">
          <!-- Left: Contact Details -->
          <div class="contact-info-card">
            <div>
              <h3 style="font-size: 24px; margin-bottom: 12px; color: #fff;">Direct Contact Information</h3>
              <p style="margin-bottom: 24px;">
                Have a project in mind or need technical support? Contact us directly via email or telephone.
              </p>

              <!-- Email Item -->
              <a href="mailto:osamajzbsnjbsjs@gmail.com" class="contact-method">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase; font-family: var(--font-mono);">Email Address</div>
                  <div style="font-size: 15px; font-weight: 600; color: #ffffff; word-break: break-all;">osamajzbsnjbsjs@gmail.com</div>
                </div>
              </a>

              <!-- Phone Item -->
              <a href="tel:05364573936" class="contact-method">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase; font-family: var(--font-mono);">Direct Phone</div>
                  <div style="font-size: 16px; font-weight: 700; color: var(--gold-light);">0536 457 39 36</div>
                </div>
              </a>
            </div>

            <div style="margin-top: 32px; padding: 18px; background: #070e20; border-radius: 12px; border: 1px solid rgba(245, 158, 11, 0.2);">
              <div style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: #f59e0b; font-weight: 600;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px #22c55e;"></span>
                Ready for immediate project intake
              </div>
              <p style="font-size: 12px; color: #94a3b8; margin-top: 6px;">
                Typical response time: Within 24 hours. Full confidentiality guaranteed.
              </p>
            </div>
          </div>

          <!-- Right: Interactive Contact Form -->
          <div class="contact-form-card">
            <h3 style="font-size: 22px; margin-bottom: 20px; color: #fff;">Send Project Details</h3>
            
            <form id="contactForm" onsubmit="handleFormSubmit(event)">
              <div class="form-group">
                <label class="form-label" for="userName">Your Full Name</label>
                <input class="form-input" type="text" id="userName" name="name" placeholder="e.g. Alex Morgan" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="userEmail">Email Address</label>
                <input class="form-input" type="email" id="userEmail" name="email" placeholder="e.g. alex@example.com" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="projectService">Selected Service Domain</label>
                <select class="form-select" id="projectService" name="service">
                  <option value="Custom Web Application Development">Custom Web Application Development</option>
                  <option value="Browser-Based 3D Game Development">Browser-Based 3D Game Development</option>
                  <option value="Mobile & Android Solutions">Mobile & Android Solutions (Deployment & Sideloading)</option>
                  <option value="Premium UI/UX Design">Premium UI/UX Design (Cards & Profiles)</option>
                  <option value="Other Consultation">Other Software Consultation</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="projectDetails">Project Details & Requirements</label>
                <textarea class="form-textarea" id="projectDetails" name="details" placeholder="Describe the scope, timeline, and key features of your project..." required></textarea>
              </div>

              <button type="submit" class="btn-primary" id="submitBtn" style="width: 100%; justify-content: center;">
                <span>Send Message to Osama Soft</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>

              <div id="formSuccessMessage" style="display: none; margin-top: 16px; padding: 14px; background: rgba(34, 197, 94, 0.15); border: 1px solid rgba(34, 197, 94, 0.4); border-radius: 8px; color: #86efac; font-size: 14px; text-align: center;">
                ✓ Message dispatched! Osama Soft will review your details and contact you shortly.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 16px;">
        <div class="logo-emblem" style="width: 32px; height: 32px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="width: 18px; height: 18px;">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <span style="font-weight: 800; font-size: 18px; color: #fff;">OSAMA <span class="gradient-crimson-text">SOFT</span></span>
      </div>
      <p style="font-size: 14px; color: #64748b; margin-bottom: 12px;">
        High-Performance Software Engineering • Web • 3D Games • Android • UI/UX
      </p>
      <p style="font-size: 12px; color: #475569;">
        Email: osamajzbsnjbsjs@gmail.com | Phone: 0536 457 39 36 | &copy; 2026 Osama Soft. All rights reserved.
      </p>
    </div>
  </footer>

  <!-- Vanilla JavaScript SPA Navigation & Form Logic -->
  <script>
    /**
     * Osama Soft Single Page Application (SPA) Controller
     * Handles smooth navigation, active link styling, mobile toggle, and form validation.
     */

    // SPA Navigation Handler
    function navigateTo(sectionId) {
      // Find target element
      const targetElement = document.getElementById(sectionId);
      if (!targetElement) return;

      // Smooth scroll into view
      const navHeight = 76;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update active navigation state
      updateActiveNavLink(sectionId);

      // Close mobile menu if open
      const navMenu = document.getElementById('navMenu');
      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
      }
    }

    // Update active tab visual indicator
    function updateActiveNavLink(activeId) {
      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        if (link.getAttribute('data-target') === activeId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    // Toggle Mobile Navigation Menu
    function toggleMobileMenu() {
      const navMenu = document.getElementById('navMenu');
      if (navMenu) {
        navMenu.classList.toggle('open');
      }
    }

    // ScrollSpy to highlight nav link on scroll
    window.addEventListener('scroll', () => {
      const sections = ['home', 'about', 'services', 'opinion', 'contact'];
      const scrollY = window.pageYOffset + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY) {
          updateActiveNavLink(sections[i]);
          break;
        }
      }
    });

    // Contact Form Submission Handler
    function handleFormSubmit(event) {
      event.preventDefault();
      const submitBtn = document.getElementById('submitBtn');
      const successMsg = document.getElementById('formSuccessMessage');
      
      const name = document.getElementById('userName').value;
      const email = document.getElementById('userEmail').value;
      const service = document.getElementById('projectService').value;
      const details = document.getElementById('projectDetails').value;

      // Show temporary loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Processing submission...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        // Restore button and show success notification
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        successMsg.style.display = 'block';

        // Clear form fields
        document.getElementById('contactForm').reset();

        // Hide success message after 6 seconds
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 6000);
      }, 750);
    }
  </script>
</body>
</html>`;
