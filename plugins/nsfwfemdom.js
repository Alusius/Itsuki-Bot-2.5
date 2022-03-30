let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/hentaifemdom', {}, 'apikey'), 'Nih', wm, 'NEXT', '.femdom', m)
}
handler.help = ['femdom']
handler.tags = ['nsfw']
handler.command = /^(femdom)$/i

module.exports = handler