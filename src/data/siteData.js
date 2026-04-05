export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "MC Tana - Zimbabwe Wedding & Corporate MC",
    legalName: "MC Tana - Zimbabwe Wedding & Corporate MC",
    tagline: "Zimbabwe's Premier Wedding & Corporate MC",
    description: "MC Tana is Zimbabwe's most sought-after Master of Ceremonies. With a voice that commands attention and a warmth that connects every guest, MC Tana transforms events from gatherings into unforgettable experiences.",
    phone: "+263 77 383 5277",
    phoneRaw: "+263773835277",
    whatsappNumber: "263773835277",
    email: "bookings@mctana.co.zw",
    address: "37, Winson Road South, Hatfield, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.2,
    ratingRounded: 4,
    reviewCount: 17,
    established: "2014",
    yearsExperience: "10+",
    projectsCompleted: "800+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDguMCJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "mc-tana-zimbabwe-wedding-corporate-mc-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "MC",
    logoLine2: "Tana -",
  },

  hero: {
    badge: "Zimbabwe's Most Sought-After Master of Ceremonies",
    titleParts: [
      { text: "WHERE EVERY" },
      { text: "MOMENT", highlight: true },
      { text: "BECOMES UNFORGETTABLE." },
    ],
    subtitle: "MC Tana is Zimbabwe's most sought-after Master of Ceremonies. With a voice that commands attention and a warmth that connects every guest, MC Tana transforms events from gatherings into unforgettable experiences.",
    ctaPrimary: "Book MC Tana",
    ctaSecondary: "View Events",
    trustBadge: "800+ Clients Served",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85", alt: "Elegant wedding table with candles" },
      { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85", alt: "Warm evening event with ambient lighting" },
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85", alt: "Beautiful event venue styling" },
    ],
  },

  stats: [
    { number: "800+", label: "Events Styled" },
    { number: "10+", label: "Years of Excellence" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Venue Partners" },
  ],

  servicesPreview: [
    { title: "Wedding Design", desc: "From intimate garden ceremonies to grand ballroom receptions, we create wedding environments that tell your unique love story.", icon: "Heart" },
    { title: "Corporate Events", desc: "Elevate your brand with sophisticated event styling that communicates authority and impeccable taste.", icon: "Briefcase" },
    { title: "Birthday Celebrations", desc: "Milestone birthdays transformed into unforgettable atmospheres that honour the guest of honour.", icon: "Star" },
    { title: "Venue Styling", desc: "Complete venue transformation with lighting, draping, florals, and furniture to create your perfect setting.", icon: "Buildings" },
    { title: "Decor Hire", desc: "Premium furniture, tableware, linens, and accessories available for hire to complete your event vision.", icon: "Leaf" },
    { title: "Event Coordination", desc: "End-to-end planning and on-the-day coordination so you can relax and enjoy every moment.", icon: "Lightbulb" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions tailored to your needs.",
    items: [
      {
        title: "Wedding Design",
        slug: "wedding-design",
        desc: "Your wedding deserves more than decoration -- it deserves a world built around your love story. We orchestrate every visual element to create an atmosphere so immersive your guests will feel they have stepped into a dream. From ceremony backdrops to reception tablescapes, every detail is intentional.",
        features: ["Ceremony Backdrops", "Reception Styling", "Bridal Table Design", "Aisle Decor", "Lighting Design", "Linen & Draping"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Corporate Events",
        slug: "corporate-events",
        desc: "In the corporate arena, environment shapes perception. We design event spaces that elevate your brand from the moment guests cross the threshold. Whether it is a gala dinner, product launch, or awards ceremony, our styling communicates sophistication.",
        features: ["Brand Integration", "Stage Design", "VIP Lounges", "Networking Spaces", "Award Ceremonies", "Product Launches"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Birthday Celebrations",
        slug: "birthday-celebrations",
        desc: "A birthday is a celebration of a life well lived. Whether marking a milestone 50th or creating a magical children's party, we design birthday environments that make the guest of honour feel extraordinary.",
        features: ["Theme Development", "Balloon Artistry", "Cake Table Styling", "Photo Zones", "Lighting Effects", "Party Favours"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Venue Styling",
        slug: "venue-styling",
        desc: "We transform ordinary venues into extraordinary settings. Our venue styling service covers everything from structural elements and lighting rigs to floral installations and furniture placement, creating cohesive environments that wow from every angle.",
        features: ["Lighting Design", "Draping & Fabric", "Floral Installations", "Furniture Layout", "Colour Coordination", "Entrance Design"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Decor Hire",
        slug: "decor-hire",
        desc: "Access our extensive collection of premium event decor without the investment. From elegant tableware and luxury linens to statement furniture pieces and lighting rigs, our hire collection has everything you need.",
        features: ["Furniture Hire", "Tableware & Cutlery", "Linen Hire", "Lighting Equipment", "Centrepieces", "Lounge Setups"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Event Coordination",
        slug: "event-coordination",
        desc: "From initial concept to final breakdown, our coordination team manages every detail so you do not have to. We handle vendor liaison, timeline management, setup supervision, and on-the-day logistics.",
        features: ["Vendor Management", "Timeline Planning", "Setup Supervision", "On-Day Coordination", "Budget Management", "Post-Event Breakdown"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our work that showcases our capabilities.",
    items: [
      {
        title: "The Ivory Garden Wedding",
        slug: "the-ivory-garden-wedding",
        category: "Wedding",
        location: "Harare, Zimbabwe",
        desc: "200-guest garden wedding with cascading white florals, crystal chandeliers, and ambient candlelight.",
        client: "Private Wedding",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"],
      },
      {
        title: "Golden Corporate Gala",
        slug: "golden-corporate-gala",
        category: "Corporate",
        location: "Harare, Zimbabwe",
        desc: "Annual awards dinner for 500 guests with gold and black theming, LED stage design.",
        client: "Corporate Client",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"],
      },
      {
        title: "Enchanted 21st Birthday",
        slug: "enchanted-21st-birthday",
        category: "Birthday",
        location: "Harare, Zimbabwe",
        desc: "Fairy-tale themed celebration with suspended florals, mirror tables, and a custom cake display.",
        client: "Private Birthday",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"],
      },
      {
        title: "Executive Product Launch",
        slug: "executive-product-launch",
        category: "Corporate",
        location: "Harare, Zimbabwe",
        desc: "Premium product unveiling with brand-integrated decor, lighting design, and VIP lounge areas.",
        client: "Tech Company",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"],
      },
      {
        title: "Garden Party Reception",
        slug: "garden-party-reception",
        category: "Wedding",
        location: "Harare, Zimbabwe",
        desc: "Rustic outdoor reception with natural wood, greenery walls, and string lighting canopy.",
        client: "Private Wedding",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"],
      },
      {
        title: "Heritage Day Celebration",
        slug: "heritage-day-celebration",
        category: "Corporate",
        location: "Harare, Zimbabwe",
        desc: "Cultural celebration event with traditional and modern decor fusion for 300 guests.",
        client: "Heritage Organisation",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"],
      },
    ],
  },

  homeTestimonials: [
    { text: "MC Tana - Zimbabwe Wedding & Corporate MC transformed our venue into something out of a fairy tale. Every guest commented on how beautiful everything was. We could not have asked for more.", name: "Rumbidzai Mhofu", role: "Bride, Harare Wedding", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "Our corporate gala was flawless thanks to MC Tana - Zimbabwe Wedding & Corporate MC. The stage design, lighting, and attention to brand details were exceptional. We have already booked them for next year.", name: "Thomas Chigede", role: "Events Director, Corporate", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "My birthday celebration exceeded every expectation. MC Tana - Zimbabwe Wedding & Corporate MC understood my vision from the first consultation and executed it with incredible precision and creativity.", name: "Grace Matanga", role: "Birthday Celebrant", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The coordination was seamless from start to finish. MC Tana - Zimbabwe Wedding & Corporate MC managed every vendor, every timeline, and every detail so we could simply enjoy the evening.", name: "David Chirume", role: "CEO, Awards Gala Client", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise, driven by results.",
    story: [
      "MC Tana has been the voice behind Zimbabwe's most celebrated weddings and corporate events since 2014. With natural charisma and professional polish, every event flows seamlessly from first introduction to final farewell.",
      "From intimate garden weddings to 1,000-guest corporate galas, MC Tana brings the perfect balance of energy, humour, and gravitas. Over 800 events and counting, with a perfect 5.0 Google rating.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work. Every project receives our full attention and best effort." },
      { title: "Transparent Pricing", desc: "No hidden fees, no surprises. We quote honestly and invoice accurately." },
      { title: "Expert Team", desc: "Our team brings years of specialist experience to every project we undertake." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, adapt, and deliver." },
    ],
    team: [
      { name: "Team Leader", role: "Director", bio: "Leading MC Tana - Zimbabwe Wedding & Corporate MC with expertise and vision.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Operations Manager", role: "Operations", bio: "Ensuring every project runs smoothly and on schedule.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Technical Lead", role: "Technical", bio: "Bringing specialist expertise to every engagement.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    ],
  },

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important needs.",
    items: [
      { text: "MC Tana - Zimbabwe Wedding & Corporate MC transformed our venue into something out of a fairy tale. Every guest commented on how beautiful everything was. We could not have asked for more.", name: "Rumbidzai Mhofu", role: "Bride, Harare Wedding", rating: 5 },
      { text: "Our corporate gala was flawless thanks to MC Tana - Zimbabwe Wedding & Corporate MC. The stage design, lighting, and attention to brand details were exceptional. We have already booked them for next year.", name: "Thomas Chigede", role: "Events Director, Corporate", rating: 5 },
      { text: "My birthday celebration exceeded every expectation. MC Tana - Zimbabwe Wedding & Corporate MC understood my vision from the first consultation and executed it with incredible precision and creativity.", name: "Grace Matanga", role: "Birthday Celebrant", rating: 5 },
      { text: "The coordination was seamless from start to finish. MC Tana - Zimbabwe Wedding & Corporate MC managed every vendor, every timeline, and every detail so we could simply enjoy the evening.", name: "David Chirume", role: "CEO, Awards Gala Client", rating: 5 },
      { text: "The floral arrangements were beyond anything I imagined. MC Tana - Zimbabwe Wedding & Corporate MC turned our venue into a botanical paradise.", name: "Tsitsi Masvosva", role: "Bride, Harare", rating: 5 },
      { text: "Our conference styling was the talk of the industry. MC Tana - Zimbabwe Wedding & Corporate MC created an environment that made delegates feel inspired.", name: "Linda Masuku", role: "Events Coordinator", rating: 5 },
      { text: "I have referred MC Tana - Zimbabwe Wedding & Corporate MC to every bride I know. Their professionalism and creativity are in a league of their own.", name: "Yeukai Chimwanda", role: "Wedding Planner", rating: 5 },
      { text: "The decor hire collection is stunning. Quality items, well-maintained, and delivered on time.", name: "Patrick Makoni", role: "Event Planner", rating: 5 },
      { text: "Second time using MC Tana - Zimbabwe Wedding & Corporate MC and they outdid themselves again. Each event is treated as unique.", name: "Angela Mhembere", role: "Corporate Client", rating: 5 },
      { text: "From concept to cleanup, MC Tana - Zimbabwe Wedding & Corporate MC handled everything. We just showed up and enjoyed our own event.", name: "Brian Mutema", role: "Father of the Bride", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [],
  },

  contact: {
    heroTitle: "Get in Touch",
    heroSubtitle: "We would love to hear from you. Reach out and let us discuss how we can help.",
    branches: [
      { name: "Main Office", address: "37, Winson Road South, Hatfield, Harare, Zimbabwe", phone: "+263 77 383 5277", email: "bookings@mctana.co.zw" },
    ],
  },

  homeCta: {
    title: "YOUR EVENT, OUR STAGE",
    subtitle: "MC Tana is Zimbabwe's most sought-after Master of Ceremonies. With a voice that commands attention and a warmth that connects every guest, MC Tana transforms events from gatherings into unforgettable experiences.",
    ctaPrimary: "Book MC Tana",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello MC Tana! I'd like to discuss booking you for an event.",
    backgroundImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85",
  },

  footer: {
    description: "MC Tana is Zimbabwe's most sought-after Master of Ceremonies. With a voice that commands attention and a warmth that con...",
    copyright: "MC Tana - Zimbabwe Wedding & Corporate MC",
  },
};

export default siteData;