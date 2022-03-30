let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/waifu', {}, 'apikey'), 'Istri Watashi', wm, 'NEXT', '.waifu', m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i

module.exports = handler