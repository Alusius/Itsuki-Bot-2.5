let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/biganimetiddies', {}, 'apikey'), 'Nih', wm, 'NEXT', '.tiddies', m)
}
handler.help = ['tiddies']
handler.tags = ['nsfw']
handler.command = /^(tiddies)$/i

module.exports = handler