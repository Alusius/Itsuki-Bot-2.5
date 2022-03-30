let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/hololewd', {}, 'apikey'), 'Nih', wm, 'NEXT', '.hololewd', m)
}
handler.help = ['hololewd']
handler.tags = ['nsfw']
handler.command = /^(hololewd)$/i

module.exports = handler