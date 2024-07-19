const expertise = [
    {
        id: 0,
        title: 'Java',
        desc: 'I am Java developer with experience in Java 17 and Spring Boot framework. I create efficient APIs. This has been shown by projects such as an education API that I worked on.',
    },
    {
        id: 0,
        title: 'Next js',
        desc: 'I have expertise in Next js as shown by my work on TM Pick n Pay project that I have worked on with this technology.',
    },
    {
        id: 0,
        title: 'Laravel',
        desc: 'I have expertise in Laravel shown by the project I used with it in building Resbright investments customs clearance application.',
    },
    {
        id: 0,
        title: 'Vue js',
        desc: 'I have worked with Vue js in my work at Lawplus+ solicitors.',
    },
    {
        id: 0,
        title: 'MySQL',
        desc: 'I have expertise in MySQL. I have worked with Maria DB, MySQL and Postgre SQL.',
    },
    {
        id: 0,
        title: 'C and C++',
        desc: 'I have worked on C++ projects developing embedded systems software.',
    },
    {
        id: 0,
        title: 'Docker and Kubernetes',
        desc: 'I have worked with docker and kubenates on Linux servers during deployments and development of monoliths and microservises.',
    },
    {
        id: 0,
        title: 'Apache kafka',
        desc: 'I understand Apache kafka and have experimented with it on microservices.',
    },
    {
        id: 1,
        title: 'Scrum and Trello',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I have used Trello to manage project tasks and collaborate with other developers.",
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
