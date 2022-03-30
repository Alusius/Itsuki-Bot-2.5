let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/waifu', {}, 'apikey'), 'Nih', wm, 'NEXT', '.waifunsfw', m)
}
handler.help = ['waifunsfw']
handler.tags = ['nsfw']
handler.command = /^(waifunsfw)$/i

module.exports = handler