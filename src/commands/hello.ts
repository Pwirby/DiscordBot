import { Message } from "discord.js";

const salutations = [
    "Ahlan ! 🇦🇪",
    "Anyoung ! 🇰🇷",
    "Salut ! 🇫🇷",
    "Hallå ! 🇸🇪",
    "Hallo ! 🇩🇪",
    "Halløj ! 🇩🇰",
    "Halo ! 🇮🇩",
    "Hei ! 🇳🇴",
    "Hey ! 🇬🇧",
    "Hoi ! 🇳🇱",
    "Hola ! 🇪🇸",
    "Konnichiwa ! 🇯🇵",
    "Nǐn hǎo ! 🇨🇳",
    "Olá ! 🇵🇹",
    "Privet ! 🇷🇺",
    "Salve ! 🇮🇹",
    "Yassou ! 🇬🇷",
];

export default function (msg: Message, args: string[]) {
    const index = Math.floor(Math.random() * salutations.length);
    msg.channel.send(salutations[index]);
};