const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'National University of science and technology',
                degree: 'BEng, Electronic Engineering',
                detail: "Bachelor's Degree in Electronic Engineering.",
                year: '2016-2021'
            },
            {
                id: 1,
                title: 'Real-Time Operating Systems Certificate UDEMY',
                degree: 'Real-time Operating',
                detail: "Reat-time OS with freeRTOS on STM32F407 using C/C++.",
                year: '2021'
            },
            {
                id: 2,
                title: 'Loreto High School',
                degree: 'Advanced Level',
                detail: "Studied mathematics, physics and chemistry",
                year: '2010-2011'
            },
            {
                id: 3,
                title: 'Loreto High School',
                degree: 'Ordinary Level',
                detail: "Studied mathematics, physics, biology, english and chemistry",
                year: '2010-2011'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Quatrohaus',
                role: 'Full Stack Developer and systems admin',
                url: 'https://quatrohaus.com',
                desc: 'Worked on TM Pick n Pay. Designed the system architecture and developed both the backend and frontend of system.',
                year: '02/2024 - Present',
                location: 'Harare, Zimbabwe'
            },
            {
                id: 2,
                title: 'Lawplus+ Solicitors, UK',
                role: 'Full Stack web developer',
                url: 'https://www.lawplus.co.uk/',
                desc: 'Developed campaign web applications for the law firm.',
                year: '11/2023 - 02/24',
                location: 'Remote, United Kingdom'
            },
            {
                id: 3,
                title: 'Reclaim4U',
                role: 'Full stack software developer',
                url: 'https://pcpcheck.com/',
                desc: "Worked on intergrations for human verification and CRM. Yoti and Jira",
                year: '12/2020',
                location: 'Remote, United Kingdom'
            },
            {
                id: 3,
                title: 'Kwekwe Polytechnical College',
                role: 'Computer systems lecturer',
                url: 'https://www.kwekwepoly.ac.zw/',
                desc: "Prepared and delivered lectures on C and C++ and networking to students. Worked on a dynamic voltage restorer",
                year: '09/2020 - 02/2024',
                location: 'Kwekwe, Zimbabwe'
            },
            {
                id: 3,
                title: 'Menokws',
                role: 'Cofounder and lead engineer',
                url: 'https://www.linkedin.com/company/menokws/',
                desc: "A technology startup in which we were building IoT medical devices and the web platform. I participated as an embedded systems engineer and backend developer for the web platform.",
                year: '08/2021 - 09/2022',
                location: 'Harare, Zimbabwe'
            },
            {
                id: 3,
                title: 'Resbright Investments',
                role: 'Software Engineering Consultant',
                url: 'https://www.resbright.co.zw/',
                desc: "Collaborate with company team to gather project requirements and make work flows. Developed a customs clearance and freight-forwarding system for the organization.",
                year: '12/2022 - 03/2023',
                location: 'Harare, Zimbabwe'
            },
            {
                id: 3,
                title: 'Freelance web developer',
                role: 'Freelance web developer.',
                url: 'no-website',
                desc: "Worked on various projects for companies and individuals. Car tracking software, National Railways of Zimbabwe amongst many projects.",
                year: '12/2022 - 03/2023',
                location: 'Harare, Zimbabwe'
            },
            {
                id: 3,
                title: 'Mpilo Hospital',
                role: 'IT intern',
                url: 'http://mpilo.org.zw/',
                desc: "Worked on the first patient triaging system of the hospital leading to successful launch. Collaborated in revamping the website.",
                year: '08/2019 - 08/2020',
                location: 'Harare, Zimbabwe'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
