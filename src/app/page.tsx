"use client";
import Image from "next/image";
import { getIconURL } from "@/helpers/icon";

import "bootstrap/dist/css/bootstrap.min.css";
import pokemons from "@/data/pokemon";
import tools from "@/data/tool";
import { useState } from "react";
import { Pokemon } from "@/model/pokemon";
import { Tool } from "@/model/tool";
import GardevoirEX from "@/helpers/gardevoir";
import { calculateDamage, canUseTool } from "@/helpers/functions";

const maxEnergy = 10;

export default function Home() {
  const [energyAvailable, setEnergyAvailable] = useState(0);

  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const [tool, setTool] = useState<Tool | undefined>();

  function onRangeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEnergyAvailable(Number(event.target.value));
  }

  function calculate(pokemon: Pokemon, tool?: Tool) {
    if (pokemon.minimumCost > energyAvailable) {
      return "N/A";
    }

    let bonus = 0;

    if (tool) {
      if (!canUseTool(pokemon, tool)) {
        return "N/A";
      }

      bonus = tool.bonus;
    }

    let helper: (hp: number, evergyAvailable: number) => number;

    switch (pokemon.type) {
      case "energy":
        helper = GardevoirEX.calculateByEnergyCounter;
        break;
      case "damage":
        helper = GardevoirEX.calculateByDamageCounter;
        break;
      default:
        helper = GardevoirEX.calculateByEnergyCounter;
    }

    return calculateDamage(
      pokemon.type,
      pokemon.formula,
      helper(pokemon.hp + bonus, energyAvailable),
    );
  }

  return (
    <main>
      <div className="container">
        <div className="text-center">
          <h1 className="display-5 fw-bold">Gardevoir Damage Calculator</h1>

          <div className="col-lg-6 mx-auto">
            <p className="lead mb-1">
              Use the slider to select the amount of energy available in the
              Graveyard for the Gardevoir EX ability. The app will calculate the
              maximum damage for each Pokémon, and tool if the Pokémon can use
              it.
            </p>
          </div>
        </div>

        <form className="row">
          <div className="row">
            <span className="col-1 text-end">0</span>
            <span className="col-10">
              <input
                type="range"
                className="form-range"
                min="0"
                max={`${maxEnergy}`}
                id="customRange1"
                value={energyAvailable}
                onChange={onRangeChange}
              />
            </span>
            <span className="col-1">{maxEnergy}</span>

            <div className="col-12 text-center">
              {energyAvailable === 0 && (
                <span className="badge bg-danger px-2 my-1">No Energy Available</span>
              )}
              {new Array(energyAvailable)
                .fill("Psychic Energy")
                .map((energy, index) => (
                  <Image
                    src={getIconURL(energy)}
                    alt={energy}
                    width={32}
                    height={32}
                    key={index}
                  />
                ))}
            </div>
          </div>
        </form>

        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Base</th>
              {tools.map((t) => (
                <th scope="col" key={t.name}>
                  {t.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pokemons.map((p) => (
              <tr key={p.name}>
                <th scope="row">
                  <Image
                    src={getIconURL(p.name)}
                    alt={p.name}
                    width={100}
                    height={139}
                  />
                </th>
                <td>{calculate(p)}</td>
                {tools.map((t) => (
                  <td key={t.name}>
                    {calculate(p, t)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <footer>
          <br />
          <hr />
          <blockquote className="blockquote text-right">
            <p className="mb-0">
              The content found on this website, which includes both textual and
              visual elements related to the Pokémon Trading Card Game, such as
              card images and text, is protected by copyright and belongs to The
              Pokémon Company (Pokémon), Nintendo, Game Freak, and/or Creatures.
              It&apos;s important to note that this website is independent and
              not officially associated with, endorsed by, supported by, or
              affiliated with Pokémon, Nintendo, Game Freak, or Creatures.
            </p>
          </blockquote>
        </footer>
      </div>
    </main>
  );
}
