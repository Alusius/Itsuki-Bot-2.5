let { MessageType } = require('@adiwajshing/baileys-md')

let handler = async (m, { conn }) => {
    let wm = global.wm
    let user = global.db.data.users[m.sender]
    let _timers = (604800000 - (new Date - user.lastweekly))
    let timers = clockString(_timers) 
    if (new Date - user.lastweekly > 604800000) {
    let str = `+15000 money 💹\n+4 Legendary crate 🧰\n+7 String 🕸️\n+5 Iron ⛓️\n+2 Gold 🪙`
        conn.send2But(m.chat, str, wm, 'Claim', '.claim', 'Monthly', '.monthly',m)
        conn.reply(str)
        user.money += 15000
        user.legendary += 4
        user.iron += 5
        user.emas += 2
        user.string += 7
        user.lastweekly= new Date * 1
    } else {
        conn.sendBut(m.chat, `silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, wm, 'Inventory', '.inv',m )
    }
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let botol = global.botwm
function button(teks, user) {
    const buttons = []
    
    let claim = new Date - user.lastclaim > 86400000
    let monthly = new Date - user.lastmonthly > 2592000000
    let weekly = new Date - user.lastweekly > 604800000
    console.log({claim, monthly, weekly})
    
    if (monthly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/monthly'}, type: 1})
    if (weekly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/weekly'}, type: 1})
    if (claim) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/claim'}, type: 1})
    if (buttons.length == 0) throw teks
    
    const buttonMessage = {
        contentText: teks,
        footerText: `${botol}`,
        buttons: buttons,
        headerType: 1
    }
    
    return buttonMessage
}