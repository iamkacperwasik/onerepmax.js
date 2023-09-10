# onerepmax.js 🏋️‍♂️

[![NPM Version](https://img.shields.io/npm/v/onerepmax.js.svg)](https://www.npmjs.com/package/onerepmax.js) [![License](https://img.shields.io/npm/l/onerepmax.js.svg)](https://github.com/iamkacperwasik/onerepmax.js/blob/main/LICENSE)

Simplify 1-rep max calculations in weightlifting with onerepmax.js, your essential tool for accurate and efficient strength assessment using various formulas

## Installation ⚙️

You can install this library via npm or yarn:

```bash
npm install onerepmax.js
# or
yarn add onerepmax.js
```

> Note: To run this library successfully, you'll need a transpiler to convert its modern JavaScript code.

## Usage 🚀

```js
import {calculate1RM} from "onerepmax.js"

const my_max = calculate1RM.brzycki(100, 8)

console.log(my_max)
```

# API Reference 📖

The `calculate1RM` object provides various functions for calculating one-rep max (1RM) using different methods:

1. **Epley Formula**

   - `calculate1RM.epley(weight_lifted, repetitions)`: Calculate 1RM using the Epley formula.

2. **Brzycki Formula**

   - `calculate1RM.brzycki(weight_lifted, repetitions)`: Calculate 1RM using the Brzycki formula.

3. **Adams Formula**

   - `calculate1RM.adams(weight_lifted, repetitions)`: Calculate 1RM using the Adams formula.

4. **Baechle Formula**

   - `calculate1RM.baechle(weight_lifted, repetitions)`: Calculate 1RM using the Baechle formula.

5. **Berger Formula**

   - `calculate1RM.berger(weight_lifted, repetitions)`: Calculate 1RM using the Berger formula.

6. **Brown Formula**

   - `calculate1RM.brown(weight_lifted, repetitions)`: Calculate 1RM using the Brown formula.

7. **Kemmler Formula**

   - `calculate1RM.kemmler(weight_lifted, repetitions)`: Calculate 1RM using the Kemmler formula.

8. **Lander Formula**

   - `calculate1RM.lander(weight_lifted, repetitions)`: Calculate 1RM using the Lander formula.

9. **Lombardi Formula**

   - `calculate1RM.lombardi(weight_lifted, repetitions)`: Calculate 1RM using the Lombardi formula.

10. **Mayhew-Szekely Formula**

    - `calculate1RM.mayhew_szekely(weight_lifted, repetitions)`: Calculate 1RM using the Mayhew-Szekely formula.

11. **Naclerio Formula**

    - `calculate1RM.naclerio(weight_lifted, repetitions)`: Calculate 1RM using the Naclerio formula.

12. **O'Conner Formula**

    - `calculate1RM.oconner(weight_lifted, repetitions)`: Calculate 1RM using the O'Conner formula.

13. **Wathan Formula**
    - `calculate1RM.wathan(weight_lifted, repetitions)`: Calculate 1RM using the Wathan formula.

## Contributing 🤝

We welcome contributions to improve this library. Here's how:

- **Report Issues**: If you find a bug or have suggestions, open an issue on GitHub.
- **Pull Requests**: Fork, make changes, and create a PR to the main branch.
- **Code Guidelines**: Follow coding conventions and style guidelines.
- **Testing**: Include tests for new features or changes.
- **Documentation**: Update docs if needed.

Your contributions help make this library better for everyone. Thank you! 🙌

## License 📝

This project is available under the [MIT License](./LICENSE).
