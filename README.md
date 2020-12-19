# fotmob

[![license](https://img.shields.io/github/license/bgrnwd/fotmob.svg)](LICENSE)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
![Node.js CI](https://github.com/bgrnwd/fotmob/workflows/Node.js%20CI/badge.svg)
![Node.js Package](https://github.com/bgrnwd/fotmob/workflows/Node.js%20Package/badge.svg)

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

```ts
import Fotmob from 'fotmob';
const fotmob = new Fotmob();

fotmob.getMatchesByDate('20201020');
fotmob.getLeague("42","overview","league","America/New_York")
fotmob.getTeam("6017", "overview","team","America/New_York")
fotmob.getPlayer("1071179")
fotmob.getMatchDetails("3399269")
```

## Contributing

Feel free to [open an issue](https://github.com/bgrnwd/fotmob/issues/new) or submit a pull request.

## License

[MIT](./LICENSE) © Brian Greenwood
