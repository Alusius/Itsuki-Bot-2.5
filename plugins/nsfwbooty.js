let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/animebooty', {}, 'apikey'), 'Nih', wm, 'NEXT', '.booty', m)
}
handler.help = ['booty']
handler.tags = ['nsfw']
handler.command = /^(booty)$/i

module.exports = handler