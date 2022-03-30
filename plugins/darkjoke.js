let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/meme/darkjoke', {}, 'apikey'), 'Dark Jokes', wm, 'NEXT', '.darkjokes', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler
