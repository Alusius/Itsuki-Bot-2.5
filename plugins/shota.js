let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/shota', {}, 'apikey'), 'Nih', wm, 'NEXT', '.shota', m)
}
handler.help = ['shota']
handler.tags = ['anime']
handler.command = /^(shota)$/i

module.exports = handler