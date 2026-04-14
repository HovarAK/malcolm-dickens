// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/malcolm-dickens/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "Notes and technical writing by Malcolm Dickens on mathematics, machine learning, algorithms, and engineering practice.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/malcolm-dickens/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications, talks, posters, and research activity by Malcolm Dickens.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/malcolm-dickens/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Project portfolio for Malcolm Dickens, covering software engineering, data systems, machine learning, and research-facing computational work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/malcolm-dickens/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Online CV for Malcolm Dickens, summarizing education, research, teaching, engineering experience, and technical background.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/malcolm-dickens/cv/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Mentors, research communities, and professional networks that have shaped Malcolm Dickens&#39;s development.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/malcolm-dickens/people/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "Reading shelf for Malcolm Dickens, centered on mathematics, algorithms, machine learning, research practice, and software engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/malcolm-dickens/books/";
          },
        },{id: "post-hpc-iteration-not-just-hpc-scale",
        
          title: "HPC Iteration, Not Just HPC Scale",
        
        description: "What I learned from treating GPU access as part of an experimentation loop rather than a badge of scale.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/malcolm-dickens/blog/2026/hpc-iteration-and-llms/";
          
        },
      },{id: "post-notes-on-spectral-clustering-under-imperfect-conditions",
        
          title: "Notes on Spectral Clustering Under Imperfect Conditions",
        
        description: "A short reflection on why numerical edge cases matter as much as the idealized algorithm.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/malcolm-dickens/blog/2026/notes-on-spectral-clustering/";
          
        },
      },{id: "post-from-mathematical-reasoning-to-systems-work",
        
          title: "From Mathematical Reasoning to Systems Work",
        
        description: "Why I think mathematical training changes how you design, debug, and trust software systems.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/malcolm-dickens/blog/2026/from-math-to-systems/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/malcolm-dickens/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/malcolm-dickens/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-fairness-constrained-spectral-clustering",
          title: 'Fairness-Constrained Spectral Clustering',
          description: "Research on fairness-constrained spectral clustering, with an emphasis on numerical stability, edge cases, and computational reliability.",
          section: "Projects",handler: () => {
              window.location.href = "/malcolm-dickens/projects/fairness-spectral-clustering/";
            },},{id: "projects-llama-hpc-inference-pipeline",
          title: 'LLaMA HPC Inference Pipeline',
          description: "GPU-backed in-context learning pipeline for citation generation, built to make LLM experimentation faster and more systematic.",
          section: "Projects",handler: () => {
              window.location.href = "/malcolm-dickens/projects/llama-hpc-pipeline/";
            },},{id: "projects-neuroscience-decision-making-data-pipeline",
          title: 'Neuroscience Decision-Making Data Pipeline',
          description: "Modular MATLAB tooling for neuroscience decision-making experiments, built around reproducible logging, preprocessing, and reliable data handoff.",
          section: "Projects",handler: () => {
              window.location.href = "/malcolm-dickens/projects/neuroscience-data-pipeline/";
            },},{id: "projects-visa-case-management-portal",
          title: 'VISA Case Management Portal',
          description: "Full-stack case-management portal built with Next.js, Express, and MySQL, focused on authentication, persistence, and clean application boundaries.",
          section: "Projects",handler: () => {
              window.location.href = "/malcolm-dickens/projects/visa-case-management-portal/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/malcolm-dickens/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/malcolm-dickens/teachings/introduction-to-machine-learning/";
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
          window.open("/malcolm-dickens/feed.xml", "_blank");
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
