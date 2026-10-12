// Precompile the nunjucks templates the prototype uses (views + reachable GOV.UK/HMRC macros) into one browser bundle.
const P = process.argv[2], out = process.argv[3]
const nunjucks = require(P + '/node_modules/nunjucks')
const fs = require('fs'), path = require('path')
const searchPaths = [P + '/node_modules/govuk-frontend/dist', P + '/node_modules/hmrc-frontend', P + '/views']
function resolve(name) { for (const b of searchPaths) { const f = path.join(b, name); if (fs.existsSync(f)) return f } throw new Error('missing ' + name) }
function walk(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]) }
const queue = walk(P + '/views').filter(f => f.endsWith('.njk')).map(f => path.relative(P + '/views', f).split(path.sep).join('/'))
const seen = new Set(); let js = ''
while (queue.length) {
  const name = queue.shift(); if (seen.has(name)) continue; seen.add(name)
  // Rewrite relative template references ("./x", "../x") to absolute names so the browser runtime needs no path resolution
  const src = fs.readFileSync(resolve(name), 'utf8').replace(/(\{%-?\s*(?:from|import|include|extends)\s+)(["'])([^"']+)\2/g, (all, pre, q, ref) => {
    const abs = ref.startsWith('.') ? path.posix.join(path.posix.dirname(name), ref) : ref
    queue.push(abs)
    return pre + q + abs + q
  })
  js += nunjucks.precompileString(src, { name })
}
fs.writeFileSync(out, js)
console.log(seen.size, 'templates,', js.length, 'bytes')
