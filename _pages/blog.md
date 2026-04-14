---
layout: default
permalink: /blog/
title: Blog
description: Notes and technical writing by Malcolm Dickens on mathematics, machine learning, algorithms, and engineering practice.
nav: true
nav_order: 2
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post blog-landing">
  <section class="blog-intro">
    <p class="landing-eyebrow">Technical notebook</p>
    <h1>{{ site.blog_name }}</h1>
    <p class="landing-lead">
      I use this space for technical essays, research notes, and working thoughts on computation,
      learning, and systems. It is less a stream of updates than a record of how I think through
      problems and what I am learning from them.
    </p>
  </section>

  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>

{% assign featured_posts = site.posts | where: "featured", true %}
{% if featured_posts.size > 0 %}

<div class="container featured-posts">
<div class="row row-cols-1 row-cols-md-2">
{% for post in featured_posts %}
<div class="col mb-4">
<a href="{{ post.url | relative_url }}">
<div class="card hoverable h-100">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>
<h3 class="card-title">{{ post.title }}</h3>
<p class="card-text">{{ post.description }}</p>
{% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
<p class="post-meta">{{ read_time }} min read &nbsp; &middot; &nbsp; {{ post.date | date: '%B %d, %Y' }}</p>
</div>
</div>
</a>
</div>
{% endfor %}
</div>
</div>
{% endif %}

  <ul class="post-list">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% assign year = post.date | date: "%Y" %}
      <li>
        <h3>
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <p>{{ post.description }}</p>
        <p class="post-meta">
          {{ read_time }} min read &nbsp; &middot; &nbsp; {{ post.date | date: '%B %d, %Y' }}
        </p>
        <p class="post-tags">
          <a href="{{ year | prepend: '/blog/' | relative_url }}">
            <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
          </a>
          {% if post.tags %}
            &nbsp; &middot; &nbsp;
            {% for tag in post.tags %}
              <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
                <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>{% unless forloop.last %}&nbsp;{% endunless %}
            {% endfor %}
          {% endif %}
        </p>
      </li>
    {% endfor %}

  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>
