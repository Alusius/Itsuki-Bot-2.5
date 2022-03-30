let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/ecchi', {}, 'apikey'), 'Nih', wm, 'NEXT', '.ecchi', m)
}
handler.help = ['ecchi']
handler.tags = ['nsfw']
handler.command = /^(ecchi)$/i

module.exports = handler