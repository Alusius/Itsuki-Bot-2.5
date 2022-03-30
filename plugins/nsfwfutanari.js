let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/futanari', {}, 'apikey'), 'Nih', wm, 'NEXT', '.futanari', m)
}
handler.help = ['futanari']
handler.tags = ['nsfw']
handler.command = /^(futanari)$/i

module.exports = handler