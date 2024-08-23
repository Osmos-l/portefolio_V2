export type Experience = {
    company: string,
    position: string,
    website: string,
    image: string
}

const experiences: Experience[] = [
    {
        company: "CGI",
        position: "Software Engineer",
        website: "https://www.cgi.com",
        image: "/cgi.jpg"
    }, {
        company: "Sagesse Assurance",
        position: "Software Engineer",
        website: "https://www.sagesse.fr/",
        image: "/sagesse.png"
    }
]

export { experiences }