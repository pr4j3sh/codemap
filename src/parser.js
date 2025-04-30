const { readdirSync, lstatSync, readFileSync } = require("node:fs");
const { join } = require("node:path");

class Parser {
  constructor(dirPath) {
    if (!dirPath) throw new Error("directory path cannot be empty");
    this.dirPath = dirPath;
    this.ignore = ["node_modules", "package-lock.json", "dist", "venv"];
    this.tree = [];
  }

  scan() {
    this.tree = this.#scanTree(this.dirPath);
    return this;
  }

  #scanTree(dirPath) {
    return readdirSync(dirPath)
      .filter((name) => !this.ignore.includes(name) && !name.startsWith("."))
      .map((name) => {
        const filePath = join(dirPath, name);
        return {
          [name]: lstatSync(filePath).isFile()
            ? readFileSync(filePath, "utf-8")
            : this.#scanTree(filePath),
        };
      });
  }

  getTree() {
    return JSON.stringify(this.tree);
  }
}

module.exports = Parser;
