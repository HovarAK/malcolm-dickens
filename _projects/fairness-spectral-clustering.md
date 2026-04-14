---
layout: page
title: Fairness-Constrained Spectral Clustering
description: Research on fairness-constrained spectral clustering, with an emphasis on numerical stability, edge cases, and computational reliability.
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

This project grew out of the SIAM-Simons Undergraduate Summer Research Program at Texas State
University. What interested me most was not whether a fairness-constrained clustering method looked
good in clean examples, but whether it stayed reliable once the matrices became singular, poorly
conditioned, or otherwise numerically awkward.

## What I Built

- MATLAB implementations for the clustering workflow and supporting experiments
- Benchmarking routines for stochastic block model datasets
- Stress tests for edge cases that exposed instability or degraded performance
- Mathematical checks on eigenvalue behavior and normalized Laplacian-style operators

## Technical Decisions

The most important decision was to treat numerical stability as a first-class problem rather than a
cleanup step after the algorithm already seemed to work. That meant:

- designing experiments around failure modes, not only successful runs
- inspecting how singular graph weight matrices changed downstream behavior
- using theoretical bounds as a validation tool for implementation choices

## Outcome

The project strengthened my ability to connect theory and implementation. It also reinforced a lesson
I care about: research quality depends heavily on careful computational work, explicit assumptions,
and a willingness to investigate failure instead of smoothing over it.
