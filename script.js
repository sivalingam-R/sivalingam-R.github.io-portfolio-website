// Project data
const projects = [
  {
    title: "ToDo-List app",
    desc: "A simple web app to add, view, edit, and delete daily tasks.",
    tech: ["Html", "Css", "JavaScript", "Bootsrap", "API"],
    repo: "https://github.com/sivalingam-R/sivalingam-R.github.io-Todo-webapp",
    live: "https://sivalingam-r.github.io/sivalingam-R.github.io-Todo-webapp/"
  },
  {
    title: "Whether app",
    desc: "Headless commerce with Stripe payments, product search, and offline mode.",
    tech: ["Html", "Css", "javaScript", "Bootstrap","API"],
    repo: "https://github.com/sivalingam-R/sivalingam-R.github.io-whether-website",
    live: "https://sivalingam-r.github.io/sivalingam-R.github.io-whether-website/"
  },
  {
    title: "LearnWave — Course Platform",
    desc: "Course creation, video streaming, quizzes, and analytics dashboard.",
    tech: ["React", "AWS S3", "GraphQL", "TypeScript"],
    repo: "https://github.com/yourname/learnwave"
  }
];

// Skills list
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Postgres",
  "Docker",
  "AWS",
  "GraphQL"
];

// Render projects
const projectContainer = document.getElementById("projectList");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h4>${p.title}</h4>
    <p>${p.desc}</p>
    <div class="tech">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
    <div class="links">
      ${p.repo ? `<a href="${p.repo}" target="_blank">Repo</a>` : ""}
      ${p.live ? `<a href="${p.live}" target="_blank">Live</a>` : ""}
    </div>
  `;
  projectContainer.appendChild(card);
});

// Render skills
const skillsContainer = document.getElementById("skillsList");
skills.forEach(s => {
  const div = document.createElement("div");
  div.textContent = s;
  skillsContainer.appendChild(div);
});

// Initialize EmailJS (Replace with your public key after setup)
emailjs.init("E67IL8WBwU3qRQ50-"); // You'll get this from EmailJS dashboard

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault();
  
  const button = e.target.querySelector('button[type="submit"]');
  const originalText = button.textContent;
  
  try {
    // Change button to loading state
    button.textContent = "Sending...";
    button.disabled = true;
    
    // Get form values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    // Send email using EmailJS
    const response = await emailjs.send(
      "service_e78q9ep",    // Replace with your EmailJS service ID
      "template_0w9j3wj",   // Replace with your EmailJS template ID
      {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "sivalingam.r2026@gmail.com" // Your Gmail address
      }
    );
    
    // Success - show message and reset form
    alert("Message sent successfully! I'll get back to you soon.");
    e.target.reset();
    button.textContent = originalText;
    button.disabled = false;
    
  } catch (error) {
    // Error - show message and reset button
    console.error("Email sending failed:", error);
    alert("Failed to send message. Please try again or email me directly at sivalingam.r2026@gmail.com");
    button.textContent = originalText;
    button.disabled = false;
  }
});


