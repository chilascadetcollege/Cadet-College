// Multilingual Dictionary
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_mission: "Mission",
        nav_faculty: "Faculty",
        nav_contact: "Contact Us",
        hero_badge: "Quality Education",
        hero_title: "Welcome to <br> <span class='gradient-text'>Cadet College Diamer</span>",
        hero_desc: "Molding the future leaders. We provide quality education and personality development through cognitive and physical grooming over 125 acres of breathtaking campus.",
        hero_btn_explore: "Explore Campus <i class='fa-solid fa-arrow-right'></i>",
        hero_btn_faculty: "<i class='fa-solid fa-users'></i> Meet Faculty",
        hero_card1_title: "Grooming",
        hero_card1_desc: "Cognitive & Physical Development",
        hero_card2_title: "125 Acres",
        hero_card2_desc: "Vast Academic & Sports Facilities",
        scroll_down: "Scroll Down",
        about_subtitle: "Our Campus",
        about_title: "A Legacy of <span class='accent-text'>Excellence</span>",
        about_p1: "The campus is spread over an area of <strong>125 acres</strong>. This expansive area includes a state-of-the-art Administrative Block cum Academic block, ensuring the best environment for learning.",
        about_p2: "Overall grooming of personal of cadets is the hallmark of Cadet College; therefore, along with cognitive development, physical development is also given due importance in the new campus.",
        about_f1: "Triple-storied Auditorium & Mess",
        about_f2: "Three Dedicated Hostels",
        about_f3: "In-house Hospital Facility",
        about_f4: "Wide Playgrounds (Hockey, Cricket, etc.)",
        stat_acres: "Acres of Campus",
        stat_hostels: "Hostel Blocks",
        stat_sports: "Sports Grounds",
        stat_riding: "Upcoming Riding Facility",
        mission_text: "The Mission of Cadet College Diamer is to provide quality education, personality development.",
        faculty_subtitle: "Meet The Team",
        faculty_title: "Our Esteemed <span class='accent-text'>Faculty</span>",
        faculty_desc: "Dedicated professionals shaping the future leaders.",
        virtual_visit_subtitle: "Virtual Visit",
        virtual_visit_title: "Explore From <span class='accent-text'>Anywhere</span>",
        gallery_subtitle: "Our Campus",
        gallery_title: "Photo <span class='accent-text'>Gallery</span>",
        gal_academics: "Academics Block",
        gal_dining: "Mess / Dining Hall",
        gal_events: "Auditorium",
        gal_sports: "Playgrounds",
        contact_title: "Get In <span class='accent-text'>Touch</span>",
        contact_loc_title: "Location",
        contact_loc_desc: "Cadet College Diamer, Gohar Abad, Chilas, Gilgit-Baltistan",
        contact_phone_title: "Phone",
        contact_phone_desc: "Admin Office: (Not Provided)",
        contact_email_title: "Email",
    },
    ur: {
        nav_home: "ہوم",
        nav_about: "ہمارے بارے میں",
        nav_mission: "مشن",
        nav_faculty: "اساتذہ",
        nav_contact: "رابطہ کریں",
        hero_badge: "معیاری تعلیم",
        hero_title: "خوش آمدید <br> <span class='gradient-text'>کیڈٹ کالج دیامر</span>",
        hero_desc: "مستقبل کے معماروں کی تشکیل۔ ہم 125 ایکڑ کے وسیع کیمپس میں ذہنی اور جسمانی تربیت کے ذریعے معیاری تعلیم اور شخصیت سازی فراہم کرتے ہیں۔",
        hero_btn_explore: "کیمپس دیکھیں <i class='fa-solid fa-arrow-left'></i>",
        hero_btn_faculty: "<i class='fa-solid fa-users'></i> اساتذہ سے ملیں",
        hero_card1_title: "گرومنگ",
        hero_card1_desc: "ذہنی اور جسمانی نشوونما",
        hero_card2_title: "125 ایکڑ",
        hero_card2_desc: "وسیع تعلیمی اور کھیلوں کی سہولیات",
        scroll_down: "نیچے سکرول کریں",
        about_subtitle: "ہمارا کیمپس",
        about_title: "عظمت کی <span class='accent-text'>روایت</span>",
        about_p1: "کیمپس <strong>125 ایکڑ</strong> کے رقبے پر پھیلا ہوا ہے۔ اس وسیع رقبے میں ایک جدید ترین انتظامی اور اکیڈمک بلاک شامل ہے، جو سیکھنے کے بہترین ماحول کو یقینی بناتا ہے۔",
        about_p2: "کیڈٹس کی مجموعی گرومنگ کیڈٹ کالج کی پہچان ہے۔ اس لیے، نئے کیمپس میں ذہنی نشوونما کے ساتھ ساتھ جسمانی نشوونما کو بھی پوری اہمیت دی گئی ہے۔",
        about_f1: "تین منزلہ آڈیٹوریم اور میس",
        about_f2: "تین مخصوص ہاسٹلز",
        about_f3: "کیمپس کے اندر ہسپتال کی سہولت",
        about_f4: "وسیع کھیل کے میدان (ہاکی، کرکٹ وغیرہ)",
        stat_acres: "ایکڑ کیمپس",
        stat_hostels: "ہاسٹل بلاکس",
        stat_sports: "کھیل کے میدان",
        stat_riding: "آئندہ گھڑ سواری کی سہولت",
        mission_text: "کیڈٹ کالج دیامر کا مشن معیاری تعلیم، شخصیت کی نشوونما کو یقینی بنانا ہے۔",
        faculty_subtitle: "ہماری ٹیم",
        faculty_title: "ہمارے قابل فخر <span class='accent-text'>اساتذہ</span>",
        faculty_desc: "مستقبل کے لیڈروں کو سنوارنے والے ماہر پیشہ ور افراد۔",
        virtual_visit_subtitle: "ورچوئل وزٹ",
        virtual_visit_title: "کہیں سے بھی <span class='accent-text'>سیر کریں</span>",
        gallery_subtitle: "ہمارا کیمپس",
        gallery_title: "تصویری <span class='accent-text'>گیلری</span>",
        gal_academics: "اکیڈمکس بلاک",
        gal_dining: "میس / ڈائننگ ہال",
        gal_events: "آڈیٹوریم",
        gal_sports: "کھیل کے میدان",
        contact_title: "ہم سے <span class='accent-text'>رابطہ کریں</span>",
        contact_loc_title: "مقام / پتہ",
        contact_loc_desc: "کیڈٹ کالج دیامر، گوہر آباد، چلاس، گلگت بلتستان",
        contact_phone_title: "فون نمبر",
        contact_phone_desc: "ایڈمن آفس (فراہم نہیں کیا گیا)",
        contact_email_title: "ای میل",
    }
};

