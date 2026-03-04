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
        nav_home: "ÛÙˆÙ…",
        nav_about: "ÛÙ…Ø§Ø±Û’ Ø¨Ø§Ø±Û’ Ù…ÛŒÚº",
        nav_mission: "Ù…Ø´Ù†",
        nav_faculty: "Ø§Ø³Ø§ØªØ°Û",
        nav_contact: "Ø±Ø§Ø¨Ø·Û Ú©Ø±ÛŒÚº",
        hero_badge: "Ù…Ø¹ÛŒØ§Ø±ÛŒ ØªØ¹Ù„ÛŒÙ…",
        hero_title: "Ø®ÙˆØ´ Ø¢Ù…Ø¯ÛŒØ¯ <br> <span class='gradient-text'>Ú©ÛŒÚˆÙ¹ Ú©Ø§Ù„Ø¬ Ø¯ÛŒØ§Ù…Ø±</span>",
        hero_desc: "Ù…Ø³ØªÙ‚Ø¨Ù„ Ú©Û’ Ù…Ø¹Ù…Ø§Ø±ÙˆÚº Ú©ÛŒ ØªØ´Ú©ÛŒÙ„Û” ÛÙ… 125 Ø§ÛŒÚ©Ú‘ Ú©Û’ ÙˆØ³ÛŒØ¹ Ú©ÛŒÙ…Ù¾Ø³ Ù…ÛŒÚº Ø°ÛÙ†ÛŒ Ø§ÙˆØ± Ø¬Ø³Ù…Ø§Ù†ÛŒ ØªØ±Ø¨ÛŒØª Ú©Û’ Ø°Ø±ÛŒØ¹Û’ Ù…Ø¹ÛŒØ§Ø±ÛŒ ØªØ¹Ù„ÛŒÙ… Ø§ÙˆØ± Ø´Ø®ØµÛŒØª Ø³Ø§Ø²ÛŒ ÙØ±Ø§ÛÙ… Ú©Ø±ØªÛ’ ÛÛŒÚºÛ”",
        hero_btn_explore: "Ú©ÛŒÙ…Ù¾Ø³ Ø¯ÛŒÚ©Ú¾ÛŒÚº <i class='fa-solid fa-arrow-left'></i>",
        hero_btn_faculty: "<i class='fa-solid fa-users'></i> Ø§Ø³Ø§ØªØ°Û Ø³Û’ Ù…Ù„ÛŒÚº",
        hero_card1_title: "Ú¯Ø±ÙˆÙ…Ù†Ú¯",
        hero_card1_desc: "Ø°ÛÙ†ÛŒ Ø§ÙˆØ± Ø¬Ø³Ù…Ø§Ù†ÛŒ Ù†Ø´ÙˆÙˆÙ†Ù…Ø§",
        hero_card2_title: "125 Ø§ÛŒÚ©Ú‘",
        hero_card2_desc: "ÙˆØ³ÛŒØ¹ ØªØ¹Ù„ÛŒÙ…ÛŒ Ø§ÙˆØ± Ú©Ú¾ÛŒÙ„ÙˆÚº Ú©ÛŒ Ø³ÛÙˆÙ„ÛŒØ§Øª",
        scroll_down: "Ù†ÛŒÚ†Û’ Ø³Ú©Ø±ÙˆÙ„ Ú©Ø±ÛŒÚº",
        about_subtitle: "ÛÙ…Ø§Ø±Ø§ Ú©ÛŒÙ…Ù¾Ø³",
        about_title: "Ø¹Ø¸Ù…Øª Ú©ÛŒ <span class class='accent-text'>Ø±ÙˆØ§ÛŒØª</span>",
        about_p1: "Ú©ÛŒÙ…Ù¾Ø³ <strong>125 Ø§ÛŒÚ©Ú‘</strong> Ú©Û’ Ø±Ù‚Ø¨Û’ Ù¾Ø± Ù¾Ú¾ÛŒÙ„Ø§ ÛÙˆØ§ ÛÛ’Û” Ø§Ø³ ÙˆØ³ÛŒØ¹ Ø±Ù‚Ø¨Û’ Ù…ÛŒÚº Ø§ÛŒÚ© Ø¬Ø¯ÛŒØ¯ ØªØ±ÛŒÙ† Ø§Ù†ØªØ¸Ø§Ù…ÛŒ Ø§ÙˆØ± Ø§Ú©ÛŒÚˆÙ…Ú© Ø¨Ù„Ø§Ú© Ø´Ø§Ù…Ù„ ÛÛ’ØŒ Ø¬Ùˆ Ø³ÛŒÚ©Ú¾Ù†Û’ Ú©Û’ Ø¨ÛØªØ±ÛŒÙ† Ù…Ø§Ø­ÙˆÙ„ Ú©Ùˆ ÛŒÙ‚ÛŒÙ†ÛŒ Ø¨Ù†Ø§ØªØ§ ÛÛ’Û”",
        about_p2: "Ú©ÛŒÚˆÙ¹Ø³ Ú©ÛŒ Ù…Ø¬Ù…ÙˆØ¹ÛŒ Ú¯Ø±ÙˆÙ…Ù†Ú¯ Ú©ÛŒÚˆÙ¹ Ú©Ø§Ù„Ø¬ Ú©ÛŒ Ù¾ÛÚ†Ø§Ù† ÛÛ’Û” Ø§Ø³ Ù„ÛŒÛ’ØŒ Ù†Ø¦Û’ Ú©ÛŒÙ…Ù¾Ø³ Ù…ÛŒÚº Ø°ÛÙ†ÛŒ Ù†Ø´ÙˆÙˆÙ†Ù…Ø§ Ú©Û’ Ø³Ø§ØªÚ¾ Ø³Ø§ØªÚ¾ Ø¬Ø³Ù…Ø§Ù†ÛŒ Ù†Ø´ÙˆÙˆÙ†Ù…Ø§ Ú©Ùˆ Ø¨Ú¾ÛŒ Ù¾ÙˆØ±ÛŒ Ø§ÛÙ…ÛŒØª Ø¯ÛŒ Ú¯Ø¦ÛŒ ÛÛ’Û”",
        about_f1: "ØªÛŒÙ† Ù…Ù†Ø²Ù„Û Ø¢ÚˆÛŒÙ¹ÙˆØ±ÛŒÙ… Ø§ÙˆØ± Ù…ÛŒØ³",
        about_f2: "ØªÛŒÙ† Ù…Ø®ØµÙˆØµ ÛØ§Ø³Ù¹Ù„Ø²",
        about_f3: "Ú©ÛŒÙ…Ù¾Ø³ Ú©Û’ Ø§Ù†Ø¯Ø± ÛØ³Ù¾ØªØ§Ù„ Ú©ÛŒ Ø³ÛÙˆÙ„Øª",
        about_f4: "ÙˆØ³ÛŒØ¹ Ú©Ú¾ÛŒÙ„ Ú©Û’ Ù…ÛŒØ¯Ø§Ù† (ÛØ§Ú©ÛŒØŒ Ú©Ø±Ú©Ù¹ ÙˆØºÛŒØ±Û)",
        stat_acres: "Ø§ÛŒÚ©Ú‘ Ú©ÛŒÙ…Ù¾Ø³",
        stat_hostels: "ÛØ§Ø³Ù¹Ù„ Ø¨Ù„Ø§Ú©Ø³",
        stat_sports: "Ú©Ú¾ÛŒÙ„ Ú©Û’ Ù…ÛŒØ¯Ø§Ù†",
        stat_riding: "Ø¢Ø¦Ù†Ø¯Û Ú¯Ú¾Ú‘ Ø³ÙˆØ§Ø±ÛŒ Ú©ÛŒ Ø³ÛÙˆÙ„Øª",
        mission_text: "Ú©ÛŒÚˆÙ¹ Ú©Ø§Ù„Ø¬ Ø¯ÛŒØ§Ù…Ø± Ú©Ø§ Ù…Ø´Ù† Ù…Ø¹ÛŒØ§Ø±ÛŒ ØªØ¹Ù„ÛŒÙ…ØŒ Ø´Ø®ØµÛŒØª Ú©ÛŒ Ù†Ø´ÙˆÙˆÙ†Ù…Ø§ Ú©Ùˆ ÛŒÙ‚ÛŒÙ†ÛŒ Ø¨Ù†Ø§Ù†Ø§ ÛÛ’Û”",
        faculty_subtitle: "ÛÙ…Ø§Ø±ÛŒ Ù¹ÛŒÙ…",
        faculty_title: "ÛÙ…Ø§Ø±Û’ Ù‚Ø§Ø¨Ù„ ÙØ®Ø± <span class='accent-text'>Ø§Ø³Ø§ØªØ°Û</span>",
        faculty_desc: "Ù…Ø³ØªÙ‚Ø¨Ù„ Ú©Û’ Ù„ÛŒÚˆØ±ÙˆÚº Ú©Ùˆ Ø³Ù†ÙˆØ§Ø±Ù†Û’ ÙˆØ§Ù„Û’ Ù…Ø§ÛØ± Ù¾ÛŒØ´Û ÙˆØ± Ø§ÙØ±Ø§Ø¯Û”",
        virtual_visit_subtitle: "ÙˆØ±Ú†ÙˆØ¦Ù„ ÙˆØ²Ù¹",
        virtual_visit_title: "Ú©ÛÛŒÚº Ø³Û’ Ø¨Ú¾ÛŒ <span class='accent-text'>Ø³ÛŒØ± Ú©Ø±ÛŒÚº</span>",
        gallery_subtitle: "ÛÙ…Ø§Ø±Ø§ Ú©ÛŒÙ…Ù¾Ø³",
        gallery_title: "ØªØµÙˆÛŒØ±ÛŒ <span class='accent-text'>Ú¯ÛŒÙ„Ø±ÛŒ</span>",
        gal_academics: "Ø§Ú©ÛŒÚˆÙ…Ú©Ø³ Ø¨Ù„Ø§Ú©",
        gal_dining: "Ù…ÛŒØ³ / ÚˆØ§Ø¦Ù†Ù†Ú¯ ÛØ§Ù„",
        gal_events: "Ø¢ÚˆÛŒÙ¹ÙˆØ±ÛŒÙ…",
        gal_sports: "Ú©Ú¾ÛŒÙ„ Ú©Û’ Ù…ÛŒØ¯Ø§Ù†",
        contact_title: "ÛÙ… Ø³Û’ <span class='accent-text'>Ø±Ø§Ø¨Ø·Û Ú©Ø±ÛŒÚº</span>",
        contact_loc_title: "Ù…Ù‚Ø§Ù… / Ù¾ØªÛ",
        contact_loc_desc: "Ú©ÛŒÚˆÙ¹ Ú©Ø§Ù„Ø¬ Ø¯ÛŒØ§Ù…Ø±ØŒ Ú¯ÙˆÛØ± Ø¢Ø¨Ø§Ø¯ØŒ Ú†Ù„Ø§Ø³ØŒ Ú¯Ù„Ú¯Øª Ø¨Ù„ØªØ³ØªØ§Ù†",
        contact_phone_title: "ÙÙˆÙ† Ù†Ù…Ø¨Ø±",
        contact_phone_desc: "Ø§ÛŒÚˆÙ…Ù† Ø¢ÙØ³ (ÙØ±Ø§ÛÙ… Ù†ÛÛŒÚº Ú©ÛŒØ§ Ú¯ÛŒØ§)",
        contact_email_title: "Ø§ÛŒ Ù…ÛŒÙ„",
    }
};

