import './styles.css'

const projects = [
  {
    number: '01',
    year: '2021',
    type: 'WordPress · WooCommerce',
    title: 'AutoParts965',
    summary: 'A specialist commerce experience for carbon-fibre and performance automotive parts.',
    detail: 'A complete freelance overhaul built from a theme foundation, including the visual direction, image preparation, catalogue structure, WooCommerce flows, and responsive customization.',
    tags: ['WordPress', 'WooCommerce', 'Responsive'],
    url: 'https://autoparts965.com/',
    desktop: '/projects/autoparts965-desktop.png',
    mobile: '/projects/autoparts965-mobile.png',
    mobileFocus: '-34%',
    className: 'autoparts'
  },
  {
    number: '02',
    year: '2025',
    type: 'WordPress · Business website',
    title: 'Filo Interior',
    summary: 'A refined digital home for an interior studio creating residential, commercial, and retail spaces in Kuwait.',
    detail: 'A theme-led foundation reworked throughout as a complete freelance build, including visual direction, image preparation, project presentation, service pages, and enquiry paths.',
    tags: ['WordPress', 'Art Direction', 'Lead Generation'],
    url: 'https://filointerior.com/',
    desktop: '/projects/filo-interior-desktop.png',
    mobile: null,
    className: 'filo'
  },
  {
    number: '03',
    year: '2023',
    type: 'Shopify · E-commerce',
    title: 'Lareva',
    summary: 'A bilingual skincare storefront designed to make a broad product catalogue feel personal and easy to explore.',
    detail: 'A complete Shopify overhaul built from a theme foundation, with custom visual direction, image preparation, storefront structure, bilingual product discovery, and launch implementation.',
    tags: ['Shopify', 'E-commerce', 'Bilingual'],
    url: 'https://www.larevaonline.com/',
    desktop: '/projects/lareva-desktop.png',
    mobile: '/projects/lareva-mobile.png',
    mobileFocus: '0%',
    className: 'lareva'
  }
]

