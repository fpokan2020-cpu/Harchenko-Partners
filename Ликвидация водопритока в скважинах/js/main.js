/* ═════════════════════════════════════════════════════════════════════
   ГЛАВНЫЙ СКРИПТ САЙТА (main.js)

   Этот файл — «мозг» сайта. Он отвечает за всё, что двигается и
   переключается на страницах:
     1) переводы на три языка (украинский / русский / английский);
     2) выпадающее меню на телефонах (кнопка-«бургер» ☰);
     3) плавное появление блоков при прокрутке страницы;
     4) «оживающие» счётчики цифр (250+, 100+, 45, 75%);
     5) круглую кнопку «наверх» в правом нижнем углу;
     6) подгонку размера встроенных анимаций под ширину экрана;
     7) построение списка публикаций на странице «Библиотека».

   Строки, начинающиеся с // или заключённые в /* ... *／ — это
   комментарии-пояснения. Компьютер их не читает, они для людей.
   ═════════════════════════════════════════════════════════════════════ */

/* ═══════════ ПЕРЕВОДЫ ═══════════
   Как устроены языки на сайте:
   — РУССКИЙ текст написан прямо в HTML-файлах страниц. При загрузке
     скрипт «собирает» его оттуда и запоминает как русский словарь.
   — УКРАИНСКИЙ и АНГЛИЙСКИЙ лежат ниже в виде словарей: слева ключ
     (например "nav.home" — пункт меню «Главная»), справа — перевод.
   — Каждый переводимый кусочек текста в HTML помечен меткой
     data-i18n="ключ". При смене языка скрипт находит все метки
     и подставляет текст из нужного словаря.
   Чтобы поправить перевод — найдите ключ и измените текст справа. */

