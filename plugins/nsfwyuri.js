let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/yuri', {}, 'apikey'), 'Nih', wm, 'NEXT', '.yuri', m)
}
handler.help = ['yuri']
handler.tags = ['nsfw']
handler.command = /^(yuri)$/i

module.exports = handler