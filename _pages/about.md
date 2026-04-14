---
layout: page
title: About
permalink: /
description: Personal website of Malcolm Dickens, a mathematics and computer science student working across software engineering, data science, machine learning, and computational mathematics.
hide_title: true
---

<section class="landing-hero">
  <div class="landing-hero__copy">
    <p class="landing-eyebrow">Mathematics • Computation • Engineering</p>
    <h1>Malcolm Dickens</h1>
    <p class="landing-lead">
      I study mathematics and computer science at UMBC, build practical software systems, and write
      toward a long-term path in computational and applied mathematics research. My work sits where
      quantitative reasoning, machine learning, and disciplined engineering meet.
    </p>
    <div class="landing-actions">
      <a class="btn btn-sm z-depth-0" href="{{ '/projects/' | relative_url }}">View Projects</a>
      <a class="btn btn-sm btn-outline-primary z-depth-0" href="{{ '/cv/' | relative_url }}">Read CV</a>
      <a class="btn btn-sm btn-outline-primary z-depth-0" href="mailto:dickens.malcolm.a@gmail.com">Contact Me</a>
    </div>
    <div class="landing-links">
      <a href="mailto:dickens.malcolm.a@gmail.com">Email</a>
      <span>•</span>
      <a href="https://github.com/HovarAK">GitHub</a>
      <span>•</span>
      <a href="https://www.linkedin.com/in/malcolm-dickens/">LinkedIn</a>
    </div>
  </div>
  <div class="landing-hero__portrait" aria-hidden="true">
    <div class="portrait-placeholder">
      <span>MD</span>
      <p>Headshot placeholder</p>
    </div>
  </div>
</section>

<section class="glance-strip">
  <div class="glance-card">
    <span class="glance-label">Education</span>
    <strong>B.S. Computer Science and Mathematics</strong>
    <p>UMBC, expected May 2026</p>
  </div>
  <div class="glance-card">
    <span class="glance-label">Current focus</span>
    <strong>Algorithms, ML, and numerical thinking</strong>
    <p>Research experience, technical writing, and software work that rewards careful reasoning</p>
  </div>
  <div class="glance-card">
    <span class="glance-label">Near-term goal</span>
    <strong>SWE and data science opportunities</strong>
    <p>Especially teams that value analytical rigor, sound implementation, and room to grow</p>
  </div>
  <div class="glance-card">
    <span class="glance-label">Long-term direction</span>
    <strong>Computational and applied mathematics research</strong>
    <p>Building the mathematical maturity, research depth, and judgment needed for doctoral work</p>
  </div>
</section>

<section class="section-grid">
  <div>
    <h2>Who I Am</h2>
    <p>
      I am a mathematics and computer science student at the University of Maryland, Baltimore County.
      What keeps me engaged is the overlap between abstract reasoning and implementation: the point
      where a mathematical idea has to survive contact with data, code, runtime constraints, and
      real-world ambiguity. That has pulled me toward algorithms, machine learning, numerical methods,
      and the kinds of engineering problems where structure matters.
    </p>
    <p>
      I want to become the kind of researcher and engineer who can move comfortably between theory,
      code, and evidence: someone who can reason carefully about a model, implement it faithfully, and
      evaluate it without hand-waving away the inconvenient parts.
    </p>
  </div>
  <div class="signal-card">
    <h3>At a glance</h3>
    <ul class="signal-list">
      <li>3 research internships spanning algorithms, neuroscience data systems, and ML systems</li>
      <li>Teaching fellow experience across introductory programming, OOP, and data structures</li>
      <li>Meyerhoff Scholar, SIAM student member, and NSBE student member</li>
      <li>Interests concentrated in computational mathematics, machine learning, and reliable software</li>
    </ul>
  </div>
</section>

