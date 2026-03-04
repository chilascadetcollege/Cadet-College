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
        nav_home: "█ü┘ê┘à",
        nav_about: "█ü┘à╪º╪▒█Æ ╪¿╪º╪▒█Æ ┘à█î┌║",
        nav_mission: "┘à╪┤┘å",
        nav_faculty: "╪º╪│╪º╪¬╪░█ü",
        nav_contact: "╪▒╪º╪¿╪╖█ü ┌⌐╪▒█î┌║",
        hero_badge: "┘à╪╣█î╪º╪▒█î ╪¬╪╣┘ä█î┘à",
        hero_title: "╪«┘ê╪┤ ╪ó┘à╪»█î╪» <br> <span class='gradient-text'>┌⌐█î┌ê┘╣ ┌⌐╪º┘ä╪¼ ╪»█î╪º┘à╪▒</span>",
        hero_desc: "┘à╪│╪¬┘é╪¿┘ä ┌⌐█Æ ┘à╪╣┘à╪º╪▒┘ê┌║ ┌⌐█î ╪¬╪┤┌⌐█î┘ä█ö █ü┘à 125 ╪º█î┌⌐┌æ ┌⌐█Æ ┘ê╪│█î╪╣ ┌⌐█î┘à┘╛╪│ ┘à█î┌║ ╪░█ü┘å█î ╪º┘ê╪▒ ╪¼╪│┘à╪º┘å█î ╪¬╪▒╪¿█î╪¬ ┌⌐█Æ ╪░╪▒█î╪╣█Æ ┘à╪╣█î╪º╪▒█î ╪¬╪╣┘ä█î┘à ╪º┘ê╪▒ ╪┤╪«╪╡█î╪¬ ╪│╪º╪▓█î ┘ü╪▒╪º█ü┘à ┌⌐╪▒╪¬█Æ █ü█î┌║█ö",
        hero_btn_explore: "┌⌐█î┘à┘╛╪│ ╪»█î┌⌐┌╛█î┌║ <i class='fa-solid fa-arrow-left'></i>",
        hero_btn_faculty: "<i class='fa-solid fa-users'></i> ╪º╪│╪º╪¬╪░█ü ╪│█Æ ┘à┘ä█î┌║",
        hero_card1_title: "┌»╪▒┘ê┘à┘å┌»",
        hero_card1_desc: "╪░█ü┘å█î ╪º┘ê╪▒ ╪¼╪│┘à╪º┘å█î ┘å╪┤┘ê┘ê┘å┘à╪º",
        hero_card2_title: "125 ╪º█î┌⌐┌æ",
        hero_card2_desc: "┘ê╪│█î╪╣ ╪¬╪╣┘ä█î┘à█î ╪º┘ê╪▒ ┌⌐┌╛█î┘ä┘ê┌║ ┌⌐█î ╪│█ü┘ê┘ä█î╪º╪¬",
        scroll_down: "┘å█î┌å█Æ ╪│┌⌐╪▒┘ê┘ä ┌⌐╪▒█î┌║",
        about_subtitle: "█ü┘à╪º╪▒╪º ┌⌐█î┘à┘╛╪│",
        about_title: "╪╣╪╕┘à╪¬ ┌⌐█î <span class class='accent-text'>╪▒┘ê╪º█î╪¬</span>",
        about_p1: "┌⌐█î┘à┘╛╪│ <strong>125 ╪º█î┌⌐┌æ</strong> ┌⌐█Æ ╪▒┘é╪¿█Æ ┘╛╪▒ ┘╛┌╛█î┘ä╪º █ü┘ê╪º █ü█Æ█ö ╪º╪│ ┘ê╪│█î╪╣ ╪▒┘é╪¿█Æ ┘à█î┌║ ╪º█î┌⌐ ╪¼╪»█î╪» ╪¬╪▒█î┘å ╪º┘å╪¬╪╕╪º┘à█î ╪º┘ê╪▒ ╪º┌⌐█î┌ê┘à┌⌐ ╪¿┘ä╪º┌⌐ ╪┤╪º┘à┘ä █ü█Æ╪î ╪¼┘ê ╪│█î┌⌐┌╛┘å█Æ ┌⌐█Æ ╪¿█ü╪¬╪▒█î┘å ┘à╪º╪¡┘ê┘ä ┌⌐┘ê █î┘é█î┘å█î ╪¿┘å╪º╪¬╪º █ü█Æ█ö",
        about_p2: "┌⌐█î┌ê┘╣╪│ ┌⌐█î ┘à╪¼┘à┘ê╪╣█î ┌»╪▒┘ê┘à┘å┌» ┌⌐█î┌ê┘╣ ┌⌐╪º┘ä╪¼ ┌⌐█î ┘╛█ü┌å╪º┘å █ü█Æ█ö ╪º╪│ ┘ä█î█Æ╪î ┘å╪ª█Æ ┌⌐█î┘à┘╛╪│ ┘à█î┌║ ╪░█ü┘å█î ┘å╪┤┘ê┘ê┘å┘à╪º ┌⌐█Æ ╪│╪º╪¬┌╛ ╪│╪º╪¬┌╛ ╪¼╪│┘à╪º┘å█î ┘å╪┤┘ê┘ê┘å┘à╪º ┌⌐┘ê ╪¿┌╛█î ┘╛┘ê╪▒█î ╪º█ü┘à█î╪¬ ╪»█î ┌»╪ª█î █ü█Æ█ö",
        about_f1: "╪¬█î┘å ┘à┘å╪▓┘ä█ü ╪ó┌ê█î┘╣┘ê╪▒█î┘à ╪º┘ê╪▒ ┘à█î╪│",
        about_f2: "╪¬█î┘å ┘à╪«╪╡┘ê╪╡ █ü╪º╪│┘╣┘ä╪▓",
        about_f3: "┌⌐█î┘à┘╛╪│ ┌⌐█Æ ╪º┘å╪»╪▒ █ü╪│┘╛╪¬╪º┘ä ┌⌐█î ╪│█ü┘ê┘ä╪¬",
        about_f4: "┘ê╪│█î╪╣ ┌⌐┌╛█î┘ä ┌⌐█Æ ┘à█î╪»╪º┘å (█ü╪º┌⌐█î╪î ┌⌐╪▒┌⌐┘╣ ┘ê╪║█î╪▒█ü)",
        stat_acres: "╪º█î┌⌐┌æ ┌⌐█î┘à┘╛╪│",
        stat_hostels: "█ü╪º╪│┘╣┘ä ╪¿┘ä╪º┌⌐╪│",
        stat_sports: "┌⌐┌╛█î┘ä ┌⌐█Æ ┘à█î╪»╪º┘å",
        stat_riding: "╪ó╪ª┘å╪»█ü ┌»┌╛┌æ ╪│┘ê╪º╪▒█î ┌⌐█î ╪│█ü┘ê┘ä╪¬",
        mission_text: "┌⌐█î┌ê┘╣ ┌⌐╪º┘ä╪¼ ╪»█î╪º┘à╪▒ ┌⌐╪º ┘à╪┤┘å ┘à╪╣█î╪º╪▒█î ╪¬╪╣┘ä█î┘à╪î ╪┤╪«╪╡█î╪¬ ┌⌐█î ┘å╪┤┘ê┘ê┘å┘à╪º ┌⌐┘ê █î┘é█î┘å█î ╪¿┘å╪º┘å╪º █ü█Æ█ö",
        faculty_subtitle: "█ü┘à╪º╪▒█î ┘╣█î┘à",
        faculty_title: "█ü┘à╪º╪▒█Æ ┘é╪º╪¿┘ä ┘ü╪«╪▒ <span class='accent-text'>╪º╪│╪º╪¬╪░█ü</span>",
        faculty_desc: "┘à╪│╪¬┘é╪¿┘ä ┌⌐█Æ ┘ä█î┌ê╪▒┘ê┌║ ┌⌐┘ê ╪│┘å┘ê╪º╪▒┘å█Æ ┘ê╪º┘ä█Æ ┘à╪º█ü╪▒ ┘╛█î╪┤█ü ┘ê╪▒ ╪º┘ü╪▒╪º╪»█ö",
        virtual_visit_subtitle: "┘ê╪▒┌å┘ê╪ª┘ä ┘ê╪▓┘╣",
        virtual_visit_title: "┌⌐█ü█î┌║ ╪│█Æ ╪¿┌╛█î <span class='accent-text'>╪│█î╪▒ ┌⌐╪▒█î┌║</span>",
        gallery_subtitle: "█ü┘à╪º╪▒╪º ┌⌐█î┘à┘╛╪│",
        gallery_title: "╪¬╪╡┘ê█î╪▒█î <span class='accent-text'>┌»█î┘ä╪▒█î</span>",
        gal_academics: "╪º┌⌐█î┌ê┘à┌⌐╪│ ╪¿┘ä╪º┌⌐",
        gal_dining: "┘à█î╪│ / ┌ê╪º╪ª┘å┘å┌» █ü╪º┘ä",
        gal_events: "╪ó┌ê█î┘╣┘ê╪▒█î┘à",
        gal_sports: "┌⌐┌╛█î┘ä ┌⌐█Æ ┘à█î╪»╪º┘å",
        contact_title: "█ü┘à ╪│█Æ <span class='accent-text'>╪▒╪º╪¿╪╖█ü ┌⌐╪▒█î┌║</span>",
        contact_loc_title: "┘à┘é╪º┘à / ┘╛╪¬█ü",
        contact_loc_desc: "┌⌐█î┌ê┘╣ ┌⌐╪º┘ä╪¼ ╪»█î╪º┘à╪▒╪î ┌»┘ê█ü╪▒ ╪ó╪¿╪º╪»╪î ┌å┘ä╪º╪│╪î ┌»┘ä┌»╪¬ ╪¿┘ä╪¬╪│╪¬╪º┘å",
        contact_phone_title: "┘ü┘ê┘å ┘å┘à╪¿╪▒",
        contact_phone_desc: "╪º█î┌ê┘à┘å ╪ó┘ü╪│ (┘ü╪▒╪º█ü┘à ┘å█ü█î┌║ ┌⌐█î╪º ┌»█î╪º)",
        contact_email_title: "╪º█î ┘à█î┘ä",
    }
};

