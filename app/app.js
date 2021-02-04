const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.login(config.BOT_TOKEN)


client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel
    console.log("Connected");
  
  
    if(oldUserChannel === "791047918483537923" && newUserChannel !== "791047918483537922") {
  
       console.log("Someone joined voice channel");
  
    } else if(newUserChannel === "791047918483537922"){
  
      console.log("Someone left the voice channel");
  
    }
  })

  //console.log("joined voice channel");
  //var channel = client.channels.cache.get('791047918483537923')
  //channel.sendMessage(newMember.displayName + ' joined the voice channel, come and hang out! :smiley:');