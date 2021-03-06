const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color:4447003,
    description:`Type \`${config.prefix}h <CommandName>\` for help on a spefified command. Eg. \`${config.prefix}h achievement\``
  }});
  const commandNames = Array.from(client.commands.keys());   
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  
  /* main code */
  if (args[0].toLowerCase() === "admin") {
  message.channel.send(`**List Of Commands in Admin Module**\n\`\`\`${client.commands.filter(c=>c.help.module === "Admin").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``);
  }else
  if (args[0].toLowerCase() === "fun") {
  message.channel.send(`**List Of Commands in Fun Module**\n\`\`\`${client.commands.filter(c=>c.help.module === "Fun").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``);
  }else
  if (args[0].toLowerCase() === "utility") {
  message.channel.send(`**List Of Commands in Utility Module**\n\`\`\`${client.commands.filter(c=>c.help.module === "Other").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``);
  }else
  if (args[0].toLowerCase() === "pokemon") {
  message.channel.send(`**List Of Commands in Pokemon Module**\n\`\`\`${client.commands.filter(c=>c.help.module === "Pokemon").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``);
  }else
  if (args[0].toLowerCase() === "pokedex") {
  message.channel.send(`**List Of Commands in Pokedex Module**\n\`\`\`${client.commands.filter(c=>c.help.module === "Pokedex").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``);
  }else
  if (args[0].toLowerCase() === "help") {
  message.channel.send(`**List Of Commands in Help Module**\n\`\`\`${client.commands.filter(c=>c.help.module === "Help").map(cmd=>`${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}\n\`\`\``);
  }else {
  message.channel.send("Module not found, make sure that spellings are correct.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cmds'],
  permLevel: 0
};

exports.help = {
  name: 'commands',
  description: 'Lists all the bot commands from a certain module.',
  usage: 'commands <module name>',
  module: 'Help',
  permit: ' ',
  alias: '/ cmds'
};
