# codemap

This is a javascript npm package that parses file tree and their contents in `JSON` format.

## Usage

```js
const Parser = require("@pr4j3sh/codemap");

// provide directory path
const tree = new Parser(".").scan().getTree();

console.log(tree);
```

## Reference

- [NodeJS Documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [NPM Documentation](https://docs.npmjs.com/)
- [@pr4j3sh/frames](https://pr4j3sh.github.io/frames/)
