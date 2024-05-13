let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ 
المستخدم مفقود من قاعدة البيانات الخاصة بي`
    conn.reply(m.chat, `
*❐═━━━═╊⊰الـــــمـــاس⊱╉═━━━═❐*

*❬الأسـ💳ـم❭↜ 〚 ${name} 〛*
*❬الالمــ💎ــاس❭↜ 〚 ${global.db.data.users[who].diamond} 〛* 
*❬اكـــ🌟ـــسبي❭↜ 〚 ${global.db.data.users[who].exp} 〛*

*❐═━━━═╊⊰الـــــمـــاس⊱╉═━━━═❐*

*❐↜ يمكنك شراء الماس بأمر (.شراء)*
*❐↜ وشراء جميع الالماس بأمر (.شراءالكل)*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'الماس'] 

export default handler
      