const translations = {
  uk: {
    "nav.home": "Головна",
    "nav.technology": "Технології",
    "nav.offers": "Послуги",
    "nav.library": "Бібліотека",
    "nav.clients": "Клієнти",
    "nav.quality": "Якість",
    "nav.about": "Про компанію",
    "nav.contact": "Контакти",

    "hero.badge": "Незалежна сервісна компанія · Франція",
    "hero.title": "Полімерні технології для підвищення нафто- та газовіддачі",
    "hero.subtitle": "Ми допомагаємо операторам у всьому світі збільшувати видобуток: водоізоляція, боротьба з піскопроявами, полімерне заводнення та геотермальні рішення — від лабораторії до промислу.",
    "hero.cta1": "Наші технології",
    "hero.cta2": "Зв'язатися з нами",

    "stats.trials": "польових випробувань у всьому світі",
    "stats.wso": "успішних операцій водоізоляції",
    "stats.years": "років досвіду в полімерному заводненні",
    "stats.success": "успішність обробок свердловин",

    "dir.tag": "Напрямки",
    "dir.title": "Ми — лідери в чотирьох галузях",
    "dir.lead": "Поєднання моделювання привибійної зони, лабораторних досліджень у пластових умовах та промислової підтримки.",
    "dir.wso.title": "Водоізоляція / Conformance Control",
    "dir.wso.text": "Вирішення проблем обводнення видобувних свердловин та вирівнювання профілю приймальності нагнітальних. Понад 100 успішних операцій у всьому світі: вертикальні та горизонтальні свердловини, пісковики й карбонати.",
    "dir.sand.title": "Боротьба з піскопроявами",
    "dir.sand.text": "Обробка газових і морських свердловин простим закачуванням — без спуску внутрішньосвердловинного обладнання. Ефект зберігається протягом кількох років.",
    "dir.eor.title": "МПН / Полімерне заводнення",
    "dir.eor.text": "45 років досвіду розробки полімерного заводнення. Участь у першому пілотному проєкті в Дацині (Китай), першому проєкті на горизонтальних свердловинах у Пелікан-Лейк (Канада) та першому глибоководному проєкті в Далії (Ангола).",
    "dir.geo.title": "Геотермальні технології",
    "dir.geo.text": "Технологія Powelsand запобігає втратам приймальності геотермальних свердловин і продовжує термін служби геотермальних проєктів.",

    "home.more": "Докладніше →",
    "home.lib.btn": "Усі публікації →",
    "home.cta.title": "Готові обговорити ваш проєкт?",
    "home.cta.text": "Розкажіть про ваше завдання — ми запропонуємо рішення: від лабораторних досліджень до операцій на промислі.",
    "home.cta.btn": "Зв'язатися",

    "pg.tag": "Продукція",
    "pg.title": "Powelgel™ — продукти для екстремальних умов",
    "pg.lead": "Лінійки продуктів із низьким впливом на довкілля для водоізоляції, conformance control та пісковідсічення. Багато продуктів зареєстровано CEFAS для застосування в суворих морських умовах.",
    "pg.f1": "Термостабільність від 30 °C до 150 °C",
    "pg.f2": "Мінералізація до 200 г/л (TDS)",
    "pg.f3": "Стійкість до H₂S та кислот",
    "pg.f4": "Механічна стабільність за зсуву до 1 000 000 с⁻¹",
    "pg.f5": "Відкладені гелі, мікрогелі заданого розміру, біополімери",
    "pg.docs.title": "З кожною поставкою",
    "pg.docs.d1": "Контроль якості продукції",
    "pg.docs.d2": "Сертифікат аналізу (CoA)",
    "pg.docs.d3": "Технічні паспорти (TDS)",
    "pg.docs.d4": "Паспорти безпеки (MSDS)",

    "tech.hero.tag": "Технології",
    "tech.hero.title": "Завжди попереду інновацій",
    "tech.hero.lead": "Poweltec — піонер полімерного заводнення. Ми брали участь у найбільших світових проєктах, включно з Дацином (Китай) та Пелікан-Лейк (Канада), і поєднуємо моделювання привибійної зони з лабораторними дослідженнями в пластових умовах.",
    "tech.wso.tag": "Напрямок 01",
    "tech.wso.title": "Водоізоляція (WSO) / Conformance Control",
    "tech.wso.p1": "На відміну від полімерного заводнення, завдання <strong>водоізоляції (WSO — обробка видобувних свердловин)</strong> — вирішити проблеми видобутку, спричинені припливом води: знизити надходження води з водоносних зон.",
    "tech.wso.p2": "Аналогічно <strong>Conformance Control (CC — закачування в нагнітальні свердловини)</strong> усуває проблеми неоднорідності пласта — високопроникні пропластки та тріщини — завдяки глибокій обробці зон поглинання з боку нагнітальної свердловини.",
    "tech.wso.p3": "Через вищу рухливість і проникність вода видобувається переважно перед нафтою — це низький коефіцієнт охоплення та погана економіка. Обробка WSO знижує обводненість свердловини, іноді дозволяючи повернути в роботу зупинені свердловини.",
    "tech.anim1.caption": "Анімація: обробка видобувної свердловини — закачування полімеру, утворення гелю та зростання видобутку нафти.",
    "tech.pg.title": "Лінійка полімерів для WSO/CC — Powelgel™",
    "tech.sand.tag": "Напрямок 02",
    "tech.sand.title": "Боротьба з піскопроявами",
    "tech.sand.p1": "Ми пропонуємо <strong>оригінальну полімерну технологію</strong> зміцнення слабозцементованих пісковиків. Обробка виконується простим закачуванням з гирла — без спуску внутрішньосвердловинного обладнання.",
    "tech.sand.p2": "Технологія успішно застосовується в газових і морських свердловинах, а також у свердловинах підземних сховищ газу. Ефект від обробки зберігається протягом кількох років.",
    "tech.anim2.caption": "Анімація: полімерна обробка зміцнює слабозцементований пісковик і припиняє винос піску.",
    "tech.eor.tag": "Напрямок 03",
    "tech.eor.title": "МПН / Полімерне заводнення",
    "tech.eor.services": "Повний цикл сервісів: моделювання пласта, лабораторні випробування та фільтраційні експерименти на керні, промислова підтримка проєктів полімерного заводнення.",
    "tech.eor.first.title": "Перші в галузі",
    "tech.eor.first.d1": "Дацин (Китай) — найбільший проєкт полімерного заводнення",
    "tech.eor.first.d2": "Пелікан-Лейк (Канада) — перший проєкт на горизонтальних свердловинах",
    "tech.eor.first.d3": "Далія (Ангола) — перший глибоководний проєкт",
    "tech.geo.tag": "Напрямок 04",
    "tech.geo.title": "Геотермальні технології",
    "tech.geo.text": "Технологія Powelsand використовується для запобігання втратам приймальності в геотермальних свердловинах: полімерна обробка зміцнює породу навколо стовбура та продовжує термін служби геотермальних дублетів «видобуток — нагнітання».",

    "of.tag": "Послуги",
    "of.title": "Рішення під ключ",
    "of.lead": "Досвід понад 250 польових випробувань у найрізноманітніших умовах дозволяє нам виконувати повний дизайн операцій — від відбору продуктів до супроводу на промислі.",
    "of.lab.title": "Лабораторні дослідження",
    "of.lab.text": "Bulk-тести властивостей полімерів у пластових умовах, сім установок фільтраційних експериментів на керні (HP/HT, до 150 °C), оцінка селективного впливу на проникність для води/нафти/газу, вимірювання адсорбції полімеру та IPV, тести довгострокової стабільності.",
    "of.sim.title": "Моделювання пласта (PumaFlow™)",
    "of.sim.text": "Інтегрований сервіс із 8 етапів: збір та аналіз даних, побудова 3D-моделі, адаптація історії розробки, розрахунок сценаріїв, вибір оптимального варіанта, уточнення за лабораторними даними, дизайн пілота/обробки, інтерпретація результатів.",
    "of.field.title": "Дизайн операцій та промислова підтримка",
    "of.field.text": "Підбір і постачання продуктів, проєктування поверхневого облаштування, програма робіт, присутність фахівців на об'єкті, контроль якості води та продукції, аналіз результатів після обробки.",
    "of.exp.title": "Експертиза та консалтинг",
    "of.exp.text": "Навчання з методів ПНП/МПН (IOR/EOR), тематичні дослідження та літературні огляди, незалежна оцінка сервісів і продуктів, консультаційний супровід проєктів.",
    "of.prod.title": "Продукція Powelgel™",
    "of.prod.text": "Відкладені гелі, мікрогелі заданого розміру та біополімери для умов до 150 °C і 200 г/л TDS. Постачання, контроль якості, сертифікати аналізу (CoA), паспорти TDS і MSDS.",
    "of.sim8.title": "8 етапів інтегрованого сервісу",
    "of.s1": "Збір та аналіз даних",
    "of.s2": "Побудова моделі",
    "of.s3": "Адаптація історії / поведінка ділянки",
    "of.s4": "Розрахунок сценаріїв",
    "of.s5": "Вибір оптимального сценарію",
    "of.s6": "Уточнення моделі за лабораторними даними",
    "of.s7": "Дизайн пілота / обробки",
    "of.s8": "Інтерпретація та актуалізація",

    "lab.tag": "Лабораторія",
    "lab.title": "Власна лабораторія площею 460 м²",
    "lab.lead": "Рюей-Мальмезон, Франція. Повний цикл досліджень — від скринінгу хімії до фільтраційних експериментів у пластових умовах.",
    "lab.i1": "7 фільтраційних установок HP/HT для керна 1,5\" та 1\"",
    "lab.i2": "2 установки НТ/НТ для скринінгу хімічних реагентів",
    "lab.i3": "Установка оцінки пошкодження пласта (Formation Damage)",
    "lab.i4": "2 рампи деаерації за стандартом API",
    "lab.i5": "Рукавичний бокс (glove box)",
    "lab.i6": "Реометри кількох типів",
    "lab.i7": "Установка фільтрації за стандартом API",
    "lab.i8": "Установки розчинення полімерів",
    "lab.i9": "Установка механічної деструкції за стандартом API",
    "lab.i10": "Аналізатори вуглецю/азоту, УФ-спектрофотометри, світлорозсіювання",
    "lab.rnd.title": "Науково-дослідні програми",
    "lab.rnd.text": "Ми співпрацюємо з університетами, науковими центрами, виробниками хімічних реагентів та операторами. Поточні напрямки: полімери МПН для високотемпературних пластів (до 120 °C) та нове покоління продуктів для водоізоляції й пісковідсічення в екстремальних умовах.",

    "news.badge": "Останні новини · Вересень 2024",
    "news.title": "Водоізоляція у тріщинуватих карбонатних свердловинах — родовище Daleel",
    "news.text": "Шоста кампанія включала дві горизонтальні та одну вертикальну свердловину. Загалом з 2019 року виконано 38 обробок з успішністю 75 %. Додатковий видобуток нафти — близько 500 000 барелів. Результати опубліковано в статтях SPE 203394, SPE 217009 та SPE 218438. Наступна презентація — OPES 2025, Маскат (травень 2025).",
    "news.s1": "обробок з 2019 року",
    "news.s2": "успішність",
    "news.s3": "барелів додаткової нафти",

    "lib.tag": "Бібліотека",
    "lib.title": "Бібліотека Poweltec",
    "lib.lead": "Презентації та наукові публікації компанії — доповіді SPE, IPTC та EAGE з водоізоляції, пісковідсічення та полімерного заводнення.",
    "lib.filter.all": "Усі",
    "lib.filter.wso": "Водоізоляція / Conformance",
    "lib.filter.sand": "Пісковідсічення",
    "lib.filter.other": "МПН та інше",
    "lib.note.tag": "Свої матеріали",
    "lib.note.title": "Як додати свою презентацію",
    "lib.note.text": "Покладіть PDF-файл у папку <code>presentations/</code> поруч із сайтом і додайте один запис на початок файлу <code>js/library-data.js</code> (назва, рік, категорія, ім'я файлу). Матеріал з'явиться на цій сторінці автоматично, з кнопкою завантаження.",
    "lib.docs.title": "Документи компанії",

    "cl.tag": "Клієнти",
    "cl.title": "Відгуки наших замовників",
    "cl.lead": "Нам довіряють оператори в усьому світі — від Західної Африки до Оману та Індонезії.",
    "cl.q1.text": "«Команда Poweltec продемонструвала високий технічний рівень, залученість і налаштованість на результат. Технології компанії та гнучкі пакети послуг роблять її пріоритетним підрядником у сфері підвищення нафтовіддачі.»",
    "cl.q1.role": "Perenco E&P, Well Intervention & Stimulation",
    "cl.q2.text": "«Ми дуже задоволені якістю послуг вашої компанії. Високо цінуємо професіоналізм і відповідальність команди та рекомендуємо Poweltec іншим операторам.»",
    "cl.q2.role": "Lekhwair WRM Team Leader, Petroleum Development Oman",
    "cl.q3.text": "«Співпраця привела до створення хімічного процесу зниження виносу піску у свердловинах підземних сховищ газу. Ефект від обробки зберігається щонайменше 4 роки.»",
    "cl.q3.role": "RH and CA Member, GDF Suez",

    "q.tag": "Якість",
    "q.title": "Політика якості",
    "q.lead": "Система менеджменту якості Poweltec сертифікована за ISO 9001. Ми документуємо кожен етап роботи — від лабораторних досліджень до операцій на промислі.",
    "q.cert.title": "Сертифікат ISO 9001",
    "q.cert.text": "Сертифікат № 17489268-9001 підтверджує відповідність системи менеджменту якості компанії вимогам стандарту ISO 9001.",
    "q.policy.title": "Політика якості",
    "q.policy.text": "Офіційний документ про принципи забезпечення якості: відповідальність керівництва, контроль процесів, постійне покращення.",
    "q.env.title": "Екологія та CEFAS",
    "q.env.text": "Лінійки продуктів із низьким впливом на довкілля. Багато продуктів зареєстровано CEFAS для застосування в суворих морських умовах.",
    "q.qc.title": "Контроль якості на кожному етапі",
    "q.qc.text": "Кожна поставка продукції супроводжується контролем якості, сертифікатом аналізу (CoA), технічними паспортами (TDS) та паспортами безпеки (MSDS). На промислі ми контролюємо якість води та приготування розчинів.",
    "q.download": "Завантажити (PDF) →",

    "ab.tag": "Про компанію",
    "ab.hero.title": "Хто ми",
    "ab.title": "Незалежна сервісна компанія, що присвятила себе підвищенню продуктивності родовищ",
    "ab.text": "Poweltec заснована 2007 року та спеціалізується на застосуванні полімерних технологій для підвищення продуктивності нафтових і газових родовищ. Ми працюємо в усьому світі — від Близького Сходу до Західної Африки та Латинської Америки.",
    "ab.lead.tag": "Керівництво",
    "ab.mission": "Наша місія — давати операторам перевірені полімерні рішення з вимірюваним результатом: менше води та піску, більше нафти й газу.",
    "ab.ceo.role": "Генеральний директор, засновник",
    "ab.ceo.bio": "Доктор хімічної інженерії (1979). Заснував компанію 2007 року після 30 років роботи у сфері НДДКР. Автор численних наукових публікацій і патентів, член керівного комітету SPE Oilfield Chemistry Symposium, SPE Distinguished Lecturer (2009–2010).",

    "ct.tag": "Контакти",
    "ct.title": "Обговорімо ваш проєкт",
    "ct.lead": "Зв'яжіться з нами в будь-який зручний спосіб — відповімо та запропонуємо план робіт.",
    "ct.phone": "Телефон",
    "ct.fax": "Факс",
    "ct.addr": "Адреса",
    "ct.docs": "Документи",
    "ct.doc1": "Брошура (PDF)",
    "ct.doc2": "Політика якості (PDF)",
    "ct.doc3": "Сертифікат якості (PDF)",
    "ct.social.title": "Ми в соціальних мережах",
    "ct.social.text": "Стежте за новинами компанії, публікаціями та виступами на конференціях у LinkedIn.",

    "ft.tagline": "Незалежна сервісна компанія, що присвятила себе підвищенню видобутку нафтових і газових родовищ.",
    "ft.rights": "Усі права захищено."
  },

  en: {
    "nav.home": "Home",
    "nav.technology": "Technology",
    "nav.offers": "Offers",
    "nav.library": "Library",
    "nav.clients": "Clients",
    "nav.quality": "Quality",
    "nav.about": "About us",
    "nav.contact": "Contact",

    "hero.badge": "An independent service company · France",
    "hero.title": "Polymer technologies for improved oil & gas recovery",
    "hero.subtitle": "We help operators worldwide increase production: water shut-off, sand control, polymer flooding and geothermal solutions — from the laboratory to the field.",
    "hero.cta1": "Our technology",
    "hero.cta2": "Contact us",

    "stats.trials": "field trials performed worldwide",
    "stats.wso": "successful water shut-off treatments",
    "stats.years": "years of polymer flooding expertise",
    "stats.success": "well treatment success rate",

    "dir.tag": "Expertise",
    "dir.title": "We lead in four key areas",
    "dir.lead": "A combination of near-wellbore simulation, laboratory studies under reservoir conditions and field support.",
    "dir.wso.title": "Water Shut-Off / Conformance Control",
    "dir.wso.text": "Solving water control problems in production wells and improving injection conformance. More than 100 successful field cases worldwide: vertical and horizontal wells, sandstone and carbonate reservoirs.",
    "dir.sand.title": "Sand Control",
    "dir.sand.text": "Treatment of gas and offshore wells through simple bullhead injection — no downhole equipment required. The effect lasts for several years.",
    "dir.eor.title": "EOR / Polymer Flooding",
    "dir.eor.text": "45 years of experience in polymer flooding development. Involved in the first pilot in Daqing (China), the first horizontal-well project in Pelican Lake (Canada) and the first deep-offshore project in Dalia (Angola).",
    "dir.geo.title": "Geothermal Technologies",
    "dir.geo.text": "The Powelsand technology prevents injectivity losses in geothermal wells and extends the lifetime of geothermal projects.",

    "home.more": "Learn more →",
    "home.lib.btn": "All publications →",
    "home.cta.title": "Ready to discuss your project?",
    "home.cta.text": "Tell us about your challenge — we will propose a solution: from laboratory studies to field operations.",
    "home.cta.btn": "Get in touch",

    "pg.tag": "Products",
    "pg.title": "Powelgel™ — products for extreme conditions",
    "pg.lead": "Product families with low environmental impact designed for Water Shut-Off, Conformance Control and Sand Mitigation. Many products are CEFAS-registered for use in harsh offshore environments.",
    "pg.f1": "Thermal stability from 30 °C to 150 °C",
    "pg.f2": "Salinity up to 200 g/L TDS",
    "pg.f3": "Resistance to H₂S and acids",
    "pg.f4": "Mechanical stability at shear rates up to 1,000,000 s⁻¹",
    "pg.f5": "Delayed gels, sized microgels, bio-sourced polymers",
    "pg.docs.title": "With every delivery",
    "pg.docs.d1": "Product quality control",
    "pg.docs.d2": "Certificate of Analysis (CoA)",
    "pg.docs.d3": "Technical Data Sheets (TDS)",
    "pg.docs.d4": "Material Safety Data Sheets (MSDS)",

    "tech.hero.tag": "Technology",
    "tech.hero.title": "Always innovating",
    "tech.hero.lead": "Poweltec is a pioneer in polymer flooding. We have been involved in the largest projects worldwide, including Daqing (China) and Pelican Lake (Canada), and combine near-wellbore simulation with laboratory studies under reservoir conditions.",
    "tech.wso.tag": "Area 01",
    "tech.wso.title": "Water Shut-Off (WSO) / Conformance Control",
    "tech.wso.p1": "Contrary to polymer flooding, the goal of <strong>Water Shut-Off (WSO — production well treatment)</strong> is to solve production problems caused by water influx: to reduce water inflow from water-producing zones.",
    "tech.wso.p2": "In a similar way, <strong>Conformance Control (CC — injection well treatment)</strong> solves conformance problems in the reservoir — high-permeability streaks and fractures — through deep treatment of the thief zones from the injection well side.",
    "tech.wso.p3": "Due to higher mobility and permeability, water is produced preferentially over oil — meaning poor sweep efficiency and poor economics. A WSO treatment reduces the water cut of the well, sometimes allowing shut-in wells to resume production.",
    "tech.anim1.caption": "Animation: production well treatment — polymer injection, gel setting and increased oil production.",
    "tech.pg.title": "Range of polymers for WSO/CC — Powelgel™",
    "tech.sand.tag": "Area 02",
    "tech.sand.title": "Sand Control",
    "tech.sand.p1": "We offer an <strong>original polymer technology</strong> for consolidating weakly cemented sandstones. The treatment is a simple bullhead injection from surface — no downhole equipment required.",
    "tech.sand.p2": "The technology is successfully applied in gas and offshore wells as well as underground gas storage wells. The effect of the treatment lasts for several years.",
    "tech.anim2.caption": "Animation: the polymer treatment consolidates weakly cemented sandstone and stops sand production.",
    "tech.eor.tag": "Area 03",
    "tech.eor.title": "EOR / Polymer Flooding",
    "tech.eor.services": "A full service cycle: reservoir simulation, laboratory testing and core-flood experiments, field support of polymer flooding projects.",
    "tech.eor.first.title": "Industry firsts",
    "tech.eor.first.d1": "Daqing (China) — the largest polymer flooding project",
    "tech.eor.first.d2": "Pelican Lake (Canada) — the first horizontal-well project",
    "tech.eor.first.d3": "Dalia (Angola) — the first deep-offshore project",
    "tech.geo.tag": "Area 04",
    "tech.geo.title": "Geothermal Technologies",
    "tech.geo.text": "The Powelsand technology is used to prevent injectivity losses in geothermal wells: the polymer treatment consolidates the rock around the wellbore and extends the lifetime of geothermal production–injection doublets.",

    "of.tag": "Offers",
    "of.title": "Tailor-made solutions",
    "of.lead": "With more than 250 field trials performed in very different environments, our team provides a full design of operations — from product screening to on-site assistance.",
    "of.lab.title": "Laboratory studies",
    "of.lab.text": "Bulk tests of polymer properties under reservoir conditions, seven core-flood rigs (HP/HT, up to 150 °C), evaluation of the selective effect on water/oil or water/gas permeability, measurement of polymer adsorption and IPV, long-term stability tests.",
    "of.sim.title": "Reservoir simulation (PumaFlow™)",
    "of.sim.text": "An integrated 8-step service: data collection and analysis, model construction, history matching, simulation scenarios, best scenario specification, simulation update with laboratory data, pilot/treatment design, interpretation of results.",
    "of.field.title": "Operation design & field assistance",
    "of.field.text": "Product selection and delivery, definition of surface handling facilities, operational program, on-site assistance, quality control of water and products, post-treatment analysis.",
    "of.exp.title": "Expertise & consulting",
    "of.exp.text": "Training courses on IOR/EOR, studies and literature reviews, independent evaluation of services and products, project consulting.",
    "of.prod.title": "Powelgel™ products",
    "of.prod.text": "Delayed gels, sized microgels and bio-sourced polymers for conditions up to 150 °C and 200 g/L TDS. Delivery, quality control, Certificates of Analysis (CoA), TDS and MSDS documents.",
    "of.sim8.title": "8 steps of the integrated service",
    "of.s1": "Data collection & analysis",
    "of.s2": "Model construction",
    "of.s3": "History matching / pattern behavior",
    "of.s4": "Simulation scenarios",
    "of.s5": "Best scenario specification",
    "of.s6": "Simulation update with laboratory data",
    "of.s7": "Pilot / treatment design",
    "of.s8": "Interpretation / actualization",

    "lab.tag": "Laboratory",
    "lab.title": "Our own 5,000 sq ft laboratory",
    "lab.lead": "Rueil-Malmaison, France. A full research cycle — from chemical screening to core-flood experiments under reservoir conditions.",
    "lab.i1": "7 HP/HT core-flood rigs for 1.5\" and 1\" core samples",
    "lab.i2": "2 LP/LT rigs for chemical screening",
    "lab.i3": "Formation Damage evaluation rig",
    "lab.i4": "2 deoxygenation ramps (API standard)",
    "lab.i5": "Glove box",
    "lab.i6": "Several types of rheometers",
    "lab.i7": "Filtration unit (API standard)",
    "lab.i8": "Polymer dissolution units",
    "lab.i9": "Mechanical degradation unit (API standard)",
    "lab.i10": "Carbon/nitrogen analyzers, UV and light-scattering spectrophotometers",
    "lab.rnd.title": "R&D programs",
    "lab.rnd.text": "We collaborate with universities, scientific centers, chemical manufacturers and operators. Current work: EOR polymers for high-temperature reservoirs (up to 120 °C) and an innovative generation of WSO/Conformance and Sand Control products for extreme conditions.",

    "news.badge": "Breaking news · September 2024",
    "news.title": "Water shut-off in fractured carbonate wells — Daleel field",
    "news.text": "The 6th campaign included two horizontal and one vertical well. In total, 38 treatments have been performed since 2019 with a 75% success rate. Additional oil produced — about 500,000 barrels. Results published in SPE 203394, SPE 217009 and SPE 218438. Next presentation — OPES 2025, Muscat (May 2025).",
    "news.s1": "treatments since 2019",
    "news.s2": "success rate",
    "news.s3": "barrels of additional oil",

    "lib.tag": "Library",
    "lib.title": "Poweltec Library",
    "lib.lead": "The company's presentations and scientific publications — SPE, IPTC and EAGE papers on water shut-off, sand control and polymer flooding.",
    "lib.filter.all": "All",
    "lib.filter.wso": "Water Shut-Off / Conformance",
    "lib.filter.sand": "Sand Control",
    "lib.filter.other": "EOR & other",
    "lib.note.tag": "Your materials",
    "lib.note.title": "How to add your presentation",
    "lib.note.text": "Put the PDF file into the <code>presentations/</code> folder next to the site and add one entry at the top of <code>js/library-data.js</code> (title, year, category, file name). The material will appear on this page automatically, with a download button.",
    "lib.docs.title": "Company documents",

    "cl.tag": "Clients",
    "cl.title": "Customers feedback",
    "cl.lead": "Operators worldwide trust us — from West Africa to Oman and Indonesia.",
    "cl.q1.text": "“The Poweltec team demonstrated high technical skills, commitment and a can-do attitude. The company's technology and flexible service packages make it a preferred contractor in enhanced oil recovery.”",
    "cl.q1.role": "Perenco E&P, Well Intervention & Stimulation",
    "cl.q2.text": "“We are very pleased with the quality of service your company provides. We highly value the team's professionalism and responsibility and have recommended Poweltec to others.”",
    "cl.q2.role": "Lekhwair WRM Team Leader, Petroleum Development Oman",
    "cl.q3.text": "“The collaboration led to the development of a chemical process reducing sand production in underground gas storage wells. The treatment is effective for at least 4 years.”",
    "cl.q3.role": "RH and CA Member, GDF Suez",

    "q.tag": "Quality",
    "q.title": "Quality policy",
    "q.lead": "Poweltec's quality management system is ISO 9001 certified. We document every step of the work — from laboratory studies to field operations.",
    "q.cert.title": "ISO 9001 Certificate",
    "q.cert.text": "Certificate No. 17489268-9001 confirms that the company's quality management system meets the requirements of the ISO 9001 standard.",
    "q.policy.title": "Quality Policy",
    "q.policy.text": "The official document on quality assurance principles: management responsibility, process control, continuous improvement.",
    "q.env.title": "Environment & CEFAS",
    "q.env.text": "Product families with low environmental impact. Many products are CEFAS-registered for use in harsh offshore environments.",
    "q.qc.title": "Quality control at every step",
    "q.qc.text": "Every product delivery is accompanied by quality control, a Certificate of Analysis (CoA), Technical Data Sheets (TDS) and Material Safety Data Sheets (MSDS). In the field we control water quality and solution preparation.",
    "q.download": "Download (PDF) →",

    "ab.tag": "About us",
    "ab.hero.title": "Who we are",
    "ab.title": "An independent service company dedicated to the improvement of oil and gas field production",
    "ab.text": "Founded in 2007, Poweltec specializes in the use of polymer technologies to improve the productivity of oil and gas fields. We work worldwide — from the Middle East to West Africa and Latin America.",
    "ab.lead.tag": "Leadership",
    "ab.mission": "Our mission is to give operators proven polymer solutions with measurable results: less water and sand, more oil and gas.",
    "ab.ceo.role": "CEO, Founder",
    "ab.ceo.bio": "Ph.D. in Chemical Engineering (1979). Founded the company in 2007 after 30 years in R&D. Author of numerous scientific publications and patents, member of the SPE Oilfield Chemistry Symposium Steering Committee, SPE Distinguished Lecturer (2009–2010).",

    "ct.tag": "Contact",
    "ct.title": "Let's discuss your project",
    "ct.lead": "Contact us in any convenient way — we will respond and propose a work plan.",
    "ct.phone": "Phone",
    "ct.fax": "Fax",
    "ct.addr": "Address",
    "ct.docs": "Documents",
    "ct.doc1": "Brochure (PDF)",
    "ct.doc2": "Quality Policy (PDF)",
    "ct.doc3": "Quality Certificate (PDF)",
    "ct.social.title": "Follow us",
    "ct.social.text": "Follow company news, publications and conference talks on LinkedIn.",

    "ft.tagline": "An independent service company dedicated to the improvement of oil and gas field production.",
    "ft.rights": "All rights reserved."
  }
};

