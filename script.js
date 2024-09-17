VANTA.NET({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x64ffda,
    backgroundColor: 0x1a2f4e,
    points: 10.00,
    maxDistance: 20.00,
    spacing: 20.00
})

// Typing effect
const typingText = document.querySelector('.typing-text');
const texts = ["AIML Developer", "Full Stack Developer", "Deep Learning Engineer"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

// Start the typing effect
type();

// Skills data
const skills = {
    aiml: [
        { name: "Artificial Intelligence (AI)", icon: "fas fa-brain" },
        { name: "Machine Learning (ML)", icon: "fas fa-cogs" },
        { name: "Deep Learning (DL)", icon: "fas fa-network-wired" },
        { name: "Generative AI", icon: "fas fa-robot" },
        { name: "Large Language Models (LLMs)", icon: "fas fa-language" },
        { name: "TensorFlow", icon: "fas fa-cube" },
    ],
    "web-development": [
        { name: "HTML", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "React", icon: "fab fa-react" },
        { name: "Node.js", icon: "fab fa-node-js" },
    ],
    frameworks: [
        { name: "TensorFlow", icon: "fas fa-cube" },
        { name: "React", icon: "fab fa-react" },
        { name: "Node.js", icon: "fab fa-node-js" },
    ],
    "programming-languages": [
        { name: "Python", icon: "fab fa-python" },
        { name: "Java", icon: "fab fa-java" },
        { name: "C", icon: "fas fa-code" },
    ],
    databases: [
        { name: "MySQL", icon: "fas fa-database" },
        { name: "MongoDB", icon: "fas fa-leaf" },
    ],
};

// Education data
const education = [
    {
        school: "Pittsburg State University",
        degree: "Bachelor of Technology - BTech",
        major: "Computer Science",
        date: "2021 - 2025 (Expected)",
        grade: "3.8 CGPA",
        icon: "fas fa-university",
        highlights: [
            ""
            
        ]
    },
    {
        school: "Malla Reddy University",
        degree: "Bachelor of Technology - BTech",
        major: "Artificial Intelligence and Machine Learning",
        date: "2021 - 2025 (Expected)",
        grade: "9.35 CGPA",
        icon: "fas fa-university",
        highlights: [
            ""
        ]
    },
    {
        school: "Sri VishnuJunior College",
        degree: "Board of Intermediate Education",
        date: "2019 - 2021",
        grade: "9.63 CGPA",
        icon: "fas fa-school",
        highlights: [
            ""
        ]
    },
    {
        school: "Blooms High School",
        degree: "State Board of Secondary Education",
        date: "2018 - 2019",
        grade: "9.8 CGPA",
        icon: "fas fa-graduation-cap",
        highlights: [
            ""
        ]
    }
];

// Experience data
const experiences = [
    {
        role: "Developer Intern",
        company: "AWS; Intelligent Automation Virtual Internship",
        date: "Sep 2023 - Nov 2023",
        desc: "Completed an 10-week Virtual Internship, gaining comprehensive knowledge in Agile development and earning multiple super badges.",
        skills: ["Agile Methodologies", "AI", "Debugging", "API Integration", "UiPath"]
    },
    {
        role: "AI Intern",
        company: "Microsoft AI for Earth",
        date: "May 2023 - July 2023",
        desc: "Participated in a 12-week internship, working on AI projects and earning  a certificate in AI .",
        skills:  ["AI", "Machine Learning", "Data Science", "Python", "TensorFlow"]

    }
];

// Projects data
const projects = [
    {
        title: "Sign Language Detection",
        date: "June 2024",
        description: "The Sign Language Detection project takes three types of inputs: text, voice, and camera. With text and voice input, the application displays the corresponding alphabet signs or GIFs for phrases. Camera input is used for testing sign detection. The project utilizes Deep Learning techniques with tkinter for the frontend.",
        tags: ["Deep Learning", "tkinter"],
        
    },

    {
        title: "Epilepsy Detection",
        date: "October 2024",
        description: "Developed a project for epileptic seizure detection and data analysis, utilizing AI algorithms to predict seizures and analyze brain signal patterns.",
        tags: ["Machine Learning", "Python"],
        github: "https://github.com/bhanusrinija/Epilepsy-Detection"
    },
    {
        title: "Facemask Detection",
        date: "December 2021",
        description: "Created an automatic facemask detection system using Python, machine learning, and OpenCV to accurately identify individuals wearing masks.",
        tags: ["Machine Learning","OpenCV"]
    },
    {
        title: "ChatGPT Terminal",
        date: "October 2024",
        description: "Developed a direct link with OpenAI key to use ChatGPT in a Python terminal, enabling interactive AI-powered conversations.",
        tags: ["OpenAI", "Python"]
    }
];
const worksimulations = [
    internships = [
        {
            company: "JP Morgan",
            title: "Sign Language Detection",
            date: "June 2024"
        },
        {
            company: "Lloyds Banking Group",
            title: "Data Science",
            date: "Feb 2024"
        },
        {
            company: "CBRE",
            title: "Project Management",
            date: "Jul 2023"
        },
        {
            company: "Datacom",
            title: "Software Development",
            date: "May 2023"
        },
        {
            company: "TATA",
            title: "Data Visualization",
            date: "Feb 2023"
        },
        {
            company: "Accenture",
            title: "Data Analytics and Visualization",
            date: "Feb 2023"
        }
    ]
    
];
// Function to load skills
function loadSkills() {
    Object.keys(skills).forEach(category => {
        const categoryContainer = document.getElementById(category);
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
        categoryContainer.appendChild(categoryTitle);

        const skillsGrid = document.createElement('div');
        skillsGrid.className = 'skills-grid';

        skills[category].forEach((skill, index) => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-item';
            skillElement.setAttribute('data-aos', 'fade-up');
            skillElement.setAttribute('data-aos-delay', `${index * 50}`);
            skillElement.innerHTML = `
                <i class="${skill.icon}"></i>
                <p>${skill.name}</p>
            `;
            skillsGrid.appendChild(skillElement);
        });

        categoryContainer.appendChild(skillsGrid);
    });
}

