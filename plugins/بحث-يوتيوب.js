import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw '*يـرجـى كـتـابـة الامـر وجـنـبـه مـا تـريـد الـبـحـث عـنـه بـالـيـوتــيوب [⚠️]*'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
-----*${v.title}*-----
❬🫐❭↜〘 الــراـبط ☜ ${v.url} 〙
❬🕒❭↜〘 الــوقـت ☜ ${v.timestamp} 〙
❬📥❭↜〘 اصــدر فــي ☜ ${v.ago} 〙
❬👁❭↜〘 الــمـشـاهـدات ☜ ${v.views} 〙`}}).filter(v => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['بحث-يوتيوب'] 


export default handler