const apps = [
  {
    number: '04',
    year: '2025',
    title: 'RaNova',
    kicker: 'NASA data, made approachable',
    copy: 'A cross-platform Flutter application that turns NASA-related web data into a focused mobile experience.',
    tags: ['Flutter', 'Android & iOS', 'API Integration'],
    className: 'ranova',
    screens: [
      { src: '/projects/ranova-location.png', alt: 'RaNova location selection map' },
      { src: '/projects/ranova-analysis.png', alt: 'RaNova NASA weather analysis' },
      { src: '/projects/ranova-results.png', alt: 'RaNova weather results dashboard' },
    ],
    glyph: '✦'
  },
  {
    number: '05',
    year: '2022',
    title: 'AviMall',
    kicker: 'Web services, on the move',
    copy: 'A Flutter client built around AviMall’s existing web services, sending requests and presenting responses through a clear mobile interface.',
    tags: ['Flutter', 'Android & iOS', 'Web Services'],
    className: 'avimall',
    glyph: '↗'
  }
]

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="logo" href="#top" aria-label="Mustafa Fayed, home"><img src="/mf-logo.svg" alt="" /></a>
    <nav aria-label="Primary navigation">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="/Mustafa-Fayed-CV.pdf" target="_blank">Résumé</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="availability" href="#contact"><i></i> Available for work</a>
  </header>

  <main id="top">
    <section class="hero section-pad">
      <div class="hero-label reveal">Independent developer · Kuwait</div>
      <h1 class="reveal">I build digital products<br />that feel <em>considered.</em></h1>
      <div class="hero-bottom reveal">
        <p>Web & Flutter developer crafting complete e-commerce experiences, business websites, and connected mobile apps.</p>
        <a class="round-link" href="#work" aria-label="View selected work"><span>↓</span></a>
      </div>
      <div class="hero-orbit" aria-hidden="true"><span>WEB</span><span>FLUTTER</span><span>COMMERCE</span></div>
    </section>

    <section class="work section-pad" id="work">
      <div class="section-heading reveal">
        <span>Selected work</span>
        <span>2023—Now</span>
      </div>
      ${projects.map(project => `
        <article class="project reveal">
          <div class="project-copy">
            <span class="project-number">${project.number} / ${project.year} · ${project.type}</span>
            <h2>${project.title}</h2>
            <p class="project-summary">${project.summary}</p>
            <p class="project-detail">${project.detail}</p>
            <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
            <a class="text-link" href="${project.url}" target="_blank" rel="noreferrer">Visit live site <span>↗</span></a>
          </div>
          <a class="project-visual ${project.className} ${project.mobile ? '' : 'desktop-only'}" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Open ${project.title}">
            <div class="device-stage">
              <div class="desktop-shell">
                <div class="browser-bar"><i></i><i></i><i></i><small>${project.url.replace('https://', '').replace('www.', '')}</small></div>
                <div class="desktop-viewport">
                  <img src="${project.desktop}" alt="${project.title} desktop website" loading="lazy" />
                </div>
              </div>
              ${project.mobile ? `
                <div class="mobile-shell" style="--mobile-focus: ${project.mobileFocus}">
                  <span class="mobile-speaker"></span>
                  <div class="mobile-viewport">
                    <img src="${project.mobile}" alt="${project.title} mobile website" loading="lazy" />
                  </div>
                </div>
              ` : ''}
              <span class="preview-label">${project.mobile ? 'Responsive build · Desktop + mobile' : 'Desktop website · Selected live view'}</span>
            </div>
          </a>
        </article>
      `).join('')}
    </section>

    <section class="apps section-pad">
      <div class="section-heading reveal">
        <span>Mobile applications</span>
        <span>Built with Flutter</span>
      </div>
      <div class="app-grid">
        ${apps.map(app => `
          <article class="app-card ${app.className} reveal">
            <div class="app-info">
              <span class="project-number">${app.number} / ${app.year} · Mobile application</span>
              <h2>${app.title}</h2>
              <h3>${app.kicker}</h3>
              <p>${app.copy}</p>
              <div class="tags">${app.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
            </div>
            ${app.screens ? `
              <div class="app-screens" aria-label="${app.title} application screens">
                ${app.screens.map(screen => `
                  <div class="app-device"><img src="${screen.src}" alt="${screen.alt}" /></div>
                `).join('')}
              </div>
            ` : `
              <div class="phone" aria-label="Project screenshot placeholder">
                <div class="phone-screen"><span>${app.glyph}</span><strong>${app.title}</strong><small>Project preview coming soon</small></div>
              </div>
            `}
          </article>
        `).join('')}
      </div>
    </section>

    <section class="about section-pad" id="about">
      <div class="section-heading reveal"><span>About</span><span>Based in Kuwait</span></div>
      <div class="about-grid reveal">
        <h2>From first sketch<br />to shipped product.</h2>
        <div>
          <p>I’m Mustafa Fayed, an independent Web & Flutter Developer. I help businesses move from an idea to a complete digital experience—whether that means launching an online store, shaping a company’s web presence, or bringing an existing service to mobile.</p>
          <p>My work spans Shopify, WordPress, WooCommerce, and cross-platform Flutter development for Android and iOS.</p>
          <div class="capabilities"><span>Web design</span><span>Front-end development</span><span>E-commerce</span><span>Flutter apps</span><span>API integration</span><span>Responsive systems</span></div>
        </div>
      </div>
    </section>

    <section class="contact section-pad" id="contact">
      <span class="contact-eyebrow reveal">Have a role or project in mind?</span>
      <h2 class="reveal">Let’s make something<br /><em>worth using.</em></h2>
      <a class="contact-link reveal" href="mailto:mustafamjfayed@gmail.com">mustafamjfayed@gmail.com <span>↗</span></a>
      <div class="contact-meta reveal">
        <span>© ${new Date().getFullYear()} Mustafa Fayed</span>
        <div><a href="/Mustafa-Fayed-CV.pdf" target="_blank">Résumé</a><a href="https://github.com/mustafamjf" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mustafa-fayed-802b07297/" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div>
      </div>
    </section>
  </main>
`

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal').forEach(element => observer.observe(element))

const header = document.querySelector('.site-header')
let previousY = window.scrollY
window.addEventListener('scroll', () => {
  const currentY = window.scrollY
  header.classList.toggle('hidden', currentY > previousY && currentY > 120)
  header.classList.toggle('scrolled', currentY > 30)
  previousY = currentY
}, { passive: true })
