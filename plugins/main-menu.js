import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lb/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let videoUrl = 'https://telegra.ph/file/28da3b1090901d77b4aa3.mp4'
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/file/dfacba6ae821315a875f0.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
 *✥─━─╃⌬〔🍁〕⌬╄─━─✥*
 *〘 أهلا بك ☜ ${taguser} 〙*
 *❬⭐❭↜〘 رتـبـتك ☜ ${user.role} 〙*
 *❬💰❭↜〘 الأكـسـبي ☜ ${user.exp} 〙*
 *❬💎❭↜〘 الألـماس ☜ ${user.diamond} 〙*
 *❬🔱❭↜〘 مــسـتواك ☜ ${user.level} 〙*
 *✥─━─╃⌬〔🍁〕⌬╄─━─✥*

 *『 🤖┇مــعـلـومـات الــبـوت┇🤖 』*

 *✥─━─╃⌬〔🍁〕⌬╄─━─✥*
 *〘 وقــت الــتـشـغيل ☜ ${uptime} 〙*
 *❬⚡❭↜〘 اســمـي ☜ زورو 〙*
 *❬🔮❭↜〘 هــيـروكـو ☜ الــمـنـصـه 〙*
 *❬♦❭↜〘 الوضـع ☜ عـام 〙*
 *❬✨❭↜〘 الــيوم ☜ ${week} 〙*
 *❬📆❭↜〘 الـتـاريخ ☜ ${date} 〙*
 *❐═━━━═╊⊰🍁⊱╉═━━━═❐*

 *🔱╎.م1』↜ قـائمــة الــمشـرفـين ❭*
 *🛠╎.م2』↜ قـائمــة الادوات ❭*
 *🔮╎.م3』↜ قـائمــة الــترفـيه ❭*
 *📥╎.م4』↜ قـائمــة الــتحـميل ❭*
 *🎮╎.م5』↜ قـائمــة الالـعـاب ❭*
 *🃏╎.م6』↜ قـائمــة الــتـحـويـل ❭*
 *🖼╎.م7』↜ قـائمــة الـصـور ❭*
 *👑╎.م8』↜ قـائمــة الــمـطور ❭*
 *🍁╎.م9』↜ قـائمــة الـــسورس ❭*
 *🔰╎.م10』↜ امــر اللــوجـو ❭*
 *🔊╎.م11』↜ قـائمــة الاصــوات ❭*
 *💵╎.م12』↜ قـائمــة الــبـنڪ ❭*
 *🛐╎.م13』↜ قـائمــة الــديـــن ❭*
 *🤖╎.م14』↜ قـائمــة الـ AI ❭*

 *❐═━━━═╊⊰🍁⊱╉═━━━═❐*
`.trim()
  let buttonMessage = {
  video: { url: videoUrl },
  caption: str.trim(),
  mentions: [m.sender],
  footer: `${wm}`,
  headerType: 4,
  contextInfo: {
  mentionedJid: [m.sender],
  externalAdReply: {
  showAdAttribution: true,
  body: null,
  thumbnail: img,
  sourceUrl: `https://telegra.ph/file/9704f93df7793554633ee.jpg`
  }}}
  conn.sendMessage(m.chat, buttonMessage, { quoted: m })
  await conn.sendMessage(m.chat, { react: { text: '🍁', key: m.key } })
  //await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
  } catch {
  conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃', m)
  }}
  handler.command = /^(حخ)$/i
  handler.exp = 50
  handler.fail = null
  export default handler
  function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}


