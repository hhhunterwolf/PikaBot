exports.run = (client, message, args) => {
const pkmn = message.content.toLowerCase().split(" ").slice(1).join(" ");
message.channel.send({file: `https://raw.githubusercontent.com/Touched/pokedex-data/master/data/${pkmn}/sprite.png`});
message.channel.send({file: `https://raw.githubusercontent.com/Touched/pokedex-data/master/data/${pkmn}/icon.png`});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'gba',
  description: 'Sends a GBA styled sprite of the specified pokemon.',
  usage: 'gba [pokemon name]',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
}; 
