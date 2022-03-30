let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/chiisaihentai', {}, 'apikey'), 'Nih', wm, 'NEXT', '.nsfwloli', m)
}
handler.help = ['nsfwloli']
handler.tags = ['nsfw']
handler.command = /^(nsfwloli)$/i

module.exports = handler