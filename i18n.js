/* =====================================================
   CAPAVISTA CAVE HOUSE — i18n Translations
   Languages: English, Arabic, Turkish
   ===================================================== */

const translations = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      rooms: 'Rooms',
      packages: 'Packages',
      gallery: 'Gallery',
      contact: 'Contact',
      book: 'Book Now',
    },
    hero: {
      tag: 'Cappadocia, Turkey',
      title: 'Where Stone Meets',
      titleItalic: 'Heaven',
      sub: 'Göreme, Cappadocia · Luxury Cave Hotel',
      cta1: 'Reserve Your Stay',
      cta2: 'Explore Rooms',
    },
    whyDirect: {
      tag: 'Why Book Direct',
      title: 'The Best Experience\nBegins Here',
      sub: 'Booking directly with us guarantees the lowest rate, exclusive privileges, and a truly personal welcome.',
      perks: [
        { title: 'Best Rate Guarantee', text: 'Price-match promise on every reservation.' },
        { title: 'Complimentary Upgrade', text: 'Subject to availability at check-in.' },
        { title: 'Early Check-in / Late Check-out', text: 'Flexible arrival & departure times.' },
        { title: 'Exclusive Amenities', text: 'Welcome gift & personalised service.' },
        { title: 'Free Cancellation', text: 'Flexible booking terms, no hidden fees.' },
        { title: '24/7 Concierge', text: 'Personal host available any time.' },
      ],
    },
    roomsPreview: {
      tag: 'Our Suites',
      title: 'Cave Dwellings\nReborn as Luxury',
      sub: 'Each room is carved from the living rock, finished with handcrafted furnishings and modern comfort.',
      cta: 'View All Rooms',
      rooms: [
        { name: 'Signature Cave Suite', size: 'From 40 m²' },
        { name: 'Deluxe Rock Room', size: 'From 30 m²' },
        { name: 'Royal Jacuzzi Suite', size: 'From 55 m²' },
      ],
    },
    balloon: {
      tag: 'Signature Experience',
      title: 'Rise Above\nCappadocia',
      sub: 'Witness a sunrise that has awed travellers for centuries. Our exclusive balloon package lifts you above fairy chimneys and ancient valleys.',
      includes: [
        '1-hour premium hot-air balloon flight',
        'Champagne breakfast on landing',
        'Hotel transfer (round trip)',
        'In-flight photography service',
        'Certificate of flight',
        'Complimentary sparkling wine',
      ],
      from: 'From',
      price: '€180',
      per: 'per person',
      cta: 'Book Package',
    },
    reviews: {
      tag: 'Guest Voices',
      title: 'What Our Guests Say',
      items: [
        {
          text: 'An extraordinary experience. The cave room was warm, luxurious, and unlike anything we\'ve stayed in before. The views of the valley at sunrise were breathtaking.',
          name: 'Sophie & James',
          location: 'United Kingdom',
        },
        {
          text: 'Capavista exceeded every expectation. The staff anticipated our every need, the balloon package was magical, and the breakfast spread was phenomenal.',
          name: 'Fatima Al-Rashid',
          location: 'United Arab Emirates',
        },
        {
          text: 'Peri bacalarının arasında kayaya oyulmuş bu cennet köşesi inanılmaz. Göreme manzaralı oda müthiş, kahvaltı ise Kapadokya\'nın en iyisiydi.',
          name: 'Mehmet & Ayşe',
          location: 'Istanbul, Turkey',
        },
        {
          text: 'The attention to detail is remarkable — from the handwoven textiles to the clay pottery. It feels like staying in a living piece of history, yet perfectly comfortable.',
          name: 'Elena Vasquez',
          location: 'Spain',
        },
      ],
      scores: [
        { score: '9.6', label: 'Booking.com' },
        { score: '4.9', label: 'TripAdvisor' },
        { score: '4.8', label: 'Google' },
      ],
    },
    whatsapp: {
      title: 'Chat With Us Directly',
      sub: 'Have a question or special request? Our team responds within minutes. Ask about room upgrades, airport transfers, proposal arrangements, and more.',
      cta: 'WhatsApp Us',
    },
    bestPrice: {
      title: 'Best Price Guaranteed',
      sub: 'Find a lower rate anywhere online and we\'ll match it — and add a complimentary room upgrade. Booking direct is always the smartest choice.',
      cta: 'Book Direct Now',
    },
    location: {
      tag: 'Our Location',
      title: 'Heart of\nGöreme',
      sub: 'Nestled in the historic village of Göreme, steps from the Open Air Museum and the iconic fairy chimneys of Cappadocia.',
      features: [
        { icon: '🏛️', title: 'Göreme Open Air Museum', text: '3 min walk' },
        { icon: '🎈', title: 'Balloon Launch Site', text: '5 min drive' },
        { icon: '✈️', title: 'Nevşehir Airport', text: '35 min drive' },
        { icon: '🏔️', title: 'Valley Hikes', text: 'Walking distance' },
      ],
    },
    footer: {
      desc: 'A luxury cave hotel in the heart of Göreme, Cappadocia — where ancient rock formations meet modern comfort.',
      links: ['Home', 'Rooms & Suites', 'Packages', 'Gallery', 'Contact'],
      services: ['Hot Air Balloon', 'ATV Tours', 'Pottery Workshop', 'Wine Tasting', 'Airport Transfer'],
      contact: {
        address: 'Müze Caddesi, Göreme, Nevşehir 50180, Turkey',
        phone: '+90 532 XXX XX XX',
        email: 'info@capavistacavehouse.com',
        hours: 'Open 24 hours · 7 days',
      },
      copy: '© 2025 Capavista Cave House. All rights reserved.',
    },
    bookNow: 'Book Now',
    learnMore: 'Learn More',
    viewAll: 'View All',
    explore: 'Explore',
  },

  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      rooms: 'الغرف',
      packages: 'الباقات',
      gallery: 'معرض الصور',
      contact: 'اتصل بنا',
      book: 'احجز الآن',
    },
    hero: {
      tag: 'كابادوكيا، تركيا',
      title: 'حيث يلتقي الحجر',
      titleItalic: 'بالسماء',
      sub: 'غوريمي، كابادوكيا · فندق كهف فاخر',
      cta1: 'احجز إقامتك',
      cta2: 'استكشف الغرف',
    },
    whyDirect: {
      tag: 'لماذا الحجز المباشر؟',
      title: 'أفضل تجربة\nتبدأ من هنا',
      sub: 'الحجز المباشر معنا يضمن لك أفضل سعر وامتيازات حصرية واستقبالاً شخصياً حقيقياً.',
      perks: [
        { title: 'ضمان أفضل سعر', text: 'نضمن لك أفضل سعر على كل حجز.' },
        { title: 'ترقية مجانية', text: 'حسب التوفر عند تسجيل الوصول.' },
        { title: 'وصول مبكر / مغادرة متأخرة', text: 'مواعيد مرنة للوصول والمغادرة.' },
        { title: 'مرافق حصرية', text: 'هدية ترحيب وخدمة شخصية مميزة.' },
        { title: 'إلغاء مجاني', text: 'شروط حجز مرنة بدون رسوم خفية.' },
        { title: 'خدمة الكونسيرج 24/7', text: 'مضيف شخصي متاح في أي وقت.' },
      ],
    },
    roomsPreview: {
      tag: 'أجنحتنا',
      title: 'مساكن الكهوف\nمُعاد إحياؤها بفخامة',
      sub: 'كل غرفة منحوتة في الصخر الحي، مزودة بأثاث مصنوع يدوياً وراحة عصرية.',
      cta: 'عرض جميع الغرف',
      rooms: [
        { name: 'جناح الكهف المميز', size: 'من 40 م²' },
        { name: 'غرفة الصخر الفاخرة', size: 'من 30 م²' },
        { name: 'جناح جاكوزي الملكي', size: 'من 55 م²' },
      ],
    },
    balloon: {
      tag: 'تجربة لا تُنسى',
      title: 'ارتفع فوق\nكابادوكيا',
      sub: 'شاهد شروق الشمس الذي أبهر المسافرين لقرون. باقة البالون الحصرية ترفعك فوق مداخن الجنيات والوديان القديمة.',
      includes: [
        'رحلة بالون هواء ساخن لمدة ساعة',
        'إفطار الشمبانيا عند الهبوط',
        'نقل من وإلى الفندق',
        'خدمة التصوير أثناء الرحلة',
        'شهادة الرحلة',
        'نبيذ فوار مجاني',
      ],
      from: 'يبدأ من',
      price: '€180',
      per: 'للشخص',
      cta: 'احجز الباقة',
    },
    reviews: {
      tag: 'آراء الضيوف',
      title: 'ماذا يقول ضيوفنا',
      items: [
        {
          text: 'تجربة استثنائية. كانت غرفة الكهف دافئة وفاخرة ولا مثيل لها. كانت إطلالات الوادي عند الشروق خلابة.',
          name: 'سوفي وجيمس',
          location: 'المملكة المتحدة',
        },
        {
          text: 'كابافيستا تجاوزت كل توقعاتي. الفريق استبق كل احتياجاتنا، وكانت باقة البالون سحرية، والإفطار كان رائعاً.',
          name: 'فاطمة الراشد',
          location: 'الإمارات العربية المتحدة',
        },
        {
          text: 'هذه الجنة المنحوتة في الصخر بين مداخن الجنيات لا تُصدَّق. الغرفة المطلة على غوريمي رائعة، والإفطار كان الأفضل في كابادوكيا.',
          name: 'محمد وعائشة',
          location: 'إسطنبول، تركيا',
        },
        {
          text: 'الاهتمام بالتفاصيل لافت للنظر — من المنسوجات المنسوجة يدوياً إلى الفخار الطيني. يبدو الأمر وكأنك تقيم في قطعة تاريخية حية، ومريحة تماماً.',
          name: 'إيلينا فاسكيز',
          location: 'إسبانيا',
        },
      ],
      scores: [
        { score: '9.6', label: 'Booking.com' },
        { score: '4.9', label: 'TripAdvisor' },
        { score: '4.8', label: 'Google' },
      ],
    },
    whatsapp: {
      title: 'تحدث معنا مباشرة',
      sub: 'هل لديك سؤال أو طلب خاص؟ فريقنا يرد في دقائق. اسأل عن ترقيات الغرف، والنقل من المطار، وترتيبات الاقتراح، وأكثر.',
      cta: 'راسلنا عبر واتساب',
    },
    bestPrice: {
      title: 'ضمان أفضل سعر',
      sub: 'إذا وجدت سعراً أقل في أي مكان على الإنترنت، سنطابقه ونضيف ترقية مجانية للغرفة. الحجز المباشر هو دائماً الخيار الأذكى.',
      cta: 'احجز مباشرة الآن',
    },
    location: {
      tag: 'موقعنا',
      title: 'قلب\nغوريمي',
      sub: 'يقع في قرية غوريمي التاريخية، على بُعد خطوات من المتحف المفتوح ومداخن الجنيات الأيقونية في كابادوكيا.',
      features: [
        { icon: '🏛️', title: 'متحف غوريمي المفتوح', text: 'مشي 3 دقائق' },
        { icon: '🎈', title: 'موقع إطلاق البالون', text: 'قيادة 5 دقائق' },
        { icon: '✈️', title: 'مطار نيفشهير', text: 'قيادة 35 دقيقة' },
        { icon: '🏔️', title: 'مسارات الوادي', text: 'على مسافة المشي' },
      ],
    },
    footer: {
      desc: 'فندق كهف فاخر في قلب غوريمي، كابادوكيا — حيث تلتقي تشكيلات الصخور القديمة بالراحة الحديثة.',
      links: ['الرئيسية', 'الغرف والأجنحة', 'الباقات', 'معرض الصور', 'اتصل بنا'],
      services: ['بالون الهواء الساخن', 'جولات ATV', 'ورشة الفخار', 'تذوق النبيذ', 'نقل المطار'],
      contact: {
        address: 'شارع متحف، غوريمي، نيفشهير 50180، تركيا',
        phone: '+90 532 XXX XX XX',
        email: 'info@capavistacavehouse.com',
        hours: 'مفتوح 24 ساعة · 7 أيام',
      },
      copy: '© 2025 كابافيستا كيف هاوس. جميع الحقوق محفوظة.',
    },
    bookNow: 'احجز الآن',
    learnMore: 'اعرف المزيد',
    viewAll: 'عرض الكل',
    explore: 'استكشف',
  },

  tr: {
    dir: 'ltr',
    nav: {
      home: 'Ana Sayfa',
      rooms: 'Odalar',
      packages: 'Paketler',
      gallery: 'Galeri',
      contact: 'İletişim',
      book: 'Rezervasyon',
    },
    hero: {
      tag: 'Kapadokya, Türkiye',
      title: 'Taşın Cennete',
      titleItalic: 'Dokunduğu Yer',
      sub: 'Göreme, Kapadokya · Lüks Mağara Oteli',
      cta1: 'Rezervasyon Yap',
      cta2: 'Odaları Keşfet',
    },
    whyDirect: {
      tag: 'Neden Direkt Rezervasyon?',
      title: 'En İyi Deneyim\nBuradan Başlar',
      sub: 'Doğrudan rezervasyon yaparak en düşük fiyatı, özel ayrıcalıkları ve gerçekten kişisel bir karşılamayı garanti altına alırsınız.',
      perks: [
        { title: 'En İyi Fiyat Garantisi', text: 'Her rezervasyonda fiyat eşleştirme garantisi.' },
        { title: 'Ücretsiz Oda Yükseltme', text: 'Check-in sırasında müsaitliğe göre.' },
        { title: 'Erken Giriş / Geç Çıkış', text: 'Esnek varış ve ayrılış saatleri.' },
        { title: 'Özel Olanaklar', text: 'Karşılama hediyesi ve kişiselleştirilmiş hizmet.' },
        { title: 'Ücretsiz İptal', text: 'Esnek rezervasyon koşulları, gizli ücret yok.' },
        { title: '7/24 Concierge', text: 'Her an ulaşılabilir kişisel host.' },
      ],
    },
    roomsPreview: {
      tag: 'Süitlerimiz',
      title: 'Mağara Konutları\nLükse Yeniden Doğdu',
      sub: 'Her oda, canlı kayaya oyulmuş, el yapımı mobilyalar ve modern konforla donatılmıştır.',
      cta: 'Tüm Odaları Gör',
      rooms: [
        { name: 'Signature Mağara Süit', size: '40 m²\'den başlar' },
        { name: 'Deluxe Kaya Odası', size: '30 m²\'den başlar' },
        { name: 'Royal Jakuzili Süit', size: '55 m²\'den başlar' },
      ],
    },
    balloon: {
      tag: 'Unutulmaz Deneyim',
      title: 'Kapadokya\'nın\nÜzerinde Yüksel',
      sub: 'Yüzyıllardır gezginleri büyüleyen gün doğumuna tanık olun. Özel balon paketimizle peri bacaları ve antik vadilerin üzerinde süzülün.',
      includes: [
        '1 saatlik premium sıcak hava balonu uçuşu',
        'İnişte şampanya kahvaltısı',
        'Otelden transfer (gidiş-dönüş)',
        'Uçuş sırasında fotoğraf çekimi',
        'Uçuş sertifikası',
        'Ücretsiz köpüklü şarap',
      ],
      from: 'Başlangıç fiyatı',
      price: '€180',
      per: 'kişi başı',
      cta: 'Paketi Rezerve Et',
    },
    reviews: {
      tag: 'Misafir Yorumları',
      title: 'Misafirlerimiz Ne Diyor',
      items: [
        {
          text: 'Olağanüstü bir deneyim. Mağara odası sıcak, lüks ve daha önce hiç yaşamadığımız bir şeydi. Gün doğumunda vadinin manzarası nefes kesiciydi.',
          name: 'Sophie ve James',
          location: 'Birleşik Krallık',
        },
        {
          text: 'Capavista her beklentiyi aştı. Personel her ihtiyacımızı önceden tahmin etti, balon paketi sihirliydi ve kahvaltı muhtesemdi.',
          name: 'Fatima Al-Rashid',
          location: 'Birleşik Arap Emirlikleri',
        },
        {
          text: 'Peri bacaları arasındaki bu kayaya oyulmuş cennet köşesi inanılmaz. Göreme manzaralı oda müthiş, kahvaltı ise Kapadokya\'nın en iyisiydi.',
          name: 'Mehmet ve Ayşe',
          location: 'İstanbul, Türkiye',
        },
        {
          text: 'Detaylara olan özen dikkat çekici — el dokuması tekstillerden kil çömlekçiliğe kadar. Yaşayan bir tarih parçasında kaldığınız hissi, ama mükemmel konforla.',
          name: 'Elena Vasquez',
          location: 'İspanya',
        },
      ],
      scores: [
        { score: '9.6', label: 'Booking.com' },
        { score: '4.9', label: 'TripAdvisor' },
        { score: '4.8', label: 'Google' },
      ],
    },
    whatsapp: {
      title: 'Doğrudan Bizimle Sohbet Edin',
      sub: 'Sorunuz veya özel isteğiniz mi var? Ekibimiz dakikalar içinde yanıt verir. Oda yükseltmeleri, havalimanı transferleri, evlilik teklifi düzenlemeleri hakkında sorun.',
      cta: 'WhatsApp\'tan Yazın',
    },
    bestPrice: {
      title: 'En İyi Fiyat Garantisi',
      sub: 'İnternette daha düşük bir fiyat bulursanız eşleştiriyoruz — ve üstüne ücretsiz oda yükseltmesi ekliyoruz. Direkt rezervasyon her zaman en akıllı seçimdir.',
      cta: 'Hemen Direkt Rezervasyon Yap',
    },
    location: {
      tag: 'Konumumuz',
      title: 'Göreme\'nin\nKalbinde',
      sub: 'Tarihi Göreme köyünün ortasında, Açık Hava Müzesi\'nin ve Kapadokya\'nın ikonik peri bacalarının hemen yakınında.',
      features: [
        { icon: '🏛️', title: 'Göreme Açık Hava Müzesi', text: '3 dakika yürüme' },
        { icon: '🎈', title: 'Balon Kalkış Alanı', text: '5 dakika araç' },
        { icon: '✈️', title: 'Nevşehir Havalimanı', text: '35 dakika araç' },
        { icon: '🏔️', title: 'Vadi Yürüyüşleri', text: 'Yürüme mesafesinde' },
      ],
    },
    footer: {
      desc: 'Göreme, Kapadokya\'nın kalbinde lüks bir mağara oteli — antik kaya oluşumlarının modern konforla buluştuğu yer.',
      links: ['Ana Sayfa', 'Odalar ve Süitler', 'Paketler', 'Galeri', 'İletişim'],
      services: ['Sıcak Hava Balonu', 'ATV Turları', 'Çömlek Atölyesi', 'Şarap Tadımı', 'Havalimanı Transferi'],
      contact: {
        address: 'Müze Caddesi, Göreme, Nevşehir 50180, Türkiye',
        phone: '+90 532 XXX XX XX',
        email: 'info@capavistacavehouse.com',
        hours: '24 saat açık · 7 gün',
      },
      copy: '© 2025 Capavista Cave House. Tüm hakları saklıdır.',
    },
    bookNow: 'Rezervasyon Yap',
    learnMore: 'Daha Fazla',
    viewAll: 'Tümünü Gör',
    explore: 'Keşfet',
  },
};

// ── Active language ──
let currentLang = localStorage.getItem('cv_lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('cv_lang', lang);
  document.documentElement.lang = lang;
  document.body.setAttribute('dir', translations[lang].dir);
  if (translations[lang].dir === 'rtl') {
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
  }
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  renderPage(lang);
}

function t(path) {
  const keys = path.split('.');
  let val = translations[currentLang];
  for (const k of keys) {
    val = val?.[k];
    if (val === undefined) return '';
  }
  return val;
}

function renderPage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = (() => {
      const keys = key.split('.');
      let v = translations[lang];
      for (const k of keys) v = v?.[k];
      return v;
    })();
    if (val !== undefined) {
      if (el.dataset.i18nHtml) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  setLang(currentLang);
});
