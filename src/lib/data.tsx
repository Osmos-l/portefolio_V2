export type Experience = {
    company: string,
    position: string,
    website: string,
    image: string,
    skills: string[],
    color: string
}

export type Project = {
    name: string,
    langages: string,
    image: string,
    size: number,
    codeSource: string,
    demo: string,
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

const projects: Project[] = [
    {
        name: "Portefolio",
        langages: "React - NextJS",
        image: "/projects/portefolio.png",
        size: 1,
        codeSource: "https://github.com/Osmos-l/portefolio_V2",
        demo: "https://jordanlcq.vercel.app/"
    }, {
        name: "VIE - Attorney Challenge",
        langages: "React - NextJS",
        image: "/projects/attorney_challenge.png",
        size: 2,
        codeSource: "https://github.com/Osmos-l/vie-attorney-challenge",
        demo: "https://www.youtube.com/watch?v=cTjC40YlQi0"
    }, {
        name: "Advent Of Code",
        langages: "Ruby",
        image: "/projects/aoc.png",
        size: 1,
        codeSource: "https://github.com/Osmos-l/AdventOfCode",
        demo: "https://github.com/Osmos-l/AdventOfCode"
    }, {
        name: "Sieve Erathostene Benchmark",
        langages: "Java",
        image: "/projects/sieve_erathostene.webp",
        size: 1,
        codeSource: "https://github.com/Osmos-l/sieveErathostene",
        demo: "https://github.com/Osmos-l/sieveErathostene"
    }, {
        name: "Simon game",
        langages: "Javascript",
        image: "/projects/simon_game.png",
        size: 1,
        codeSource: "https://github.com/Osmos-l/simon_game",
        demo: "https://osmos-l.github.io/simon_game/"
    }, {
        name: "Plugin - Clothes System",
        langages: "Lua (Garry's MOD)",
        image: "/projects/clothes_system.jpeg",
        size: 2,
        codeSource: "https://github.com/Osmos-l/Clothes-System-V2-",
        demo: "https://steamcommunity.com/sharedfiles/filedetails/?id=1404310741"
    }
]

export { experiences, projects }