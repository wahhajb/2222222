import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
*✪╎الأسـ💳ـم』↜${name} ❭*
*✪╎مسـ🏅ـتواك』↜${user.level} ❭*
*✪╎الأكـ🌟ـسبي』↜${user.exp} ❭*
*✪╎الرتـ🔱ـبه』↜${user.role} ❭*

*فاضلك ${max - user.exp} XP عشان ترفع مستواك*
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `🎊 عاش يحب ${conn.getName(m.sender)}    المستوي:`
        let str = `
*『مــبـروڪ ؏ـلـمستوۍ الـجديد يـا ${name}』*

*✪╎مــسـتواك الـقديم↜${before} ❭*
*✪╎مــسـتواك الـحالي↜${user.level} ❭*
*✪╎رتــبتك』↜${user.role} ❭*


*_كلما تفاعلت مع البوت ارتفع مستواك_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['لفل', 'lvl', 'levelup', 'مستواي', 'مستوا'] 

export default handler
