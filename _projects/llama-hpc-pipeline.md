---
layout: page
title: LLaMA HPC Inference Pipeline
description: GPU-accelerated in-context learning pipeline for generating citation syntax from research-paper metadata.
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
engineering. The problem was not only to run a large language model, but to do so efficiently enough
to compare prompts and outputs without wasting iteration cycles.

## What I Built

- an in-context learning workflow that transformed paper metadata into citation-style outputs
- GPU-backed inference on an HPC cluster
- batched execution to reduce turnaround time
- evaluation runs designed for prompt iteration and structured comparison

## Outcome

The practical result was a major speedup, but the deeper value was learning how to operationalize ML
experiments well: understand the runtime bottlenecks, build around them, and make comparisons clean
enough to support technical judgment.
