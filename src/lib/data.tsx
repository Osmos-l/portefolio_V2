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
        company: "CGI",
        position: "Software Engineer",
        website: "https://www.cgi.com",
        image: "/cgi.jpg",
        skills: ["Ruby", "Rails", "JavaScript", "SQL", "Docker", "Kubernetes", "Jenkins"],
        color: "pink-700"
    }, {
        company: "Sagesse Assurance",
        position: "Software Engineer",
        website: "https://www.sagesse.fr/",
        image: "/sagesse.png",
        skills: ["PHP", "Symfony", "JavaScript", "SQL"],
        color: "orange-700"
    }
]

export { experiences }