# BLD Tools ![GitHub](https://img.shields.io/github/license/simonkellly/bld-tools)

![GitHub last commit](https://img.shields.io/github/last-commit/simonkellly/bld-tools)
![GitHub deployments](https://img.shields.io/github/deployments/simonkellly/bld-tools/github-pages)
![GitHub top language](https://img.shields.io/github/languages/top/simonkellly/bld-tools)

This tool is a trainer for the 3-style method used to solve the 3x3 Rubik's cube blindfolded

[View the site at https://simonkellly.github.io/bld-tools](https://simonkellly.github.io/bld-tools/)

## Features
- UFR Corner and UF Edge commutators
- Hiding and showing case solution
- Commutator expander
- Specific set selection
- Bookmarking cases to review seperatly
- Smart cube support (only GAN I V2 has been tested)
- Text-to-speech when using a smart cube
- Dark Mode

## Screenshots

<p float="left">
  <img src="https://github.com/simonkellly/bld-tools/raw/main/.github/readme/preview-normal.png" width="350" hspace="20"/>
  <img src="https://github.com/simonkellly/bld-tools/raw/main/.github/readme/preview-dark-mode.png" width="350" hspace="20"/>
</p>

## Contrbuting

If you would like to contribute to this project, feel free! PRs are welcome.
At the moment more alg sets and support for other smart cubes are things I would like to add

## Development

### Required Tools
To be able to work on this project, the following tools are required:

- Git
- Node.js v18
- Yarn

### Setup

```
# clone the repo
$ git clone https://github.com/simonkellly/bld-tools.git

# change directory
$ cd bld-tools

# install nodejs dependenies
$ yarn

# run the development build
$ yarn dev
```
Open http://localhost:5173 with your browser to see the result.