// 16 Complete Faculty members scraped from Live website
const facultyData = [
    {
        name: { en: "Muhammad Khan", ur: "┘à╪¡┘à╪» ╪«╪º┘å" },
        role: { en: "Vice Principal", ur: "┘ê╪º╪ª╪│ ┘╛╪▒┘å╪│┘╛┘ä" },
        desc: { en: "MS in Micro Biology Abasyn University Peshawar, B.ed From Sarhad University", ur: "╪º█î┘à ╪º█î╪│ ┘à╪º╪ª█î┌⌐╪▒┘ê ╪¿╪º╪ª█î┘ê┘ä┘ê╪¼█î ╪º╪¿╪º╪│█î┘å █î┘ê┘å█î┘ê╪▒╪│┘╣█î ┘╛╪┤╪º┘ê╪▒╪î ╪¿█î ╪º█î┌ê ╪│╪▒╪¡╪» █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747574098743-removebg-preview.png"
    },
    {
        name: { en: "Mr. Karam Shah", ur: "┌⌐╪▒┘à ╪┤╪º█ü" },
        role: { en: "Assistant Professor in Mathematics", ur: "╪º╪│╪│┘╣┘å┘╣ ┘╛╪▒┘ê┘ü█î╪│╪▒ ╪▒█î╪º╪╢█î" },
        desc: { en: "M.sc in Mathematics from Islamia college Peshawar. B.Ed From AIOU Islamabad", ur: "╪º█î┘à ╪º█î╪│ ╪│█î ╪▒█î╪º╪╢█î ╪º╪│┘ä╪º┘à█î█ü ┌⌐╪º┘ä╪¼ ┘╛╪┤╪º┘ê╪▒╪î ╪¿█î ╪º█î┌ê ╪╣┘ä╪º┘à█ü ╪º┘é╪¿╪º┘ä ╪º┘ê┘╛┘å █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-18-at-9.06.32-PM.jpeg"
    },
    {
        name: { en: "Mr. M. Imran Khan", ur: "┘à╪¡┘à╪» ╪╣┘à╪▒╪º┘å ╪«╪º┘å" },
        role: { en: "Lecturer In chemistry", ur: "┘ä█î┌⌐┌å╪▒╪▒ ┌⌐█î┘à╪│┘╣╪▒█î" },
        desc: { en: "M.Phil From Peshawar University B.Ed from AIOU Islamabad", ur: "╪º█î┘à ┘ü┘ä ┘╛╪┤╪º┘ê╪▒ █î┘ê┘å█î┘ê╪▒╪│┘╣█î╪î ╪¿█î ╪º█î┌ê ╪╣┘ä╪º┘à█ü ╪º┘é╪¿╪º┘ä ╪º┘ê┘╛┘å █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747573041403-removebg-preview.png"
    },
    {
        name: { en: "Mr. Akhtar Rehman", ur: "╪º╪«╪¬╪▒ ╪▒╪¡┘à╪º┘å" },
        role: { en: "Lecturer in Pak Studies", ur: "┘ä█î┌⌐┌å╪▒╪▒ ┘à╪╖╪º┘ä╪╣█ü ┘╛╪º┌⌐╪│╪¬╪º┘å" },
        desc: { en: "M.A Pakistan Studies from Sargodha University", ur: "╪º█î┘à ╪º█Æ ┘à╪╖╪º┘ä╪╣█ü ┘╛╪º┌⌐╪│╪¬╪º┘å╪î ╪│╪▒┌»┘ê╪»┌╛╪º █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-1.15.21-PM.jpeg"
    },
    {
        name: { en: "Mr. M. Sadiq", ur: "┘à╪¡┘à╪» ╪╡╪º╪»┘é" },
        role: { en: "Lecturer In Islamiat", ur: "┘ä█î┌⌐┌å╪▒╪▒ ╪º╪│┘ä╪º┘à█î╪º╪¬" },
        desc: { en: "M.A Islamiat From Peshawar University B.Ed from AIOU Islamabad", ur: "╪º█î┘à ╪º█Æ ╪º╪│┘ä╪º┘à█î╪º╪¬ ┘╛╪┤╪º┘ê╪▒ █î┘ê┘å█î┘ê╪▒╪│┘╣█î╪î ╪¿█î ╪º█î┌ê ╪╣┘ä╪º┘à█ü ╪º┘é╪¿╪º┘ä ╪º┘ê┘╛┘å █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747575933116-removebg-preview.png"
    },
    {
        name: { en: "Mr. Ziaullah", ur: "╪╢█î╪º╪í ╪º┘ä┘ä█ü" },
        role: { en: "Lecturer In Urdu", ur: "┘ä█î┌⌐┌å╪▒╪▒ ╪º╪▒╪»┘ê" },
        desc: { en: "M.A Urdu From University of the Punjab B.Ed from AIOU Islamabad", ur: "╪º█î┘à ╪º█Æ ╪º╪▒╪»┘ê ┘╛┘å╪¼╪º╪¿ █î┘ê┘å█î┘ê╪▒╪│┘╣█î╪î ╪¿█î ╪º█î┌ê ╪╣┘ä╪º┘à█ü ╪º┘é╪¿╪º┘ä ╪º┘ê┘╛┘å █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747577341749-removebg-preview.png"
    },
    {
        name: { en: "Mr. Mazhar Ali", ur: "┘à╪╕█ü╪▒ ╪╣┘ä█î" },
        role: { en: "Lecturer In Physics", ur: "┘ä█î┌⌐┌å╪▒╪▒ ┘ü╪▓┌⌐╪│" },
        desc: { en: "Bs Physics From KIU Gilgit, B.Ed from AIOU Islamabad", ur: "╪¿█î ╪º█î╪│ ┘ü╪▓┌⌐╪│ ┘é╪▒╪º┘é╪▒┘à ╪º┘å┘╣╪▒┘å█î╪┤┘å┘ä █î┘ê┘å█î┘ê╪▒╪│┘╣█î╪î ╪¿█î ╪º█î┌ê ╪╣┘ä╪º┘à█ü ╪º┘é╪¿╪º┘ä ╪º┘ê┘╛┘å █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747573865871-removebg-preview.png"
    },
    {
        name: { en: "Mr. Ahmad Khan", ur: "╪º╪¡┘à╪» ╪«╪º┘å" },
        role: { en: "Lecturer In Physics", ur: "┘ä█î┌⌐┌å╪▒╪▒ ┘ü╪▓┌⌐╪│" },
        desc: { en: "Bs Physics From KIU Gilgit, B.Ed from AIOU Islamabad", ur: "╪¿█î ╪º█î╪│ ┘ü╪▓┌⌐╪│ ┘é╪▒╪º┘é╪▒┘à ╪º┘å┘╣╪▒┘å█î╪┤┘å┘ä █î┘ê┘å█î┘ê╪▒╪│┘╣█î╪î ╪¿█î ╪º█î┌ê ╪╣┘ä╪º┘à█ü ╪º┘é╪¿╪º┘ä ╪º┘ê┘╛┘å █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747578628919-removebg-preview.png"
    },
    {
        name: { en: "Mr. Riaz Ali", ur: "╪▒█î╪º╪╢ ╪╣┘ä█î" },
        role: { en: "Lecturer In Biology", ur: "┘ä█î┌⌐┌å╪▒╪▒ ╪¿╪º╪ª█î┘ê┘ä┘ê╪¼█î" },
        desc: { en: "M.Phil in wild life ecology From Qaid-i- Azam University Islamabad, Bs hons zoology from KIU", ur: "╪º█î┘à ┘ü┘ä ┘ê╪º╪ª┘ä┌ê ┘ä╪º╪ª┘ü ┘é╪º╪ª╪»╪º╪╣╪╕┘à █î┘ê┘å█î┘ê╪▒╪│┘╣█î╪î ╪¿█î ╪º█î╪│ ╪▓┘ê┘ä┘ê╪¼█î ┘é╪▒╪º┘é╪▒┘à ╪º┘å┘╣╪▒┘å█î╪┤┘å┘ä █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747580719096-removebg-preview.png"
    },
    {
        name: { en: "Mr. Asif Ali", ur: "╪ó╪╡┘ü ╪╣┘ä█î" },
        role: { en: "Lecturer In English", ur: "┘ä█î┌⌐┌å╪▒╪▒ ╪º┘å┌»╪▒█î╪▓█î" },
        desc: { en: "M.A English From NUML University Islamabad, B.Ed from Sarhad University Peshawar.", ur: "╪º█î┘à ╪º█Æ ╪º┘å┌»╪▒█î╪▓█î ┘å┘à┘ä █î┘ê┘å█î┘ê╪▒╪│┘╣█î ╪º╪│┘ä╪º┘à ╪ó╪¿╪º╪»╪î ╪¿█î ╪º█î┌ê ╪│╪▒╪¡╪» █î┘ê┘å█î┘ê╪▒╪│┘╣█î ┘╛╪┤╪º┘ê╪▒" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747578680122-removebg-preview.png"
    },
    {
        name: { en: "Mr. M. Farooq", ur: "┘à╪¡┘à╪» ┘ü╪º╪▒┘ê┘é" },
        role: { en: "Lecturer In Islamiat", ur: "┘ä█î┌⌐┌å╪▒╪▒ ╪º╪│┘ä╪º┘à█î╪º╪¬" },
        desc: { en: "M.Phil Islamiat From AIOU Islamabad, B.Ed from KIU Gilgt", ur: "╪º█î┘à ┘ü┘ä ╪º╪│┘ä╪º┘à█î╪º╪¬ ╪╣┘ä╪º┘à█ü ╪º┘é╪¿╪º┘ä ╪º┘ê┘╛┘å █î┘ê┘å█î┘ê╪▒╪│┘╣█î╪î ╪¿█î ╪º█î┌ê ┘é╪▒╪º┘é╪▒┘à ╪º┘å┘╣╪▒┘å█î╪┤┘å┘ä █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/05/ei_1747578740016-removebg-preview.png"
    },
    {
        name: { en: "Mr. Asif Hussain", ur: "╪ó╪╡┘ü ╪¡╪│█î┘å" },
        role: { en: "Lecturer In Urdu", ur: "┘ä█î┌⌐┌å╪▒╪▒ ╪º╪▒╪»┘ê" },
        desc: { en: "M.Phil Urdu From KIU GILGIT, B.Ed from VU Lahore", ur: "╪º█î┘à ┘ü┘ä ╪º╪▒╪»┘ê ┘é╪▒╪º┘é╪▒┘à ╪º┘å┘╣╪▒┘å█î╪┤┘å┘ä █î┘ê┘å█î┘ê╪▒╪│┘╣█î╪î ╪¿█î ╪º█î┌ê ┘ê╪▒┌å┘ê╪ª┘ä █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-10.28.10-AM.jpeg"
    },
    {
        name: { en: "Mr. Imtiaz Alam", ur: "╪º┘à╪¬█î╪º╪▓ ╪╣╪º┘ä┘à" },
        role: { en: "Lecturer In chemistry", ur: "┘ä█î┌⌐┌å╪▒╪▒ ┌⌐█î┘à╪│┘╣╪▒█î" },
        desc: { en: "Bs Chemistry From Abbottabad University, B.Ed from Sarhad University Peshawar", ur: "╪¿█î ╪º█î╪│ ┌⌐█î┘à╪│┘╣╪▒█î ╪º█î╪¿┘╣ ╪ó╪¿╪º╪» █î┘ê┘å█î┘ê╪▒╪│┘╣█î╪î ╪¿█î ╪º█î┌ê ╪│╪▒╪¡╪» █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-10.27.18-AM.jpeg"
    },
    {
        name: { en: "Dr. Izaz Ali", ur: "┌ê╪º┌⌐┘╣╪▒ ╪º╪╣╪▓╪º╪▓ ╪╣┘ä█î" },
        role: { en: "Lecturer of Biology", ur: "┘ä█î┌⌐┌å╪▒╪▒ ╪¿╪º╪ª█î┘ê┘ä┘ê╪¼█î" },
        desc: { en: "PhD From Anhui Normal University China", ur: "┘╛█î ╪º█î┌å ┌ê█î ╪ó┘å█ü┘ê╪ª█î ┘å╪º╪▒┘à┘ä █î┘ê┘å█î┘ê╪▒╪│┘╣█î╪î ┌å█î┘å" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-10.27.44-AM.jpeg"
    },
    {
        name: { en: "Mr. Waseem Sardar", ur: "┘ê╪│█î┘à ╪│╪▒╪»╪º╪▒" },
        role: { en: "Lecturer in Mathematics", ur: "┘ä█î┌⌐┌å╪▒╪▒ ╪▒█î╪º╪╢█î" },
        desc: { en: "Phd Scholar (University of Peshawar), MS in Mathematics from Qurtuba University Peshawar. M.Ed From University of Swabi.", ur: "┘╛█î ╪º█î┌å ┌ê█î ╪º╪│┌⌐╪º┘ä╪▒╪î ╪º█î┘à ╪º█î╪│ ╪▒█î╪º╪╢█î ┘é╪▒╪╖╪¿█ü █î┘ê┘å█î┘ê╪▒╪│┘╣█î ┘╛╪┤╪º┘ê╪▒" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-8.48.15-PM.jpeg"
    },
    {
        name: { en: "Mr. Kashif Ur Rehman", ur: "┌⌐╪º╪┤┘ü ╪º┘ä╪▒╪¡┘à╪º┘å" },
        role: { en: "Lecturer in Computer Science", ur: "┘ä█î┌⌐┌å╪▒╪▒ ┌⌐┘à┘╛█î┘ê┘╣╪▒ ╪│╪º╪ª┘å╪│" },
        desc: { en: "MCS From Peshawar University", ur: "╪º█î┘à ╪│█î ╪º█î╪│ ┘╛╪┤╪º┘ê╪▒ █î┘ê┘å█î┘ê╪▒╪│┘╣█î" },
        img: "https://ccchilas.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-27-at-8.45.48-PM.jpeg"
    }
];

// Admission Translations
const admissionTranslations = {
    ur: {
        nav_admission: '╪»╪º╪«┘ä█Æ',
        nav_8th: '╪ó┘╣┌╛┘ê█î┌║ ┌⌐┘ä╪º╪│',
        nav_1st_year: '┘╛█ü┘ä╪º ╪│╪º┘ä',
        admissions_title: '┌⌐█î┌ê┘╣ ┌⌐╪º┘ä╪¼ ╪»█î╪º┘à╪▒ ┘à█î┌║ ╪┤╪º┘à┘ä █ü┘ê┌║',
        admissions_desc: '╪º┘╛┘å█Æ ╪»╪º╪«┘ä█Æ ┌⌐█î ╪│╪╖╪¡ ┌⌐╪º ╪º┘å╪¬╪«╪º╪¿ ┌⌐╪▒█î┌║ ╪º┘ê╪▒ ╪»╪º╪«┘ä█Æ ┌⌐█Æ ╪╖╪▒█î┘é█ü ┌⌐╪º╪▒ ┌⌐█Æ ╪¿╪º╪▒█Æ ┘à█î┌║ ┘à╪▓█î╪» ╪¼╪º┘å█î┌║█ö',
        class_8_admission: '╪ó┘╣┌╛┘ê█î┌║ ┌⌐┘ä╪º╪│ ╪»╪º╪«┘ä█ü',
        admission_notice_8: '╪»╪º╪«┘ä█ü ┘å┘ê┘╣╪│ ΓÇô ┌⌐┘ä╪º╪│ 8',
        class_8_notice_desc_1: '┌⌐┘ä╪º╪│ 8 ┌⌐█Æ ╪»╪º╪«┘ä█Æ ┘ü█î ╪º┘ä╪¡╪º┘ä ╪¿┘å╪» █ü█î┌║█ö',
        "1st_year_admission": '┘ü╪▒╪│┘╣ ╪º█î╪ª╪▒ ╪»╪º╪«┘ä█ü',
        admission_notice_1st_year: '╪»╪º╪«┘ä█ü ┘å┘ê┘╣╪│ ΓÇô ┘ü╪▒╪│┘╣ ╪º█î╪ª╪▒',
        class_1st_year_notice_desc_1: '╪º╪│ ┘ê┘é╪¬ ┌⌐█î┌ê┘╣ ┌⌐╪º┘ä╪¼ ╪»█î╪º┘à╪▒ ┘à█î┌║ ┌»█î╪º╪▒█ü┘ê█î┌║ ╪¼┘à╪º╪╣╪¬ ┌⌐█Æ ╪»╪º╪«┘ä█Æ ┘å█ü█î┌║ ┌⌐┌╛┘ä█Æ █ü█î┌║█ö ╪¿╪▒╪º█ü ┌⌐╪▒┘à ╪º┘╛┌ê█î┘╣╪│ ┌⌐█Æ ┘ä█î█Æ █ü┘à╪º╪▒█Æ ╪│╪º╪¬┌╛ ╪¼┌æ█Æ ╪▒█ü█î┌║█ö',
        class_notice_desc_2: '╪º┌»┘ä█î ╪º┘å┘╣█î┌⌐ ┌⌐█Æ ┘ä█î█Æ ╪»╪º╪«┘ä█Æ ┌⌐╪º ╪┤█î┌ê┘ê┘ä ┘à┘é╪▒╪▒█ü ┘ê┘é╪¬ ┘╛╪▒ ╪¼╪º╪▒█î ┌⌐█î╪º ╪¼╪º╪ª█Æ ┌»╪º█ö ╪»╪▒╪«┘ê╪º╪│╪¬ ╪»█ü┘å╪»┌»╪º┘å ╪º┘ê╪▒ ┘ê╪º┘ä╪»█î┘å ┌⌐┘ê █ü╪»╪º█î╪¬ ┌⌐█î ╪¼╪º╪¬█î █ü█Æ ┌⌐█ü ┘ê█ü ╪¬╪º╪▓█ü ╪¬╪▒█î┘å ┘à╪╣┘ä┘ê┘à╪º╪¬ ┌⌐█Æ ┘ä█î█Æ ╪¿╪º┘é╪º╪╣╪»┌»█î ╪│█Æ ╪│╪▒┌⌐╪º╪▒█î ┘ê█î╪¿ ╪│╪º╪ª┘╣ ╪»█î┌⌐┌╛█î┌║█ö',
        class_notice_desc_3: '┘à╪▓█î╪» ┘à╪╣┘ä┘ê┘à╪º╪¬ ┌⌐█Æ ┘ä█î█Æ╪î ╪¿╪▒╪º█ü ┌⌐╪▒┘à ┌⌐╪º┘à ┌⌐█Æ ╪º┘ê┘é╪º╪¬ ┌⌐█Æ ╪»┘ê╪▒╪º┘å ╪»╪º╪«┘ä█ü ╪ó┘ü╪│ ╪│█Æ ╪▒╪º╪¿╪╖█ü ┌⌐╪▒█î┌║█ö',
        class_notice_desc_4: '╪ó┘╛ ┌⌐█î ╪»┘ä┌å╪│┘╛█î ┌⌐╪º ╪┤┌⌐╪▒█î█ü█ö'
    },
    en: {
        nav_admission: 'Admissions',
        nav_8th: 'Class 8th',
        nav_1st_year: '1st Year',
        admissions_title: 'Join Cadet College Diamer',
        admissions_desc: 'Choose your level of entry and find out more about the admission process.',
        class_8_admission: 'Class 8th Admission',
        admission_notice_8: 'Admission Notice ΓÇô Class 8',
        class_8_notice_desc_1: 'Admissions for Class 8 are currently closed.',
        "1st_year_admission": '1st Year Admission',
        admission_notice_1st_year: 'Admission Notice ΓÇô 1st Year',
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

const initApp = () => {

    let currentLang = localStorage.getItem("ccc_lang") || "en";

    // Function to process translations
    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem("ccc_lang", lang);
        document.documentElement.lang = lang;

        const langEl = document.getElementById("lang-text");

        if (lang === "ur") {
            document.body.classList.add("rtl-mode");
            if (langEl) langEl.innerText = "English";
        } else {
            document.body.classList.remove("rtl-mode");
            // "اردو" using unicode escapes
            if (langEl) langEl.innerText = "\u0627\u0631\u062F\u0648";
        }

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            let textValue = null;
            if (typeof translations !== "undefined" && translations[lang] && translations[lang][key]) {
                textValue = translations[lang][key];
            } else if (typeof admissionTranslations !== "undefined" && admissionTranslations[lang] && admissionTranslations[lang][key]) {
                textValue = admissionTranslations[lang][key];
            }
            if (textValue) {
                el.innerHTML = textValue;
            }
        });

        renderFacultyCards(lang);
    };

    let welcomePlayed = false;

    const playWelcomeGreeting = (lang) => {
        if (welcomePlayed) return;

        const isHomePage = document.getElementById("home");
        if (!isHomePage) return;

        if (window.currentAudio) {
            window.currentAudio.pause();
        }

        const textEn = "Welcome to Cadet College Diamer. Molding the future leaders. We provide quality education and personality development through cognitive and physical grooming over 125 acres of breathtaking campus.";
        const textUrNative = "\u06A9\u06CC\u0688\u0679 \u06A9\u0627\u0644\u062C \u062F\u06CC\u0627\u0645\u0631 \u0645\u06CC\u06BA \u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F\u06D4 \u0645\u0633\u062A\u0642\u0628\u0644 \u06A9\u06D2 \u0645\u0639\u0645\u0627\u0631\u0648\u06BA \u06A9\u06CC \u062A\u0634\u06A9\u06CC\u0644\u06D4 \u06C1\u0645 \u0627\u06CC\u06A9 \u0633\u0648 \u067E\u0686\u06CC\u0635 \u0627\u06CC\u06A9\u0691 \u06A9\u06CC\u0645\u067E\u0633 \u0645\u06CC\u06BA \u0630\u06C1\u0646\u06CC \u0627\u0648\u0631 \u062C\u0633\u0645\u0627\u0646\u06CC \u062A\u0631\u0628\u06CC\u062A \u06A9\u06D2 \u0630\u0631\u06CC\u0639\u06D2 \u0645\u0639\u06CC\u0627\u0631\u06CC \u062A\u0639\u0644\u06CC\u0645 \u0627\u0648\u0631 \u0634\u062E\u0635\u06CC\u062A \u0633\u0627\u0632\u06CC \u0641\u0631\u0627\u06C1\u0645 \u06A9\u0631\u062A\u06D2 \u06C1\u06CC\u06BA\u06D4";

        const playOnlineVoice = () => {
            let audioUrl = "";
            let playbackSpeed = 0.85;

            if (lang === "en") {
                audioUrl = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=en&q=${encodeURIComponent(textEn)}`;
            } else {
                audioUrl = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=ur&q=${encodeURIComponent(textUrNative)}`;
            }

            const audio = new Audio(audioUrl);
            audio.playbackRate = playbackSpeed;
            window.currentAudio = audio;

            audio.play().then(() => {
                welcomePlayed = true;
            }).catch(e => {
                console.log("Autoplay blocked, waiting for interaction.");
            });
        };

        playOnlineVoice();
    };

    setTimeout(() => playWelcomeGreeting(currentLang), 1000);

    const interactionTrigger = () => {
        if (!welcomePlayed) playWelcomeGreeting(currentLang);
    };

    ["click", "touchstart"].forEach(evt => {
        document.addEventListener(evt, interactionTrigger, { once: true });
    });

    const langToggleBtn = document.getElementById("lang-toggle");
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const newLang = currentLang === "en" ? "ur" : "en";
            setLanguage(newLang);
            welcomePlayed = false;
            playWelcomeGreeting(newLang);
        });
    }

    const facultyGrid = document.querySelector(".faculty-grid");

    const renderFacultyCards = (lang) => {
        if (!facultyGrid) return;
        facultyGrid.innerHTML = "";

        if (typeof facultyData !== "undefined") {
            facultyData.forEach((member, index) => {
                const delay = index * 50;
                const card = document.createElement("div");
                card.className = "faculty-card glass-card hover-tilt reveal";
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
        }
    };

    setLanguage(currentLang);

    const cursorDot = document.querySelector("[data-cursor-dot]") || document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector("[data-cursor-outline]") || document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {
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

    document.querySelectorAll("a, button, .hover-tilt").forEach(el => {
        el.addEventListener("mouseenter", () => {
            if (cursorOutline) {
                cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
                cursorOutline.style.border = "1px solid var(--accent)";
            }
        });
        el.addEventListener("mouseleave", () => {
            if (cursorOutline) {
                cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
                cursorOutline.style.border = "1px solid var(--glass-border)";
            }
        });
    });

    const mobileToggle = document.getElementById("mobile-toggle");
    const navLinks = document.getElementById("nav-links");

    if (mobileToggle) {
        const icon = mobileToggle.querySelector("i");
        mobileToggle.addEventListener("click", () => {
            if (navLinks) navLinks.classList.toggle("active");
            if (navLinks && navLinks.classList.contains("active")) {
                if (icon) { icon.classList.remove("fa-bars"); icon.classList.add("fa-xmark"); }
            } else {
                if (icon) { icon.classList.remove("fa-xmark"); icon.classList.add("fa-bars"); }
            }
        });

        if (navLinks) {
            document.querySelectorAll(".nav-links a").forEach(link => {
                link.addEventListener("click", () => {
                    navLinks.classList.remove("active");
                    if (icon) { icon.classList.remove("fa-xmark"); icon.classList.add("fa-bars"); }
                });
            });
        }
    }

    const header = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            if (header) header.classList.add("scrolled");
        } else {
            if (header) header.classList.remove("scrolled");
        }
    });

    const revealElements = document.querySelectorAll(".reveal");
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    };

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.1 });
        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add("active"));
    }

    const counters = document.querySelectorAll(".counter");
    const speed = 200;

    const counterCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute("data-target");
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

    if ("IntersectionObserver" in window && counters.length > 0) {
        const counterObserver = new IntersectionObserver(counterCallback, { threshold: 0.5 });
        counters.forEach(counter => counterObserver.observe(counter));
    } else {
        counters.forEach(c => c.innerText = c.getAttribute("data-target"));
    }
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}
