let { MessageType } = require('@adiwajshing/baileys-md')

let handler = async (m, { conn }) => {
    let wm = global.wm
    let user = global.db.data.users[m.sender]
    let _timers = (2592000000 - (new Date - user.lastmonthly))
    let timers = clockString(_timers) 
    if (new Date - user.lastmonthly > 2592000000) {
    let str = `+150000 money 💹\n+10 Legendary crate 🧰\n+5 Pet crate 📫\n+13 Iron ⛓\n+5 gold 🪙\n+15 string 🕸\n+20 kayu 🪵`
        conn.send2But(m.chat, str, wm, 'Claim', '.claim', 'Weekly', '.weekly',m)
        conn.reply(str)
        user.money += 150000
        user.legendary += 10
        user.string += 15
        user.kayu += 20
        user.iron += 13
        user.gold += 5
        user.pet += 5
        user.lastmonthly = new Date * 1
    } else {
        conn.sendBut(m.chat, `silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, wm, 'Inventory', '.inv',m )
    }
}
handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(monthly)$/i

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