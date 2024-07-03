const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "typing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_07_15_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgODgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDc5LFxuICAgICAgICA3MixcbiAgICAgICAgODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDksXG4gICAgICAgIDIzLFxuICAgICAgICA2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4LFxuICAgICAgICA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0LFxuICAgICAgICA4MSxcbiAgICAgICAgNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBWNE0wN29pZDViN2RzTVZqVUQ2VFNIeXlrRUUvWXNHeUplMWhtaDBHYU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInR3S2xKdnJ0UUt5blFPZTJSVU1pNVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2IyY2E4ODAtNDQzMy00NWRkLTgzYjEtN2EzMzlkZGFiMGJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMTU1LFxuICAgICAgMTgsXG4gICAgICAzNyxcbiAgICAgIDE1MixcbiAgICAgIDE1NCxcbiAgICAgIDE0OCxcbiAgICAgIDIxOSxcbiAgICAgIDgyLFxuICAgICAgMjM5LFxuICAgICAgMTU1LFxuICAgICAgMTI3LFxuICAgICAgMzQsXG4gICAgICAyOCxcbiAgICAgIDYyLFxuICAgICAgNzEsXG4gICAgICAxOTcsXG4gICAgICAxNzAsXG4gICAgICAzOSxcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDk1LFxuICAgICAgMjMyLFxuICAgICAgODksXG4gICAgICAxMzAsXG4gICAgICA4LFxuICAgICAgMTE2LFxuICAgICAgNixcbiAgICAgIDIyLFxuICAgICAgMTQzLFxuICAgICAgMjAwLFxuICAgICAgMTY4LFxuICAgICAgNDcsXG4gICAgICA5MixcbiAgICAgIDI4LFxuICAgICAgMTMsXG4gICAgICA1OSxcbiAgICAgIDE4OSxcbiAgICAgIDEzMCxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg2WVc2NkFGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDc4ODY4OTUxMzg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg2MDI0NDAzMzA0NjY1OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BtVnFkZ0NFSlAxazdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRXg3VDlQcnJJTFk1akpaT2drQTdyeDRVbFIzU254aXBpYlpDck5FTUZTYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXeG9CSDU3eGpWU0V0eXpzNm1iaXFxMGx0d0J4SEcyZEQvRnhkekhTMWNqU0xwMUdsSDRwWUM4bXVYcmdDNm9pWkIxY2pmdUZtR2xhRDhJRCtFVlBEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2R01DdWZYd296Yk5SN0ozMDdKU2NERlFTZUc1SFhLZUxCMVlxcTliaFRFbGgxdU1KSDkvSHpTQ0U2WncyWi8yYlBndjBZUlFyZHhTYWxMaDVaYjFEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc4ODY4OTUxMzg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5OTA5MzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHU01cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdTTS5qc29uIjogIntcImtleURhdGFcIjpcIkdiUkZueXlqYnpHbzRJNDVYTzJTVUN0Q2pOQVlraEl6UGNwWXpjTXl3cUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzIyMDk0ODQwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTc4NjkzNDgxMlwifSIKfQ==|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
