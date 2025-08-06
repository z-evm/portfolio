import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Zachary',
    lastName:  'McGill',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Dev | Cybersecurity-Aware | Exploring Web3 & Decentralized Systems',
    avatar:    '/images/avatar.jpg',
    location:  'Australia/Sydney',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally share insights on web3 trends, technology, and design.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/z-evm',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/zac-mcgill/',
    },
    // {
    //     name: 'X',
    //     icon: 'x',
    //     link: '',
    // },
    // {
    //     name: 'Email',
    //     icon: 'email',
    //     link: 'mailto:zmcg.dev@proton.me',
    // },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Full Stack Dev | Cybersecurity-Aware | Exploring Web3 & Decentralized Systems</>,
    subline: <>Hi, I'm Zach. I'm a future-focused technologist exploring the edges of full-stack development, decentralized systems, and<br/> 
     cybersecurity. I'm passionate about building secure, innovative<br/> solutions and currently experimenting with AI agent
    frameworks<br/> and IPFS-based hosting. I'm committed to continously learning<br/> and staying ahead of emerging tech trends.</>
}

const about = {
    label: 'Work in Progress',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: false,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Full stack developer with formal training in advanced programming, cybersecurity, networking, and web development. 
        I’m passionate about building secure, efficient digital systems — from full stack apps to smart contracts. My technical toolkit spans frontend and backend development, scripting, and practical security principles. 
        I’m particularly interested in how decentralized technologies like Ethereum, IPFS, cybersecurity, and<br/> A.I intersect — and I actively build, experiment, and learn at that edge.</>
    },
    work: {
        display: false, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Lead Designer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'IT Essentials',
                description: <>Cisco Networking Academy - Completed foundational training in IT systems, hardware, and troubleshooting.</>
            },
            {
                name: 'CCNA: Introduction to Networks',
                description: <>Cisco Networking Academy - Developed hands-on skills in routing, switching, <br/>and network fundamentals.</>
            },
            {
                name: 'Certificate IV in Cyber Security',
                description: <>Blacktown - TAFE - Trained in system/network security, threat detection, and <br/>SOC operations.</>
            },
            {
                name: 'Diploma of Advanced Programming',
                description: <>Petersham - TAFE - Focused on full-stack development, modern programming practices, and secure coding.</>
            },
            {
                name: 'Certificate IV in Programming',
                description: <>Petersham - TAFE - Built strong foundations in object-oriented programming and software development life cycles.</>
            },
            {
                name: 'Certificate III in Web Development',
                description: <>Ultimo - TAFE - Gained practical experience in designing and building responsive, accessible websites.</>
            },
            {
                name: 'Certificate IV in Hospitality',
                description: <>Sydney - Quality Training & Hospitality College - Learned customer service, team leadership, and operations management.</>
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                "title": "Programming, Scripting & Development",
                "description": "Familiar with Git, Agile methodologies, JavaScript, TypeScript, Solidity, C#, Python, Bash, PowerShell, SQL, MongoDB, test-driven development",
                "images": [],
            },
            {
                "title": "Web Development",
                "description": "HTML5, CSS3, Tailwind CSS (basic), React, Next.js, Node.js, Express, RESTful APIs, Figma, Bootstrap",
                "images": [],
            },
            {
                "title": "Networking & Infrastructure",
                "description": "Configured Cisco routers/switches, IP addressing, TCP/IP, DNS, DHCP, hands-on experience with Windows & Linux system administration, virtualization (VirtualBox, WSL2, Hyper-V)",
                "images": [],
            },
            {
                "title": "Cybersecurity & SOC Operations",
                "description": "Experience with SIEM (Splunk), Wireshark, vulnerability scanning platforms (Nessus, OpenVAS), firewall configuration, log analysis, incident response, OWASP Top 10, NIST Cybersecurity Framework, MITRE ATT&CK, and CIS Controls",
                "images": [],
            },
            {
                "title": "Dev Ops & Platforms",
                "description": "GitHub Actions, Jest, Docker, VS Code, Visual Studio 2022, Postman, Vercel, Supabase, Azure, SSQL, Obsidian MD, and Android Studios",
                "images": [],
            }
            // {
            //     title: 'Figma',
            //     description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
            //     images: [
            //         {
            //             src: '/images/projects/project-01/cover-02.jpg',
            //             alt: 'Project image',
            //             width: 16,
            //             height: 9
            //         },
            //         {
            //             src: '/images/projects/project-01/cover-03.jpg',
            //             alt: 'Project image',
            //             width: 16,
            //             height: 9
            //         },
            //     ]
            // },
            // {
            //     title: 'Next.js',
            //     description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
            //     images: [
            //         {
            //             src: '/images/projects/project-01/cover-04.jpg',
            //             alt: 'Project image',
            //             width: 16,
            //             height: 9
            //         },
            //     ]
            // }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, work, blog, gallery };