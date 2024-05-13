//S H A D O W @ D E L E T E D E L E T E D E L E T E #level [❗].... role(level)
// (['lurk'])
global.rpg = {

  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }

    const role = [
      { name: "هـاوي🍁", level: 0 }, { name: "مـبـتدء💯", level: 3 }, 
      { name: "قــوي💌", level: 4 }, { name: "عــالـي💥", level: 6 }, 
      { name: "قــرصـان🎴", level: 8 }, { name: "نــيـنـجا⚔️", level: 12 }, 
      { name: "عــالـمي🔱", level: 13 }, { name: "بــطـل🏅", level: 14 }, 
      { name: "ســاحـر🧙🏻‍♂️", level: 16 }, { name: "ســفـاح🌫️", level: 20 }, 
      { name: "مــلـك👑", level: 24 }, { name: "اسـطـوري🍥", level: 28 }, 
      { name: "هــاشـيرا🗡️", level: 32 }, { name: "شــيـطان😈", level: 36 },
      { name: "تــنـين🐉", level: 48 }, { name: "مــلـك التــنانـين🐉👑", level: 52 }, 
      { name: "عــراف🔮", level: 56 }, { name: "هـوكـاجي⛰️", level: 60 }, 
      { name: "اوتــاكـو🎉", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
      }