// Function to load education
function loadEducation() {
    const educationContainer = document.querySelector('.education-container');
    education.forEach((edu, index) => {
        const eduElement = document.createElement('div');
        eduElement.className = 'education-item';
        eduElement.setAttribute('data-aos', 'fade-up');
        eduElement.setAttribute('data-aos-delay', `${index * 100}`);
        eduElement.innerHTML = `
            <div class="education-icon">
                <i class="${edu.icon}"></i>
            </div>
            <div class="education-details">
                <h3>${edu.school}</h3>
                <h4>${edu.degree}${edu.major ? ` in ${edu.major}` : ''}</h4>
                <p class="education-date">${edu.date}</p>
                <p class="education-grade">Grade: ${edu.grade}</p>
                <ul class="education-highlights">
                    ${edu.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
        `;
        educationContainer.appendChild(eduElement);
    });
}

// Function to load experiences
function loadExperiences() {
    const experienceContainer = document.querySelector('.experience-container');
    experiences.forEach((exp, index) => {
        const expElement = document.createElement('div');
        expElement.className = 'experience-item';
        expElement.setAttribute('data-aos', 'fade-up');
        expElement.setAttribute('data-aos-delay', `${index * 100}`);
        expElement.innerHTML = `
            <h3>${exp.role}</h3>
            <h4>${exp.company}</h4>
            <p>${exp.date}</p>
            <p>${exp.desc}</p>
            <ul>
                ${exp.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;
        experienceContainer.appendChild(expElement);
    });
}

// Function to load projects
function loadProjects() {
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-item';
        projectElement.setAttribute('data-aos', 'fade-up');
        projectElement.setAttribute('data-aos-delay', `${index * 100}`);
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.date || ''}</p>
            <p>${project.description}</p>
            <p>Tags: ${project.tags.join(', ')}</p>
            
        `;
        projectsContainer.appendChild(projectElement);
    });
}
function loadworksimulations() {
    const projectsContainer = document.querySelector('.worksimulations-container');
    worksimulations.forEach((work, index) => {
        const workElement = document.createElement('div');
        workElement.className = 'work-item';
        workElement.setAttribute('data-aos', 'fade-up');
        workElement.setAttribute('data-aos-delay', `${index * 100}`);
        workElement.innerHTML = `
            <h3>${work.title}</h3>
            <p>${work.date || ''}</p>
            
        `;
        worksimulations-Container.appendChild(workElement);
    });
}

// Load content when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    loadEducation();
    loadExperiences();
    loadProjects();
    
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });
});

// Form submission (you'll need to implement the backend for this)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
    // You would typically send this data to a server
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Thank you for your message. I'll get back to you soon!");
            this.reset();
        } else {
            alert("Oops! There was a problem submitting your form");
        }
    })
    .catch(error => {
        alert("Oops! There was a problem submitting your form");
    });
});