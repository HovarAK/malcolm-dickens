// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "Technical writing by Malcolm Dickens on computational mathematics, machine learning, algorithms, and software engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications, talks, posters, and works in progress by Malcolm Dickens.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Project portfolio for Malcolm Dickens, spanning software engineering, machine learning systems, and research-facing computational work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Online CV for Malcolm Dickens, serving as the public source of truth for education, experience, research, teaching, and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Mentors, research communities, and professional networks that shaped Malcolm Dickens.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "Public reading shelf for Malcolm Dickens, focused on mathematics, algorithms, machine learning, research practice, and software engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-hpc-iteration-not-just-hpc-scale",
        
          title: "HPC Iteration, Not Just HPC Scale",
        
        description: "What I learned from treating GPU access as part of an experimentation loop rather than a badge of scale.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hpc-iteration-and-llms/";
          
        },
      },{id: "post-notes-on-spectral-clustering-under-imperfect-conditions",
        
          title: "Notes on Spectral Clustering Under Imperfect Conditions",
        
        description: "A short reflection on why numerical edge cases matter as much as the idealized algorithm.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/notes-on-spectral-clustering/";
          
        },
      },{id: "post-from-mathematical-reasoning-to-systems-work",
        
          title: "From Mathematical Reasoning to Systems Work",
        
        description: "Why I think mathematical training changes how you design, debug, and trust software systems.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/from-math-to-systems/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-fairness-constrained-spectral-clustering",
          title: 'Fairness-Constrained Spectral Clustering',
          description: "Research project on stable spectral clustering under group proportion constraints and ill-conditioned graph structure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fairness-spectral-clustering/";
            },},{id: "projects-llama-hpc-inference-pipeline",
          title: 'LLaMA HPC Inference Pipeline',
          description: "GPU-accelerated in-context learning pipeline for generating citation syntax from research-paper metadata.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llama-hpc-pipeline/";
            },},{id: "projects-neuroscience-decision-making-data-pipeline",
          title: 'Neuroscience Decision-Making Data Pipeline',
          description: "Modular MATLAB tooling for decision-making experiments with reproducible logging, preprocessing, and eye-tracking support.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/neuroscience-data-pipeline/";
            },},{id: "projects-visa-case-management-portal",
          title: 'VISA Case Management Portal',
          description: "Full-stack portal for user onboarding and case-management workflows, built with Next.js, Express, and MySQL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/visa-case-management-portal/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%69%63%6B%65%6E%73.%6D%61%6C%63%6F%6C%6D.%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/HovarAK", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/malcolm-dickens", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