// 16 Complete Faculty members scraped from Live website
const facultyData = [
    {
        name: { en: "Muhammad Khan", ur: "محمد خان" },
        role: { en: "Vice Principal", ur: "وائس پرنسپل" },
        desc: { en: "MS in Micro Biology Abasyn University Peshawar, B.ed From Sarhad University", ur: "ایم ایس مائیکرو بائیولوجی اباسین یونیورسٹی پشاور، بی ایڈ سرحد یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747574098743-removebg-preview.png"
    },
    {
        name: { en: "Mr. Karam Shah", ur: "کرم شاہ" },
        role: { en: "Assistant Professor in Mathematics", ur: "اسسٹنٹ پروفیسر ریاضی" },
        desc: { en: "M.sc in Mathematics from Islamia college Peshawar. B.Ed From AIOU Islamabad", ur: "ایم ایس سی ریاضی اسلامیہ کالج پشاور، بی ایڈ علامہ اقبال اوپن یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-18-at-9.06.32-PM.jpeg"
    },
    {
        name: { en: "Mr. M. Imran Khan", ur: "محمد عمران خان" },
        role: { en: "Lecturer In chemistry", ur: "لیکچرر کیمسٹری" },
        desc: { en: "M.Phil From Peshawar University B.Ed from AIOU Islamabad", ur: "ایم فل پشاور یونیورسٹی، بی ایڈ علامہ اقبال اوپن یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747573041403-removebg-preview.png"
    },
    {
        name: { en: "Mr. Akhtar Rehman", ur: "اختر رحمان" },
        role: { en: "Lecturer in Pak Studies", ur: "لیکچرر مطالعہ پاکستان" },
        desc: { en: "M.A Pakistan Studies from Sargodha University", ur: "ایم اے مطالعہ پاکستان، سرگودھا یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-1.15.21-PM.jpeg"
    },
    {
        name: { en: "Mr. M. Sadiq", ur: "محمد صادق" },
        role: { en: "Lecturer In Islamiat", ur: "لیکچرر اسلامیات" },
        desc: { en: "M.A Islamiat From Peshawar University B.Ed from AIOU Islamabad", ur: "ایم اے اسلامیات پشاور یونیورسٹی، بی ایڈ علامہ اقبال اوپن یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747575933116-removebg-preview.png"
    },
    {
        name: { en: "Mr. Ziaullah", ur: "ضیاء اللہ" },
        role: { en: "Lecturer In Urdu", ur: "لیکچرر اردو" },
        desc: { en: "M.A Urdu From University of the Punjab B.Ed from AIOU Islamabad", ur: "ایم اے اردو پنجاب یونیورسٹی، بی ایڈ علامہ اقبال اوپن یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747577341749-removebg-preview.png"
    },
    {
        name: { en: "Mr. Mazhar Ali", ur: "مظہر علی" },
        role: { en: "Lecturer In Physics", ur: "لیکچرر فزکس" },
        desc: { en: "Bs Physics From KIU Gilgit, B.Ed from AIOU Islamabad", ur: "بی ایس فزکس قراقرم انٹرنیشنل یونیورسٹی، بی ایڈ علامہ اقبال اوپن یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747573865871-removebg-preview.png"
    },
    {
        name: { en: "Mr. Ahmad Khan", ur: "احمد خان" },
        role: { en: "Lecturer In Physics", ur: "لیکچرر فزکس" },
        desc: { en: "Bs Physics From KIU Gilgit, B.Ed from AIOU Islamabad", ur: "بی ایس فزکس قراقرم انٹرنیشنل یونیورسٹی، بی ایڈ علامہ اقبال اوپن یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747578628919-removebg-preview.png"
    },
    {
        name: { en: "Mr. Riaz Ali", ur: "ریاض علی" },
        role: { en: "Lecturer In Biology", ur: "لیکچرر بائیولوجی" },
        desc: { en: "M.Phil in wild life ecology From Qaid-i- Azam University Islamabad, Bs hons zoology from KIU", ur: "ایم فل وائلڈ لائف قائداعظم یونیورسٹی، بی ایس زولوجی قراقرم انٹرنیشنل یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747580719096-removebg-preview.png"
    },
    {
        name: { en: "Mr. Asif Ali", ur: "آصف علی" },
        role: { en: "Lecturer In English", ur: "لیکچرر انگریزی" },
        desc: { en: "M.A English From NUML University Islamabad, B.Ed from Sarhad University Peshawar.", ur: "ایم اے انگریزی نمل یونیورسٹی اسلام آباد، بی ایڈ سرحد یونیورسٹی پشاور" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747578680122-removebg-preview.png"
    },
    {
        name: { en: "Mr. M. Farooq", ur: "محمد فاروق" },
        role: { en: "Lecturer In Islamiat", ur: "لیکچرر اسلامیات" },
        desc: { en: "M.Phil Islamiat From AIOU Islamabad, B.Ed from KIU Gilgt", ur: "ایم فل اسلامیات علامہ اقبال اوپن یونیورسٹی، بی ایڈ قراقرم انٹرنیشنل یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747578740016-removebg-preview.png"
    },
    {
        name: { en: "Mr. Asif Hussain", ur: "آصف حسین" },
        role: { en: "Lecturer In Urdu", ur: "لیکچرر اردو" },
        desc: { en: "M.Phil Urdu From KIU GILGIT, B.Ed from VU Lahore", ur: "ایم فل اردو قراقرم انٹرنیشنل یونیورسٹی، بی ایڈ ورچوئل یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-10.28.10-AM.jpeg"
    },
    {
        name: { en: "Mr. Imtiaz Alam", ur: "امتیاز عالم" },
        role: { en: "Lecturer In chemistry", ur: "لیکچرر کیمسٹری" },
        desc: { en: "Bs Chemistry From Abbottabad University, B.Ed from Sarhad University Peshawar", ur: "بی ایس کیمسٹری ایبٹ آباد یونیورسٹی، بی ایڈ سرحد یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-10.27.18-AM.jpeg"
    },
    {
        name: { en: "Dr. Izaz Ali", ur: "ڈاکٹر اعزاز علی" },
        role: { en: "Lecturer of Biology", ur: "لیکچرر بائیولوجی" },
        desc: { en: "PhD From Anhui Normal University China", ur: "پی ایچ ڈی آنہوئی نارمل یونیورسٹی، چین" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-10.27.44-AM.jpeg"
    },
    {
        name: { en: "Mr. Waseem Sardar", ur: "وسیم سردار" },
        role: { en: "Lecturer in Mathematics", ur: "لیکچرر ریاضی" },
        desc: { en: "Phd Scholar (University of Peshawar), MS in Mathematics from Qurtuba University Peshawar. M.Ed From University of Swabi.", ur: "پی ایچ ڈی اسکالر، ایم ایس ریاضی قرطبہ یونیورسٹی پشاور" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-8.48.15-PM.jpeg"
    },
    {
        name: { en: "Mr. Kashif Ur Rehman", ur: "کاشف الرحمان" },
        role: { en: "Lecturer in Computer Science", ur: "لیکچرر کمپیوٹر سائنس" },
        desc: { en: "MCS From Peshawar University", ur: "ایم سی ایس پشاور یونیورسٹی" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-8.45.48-PM.jpeg"
    }
];

// Admission Translations
const admissionTranslations = {
    ur: {
        nav_admission: 'داخلے',
        nav_8th: 'آٹھویں کلاس',
        nav_1st_year: 'پہلا سال',
        admissions_title: 'کیڈٹ کالج دیامر میں شامل ہوں',
        admissions_desc: 'اپنے داخلے کی سطح کا انتخاب کریں اور داخلے کے طریقہ کار کے بارے میں مزید جانیں۔',
        class_8_admission: 'آٹھویں کلاس داخلہ',
        admission_notice_8: 'داخلہ نوٹس – کلاس 8',
        class_8_notice_desc_1: 'کلاس 8 کے داخلے فی الحال بند ہیں۔',
        1st_year_admission: 'فرسٹ ایئر داخلہ',
        admission_notice_1st_year: 'داخلہ نوٹس – فرسٹ ایئر',
        class_1st_year_notice_desc_1: 'اس وقت کیڈٹ کالج دیامر میں گیارہویں جماعت کے داخلے نہیں کھلے ہیں۔ براہ کرم اپڈیٹس کے لیے ہمارے ساتھ جڑے رہیں۔',
        class_notice_desc_2: 'اگلی انٹیک کے لیے داخلے کا شیڈول مقررہ وقت پر جاری کیا جائے گا۔ درخواست دہندگان اور والدین کو ہدایت کی جاتی ہے کہ وہ تازہ ترین معلومات کے لیے باقاعدگی سے سرکاری ویب سائٹ دیکھیں۔',
        class_notice_desc_3: 'مزید معلومات کے لیے، براہ کرم کام کے اوقات کے دوران داخلہ آفس سے رابطہ کریں۔',
        class_notice_desc_4: 'آپ کی دلچسپی کا شکریہ۔'
    },
    en: {
        nav_admission: 'Admissions',
        nav_8th: 'Class 8th',
        nav_1st_year: '1st Year',
        admissions_title: 'Join Cadet College Diamer',
        admissions_desc: 'Choose your level of entry and find out more about the admission process.',
        class_8_admission: 'Class 8th Admission',
        admission_notice_8: 'Admission Notice – Class 8',
        class_8_notice_desc_1: 'Admissions for Class 8 are currently closed.',
        1st_year_admission: '1st Year Admission',
        admission_notice_1st_year: 'Admission Notice – 1st Year',
        class_1st_year_notice_desc_1: 'Currently admissions for grade XI at Cadet College Diamer are not open. please stay connected with us for updates.',
        class_notice_desc_2: 'The admission schedule for the next intake will be announced in due course. Applicants and parents are advised to regularly visit the official website for updates.',
        class_notice_desc_3: 'For further information, please contact the admission office during working hours.',
        class_notice_desc_4: 'Thank you for your interest.'
    }
};

// Merge translations immediately
if (typeof translations !== 'undefined') {
    translations.ur = { ...translations.ur, ...admissionTranslations.ur };
    translations.en = { ...translations.en, ...admissionTranslations.en };
}

// Ensure init function can run when DOM is ready or if it already is ready
const initScript = () => {
    document.documentElement.classList.add('js-enabled');
    document.body.classList.add('has-custom-cursor');

    let currentLang = localStorage.getItem('ccc_lang') || 'en';

    // Hover effects for cursor
    const bindCursorHover = () => {
        const cursorOutline = document.querySelector('.cursor-outline');
        document.querySelectorAll('a, button, .hover-tilt').forEach(el => {
            // Avoid duplicate listeners
            el.removeEventListener('mouseenter', el._mEnter || (() => { }));
            el.removeEventListener('mouseleave', el._mLeave || (() => { }));

            el._mEnter = () => {
                if (cursorOutline) {
                    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                    cursorOutline.style.border = '1px solid var(--accent)';
                }
            };
            el._mLeave = () => {
                if (cursorOutline) {
                    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursorOutline.style.border = '1px solid var(--glass-border)';
                }
            };

            el.addEventListener('mouseenter', el._mEnter);
            el.addEventListener('mouseleave', el._mLeave);
        });
    };

    // 1. Populate Faculty Information Dynamically
    const facultyGrid = document.querySelector('.faculty-grid');

    const renderFacultyCards = (lang) => {
        if (!facultyGrid) return;
        facultyGrid.innerHTML = ''; // Clear existing

        facultyData.forEach((member, index) => {
            const delay = index * 50;
            const card = document.createElement('div');
            // Add 'reveal' directly
            card.className = 'faculty-card glass-card hover-tilt reveal';
            card.style.transitionDelay = `${delay}ms`;

            card.innerHTML = `
                <div class="faculty-img-wrapper" style="width:120px; height:120px; border-radius:50%; margin: 0 auto 1.5rem auto; overflow:hidden; border: 3px solid var(--accent); box-shadow: 0 0 20px rgba(245, 166, 35, 0.3);">
                    <img src="${member.img}" alt="${member.name[lang]}" style="width:100%; height:100%; object-fit:cover; filter: contrast(1.1) saturate(1.2);">
                </div>
                <h3 class="faculty-name">${member.name[lang]}</h3>
                <p class="faculty-role">${member.role[lang]}</p>
                <p class="faculty-desc">${member.desc[lang]}</p>
            `;

            facultyGrid.appendChild(card);

            // Observe new elements
            if (window.revealObserver) {
                window.revealObserver.observe(card);
            }
        });

        // Rebind cursor specific classes newly added to DOM
        setTimeout(bindCursorHover, 100);
    };

    // Function to process translations
    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('ccc_lang', lang);
        document.documentElement.lang = lang;

        // Handle CSS direction and layout overrides
        if (lang === 'ur') {
            document.body.classList.add('rtl-mode');
            const langEl = document.getElementById('lang-text');
            if (langEl) langEl.innerText = 'English';
        } else {
            document.body.classList.remove('rtl-mode');
            const langEl = document.getElementById('lang-text');
            if (langEl) langEl.innerText = 'اردو';
        }

        // Translate fixed elements using data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Re-render faculty cards
        renderFacultyCards(lang);
    };

    // 1. Audio Greeting System for Home Page
    let welcomePlayed = false;

    const playWelcomeGreeting = (lang) => {
        if (welcomePlayed) return;

        // Only play on the Home page (check for hero section 'home')
        const isHomePage = document.getElementById('home');
        if (!isHomePage) return;

        // Ensure we stop any previous playing audio
        if (window.currentAudio) {
            window.currentAudio.pause();
        }

        const textEn = "Welcome to Cadet College Diamer. Molding the future leaders. We provide quality education and personality development through cognitive and physical grooming over 125 acres of breathtaking campus.";

        // Native Urdu script (numbers replaced with words for better TTS API mapping)
        const textUrNative = "کیڈٹ کالج دیامر میں خوش آمدید۔ مستقبل کے معماروں کی تشکیل۔ ہم ایک سو پچیس ایکڑ کیمپس میں ذہنی اور جسمانی تربیت کے ذریعے معیاری تعلیم اور شخصیت سازی فراہم کرتے ہیں۔";

        const playOnlineVoice = () => {
            let audioUrl = "";
            let playbackSpeed = 0.85; // Natural slow pace

            if (lang === 'en') {
                audioUrl = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=en&q=${encodeURIComponent(textEn)}`;
            } else {
                // Using 'ur' for native Urdu female voice via Google TTS
                audioUrl = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=ur&q=${encodeURIComponent(textUrNative)}`;
            }

            const audio = new Audio(audioUrl);
            audio.playbackRate = playbackSpeed;
            window.currentAudio = audio; // Save reference

            audio.play().then(() => {
                welcomePlayed = true;
            }).catch(e => {
                console.log("Autoplay blocked, waiting for interaction.");
            });
        };

        playOnlineVoice();
    };

    // Attempt to play on load (may be blocked by browser autoplay policies)
    setTimeout(() => playWelcomeGreeting(currentLang), 1000);

    // Fallback: Play on first user interaction if blocked
    const interactionTrigger = () => {
        if (!welcomePlayed) playWelcomeGreeting(currentLang);
    };

    // Bind to the document to ensure touches anywhere unlock audio securely
    ['click', 'touchstart'].forEach(evt => {
        document.addEventListener(evt, interactionTrigger, { once: true });
    });

    // Language Toggle Event
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLang === 'en' ? 'ur' : 'en';
            setLanguage(newLang);
            // Re-play greeting on language toggle
            welcomePlayed = false;
            playWelcomeGreeting(newLang);
        });
    }

    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        if (cursorDot) {
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
        }

        if (cursorOutline) {
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        }
    });

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        const icon = mobileToggle.querySelector('i');
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Scroll Header Effect
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            if (header) header.classList.add('scrolled');
        } else {
            if (header) header.classList.remove('scrolled');
        }
    });

    // Reveal Elements on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    if ('IntersectionObserver' in window) {
        window.revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.1 });
        revealElements.forEach(el => window.revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('active'));
    }

    // Number Counters
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const counterCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = target / speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    };

    if ('IntersectionObserver' in window && counters.length > 0) {
        const counterObserver = new IntersectionObserver(counterCallback, { threshold: 0.5 });
        counters.forEach(counter => counterObserver.observe(counter));
    } else {
        counters.forEach(c => c.innerText = c.getAttribute('data-target'));
    }

    // Finally initialize language and dynamic content
    setLanguage(currentLang);
    // Bind initial hover properties
    bindCursorHover();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScript);
} else {
    initScript();
}
