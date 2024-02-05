import { Tool } from "@/model/tool";

const tools: Tool[] = [
    {
        name: "Bravery Charm",
        bonus: 50,
        requirement: {
            rulebox: true,
            stages: [true, false, false],
        },
    },
    {
        name: "Luxurious Cape",
        bonus: 100,
        requirement: {
            rulebox: false,
            stages: [true, true, true],
        },
    },
    {
        name: "Hero's Cape",
        bonus: 100,
        requirement: {
            rulebox: true,
            stages: [true, true, true],
        },
    },
];

export default tools;