---
layout: page
permalink: /people/
title: People
description: Mentors, research communities, and professional networks that shaped Malcolm Dickens.
nav: true
nav_order: 6
hide_title: true
---

<section class="page-intro">
  <p class="landing-eyebrow">Intellectual community</p>
  <h1>People</h1>
  <p>
    This page highlights the mentors, research environments, and professional communities that have
    shaped my development so far. It is intentionally closer to an academic network page than a team page.
  </p>
</section>

<section>
  <h2>Mentors and Research Guides</h2>
  <div class="people-grid">
    {% for person in site.data.people.mentors %}
      <article class="person-card">
        <div class="person-avatar" aria-hidden="true">{{ person.name | split: ' ' | first | slice: 0 }}{{ person.name | split: ' ' | last | slice: 0 }}</div>
        <div>
          <h3>{{ person.name }}</h3>
          <p class="person-role">{{ person.role }} • {{ person.context }}</p>
          <p>{{ person.description }}</p>
          {% if person.url != "" %}
            <a href="{{ person.url }}">Profile</a>
          {% else %}
            <span class="placeholder-note">Profile link to be added</span>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section>
  <h2>Communities and Programs</h2>
  <div class="people-grid">
    {% for community in site.data.people.communities %}
      <article class="person-card">
        <div class="person-avatar person-avatar--subtle" aria-hidden="true">{{ community.name | slice: 0 }}</div>
        <div>
          <h3>{{ community.name }}</h3>
          <p class="person-role">{{ community.role }}</p>
          <p>{{ community.description }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
