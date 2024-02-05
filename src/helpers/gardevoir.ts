const GardevoirEX = {
    damageModifier: 2,
    calculateByDamageCounter: (hp: number, evergyAvailable: number) => {
        let modifier = 0;

        for (let i = 0; i < evergyAvailable; i++) {
            modifier += GardevoirEX.damageModifier;

            if (modifier * 10 >= hp) {
                modifier -= GardevoirEX.damageModifier;
                break;
            }
        }

        return modifier;
    },
    calculateByEnergyCounter: (hp: number, evergyAvailable: number) => {
        let energy = 0;

        for (let i = 0; i < evergyAvailable; i++) {
            energy += 1;

            if ((energy * GardevoirEX.damageModifier) * 10 >= hp) {
                energy -= 1;
                break;
            }
        }

        return energy;
    },

}

export default GardevoirEX;