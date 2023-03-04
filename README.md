# generatePassword [![Tests](https://github.com/logrithumn/generate-password/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/logrithumn/generate-password/actions/workflows/tests.yml) [![npm version](https://badge.fury.io/js/@koc%2Fgenerate-password.svg)](https://badge.fury.io/js/@koc%2Fgenerate-password)


[![NPM](https://nodei.co/npm/@koc/generate-password.png?downloads=true&downloadRank=true)](http://npmjs.org/package/@koc/generate-password)

- [generatePassword  ](#generatepassword--)
  - [Install](#install)
  - [Usage](#usage)
      - [`generatePassword({options})`](#generatepasswordoptions)
  - [Options](#options)


## Install

```bash
λ npm install @koc/generate-password --save
```

## Usage

#### `generatePassword({options})`

Generate one password with the given options. Returns a string.

```javascript
const {generatePassword} = require('@koc/generate-password');
//import {generatePassword} from '@koc/generate-password';

const password = generatePassword({
  length: 10,
});

// t%0YA!5k#S
```

## Options


| Name                     | Description                                                           | Default Value |
|--------------------------|-----------------------------------------------------------------------|---------------|
| length                   | Integer, length of password.                                          | 8             |
| allowedSymbols           | String, put symbols in password.                                      | !@#$%&        |
