let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/kanna', {}, 'apikey'), 'Nih', wm, 'NEXT', '.kanna', m)
}
handler.help = ['kanna']
handler.tags = ['anime']
handler.command = /^(kanna)$/i

module.exports = handler