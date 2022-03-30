let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/wallnime', {}, 'apikey'), 'Nih', wm, 'NEXT', '.wallpaperanime', m)
}
handler.help = ['wallpaperanime']
handler.tags = ['anime']
handler.command = /^(wallpaperanime)$/i

module.exports = handler