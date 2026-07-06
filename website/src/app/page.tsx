"use client";

import GoldShader from "@/components/GoldShader";

const products = [
  {
    name: "Nexus by RM",
    price: "Rs.2,750.00",
    originalPrice: "Rs.3,300.00",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLvzNefxS9LIIjyjpmMns3vBQZDaqWTGG2YNsbS5a10l7g_Bn5UXTabdgkCTiLzQEM4MC3RmqlGehfxgHGsZeY1dKraM0b_weAzlJiLki_Sg6QJoWNmMQhPNtLBR2cOwwqVntuk4sjOd6PJTnvW2IhrQ7HRIqAbjZz5XSOh3RpGreVvhgR0m1u-1FDIbpfJlJbcb7HXcjL8ax3NA0ZJXblgc6QyT04JKeo5EIXBoHQPq12sQ-NepBuea-Cap",
    badge: "Sale",
    badgeColor: "bg-deep-crimson",
  },
  {
    name: "Melody by RM",
    price: "Rs.2,900.00",
    originalPrice: undefined,
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLtbRQPsYtnEUhtFqdu3krveZJM9_vFRtKaU3k4aa_YSRHmgavay6vIu7bI_XhwA5l0gmQHfMHtxacbnFg_0wVHMziB5ysVafnnCgmER3bB9mqicrr6Qy2RdxgY76X3Bkf3pYYcaJUSHUvvtYA-8Is8abF3yCSTaNqObi8lXfuGkCO5xucXp23jPaDbf1-Rc9hfttzZGmJnrE_hD7sxpf-G4rICh-CAVYMfAZ0S2THI-TGPy-klaVLKBW7A",
    badge: "Sold Out",
    badgeColor: "bg-graphite-gray/80",
  },
  {
    name: "Elixir by RM",
    price: "Rs.3,750.00",
    originalPrice: undefined,
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsBvmC2NA3ocP5W9F7MfY7hxxAk4LxBBloVs2ODp1pl95JA8Pji9zZ599UNPRKZbSEi4dqk1oWguX5CHqCJdIuOMTFniHmGUaP7BzygkCP05Jf9TqBV6Wn1w1KgUDIbdvhXSi4XI2WowbtM-SBaJfwHBBEq9NXlmMbfp9ZEt4QH6Dk_fE6F2FCY7eQPrU_gQhFJJWXzHisKdWZ7ndalVCRE4Q73Ds46jpl-UKlysF3AOQUulaGY3gvzm1Ya",
    badge: undefined,
    badgeColor: undefined,
  },
];

const watches = [
  {
    name: "Old Money Edition",
    title: "Cartier Woody Brown",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLvAuizUtfNcHB1qxSIMwCEYLv_UqxNe-_uZtt50xirrnX_cvflUHC2mi8ky_aQ-htY7Za75ro_ovZlY-5Cchm4e_tAXjQ_QZ0qmGDffcbzOTYRRs0MjJW2-G6puHEfg1-hWmMhJuA3Y7UjaXtxG4E10wx4MvANlGojvYCYfziEMVQYrcqNk4Jc-fW6XzU8nTb5kqkdqDq1qx1odUwSYaV0uhdFskfZEi_GhZZ9gg8RRByIVTRm_RoEAvRdq",
  },
  {
    name: "Elite Stone Series",
    title: "Silver A+ Quality",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLswBromz4wxwae6QU-buS4HQrGJPhjHociLbQ17Z2w1kSOHqfLoDpVr-4xa-Anordg0M-7a1xJbIMn966I0_2546Qu4Bvjf1Sp5NoVGtfQHuqUC0_CSJMJpERG6NLwtKnt80VA3oGlSZEk6-lUK94hYzQV2ApiNeYAsoJnxgYk4bkTDtC1O0hrXlFpproitF40zxLNgwzMBKObxHNjCTMw03c2Te3mVnCv_kqAmtWocuHgM1VIosSz1sDok",
  },
];

