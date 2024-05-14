let handler = async (m, { command, text }) => m.reply(`*[❗] كــلـم الـــمــطـور يـــضــفـلك اســـتــمـارة*`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(استمارة|استماره)$/i

export default handler