/* ═══════════ ЗАГОЛОВКИ ВКЛАДКИ БРАУЗЕРА ═══════════
   То, что написано на вкладке браузера, тоже переводится.
   Для каждой страницы (home — главная, technology — технологии и т.д.)
   указаны три варианта заголовка: ru / uk / en. */
const pageTitles = {
  home: {
    ru: "Poweltec — Полимерные технологии для нефтегазовой отрасли",
    uk: "Poweltec — Полімерні технології для нафтогазової галузі",
    en: "Poweltec — Polymer technologies for the oil & gas industry"
  },
  technology: { ru: "Технологии — Poweltec", uk: "Технології — Poweltec", en: "Technology — Poweltec" },
  offers:     { ru: "Услуги — Poweltec", uk: "Послуги — Poweltec", en: "Offers — Poweltec" },
  library:    { ru: "Библиотека — Poweltec", uk: "Бібліотека — Poweltec", en: "Library — Poweltec" },
  clients:    { ru: "Клиенты — Poweltec", uk: "Клієнти — Poweltec", en: "Clients — Poweltec" },
  quality:    { ru: "Качество — Poweltec", uk: "Якість — Poweltec", en: "Quality — Poweltec" },
  about:      { ru: "О компании — Poweltec", uk: "Про компанію — Poweltec", en: "About us — Poweltec" },
  contact:    { ru: "Контакты — Poweltec", uk: "Контакти — Poweltec", en: "Contact — Poweltec" }
};

