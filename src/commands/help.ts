import { Message } from "discord.js";

export default function (msg: Message, _args: string[]) {
    msg.channel.send("Here is the list of all the commands :\n"
        + "    •!compex   →   create a random composition of Apex Legends 🔮\n"
        + "    •!flipCoin →   do a coin flip 🪙\n"
        + "    •!help     →   shows you all commands available and what they do *(you just typed it)* 👨‍🏫\n"
        + "    •!hello    →   makes me say '*Hi*' in a random language, try it ! 💬\n"
        + "    •!mkDemo   →   create a Demotivation Poster from 3 arguments (**<**picture URL**>**,top text,bottom text) 🎨\n"
        + "    •!mkMeme   →   create a Standard Meme from 3 arguments (**<**picture URL**>**,top text,bottom text) 🖼\n"
        + "    •!mkSoy    →   create a Meme with Soyjacks pointing to your picture (**<**picture URL**>**) 🍶\n"
        + "    •!upTime   →   check how long have I been up ⏳\n"
        + "    •!rock     ⤼\n"
        + "    •!paper    →   provoke me in a rock, paper, scissors duel! **✊/✋/✌**\n"
        + "    •!scissors ⤻"
    );
};