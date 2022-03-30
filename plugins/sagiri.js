let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/sagiri', {}, 'apikey'), 'Nih', wm, 'NEXT', '.sagiri', m)
}
handler.help = ['sagiri']
handler.tags = ['anime']
handler.command = /^(sagiri)$/i

module.exports = handler