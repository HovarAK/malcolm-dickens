---
layout: page
title: Neuroscience Decision-Making Data Pipeline
description: Modular MATLAB tooling for neuroscience decision-making experiments, built around reproducible logging, preprocessing, and reliable data handoff.
importance: 3
featured: false
category: data
role: Research Intern, Data Systems
stack:
  - MATLAB
  - Eyelink Toolbox
  - experimental logging
  - data preprocessing
tags:
  - data systems
  - neuroscience
  - reproducibility
  - research engineering
problem: Behavioral and eye-tracking experiments are only useful if timing, logging, and preprocessing are reliable enough to support later analysis.
built: A modular MATLAB workflow for experimental control, data acquisition, parameter logging, and preprocessing handoff.
decisions: I emphasized reproducibility, explicit parameter capture, and team handoff quality so the workflow could support collaborative analysis rather than a single-user script.
outcome: Improved the reliability of data collection and created a stronger foundation for downstream analysis in a research setting.
---

## Motivation

At Brown University, the work was less about flashy modeling and more about disciplined data systems
engineering. If timing drifts or metadata is logged inconsistently, the downstream analysis becomes
much harder to trust.

## What I Built

- modular MATLAB tooling for experiment execution
- explicit parameter logging to support reproducibility
- preprocessing steps designed for collaborative handoff
- infrastructure for behavioral and eye-tracking data collection

## Why It Matters

This project sharpened an important research lesson for me: good science often depends on small,
careful engineering choices. Logging, naming, timing, and reproducibility are not peripheral details;
they are part of the result.
