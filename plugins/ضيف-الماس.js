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
    let diamond = dmt
    
    if (diamond < 1) throw '*✳️الــحـد الأدنــى (1)*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *💎 
إضـــافــة الــمـاس*
┌──────────────
▢ *الــمـجـمـوع:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ 
يحصل \n\n *+${dmt}* الحد`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi', 'ضيف-الماس', 'اضف-الماس'] 
handler.rowner = true

export default handler

