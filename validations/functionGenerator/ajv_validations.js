const fs = require("fs")
const path = require("path")
const Ajv = require("ajv")
const standaloneCode = require("ajv/dist/standalone").default

const usersSchemas = require("./users_schemas.json")
const fightpointsSchemas = require("./fightpoints_schemas.json")
const qaSchemas = require("./qa_schemas.json")

// For CJS, it generates an exports array, will generate
// `exports["#/definitions/Foo"] = ...;exports["#/definitions/Bar"] = ... ;`
const ajv = new Ajv({ schemas: [usersSchemas, fightpointsSchemas, qaSchemas], code: { source: true } })
let moduleCode = standaloneCode(ajv)

// Now you can write the module code to file
fs.writeFileSync(path.join(__dirname, "../validate-cjs.js"), moduleCode)