# @moacyr-catani/ct2-ts-extensions

A JavaScript and TypeScript utility package that adds reusable functionality to standard built-in objects and provides a library API for `Date`, `Number`, `String`, and `Assert` operations.

## Features

- Library object API via `XT`
- Prototype extensions for `Number`, `String`, `Date`, `Array`, and `Object`
- Integer validation, formatting, parsing, and conversions
- Date helpers, string utilities, and assertion helpers
- ESM and CommonJS support
- Automatic documentation generation with `typedoc`

## Installation

```bash
npm install @moacyr-catani/ct2-ts-extensions
```

## Usage

### Library API

```ts
import { XT } from "@moacyr-catani/ct2-ts-extensions";

const value = XT.String.toDecimal("1.234,56", ",", ".");
const date = XT.Assert.date("2025-12-31");
const integer = XT.Number.toInt(3.9);
```

### Extensions API

```ts
import "@moacyr-catani/ct2-ts-extensions/extensions";

const value = "1234".$_toInt();
const formatted = (1234.56).$_toDecimalString(2, ".", ",");
const trimmed = "  hello  ".$_trim(" ");
```

### CommonJS

```js
const { XT } = require("@moacyr-catani/ct2-ts-extensions");
require("@moacyr-catani/ct2-ts-extensions/extensions");
```

## API Overview

### Library object: `XT`

- `XT.Assert`
- `XT.Date`
- `XT.Number`
- `XT.String`

### Main enums

- `IntegerRepresentations`
- `WeekDays`

### Extension methods

- `Number.$_...` static helpers
- `Number.prototype.$_...`
- `String.prototype.$_...`
- `Date.prototype.$_...`
- `Array.prototype.$_removeDuplicates`
- `Object.$_...`

## Documentation

Generated API docs are available in the `docs/` folder. Use:

```bash
npm run docs
```

## Development

- Build: `npm run build`
- Test: `npm test`
- Build docs: `npm run docs`

## License

MIT