/* Подписи в списке публикаций («Скачать PDF», «Публикация»).
   Они создаются скриптом, а не написаны в HTML, поэтому их переводы
   хранятся отдельно — здесь. */
const LIB_UI = {
  ru: { download: "Скачать PDF", paper: "Публикация" },
  uk: { download: "Завантажити PDF", paper: "Публікація" },
  en: { download: "Download PDF", paper: "Publication" }
};

/* Здесь хранится язык, включённый в данный момент */
let currentLang = "ru";

/* ═══════════ ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ ═══════════
   Что происходит при нажатии на кнопку UK / RU / EN:
   1) скрипт берёт словарь выбранного языка;
   2) обходит все помеченные кусочки текста на странице
      и заменяет их переводом;
   3) меняет заголовок вкладки браузера;
   4) подсвечивает нажатую кнопку;
   5) запоминает выбор в памяти браузера, чтобы при следующем
      визите сайт открылся на том же языке. */
(function () {
  // Находим на странице все элементы с пометкой data-i18n
  const nodes = document.querySelectorAll("[data-i18n]");
  // Узнаём, какая это страница (написано в <body data-page="...">)
  const page = document.body.dataset.page || "home";

  // Русский — исходный язык: собираем его прямо из текста страницы
  translations.ru = {};
  nodes.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!(key in translations.ru)) translations.ru[key] = el.innerHTML;
  });

  window.setLang = function (lang) {
    const dict = translations[lang] || translations.ru;
    currentLang = lang;
    nodes.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.documentElement.lang = lang;
    const titles = pageTitles[page] || pageTitles.home;
    document.title = titles[lang] || titles.ru;
    document.querySelectorAll(".lang__btn").forEach((b) => {
      b.classList.toggle("is-active", b.dataset.lang === lang);
    });
    try { localStorage.setItem("poweltec-lang", lang); } catch (e) {}
    if (typeof window.renderLibrary === "function") window.renderLibrary();
  };

  // Следим за нажатиями на кнопки UK / RU / EN в шапке
  const langBox = document.getElementById("lang");
  if (langBox) {
    langBox.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang__btn");
      if (btn) window.setLang(btn.dataset.lang);
    });
  }

  // При открытии страницы: если посетитель уже выбирал язык раньше —
  // включаем его; если зашёл впервые — включаем украинский (по умолчанию)
  let saved = null;
  try { saved = localStorage.getItem("poweltec-lang"); } catch (e) {}
  window.setLang(saved || "uk");
})();

