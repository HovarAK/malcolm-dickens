---
layout: page
title: Fairness-Constrained Spectral Clustering
description: Research project on stable spectral clustering under group proportion constraints and ill-conditioned graph structure.
importance: 1
featured: true
category: research
role: Research Intern, Algorithm Optimization
stack:
  - MATLAB
  - spectral graph methods
  - numerical linear algebra
  - LaTeX
tags:
  - computational mathematics
  - algorithms
  - numerical methods
  - research
problem: Fairness-constrained clustering methods can become fragile when graph matrices are singular, ill-conditioned, or structurally degenerate.
built: MATLAB implementations and benchmarks for a Laplacian-free spectral clustering approach, plus supporting analysis for stability and correctness.
decisions: I focused on numerical robustness first, then benchmark design, then theoretical checks on the spectral properties needed for the method to behave reliably.
outcome: Produced a more stable experimental workflow, identified failure modes, and supported a manuscript in preparation.
---

## Motivation

This project came out of the SIAM-Simons Undergraduate Summer Research Program at Texas State
University. The core question was not just whether a fairness-constrained clustering method worked in
ideal cases, but whether it remained reliable when the underlying matrices became awkward: singular,
poorly conditioned, or sensitive to graph structure.

## What I Built

- MATLAB implementations for the clustering workflow and supporting experiments
- Benchmarking routines for stochastic block model datasets
- Stress tests for edge cases that exposed instability or degraded performance
- Mathematical checks on eigenvalue behavior and normalized Laplacian-style operators

## Technical Decisions

The most important decision was to treat numerical stability as a first-class engineering problem
rather than a cleanup step after the algorithm was already "working." That meant:

- designing experiments around failure modes, not only successful runs
- inspecting how singular graph weight matrices changed downstream behavior
- using theoretical bounds as a validation tool for implementation choices

## Outcome

The project strengthened my ability to connect theory and implementation. It also clarified how much
research quality depends on careful computational work: reproducible experiments, explicit assumptions,
and a willingness to investigate why an algorithm fails instead of smoothing over the result.
