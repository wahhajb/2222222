let handler = async (m, { conn, args, usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {

body: {
text: '*『 🤖┇مــعـلـومـات الــبـوت┇🤖 』*\n\n*❐═━━━═╊⊰🍁⊱╉═━━━═❐*\n\n*❬⚡❭↜〘 اســمـي ☜ غــاتـس 〙*\n*❬♦❭↜〘 الوضـع ☜ عـام 〙*\n*❬✨❭↜〘 الــخـاص ☜ مــفـتوح 〙*\n*❬⭐❭↜〘 قـبــل الامــر ☜ . 〙*\n\n*❐═━━━═╊⊰🍁⊱╉═━━━═❐*'
},
nativeFlowMessage: {
buttons: [
{
name: 'single_select',
buttonParamsJson: JSON.stringify({
title: '『اوامــر الــبـوت┇🤖』',
sections: [
{
title: '𝐆 𝐔 𝐓 𝐒  𝐁 𝐎 𝐓',
highlight_label: '𝐆 𝐔 𝐓 𝐒',
rows: [
{
header: 'قـائمــة الــمشـرفـين',
title: 'غاتس1',
description: '',
id: '.م1'
},
{
header: 'قـائمــة الادوات',
title: 'غاتس2',
description: '',
id: '.م2'
},
{
header: 'قـائمــة الــترفـيه',
title: 'غاتس3',
description: '',
id: '.م3'
},
{
header: 'قـائمــة الــتحـميل',
title: 'غاتس4',
description: '',
id: '.م4'
},
{
header: 'قـائمــة الالـعـاب',
title: 'غاتس5',
description: '',
id: '.م5'
},
{
header: 'قـائمــة الــتـحـويـل',
title: 'غاتس6',
description: '',
id: '.م6'
},
{
header: 'قـائمــة الـصـور',
title: 'غاتس7',
description: '',
id: '.م7'
},
{
header: 'قـائمــة الــمـطور',
title: 'غاتس8',
description: '',
id: '.م8'
},
{
header: 'قـائمــة الـــسورس',
title: 'غاتس9',
description: '',
id: '.م9'
},
{
header: 'قـائمــة اللــوجـو',
title: 'غاتس10',
description: '',
id: '.م10'
},
{
header: 'قـائمــة الاصــوات',
title: 'غاتس11',
description: '',
id: '.م11'
},
{
header: 'قـائمــة الــبـنڪ',
title: 'غاتس12',
description: '',
id: '.م12'
},
{
header: 'قـائمــة الــديـــن',
title: 'غاتس13',
description: '',
id: '.م13'
},
{
header: 'قـائمــة الـ AI',
title: 'غاتس14',
description: '',
id: '.م14'
},
]
}
],
}),
messageParamsJson: '',
},
{
name: 'single_select',
buttonParamsJson: JSON.stringify({title: '『الاوامـــــر┇🍁』',
sections: [
{
title: '𝐆 𝐔 𝐓 𝐒  𝐁 𝐎 𝐓',
highlight_label: '𝐆 𝐔 𝐓 𝐒',
rows: [
{
header: 'قـوائــم الــبـوت',
title: '『الاوامـــــر┇🍁』',
description: '',
id: '.حخ'
},
]
}
],
}),
messageParamsJson: '',
},

{
name: "quick_reply",
buttonParamsJson: {
display_text: "『المــــطــــور┇⭐』",
id:".المطور"
},
messageParamsJson: '',
},
],
},
}
}
}
}, {})
}

   handler.help = ['info']
   handler.tags = ['main']
   handler.command = ['اوامر', 'الاوامر']

   export default handler
