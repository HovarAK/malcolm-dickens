---
layout: page
title: About
permalink: /
description: Landing page for Malcolm Dickens, a mathematics and computer science student building toward computational and applied mathematics research while contributing in software engineering and data science.
hide_title: true
---

<section class="landing-hero">
  <div class="landing-hero__copy">
    <p class="landing-eyebrow">Mathematics • Computation • Engineering</p>
    <h1>Malcolm Dickens</h1>
    <p class="landing-lead">
      Emerging computational and mathematical researcher with strong software and data instincts.
      I build data-driven systems, study algorithms and machine learning, and am developing toward a
      PhD trajectory in computational and applied mathematics.
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
    <p>Research internships, technical writing, and production-minded software work</p>
  </div>
  <div class="glance-card">
    <span class="glance-label">Near-term goal</span>
    <strong>SWE and data science opportunities</strong>
    <p>Especially roles that reward analytical rigor and engineering depth</p>
  </div>
  <div class="glance-card">
    <span class="glance-label">Long-term direction</span>
    <strong>Computational and applied mathematics research</strong>
    <p>Preparing for serious research mentorship and eventual PhD applications</p>
  </div>
</section>

<section class="section-grid">
  <div>
    <h2>Who I Am</h2>
    <p>
      I am a mathematics and computer science student at the University of Maryland, Baltimore County
      whose work sits between quantitative reasoning and practical system building. My academic path
      has pushed me toward algorithmic thinking, numerical methods, stochastic modeling, and machine
      learning. At the same time, my engineering work has kept me close to implementation details:
      APIs, databases, front-end and back-end integration, reproducible workflows, and performance.
    </p>
    <p>
      That combination matters to me. I want to be the kind of person who can move comfortably between
      theory, code, and data: someone who can reason carefully about a model, implement it correctly,
      and evaluate it with discipline.
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
      Right now I am most interested in the bridge between mathematics, computation, machine learning,
      and software engineering. In research settings, that has meant working on spectral clustering,
      numerical stability, data collection infrastructure, and GPU-backed model pipelines. In software
      settings, it has meant building full-stack applications with clear interfaces, reliable data
      flow, and maintainable implementation choices.
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
      My mathematical training affects how I build software. I care about assumptions, edge cases,
      invariants, runtime behavior, and whether a result is robust or merely convenient. That shows up
      in my work on clustering algorithms and matrix-based methods, but it also shows up in ordinary
      engineering tasks: authentication flows, data schemas, reproducible scripts, instrumentation, and
      debugging.
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
      Long term, I want to contribute to computational and mathematical research at a high level and
      prepare for strong PhD applications. I am especially drawn to work that combines formal reasoning
      with computational experimentation: areas where algorithm design, numerical methods, and machine
      learning meaningfully interact.
    </p>
    <p>
      In the near term, I am also looking for roles where I can contribute as a software engineer or
      data scientist while continuing to deepen the research side of my profile.
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
      <p>Representative projects and research-facing work at the intersection of quantitative thinking and implementation.</p>
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
        The publications page is set up to grow with formal papers, preprints, talks, posters, and
        works in progress. Current entries emphasize research activity without overstating claims.
      </p>
    </article>
  </div>
</section>
