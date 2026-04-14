---
layout: page
title: LLaMA HPC Inference Pipeline
description: GPU-backed in-context learning pipeline for citation generation, built to make LLM experimentation faster and more systematic.
importance: 4
featured: true
category: ml systems
role: Research Intern, ML Systems
stack:
  - Python
  - LLaMA
  - CUDA
  - HPC/SLURM
tags:
  - machine learning
  - llms
  - hpc
  - systems
problem: Large-model experiments are slow and hard to iterate on without a disciplined execution and evaluation workflow.
built: A structured in-context learning pipeline for metadata-to-citation generation, executed on an HPC cluster with GPU acceleration.
decisions: I enabled CUDA-backed execution, batched evaluation runs, and prompt comparisons so experiments were repeatable and fast enough to support iteration.
outcome: Reduced runtime substantially and turned model experimentation into a more systematic engineering process.
---

## Motivation

This work at Tufts University sat at the boundary between machine learning experimentation and systems
engineering. The challenge was not just to run a large model, but to make iteration fast enough that
prompt comparisons and output evaluation could be done deliberately instead of sporadically.

## What I Built

- an in-context learning workflow that transformed paper metadata into citation-style outputs
- GPU-backed inference on an HPC cluster
- batched execution to reduce turnaround time
- evaluation runs designed for prompt iteration and structured comparison

## Outcome

The immediate result was a major speedup, but the deeper value was learning how to operationalize ML
experiments well: identify the runtime bottlenecks, build around them, and make comparisons clean
enough to support actual technical judgment.
