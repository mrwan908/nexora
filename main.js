// Translation Dictionary
const translations = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_about: "About",
    nav_contact: "Contact Us",
    hero_title: "Technology Solutions for Growing Businesses",
    hero_desc: "We design and build digital solutions that help businesses work smarter, operate efficiently, and grow.",
    btn_explore: "Explore Services",
    btn_view_projects: "View Projects",
    why_nexora: "Why Nexora?",
    feat1_title: "Business-Focused Solutions",
    feat1_desc: "We focus on your actual business needs, creating technical tools that directly increase productivity and growth.",
    feat2_title: "Modern Technology",
    feat2_desc: "We build our platforms using clean code and scalable technologies to ensure high performance and reliability.",
    feat3_title: "Data-Driven Decisions",
    feat3_desc: "We turn raw business data into actionable visual insights to help you make informed decisions.",
    services_title: "Our Services",
    services_subtitle: "Practical digital solutions tailored for growing businesses.",
    serv1_title: "Custom Web Development",
    serv1_desc: "Responsive, fast, and modern web applications built to meet your specific operational requirements.",
    serv2_title: "Business Intelligence & Dashboards",
    serv2_desc: "Transforming complex business metrics into clear, real-time dashboards for better leadership decisions.",
    serv3_title: "Process Automation & Systems",
    serv3_desc: "Designing custom software tools to streamline workflows, reduce errors, and save operational time.",
    projects_title: "Featured Projects",
    projects_subtitle: "A selection of platforms and solutions built for business impact.",
    proj1_title: "Maqam POS & Inventory System",
    proj1_desc: "A comprehensive point-of-sale and inventory tracking platform tailored for retail and operational workflows.",
    status_in_dev: "In Active Development",
    proj2_title: "Developer Portfolio Platform",
    proj2_desc: "A high-performance personal portfolio built with clean architecture and seamless cross-device response.",
    view_live: "View Live Project →",
    proj3_title: "NovaShop E-Commerce Mobile App",
    proj3_desc: "A native mobile store application featuring structured product listings and interactive user flows.",
    about_title: "About Nexora",
    about_text: "Nexora Solutions is a forward-thinking technology initiative dedicated to developing practical digital platforms. We blend robust software engineering principles with clean visual interfaces to empower businesses and elevate their operational standards.",
    contact_title: "Get In Touch",
    contact_subtitle: "Have a project in mind or want to collaborate? Let's discuss how we can build it together.",
    contact_btn: "Send an Email",
    footer_rights: "© 2026 Nexora Solutions. All rights reserved."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_services: "خدماتنا",
    nav_projects: "مشاريعنا",
    nav_about: "من نحن",
    nav_contact: "تواصل معنا",
    hero_title: "حلول تقنية لتطوير وتنمية الأعمال",
    hero_desc: "نقوم بتصميم وبناء حلول رقمية تساعد الشركات والأعمال على العمل بذكاء، رفع الكفاءة، والنمو المستمر.",
    btn_explore: "استكشف خدماتنا",
    btn_view_projects: "عرض المشاريع",
    why_nexora: "لماذا نكسورا؟",
    feat1_title: "حلول موجهة للأعمال",
    feat1_desc: "نركز على احتياجات عملك الفعلية عبر تطوير أدوات تقنية تساهم مباشرة في زيادة الإنتاجية.",
    feat2_title: "تقنيات حديثة",
    feat2_desc: "نبني منصاتنا باستخدام برمجيات حديثة وشفرات نظيفة لضمان أعلى مستويات الأداء والاعتمادية.",
    feat3_title: "قرارات مبنية على البيانات",
    feat3_desc: "نحول بيانات أعمالك المعقدة إلى لوحات تحكم مرئية وسهلة لمساعدتك على اتخاذ قرارات صائبة.",
    services_title: "خدماتنا",
    services_subtitle: "حلول رقمية عملية مصممة خصيصاً لدعم نمو الأعمال.",
    serv1_title: "تطوير مواقع وتطبيقات الويب",
    serv1_desc: "تطبيقات ويب سريعة، متجاوبة، ومحدثة بأسلوب يلبي كافة متطلبات تشغيل عملك.",
    serv2_title: "ذكاء الأعمال ولوحات التحكم",
    serv2_desc: "تحويل مؤشرات الأداء المعقدة إلى لوحات تفاعلية مباشرة لتسهيل اتخاذ القرارات الإدارية.",
    serv3_title: "أتمتة العمليات والأنظمة",
    serv3_desc: "تصميم أدوات برمجية خاصة لتقليل الأخطاء البشرية وتسريع وتيرة سير العمل.",
    projects_title: "مشاريع مميزة",
    projects_subtitle: "نخبة من المنصات والأنظمة التي تم تطويرها لصنع أثر فعلي.",
    proj1_title: "نظام مقام لإدارة المبيعات والمخزون",
    proj1_desc: "منصة متكاملة لنقاط البيع وإدارة المخازن مصممة لخدمة قطاع التجزئة والعمليات التشغيلية.",
    status_in_dev: "قيد التطوير حالياً",
    proj2_title: "منصة معرض الأعمال الشخصي",
    proj2_desc: "موقع تعريفي واحترافي رفيع الأداء يستعرض المشاريع والخبرات بتصميم متجاوب.",
    view_live: "معاينة المشروع مباشرة ←",
    proj3_title: "تطبيق نوفاشوب للتجارة الإلكترونية",
    proj3_desc: "تطبيق جوال متكامل يعرض المنتجات ويوفر تجربة تسوق سلسة وتفاعلية للمستخدمين.",
    about_title: "عن نكسورا",
    about_text: "نكسورا للحول التقنية هي مبادرة برمجية تهدف للارتقاء بالحلول الرقمية وتوفير أدوات برمجية متقدمة. نجمع بين هندسة البرمجيات القوية والواجهات الحديثة لتمكين المؤسسات والشركات.",
    contact_title: "تواصل معنا",
    contact_subtitle: "هل لديك مشروع أو فكرة تريد تحويلها إلى واقع؟ يسعدنا التواصل معك لبحث سبل التعاون.",
    contact_btn: "إرسال بريد إلكتروني",
    footer_rights: "© 2026 نكسورا للحول التقنية. جميع الحقوق محفوظة."
  }
};

let currentLang = 'en';

const langToggleBtn = document.getElementById('langToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Language Switch Logic
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Update HTML dir and lang attributes
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Toggle Button Text
    langToggleBtn.textContent = currentLang === 'en' ? 'عربي' : 'English';
    
    // Update All Elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });
  });
}

// Mobile Menu Toggle Logic
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking any nav link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}