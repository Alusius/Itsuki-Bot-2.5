let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/tits', {}, 'apikey'), 'Nih', wm, 'NEXT', '.tits', m)
}
handler.help = ['tits']
handler.tags = ['nsfw']
handler.command = /^(tits)$/i

module.exports = handler