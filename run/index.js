const fs = require('fs')

module.exports = async function(context, req) {
  const yaml = await fs.readFileSync('./yaml/shpod.yaml', 'utf8')
  context.res = {
    body: yaml.replace('{ namespace }', req.query.n)
  }
}
