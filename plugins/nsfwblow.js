let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/bj', {}, 'apikey'), 'Nih', wm, 'NEXT', '.blow', m)
}
handler.help = ['blow']
handler.tags = ['nsfw']
handler.command = /^(blow)$/i

module.exports = handler