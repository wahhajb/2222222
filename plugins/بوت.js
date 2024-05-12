let handler = m => m 
handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat]
    let tag = `@${m.sender.replace(/@.+/, '')}`
    let pp = imagen5
    let str = `*✪╎اهــلا ${tag} اكــتـب .اوامر لاســتـخـدام الــبـوت ❭*`.trim()
    let buttonMessage = {
     image: pp,
     caption: str.trim(),
     }
    if (/^بوت$/i.test(m.text)){
      conn.sendMessage(m.chat, buttonMessage, { quoted: m })
      conn.sendMessage(m.chat, {
   react: {
 text: "🍁",
 key: m.key,
   }
  })
    }
   }
  
 export default handler
