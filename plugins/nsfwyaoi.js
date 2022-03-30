let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/yaoi', {}, 'apikey'), 'Nih', wm, 'NEXT', '.yaoi', m)
}
handler.help = ['yaoi']
handler.tags = ['nsfw']
handler.command = /^(yaoi)$/i

module.exports = handler