<section class="section-grid">
  <div>
    <h2>Current Focus</h2>
    <p>
      Right now I am especially interested in the bridge between mathematics, machine learning, data,
      and software systems. In research settings, that has meant spectral clustering, numerical
      stability, experiment infrastructure, and GPU-backed model workflows. In engineering settings, it
      has meant building full-stack applications with clean interfaces, reliable data flow, and enough
      structure to remain maintainable as complexity grows.
    </p>
  </div>
  <div>
    <h2>Research Interests</h2>
    <div class="tag-cloud">
      <span>Computational mathematics</span>
      <span>Applied mathematics</span>
      <span>Numerical linear algebra</span>
      <span>Machine learning</span>
      <span>Algorithms</span>
      <span>Optimization</span>
      <span>Scientific computing</span>
      <span>Data-driven systems</span>
    </div>
  </div>
</section>

<section class="section-grid">
  <div>
    <h2>Quantitative Training and Engineering Practice</h2>
    <p>
      My mathematics background shapes how I approach software. I pay attention to assumptions, edge
      cases, invariants, runtime behavior, and whether a result is genuinely reliable or simply
      convenient in a narrow setting. That perspective shows up in obvious places like clustering
      methods and matrix-based computation, but it also shows up in everyday engineering work:
      authentication flows, schemas, reproducible scripts, instrumentation, and debugging.
    </p>
  </div>
  <div>
    <h2>Professional Strengths</h2>
    <ul class="signal-list">
      <li>Turning technical ambiguity into structured experiments and implementation plans</li>
      <li>Moving between abstract reasoning and applied execution without losing rigor</li>
      <li>Writing maintainable code and reproducible workflows for collaborative work</li>
      <li>Communicating technical ideas clearly to students, collaborators, and mixed audiences</li>
    </ul>
  </div>
</section>

<section class="section-grid">
  <div>
    <h2>What I’m Building Toward</h2>
    <p>
      Long term, I want to contribute to computational and mathematical research in a serious way and
      grow into strong PhD applications. I am especially drawn to problems where formal reasoning and
      computational experimentation inform each other: areas where algorithms, numerical methods, and
      machine learning genuinely interact rather than being treated as separate tracks.
    </p>
    <p>
      In the near term, I am looking for software engineering and data science roles where I can be
      useful now while continuing to deepen the research side of my profile. The ideal environments are
      ones that value rigor, mentorship, and technically honest work.
    </p>
  </div>
  <div class="signal-card">
    <h3>Current priorities</h3>
    <ul class="signal-list">
      <li>Deepen mathematical maturity through advanced coursework and research</li>
      <li>Keep building technically serious projects with clear practical value</li>
      <li>Develop a stronger public research and technical writing record</li>
      <li>Grow toward environments where mentorship and rigor are both expected</li>
    </ul>
  </div>
</section>

{% assign featured_projects = site.projects | where: "featured", true | sort: "importance" %}

<section>
  <div class="section-heading">
    <div>
      <h2>Featured Work</h2>
      <p>Selected work that reflects how I approach technical problems: analytically, concretely, and with attention to implementation details.</p>
    </div>
    <a href="{{ '/projects/' | relative_url }}">See all projects</a>
  </div>
  <div class="feature-grid">
    {% for project in featured_projects limit: 3 %}
      <article class="feature-card">
        <p class="feature-card__eyebrow">{{ project.category | capitalize }}</p>
        <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        <p>{{ project.description }}</p>
        {% if project.tags %}
          <div class="tag-cloud tag-cloud--compact">
            {% for tag in project.tags %}
              <span>{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </article>
    {% endfor %}
    <article class="feature-card">
      <p class="feature-card__eyebrow">Publications</p>
      <h3><a href="{{ '/publications/' | relative_url }}">Scholarly outputs and talks</a></h3>
      <p>
        This section tracks talks, posters, and work in progress as my research record develops. I use
        it to document real scholarly activity without overstating what is still early.
      </p>
    </article>
  </div>
</section>
