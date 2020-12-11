# fotmob

[![license](https://img.shields.io/github/license/bgrnwd/fotmob.svg)](LICENSE)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

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
```

## Contributing

Feel free to [open an issue](https://github.com/bgrnwd/fotmob/issues/new) or submit a pull request.

## License

[MIT](./LICENSE) © Brian Greenwood
