const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.login(config.BOT_TOKEN)



client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => { // Listeing to the voiceStateUpdate event
  if (newVoiceState.channel) { // The member connected to a channel.

      console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.name}.`);
      client.channels.cache.get('791047918483537923').send(newVoiceState.member.user.tag + ' joined the voice channel, come and hang out! :smiley:' + ' (PS that person is sexy af!)');


  } else if (oldVoiceState.channel) { // The member disconnected from a channel.

      console.log(`${oldVoiceState.member.user.tag} disconnected from ${oldVoiceState.channel.name}.`)

  };
});