let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/neko', {}, 'apikey'), 'Nih', wm, 'NEXT', '.neko', m)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i

module.exports = handler