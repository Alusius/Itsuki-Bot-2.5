let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/sideoppai', {}, 'apikey'), 'Nih', wm, 'NEXT', '.sideoppai', m)
}
handler.help = ['sideoppai']
handler.tags = ['nsfw']
handler.command = /^(sideoppai)$/i

module.exports = handler