/* ═══════════ МОБИЛЬНОЕ МЕНЮ ═══════════
   На телефонах обычное меню не помещается, поэтому оно спрятано.
   Нажатие на кнопку-«бургер» ☰ раскрывает его, повторное нажатие
   или выбор пункта — закрывает. */
(function () {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (!burger || !nav) return;
  burger.addEventListener("click", () => nav.classList.toggle("is-open"));
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") nav.classList.remove("is-open");
  });
})();

/* ═══════════ ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ ═══════════
   Блоки с пометкой class="reveal" изначально прозрачны и чуть
   опущены вниз. Как только блок попадает в поле зрения при
   прокрутке — он плавно «всплывает». Это чисто украшение. */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();

/* ═══════════ ОЖИВАЮЩИЕ СЧЁТЧИКИ ═══════════
   Цифры на первом экране (250+, 100+, 45, 75%) при появлении
   на экране быстро «накручиваются» от нуля до нужного значения.
   Само значение задано в HTML в атрибуте data-target. */
(function () {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;
  const duration = 1400;

  function animate(el) {
    const target = parseInt(el.dataset.target, 10);
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((el) => observer.observe(el));
})();

/* ═══════════ КНОПКА «НАВЕРХ» ═══════════
   Круглая кнопка со стрелкой в правом нижнем углу. Появляется,
   когда страница прокручена вниз больше чем на 600 пикселей;
   нажатие плавно возвращает к началу страницы. */
(function () {
  const btn = document.getElementById("toTop");
  if (!btn) return;

  function toggle() {
    btn.classList.toggle("is-visible", window.scrollY > 600);
  }

  window.addEventListener("scroll", toggle, { passive: true });
  toggle();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

/* ═══════════ ПОДГОНКА РАЗМЕРА АНИМАЦИЙ ═══════════
   Анимации на странице «Технологии» нарисованы в фиксированном
   размере 640×400 пикселей (так они были сделаны на оригинальном
   сайте). Этот код измеряет ширину места, куда вставлена анимация,
   и пропорционально уменьшает/увеличивает её — поэтому анимации
   аккуратно выглядят и на телефоне, и на большом мониторе. */
(function () {
  const frames = document.querySelectorAll(".anim__frame");
  if (!frames.length) return;

  function scale() {
    frames.forEach((frame) => {
      const iframe = frame.querySelector("iframe");
      if (!iframe) return;
      const k = frame.clientWidth / 640;
      iframe.style.transform = "scale(" + k + ")";
    });
  }

  window.addEventListener("resize", scale);
  window.addEventListener("load", scale);
  scale();
})();

/* ═══════════ СПИСОК ПУБЛИКАЦИЙ (страница «Библиотека») ═══════════
   Карточки публикаций не написаны в HTML вручную — скрипт строит их
   автоматически из списка в файле js/library-data.js. Поэтому чтобы
   добавить презентацию, достаточно дописать одну запись в тот файл.
   Здесь же работают кнопки-фильтры по темам (Все / Водоизоляция /
   Пескоизоляция / МУН): при нажатии список перестраивается. */
(function () {
  const list = document.getElementById("libraryList");
  // Если на этой странице нет списка публикаций — ничего не делаем
  if (!list || !window.PUBLICATIONS) return;

  // Какой фильтр включён сейчас ("all" = показывать всё)
  let activeCat = "all";

  function esc(s) {
    return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  window.renderLibrary = function () {
    const ui = LIB_UI[currentLang] || LIB_UI.ru;
    const items = window.PUBLICATIONS
      .filter((p) => activeCat === "all" || p.cat === activeCat)
      .slice()
      .sort((a, b) => b.year - a.year);

    list.innerHTML = items.map((p) => {
      const action = p.file
        ? '<a class="pub__dl" href="' + esc(p.file) + '" target="_blank" rel="noopener">⭳ ' + ui.download + "</a>"
        : '<span class="pub__badge">' + ui.paper + "</span>";
      return (
        '<article class="pub">' +
          '<div class="pub__year">' + p.year + "</div>" +
          "<div>" +
            '<div class="pub__title">' + esc(p.title) + "</div>" +
            (p.authors ? '<div class="pub__authors">' + esc(p.authors) + "</div>" : "") +
            (p.ref ? '<div class="pub__ref">' + esc(p.ref) + "</div>" : "") +
          "</div>" +
          action +
        "</article>"
      );
    }).join("");
  };

  const filters = document.getElementById("libFilters");
  if (filters) {
    filters.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      activeCat = chip.dataset.cat;
      filters.querySelectorAll(".chip").forEach((c) => c.classList.toggle("is-active", c === chip));
      window.renderLibrary();
    });
  }

  window.renderLibrary();
})();
