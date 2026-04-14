---
layout: page
title: Bookshelf
permalink: /books/
description: Public reading shelf for Malcolm Dickens, focused on mathematics, algorithms, machine learning, research practice, and software engineering.
nav: true
nav_order: 7
hide_title: true
---

<section class="page-intro">
  <p class="landing-eyebrow">Reading life</p>
  <h1>Bookshelf</h1>
  <p>
    This page is intended to become a public reading shelf rather than a performative list. For now,
    the structure is in place and the annotations are being filled in carefully.
  </p>
</section>

{% for category in site.data.bookshelf.categories %}

  <section class="bookshelf-section">
    <div class="section-heading">
      <div>
        <h2>{{ category.title }}</h2>
        <p>{{ category.description }}</p>
      </div>
    </div>
    <div class="bookshelf-grid">
      {% for book in category.books %}
        <article class="bookshelf-card">
          <div class="bookshelf-card__spine">{{ category.title }}</div>
          <div>
            <h3>{{ book.title }}</h3>
            <p>{{ book.note }}</p>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>
{% endfor %}
