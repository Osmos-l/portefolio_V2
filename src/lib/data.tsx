export type Experience = {
    company: string,
    position: string,
    website: string,
    image: string,
    skills: string[],
    color: string
}

const experiences: Experience[] = [
    {
        company: "CGI (2021 - today)",
        position: "Software Engineer",
        website: "https://www.cgi.com",
        image: "/cgi.jpg",
        skills: ["Ruby", "Rails", "JavaScript", "SQL", "Docker", "Kubernetes", "Jenkins"],
        color: "pink-700"
    }, {
        company: "Sagesse Assurance (2020 - 2021)",
        position: "Software Engineer",
        website: "https://www.sagesse.fr/",
        image: "/sagesse.png",
        skills: ["PHP", "Symfony", "JavaScript", "SQL"],
        color: "orange-700"
    }, {
        company: "Stedis (2019)",
        position: "Web developer",
        website: "https://www.stedis.com/",
        image: "/stedis.png",
        skills: ["Java", "Spring", "JavaScript", "Angular"],
        color: "green-700"
    }, 
]

export { experiences }