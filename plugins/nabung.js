let fs = require('fs')
const thumb = fs.readFileSync('./src/bank.jpg')
const xppermoney = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^nabung/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xppermoney) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= xppermoney * count) {
    global.db.data.users[m.sender].money -= xppermoney * count
    global.db.data.users[m.sender].atm += count
    conn.sendButtonLoc(m.chat, thumb, `-Rp.${xppermoney * count} 💹\n+ ${count} 💳\n\n[ ! ] Succes menabung !`, wm, 'MY', '#my', m)
  } else conn.reply(m.chat, `[❗] Uang anda tidak mencukupi untuk menabung ${count} !`, m)
}
handler.help = ['nahung <jumlah>']
handler.tags = ['xp']
handler.command = /^nabung ([0-9]+)|nabung$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler