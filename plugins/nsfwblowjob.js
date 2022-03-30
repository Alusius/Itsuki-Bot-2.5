let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/blowjob', {}, 'apikey'), 'Nih', wm, 'NEXT', '.blowjob', m)
}
handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = /^(blowjob)$/i

module.exports = handler