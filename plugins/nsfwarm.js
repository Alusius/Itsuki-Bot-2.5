let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/animearmpits', {}, 'apikey'), 'Nih', wm, 'NEXT', '.arm', m)
}
handler.help = ['arm']
handler.tags = ['nsfw']
handler.command = /^(arm)$/i

module.exports = handler