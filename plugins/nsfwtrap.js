let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/trap', {}, 'apikey'), 'Nih', wm, 'NEXT', '.trap', m)
}
handler.help = ['trap']
handler.tags = ['nsfw']
handler.command = /^(trap)$/i

module.exports = handler