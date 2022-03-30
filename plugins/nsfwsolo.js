let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/solo', {}, 'apikey'), 'Nih', wm, 'NEXT', '.solo', m)
}
handler.help = ['solo']
handler.tags = ['nsfw']
handler.command = /^(solo)$/i

module.exports = handler