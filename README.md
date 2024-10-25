# fotmob

[![license](https://img.shields.io/github/license/bgrnwd/fotmob.svg)](LICENSE) [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme) ![npm](https://img.shields.io/npm/v/fotmob?color=green) [![npm download month](https://img.shields.io/npm/dm/fotmob.svg)](https://www.npmjs.com/package/fotmob) ![Node.js CI](https://github.com/bgrnwd/fotmob/workflows/Node.js%20CI/badge.svg)

A JavaScript wrapper around the unofficial [FotMob](https://www.fotmob.com/) API

## Table of Contents

- [fotmob](#fotmob)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Install

```sh
npm install fotmob
```

## Usage
This package is meant to be used in the backend (Node.js) due to CORS limitations.
All methods return a promise that resolves to the JSON response from FotMob, with type definitions for the response included.

```ts
import Fotmob from "fotmob";
const fotmob = new Fotmob();

let matches = await fotmob.getMatchesByDate("20201020");
let league = await fotmob.getLeague("42", "overview", "league", "America/New_York")
let team = await fotmob.getTeam("6017", "overview", "team", "America/New_York")
let player = await fotmob.getPlayer("1071179")
let details = await fotmob.getMatchDetails("3399269")
let worldNews = await fotmob.getWorldNews()
let transfers = await fotmob.getTransfers();
let AllLeagues = await fotmob.getAllLeagues();
let teamSeasonStats = await fotmob.getTeamSeasonStats()
let myCustomRequest = await fotmob.request("matches", { date: "20201020" })
let autocompletion = await fotmob.search("arsenal")
```

## Contributing

Feel free to [open an issue](https://github.com/bgrnwd/fotmob/issues/new) or submit a pull request.

## License

[MIT](./LICENSE) © Brian Greenwood
