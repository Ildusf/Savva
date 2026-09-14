/* Savva Coffee — site scripts
   Menu data, EN/AR switch, tabs, open/closed status, small UI bits. */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------
     Menu data (from the printed menu, Sept 2026). Prices in SAR.
     --------------------------------------------------------------------- */
  var MENU = {
    hot: {
      title: { en: 'Hot drinks', ar: 'المشروبات الحارة' },
      intro: { en: 'Espresso classics, teas, Turkish coffee and the slow bar.', ar: 'كلاسيكيات الإسبريسو، الشاي، القهوة التركية والبار البطيء.' },
      items: [
        { en: 'Espresso', ar: 'إسبريسو', price: '11', cal: 2 },
        { en: 'Americano', ar: 'أمريكانو', price: '12', cal: 2 },
        { en: 'Cortado', ar: 'كورتادو', price: '14', cal: 50 },
        { en: 'Macchiato', ar: 'ميكاتو', price: '13', cal: 13 },
        { en: 'Flat White', ar: 'فلات وايت', price: '15', cal: 50 },
        { en: 'Latte', ar: 'لاتيه', price: '16', cal: 75 },
        { en: 'Cappuccino', ar: 'كابتشينو', price: '16', cal: 60 },
        { en: 'Spanish Latte', ar: 'سبانش لاتيه', price: '18', cal: 178 },
        { en: 'Matcha Latte', ar: 'ماتشا لاتيه', price: '16', cal: 75 },
        { en: 'White Mocha', ar: 'وايت موكا', price: '16', cal: 230 },
        { en: 'Hot Chocolate', ar: 'هوت شوكليت', price: '15', cal: 237 },
        { en: 'English Tea', ar: 'شاي إنجليزي', price: '6', cal: 2 },
        { en: 'Turkish Coffee', ar: 'تركي سادة', price: '11', cal: 50 },
        { en: 'Turkish Coffee with Milk', ar: 'تركي حليب', price: '13', cal: 50 },
        { en: 'Coffee of the Day · hot / iced', ar: 'قهوة اليوم · بارد / حار', price: '10–13', tag: { en: 'Daily', ar: 'يومي' } },
        { en: 'Drip Coffee · V60 / Ice Drip', ar: 'قهوة مقطّرة · V60 / آيس دريب', price: '18', tag: { en: 'Slow bar', ar: 'البار البطيء' } }
      ]
    },
    cold: {
      title: { en: 'Cold drinks', ar: 'المشروبات الباردة' },
      intro: { en: 'Iced espresso, matcha, house teas and slushes for the Madinah heat.', ar: 'إسبريسو مثلّج، ماتشا، شاي البيت وسلاش لحرّ المدينة.' },
      items: [
        { en: 'Iced Americano', ar: 'آيس أمريكانو', price: '15', cal: 2 },
        { en: 'Alfredo', ar: 'ألفريدو', price: '14', cal: 100 },
        { en: 'Iced Latte', ar: 'آيس لاتيه', price: '17', cal: 100 },
        { en: 'Iced Spanish Latte', ar: 'آيس سبانيش لاتيه', price: '19', cal: 230 },
        { en: 'Iced Matcha Latte', ar: 'آيس ماتشا لاتيه', price: '17', cal: 130 },
        { en: 'Iced Matcha Spanish Latte', ar: 'آيس ماتشا سبانيش لاتيه', price: '19', cal: 230 },
        { en: 'Savva Matcha', ar: 'سافا ماتشا', price: '22', cal: 2, tag: { en: 'Signature', ar: 'بتوقيع سافا' } },
        { en: 'Matcha Berry', ar: 'ماتشا بيري', price: '24', cal: 230, tag: { en: 'Signature', ar: 'بتوقيع سافا' } },
        { en: 'Ice Tea Savva', ar: 'آيس تي سافا', price: '17', cal: 189, tag: { en: 'Signature', ar: 'بتوقيع سافا' } },
        { en: 'Ice Hibiscus Savva', ar: 'آيس كركديه سافا', price: '17', cal: 180, tag: { en: 'Signature', ar: 'بتوقيع سافا' } },
        { en: 'Hibiscus Slush Savva', ar: 'سلاش كركديه سافا', price: '17', cal: 180, tag: { en: 'Signature', ar: 'بتوقيع سافا' } },
        { en: 'Ice Shaken', ar: 'آيس شيكن', price: '20', cal: 231 },
        { en: 'Ice White Mocha', ar: 'آيس وايت موكا', price: '19', cal: 230 },
        { en: 'Ice Chocolate', ar: 'آيس شوكلت', price: '17', cal: 230 },
        { en: 'Savva Melon', ar: 'شمام سافا', price: '16', cal: 50, tag: { en: 'Signature', ar: 'بتوقيع سافا' } }
      ]
    },
    desserts: {
      title: { en: 'Desserts', ar: 'الحلى' },
      intro: { en: 'Baked every morning in our own oven.', ar: 'تُخبز كل صباح في فرننا.' },
      items: [
        { en: 'Madini Cookies', ar: 'مديني كوكيز', price: '12', cal: 170, tag: { en: 'House favourite', ar: 'الأكثر طلبًا' } },
        { en: 'Cinnamon Danish', ar: 'دانيش سينابون', price: '19', cal: 170 },
        { en: 'Marble Cake', ar: 'ماربل كيك', price: '11', cal: 170 },
        { en: 'Crunchy Chocolate', ar: 'كرانشي شوكلت', price: '8', cal: 170 },
        { en: 'Blueberry Cheesecake', ar: 'تشيز كيك بلوبيري', price: '27', cal: 170 },
        { en: 'Pecan Cake', ar: 'كيكة البيكان', price: '21', cal: 170 },
        { en: 'Chocolate Cake', ar: 'كيكة شوكلت', price: '18', cal: 170 }
      ]
    },
    breakfast: {
      title: { en: 'Breakfast', ar: 'الفطور' },
      intro: { en: 'Warm sandwiches, served all day.', ar: 'ساندوتشات دافئة، تُقدَّم طوال اليوم.' },
      items: [
        { en: 'Turkey Sandwich', ar: 'ساندوتش تركي', price: '19', cal: 300 },
        { en: 'Halloumi Sandwich', ar: 'ساندوتش حلوم', price: '18', cal: 300 }
      ]
    }
  };

  /* ---------------------------------------------------------------------
     UI strings
     --------------------------------------------------------------------- */
  var I18N = {
    en: {
      'skip': 'Skip to menu',
      'nav.menu': 'Menu', 'nav.story': 'Our story', 'nav.visit': 'Visit', 'nav.gallery': 'Gallery',
      'nav.findus': 'Bir Uthman, Madinah', 'nav.call': 'Call us', 'nav.directions': 'Get directions',
      'hero.eyebrow': 'Specialty coffee · Madinah',
      'hero.title': 'A day in Savva is what you need to be Savva.',
      'hero.lede': 'Slow-brewed V60, signature matcha and the softest Madini cookies in town — served in a calm corner of Bir Uthman, from sunrise to well past midnight.',
      'hero.cta1': 'See the menu', 'hero.cta2': 'Find us',
      'f1.eyebrow': 'Slow bar', 'f1.title': 'V60, brewed one cup at a time.',
      'f1.text': 'Single-origin beans, a careful pour and three minutes of patience. Ask the barista what is on the drip today — hot or over ice.',
      'f1.cta': 'Explore hot drinks',
      'f2.eyebrow': 'Signature', 'f2.title': 'Savva Matcha &amp; Matcha Berry.',
      'f2.text': 'Ceremonial-grade matcha whisked to order — pure, with Spanish-style milk, or layered over berries. Bright green, cold, and unmistakably ours.',
      'f2.cta': 'See cold drinks',
      'f3.eyebrow': 'From the oven', 'f3.title': 'Madini cookies, baked here.',
      'f3.text': 'Our take on the local classic: soft centre, golden edge, a scatter of black seeds. Pair one with a cortado and stay a while.',
      'f3.cta': 'Desserts &amp; breakfast',
      'menu.eyebrow': 'Menu', 'menu.title': 'What we are pouring.',
      'menu.sub': 'Prices in Saudi Riyals. Calories shown per serving.',
      'menu.hot': 'Hot drinks', 'menu.cold': 'Cold drinks', 'menu.desserts': 'Desserts', 'menu.breakfast': 'Breakfast',
      'menu.pdf': 'Download the full menu (PDF)',
      'menu.note': 'Menu and prices may change. Please tell us about any allergies.',
      'story.eyebrow': 'Our story', 'story.title': 'A quiet corner of Madinah, built around good coffee.',
      'story.p1': 'Savva started with a simple idea: a place in Bir Uthman where the coffee is taken seriously and everything else is taken slow. No rush at the counter, no noise in the room — just carefully sourced beans, a barista who remembers your order, and light that changes with the day.',
      'story.p2': 'We brew espresso, V60 and drip; we whisk matcha by hand; we blend hibiscus into slush for the hot afternoons. And we bake — Madini cookies, cinnamon danish, pecan cake — every morning before the doors open at 6:30.',
      'story.quote': '“A day in Savva is what you need to be Savva.”',
      'story.badge': '700+ Google reviews',
      'story.fact1s': 'average Google rating', 'story.fact2s': 'open every day', 'story.fact3s': 'drinks &amp; bakes on the menu',
      'visit.eyebrow': 'Visit', 'visit.title': 'Come find us.',
      'visit.addr': 'Address', 'visit.addrline': 'Zubairah Al Roumiah, Bir Uthman<br>Madinah 42331, Saudi Arabia',
      'visit.open': 'Open in Google Maps', 'visit.hours': 'Opening hours', 'visit.daily': 'Every day',
      'visit.contact': 'Contact', 'visit.wa': 'Message on WhatsApp',
      'gallery.title': 'Moments from the café.', 'gallery.cta': 'Follow @savva_cafe',
      'band.title': 'Open until 2 AM. The night is long, the coffee is ready.',
      'foot.explore': 'Explore', 'foot.menu': 'Menu', 'foot.visit': 'Visit', 'foot.social': 'Social',
      'foot.addrline': 'Zubairah Al Roumiah, Bir Uthman<br>Madinah 42331',
      'foot.rights': 'All rights reserved.', 'foot.privacy': 'Privacy', 'foot.terms': 'Terms',
      'status.open': 'Open now · closes 2:00 AM', 'status.closed': 'Closed now · opens 6:30 AM',
      'cal': 'cal', 'sar': 'SAR',
      'strip': ['Specialty coffee', 'V60 & drip', 'Savva matcha', 'Hibiscus slush', 'Madini cookies', 'Open 6:30 AM – 2:00 AM']
    },
    ar: {
      'skip': 'انتقل إلى القائمة',
      'nav.menu': 'القائمة', 'nav.story': 'قصتنا', 'nav.visit': 'زورونا', 'nav.gallery': 'المعرض',
      'nav.findus': 'بئر عثمان، المدينة المنورة', 'nav.call': 'اتصل بنا', 'nav.directions': 'الاتجاهات',
      'hero.eyebrow': 'قهوة مختصة · المدينة المنورة',
      'hero.title': 'يوم في سافا هو كل ما تحتاجه لتكون سافا.',
      'hero.lede': 'قهوة V60 مقطّرة على مهل، ماتشا بتوقيعنا، وألين كوكيز مديني في المدينة — في ركن هادئ من بئر عثمان، من الفجر حتى ما بعد منتصف الليل.',
      'hero.cta1': 'تصفّح القائمة', 'hero.cta2': 'موقعنا',
      'f1.eyebrow': 'البار البطيء', 'f1.title': 'V60، كوب واحد في كل مرة.',
      'f1.text': 'حبوب من مصدر واحد، صبّ متأنٍ وثلاث دقائق من الصبر. اسأل الباريستا عن قهوة اليوم — ساخنة أو على الثلج.',
      'f1.cta': 'المشروبات الحارة',
      'f2.eyebrow': 'بتوقيع سافا', 'f2.title': 'سافا ماتشا وماتشا بيري.',
      'f2.text': 'ماتشا بدرجة احتفالية تُخفق عند الطلب — صافية، مع حليب على الطريقة الإسبانية، أو فوق طبقة من التوت. خضراء زاهية، باردة، ولا تُشبه إلا سافا.',
      'f2.cta': 'المشروبات الباردة',
      'f3.eyebrow': 'من الفرن', 'f3.title': 'كوكيز مديني، تُخبز هنا.',
      'f3.text': 'نسختنا من الكلاسيكية المحلية: قلب طري، حافة ذهبية، ورشّة من الحبة السوداء. اطلبها مع كورتادو وابقَ قليلًا.',
      'f3.cta': 'الحلى والفطور',
      'menu.eyebrow': 'القائمة', 'menu.title': 'ماذا نقدّم اليوم.',
      'menu.sub': 'الأسعار بالريال السعودي. السعرات الحرارية لكل حصة.',
      'menu.hot': 'المشروبات الحارة', 'menu.cold': 'المشروبات الباردة', 'menu.desserts': 'الحلى', 'menu.breakfast': 'الفطور',
      'menu.pdf': 'تحميل القائمة الكاملة (PDF)',
      'menu.note': 'قد تتغير القائمة والأسعار. يرجى إبلاغنا بأي حساسية غذائية.',
      'story.eyebrow': 'قصتنا', 'story.title': 'ركن هادئ في المدينة، يدور حول القهوة الجيدة.',
      'story.p1': 'بدأت سافا بفكرة بسيطة: مكان في بئر عثمان تُؤخذ فيه القهوة على محمل الجد، وكل ما عداها على مهل. لا عجلة عند الكاونتر، ولا ضجيج في المكان — فقط حبوب مختارة بعناية، باريستا يتذكّر طلبك، وضوء يتغيّر مع ساعات النهار.',
      'story.p2': 'نحضّر الإسبريسو وV60 والقهوة المقطّرة؛ نخفق الماتشا يدويًا؛ ونمزج الكركديه سلاش لعصر الظهيرة الحارّ. ونخبز — كوكيز مديني، دانيش سينابون، كيكة البيكان — كل صباح قبل أن نفتح الأبواب في 6:30.',
      'story.quote': '«يوم في سافا هو كل ما تحتاجه لتكون سافا.»',
      'story.badge': 'أكثر من 700 تقييم على قوقل',
      'story.fact1s': 'متوسط التقييم على قوقل', 'story.fact2s': 'ساعة نفتح فيها يوميًا', 'story.fact3s': 'مشروبًا ومخبوزات في القائمة',
      'visit.eyebrow': 'زورونا', 'visit.title': 'نلتقي في بئر عثمان.',
      'visit.addr': 'العنوان', 'visit.addrline': 'زبيرة الرومية، بئر عثمان<br>المدينة المنورة 42331، المملكة العربية السعودية',
      'visit.open': 'افتح في خرائط قوقل', 'visit.hours': 'ساعات العمل', 'visit.daily': 'يوميًا',
      'visit.contact': 'التواصل', 'visit.wa': 'راسلنا على واتساب',
      'gallery.title': 'لحظات من المقهى.', 'gallery.cta': 'تابعنا @savva_cafe',
      'band.title': 'نفتح حتى 2 صباحًا. الليل طويل، والقهوة جاهزة.',
      'foot.explore': 'استكشف', 'foot.menu': 'القائمة', 'foot.visit': 'زورونا', 'foot.social': 'تواصل معنا',
      'foot.addrline': 'زبيرة الرومية، بئر عثمان<br>المدينة المنورة 42331',
      'foot.rights': 'جميع الحقوق محفوظة.', 'foot.privacy': 'الخصوصية', 'foot.terms': 'الشروط',
      'status.open': 'مفتوح الآن · يغلق 2:00 ص', 'status.closed': 'مغلق الآن · يفتح 6:30 ص',
      'cal': 'سعرة', 'sar': 'ر.س',
      'strip': ['قهوة مختصة', 'V60 ومقطّرة', 'سافا ماتشا', 'كركديه سلاش', 'كوكيز مديني', 'نفتح 6:30 ص – 2:00 ص']
    }
  };

  var lang = 'en';
  try { lang = localStorage.getItem('savva-lang') === 'ar' ? 'ar' : 'en'; } catch (e) { /* ignore */ }

  /* ---------------------------------------------------------------------
     Menu rendering
     --------------------------------------------------------------------- */
  var panelsEl = document.getElementById('menuPanels');
  var tabsEl = document.getElementById('menuTabs');
  var activeCat = 'hot';

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderMenu() {
    var t = I18N[lang];
    var html = '';
    Object.keys(MENU).forEach(function (cat) {
      var c = MENU[cat];
      html += '<div class="menu-panel" id="panel-' + cat + '" role="tabpanel" aria-labelledby="tab-' + cat + '"' +
              (cat === activeCat ? '' : ' hidden') + '>';
      html += '<p class="panel-intro">' + esc(c.intro[lang]) + '</p>';
      html += '<div class="menu-list">';
      c.items.forEach(function (it) {
        html += '<div class="item">';
        html += '<div class="item-names">';
        html += '<span class="n-en">' + esc(it.en) + '</span>';
        html += '<span class="n-ar" lang="ar">' + esc(it.ar) + '</span>';
        var meta = '';
        if (it.tag) meta += '<span class="tag">' + esc(it.tag[lang]) + '</span>';
        if (it.cal !== undefined) meta += '<span>' + it.cal + ' ' + t['cal'] + '</span>';
        if (meta) html += '<div class="item-meta">' + meta + '</div>';
        html += '</div>';
        html += '<span class="price"><small>' + t['sar'] + '</small>' + esc(it.price) + '</span>';
        html += '</div>';
      });
      html += '</div></div>';
    });
    panelsEl.innerHTML = html;
  }

  function selectCat(cat, scroll) {
    if (!MENU[cat]) return;
    activeCat = cat;
    Array.prototype.forEach.call(tabsEl.querySelectorAll('[role="tab"]'), function (b) {
      b.setAttribute('aria-selected', b.getAttribute('data-cat') === cat ? 'true' : 'false');
    });
    Array.prototype.forEach.call(panelsEl.querySelectorAll('.menu-panel'), function (p) {
      p.hidden = p.id !== 'panel-' + cat;
    });
    if (scroll) {
      var target = document.getElementById('menu');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  tabsEl.addEventListener('click', function (e) {
    var b = e.target.closest('[role="tab"]');
    if (b) selectCat(b.getAttribute('data-cat'), false);
  });
  tabsEl.addEventListener('keydown', function (e) {
    var tabs = Array.prototype.slice.call(tabsEl.querySelectorAll('[role="tab"]'));
    var i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    var next = null;
    if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
    if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
    if (next) { e.preventDefault(); next.focus(); selectCat(next.getAttribute('data-cat'), false); }
  });

  Array.prototype.forEach.call(document.querySelectorAll('[data-cat-link]'), function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      closeMobileNav();
      selectCat(a.getAttribute('data-cat-link'), true);
    });
  });

  /* ---------------------------------------------------------------------
     Language switch
     --------------------------------------------------------------------- */
  var langBtn = document.getElementById('langToggle');

  function applyLang(next) {
    lang = next;
    var t = I18N[lang];
    var root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    var track = document.querySelector('.strip-track');
    if (track) {
      var parts = t['strip'].map(function (s) { return '<span>' + esc(s) + '</span><i>✦</i>'; }).join('');
      track.innerHTML = parts + parts;
    }
    langBtn.textContent = lang === 'ar' ? 'English' : 'عربي';
    langBtn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    document.title = lang === 'ar' ? 'سافا — قهوة مختصة في المدينة المنورة' : 'Savva Coffee — Specialty coffee in Madinah';
    renderMenu();
    updateStatus();
    try { localStorage.setItem('savva-lang', lang); } catch (e) { /* ignore */ }
  }

  langBtn.addEventListener('click', function () {
    applyLang(lang === 'ar' ? 'en' : 'ar');
  });

  /* ---------------------------------------------------------------------
     Open / closed status (Asia/Riyadh, 06:30–02:00)
     --------------------------------------------------------------------- */
  var statusEl = document.getElementById('openStatus');

  function riyadhMinutes() {
    try {
      var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Riyadh', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      var h = 0, m = 0;
      parts.forEach(function (p) {
        if (p.type === 'hour') h = parseInt(p.value, 10) % 24;
        if (p.type === 'minute') m = parseInt(p.value, 10);
      });
      return h * 60 + m;
    } catch (e) {
      var d = new Date();
      return d.getHours() * 60 + d.getMinutes();
    }
  }

  function updateStatus() {
    if (!statusEl) return;
    var mins = riyadhMinutes();
    var open = mins >= 6 * 60 + 30 || mins < 2 * 60;
    statusEl.textContent = I18N[lang][open ? 'status.open' : 'status.closed'];
    statusEl.classList.toggle('closed', !open);
  }
  setInterval(updateStatus, 60000);

  /* ---------------------------------------------------------------------
     Mobile nav
     --------------------------------------------------------------------- */
  var burger = document.getElementById('burger');
  var mobileNav = document.getElementById('mobileNav');

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () {
    var open = !mobileNav.classList.contains('open');
    mobileNav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  Array.prototype.forEach.call(mobileNav.querySelectorAll('a'), function (a) {
    a.addEventListener('click', closeMobileNav);
  });

  /* ---------------------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    Array.prototype.forEach.call(revealEls, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(revealEls, function (el) { el.classList.add('in'); });
  }

  /* ---------------------------------------------------------------------
     Misc
     --------------------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  applyLang(lang);
})();
