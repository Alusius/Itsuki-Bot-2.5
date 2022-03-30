let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastmining)
    let _timers = (240000 - __timers)
    let timers = clockString(_timers) 
    let botol = global.botwm
    let minsm = `${Math.floor(Math.random() * 30)}`.trim()
    let minim = `${Math.floor(Math.random() * 25)}`.trim() 
    let minam = `${Math.floor(Math.random() * 100)}`.trim() 
    let minkm = `${Math.floor(Math.random() * 150)}`.trim() 
    let minbm = `${Math.floor(Math.random() * 2)}`.trim() 

   if ( user.pickaxe > 0 ) {
    if (new Date - user.lastmining > 240000) {
      user.diamond += minsm * 1
      user.emas += minim * 1
      user.iron += minam * 1
      user.string += minkm * 1
      user.mythic += minbm * 1
      user.lastmining = new Date * 1
            
    m.reply(`Kamu Menambang Di ${pickRandom(['⛰️Lembah', '⛰️Goa mletre', '🏞️Sungai Selandia', '⛰️Goa texas', '...'])}\n*⚒️Hasil Tambang*\n💎Diamond: *${minsm}*\n🪙Emas: *${minim}*\n⛓️Besi: *${minam}*\n🕸️String: *${minkm}*\nDan Juga Kamu Mendapatkan Hadiah Rare Tambahan\n🗳️Mythic Crate:*${minbm}*`)
      } else conn.reply( m.chat, `Tunggu 🕓${timers} lagi, untuk menambang`, m)
    } else conn.reply( m.chat, `Kamu Tidak Mempunyai *⛏️Pickaxe* untuk menambang\nBuat Lah Pickaxe menggunakan string kayu dan batu!`,m )
  }

handler.help = ['mining']
handler.tags = ['rpg']
handler.command = /^mining/i

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