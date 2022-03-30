let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/neko', {}, 'apikey'), 'Nih', wm, 'NEXT', '.nsfwneko', m)
}
handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.command = /^(nsfwneko)$/i

module.exports = handler