// 16 Complete Faculty members scraped from Live website
const facultyData = [
    {
        name: { en: "Muhammad Khan", ur: "Ù…Ø­Ù…Ø¯ Ø®Ø§Ù†" },
        role: { en: "Vice Principal", ur: "ÙˆØ§Ø¦Ø³ Ù¾Ø±Ù†Ø³Ù¾Ù„" },
        desc: { en: "MS in Micro Biology Abasyn University Peshawar, B.ed From Sarhad University", ur: "Ø§ÛŒÙ… Ø§ÛŒØ³ Ù…Ø§Ø¦ÛŒÚ©Ø±Ùˆ Ø¨Ø§Ø¦ÛŒÙˆÙ„ÙˆØ¬ÛŒ Ø§Ø¨Ø§Ø³ÛŒÙ† ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ Ù¾Ø´Ø§ÙˆØ±ØŒ Ø¨ÛŒ Ø§ÛŒÚˆ Ø³Ø±Ø­Ø¯ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747574098743-removebg-preview.png"
    },
    {
        name: { en: "Mr. Karam Shah", ur: "Ú©Ø±Ù… Ø´Ø§Û" },
        role: { en: "Assistant Professor in Mathematics", ur: "Ø§Ø³Ø³Ù¹Ù†Ù¹ Ù¾Ø±ÙˆÙÛŒØ³Ø± Ø±ÛŒØ§Ø¶ÛŒ" },
        desc: { en: "M.sc in Mathematics from Islamia college Peshawar. B.Ed From AIOU Islamabad", ur: "Ø§ÛŒÙ… Ø§ÛŒØ³ Ø³ÛŒ Ø±ÛŒØ§Ø¶ÛŒ Ø§Ø³Ù„Ø§Ù…ÛŒÛ Ú©Ø§Ù„Ø¬ Ù¾Ø´Ø§ÙˆØ±ØŒ Ø¨ÛŒ Ø§ÛŒÚˆ Ø¹Ù„Ø§Ù…Û Ø§Ù‚Ø¨Ø§Ù„ Ø§ÙˆÙ¾Ù† ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-18-at-9.06.32-PM.jpeg"
    },
    {
        name: { en: "Mr. M. Imran Khan", ur: "Ù…Ø­Ù…Ø¯ Ø¹Ù…Ø±Ø§Ù† Ø®Ø§Ù†" },
        role: { en: "Lecturer In chemistry", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ú©ÛŒÙ…Ø³Ù¹Ø±ÛŒ" },
        desc: { en: "M.Phil From Peshawar University B.Ed from AIOU Islamabad", ur: "Ø§ÛŒÙ… ÙÙ„ Ù¾Ø´Ø§ÙˆØ± ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒØŒ Ø¨ÛŒ Ø§ÛŒÚˆ Ø¹Ù„Ø§Ù…Û Ø§Ù‚Ø¨Ø§Ù„ Ø§ÙˆÙ¾Ù† ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747573041403-removebg-preview.png"
    },
    {
        name: { en: "Mr. Akhtar Rehman", ur: "Ø§Ø®ØªØ± Ø±Ø­Ù…Ø§Ù†" },
        role: { en: "Lecturer in Pak Studies", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ù…Ø·Ø§Ù„Ø¹Û Ù¾Ø§Ú©Ø³ØªØ§Ù†" },
        desc: { en: "M.A Pakistan Studies from Sargodha University", ur: "Ø§ÛŒÙ… Ø§Û’ Ù…Ø·Ø§Ù„Ø¹Û Ù¾Ø§Ú©Ø³ØªØ§Ù†ØŒ Ø³Ø±Ú¯ÙˆØ¯Ú¾Ø§ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-1.15.21-PM.jpeg"
    },
    {
        name: { en: "Mr. M. Sadiq", ur: "Ù…Ø­Ù…Ø¯ ØµØ§Ø¯Ù‚" },
        role: { en: "Lecturer In Islamiat", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ø§Ø³Ù„Ø§Ù…ÛŒØ§Øª" },
        desc: { en: "M.A Islamiat From Peshawar University B.Ed from AIOU Islamabad", ur: "Ø§ÛŒÙ… Ø§Û’ Ø§Ø³Ù„Ø§Ù…ÛŒØ§Øª Ù¾Ø´Ø§ÙˆØ± ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒØŒ Ø¨ÛŒ Ø§ÛŒÚˆ Ø¹Ù„Ø§Ù…Û Ø§Ù‚Ø¨Ø§Ù„ Ø§ÙˆÙ¾Ù† ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747575933116-removebg-preview.png"
    },
    {
        name: { en: "Mr. Ziaullah", ur: "Ø¶ÛŒØ§Ø¡ Ø§Ù„Ù„Û" },
        role: { en: "Lecturer In Urdu", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ø§Ø±Ø¯Ùˆ" },
        desc: { en: "M.A Urdu From University of the Punjab B.Ed from AIOU Islamabad", ur: "Ø§ÛŒÙ… Ø§Û’ Ø§Ø±Ø¯Ùˆ Ù¾Ù†Ø¬Ø§Ø¨ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒØŒ Ø¨ÛŒ Ø§ÛŒÚˆ Ø¹Ù„Ø§Ù…Û Ø§Ù‚Ø¨Ø§Ù„ Ø§ÙˆÙ¾Ù† ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747577341749-removebg-preview.png"
    },
    {
        name: { en: "Mr. Mazhar Ali", ur: "Ù…Ø¸ÛØ± Ø¹Ù„ÛŒ" },
        role: { en: "Lecturer In Physics", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± ÙØ²Ú©Ø³" },
        desc: { en: "Bs Physics From KIU Gilgit, B.Ed from AIOU Islamabad", ur: "Ø¨ÛŒ Ø§ÛŒØ³ ÙØ²Ú©Ø³ Ù‚Ø±Ø§Ù‚Ø±Ù… Ø§Ù†Ù¹Ø±Ù†ÛŒØ´Ù†Ù„ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒØŒ Ø¨ÛŒ Ø§ÛŒÚˆ Ø¹Ù„Ø§Ù…Û Ø§Ù‚Ø¨Ø§Ù„ Ø§ÙˆÙ¾Ù† ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747573865871-removebg-preview.png"
    },
    {
        name: { en: "Mr. Ahmad Khan", ur: "Ø§Ø­Ù…Ø¯ Ø®Ø§Ù†" },
        role: { en: "Lecturer In Physics", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± ÙØ²Ú©Ø³" },
        desc: { en: "Bs Physics From KIU Gilgit, B.Ed from AIOU Islamabad", ur: "Ø¨ÛŒ Ø§ÛŒØ³ ÙØ²Ú©Ø³ Ù‚Ø±Ø§Ù‚Ø±Ù… Ø§Ù†Ù¹Ø±Ù†ÛŒØ´Ù†Ù„ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒØŒ Ø¨ÛŒ Ø§ÛŒÚˆ Ø¹Ù„Ø§Ù…Û Ø§Ù‚Ø¨Ø§Ù„ Ø§ÙˆÙ¾Ù† ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747578628919-removebg-preview.png"
    },
    {
        name: { en: "Mr. Riaz Ali", ur: "Ø±ÛŒØ§Ø¶ Ø¹Ù„ÛŒ" },
        role: { en: "Lecturer In Biology", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ø¨Ø§Ø¦ÛŒÙˆÙ„ÙˆØ¬ÛŒ" },
        desc: { en: "M.Phil in wild life ecology From Qaid-i- Azam University Islamabad, Bs hons zoology from KIU", ur: "Ø§ÛŒÙ… ÙÙ„ ÙˆØ§Ø¦Ù„Úˆ Ù„Ø§Ø¦Ù Ù‚Ø§Ø¦Ø¯Ø§Ø¹Ø¸Ù… ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒØŒ Ø¨ÛŒ Ø§ÛŒØ³ Ø²ÙˆÙ„ÙˆØ¬ÛŒ Ù‚Ø±Ø§Ù‚Ø±Ù… Ø§Ù†Ù¹Ø±Ù†ÛŒØ´Ù†Ù„ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747580719096-removebg-preview.png"
    },
    {
        name: { en: "Mr. Asif Ali", ur: "Ø¢ØµÙ Ø¹Ù„ÛŒ" },
        role: { en: "Lecturer In English", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ø§Ù†Ú¯Ø±ÛŒØ²ÛŒ" },
        desc: { en: "M.A English From NUML University Islamabad, B.Ed from Sarhad University Peshawar.", ur: "Ø§ÛŒÙ… Ø§Û’ Ø§Ù†Ú¯Ø±ÛŒØ²ÛŒ Ù†Ù…Ù„ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ Ø§Ø³Ù„Ø§Ù… Ø¢Ø¨Ø§Ø¯ØŒ Ø¨ÛŒ Ø§ÛŒÚˆ Ø³Ø±Ø­Ø¯ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ Ù¾Ø´Ø§ÙˆØ±" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747578680122-removebg-preview.png"
    },
    {
        name: { en: "Mr. M. Farooq", ur: "Ù…Ø­Ù…Ø¯ ÙØ§Ø±ÙˆÙ‚" },
        role: { en: "Lecturer In Islamiat", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ø§Ø³Ù„Ø§Ù…ÛŒØ§Øª" },
        desc: { en: "M.Phil Islamiat From AIOU Islamabad, B.Ed from KIU Gilgt", ur: "Ø§ÛŒÙ… ÙÙ„ Ø§Ø³Ù„Ø§Ù…ÛŒØ§Øª Ø¹Ù„Ø§Ù…Û Ø§Ù‚Ø¨Ø§Ù„ Ø§ÙˆÙ¾Ù† ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒØŒ Ø¨ÛŒ Ø§ÛŒÚˆ Ù‚Ø±Ø§Ù‚Ø±Ù… Ø§Ù†Ù¹Ø±Ù†ÛŒØ´Ù†Ù„ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747578740016-removebg-preview.png"
    },
    {
        name: { en: "Mr. Asif Hussain", ur: "Ø¢ØµÙ Ø­Ø³ÛŒÙ†" },
        role: { en: "Lecturer In Urdu", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ø§Ø±Ø¯Ùˆ" },
        desc: { en: "M.Phil Urdu From KIU GILGIT, B.Ed from VU Lahore", ur: "Ø§ÛŒÙ… ÙÙ„ Ø§Ø±Ø¯Ùˆ Ù‚Ø±Ø§Ù‚Ø±Ù… Ø§Ù†Ù¹Ø±Ù†ÛŒØ´Ù†Ù„ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒØŒ Ø¨ÛŒ Ø§ÛŒÚˆ ÙˆØ±Ú†ÙˆØ¦Ù„ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-10.28.10-AM.jpeg"
    },
    {
        name: { en: "Mr. Imtiaz Alam", ur: "Ø§Ù…ØªÛŒØ§Ø² Ø¹Ø§Ù„Ù…" },
        role: { en: "Lecturer In chemistry", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ú©ÛŒÙ…Ø³Ù¹Ø±ÛŒ" },
        desc: { en: "Bs Chemistry From Abbottabad University, B.Ed from Sarhad University Peshawar", ur: "Ø¨ÛŒ Ø§ÛŒØ³ Ú©ÛŒÙ…Ø³Ù¹Ø±ÛŒ Ø§ÛŒØ¨Ù¹ Ø¢Ø¨Ø§Ø¯ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒØŒ Ø¨ÛŒ Ø§ÛŒÚˆ Ø³Ø±Ø­Ø¯ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-10.27.18-AM.jpeg"
    },
    {
        name: { en: "Dr. Izaz Ali", ur: "ÚˆØ§Ú©Ù¹Ø± Ø§Ø¹Ø²Ø§Ø² Ø¹Ù„ÛŒ" },
        role: { en: "Lecturer of Biology", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ø¨Ø§Ø¦ÛŒÙˆÙ„ÙˆØ¬ÛŒ" },
        desc: { en: "PhD From Anhui Normal University China", ur: "Ù¾ÛŒ Ø§ÛŒÚ† ÚˆÛŒ Ø¢Ù†ÛÙˆØ¦ÛŒ Ù†Ø§Ø±Ù…Ù„ ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒØŒ Ú†ÛŒÙ†" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-10.27.44-AM.jpeg"
    },
    {
        name: { en: "Mr. Waseem Sardar", ur: "ÙˆØ³ÛŒÙ… Ø³Ø±Ø¯Ø§Ø±" },
        role: { en: "Lecturer in Mathematics", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ø±ÛŒØ§Ø¶ÛŒ" },
        desc: { en: "Phd Scholar (University of Peshawar), MS in Mathematics from Qurtuba University Peshawar. M.Ed From University of Swabi.", ur: "Ù¾ÛŒ Ø§ÛŒÚ† ÚˆÛŒ Ø§Ø³Ú©Ø§Ù„Ø±ØŒ Ø§ÛŒÙ… Ø§ÛŒØ³ Ø±ÛŒØ§Ø¶ÛŒ Ù‚Ø±Ø·Ø¨Û ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ Ù¾Ø´Ø§ÙˆØ±" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-8.48.15-PM.jpeg"
    },
    {
        name: { en: "Mr. Kashif Ur Rehman", ur: "Ú©Ø§Ø´Ù Ø§Ù„Ø±Ø­Ù…Ø§Ù†" },
        role: { en: "Lecturer in Computer Science", ur: "Ù„ÛŒÚ©Ú†Ø±Ø± Ú©Ù…Ù¾ÛŒÙˆÙ¹Ø± Ø³Ø§Ø¦Ù†Ø³" },
        desc: { en: "MCS From Peshawar University", ur: "Ø§ÛŒÙ… Ø³ÛŒ Ø§ÛŒØ³ Ù¾Ø´Ø§ÙˆØ± ÛŒÙˆÙ†ÛŒÙˆØ±Ø³Ù¹ÛŒ" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-8.45.48-PM.jpeg"
    }
];

// Admission Translations
const admissionTranslations = {
    ur: {
        nav_admission: 'Ø¯Ø§Ø®Ù„Û’',
        nav_8th: 'Ø¢Ù¹Ú¾ÙˆÛŒÚº Ú©Ù„Ø§Ø³',
        nav_1st_year: 'Ù¾ÛÙ„Ø§ Ø³Ø§Ù„',
        admissions_title: 'Ú©ÛŒÚˆÙ¹ Ú©Ø§Ù„Ø¬ Ø¯ÛŒØ§Ù…Ø± Ù…ÛŒÚº Ø´Ø§Ù…Ù„ ÛÙˆÚº',
        admissions_desc: 'Ø§Ù¾Ù†Û’ Ø¯Ø§Ø®Ù„Û’ Ú©ÛŒ Ø³Ø·Ø­ Ú©Ø§ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ø±ÛŒÚº Ø§ÙˆØ± Ø¯Ø§Ø®Ù„Û’ Ú©Û’ Ø·Ø±ÛŒÙ‚Û Ú©Ø§Ø± Ú©Û’ Ø¨Ø§Ø±Û’ Ù…ÛŒÚº Ù…Ø²ÛŒØ¯ Ø¬Ø§Ù†ÛŒÚºÛ”',
        class_8_admission: 'Ø¢Ù¹Ú¾ÙˆÛŒÚº Ú©Ù„Ø§Ø³ Ø¯Ø§Ø®Ù„Û',
        admission_notice_8: 'Ø¯Ø§Ø®Ù„Û Ù†ÙˆÙ¹Ø³ â€“ Ú©Ù„Ø§Ø³ 8',
        class_8_notice_desc_1: 'Ú©Ù„Ø§Ø³ 8 Ú©Û’ Ø¯Ø§Ø®Ù„Û’ ÙÛŒ Ø§Ù„Ø­Ø§Ù„ Ø¨Ù†Ø¯ ÛÛŒÚºÛ”',
        1st_year_admission: 'ÙØ±Ø³Ù¹ Ø§ÛŒØ¦Ø± Ø¯Ø§Ø®Ù„Û',
        admission_notice_1st_year: 'Ø¯Ø§Ø®Ù„Û Ù†ÙˆÙ¹Ø³ â€“ ÙØ±Ø³Ù¹ Ø§ÛŒØ¦Ø±',
        class_1st_year_notice_desc_1: 'Ø§Ø³ ÙˆÙ‚Øª Ú©ÛŒÚˆÙ¹ Ú©Ø§Ù„Ø¬ Ø¯ÛŒØ§Ù…Ø± Ù…ÛŒÚº Ú¯ÛŒØ§Ø±ÛÙˆÛŒÚº Ø¬Ù…Ø§Ø¹Øª Ú©Û’ Ø¯Ø§Ø®Ù„Û’ Ù†ÛÛŒÚº Ú©Ú¾Ù„Û’ ÛÛŒÚºÛ” Ø¨Ø±Ø§Û Ú©Ø±Ù… Ø§Ù¾ÚˆÛŒÙ¹Ø³ Ú©Û’ Ù„ÛŒÛ’ ÛÙ…Ø§Ø±Û’ Ø³Ø§ØªÚ¾ Ø¬Ú‘Û’ Ø±ÛÛŒÚºÛ”',
        class_notice_desc_2: 'Ø§Ú¯Ù„ÛŒ Ø§Ù†Ù¹ÛŒÚ© Ú©Û’ Ù„ÛŒÛ’ Ø¯Ø§Ø®Ù„Û’ Ú©Ø§ Ø´ÛŒÚˆÙˆÙ„ Ù…Ù‚Ø±Ø±Û ÙˆÙ‚Øª Ù¾Ø± Ø¬Ø§Ø±ÛŒ Ú©ÛŒØ§ Ø¬Ø§Ø¦Û’ Ú¯Ø§Û” Ø¯Ø±Ø®ÙˆØ§Ø³Øª Ø¯ÛÙ†Ø¯Ú¯Ø§Ù† Ø§ÙˆØ± ÙˆØ§Ù„Ø¯ÛŒÙ† Ú©Ùˆ ÛØ¯Ø§ÛŒØª Ú©ÛŒ Ø¬Ø§ØªÛŒ ÛÛ’ Ú©Û ÙˆÛ ØªØ§Ø²Û ØªØ±ÛŒÙ† Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ú©Û’ Ù„ÛŒÛ’ Ø¨Ø§Ù‚Ø§Ø¹Ø¯Ú¯ÛŒ Ø³Û’ Ø³Ø±Ú©Ø§Ø±ÛŒ ÙˆÛŒØ¨ Ø³Ø§Ø¦Ù¹ Ø¯ÛŒÚ©Ú¾ÛŒÚºÛ”',
        class_notice_desc_3: 'Ù…Ø²ÛŒØ¯ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ú©Û’ Ù„ÛŒÛ’ØŒ Ø¨Ø±Ø§Û Ú©Ø±Ù… Ú©Ø§Ù… Ú©Û’ Ø§ÙˆÙ‚Ø§Øª Ú©Û’ Ø¯ÙˆØ±Ø§Ù† Ø¯Ø§Ø®Ù„Û Ø¢ÙØ³ Ø³Û’ Ø±Ø§Ø¨Ø·Û Ú©Ø±ÛŒÚºÛ”',
        class_notice_desc_4: 'Ø¢Ù¾ Ú©ÛŒ Ø¯Ù„Ú†Ø³Ù¾ÛŒ Ú©Ø§ Ø´Ú©Ø±ÛŒÛÛ”'
    },
    en: {
        nav_admission: 'Admissions',
        nav_8th: 'Class 8th',
        nav_1st_year: '1st Year',
        admissions_title: 'Join Cadet College Diamer',
        admissions_desc: 'Choose your level of entry and find out more about the admission process.',
        class_8_admission: 'Class 8th Admission',
        admission_notice_8: 'Admission Notice â€“ Class 8',
        class_8_notice_desc_1: 'Admissions for Class 8 are currently closed.',
        1st_year_admission: '1st Year Admission',
        admission_notice_1st_year: 'Admission Notice â€“ 1st Year',
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

document.addEventListener('DOMContentLoaded', () => {

    document.documentElement.classList.add('js-enabled');
    document.body.classList.add('has-custom-cursor');

    let currentLang = localStorage.getItem('ccc_lang') || 'en';

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
            if (langEl) langEl.innerText = 'Ø§Ø±Ø¯Ùˆ';
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
        const textUrNative = "Ú©ÛŒÚˆÙ¹ Ú©Ø§Ù„Ø¬ Ø¯ÛŒØ§Ù…Ø± Ù…ÛŒÚº Ø®ÙˆØ´ Ø¢Ù…Ø¯ÛŒØ¯Û” Ù…Ø³ØªÙ‚Ø¨Ù„ Ú©Û’ Ù…Ø¹Ù…Ø§Ø±ÙˆÚº Ú©ÛŒ ØªØ´Ú©ÛŒÙ„Û” ÛÙ… Ø§ÛŒÚ© Ø³Ùˆ Ù¾Ú†ÛŒØ³ Ø§ÛŒÚ©Ú‘ Ú©ÛŒÙ…Ù¾Ø³ Ù…ÛŒÚº Ø°ÛÙ†ÛŒ Ø§ÙˆØ± Ø¬Ø³Ù…Ø§Ù†ÛŒ ØªØ±Ø¨ÛŒØª Ú©Û’ Ø°Ø±ÛŒØ¹Û’ Ù…Ø¹ÛŒØ§Ø±ÛŒ ØªØ¹Ù„ÛŒÙ… Ø§ÙˆØ± Ø´Ø®ØµÛŒØª Ø³Ø§Ø²ÛŒ ÙØ±Ø§ÛÙ… Ú©Ø±ØªÛ’ ÛÛŒÚºÛ”";

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
            // Optionally play greeting on manual language change if on home page
            welcomePlayed = false;
            playWelcomeGreeting(newLang);
        });
    }

    // 1. Populate Faculty Information Dynamically
    const facultyGrid = document.querySelector('.faculty-grid');

    const renderFacultyCards = (lang) => {
        if (!facultyGrid) return;
        facultyGrid.innerHTML = ''; // Clear existing

        facultyData.forEach((member, index) => {
            const delay = index * 50;
            const card = document.createElement('div');
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
        });
    };

    // Initial Setup on DOM Content Loaded
    setLanguage(currentLang);

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

    // Hover effects for cursor
    document.querySelectorAll('a, button, .hover-tilt').forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursorOutline) {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.border = '1px solid var(--accent)';
            }
        });
        el.addEventListener('mouseleave', () => {
            if (cursorOutline) {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.border = '1px solid var(--glass-border)';
            }
        });
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
        const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.1 });
        revealElements.forEach(el => revealObserver.observe(el));
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
});

