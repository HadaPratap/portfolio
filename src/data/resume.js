export const resume = {
    personalInfo: {
        name: "Pratap Hada",
        title: "Senior Flutter & Android Developer",
        location: "Rajkot, Gujarat, India",
        email: "hadapratap50@gmail.com",
        phone: "+91-7623950322",
        linkedin: "https://www.linkedin.com/in/prataphada", // Placeholder, user can update
        tagline: "Building Scalable Cross-Platform Payment & Kiosk Solutions",
        summary: "Highly motivated Senior Flutter & Android Developer with 6+ years of experience in designing, developing, and maintaining scalable mobile and kiosk-based applications. Expert in integrating secure payment gateways, Clean Architecture, and MVVM patterns. Proven track record of delivering high-impact projects for fintech and education sectors.",
        experienceYears: "6+",
    },
    experience: [
        {
            company: "Grubbrr System Pvt Ltd",
            role: "Flutter / Android Developer",
            period: "May 2022 - Present",
            description: "Leading development of kiosk and cross-platform solutions for fintech and hospitality.",
            achievements: [
                "Developed and maintained Android-based Kiosk applications using native code shared across multiple client projects, ensuring consistent stability.",
                "Integrated Square APIs for Loyalty User Management and Square Reader Payments, enabling seamless in-store transactions.",
                "Designed and implemented Verifone Online Ordering Solution, a cross-platform project using Flutter (Web, Android).",
                "Optimized app performance by reducing load times and improving memory management.",
                "Collaborated with cross-functional teams (UI/UX, backend, QA) to deliver features within sprint timelines."
            ]
        },
        {
            company: "Aussizz India Pvt Ltd (Konze)",
            role: "Android Developer",
            period: "Aug 2019 - May 2022",
            description: "Developed high-performing educational and CRM mobile applications.",
            achievements: [
                "Developed PTE Tutorials and CCL Tutorials, educational apps with 1.5L+ and 10K+ downloads respectively.",
                "Designed and implemented Online Coaching, Score Converter, PTE Test Calculator, and Blog Section.",
                "Integrated Firebase Cloud Messaging (FCM) for push notifications and Firebase Auth for secure user authentication.",
                "Built KONDESK, a Flutter-based dynamic CRM application where all UI components were fully API-driven."
            ]
        }
    ],
    skills: {
        languages: ["Dart", "Kotlin", "Java"],
        frameworks: ["Flutter", "Android SDK", "MVVM", "Clean Architecture"],
        tools: ["Git", "GitHub", "Firebase", "Postman", "Figma"],
        integrations: ["Stripe", "Square", "Apple Pay", "Google Pay", "REST APIs", "Dagger-Hilt"],
        databases: ["SQLite", "Room", "Firestore"]
    },
    projects: [
        {
            title: "Verifone Online Ordering",
            tech: ["Flutter Web", "Flutter Android", "Verifone POS"],
            description: "A cross-platform online ordering solution integrated with Verifone POS systems.",
            highlights: [
                "Responsive UI for Web, Tablet, and Mobile.",
                "Integrated Apple Pay and Google Pay via Platform Channels."
            ]
        },
        {
            title: "Kiosk System Apps",
            tech: ["Android Native", "Square SDK", "Kotlin"],
            description: "Modular client-based kiosk applications for retail and hospitality.",
            highlights: [
                "Shared codebase with modular customization.",
                "Integrated Square Reader for contactless payments.",
                "Optimized startup flow and background services."
            ]
        },
        {
            title: "PTE Tutorials",
            tech: ["Flutter", "Firebase", "Educational Tech"],
            description: "Trusted app for PTE-A preparation with 1.5L+ downloads.",
            highlights: [
                "Implemented Online Coaching and Score Converter modules.",
                "Custom YouTube UI for educational content."
            ]
        },
        {
            title: "Kondesk CRM",
            tech: ["Flutter", "Dynamic UI", "REST APIs"],
            description: "Smart & intuitive CRM to manage education & migration business operations.",
            highlights: [
                "Fully dynamic UI controlled via backend APIs.",
                "Automated task management and follow-ups."
            ]
        }
    ],
    education: {
        degree: "B.E. Honors Computer Science",
        university: "Gujarat Technological University",
        year: "2019",
        gpa: "7.89 CGPA"
    },
    testimonials: [
        {
            author: "Project Manager",
            company: "Grubbrr",
            text: "Pratap is a dedicated developer who always delivers high-quality code. His expertise in payment integrations was crucial for our kiosk launch."
        },
        {
            author: "Team Lead",
            company: "Aussizz",
            text: "An exceptional problem solver. Pratap's work on the dynamic UI for Kondesk set a new standard for our mobile products."
        }
    ]
};
