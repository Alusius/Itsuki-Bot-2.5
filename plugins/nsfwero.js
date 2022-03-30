let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/ero', {}, 'apikey'), 'Nih', wm, 'NEXT', '.ero', m)
}
handler.help = ['ero']
handler.tags = ['nsfw']
handler.command = /^(ero)$/i

module.exports = handler