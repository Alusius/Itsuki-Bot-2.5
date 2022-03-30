let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/animethighss', {}, 'apikey'), 'Nih', wm, 'NEXT', '.thighss', m)
}
handler.help = ['thighss']
handler.tags = ['nsfw']
handler.command = /^(thighss)$/i

module.exports = handler