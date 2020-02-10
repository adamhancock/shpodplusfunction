const fs = require('fs')

module.exports = async function(context, req) {
  const yaml = await fs.readFileSync('./yaml/shpod.yaml', 'utf8')
  if (req.query.n == null) {
    req.query.n == 'default'
  }
  context.res = {
    body: yaml.replace('{ namespace }', req.query.n)
  }
}
