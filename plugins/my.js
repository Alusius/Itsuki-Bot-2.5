const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu =`╭───❑ 「 BALANCE 」 ❑────
├─ 📇 *Name*: ${user.name}
├─ 🆔 *Nomor* : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
├─ 🎨 *Age* : ${user.registered ? '' + user.age : ''}
├─ 🎫 *Limit*:${user.limit}
├─ 💹 *Money*: ${user.money}
├─ 📍 *Role*: ${user.role}
├─ 💳 *Bank* : ${user.atm}
├─ 🎟 ️ *Limit Game* : ${user.glimit}
├─ 📊 *Level*: ${user.level}
╰─❑ ✨ *Exp*:${user.exp}
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/bank.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍instagram',
               url: instagram
             }

           },
               {
             quickReplyButton: {
               displayText: 'Back To Menu',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['dompet', 'dompet @user']
handler.tags = ['xp']
handler.command = /^(my|dompet)$/i

module.exports = handler