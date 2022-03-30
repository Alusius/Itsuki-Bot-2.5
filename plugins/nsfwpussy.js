let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/pussy_jpg', {}, 'apikey'), 'Nih', wm, 'NEXT', '.pussy', m)
}
handler.help = ['pussy']
handler.tags = ['nsfw']
handler.command = /^(pussy)$/i

module.exports = handler