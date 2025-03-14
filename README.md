# GSAPP Project Archive

This respository hosts the source code and site content for [George Verghese's](www.george-verghese.com) project archive.

This site is built with the static site generator [Eleventy](https://www.11ty.dev/docs/).
Site content is written in [Markdown](https://www.markdownguide.org/) and rendered with additional
support for [footnotes](https://github.com/markdown-it/markdown-it-footnote) and
[implicit figures](https://github.com/arve0/markdown-it-implicit-figures).


## Directory Structure

Site content files can be found in the following locations:

```
projects/
├── project-1.md
├── project-2.md
├── project-3.md
├── project-4.md
└── *.md
public/
└── img/
    ├── image-1.jpg
    └── image-2.png
about.md
index.md
```

All content files are [Markdown](https://www.markdownguide.org/) files with the `.md` extension.
[Eleventy](https://www.11ty.dev/docs/) template files are [Liquid](https://liquidjs.com/) templates
with the `.html` extension in the `/_includes/` directory. All other site assets are located in the
`/public/` directory and are copied to the root of the output folder on site build. The output folder
is `/_site.`, but this is a temporary build artifact that is not checked into source control.

## Example Project

A new project can be added by creating a new Markdown file in the `/projects/` directory with the `.md` extension.

Projects should have the following [YAML](https://yaml.org/) frontmatter:

```yaml
---
layout: project
title: "Example Project: My Subtitle"
author: George Verghese
year: 2023
image: /img/diomede-islands.jpg #optional
---
```

If the project title contains a colon or other special character, it should be enclosed in quotes in order to form
valid YAML.

The project thumbnail image should be located in the `/public/img/` directory. Since the public folder is copied to
the root of the output folder on site build, the image path should start with `/img/` rather than `/public/img/`.

## Markdown Features

All site content files can contain [standard Markdown syntax](https://www.markdownguide.org/basic-syntax/).
The default Markdown parser for Eleventy is [markdown-it](https://github.com/markdown-it/markdown-it).

### Footnotes

Site content can additionally include footnotes:

```md
Fusce et sapien rhoncus, tristique nisi ultrices, dictum tellus[^1].

[^1]: Example footnote content.
```

For more information, see the [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote) plugin.

### Implicit Figures & Captions

All block-level images in markdown are converted to figures & figure captions:

```md
![This is my image caption.](/img/image-1.jpg)

<!--- <figure><img src="/img/image-1.jpg"><figcaption>This is my image caption.</figcaption></figure> -->
```

For more information, see the [markdown-it-implicit-figures](https://github.com/arve0/markdown-it-implicit-figures) plugin.

## Deployment

This repository is automatically deployed to GitHub Pages whenever a new commit is pushed to the `main` branch, using
a GitHub workflow, located at `.github/workflows/deploy.yml`.

## Analytics

This site uses [Plausible Analytics](https://plausible.io/), a privacy-friendly alternative to Google Analytics. The analytics script is loaded from the base layout template and tracks:
- Page views
- File downloads
- Outbound links
- Hash navigation
- Custom page properties
- Tagged events
