let fetch = require('node-fetch')
let handler = async (m, { args }) => {
  let res = await fetch(global.API('lolhuman', '/api/freefire', {id: args[0]}, 'apikey'))
  let json = await res.json()
  if (json.result) conn.reply(m.chat, json.result, m)
    else throw json
}
handler.help = ['epep'].map(v => v + ' <id>')
handler.tags = ['internet']
handler.command = /^(freefire|epep)$/i

module.exports = handler
