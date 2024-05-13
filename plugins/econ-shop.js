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
┌بناءً على السياق المقدم ، تتضمن "Nota Pembayaran" أو ملاحظة الدفع التفاصيل التالية: 
 - Pembelian الاسمية: + $ {count} 💎 (مقدار الشراء: + $ {count} diamonds) 
 -USANG: -$ {xpperdiamond * count} xp (خصم xp لكل ماس تم شراؤه: -$ {xpperdiamond * count} xp) 

 يشير هذا إلى كمية الماس المشتراة و XP المقابل تم خصمه لكل ماس.`, m)
  } else conn.reply(m.chat, `❎ معذرةً ، ليس لديك ما يكفي من * XP* للشراء*${count}*الماس\n\n يمكنك الحصول على * XP * باستخدام الأوامر💎 في * الألعاب والقائمة ؛ اقتصاد*`, m)
}
handler.help = ['buy', 'buyall']
handler.tags = ['econ']
handler.command = ['البنك', 'buyall'] 

handler.disabled = false

export default handler
