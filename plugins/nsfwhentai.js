let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/hentai', {}, 'apikey'), 'Nih', wm, 'NEXT', '.hentai', m)
}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai)$/i

module.exports = handler