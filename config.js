const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdrdVhBcUlIdUdrSmFUcU9FVGNpV01IVDB3a3dSWEViQml0NmJLRTRIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkU0dTN6aUtmeE1lM2tsRzhyMjZjMXl5NFprRDZsOU5hLytLenc2aXZXZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQkk4RU5vNENWdmN6R1VtRkl3YmpYWGp3YTZOT0NBWnZXekZMT3VsM1VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsLzhCOHdjMUpocGtXWnU5QXQ0eDIwRFduUEo5RlhmUG51VmdMUHFWbzFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldQaXFaNDFzOWNZVEZUL3hBdzJlZGdMTkNNRVlNcE1UOHFVOXpWM3pWVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJkVHFGZGk5N21qUERZbUFBUFRNR3FhVTF3UDBSVi9GaGdQS2NZajBHZ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVB6NjRIWm8rNjI3ZmJ0dUl0eHg2L1VCdzBvZFBJQU5BQSsvRnB1RC9VUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWpVTmpqdFQySkxRV0hScWZIU1FKbVB2VVJHUVBMMU9abE1KcDhLalQwUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLa2E1SVQrNDUrZnh5Rm13cEd2RVpHSXhubFdWWDA1ZGJwV0NRazBmOC9wWlNkenFRMGlqTjNybjM4RUhwWjk1WkFTL1hTRGxaSkxqYmo5ejZBR0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6IkZrRDVGUTAyV2U2citVSzdhQzlwWmdSL1luK1hMYURXblh0VVQwTTFETm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBRcHFYeTU2VDAyLUwycmxaU1ZFRFEiLCJwaG9uZUlkIjoiMTIyMjMxODMtYjhiMi00ZjJkLWJhZWQtMTk3NmNjYmY5ZmYxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpiN3R0T0ZBTktFcTg2RG9LYXpTY0ZSM1MvRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxc1oydXdtN29udzN5ajZqc293TGtTb0VLRzA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFNMRzlUTFQiLCJtZSI6eyJpZCI6IjkxODg1MDI1MjgwODo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik5vYml0YSIsImxpZCI6IjI0NjE0NTIxMzMxMzI3NDo3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmorbGMwRkVJNjd4TW9HR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSjFlU1FUYlMzcWhxRXk4SlZNSGRzMStFTjFKOHBIRmxwL2U4SThmUUhHWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZXh1RCtKc1VpYldWM3dxUnhMNVcrL2NiSW8zNFkvYWFZMGxOM1JJM3F4VTdXb2lveUtLYSsybjM1a1Z0WWhMOHpBYUZhNkptTHNRZElHUVpTcCtkQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6InRmWWJOYkZzOFR6TkdCdTBpRUd6QktYV01BYmd3T2NwOUs1Vzh5V0RQWGwwS2daL0FEQWlXemZzQmNVa091ZERCNi9yZm4rYWY0dlRjTE1ONzBRUEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4ODUwMjUyODA4OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2RYa2tFMjB0Nm9haE12Q1ZUQjNiTmZoRGRTZktSeFphZjN2Q1BIMEJ4bSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY2OTIzNjc1LCJsYXN0UHJvcEhhc2giOiJDNGZKTiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY X-NOBITA 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/520i6z.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "X-NOBITA",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "X-NOBITA",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "919043081268",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*X-NOBITA*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ X-NOBITA ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/520i6z.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
