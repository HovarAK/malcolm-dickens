# Fedora Toolbox and Podman Setup

This repository can be run in two practical ways on a Fedora-based system:

1. Inside a **Toolbox container** with Ruby/Bundler installed natively in that toolbox
2. As a **containerized service with Podman** from the host command line

For this repo, the most reliable day-to-day workflow is usually the **Toolbox native Ruby path**. Use
the **Podman path** when you want container parity with the repo's image-based workflow.

## Prerequisites

These commands assume:

- Fedora host with `toolbox` and `podman`
- this repository already cloned locally
- you are starting from the repository root when running repo-specific commands

## Option 1: Run the Site Inside a Toolbox Container

### 1. Create and enter a toolbox

If you do not already have one:

```bash
toolbox create --container alfolio-dev
```

Enter it:

```bash
toolbox enter --container alfolio-dev
```

### 2. Install system packages inside the toolbox

Run this inside the toolbox:

```bash
sudo dnf install -y \
  ruby ruby-devel rubygems \
  gcc gcc-c++ make patch redhat-rpm-config \
  zlib-devel libffi-devel openssl-devel readline-devel \
  libxml2-devel libxslt-devel sqlite-devel \
  git nodejs ImageMagick inotify-tools \
  python3 python3-pip which
```

### 3. Install Python support used by this repo

```bash
python3 -m pip install --user --upgrade nbconvert
```

### 4. Install Bundler

```bash
gem install bundler
```

Verify:

```bash
ruby --version
bundle --version
```

### 5. Install Ruby gems for this repo

From the repo root:

```bash
bundle config set path vendor/bundle
bundle install
```

If you hit gem platform issues:

```bash
bundle config set force_ruby_platform true
bundle install
```

### 6. Build the site

```bash
bundle exec jekyll build
```

### 7. Serve the site locally

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 8080 --livereload
```

Open:

```text
http://localhost:8080
```

If `--livereload` gives trouble, use:

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 8080
```

### One-command launch after initial setup

After dependencies are installed, the normal dev loop inside the toolbox is:

```bash
toolbox enter --container alfolio-dev
cd /path/to/malcolm-dickens
bundle exec jekyll serve --host 0.0.0.0 --port 8080 --livereload
```

## Option 2: Run the Site as a Podman Container From the Host

This mirrors the repo's image-based workflow more closely.

### 1. Pull the published al-folio image

Run this on the host, not inside the toolbox:

```bash
podman pull docker.io/amirpourmand/al-folio:v0.16.3
```

### 2. Start the service with Podman

From the repo root on the host:

```bash
podman run --rm -it \
  -p 8080:8080 \
  -p 35729:35729 \
  -e JEKYLL_ENV=development \
  -v "$PWD":/srv/jekyll:Z \
  docker.io/amirpourmand/al-folio:v0.16.3
```

Open:

```text
http://localhost:8080
```

### Optional: run with a custom image built from this repo's Dockerfile

From the repo root on the host:

```bash
podman build -t malcolm-dickens-jekyll .
```

Then run it:

```bash
podman run --rm -it \
  -p 8080:8080 \
  -p 35729:35729 \
  -e JEKYLL_ENV=development \
  -v "$PWD":/srv/jekyll:Z \
  malcolm-dickens-jekyll
```

## Which Approach to Use

### Recommended default

Use the **Toolbox native Ruby path** if:

- you want the simplest edit-run-debug loop
- you are already working inside a toolbox
- you want easier diagnosis of bundler or gem issues

### Use Podman from the host if:

- you want image-based parity with the repo's container setup
- you do not want Ruby installed in the toolbox
- you are specifically validating the container workflow

## Troubleshooting

## Bundler not found

Install it explicitly:

```bash
gem install bundler
```

If it still does not resolve on `PATH`:

```bash
ruby -r rubygems -e 'puts Gem.bindir'
```

Then add that location to your shell:

```bash
echo 'export PATH="$(ruby -r rubygems -e "puts Gem.bindir"):$PATH"' >> ~/.bashrc
source ~/.bashrc
```

## `bundle install` fails with native extension errors

Install or reinstall the build dependencies:

```bash
sudo dnf install -y \
  ruby-devel gcc gcc-c++ make patch redhat-rpm-config \
  zlib-devel libffi-devel openssl-devel readline-devel \
  libxml2-devel libxslt-devel sqlite-devel
```

Retry:

```bash
bundle install
```

## Nokogiri or XML-related gem errors

Use system libraries:

```bash
bundle config set build.nokogiri --use-system-libraries
bundle install
```

## ImageMagick errors

Verify installation:

```bash
convert --version
```

If missing:

```bash
sudo dnf install -y ImageMagick
```

## Jupyter or `nbconvert` errors

Install or refresh:

```bash
python3 -m pip install --user --upgrade nbconvert
```

If notebook support is still missing:

```bash
python3 -m pip install --user jupyter
```

## Permission issues in gem installation

Keep gems local to the repo:

```bash
bundle config set path vendor/bundle
bundle install
```

If `gem install bundler` itself fails on permissions:

```bash
echo 'export GEM_HOME="$HOME/.gem"' >> ~/.bashrc
echo 'export PATH="$GEM_HOME/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install bundler
```

## Port 8080 already in use

Check:

```bash
ss -ltnp | grep 8080
```

Run Jekyll on another port:

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

Or run Podman on another port:

```bash
podman run --rm -it \
  -p 4000:8080 \
  -p 35729:35729 \
  -e JEKYLL_ENV=development \
  -v "$PWD":/srv/jekyll:Z \
  docker.io/amirpourmand/al-folio:v0.16.3
```

Then open `http://localhost:4000`.

## Podman fails inside the toolbox

If you see errors involving:

- `/run/user/.../libpod`
- read-only filesystem
- cgroups
- rootless storage
- user namespace setup

do not try to force nested container runtime support inside the toolbox. Run Podman from the **host**
instead.

## Docker daemon issues

This repo provides Docker-oriented files, but you do not need Docker if you are using Podman.

If you try Docker on the host and get daemon errors:

```bash
docker info
```

If the daemon is not running on a Fedora host:

```bash
sudo systemctl enable --now docker
sudo systemctl status docker
```

If you are using Podman, there is no Docker daemon to start. That is expected.

## Quick Reference

### Toolbox path

```bash
toolbox create --container alfolio-dev
toolbox enter --container alfolio-dev
sudo dnf install -y ruby ruby-devel rubygems gcc gcc-c++ make patch redhat-rpm-config zlib-devel libffi-devel openssl-devel readline-devel libxml2-devel libxslt-devel sqlite-devel git nodejs ImageMagick inotify-tools python3 python3-pip which
python3 -m pip install --user --upgrade nbconvert
gem install bundler
bundle config set path vendor/bundle
bundle install
bundle exec jekyll serve --host 0.0.0.0 --port 8080 --livereload
```

### Podman host path

```bash
podman pull docker.io/amirpourmand/al-folio:v0.16.3
podman run --rm -it -p 8080:8080 -p 35729:35729 -e JEKYLL_ENV=development -v "$PWD":/srv/jekyll:Z docker.io/amirpourmand/al-folio:v0.16.3
```
