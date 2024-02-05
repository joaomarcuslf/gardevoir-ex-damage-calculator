import { Tool } from "@/model/tool";
import { Pokemon } from "@/model/pokemon";

export const canUseTool = (pokemon: Pokemon, tool: Tool): boolean => {
    if (tool.requirement.rulebox) {
        return tool.requirement.stages[pokemon.stage];
    }

    return tool.requirement.stages[pokemon.stage] && !pokemon.rulebox;
}

export const calculateDamage = (type: string, formulae: string, modifier: number): number => {
    let formula = "";
    switch (type) {
        case "energy":
            formula = formulae.replace("e", String(modifier));
            break;
        case "damage":
            formula = formulae.replace("d", String(modifier));
            break;
        default:
            return 0;
    }

    return Number(eval(formula));
}