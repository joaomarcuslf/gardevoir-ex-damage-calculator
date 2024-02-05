import { Pokemon } from "@/model/pokemon";

const pokemon: Pokemon[] = [
    {
        name: "Gardevoir",
        type: "energy",
        formula: "60+(30*e)",
        hp: 140,
        minimumCost: 3,
        stage: 2,
        rulebox: false,
    },
    {
        name: "Zacian V",
        type: "energy",
        formula: "60+(30*e)",
        hp: 220,
        minimumCost: 3,
        stage: 0,
        rulebox: true,
    },
    {
        name: "Drifloon",
        type: "damage",
        formula: "30*d",
        hp: 70,
        minimumCost: 2,
        stage: 0,
        rulebox: false,
    },
    {
        name: "Scream Tail",
        type: "damage",
        formula: "20*d",
        hp: 90,
        minimumCost: 2,
        stage: 0,
        rulebox: false,
    },
];

export default pokemon;