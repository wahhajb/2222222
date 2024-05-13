//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️مـــنــشـن الـــشــخـص'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '*✳️أدخــل الـــمــبـلـغ الــذي تــريـد إضـــافــتـه*'
    if (isNaN(txt)) throw '🔢مــجـرد ارقـام'
    let dmt = parseInt(txt)
    let exp = xp

    if (exp < 1) throw '*✳️الــحـد الأدنــى (1)*'
    let users = global.db.data.users
   users[who].diamond += xp

    await m.reply(`* 
إضـــافــة اكــسـبـي*
┌──────────────
▢ *الــمـجـمـوع:* ${xp}
└──────────────`)
   conn.fakeReply(m.chat, `▢ 
يحصل \n\n *+${xp}* الحد`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi', 'ضيف-اكسبي', 'اضف-اكسبي'] 
handler.rowner = true

export default handler


