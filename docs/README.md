[**extensions-utility**](README.md)

***

# extensions-utility Documentation

A modern utility package that exposes:

- a library API through `XT`
- prototype extensions for built-in objects
- utility enums for integer formats and week days

## Contents

- [Package overview](#package-overview)
- [Installation](#installation)
- [Library API](#library-api)
- [Extensions API](#extensions-api)
- [Enums](#enums)
- [Generated API docs](#generated-api-docs)
- [Development](#development)

## Package overview

This package provides a shared library object named `XT` plus optional prototype extensions.

- `XT.Assert` — assertion and coercion helpers
- `XT.Date` — date manipulation and formatting helpers
- `XT.Number` — numeric validation, conversion, and formatting helpers
- `XT.String` — string parsing and transformation helpers

## Installation

```bash
npm install @moacyr-catani/ct2-ts-extensions
```

## Library API

Import the library object from the package:

```ts
import { XT } from "@moacyr-catani/ct2-ts-extensions";
```

The library is ideal for code that prefers explicit function calls instead of mutating built-in prototypes.

### Useful examples

```ts
const date = XT.Assert.date("2025-12-31");
const fixed = XT.Number.toDecimal(3.14159, 2);
const text = XT.String.toBasicLatinLetters("Áéíóú");
```

## Extensions API

Load the extensions module to add prototype methods:

```ts
import "@moacyr-catani/ct2-ts-extensions/extensions";
```

Once loaded, methods like `$_toInt`, `$_toDate`, and `$_removeDuplicates` are available on native objects.

## Enums

The package exports utility enums to describe integer and week-day formats:

- `IntegerRepresentations`
- `WeekDays`

## Generated API docs

Browse the generated interface docs:

- [IAssertLib](interfaces/IAssertLib.md)
- [IDateLib](interfaces/IDateLib.md)
- [INumberLib](interfaces/INumberLib.md)
- [IStringLib](interfaces/IStringLib.md)
- [IXT](interfaces/IXT.md)
- [XT](variables/XT.md)
- [Extensions API](extensions.md)
- [Enums](enums.md)

## Development

- Build package: `npm run build`
- Run tests: `npm test`
- Generate docs: `npm run docs`

