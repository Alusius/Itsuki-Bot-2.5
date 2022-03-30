let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/animefeets', {}, 'apikey'), 'Nih', wm, 'NEXT', '.feets', m)
}
handler.help = ['feets']
handler.tags = ['nsfw']
handler.command = /^(feets)$/i

module.exports = handler