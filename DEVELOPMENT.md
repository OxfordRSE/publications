# OxRSE publications

This data repository contains a list of publications pertaining to various
projects. Each project is a text file with a list of DOIs, one per line, that is used by
`listPublications.js` to generate citations in Markdown format.

## Adding publications

To create a new project subheading in the output, create a file in the
[data](data) folder with a `.txt` suffix, having the same name as the project.
The data file format is one DOI per line. The full DOI URL (with
https://doi.org) is optional. Create a pull request, and GitHub CI should
update the README.md.

## Adding people

The [people.txt](people.txt) file contains a list of people (format: Surname,
F.) that is used to highlight members of the team in the output citation
format. If you have multiple possible spellings or middle initials, add all
possible combinations here, with the longest string length first, as lookups
proceed sequentially from the top of the array. For example, if you have a long
name with many initials, such as `ReallyLongName, M. A. N. Y.`, then that
should come before the short form `ReallyLongName, Y.`.

## Setup -- local development

The script requires Node.js >= 20 and npm installed.

First, git clone the repository:

```shell
git clone https://github.com/OxfordRSE/publications
npm ci
```

To run the list publications script:

```shell
node listPublications.js > README.md
```