const testimonials = [
  {
    quote:
      '"Never trust on negative reviews... try first and share your own opinions. Mine: really gud... one of the best."',
    author: "M Faizan",
    initial: "F",
  },
  {
    quote:
      '"Perfume is very good and have awesome fragrance. High concentration for an intense, long-lasting experience."',
    author: "Anonymous",
    initial: "A",
  },
  {
    quote:
      '"Wow this is amazing fragrance I also like this brand. Each fragrance is a reflection of Rehan Malik charisma."',
    author: "Usama Murtaza",
    initial: "U",
  },
];

const faqs = [
  {
    q: "What is the longevity of your perfumes?",
    a: "Our perfumes are crafted with high-quality ingredients and typically last 8 to 12 hours, depending on skin type and weather conditions.",
  },
  {
    q: "When will I get my order?",
    a: "We will work quickly to ship your order as soon as possible. It typically takes 4 to 5 days. Once your order has shipped, you will receive an email with further information.",
  },
  {
    q: "What ingredients are used in your perfumes?",
    a: "We use high-quality essential oils, natural extracts, and skin-safe synthetics. Full ingredient lists are available on each product page.",
  },
];

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-onyx-black/80 backdrop-blur-md border-b border-graphite-gray/30">
        <div className="flex justify-between items-center px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="flex items-center gap-stack-lg">
            <a
              className="font-display-lg text-headline-md tracking-tighter text-metallic-gold"
              href="/"
            >
              REHAN MALIK
            </a>
            <div className="hidden md:flex gap-stack-lg ml-stack-lg">
              {["Home", "Fragrances", "Watches", "Contact"].map((item) => (
                <a
                  key={item}
                  className={
                    item === "Home"
                      ? "font-label-caps text-label-caps tracking-widest uppercase text-metallic-gold border-b border-metallic-gold pb-1 transition-all duration-300"
                      : "font-label-caps text-label-caps tracking-widest uppercase text-ivory-white/70 hover:text-metallic-gold transition-colors duration-300"
                  }
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-stack-md">
            <button className="text-metallic-gold hover:opacity-80 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <button className="text-metallic-gold hover:opacity-80 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button className="text-metallic-gold hover:opacity-80 transition-all relative cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-1 -right-1 bg-deep-crimson text-[10px] w-4 h-4 rounded-full flex items-center justify-center text-white">0</span>
            </button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <GoldShader />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-black/60 via-transparent to-onyx-black z-10" />
        <div className="relative z-20 text-center px-margin-mobile">
          <span className="font-label-caps text-label-caps tracking-[0.3em] uppercase text-metallic-gold mb-stack-md block animate-pulse">
            Elegance in Every Essence
          </span>
          <h1 className="font-display-lg text-display-lg hero-title mb-stack-lg">
            REHAN MALIK
          </h1>
          <p className="font-headline-sm text-headline-sm text-ivory-white/80 max-w-2xl mx-auto mb-section-gap leading-relaxed italic">
            Luxury Redefined
          </p>
          <div className="flex flex-col md:flex-row gap-gutter justify-center items-center">
            <a
              className="bg-metallic-gold text-onyx-black font-label-caps text-label-caps px-12 py-5 tracking-widest uppercase hover:bg-ivory-white transition-all duration-500 active:opacity-80"
              href="#fragrances"
            >
              Shop Collections
            </a>
            <a
              className="border border-metallic-gold text-metallic-gold font-label-caps text-label-caps px-12 py-5 tracking-widest uppercase hover:bg-metallic-gold/10 transition-all duration-500 active:opacity-80"
              href="#watches"
            >
              Explore Watches
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </section>

      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto" id="fragrances">
        <div className="flex flex-col md:flex-row justify-between items-end mb-section-gap">
          <div className="max-w-xl">
            <span className="font-label-caps text-label-caps text-metallic-gold mb-stack-sm block">
              Exquisite Perfumery
            </span>
            <h2 className="font-display-lg text-headline-md text-ivory-white">
              The Scent Chapter
            </h2>
          </div>
          <a
            className="font-label-caps text-label-caps text-metallic-gold hover:underline decoration-1 underline-offset-8 transition-all"
            href="#fragrances"
          >
            View All Collections
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {products.map((product) => (
            <div key={product.name} className="product-card group relative flex flex-col items-center">
              <div className="relative overflow-hidden w-full aspect-[3/4] mb-stack-lg glass-overlay">
                <img
                  alt={product.name}
                  className="product-img w-full h-full object-cover"
                  src={product.image}
                />
                {product.badge && (
                  <div
                    className={`absolute top-4 left-4 ${product.badgeColor} px-3 py-1 text-white font-label-caps text-[10px] uppercase`}
                  >
                    {product.badge}
                  </div>
                )}
              </div>
              <h3 className="font-display-lg text-headline-sm text-ivory-white mb-stack-sm">
                {product.name}
              </h3>
              <p className="font-body-sm text-metallic-gold mb-stack-md">
                {product.price}
                {product.originalPrice && (
                  <span className="text-ivory-white/30 line-through ml-2">
                    {product.originalPrice}
                  </span>
                )}
              </p>
              <button
                className={
                  product.badge === "Sold Out"
                    ? "font-label-caps text-label-caps border border-graphite-gray px-8 py-3 text-ivory-white/40 cursor-not-allowed"
                    : "font-label-caps text-label-caps border border-graphite-gray px-8 py-3 text-ivory-white/70 group-hover:border-metallic-gold group-hover:text-metallic-gold transition-all duration-300 cursor-pointer"
                }
                disabled={product.badge === "Sold Out"}
              >
                {product.badge === "Sold Out" ? "Out of Stock" : "Quick Add"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low py-section-gap overflow-hidden" id="watches">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center">
            <div>
              <span className="font-label-caps text-label-caps text-metallic-gold mb-stack-sm block">
                Heritage & Craft
              </span>
              <h2 className="font-display-lg text-display-lg text-ivory-white mb-stack-lg leading-tight">
                Timeless
                <br />
                Precision
              </h2>
              <p className="font-body-lg text-ivory-white/60 mb-section-gap max-w-md leading-relaxed">
                Discover a curation of timepieces that embody the pinnacle of
                horological excellence. Every tick is a testament to our commitment
                to craftsmanship and absolute luxury.
              </p>
              <div className="flex gap-gutter">
                {watches.map((watch) => (
                  <div key={watch.name} className="group cursor-pointer">
                    <div className="overflow-hidden w-48 h-64 mb-stack-md">
                      <img
                        alt={watch.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src={watch.image}
                      />
                    </div>
                    <span className="font-label-caps text-[10px] text-metallic-gold block uppercase mb-1">
                      {watch.name}
                    </span>
                    <span className="font-body-sm text-ivory-white/80 block">
                      {watch.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[800px] flex justify-end">
              <div className="absolute -right-20 top-0 w-full h-full bg-metallic-gold/5 blur-[120px] rounded-full" />
              <img
                alt="Featured Watch"
                className="relative z-10 h-full w-auto object-cover border border-graphite-gray shadow-2xl"
                src="https://lh3.googleusercontent.com/aida/AP1WRLvAuizUtfNcHB1qxSIMwCEYLv_UqxNe-_uZtt50xirrnX_cvflUHC2mi8ky_aQ-htY7Za75ro_ovZlY-5Cchm4e_tAXjQ_QZ0qmGDffcbzOTYRRs0MjJW2-G6puHEfg1-hWmMhJuA3Y7UjaXtxG4E10wx4MvANlGojvYCYfziEMVQYrcqNk4Jc-fW6XzU8nTb5kqkdqDq1qx1odUwSYaV0uhdFskfZEi_GhZZ9gg8RRByIVTRm_RoEAvRdq"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap relative overflow-hidden" id="gentle">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-fixed opacity-10 grayscale"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsLPzior13AAB9rqE7vNxovBDJ-G5wNa3l8kjAcUcCOpYzOnMiir1OZ6W1_WUHXPE0yvTRZ74ifi6sLj4YcrCj7BRZDwoE2Y1a8Kwk-MbH4Orulhu2lZqfgAq09DCBWH836FSmIW2R2trkoA-9FMK9MdHQLOzTUQwK2iEaSYcBEHhuB0K9ptH4Io4zSRQxDqpB9_3veRO0UfH5wMf_Acl31a_88wQQHRusv9pK_sn3qKE-AflIzl8FdwHaU0efcORJJ1IEmZdU4dlF')",
            }}
          />
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7">
              <img
                alt="Gentle - legacy of RM"
                className="w-full h-auto object-cover border border-graphite-gray shadow-2xl"
                src="https://lh3.googleusercontent.com/aida/AP1WRLt9Ymi83wKPFyLmr6uRxiJJAqs9T5sNn4RoMZBd0Vq59Vb27T71aGNY8NAVB5j-pS2RxpRvYx9q3elEVDKnlpUdfH3i2CW-UjbY6tjd9XODC9_qDdde-zA3Ici6boNd-zFLRYHZ_UhVP6lzOzXotG96A2SM7gIS3QVTOVhPw7XLMhn4nyWgZBDgDx8RuzGC82AMH82_4ZUUfgXZZc1snStEADiMhbE0mKb3_X-DT6z0KvDTpkxDM6X1SxAL"
              />
            </div>
            <div className="lg:col-span-5 px-margin-mobile lg:px-stack-lg">
              <img
                alt="Logo"
                className="w-16 mb-stack-lg"
                src="https://lh3.googleusercontent.com/aida/AP1WRLtP58t6TmOCCIPb2CAhxeP5DCMW_k76pW33Bb32fNDM3iW-gFSLH20gJzpbcOdRUXl5EZyXpkEQ3Agw_eVCnJ13p8e2ELzeW9IL1OaPHpn1JY7tdnHn1Ke2lxbMFO2oHOdK1t-8TFYF65B4thSyH6cJ_7EEDikplEEVnuXexqbT9yPptNfAbivvYdI4ubVNStmyi9Xbzu-TiJ-iDQkC0KifkwtRNsq6__gVX2JcqU-pWubOcN7eAQCqT78"
              />
              <h2 className="font-display-lg text-display-lg text-metallic-gold mb-stack-lg">
                Gentle - Legacy of RM
              </h2>
              <p className="font-body-lg text-ivory-white/80 mb-stack-lg leading-relaxed">
                Gentle — A refined woody-aromatic fragrance that opens with the
                crisp freshness of <b>juniper berries</b> and a touch of{" "}
                <b>nutmeg</b>.
              </p>
              <p className="font-body-lg text-ivory-white/80 mb-section-gap leading-relaxed">
                At its heart lies the subtle spice of <b>coriander</b>, resting on
                a smooth, lasting base of <b>musk</b> and <b>cedar</b>, creating a
                calm yet confident scent that speaks softly but leaves a lasting
                impression.
              </p>
              <div className="flex items-center gap-stack-lg">
                <a
                  className="bg-metallic-gold text-onyx-black px-12 py-5 font-label-caps text-label-caps tracking-widest uppercase hover:bg-ivory-white transition-all"
                  href="#"
                >
                  Discover the Notes
                </a>
                <div className="h-px w-24 bg-metallic-gold/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <div className="mb-section-gap">
            <div className="flex justify-center mb-stack-sm">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#d4af37" stroke="#d4af37" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <h2 className="font-display-lg text-headline-md text-ivory-white mb-stack-sm">
              Let customers speak for us
            </h2>
            <p className="font-label-caps text-label-caps text-metallic-gold tracking-widest">
              From 214 Verified Reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-left">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`glass-overlay p-stack-lg border-b-2 border-b-metallic-gold/0 hover:border-b-metallic-gold transition-all duration-500 ${
                  i === 1 ? "bg-onyx-black" : ""
                }`}
              >
                <p className="font-body-lg text-ivory-white/90 italic mb-stack-lg leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center gap-stack-md">
                  <div className="w-10 h-10 rounded-full bg-graphite-gray flex items-center justify-center font-display-lg text-metallic-gold">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-metallic-gold uppercase">
                      {t.author}
                    </p>
                    <p className="text-[10px] text-ivory-white/40">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-desktop max-w-3xl mx-auto">
        <h2 className="font-display-lg text-headline-md text-center mb-section-gap text-ivory-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-stack-md">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-graphite-gray pb-stack-md">
              <details className="group">
                <summary className="w-full flex justify-between items-center text-left py-4 cursor-pointer list-none">
                  <span className="font-title-lg text-title-lg text-ivory-white group-hover:text-metallic-gold transition-colors">
                    {faq.q}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="font-body-sm text-ivory-white/60 py-stack-md">
                  {faq.a}
                </p>
              </details>
            </div>
          ))}
        </div>
      </section>

      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto" id="contact">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-label-caps text-label-caps tracking-[0.3em] uppercase text-metallic-gold mb-stack-sm block">Get in Touch</span>
          <h2 className="font-display-lg text-headline-md text-ivory-white mb-stack-lg">Contact Us</h2>
          <p className="font-body-lg text-ivory-white/60 mb-section-gap leading-relaxed">
            Have a question about our fragrances or timepieces? We'd love to hear from you.
            Reach out and our concierge team will respond within 24 hours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-left">
            <div className="glass-overlay p-stack-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-stack-md"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <h3 className="font-label-caps text-label-caps text-metallic-gold uppercase mb-stack-sm">Call Us</h3>
              <p className="font-body-sm text-ivory-white/60">+92 300 1234567</p>
            </div>
            <div className="glass-overlay p-stack-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-stack-md"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <h3 className="font-label-caps text-label-caps text-metallic-gold uppercase mb-stack-sm">Email Us</h3>
              <p className="font-body-sm text-ivory-white/60">hello@rehanmalik.com</p>
            </div>
            <div className="glass-overlay p-stack-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-stack-md"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <h3 className="font-label-caps text-label-caps text-metallic-gold uppercase mb-stack-sm">Visit Us</h3>
              <p className="font-body-sm text-ivory-white/60">Lahore, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-onyx-black border-t border-graphite-gray w-full pt-section-gap pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
          <div>
            <a
              className="font-display-lg text-headline-sm text-metallic-gold block mb-stack-lg"
              href="/"
            >
              REHAN MALIK
            </a>
            <p className="font-body-sm text-body-sm text-ivory-white/50 leading-relaxed mb-stack-lg">
              Crafted with passion, our perfumes speak before you say a word. Join
              our journey into the world of fine scents.
            </p>
            <div className="flex gap-stack-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:opacity-80 transition-opacity"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:opacity-80 transition-opacity"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
          </div>
          {[
            {
              title: "Quick Links",
              links: ["Home", "Watches", "Fragrances", "Contact Us"],
            },
            {
              title: "Support",
              links: [
                "Privacy Policy",
                "Terms of Service",
                "Shipping & Returns",
                "Store Locator",
              ],
            },
            {
              title: "Join Our Family",
              links: [],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-label-caps text-label-caps text-metallic-gold uppercase tracking-widest mb-stack-lg">
                {col.title}
              </h4>
              {col.links.length > 0 && (
                <ul className="space-y-3">
                  {col.links.map((link) => {
                    const linkMap: Record<string, string> = {
                      "Home": "/",
                      "Watches": "#watches",
                      "Fragrances": "#fragrances",
                      "Contact Us": "#contact",
                      "Privacy Policy": "#privacy",
                      "Terms of Service": "#terms",
                      "Shipping & Returns": "#shipping",
                      "Store Locator": "#store",
                    };
                    return (
                      <li key={link}>
                        <a
                          className="font-body-sm text-ivory-white/50 hover:text-metallic-gold transition-colors"
                          href={linkMap[link] || "#"}
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
              {col.title === "Join Our Family" && (
                <form
                  className="relative"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    className="w-full bg-surface-container-low border-0 border-b border-graphite-gray py-4 focus:border-metallic-gold focus:ring-0 text-ivory-white font-body-sm outline-none"
                    placeholder="Email Address"
                    type="email"
                  />
                  <button
                    className="absolute right-0 bottom-4 text-metallic-gold hover:translate-x-2 transition-transform cursor-pointer"
                    type="submit"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
        <div className="mt-section-gap border-t border-graphite-gray/20 pt-10 px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="font-body-sm text-body-sm text-ivory-white/50 uppercase tracking-widest">
            &copy; 2026 REHAN MALIK. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-stack-lg grayscale opacity-40">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-10 h-6 bg-ivory-white/20 rounded-sm" />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
