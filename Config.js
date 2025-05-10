ur require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.ownernomer = process.env.OWNER_NOMER || "2347050510935";
global.ytname = process.env.YT_NAME || "YT: @EliteProTech";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2347050510935';
global.ownername = process.env.OWNER_NAME || '𝓥𝓲𝓬𝓽𝓸𝓻';
global.botname = process.env.BOT_NAME || '𝓥𝓲𝓬𝓽𝓸𝓻';

// Default settings 
global.prefa = process.env.PREFIX ? process.env.PREFIX.split(',') : ['', '!', '.', '#', '&'];
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'false';
global.autoTyping = process.env.AUTO_TYPING === 'false';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'false';
global.autoread = process.env.AUTO_READ === 'false';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'true'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || '𝓥𝓲𝓬𝓽𝓸𝓻';
global.author = process.env.AUTHOR || '𝓥𝓲𝓬𝓽𝓸𝓻\n\nContact: +2347050510935';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @EliteProTech";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Text bug
global.xbugtex = {
    xtxt: '👨‍💻ELITE-PRO👨‍💻',
};

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for 𝓥𝓲𝓬𝓽𝓸𝓻.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make 𝓥𝓲𝓬𝓽𝓸𝓻 admin to access commands⿻*',
    owner: '*⦿This commands is made for 𝓥𝓲𝓬𝓽𝓸𝓻.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
