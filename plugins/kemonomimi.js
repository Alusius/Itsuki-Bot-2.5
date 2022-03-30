let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/kemonomimi', {}, 'apikey'), 'Nih', wm, 'NEXT', '.kemonomimi', m)
}
handler.help = ['kemonomimi']
handler.tags = ['anime']
handler.command = /^(kemonomimi)$/i

module.exports = handler