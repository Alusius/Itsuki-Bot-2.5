let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/nsfw_avatar', {}, 'apikey'), 'Nih', wm, 'NEXT', '.avatar', m)
}
handler.help = ['avatar']
handler.tags = ['nsfw']
handler.command = /^(avatar)$/i

module.exports = handler