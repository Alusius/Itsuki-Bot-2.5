function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Papah-Chan;;;FN:Elyas Ganteng\nORG:Elyas Ganteng;\nTEL;type=CELL;type=VOICE;waid=17608914335:+1 760-891-4335\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '17608914335', 'Papah', m)
m.reply(m.chat,'*Tuh nomor owner ku*\n*Chat jika PENTING*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
