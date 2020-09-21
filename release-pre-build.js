const fs = require('fs')
const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0

fs.writeFile('src/version.ts', `export const meta = {
  version: '${version}'
}
`, (err, file) => {
  if (err) throw err
  console.info('Created version json for', version)
})
