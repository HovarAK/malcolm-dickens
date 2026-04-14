---
layout: page
title: Projects
permalink: /projects/
description: Project portfolio for Malcolm Dickens, covering software engineering, data systems, machine learning, and research-facing computational work.
nav: true
nav_order: 4
hide_title: true
---

<section class="page-intro">
  <p class="landing-eyebrow">Portfolio</p>
  <h1>Projects</h1>
  <p>
    These projects show the kinds of problems I like to work on and the way I tend to approach them.
    Some are straightforward engineering builds. Others come out of research settings where
    implementation, experimentation, and mathematical judgment all mattered at once.
  </p>
</section>

{% assign featured_projects = site.projects | where: "featured", true | sort: "importance" %}
{% assign all_projects = site.projects | sort: "importance" %}

<section>
  <div class="section-heading">
    <div>
      <h2>Featured Projects</h2>
      <p>The strongest cross-section of my current work for engineering, data, and research-oriented audiences.</p>
    </div>
  </div>
  <div class="case-study-grid">
    {% for project in featured_projects %}
      <article class="case-study-card">
        <p class="feature-card__eyebrow">{{ project.category | capitalize }}</p>
        <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        <p>{{ project.description }}</p>
        <dl class="case-study-meta">
          <dt>Role</dt>
          <dd>{{ project.role }}</dd>
          <dt>Stack</dt>
          <dd>{{ project.stack | join: ", " }}</dd>
          <dt>Outcome</dt>
          <dd>{{ project.outcome }}</dd>
        </dl>
        {% if project.tags %}
          <div class="tag-cloud tag-cloud--compact">
            {% for tag in project.tags %}
              <span>{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>

<section>
  <div class="section-heading">
    <div>
      <h2>All Projects</h2>
      <p>Each project page adds context, implementation details, and the tradeoffs that shaped the final work.</p>
    </div>
  </div>

  <div class="case-study-list">
    {% for project in all_projects %}
      <article class="case-study-list__item">
        <div>
          <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
          <p>{{ project.description }}</p>
        </div>
        <div class="case-study-list__details">
          <p><strong>Problem:</strong> {{ project.problem }}</p>
          <p><strong>Built:</strong> {{ project.built }}</p>
          <p><strong>Role:</strong> {{ project.role }}</p>
          <p><strong>Technical decisions:</strong> {{ project.decisions }}</p>
          <p><strong>Outcome:</strong> {{ project.outcome }}</p>
          {% if project.github or project.live_url %}
            <p class="case-study-links">
              {% if project.github %}<a href="{{ project.github }}">Repository</a>{% endif %}
              {% if project.github and project.live_url %}<span>•</span>{% endif %}
              {% if project.live_url %}<a href="{{ project.live_url }}">Live link</a>{% endif %}
            </p>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>
