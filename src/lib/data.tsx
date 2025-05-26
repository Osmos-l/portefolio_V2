export type Experience = {
    company: string,
    position: string | null,
    positions: string[] | null,
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

export type Book = {
    name: string,
    authors: string,
    image: string,
    url: string
}

const experiences: Experience[] = [
    {
        company: "CGI",
        position: null,
        positions: [
            "Technical expert (2025 - Now)",
            "Lead Developer (2023 - 2025)",
            "Software Engineer (2021 - 2023)"
        ],
        website: "https://www.cgi.com",
        image: "/companies/cgi.webp",
        skills: ["Ruby", "Rails", "JavaScript", "SQL", "Docker", "Kubernetes", "Jenkins"],
        color: "pink-700"
    }, {
        company: "Sagesse Assurance (2020 - 2021)",
        position: "Software Engineer",
        positions: null,
        website: "https://www.sagesse.fr/",
        image: "/companies/sagesse.png",
        skills: ["PHP", "Symfony", "JavaScript", "SQL"],
        color: "orange-700"
    }, {
        company: "Stedis (2019)",
        position: "Web developer",
        positions: null,
        website: "https://www.stedis.com/",
        image: "/companies/stedis.png",
        skills: ["Java", "Spring", "JavaScript", "Angular"],
        color: "green-700"
    }, 
]

const projects: Project[] = [
    {
        name: "DeepVision - CIFAR",
        langages: "Python",
        image: "/projects/deep_vision_cifar.png",
        size: 2,
        codeSource: "https://github.com/Osmos-l/DeepVision-CIFAR",
        demo: "https://github.com/Osmos-l/DeepVision-CIFAR"
    },
    {
        name: "Deep Learning - MNIST",
        langages: "Python",
        image: "/projects/deep_learning_mnist.png",
        size: 2,
        codeSource: "https://github.com/Osmos-l/deep-learning-mnist",
        demo: "https://github.com/Osmos-l/deep-learning-mnist"
    },
    {
        name: "Machine Learning - Perceptron",
        langages: "Python",
        image: "/projects/machine_learning_perceptron.png",
        size: 1,
        codeSource: "https://github.com/Osmos-l/machine-learning-perceptron",
        demo: "https://github.com/Osmos-l/machine-learning-perceptron"
    }, {
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
        size: 1,
        codeSource: "https://github.com/Osmos-l/Clothes-System-V2-",
        demo: "https://steamcommunity.com/sharedfiles/filedetails/?id=1404310741"
    }
]
const books: Book[] = [
    {
        name: "Deep learning",
        authors: "Ian Goodfellow, Yoshua Bengion, Aaron Courville",
        image: "/books/deep_learning.jpg",
        url: ""
    },
    {
        name: "Code Source",
        authors: "Bill Gates",
        image: "/books/code_source.jpg",
        url: ""
    },
    {
        name: "Quand la machine apprend",
        authors: "Yann LeCunn",
        image: "/books/quand_la_machine_apprend.jpg",
        url: ""
    },
    {
        name: "L'assasin Royal - 1",
        authors: "Robin Hoob",
        image: "/books/assassin_royal_tome_un.jpg",
        url: ""
    }
]

export { experiences, projects, books }