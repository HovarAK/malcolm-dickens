---
layout: page
title: VISA Case Management Portal
description: Full-stack case-management portal built with Next.js, Express, and MySQL, focused on authentication, persistence, and clean application boundaries.
importance: 2
featured: true
category: engineering
role: Full-stack developer
stack:
  - Next.js
  - TypeScript
  - Express
  - MySQL
  - GitHub Pages
tags:
  - software engineering
  - full-stack
  - authentication
  - database systems
problem: The portal needed a reliable user-facing workflow for registration, authentication, and persistent case-management data.
built: Responsive authentication UI in Next.js, Express REST endpoints, and a MySQL-backed persistence layer provisioned through Aiven.
decisions: I prioritized secure credential handling, clear separation between front end and API concerns, and a deployment model compatible with static export on GitHub Pages.
outcome: Delivered a working end-to-end application flow with hashed credentials, database-backed users, and a feature-branch development workflow.
---

## Motivation

This project is one of the clearest software-engineering examples in my portfolio because it required
real coordination between interface design, back-end behavior, deployment constraints, and data
persistence.

## What I Built

- login and registration flows in Next.js and TypeScript
- responsive form validation and front-end state handling
- Express endpoints for user creation and authentication
- MySQL persistence provisioned through Aiven
- password hashing before storage

## Interesting Technical Decisions

The front end was deployed through GitHub Pages using a static export, so I had to think carefully
about how the UI and the API fit together operationally. I also treated credential storage with the
appropriate seriousness from the beginning rather than as an afterthought.

## Outcome

The result was a clearer understanding of full-stack boundaries and tradeoffs: what belongs in the
client, what belongs in the API, how to keep state predictable, and how to keep a project simple
without letting it become structurally messy.
