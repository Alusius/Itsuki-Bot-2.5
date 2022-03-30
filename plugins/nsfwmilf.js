let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/milf', {}, 'apikey'), 'Nih', wm, 'NEXT', '.milf', m)
}
handler.help = ['milf']
handler.tags = ['nsfw']
handler.command = /^(milf)$/i

module.exports = handler