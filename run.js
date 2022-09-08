const { generateSchema, getProgramFromFiles } = require('typescript-json-schema')
const path = require('path')

const program = getProgramFromFiles([path.resolve('./index.ts')], {
    strictNullChecks: true,
})
const schema = generateSchema(program, "Params", { required: true })
console.log('schema---', schema)