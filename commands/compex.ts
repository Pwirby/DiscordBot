module.exports = function (msg, args) {
    const players = {
        "@Baradoz#0444": [
            "Bangalore 💨",
            "Bloodhound 🦅",
            "Gibraltar 🛡",
            "Lifeline 💉",
            "Pathfinder ⚓",
            "Rampart 💩",
            "Wraith 🕳",

        ],
        "@Pwirby#3948": [
            "Bangalore 💨",
            "Bloodhound 🦅",
            "Caustic ☣",
            "Crypto 🚁",
            "Gibraltar 🛡",
            "Lifeline 💉",
            "Loba 💰",
            "Pathfinder ⚓",
            "Wattson 🚧",
            "Wraith 🕳",
        ]

        ,
        "@Cyriac#6378": [
            "Bangalore 💨",
            "Bloodhound 🦅",
            "Caustic ☣",
            "Crypto 🚁",
            "Gibraltar 🛡",
            "Lifeline 💉",
            "Mirage 👨‍👨‍👦‍👦",
            "Octane 🏃‍♂️",
            "Pathfinder ⚓",
            "Revenant ⚰",
            "Valkyrie 🚀",
            "Wraith 🕳",
        ]
    }
    let characters = [
        "Bangalore 💨",
        "Bloodhound 🦅",
        "Caustic ☣",
        "Crypto 🚁",
        "Fuse 🧨",
        "Gibraltar 🛡",
        "Horizon 👩‍🚀",
        "Lifeline 💉",
        "Loba 💰",
        "Mirage 👨‍👨‍👦‍👦",
        "Octane 🏃‍♂️",
        "Pathfinder ⚓",
        "Rampart 💩",
        "Revenant ⚰",
        "Valkyrie 🚀",
        "Wattson 🚧",
        "Wraith 🕳",
    ];
    let compo = [];
    if (args.length == 1 && !isNaN(parseInt(args[0], 10))) {
        for (let nb = args[0]; nb > 0; nb--) {
            let rand = Math.floor(Math.random() * characters.length);
            compo.push(characters.splice(rand, 1));
        }
        let replie = "The composition will be made of : ";
        for (let character of compo) {
            replie += character + ", ";
        }
        replie += "good luck !";
        msg.channel.send(replie);
    } else {
        msg.channel.send("Error: missing an argument for the number of player !compex,number ❌");
    }
};