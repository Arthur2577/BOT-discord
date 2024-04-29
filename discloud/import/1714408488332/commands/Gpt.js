const { SlashCommandBuilder } = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
        .setName("ChatGpt")
        .setDescription("Responde com 'Pong!"),

    async execute(interaction) {
        await interaction.reply("12345667")
    }
}
