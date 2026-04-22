/* ==========================================================
   GURU GAME — script.js
   ========================================================== */

(function () {
  'use strict';

  /* ===== THEME ===== */
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('guru-theme') || 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '');
    if (themeToggle) themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('guru-theme', theme);
  }

  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = localStorage.getItem('guru-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ===== TRANSLATIONS ===== */
  const translations = {
    en: {
      nav: {
        locations: 'Locations',
        pricing: 'Pricing',
        booking: 'Booking',
        guru_card: 'Guru Card',
        reserve_now: 'Reserve Now'
      },
      hero: {
        book_session: 'Book a Session →',
        view_pricing: 'View Prices'
      },
      locations: {
        vaja_kicker: '01 — Vaja-Pshavela',
        vaja_title: 'Vaja-Pshavela Ave. 19',
        digomi_kicker: '02 — Didi Digomi',
        digomi_title: 'Didi Digomi, 4 Petre Iberi St',
        open_ps5: 'Open Area PS5',
        open_ps5_desc: 'Open gaming zone with PS5 — perfect for casual play and walk-ins.',
        small_vip: 'Small VIP',
        small_vip_desc: 'Compact private room with PS5, ideal for solo sessions or a duo.',
        standard_vip: 'Standard VIP',
        standard_vip_desc: 'Private room with PS5, premium peripherals, and dedicated seating.',
        theater: 'Projector',
        theater_desc: 'Large-screen projector setup for group gaming and cinematic experiences.',
        xbox_wheels: 'Xbox + Wheel',
        xbox_wheels_desc: 'Xbox Series X with a full racing wheel rig — the ultimate sim racing setup.',
        vip: 'VIP',
        vip_desc: 'Private room with PS5 and premium peripherals for an elevated experience.',
        ultra_vip: 'Ultra VIP',
        ultra_vip_desc: 'The premium suite — top-tier setup, exclusive access, and the ultimate gaming environment.',
        games_title: 'Available Games',
        games_soon: 'Games coming soon'
      },
      pricing: {
        kicker: '',
        title: 'Hourly Rates',
        note: 'All prices are per hour.',
        gamepads_2: '2 gamepads',
        gamepads_4: '4 gamepads',
        gamepads_2_4: '2–4 gamepads',
        movie: 'Movie screening',
        per_session: 'per session'
      },
      booking: {
        kicker: '',
        title: 'Book a session.',
        desc: 'Choose your location, pick a room number and time — we\'ll have everything ready when you arrive.',
        location: 'Location',
        select_location: 'Select location',
        loc_vaja: 'Vaja-Pshavela',
        loc_digomi: 'Didi Digomi',
        name: 'Name',
        room_number: 'Room Number',
        select_room_number: 'Select room number',
        date: 'Date',
        time_slot: 'Time Slot',
        select_time: 'Select time',
        confirm: 'Confirm Reservation',
        msg_missing: '⚠ Please fill in all fields.',
        msg_confirmed: '✓ Reservation confirmed. We\'ll have everything ready when you arrive.'
      },
      guru: {
        kicker: '',
        title: 'Guru Card.',
        desc: 'Every hour you play earns points. Redeem for free sessions or snacks. Come to Guru Game in person or register card yourself, card will be available in few days.',
        points_info: 'Get 1 Guru Point for 1 lari spent, 1 Guru Point is xx Lari',
        perk1: 'points on tournament nights',
        perk2: 'off every booked session',
        perk3: 'access to new game releases',
        member: 'Member',
        points: 'Points',
        fineprint: "By registering you agree to Guru Game's rewards terms. Points never expire while your card is active.",
        reg_name: 'Name',
        reg_surname: 'Surname',
        reg_phone: 'Phone Number',
        reg_submit: 'Register Card',
        reg_missing: '⚠ Please fill in all fields.',
        reg_confirmed: '✓ Registration submitted. Visit us to collect your card.'
      },
      footer: {
        copyright: '© 2026 Guru Game. All rights reserved.'
      }
    },

    ka: {
      nav: {
        locations: 'ლოკაციები',
        pricing: 'ფასები',
        booking: 'ჯავშანი',
        guru_card: 'გურუ ბარათი',
        reserve_now: 'დაჯავშნე'
      },
      hero: {
        book_session: 'სეანსის დაჯავშნა →',
        view_pricing: 'ფასების ნახვა'
      },
      locations: {
        vaja_kicker: '01 — ვაჟა-ფშაველა',
        vaja_title: 'ვაჟა-ფშაველას გამზ. 19',
        digomi_kicker: '02 — დიდი დიღომი',
        digomi_title: 'დიდი დიღომი, პეტრე იბერის 4',
        open_ps5: 'ღია ზონა PS5',
        open_ps5_desc: 'ღია სათამაშო ზონა PS5-ით — შესანიშნავია კაზუალური თამაშისა და walk-in-ებისთვის.',
        small_vip: 'მცირე VIP',
        small_vip_desc: 'კომპაქტური პირადი ოთახი PS5-ით, იდეალური სოლო ან დუო სეანსებისთვის.',
        standard_vip: 'სტანდარტული VIP',
        standard_vip_desc: 'პირადი ოთახი PS5-ით, პრემიუმ პერიფერიითა და გამოყოფილი ადგილებით.',
        theater: 'პროჯექტორი',
        theater_desc: 'დიდი ეკრანის პროჯექტორი ჯგუფური გეიმინგისა და კინემატოგრაფიული განცდებისთვის.',
        xbox_wheels: 'Xbox + ბორბალი',
        xbox_wheels_desc: 'Xbox Series X სრული სარბოლო ბორბლის ტრენაჟორით — საბოლოო სიმ-რეისინგის სეტაპი.',
        vip: 'VIP',
        vip_desc: 'პირადი ოთახი PS5-ითა და პრემიუმ პერიფერიით — განსაკუთრებული განცდისთვის.',
        ultra_vip: 'Ultra VIP',
        ultra_vip_desc: 'პრემიუმ სუიტი — უმაღლესი კლასის სეტაპი, ექსკლუზიური წვდომა და საუკეთესო გეიმინგ გარემო.',
        games_title: 'ხელმისაწვდომი თამაშები',
        games_soon: 'თამაშები მალე'
      },
      pricing: {
        kicker: '',
        title: 'საათობრივი ტარიფები',
        note: 'ყველა ფასი მითითებულია ერთი საათისთვის.',
        gamepads_2: '2 გეიმპადი',
        gamepads_4: '4 გეიმპადი',
        gamepads_2_4: '2–4 გეიმპადი',
        movie: 'ფილმის ჩვენება',
        per_session: 'სეანსი'
      },
      booking: {
        kicker: '',
        title: 'დაჯავშნე სეანსი.',
        desc: 'აირჩიე ლოკაცია, ოთახის ნომერი და დრო — ყველაფერი მზად იქნება შენი მოსვლისთვის.',
        location: 'ლოკაცია',
        select_location: 'აირჩიე ლოკაცია',
        loc_vaja: 'ვაჟა-ფშაველა',
        loc_digomi: 'დიდი დიღომი',
        name: 'სახელი',
        room_number: 'ოთახის ნომერი',
        select_room_number: 'აირჩიე ოთახის ნომერი',
        date: 'თარიღი',
        time_slot: 'დრო',
        select_time: 'აირჩიე დრო',
        confirm: 'ჯავშნის დადასტურება',
        msg_missing: '⚠ გთხოვთ შეავსოთ ყველა ველი.',
        msg_confirmed: '✓ ჯავშანი დადასტურებულია. ყველაფერი მზად იქნება შენი მოსვლისთვის.'
      },
      guru: {
        kicker: '',
        title: 'გურუ ბარათი.',
        desc: 'ყოველი სათამაშო საათი გაძლევს ქულებს. გამოიყენე უფასო სეანსებზე ან საჭმელზე. მოდი Guru Game-ში პირადად ან დარეგისტრირდი თვითონ — ბარათი რამდენიმე დღეში გახდება ხელმისაწვდომი.',
        points_info: '1 ლარის დახარჯვაზე — 1 გურუ ქულა, 1 გურუ ქულა = xx ლარი',
        perk1: 'ქულები ტურნირის ღამეებში',
        perk2: 'ფასდაკლება ყოველ სეანსზე',
        perk3: 'პირველი წვდომა ახალ თამაშებზე',
        member: 'წევრი',
        points: 'ქულები',
        fineprint: 'რეგისტრაციით ეთანხმები Guru Game-ის ჯილდოების პირობებს. ქულები არასდროს იწურება სანამ ბარათი აქტიურია.',
        reg_name: 'სახელი',
        reg_surname: 'გვარი',
        reg_phone: 'ტელეფონის ნომერი',
        reg_submit: 'ბარათის რეგისტრაცია',
        reg_missing: '⚠ გთხოვთ შეავსოთ ყველა ველი.',
        reg_confirmed: '✓ განაცხადი გაგზავნილია. მოდი ჩვენთან ბარათის გასაფორმებლად.'
      },
      footer: {
        copyright: '© 2026 Guru Game. ყველა უფლება დაცულია.'
      }
    },

    ru: {
      nav: {
        locations: 'Локации',
        pricing: 'Цены',
        booking: 'Бронирование',
        guru_card: 'Карта Guru',
        reserve_now: 'Забронировать'
      },
      hero: {
        book_session: 'Забронировать сеанс →',
        view_pricing: 'Смотреть цены'
      },
      locations: {
        vaja_kicker: '01 — Важа-Пшавела',
        vaja_title: 'пр. Важа-Пшавела, 19',
        digomi_kicker: '02 — Диди Дигоми',
        digomi_title: 'Диди Дигоми, ул. Петре Ибери, 4',
        open_ps5: 'Открытая зона PS5',
        open_ps5_desc: 'Открытая игровая зона с PS5 — идеально для casual-игры и walk-in.',
        small_vip: 'Малый VIP',
        small_vip_desc: 'Компактная частная комната с PS5, идеальна для соло или дуо сеанса.',
        standard_vip: 'Стандартный VIP',
        standard_vip_desc: 'Частная комната с PS5, профессиональной периферией и выделенными местами.',
        theater: 'Проектор',
        theater_desc: 'Большой экран проектора для групповой игры и кинематографических впечатлений.',
        xbox_wheels: 'Xbox + Руль',
        xbox_wheels_desc: 'Xbox Series X с профессиональным рулём — максимальный симулятор гонок.',
        vip: 'VIP',
        vip_desc: 'Частная комната с PS5 и профессиональной периферией для особого опыта.',
        ultra_vip: 'Ultra VIP',
        ultra_vip_desc: 'Премиум-сюит — топовый сетап, эксклюзивный доступ и лучшая игровая среда.',
        games_title: 'Доступные игры',
        games_soon: 'Игры скоро'
      },
      pricing: {
        kicker: '',
        title: 'Почасовые тарифы',
        note: 'Все цены указаны за один час.',
        gamepads_2: '2 геймпада',
        gamepads_4: '4 геймпада',
        gamepads_2_4: '2–4 геймпада',
        movie: 'Кинопоказ',
        per_session: 'за сеанс'
      },
      booking: {
        kicker: '',
        title: 'Забронировать сеанс.',
        desc: 'Выберите локацию, номер комнаты и время — всё будет готово к вашему приходу.',
        location: 'Локация',
        select_location: 'Выберите локацию',
        loc_vaja: 'Важа-Пшавела',
        loc_digomi: 'Диди Дигоми',
        name: 'Имя',
        room_number: 'Номер комнаты',
        select_room_number: 'Выберите номер комнаты',
        date: 'Дата',
        time_slot: 'Временной слот',
        select_time: 'Выберите время',
        confirm: 'Подтвердить бронирование',
        msg_missing: '⚠ Пожалуйста, заполните все поля.',
        msg_confirmed: '✓ Бронирование подтверждено. Всё будет готово к вашему приходу.'
      },
      guru: {
        kicker: '',
        title: 'Карта Guru.',
        desc: 'Каждый час игры приносит очки. Обменивайте на бесплатные сеансы, закуски или мерч. Приходите в Guru Game лично или зарегистрируйте карту самостоятельно — карта будет доступна через несколько дней.',
        points_info: 'За каждый потраченный 1 лари — 1 Guru Point, 1 Guru Point = xx лари',
        perk1: 'очки в ночи турниров',
        perk2: 'скидка на каждый сеанс',
        perk3: 'первый доступ к новым играм',
        member: 'Участник',
        points: 'Очки',
        fineprint: 'Регистрируясь, вы соглашаетесь с условиями программы лояльности Guru Game. Очки не истекают, пока карта активна.',
        reg_name: 'Имя',
        reg_surname: 'Фамилия',
        reg_phone: 'Номер телефона',
        reg_submit: 'Зарегистрировать карту',
        reg_missing: '⚠ Пожалуйста, заполните все поля.',
        reg_confirmed: '✓ Заявка отправлена. Приходите к нам за картой.'
      },
      footer: {
        copyright: '© 2026 Guru Game. Все права защищены.'
      }
    }
  };

  /* ===== i18n ENGINE ===== */
  let currentLang = localStorage.getItem('nexus-lang') || 'ka';

  const langFlags = { en: '🇬🇧', ka: '🇬🇪', ru: '🇷🇺' };

  function getVal(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  }

  function t(key) {
    return getVal(translations[currentLang], key)
        ?? getVal(translations.en, key)
        ?? key;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = t(el.dataset.i18n);
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const val = t(el.dataset.i18nHtml);
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const val = t(el.dataset.i18nPlaceholder);
      if (val !== undefined) el.placeholder = val;
    });

    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) langCurrent.textContent = `${langFlags[currentLang] || ''} ${currentLang.toUpperCase()}`;

    document.querySelectorAll('#langDropdown button').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    document.documentElement.lang = currentLang;

    // Re-populate room select when language changes
    const locationSelect = document.getElementById('locationSelect');
    if (locationSelect && locationSelect.value) {
      updateRooms(locationSelect.value);
    }
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('nexus-lang', lang);
    applyTranslations();
    closeLangDropdown();
  }

  /* ===== LANG SWITCHER ===== */
  const langSwitcher = document.getElementById('langSwitcher');
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  function closeLangDropdown() {
    if (langDropdown) langDropdown.classList.remove('open');
    if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
  }

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', String(isOpen));
    });

    langDropdown.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    document.addEventListener('click', (e) => {
      if (langSwitcher && !langSwitcher.contains(e.target)) closeLangDropdown();
    });
  }

  applyTranslations();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileMenu.hidden = !isOpen;
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenu.hidden = true;
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Smooth scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href.length <= 1) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- CTA buttons ---------- */
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const reserveBtn = document.getElementById('reserveNavBtn');
  const bookHeroBtn = document.getElementById('bookHeroBtn');
  const viewPricingBtn = document.getElementById('viewPricingBtn');

  if (reserveBtn) reserveBtn.addEventListener('click', () => scrollToId('booking'));
  if (bookHeroBtn) bookHeroBtn.addEventListener('click', () => scrollToId('booking'));
  if (viewPricingBtn) viewPricingBtn.addEventListener('click', () => scrollToId('pricing'));

  /* ---------- Dynamic room select ---------- */
  function generateTimeSlots(startH, startM, endH, endM) {
    const slots = [];
    let cur = startH * 60 + startM;
    let end = endH * 60 + endM;
    if (end <= cur) end += 24 * 60;
    while (cur < end) {
      const h = Math.floor(cur / 60) % 24;
      const m = cur % 60;
      const label = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      slots.push(label);
      cur += 30;
    }
    return slots;
  }

  const locationTimeSlots = {
    vaja:   generateTimeSlots(12, 0, 4, 0),
    digomi: generateTimeSlots(15, 0, 2, 0)
  };

  function updateTimeSlots(location) {
    const timeSelect = document.getElementById('timeSelect');
    if (!timeSelect) return;
    timeSelect.innerHTML = `<option value="">${t('booking.select_time')}</option>`;
    (locationTimeSlots[location] || []).forEach((label) => {
      const opt = document.createElement('option');
      opt.value = label;
      opt.textContent = label;
      timeSelect.appendChild(opt);
    });
  }

  const locationRooms = {
    vaja:   ['open_area', 'small_vip', 'standard_vip', 'theater'],
    digomi: ['open_area', 'forza', 'standard_vip', 'ultra_vip']
  };

  const locationRoomNumbers = {
    vaja:   [],
    digomi: ['Open 1', 'Open 2', 'Open 3', 'VIP 1', 'VIP 2', 'VIP 3', 'VIP 4', 'Ultra VIP', 'Wheel 1', 'Wheel 2', 'Wheel 3']
  };

  function updateRooms(location) {
    const roomSelect = document.getElementById('roomSelect');
    if (!roomSelect) return;
    roomSelect.innerHTML = `<option value="">${t('booking.select_room')}</option>`;
    (locationRooms[location] || []).forEach((key) => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = t(`booking.room_${key}`);
      roomSelect.appendChild(opt);
    });
  }

  function updateRoomNumbers(location) {
    const roomNumberSelect = document.getElementById('roomNumberSelect');
    if (!roomNumberSelect) return;
    roomNumberSelect.innerHTML = `<option value="">${t('booking.select_room_number')}</option>`;
    (locationRoomNumbers[location] || []).forEach((name) => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      roomNumberSelect.appendChild(opt);
    });
  }

  const locationSelect = document.getElementById('locationSelect');
  if (locationSelect) {
    locationSelect.addEventListener('change', () => {
      updateRooms(locationSelect.value);
      updateRoomNumbers(locationSelect.value);
      updateTimeSlots(locationSelect.value);
    });
  }

  /* ---------- Booking form ---------- */
  const bookingForm = document.getElementById('bookingForm');
  const formStatus = document.getElementById('formStatus');

  if (bookingForm) {
    const dateInput = bookingForm.querySelector('input[type="date"]');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
    }

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(bookingForm);
      const location = data.get('location');
      const date = data.get('date');
      const name = (data.get('name') || '').trim();
      const roomNumber = (data.get('room_number') || '').trim();
      const time = data.get('time');

      if (!location || !date || !name || !roomNumber || !time) {
        formStatus.textContent = t('booking.msg_missing');
        formStatus.style.color = 'var(--blue-soft)';
        return;
      }

      formStatus.textContent = t('booking.msg_confirmed');
      formStatus.style.color = 'var(--yellow)';
      bookingForm.reset();
      updateRooms('');
      updateRoomNumbers('');
      updateTimeSlots('');

      setTimeout(() => { formStatus.textContent = ''; }, 6000);
    });
  }

  /* ---------- Guru Card registration ---------- */
  const guruRegForm = document.getElementById('guruRegForm');
  const guruRegStatus = document.getElementById('guruRegStatus');

  if (guruRegForm) {
    guruRegForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(guruRegForm);
      const name = (data.get('reg_name') || '').trim();
      const surname = (data.get('reg_surname') || '').trim();
      const phone = (data.get('reg_phone') || '').trim();

      if (!name || !surname || !phone) {
        guruRegStatus.textContent = t('guru.reg_missing');
        guruRegStatus.style.color = 'var(--blue-soft)';
        return;
      }

      guruRegStatus.textContent = t('guru.reg_confirmed');
      guruRegStatus.style.color = 'var(--yellow)';
      guruRegForm.reset();
      setTimeout(() => { guruRegStatus.textContent = ''; }, 6000);
    });
  }

  /* ---------- Game sliders ---------- */
  document.querySelectorAll('.game-slider').forEach((slider) => {
    const track = slider.querySelector('.game-covers');
    const prevBtn = slider.querySelector('.game-slider__btn--prev');
    const nextBtn = slider.querySelector('.game-slider__btn--next');
    const step = 325;

    if (prevBtn) prevBtn.addEventListener('click', () => track.scrollBy({ left: -step, behavior: 'smooth' }));
    if (nextBtn) nextBtn.addEventListener('click', () => track.scrollBy({ left: step, behavior: 'smooth' }));
  });

  /* ---------- Sticky nav shadow on scroll ---------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.style.boxShadow = window.scrollY > 8
        ? '0 8px 32px rgba(0,0,0,0.4)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Scroll animations ---------- */
  const revealEls = [
    ...document.querySelectorAll('.section-head'),
    ...document.querySelectorAll('.pricing__location'),
    ...document.querySelectorAll('.booking__left'),
    ...document.querySelectorAll('.booking__form'),
    ...document.querySelectorAll('.guru__reg-form'),
    ...document.querySelectorAll('.footer__brand'),
    ...document.querySelectorAll('.footer__links'),
  ];
  revealEls.forEach(el => el.classList.add('reveal'));

  const revealGroups = [
    ...document.querySelectorAll('.location__grid'),
    ...document.querySelectorAll('.pricing__cards'),
    ...document.querySelectorAll('.guru__grid'),
  ];
  revealGroups.forEach(el => el.classList.add('reveal-group'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  [...revealEls, ...revealGroups].forEach(el => revealObserver.observe(el));

  /* ---------- Active nav on scroll ---------- */
  const navSections = ['vaja', 'digomi', 'pricing', 'booking', 'guru'];
  const allNavLinks = document.querySelectorAll('.nav__links a, .nav__mobile a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const links = document.querySelectorAll(`.nav__links a[href="#${id}"], .nav__mobile a[href="#${id}"]`);
      if (entry.isIntersecting) {
        allNavLinks.forEach(a => a.classList.remove('nav-active'));
        links.forEach(a => a.classList.add('nav-active'));
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  navSections.forEach(id => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  });

})();
