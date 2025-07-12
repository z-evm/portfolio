import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Zachary',
    lastName:  'McGill',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Future-Focused Technologist | Dev, Cyber & Decentralized Systems Enthusiast',
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
    headline: <>Future-Focused Technologist | Dev, Cyber & Decentralized Systems Enthusiast</>,
    subline: <>Hi, I'm Zach. I'm a future-focused technologist exploring the edges of full-stack development, decentralized systems, and<br/> 
     cybersecurity. I'm passionate about building secure, innovative<br/> solutions and currently experimenting with AI agent
    frameworks<br/> and IPFS-based hosting. I'm committed to continously learning<br/> and staying ahead of emerging tech trends.</>
}

const about = {
    label: 'Work in Progress',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
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
        description: <>With formal training in advanced programming, cybersecurity, web development and networking, I'm a junior developer
        from Australia passionate about solving problems and building meaningful digital experiences. I'm actively exploring AI, decentralized systems.
        I'm open to roles in development, cyber, or networking where I can grow and contribute.</>
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
                description: <>Cisco Networking Academy - Completed training in IT fundamentals.</>
            },
            {
                name: 'CCNA: Introduction to Networks',
                description: <>Cisco Networking Academy - Developed skills in networking fundamentals.</>
            },
            {
                name: 'Certificate IV in Cyber Security',
                description: <>Blacktown - TAFE - Learned system and network security and SOC operations.</>
            },
            {
                name: 'Diploma of Advanced Programming',
                description: <>Petersham - TAFE - Focused on modern development practices and technologies.</>
            },
            {
                name: 'Certificate IV in Programming',
                description: <>Petersham - TAFE - Built foundational coding and problem-solving skills.</>
            },
            {
                name: 'Certificate III in Web Development',
                description: <>Ultimo - TAFE - Gained skills in creating functional and responsive websites.</>
            },
            {
                name: 'Certificate IV in Hospitality',
                description: <>Sydney - Quality Training & Hospitality College - Completed this course at work.</>
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                "title": "Programming & Scripting",
                "description": "JavaScript, Python, Bash, Shell, SQL.",
                "images": [],
            },
            {
                "title": "Web Development",
                "description": "HTML5, CSS3, React, Node.js, Express, REST API's, Figma.",
                "images": [],
            },
            {
                "title": "Software & Systems Development",
                "description": "C#, .NET, Git, Agile Development, Test-Driven Development.",
                "images": [],
            },
            {
                "title": "Networking & Systems",
                "description": "Cisco networking fundamentals, TCP/IP, DNS, DHCP, Windows & Linux system administration, virtualization.",
                "images": [],
            },
            {
                "title": "Cybersecurity & SOC Tools",
                "description": "SIEM (Splunk), Wireshark, vulnerability assessment, incident response, firewall configuration, security auditing.",
                "images": [],
            },
            {
                "title": "Dev Tools & Platforms",
                "description": "VS Code, Visual Studio 2022, PyCharm, GitHub, Docker, Postman, Vercel, Supabase, Azure, Android Studio, Obsidian.",
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