import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: '/services/designer' },
  title: "Designer Wall Painting & Texture Finishes in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description:
    "Designer Wall Painting & Texture Finishes in Mumbai, Thane & Bhiwandi — Stencil designs, accent walls, feature walls, sand & rustic textures. 47+ years experience. Free site visit. Call +91 9158800517.",
};

export default function TextureDesignerPage() {
  return (
    <>
      <style>{`

* { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --primary: #f97316;
  --primary-dark: #ea6c00;
  --bg: #ffffff;
  --bg2: #f8f8f8;
  --bg3: #f1f1f1;
  --text: #1a1a1a;
  --muted: #666666;
  --border: #e0e0e0;
  --white: #ffffff;
  --gold: #f59e0b;
  --shadow: 0 2px 12px rgba(0,0,0,0.08);
  --radius: 12px;
}

body { font-family: 'Segoe UI', Arial, sans-serif; color: var(--text); background: var(--bg); line-height: 1.6; }

/* ─── NAVBAR ─── */
nav {
  background: #fff;
  border-bottom: 2px solid var(--primary);
  padding: 12px 24px;
  display: flex; align-items: center; justify-content: space-between;
  position: sticky; top: 0; z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
.logo span { font-size: 1.1rem; font-weight: 700; color: var(--primary); }
.nav-links { display: flex; gap: 24px; list-style: none; }
.nav-links a { text-decoration: none; color: #333; font-weight: 500; font-size: 0.95rem; }
.nav-links a:hover { color: var(--primary); }
.nav-cta {
  background: var(--primary); color: #fff;
  padding: 9px 20px; border-radius: 8px;
  text-decoration: none; font-weight: 700; font-size: 0.9rem;
}

/* ─── HERO ─── */
.hero {
  background: linear-gradient(135deg, #1a1207 0%, #2d1f06 60%, #3d2a08 100%);
  color: #fff; padding: 60px 24px 50px; text-align: center;
}
.hero-badge {
  display: inline-block;
  background: var(--primary); color: #fff;
  font-size: 0.78rem; font-weight: 700; letter-spacing: 2px;
  padding: 5px 14px; border-radius: 20px; margin-bottom: 18px;
}
.hero h1 { font-size: 2.3rem; font-weight: 800; line-height: 1.25; margin-bottom: 8px; }
.hero h1 span { color: var(--primary); }
.hero-sub {
  font-size: 1.05rem; color: #d4c4a0;
  margin: 14px auto 28px; max-width: 640px;
}
.hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 36px; }
.btn-primary { background: #25d366; color: #fff; padding: 13px 26px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1rem; }
.btn-secondary { background: transparent; border: 2px solid var(--primary); color: var(--primary); padding: 13px 26px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1rem; }
.hero-tags { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 36px; font-size: 0.85rem; color: #c8b888; }
.hero-tags span::before { content: "✓ "; color: #25d366; font-weight: 700; }
.hero-stats { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
.stat { text-align: center; }
.stat-num { font-size: 2rem; font-weight: 800; color: var(--primary); }
.stat-label { font-size: 0.8rem; color: #c8b888; margin-top: 2px; }

/* ─── SECTIONS ─── */
section { padding: 60px 24px; }
.section-inner { max-width: 1100px; margin: 0 auto; }
.eyebrow { text-align: center; font-size: 0.78rem; font-weight: 700; letter-spacing: 2px; color: var(--primary); text-transform: uppercase; margin-bottom: 10px; }
h2 { text-align: center; font-size: 1.9rem; font-weight: 800; color: #1a1a1a; margin-bottom: 10px; }
.section-desc { text-align: center; color: var(--muted); max-width: 620px; margin: 0 auto 40px; font-size: 1rem; }

/* ─── GALLERY ─── */
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
.g-card { border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); background:#fff; }
.g-img-placeholder {
  width: 100%; height: 200px; display: flex; align-items: center; justify-content: center;
  background: var(--bg3); color: var(--muted); font-size: 0.85rem; font-weight: 600;
  border-bottom: 1px solid var(--border); text-align:center; padding: 12px;
}
.g-cap { padding: 12px 14px; background: #fff; }
.g-cap strong { display: block; font-size: 0.95rem; font-weight: 700; color: #1a1a1a; }
.g-cap span { font-size: 0.82rem; color: var(--muted); }

/* ─── SECTION DIVIDER ─── */
.divider { border: none; border-top: 3px solid var(--primary); margin: 0 auto; max-width: 200px; }

/* ─── SERVICES GRID ─── */
.wrap { max-width: 1100px; margin: 0 auto; padding: 60px 24px; }
.wrap-alt { background: var(--bg2); }
.svc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 40px; }
.svc-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); transition: transform 0.2s, box-shadow 0.2s; }
.svc-card:hover { transform: translateY(-3px); box-shadow: 0 6px 24px rgba(249,115,22,0.15); }
.svc-img-placeholder {
  width: 100%; height: 160px; display: flex; align-items: center; justify-content: center;
  background: var(--bg3); color: var(--muted); font-size: 0.82rem; font-weight: 600; text-align: center; padding: 10px;
}
.svc-card-body { padding: 16px; }
.svc-card-body h3 { font-size: 1rem; font-weight: 700; color: #1a1a1a; margin-bottom: 6px; }
.svc-card-body p { font-size: 0.88rem; color: var(--muted); }

/* ─── TEXTURE TYPES ─── */
.texture-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 22px; }
.texture-card {
  border: 1px solid var(--border); border-radius: var(--radius);
  overflow: hidden; transition: box-shadow 0.2s, transform 0.2s;
}
.texture-card:hover { box-shadow: 0 6px 24px rgba(249,115,22,0.15); transform: translateY(-3px); }
.texture-icon-placeholder {
  background: var(--bg3); color: var(--muted);
  font-size: 0.82rem; font-weight: 600;
  text-align: center; padding: 50px 12px; border-bottom: 1px solid var(--border);
}
.texture-body { padding: 16px; }
.texture-body h3 { font-size: 1rem; font-weight: 700; color: #1a1a1a; margin-bottom: 6px; }
.texture-body p { font-size: 0.88rem; color: var(--muted); line-height: 1.5; }
.texture-tag {
  display: inline-block; background: rgba(249,115,22,0.1);
  color: var(--primary); font-size: 0.72rem; font-weight: 700;
  padding: 3px 10px; border-radius: 20px; margin-top: 8px;
}

/* ─── WHY CHOOSE US ─── */
.why-section { background: var(--bg2); }
.why-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.why-card { background: #fff; border-radius: var(--radius); padding: 24px; border-left: 4px solid var(--primary); box-shadow: var(--shadow); }
.why-icon { font-size: 1.8rem; margin-bottom: 10px; }
.why-card h3 { font-size: 1rem; font-weight: 700; color: #1a1a1a; margin-bottom: 6px; }
.why-card p { font-size: 0.88rem; color: var(--muted); line-height: 1.5; }

/* ─── PROCESS ─── */
.process-steps { display: flex; gap: 0; flex-wrap: wrap; justify-content: center; }
.step { text-align: center; flex: 1; min-width: 140px; max-width: 180px; padding: 0 12px; }
.step-num { width: 52px; height: 52px; background: var(--primary); color: #fff; font-size: 1.3rem; font-weight: 800; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; }
.step h3 { font-size: 0.92rem; font-weight: 700; color: #1a1a1a; margin-bottom: 6px; }
.step p { font-size: 0.82rem; color: var(--muted); line-height: 1.4; }

/* ─── COMPARISON TABLE ─── */
.compare-table { width: 100%; border-collapse: collapse; margin-top: 30px; }
.compare-table th { background: var(--primary); color: #fff; padding: 14px 16px; text-align: left; font-size: 0.95rem; }
.compare-table td { padding: 12px 16px; border-bottom: 1px solid var(--border); font-size: 0.9rem; }
.compare-table tr:nth-child(even) td { background: var(--bg2); }
.compare-table td:first-child { font-weight: 600; color: #1a1a1a; }

/* ─── PAINT BRANDS ─── */
.brands-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 18px; margin-top: 30px; }
.brand-chip {
  background: #fff; border: 1px solid var(--border); border-radius: var(--radius);
  padding: 20px 32px; font-weight: 800; font-size: 1.05rem; color: #1a1a1a;
  box-shadow: var(--shadow); min-width: 140px; text-align: center;
}

/* ─── FAQ ─── */
.faq-list { max-width: 760px; margin: 0 auto; }
.faq-item { border-bottom: 1px solid var(--border); padding: 18px 0; }
.faq-q { font-weight: 700; color: #1a1a1a; font-size: 0.97rem; margin-bottom: 8px; }
.faq-a { color: var(--muted); font-size: 0.9rem; line-height: 1.6; }

/* ─── AREAS ─── */
.areas-tags { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 24px; }
.area-tag { background: #2d1f06; color: #fff; padding: 8px 18px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; }
.areas-para { text-align: center; color: var(--muted); max-width: 700px; margin: 0 auto; font-size: 1rem; line-height: 1.7; }

/* ─── CTA ─── */
.cta-section {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff; text-align: center; padding: 60px 24px;
}
.cta-section h2 { color: #fff; font-size: 2rem; margin-bottom: 10px; }
.cta-section p { color: rgba(255,255,255,0.85); margin-bottom: 28px; font-size: 1.05rem; }
.cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px; }
.btn-white { background: #fff; color: var(--primary); padding: 13px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1rem; }
.btn-outline-white { background: transparent; border: 2px solid #fff; color: #fff; padding: 13px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1rem; }
.form-box { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25); border-radius: 14px; padding: 28px; max-width: 520px; margin: 0 auto; text-align: left; }
.form-box h3 { color: #fff; font-size: 1.1rem; margin-bottom: 18px; text-align: center; }
.form-row { margin-bottom: 14px; }
.form-row input, .form-row select, .form-row textarea { width: 100%; padding: 11px 14px; border-radius: 8px; border: none; font-size: 0.95rem; background: rgba(255,255,255,0.92); color: #1a1a1a; }
.form-row textarea { height: 80px; resize: vertical; }
.form-submit { width: 100%; background: #25d366; color: #fff; border: none; padding: 13px; border-radius: 8px; font-size: 1rem; font-weight: 700; cursor: pointer; margin-top: 6px; }

/* ─── FOOTER ─── */
footer { background: #1a0e02; color: #c8b888; padding: 40px 24px 20px; }
.footer-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 32px; margin-bottom: 28px; }
.footer-col h4 { color: var(--primary); font-size: 1rem; margin-bottom: 12px; }
.footer-col p, .footer-col a { font-size: 0.88rem; color: #c8b888; text-decoration: none; display: block; margin-bottom: 6px; line-height: 1.5; }
.footer-col a:hover { color: var(--primary); }
.footer-bottom { text-align: center; border-top: 1px solid #2d1f06; padding-top: 16px; font-size: 0.82rem; color: #8a7458; }

/* ─── RESPONSIVE ─── */
@media (max-width: 680px) {
  .hero h1 { font-size: 1.5rem; }
  h2 { font-size: 1.45rem; }
  .hero-stats { gap: 24px; }
  .nav-links { display: none; }
  .process-steps { gap: 20px; }
}

      `}</style>

{/* NAVBAR */}
<nav>
  <a href="https://bhairavpaintingservice.vercel.app/" className="logo">
    <img src="https://bhairavpaintingservice.vercel.app/images/logo-icon.png" alt="Bhairav Painting" height="40" />
    <span>BHAIRAV PAINTING SERVICES</span>
  </a>
  <ul className="nav-links">
    <li><a href="https://bhairavpaintingservice.vercel.app/">Home</a></li>
    <li><a href="https://bhairavpaintingservice.vercel.app/services">Services</a></li>
    <li><a href="https://bhairavpaintingservice.vercel.app/about">About Us</a></li>
    <li><a href="https://bhairavpaintingservice.vercel.app/contact">Contact</a></li>
  </ul>
  <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Designer%20Wall%20or%20Texture%20Painting" className="nav-cta">WhatsApp Us</a>
</nav>

{/* HERO */}
<section className="hero">
  <div className="hero-badge">✦ DESIGNER WALL & TEXTURE FINISHES</div>
  <h1>Designer Wall Painting & Texture Finishes<br/><span>in Mumbai, Thane, Bhiwandi & Kalyan</span></h1>
  <p className="hero-sub">Stencil designs, accent walls, feature walls & premium texture finishes — Sand, Sponge, Rustic & Metallic. 47+ years experience. Free site visit!</p>
  <div className="hero-btns">
    <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Designer%20Wall%20or%20Texture%20Painting%20quote" className="btn-primary">Get Free Quote on WhatsApp</a>
    <a href="tel:+919158800517" className="btn-secondary">📞 Call: 9158800517</a>
  </div>
  <div className="hero-tags">
    <span>Free Site Visit</span>
    <span>Designer & Texture Finishes</span>
    <span>Genuine Materials</span>
    <span>Trained Team</span>
    <span>Owner Supervised</span>
  </div>
  <div className="hero-stats">
    <div className="stat"><div className="stat-num">47+</div><div className="stat-label">Years Experience</div></div>
    <div className="stat"><div className="stat-num">FREE</div><div className="stat-label">Site Visit</div></div>
    <div className="stat"><div className="stat-num">500+</div><div className="stat-label">Projects Done</div></div>
    <div className="stat"><div className="stat-num">9+</div><div className="stat-label">Finish Options</div></div>
  </div>
</section>

{/* WHAT IS SECTION */}
<section>
  <div className="section-inner">
    <p className="eyebrow">Quick Overview</p>
    <h2>What Are Designer Wall & Texture Finishes?</h2>
    <p className="section-desc" style={{marginBottom: '0'}}>
      Designer wall painting uses stencils, accent colours, feature panels & metallic finishes to create a bold statement wall — usually on one wall of a room.
      Texture painting applies a textured material such as sand, sponge, rustic or metallic finish across an entire wall to add depth, grain & a premium tactile look.
      Both can be combined for a fully custom result, and we provide both services across Mumbai, Thane, Bhiwandi, Kalyan & Navi Mumbai with a free site visit.
    </p>
  </div>
</section>

{/* RECENT PROJECTS GALLERY */}
<div className="wrap">
  <p className="eyebrow">Our Work</p>
  <h2>Recent Projects</h2>
  <p className="section-desc" style={{textAlign: 'center', color: '#666', maxWidth: '620px', margin: '0 auto 40px'}}>Real projects done by us across Mumbai, Thane, Bhiwandi & nearby areas.</p>
  <div className="gallery-grid">
    <div className="g-card">
      <img src="/images/designer/stencil-wall-design-living-room-bhiwandi.jpg" alt="Stencil Wall Design - Living Room Bhiwandi" style={{width: '100%', height: '240px', objectFit: 'cover', display: 'block'}} />
      <div className="g-cap"><strong>Stencil Wall Design</strong><span>Location: Bhiwandi · Area: Living Room · Finish: Gold Stencil Art</span></div>
    </div>
    <div className="g-card">
      <img src="/images/designer/bedroom-accent-wall-thane.jpg" alt="Bedroom Accent Wall - Thane" style={{width: '100%', height: '240px', objectFit: 'cover', display: 'block'}} />
      <div className="g-cap"><strong>Bedroom Accent Wall</strong><span>Location: Thane · Area: Bedroom · Finish: Sage Green Accent Curve</span></div>
    </div>
    <div className="g-card">
      <img src="/images/designer/tv-unit-feature-wall-kalyan.jpg" alt="TV Unit Feature Wall - Kalyan" style={{width: '100%', height: '240px', objectFit: 'cover', display: 'block'}} />
      <div className="g-cap"><strong>TV Unit Feature Wall</strong><span>Location: Kalyan · Area: Living Room · Finish: Marble-effect Backlit Panel</span></div>
    </div>
    <div className="g-card">
      <img src="/images/designer/hall-texture-finish-mumbai.jpg" alt="Hall Texture Finish - Mumbai" style={{width: '100%', height: '240px', objectFit: 'cover', display: 'block'}} />
      <div className="g-cap"><strong>Hall Texture Finish</strong><span>Location: Mumbai · Area: Hall / Passage · Finish: Carved Wave Texture</span></div>
    </div>
    <div className="g-card">
      <img src="/images/designer/shop-interior-wall-bhiwandi.jpg" alt="Shop Interior Wall - Bhiwandi" style={{width: '100%', height: '240px', objectFit: 'cover', display: 'block'}} />
      <div className="g-cap"><strong>Shop Interior Wall</strong><span>Location: Bhiwandi · Area: Retail Shop · Finish: Designer Wall Panels</span></div>
    </div>
    <div className="g-card">
      <img src="/images/designer/office-feature-wall-thane.jpg" alt="Office Feature Wall - Thane" style={{width: '100%', height: '240px', objectFit: 'cover', display: 'block'}} />
      <div className="g-cap"><strong>Office Feature Wall</strong><span>Location: Thane · Area: Office / Study · Finish: Geometric Wood Panel Design</span></div>
    </div>
  </div>
</div>

<hr className="divider" />

{/* DESIGNER TYPES — MOVED FIRST */}
<div className="wrap">
  <p className="eyebrow">Category 1</p>
  <h2>🎨 Designer Wall Solutions</h2>
  <p className="section-desc" style={{textAlign: 'center', color: '#666', maxWidth: '620px', margin: '0 auto 40px'}}>Our most-loved category — bold accent walls, stencil designs & feature wall finishes for any room.</p>
  <div className="svc-grid">
    <div className="svc-card">
      <img src="/images/designer/stencil-wall-design.jpg" alt="Stencil Wall Design" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
      <div className="svc-card-body">
        <h3>Stencil Wall Design</h3>
        <p>Geometric patterns, floral designs, Arabic motifs & custom stencil prints. Adds character to any wall.</p>
        <span className="texture-tag">📍 Bhiwandi</span>
      </div>
    </div>
    <div className="svc-card">
      <img src="/images/designer/accent-wall.jpg" alt="Accent Wall" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
      <div className="svc-card-body">
        <h3>Accent Wall</h3>
        <p>One bold wall with a different colour or finish. Transforms any room without full repaint.</p>
        <span className="texture-tag">📍 Thane</span>
      </div>
    </div>
    <div className="svc-card">
      <img src="/images/designer/feature-wall.jpg" alt="Feature Wall" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
      <div className="svc-card-body">
        <h3>Feature Wall</h3>
        <p>Statement wall combining colour, pattern & texture — perfect for living rooms & TV units.</p>
        <span className="texture-tag">📍 Kalyan</span>
      </div>
    </div>
    <div className="svc-card">
      <img src="/images/designer/metallic-designer-wall.jpg" alt="Metallic Designer Wall" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
      <div className="svc-card-body">
        <h3>Metallic Designer Wall</h3>
        <p>Shiny metallic designer finish — gold, silver, copper tones for a luxurious accent wall.</p>
        <span className="texture-tag">📍 Mumbai</span>
      </div>
    </div>
    <div className="svc-card">
      <img src="/images/designer/combination-finish.jpg" alt="Combination Finish" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
      <div className="svc-card-body">
        <h3>Combination Finish</h3>
        <p>Mix of texture + stencil or designer print + solid colour. Custom-designed to your taste.</p>
        <span className="texture-tag">📍 Navi Mumbai</span>
      </div>
    </div>
  </div>
</div>

<hr className="divider" />

{/* TEXTURE TYPES — MOVED SECOND */}
<div className="wrap-alt"><div className="wrap">
  <p className="eyebrow">Category 2</p>
  <h2>🧱 Texture Painting Finishes</h2>
  <p className="section-desc" style={{textAlign: 'center', color: '#666', maxWidth: '620px', margin: '0 auto 40px'}}>Whole-room texture finishes that add depth & character — suitable for bedrooms, living rooms & halls.</p>
  <div className="texture-grid">
    <div className="texture-card">
      <img src="/images/designer/sand-texture.jpg" alt="Sand Texture" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
      <div className="texture-body">
        <h3>Sand Texture</h3>
        <p>Grainy sand-effect finish that adds warmth & depth to walls. Popular for living rooms & bedrooms. Available in all colours.</p>
        <span className="texture-tag">Most Popular</span>
      </div>
    </div>
    <div className="texture-card">
      <img src="/images/designer/sponge-texture.jpg" alt="Sponge Texture" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
      <div className="texture-body">
        <h3>Sponge Texture</h3>
        <p>Soft sponge-dabbed pattern giving walls a rich, layered look. Great for bedrooms & feature walls. Budget-friendly.</p>
        <span className="texture-tag">Budget-Friendly</span>
      </div>
    </div>
    <div className="texture-card">
      <img src="/images/designer/rustic-stone-texture.jpg" alt="Rustic Stone Texture" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
      <div className="texture-body">
        <h3>Rustic / Stone Texture</h3>
        <p>Earthy stone or brick-effect finish for a raw, natural look. Perfect for accent walls, TV walls & feature panels.</p>
        <span className="texture-tag">Trending</span>
      </div>
    </div>
    <div className="texture-card">
      <img src="/images/designer/metallic-texture.jpg" alt="Metallic Texture" style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
      <div className="texture-body">
        <h3>Metallic Texture</h3>
        <p>Shiny metallic finish — gold, silver, copper tones. Adds glamour & elegance to living rooms, bedrooms & commercial spaces.</p>
        <span className="texture-tag">Luxury</span>
      </div>
    </div>
  </div>
</div></div>

{/* COMPARISON TABLE */}
<div className="wrap">
  <p className="eyebrow">Compare Options</p>
  <h2>Designer Wall vs Texture Painting — Which is Right for You?</h2>
  <p className="section-desc" style={{textAlign: 'center', color: '#666', maxWidth: '620px', margin: '0 auto 20px'}}>Simple comparison to help you decide what suits your space & budget.</p>
  <div style={{overflowX: 'auto'}}>
    <table className="compare-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Designer Wall Painting</th>
          <th>Texture Painting</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Style</td><td>Decorative Design</td><td>Surface Finish</td></tr>
        <tr><td>Best For</td><td>One feature / accent wall</td><td>Whole room / all walls</td></tr>
        <tr><td>Look</td><td>Stencil Patterns, Feature Wall, Modern Look</td><td>Sand Texture, Rustic Texture, Premium Texture</td></tr>
        <tr><td>Budget Range</td><td>Mid to Premium</td><td>Budget to Premium</td></tr>
        <tr><td>Time to Complete</td><td>1–2 days per wall</td><td>1–3 days per room</td></tr>
        <tr><td>Custom Colours</td><td>✅ Any colour / design</td><td>✅ Any colour</td></tr>
        <tr><td>Popular Rooms</td><td>TV Wall, Bedroom Accent</td><td>Bedrooms, Living Rooms</td></tr>
      </tbody>
    </table>
  </div>
</div>

{/* WHY CHOOSE US */}
<div className="why-section" style={{padding: '60px 24px'}}>
  <div style={{maxWidth: '1100px', margin: '0 auto'}}>
    <p className="eyebrow">Why Choose Us</p>
    <h2>Why Choose Bhairav for Designer & Texture Work?</h2>
    <p className="section-desc" style={{textAlign: 'center', color: '#666', maxWidth: '620px', margin: '0 auto 40px'}}>47+ years of trusted painting experience — Mumbai, Thane, Bhiwandi, Kalyan & beyond.</p>
    <div className="why-grid">
      <div className="why-card">
        <div className="why-icon">🏆</div>
        <h3>47+ Years Experience</h3>
        <p>Trusted designer & texture painting contractor. Done hundreds of residential & commercial projects.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">👁️</div>
        <h3>Owner Supervised</h3>
        <p>Every designer & texture project personally supervised — ensuring quality, consistency & clean finish.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">🎨</div>
        <h3>Custom Colour Matching</h3>
        <p>We match designer finishes & textures to your existing interior colours. Bring your reference or share a photo.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">✅</div>
        <h3>Genuine Materials Used</h3>
        <p>Only branded paints & texture materials used — no compromise on quality. Your walls stay beautiful longer.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">💰</div>
        <h3>Budget to Premium Options</h3>
        <p>Sponge texture to metallic designer finishes — we have options for every budget & room requirement.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">🆓</div>
        <h3>Free Site Visit</h3>
        <p>Free site visit & written estimate before any work. We show you colour samples & finish references.</p>
      </div>
    </div>
  </div>
</div>

{/* PAINT BRANDS */}
<section>
  <div className="section-inner">
    <p className="eyebrow">Materials We Use</p>
    <h2>Trusted Paint Brands</h2>
    <p className="section-desc">We use genuine, branded paints & texture products for all designer & texture work.</p>
    <div className="brands-row">
      <div className="brand-chip">Asian Paints<br/><span style={{fontSize: '0.78rem', fontWeight: '500', color: 'var(--muted)'}}>Royale Play</span></div>
      <div className="brand-chip">Nerolac<br/><span style={{fontSize: '0.78rem', fontWeight: '500', color: 'var(--muted)'}}>Impressions</span></div>
      <div className="brand-chip">Berger<br/><span style={{fontSize: '0.78rem', fontWeight: '500', color: 'var(--muted)'}}>Silk Illusions</span></div>
    </div>
  </div>
</section>

{/* BEST PLACES TO USE */}
<section style={{background: 'var(--bg2)'}}>
  <div className="section-inner">
    <p className="eyebrow">Best Use Cases</p>
    <h2>Best Places to Use Designer Wall & Texture Finishes</h2>
    <p className="section-desc">Not sure where to start? These are the most popular spots for designer wall & texture finishes.</p>
    <div className="why-grid">
      <div className="why-card">
        <div className="why-icon">✅</div>
        <h3>Living Room</h3>
        <p>A bold statement wall that becomes the focal point of the entire room.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">✅</div>
        <h3>Bedroom</h3>
        <p>Accent or texture finish behind the bed creates a cozy, hotel-like feel.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">✅</div>
        <h3>TV Unit Wall</h3>
        <p>Most popular choice — a feature wall behind the TV instantly upgrades your space.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">✅</div>
        <h3>Office Reception</h3>
        <p>Designer wall finishes create a premium first impression for visitors & clients.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">✅</div>
        <h3>Shops</h3>
        <p>Stand out from neighbouring shops with a unique designer wall finish.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">✅</div>
        <h3>Showrooms</h3>
        <p>Premium texture & designer finishes elevate product displays & brand image.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">✅</div>
        <h3>Cafes</h3>
        <p>Rustic texture & stencil walls add character that customers love to photograph.</p>
      </div>
      <div className="why-card">
        <div className="why-icon">✅</div>
        <h3>Dining Area</h3>
        <p>Stencil or texture finish adds warmth & character to your dining space.</p>
      </div>
    </div>
  </div>
</section>

{/* PROCESS */}
<section style={{background: 'var(--bg2)'}}>
  <div className="section-inner">
    <p className="eyebrow">Our Process</p>
    <h2>How We Do Designer & Texture Painting</h2>
    <p className="section-desc">Simple, transparent process — from your first call to beautiful walls.</p>
    <div className="process-steps">
      <div className="step">
        <div className="step-num">1</div>
        <h3>Free Site Visit</h3>
        <p>We visit, assess your walls & show you finish samples.</p>
      </div>
      <div className="step">
        <div className="step-num">2</div>
        <h3>Design Selection</h3>
        <p>Pick designer finish or texture type & colour from options.</p>
      </div>
      <div className="step">
        <div className="step-num">3</div>
        <h3>Surface Prep</h3>
        <p>Putty, sanding & base coat applied for smooth results.</p>
      </div>
      <div className="step">
        <div className="step-num">4</div>
        <h3>Finish Applied</h3>
        <p>Skilled painters apply designer or texture finish layer by layer.</p>
      </div>
      <div className="step">
        <div className="step-num">5</div>
        <h3>Finish & Touch-up</h3>
        <p>Final inspection, touch-ups & site cleanup done.</p>
      </div>
    </div>
  </div>
</section>

{/* FAQ - 12 QUESTIONS */}
<section>
  <div className="section-inner">
    <p className="eyebrow">Common Questions</p>
    <h2>Frequently Asked Questions</h2>
    <p className="section-desc">Questions people ask before designer wall & texture painting.</p>
    <div className="faq-list">
      <div className="faq-item">
        <div className="faq-q">Q: Designer wall painting aur texture painting mein kya farak hai?</div>
        <div className="faq-a">A: Designer wall painting usually ek accent/feature wall ke liye hota hai — bold & artistic. Texture painting poore room ya walls ke liye uniform pattern deti hai jo depth & dimension add karti hai.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Sabse popular texture finish kaunsa hai?</div>
        <div className="faq-a">A: Sand texture sabse zyada demand mein rehta hai — warmth & depth deta hai aur har colour mein available hai. Sponge texture budget-friendly option ke liye popular hai.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Kya texture paint washable hoti hai?</div>
        <div className="faq-a">A: Haan, most texture finishes gentle cleaning ke liye suitable hain. Branded products (Asian Paints, Nerolac, Berger, Dulux) ka use karne se durability aur badh jaati hai.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Texture painting kitne saal tak chalti hai?</div>
        <div className="faq-a">A: Quality material & proper application ke saath texture painting 7 to 10 saal tak achhi rehti hai, normal wear & tear ke saath.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Kya texture sirf ek wall pe bhi karwa sakte hain?</div>
        <div className="faq-a">A: Bilkul. Ek single accent wall pe texture ya designer finish karwana bahut common hai — poore room ka look badalne ke liye yeh sabse cost-effective tarika hai.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Designer wall painting ke liye kaunse rooms best hain?</div>
        <div className="faq-a">A: Living room TV unit, bedroom headboard wall, entrance/lobby aur dining area — yeh sabse popular spots hain designer accent walls ke liye.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Kya colour consultation milti hai?</div>
        <div className="faq-a">A: Haan, free site visit ke time hum colour swatches & finish samples dikhate hain aur aapke furniture/interior ke hisaab se suggestion dete hain.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Designer wall ya texture painting mein kitne din lagte hain?</div>
        <div className="faq-a">A: Designer accent wall usually 1-2 din mein ho jaata hai. Poore room ki texture painting 1-3 din leti hai, depending on area & drying time.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Kya custom colour match ho sakta hai?</div>
        <div className="faq-a">A: Haan, hum aapke existing interior ya reference photo ke hisaab se colour match karte hain — designer finish aur texture dono ke liye.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Stencil design mein konsi patterns available hain?</div>
        <div className="faq-a">A: Geometric, floral, aur Arabic-style motifs sabse popular hain. Hum aapko site visit pe design options dikhate hain — custom design discuss kar sakte hain.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Furniture ke saath ya pehle painting karna chahiye?</div>
        <div className="faq-a">A: Ideally furniture hatake ya cover karke karna best hai. Hum drop sheets & protection use karte hain — site visit pe discuss karenge.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Ek room ka budget kitna hoga?</div>
        <div className="faq-a">A: Finish type, room size & design complexity pe depend karta hai. Site visit free hai — wahi pe exact estimate de denge.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Purani walls pe texture ho sakta hai?</div>
        <div className="faq-a">A: Haan, purani walls pe bhi texture ho sakta hai. Pehle surface ko prepare kiya jaata hai — cracks fill, sanding & base coat — uske baad texture apply hota hai.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Office ke liye designer wall suitable hai?</div>
        <div className="faq-a">A: Bilkul. Office reception, cabins & meeting rooms ke liye designer wall finishes premium look dete hain aur clients pe achha impression banate hain.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">Q: Living room ke liye kaunsi texture best hai?</div>
        <div className="faq-a">A: Living room ke liye Sand texture sabse popular hai — warmth aur depth deta hai. Rustic texture bhi accent wall ke liye trending option hai.</div>
      </div>
    </div>
  </div>
</section>

{/* LOCAL SEO */}
<section>
  <div className="section-inner">
    <p className="eyebrow">Local Experts</p>
    <h2>Designer Wall & Texture Painting in Mumbai, Thane, Bhiwandi, Kalyan & Navi Mumbai</h2>
    <p className="section-desc" style={{marginBottom: '0'}}>
      Bhairav Painting Service has been providing designer wall painting and texture finishes across Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai for over 47 years.
      From stencil designs and accent walls to sand, sponge, rustic and metallic textures, our team handles homes, flats, offices, shops and showrooms with genuine
      branded materials and owner-supervised quality. Whether you need a single feature wall or a complete texture makeover, we offer a free site visit and
      transparent estimate before any work begins.
    </p>
  </div>
</section>

{/* AREAS */}
<section style={{background: 'var(--bg2)'}}>
  <div className="section-inner">
    <p className="eyebrow">Service Areas</p>
    <h2>Areas We Cover</h2>
    <p className="areas-para">We provide designer wall painting and texture finishes for homes, flats, villas, offices and shops across Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai.</p>
    <div className="areas-tags">
      <span className="area-tag">Bhiwandi</span>
      <span className="area-tag">Thane</span>
      <span className="area-tag">Kalyan</span>
      <span className="area-tag">Mumbai</span>
      <span className="area-tag">Navi Mumbai</span>
      <span className="area-tag">Dombivli</span>
      <span className="area-tag">Kasheli</span>
      <span className="area-tag">Kalher</span>
      <span className="area-tag">Vasai</span>
      <span className="area-tag">Virar</span>
      <span className="area-tag">Andheri</span>
    </div>
  </div>
</section>

{/* CTA + FORM */}
<section className="cta-section">
  <div className="section-inner">
    <h2>Ready to Transform Your Walls?</h2>
    <p>Free site visit & finish samples shown at your home. Mumbai, Thane, Bhiwandi & nearby areas covered.</p>
    <div className="cta-btns">
      <a href="tel:+919158800517" className="btn-white">📞 Call Now</a>
      <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Designer%20Wall%20or%20Texture%20Painting%20quote" className="btn-outline-white">💬 WhatsApp Now</a>
    </div>
    <div className="form-box">
      <h3>📋 Free Quote — Fill Below</h3>
      <div className="form-row"><input type="text" placeholder="Your Name *" /></div>
      <div className="form-row"><input type="tel" placeholder="Phone Number *" /></div>
      <div className="form-row">
        <select>
          <option value="">Select Service Type</option>
          <option>Stencil Wall Design</option>
          <option>Accent Wall</option>
          <option>Feature Wall</option>
          <option>Metallic Designer Wall</option>
          <option>Combination Finish</option>
          <option>Sand Texture</option>
          <option>Sponge Texture</option>
          <option>Rustic / Stone Texture</option>
          <option>Metallic Texture</option>
          <option>Not Sure — Need Guidance</option>
        </select>
      </div>
      <div className="form-row"><input type="text" placeholder="Your Area (e.g. Bhiwandi, Thane)" /></div>
      <div className="form-row"><textarea placeholder="Message (Optional)"></textarea></div>
      <button className="form-submit">🚀 Send Enquiry on WhatsApp</button>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer>
  <div className="footer-inner">
    <div className="footer-col">
      <h4>BHAIRAV PAINTING SERVICES</h4>
      <p>Professional painting contractor — designer wall, texture & waterproofing services across Bhiwandi, Mumbai, Thane, Kalyan & beyond. 47+ years experience.</p>
      <a href="tel:+919158800517">+91 9158800517</a>
      <a href="mailto:bhairavpaintingservice@gmail.com">bhairavpaintingservice@gmail.com</a>
      <p>Bhiwandi, Maharashtra</p>
    </div>
    <div className="footer-col">
      <h4>Our Services</h4>
      <a href="https://bhairavpaintingservice.vercel.app/services/residential">Residential Painting</a>
      <a href="https://bhairavpaintingservice.vercel.app/services/interior">Interior Painting</a>
      <a href="https://bhairavpaintingservice.vercel.app/services/building">Building Painting</a>
      <a href="https://bhairavpaintingservice.vercel.app/services/commercial">Commercial Painting</a>
      <a href="https://bhairavpaintingservice.vercel.app/services/designer/texture">Designer Wall & Texture</a>
      <a href="https://bhairavpaintingservice.vercel.app/services/waterproofing">Waterproofing</a>
    </div>
    <div className="footer-col">
      <h4>Quick Links</h4>
      <a href="https://bhairavpaintingservice.vercel.app/">Home</a>
      <a href="https://bhairavpaintingservice.vercel.app/services">Services</a>
      <a href="https://bhairavpaintingservice.vercel.app/gallery">Gallery</a>
      <a href="https://bhairavpaintingservice.vercel.app/about">About</a>
      <a href="https://bhairavpaintingservice.vercel.app/contact">Contact</a>
    </div>
    <div className="footer-col">
      <h4>Service Areas</h4>
      <p>Bhiwandi · Thane · Kalyan · Mumbai · Navi Mumbai · Vasai · Virar · Andheri · Dombivli · Kasheli · Kalher</p>
    </div>
  </div>
  <div className="footer-bottom">
    © 2026 Bhairav Painting Service. All rights reserved. | Bhiwandi, Maharashtra
  </div>
</footer>
    </>
  );
}
