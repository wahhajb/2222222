//import db from '../lib/database.js'

const xpperdiamond = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperdiamond * count) {
    global.db.data.users[m.sender].exp -= xpperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `
═══• •✠ ملاحظة الدفع ✠• •═══
║✪╎مـقـدار الـشـراء』↜${count} الماس ❭
║✪╎الxp المستخدم』↜${xpperdiamond * count} xp ❭
> 𝐁𝐘 𝐆𝐔𝐓𝐒 𝐁𝐎𝐓`, m)
  } else conn.reply(m.chat, `❎ معذرةً ، ليس لديك ما يكفي من * XP* للشراء*${count}*الماس\n\n يمكنك الحصول على * XP * باستخدام الأوامر💎 في * الألعاب والقائمة ؛ اقتصاد*`, m)
}
handler.help = ['buy', 'buyall']
handler.tags = ['econ']
handler.command = ['البنك', 'buyall'] 

handler.disabled = false

export default handler
