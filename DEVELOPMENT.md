# OxRSE publications

This data repository contains a list of publications pertaining to various
projects. Each project has a text file with a list of DOIs that is used by
`listPublications.js` to generate citations in markdown format.

## Setup

The script requires Node.js >= 20 and npm installed.

First, git clone the repository:

```shell
git clone https://github.com/OxfordRSE/publications
npm ci
```

To run the list publications script:

```shell
node listPublications.js
```

The [people.json](people.json) contains a list of people (format: Surname, F.)
that is used to highlight members of the team in the output citation format. If
you have multiple possible spellings or initials (for example, a middle
initial), add all possible combinations here, with the longest string length
first, as lookups proceed sequentially from the top of the array. For example,
if you have a long name with many initials, such as `ReallyLongName, M. A. N.
Y.`, then that should come before the short form `ReallyLongName, Y.` in
`people.json`.

## Adding a project

Create a file in the [data](data) folder with a `.txt` suffix. The name of the
project is taken to be the part before the `.txt`. The format of the file is
one DOI per line. The full DOI URL is optional.
