let handler = async (m, { conn, args, usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {

body: {
text: '*『 🤖┇مــعـلـومـات الــبـوت┇🤖 』*\n\n*❐═━━━═╊⊰🍁⊱╉═━━━═❐*\n\n*❬⚡❭↜〘 اســمـي ☜ زورو 〙*\n*❬♦❭↜〘 الوضـع ☜ عـام 〙*\n*❬✨❭↜〘 الــخـاص ☜ مــفـتوح 〙*\n*❬⭐❭↜〘 قـبــل الامــر ☜ . 〙*\n\n*❐═━━━═╊⊰🍁⊱╉═━━━═❐*'
},
nativeFlowMessage: {
buttons: [
{
name: 'single_select',
buttonParamsJson: JSON.stringify({
title: '『اوامــر الــبـوت┇🤖』',
sections: [
{
title: '𝙕𝙊𝙍𝙊  𝐁 𝐎 𝐓',
highlight_label: '𝙕𝙊𝙍𝙊',
rows: [
{
header: 'قـائمــة الــمشـرفـين',
title: 'زورو1',
description: '',
id: '.م1'
},
{
header: 'قـائمــة الادوات',
title: 'زورو2',
description: '',
id: '.م2'
},
{
header: 'قـائمــة الــترفـيه',
title: 'زورو3',
description: '',
id: '.م3'
},
{
header: 'قـائمــة الــتحـميل',
title: 'زورو4',
description: '',
id: '.م4'
},
{
header: 'قـائمــة الالـعـاب',
title: 'زورو5',
description: '',
id: '.م5'
},
{
header: 'قـائمــة الــتـحـويـل',
title: 'زورو6',
description: '',
id: '.م6'
},
{
header: 'قـائمــة الـصـور',
title: 'زورو7',
description: '',
id: '.م7'
},
{
header: 'قـائمــة الــمـطور',
title: 'زورو8',
description: '',
id: '.م8'
},
{
header: 'قـائمــة الـــسورس',
title: 'زورو9',
description: '',
id: '.م9'
},
{
header: 'قـائمــة اللــوجـو',
title: 'زورو10',
description: '',
id: '.م10'
},
{
header: 'قـائمــة الاصــوات',
title: 'زورو11',
description: '',
id: '.م11'
},
{
header: 'قـائمــة الــبـنڪ',
title: 'زورو12',
description: '',
id: '.م12'
},
{
header: 'قـائمــة الــديـــن',
title: 'زورو13',
description: '',
id: '.م13'
},
{
header: 'قـائمــة الـ AI',
title: 'زورو14',
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
title: '𝙕𝙊𝙍𝙊  𝐁 𝐎 𝐓',
highlight_label: '𝙕𝙊𝙍𝙊',
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
