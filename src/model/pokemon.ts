export type Pokemon = {
    name: string;
    type: "energy" | "damage";
    formula: string;
    hp: number;
    minimumCost: number;
    stage: number;
    rulebox: boolean;
};