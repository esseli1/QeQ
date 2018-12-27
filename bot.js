const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const sql = require('sqlite');
const ms = require('ms');
 var prefix = "-";

//Best Rainbow by 𝕄𝕠𝟛𝔾𝕫ℤ𝕒
client.on('message', message => {//new msg event
if(!message.channel.guild) return;//Rainbow by n3k4a
  if(message.content.startsWith(prefix + 'set')) {//لكي تصنع الرتبه 
      let role = message.guild.roles.find('name', 'Rainbow ')
    if(role) return message.channel.send(`يوجد بلفعل رتبه موجوده ضع البوت فوق الرتبه`)
  if(!role){
    rainbow =  message.guild.createRole({
   name: "Rainbow ",//اسم الرتبه ستكون
   color: "#000000",//الون الاساسي للرنبو 
   permissions:[]//الرتبه المسموح بيها للرنبو  مثال MANAGE_ROLES ADMINISTRATOR   
 //نهايه الكود هنا
})

}
message.channel.send('تم اعداد رتبه الرنبو بنجاح 🌈')//if the step completed
}})

client.on('ready', () => {//لا تغير شي هنا
  setInterval(function(){//Toxic Codes
      client.guilds.forEach(g => {//Toxic Codes
                  var role = g.roles.find('name', 'Rainbow ');//اسم رتبه رنبو 
                  if (role) {//Toxic Codes
                      role.edit({color : "RANDOM"});//Toxic Codes
                  };
      });//Toxic Codes
  }, 5000);//سرعه تغير الالوان
})//Toxic Codes

client.login(process.env.BOT_TOKEN);
