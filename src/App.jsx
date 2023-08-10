import { useState } from "react";

import Navbar from "./navbar/Navbar";
import PokemonInfoCard from "./components/PokemonInfoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import pokemonService from "./services/pokemonService";
import "bootstrap/dist/css/bootstrap.css";
import "../src/App.scss";
import { useEffect } from "react";

function App() {
  const [pokemon] = useState({
    basicData: {
      abilities: [
        {
          ability: {
            name: "static",
            url: "https://pokeapi.co/api/v2/ability/9/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "lightning-rod",
            url: "https://pokeapi.co/api/v2/ability/31/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 112,
      forms: [
        {
          name: "pikachu",
          url: "https://pokeapi.co/api/v2/pokemon-form/25/",
        },
      ],
      game_indices: [
        {
          game_index: 84,
          version: {
            name: "red",
            url: "https://pokeapi.co/api/v2/version/1/",
          },
        },
        {
          game_index: 84,
          version: {
            name: "blue",
            url: "https://pokeapi.co/api/v2/version/2/",
          },
        },
        {
          game_index: 84,
          version: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version/3/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "gold",
            url: "https://pokeapi.co/api/v2/version/4/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "silver",
            url: "https://pokeapi.co/api/v2/version/5/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version/6/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "ruby",
            url: "https://pokeapi.co/api/v2/version/7/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "sapphire",
            url: "https://pokeapi.co/api/v2/version/8/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version/9/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "firered",
            url: "https://pokeapi.co/api/v2/version/10/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "leafgreen",
            url: "https://pokeapi.co/api/v2/version/11/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "diamond",
            url: "https://pokeapi.co/api/v2/version/12/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "pearl",
            url: "https://pokeapi.co/api/v2/version/13/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version/14/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "heartgold",
            url: "https://pokeapi.co/api/v2/version/15/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "soulsilver",
            url: "https://pokeapi.co/api/v2/version/16/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "black",
            url: "https://pokeapi.co/api/v2/version/17/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "white",
            url: "https://pokeapi.co/api/v2/version/18/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "black-2",
            url: "https://pokeapi.co/api/v2/version/21/",
          },
        },
        {
          game_index: 25,
          version: {
            name: "white-2",
            url: "https://pokeapi.co/api/v2/version/22/",
          },
        },
      ],
      height: 4,
      held_items: [
        {
          item: {
            name: "oran-berry",
            url: "https://pokeapi.co/api/v2/item/132/",
          },
          version_details: [
            {
              rarity: 50,
              version: {
                name: "ruby",
                url: "https://pokeapi.co/api/v2/version/7/",
              },
            },
            {
              rarity: 50,
              version: {
                name: "sapphire",
                url: "https://pokeapi.co/api/v2/version/8/",
              },
            },
            {
              rarity: 50,
              version: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version/9/",
              },
            },
            {
              rarity: 50,
              version: {
                name: "diamond",
                url: "https://pokeapi.co/api/v2/version/12/",
              },
            },
            {
              rarity: 50,
              version: {
                name: "pearl",
                url: "https://pokeapi.co/api/v2/version/13/",
              },
            },
            {
              rarity: 50,
              version: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version/14/",
              },
            },
            {
              rarity: 50,
              version: {
                name: "heartgold",
                url: "https://pokeapi.co/api/v2/version/15/",
              },
            },
            {
              rarity: 50,
              version: {
                name: "soulsilver",
                url: "https://pokeapi.co/api/v2/version/16/",
              },
            },
            {
              rarity: 50,
              version: {
                name: "black",
                url: "https://pokeapi.co/api/v2/version/17/",
              },
            },
            {
              rarity: 50,
              version: {
                name: "white",
                url: "https://pokeapi.co/api/v2/version/18/",
              },
            },
          ],
        },
        {
          item: {
            name: "light-ball",
            url: "https://pokeapi.co/api/v2/item/213/",
          },
          version_details: [
            {
              rarity: 5,
              version: {
                name: "ruby",
                url: "https://pokeapi.co/api/v2/version/7/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "sapphire",
                url: "https://pokeapi.co/api/v2/version/8/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version/9/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "diamond",
                url: "https://pokeapi.co/api/v2/version/12/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "pearl",
                url: "https://pokeapi.co/api/v2/version/13/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version/14/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "heartgold",
                url: "https://pokeapi.co/api/v2/version/15/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "soulsilver",
                url: "https://pokeapi.co/api/v2/version/16/",
              },
            },
            {
              rarity: 1,
              version: {
                name: "black",
                url: "https://pokeapi.co/api/v2/version/17/",
              },
            },
            {
              rarity: 1,
              version: {
                name: "white",
                url: "https://pokeapi.co/api/v2/version/18/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "black-2",
                url: "https://pokeapi.co/api/v2/version/21/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "white-2",
                url: "https://pokeapi.co/api/v2/version/22/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "x",
                url: "https://pokeapi.co/api/v2/version/23/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "y",
                url: "https://pokeapi.co/api/v2/version/24/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "omega-ruby",
                url: "https://pokeapi.co/api/v2/version/25/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version/26/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "sun",
                url: "https://pokeapi.co/api/v2/version/27/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "moon",
                url: "https://pokeapi.co/api/v2/version/28/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "ultra-sun",
                url: "https://pokeapi.co/api/v2/version/29/",
              },
            },
            {
              rarity: 5,
              version: {
                name: "ultra-moon",
                url: "https://pokeapi.co/api/v2/version/30/",
              },
            },
          ],
        },
      ],
      id: 25,
      is_default: true,
      location_area_encounters:
        "https://pokeapi.co/api/v2/pokemon/25/encounters",
      moves: [
        {
          move: {
            name: "mega-punch",
            url: "https://pokeapi.co/api/v2/move/5/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
          ],
        },
        {
          move: {
            name: "pay-day",
            url: "https://pokeapi.co/api/v2/move/6/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
          ],
        },
        {
          move: {
            name: "thunder-punch",
            url: "https://pokeapi.co/api/v2/move/9/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "slam",
            url: "https://pokeapi.co/api/v2/move/21/",
          },
          version_group_details: [
            {
              level_learned_at: 20,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 20,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 20,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 20,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 20,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 20,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 21,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 21,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 21,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 20,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 20,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 37,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 37,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 37,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 24,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 28,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
          ],
        },
        {
          move: {
            name: "double-kick",
            url: "https://pokeapi.co/api/v2/move/24/",
          },
          version_group_details: [
            {
              level_learned_at: 9,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
          ],
        },
        {
          move: {
            name: "mega-kick",
            url: "https://pokeapi.co/api/v2/move/25/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
          ],
        },
        {
          move: {
            name: "headbutt",
            url: "https://pokeapi.co/api/v2/move/29/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
          ],
        },
        {
          move: {
            name: "body-slam",
            url: "https://pokeapi.co/api/v2/move/34/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "take-down",
            url: "https://pokeapi.co/api/v2/move/36/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "double-edge",
            url: "https://pokeapi.co/api/v2/move/38/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
          ],
        },
        {
          move: {
            name: "tail-whip",
            url: "https://pokeapi.co/api/v2/move/39/",
          },
          version_group_details: [
            {
              level_learned_at: 6,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 6,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 6,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 6,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 6,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 6,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 5,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 5,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 5,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 5,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 6,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 6,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 5,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 3,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "growl",
            url: "https://pokeapi.co/api/v2/move/45/",
          },
          version_group_details: [
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 5,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 5,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 5,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 5,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "surf",
            url: "https://pokeapi.co/api/v2/move/57/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "stadium-surfing-pikachu",
                url: "https://pokeapi.co/api/v2/move-learn-method/5/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "stadium-surfing-pikachu",
                url: "https://pokeapi.co/api/v2/move-learn-method/5/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "submission",
            url: "https://pokeapi.co/api/v2/move/66/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
          ],
        },
        {
          move: {
            name: "counter",
            url: "https://pokeapi.co/api/v2/move/68/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
          ],
        },
        {
          move: {
            name: "seismic-toss",
            url: "https://pokeapi.co/api/v2/move/69/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
          ],
        },
        {
          move: {
            name: "strength",
            url: "https://pokeapi.co/api/v2/move/70/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
          ],
        },
        {
          move: {
            name: "thunder-shock",
            url: "https://pokeapi.co/api/v2/move/84/",
          },
          version_group_details: [
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "thunderbolt",
            url: "https://pokeapi.co/api/v2/move/85/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 29,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 29,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 29,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 42,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 42,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 42,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 21,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 36,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 36,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "thunder-wave",
            url: "https://pokeapi.co/api/v2/move/86/",
          },
          version_group_details: [
            {
              level_learned_at: 9,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 8,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 8,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 8,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 8,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 8,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 8,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 10,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 10,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 10,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 10,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 8,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 8,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 10,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 13,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 18,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 18,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 18,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 15,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 4,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 4,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "thunder",
            url: "https://pokeapi.co/api/v2/move/87/",
          },
          version_group_details: [
            {
              level_learned_at: 43,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 41,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 41,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 41,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 41,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 41,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 41,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 45,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 45,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 45,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 41,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 41,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 58,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 58,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 58,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 30,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 44,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 44,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "dig",
            url: "https://pokeapi.co/api/v2/move/91/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "toxic",
            url: "https://pokeapi.co/api/v2/move/92/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
          ],
        },
        {
          move: {
            name: "agility",
            url: "https://pokeapi.co/api/v2/move/97/",
          },
          version_group_details: [
            {
              level_learned_at: 33,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 33,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 33,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 33,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 33,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 33,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 33,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 34,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 34,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 34,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 37,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 33,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 33,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 37,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 37,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 45,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 45,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 45,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 27,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 24,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 24,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "quick-attack",
            url: "https://pokeapi.co/api/v2/move/98/",
          },
          version_group_details: [
            {
              level_learned_at: 16,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 11,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 11,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 11,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 11,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 11,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 11,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 13,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 13,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 13,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 13,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 11,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 11,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 13,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 10,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 10,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 10,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 10,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 6,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "rage",
            url: "https://pokeapi.co/api/v2/move/99/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
          ],
        },
        {
          move: {
            name: "mimic",
            url: "https://pokeapi.co/api/v2/move/102/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
          ],
        },
        {
          move: {
            name: "double-team",
            url: "https://pokeapi.co/api/v2/move/104/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 15,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 15,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 15,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 15,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 15,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 15,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 18,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 18,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 18,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 21,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 15,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 15,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 21,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 21,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 23,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 23,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 23,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 12,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 8,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 8,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "defense-curl",
            url: "https://pokeapi.co/api/v2/move/111/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
          ],
        },
        {
          move: {
            name: "light-screen",
            url: "https://pokeapi.co/api/v2/move/113/",
          },
          version_group_details: [
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 42,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 42,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 42,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 45,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 45,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 45,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 53,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 53,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 53,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 18,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 40,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 40,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "reflect",
            url: "https://pokeapi.co/api/v2/move/115/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "bide",
            url: "https://pokeapi.co/api/v2/move/117/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
          ],
        },
        {
          move: {
            name: "swift",
            url: "https://pokeapi.co/api/v2/move/129/",
          },
          version_group_details: [
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "skull-bash",
            url: "https://pokeapi.co/api/v2/move/130/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
          ],
        },
        {
          move: {
            name: "flash",
            url: "https://pokeapi.co/api/v2/move/148/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
          ],
        },
        {
          move: {
            name: "rest",
            url: "https://pokeapi.co/api/v2/move/156/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "substitute",
            url: "https://pokeapi.co/api/v2/move/164/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "red-blue",
                url: "https://pokeapi.co/api/v2/version-group/1/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "yellow",
                url: "https://pokeapi.co/api/v2/version-group/2/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "thief",
            url: "https://pokeapi.co/api/v2/move/168/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "snore",
            url: "https://pokeapi.co/api/v2/move/173/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
          ],
        },
        {
          move: {
            name: "curse",
            url: "https://pokeapi.co/api/v2/move/174/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
          ],
        },
        {
          move: {
            name: "reversal",
            url: "https://pokeapi.co/api/v2/move/179/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "protect",
            url: "https://pokeapi.co/api/v2/move/182/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "sweet-kiss",
            url: "https://pokeapi.co/api/v2/move/186/",
          },
          version_group_details: [
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "mud-slap",
            url: "https://pokeapi.co/api/v2/move/189/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
          ],
        },
        {
          move: {
            name: "zap-cannon",
            url: "https://pokeapi.co/api/v2/move/192/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
          ],
        },
        {
          move: {
            name: "detect",
            url: "https://pokeapi.co/api/v2/move/197/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
          ],
        },
        {
          move: {
            name: "endure",
            url: "https://pokeapi.co/api/v2/move/203/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "charm",
            url: "https://pokeapi.co/api/v2/move/204/",
          },
          version_group_details: [
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "rollout",
            url: "https://pokeapi.co/api/v2/move/205/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
          ],
        },
        {
          move: {
            name: "swagger",
            url: "https://pokeapi.co/api/v2/move/207/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "spark",
            url: "https://pokeapi.co/api/v2/move/209/",
          },
          version_group_details: [
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 26,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 20,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 20,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "attract",
            url: "https://pokeapi.co/api/v2/move/213/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
          ],
        },
        {
          move: {
            name: "sleep-talk",
            url: "https://pokeapi.co/api/v2/move/214/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "return",
            url: "https://pokeapi.co/api/v2/move/216/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "frustration",
            url: "https://pokeapi.co/api/v2/move/218/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "dynamic-punch",
            url: "https://pokeapi.co/api/v2/move/223/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
          ],
        },
        {
          move: {
            name: "encore",
            url: "https://pokeapi.co/api/v2/move/227/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "iron-tail",
            url: "https://pokeapi.co/api/v2/move/231/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 28,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "hidden-power",
            url: "https://pokeapi.co/api/v2/move/237/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "rain-dance",
            url: "https://pokeapi.co/api/v2/move/240/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "gold-silver",
                url: "https://pokeapi.co/api/v2/version-group/3/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "crystal",
                url: "https://pokeapi.co/api/v2/version-group/4/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "rock-smash",
            url: "https://pokeapi.co/api/v2/move/249/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
          ],
        },
        {
          move: {
            name: "uproar",
            url: "https://pokeapi.co/api/v2/move/253/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
          ],
        },
        {
          move: {
            name: "facade",
            url: "https://pokeapi.co/api/v2/move/263/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "focus-punch",
            url: "https://pokeapi.co/api/v2/move/264/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "helping-hand",
            url: "https://pokeapi.co/api/v2/move/270/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "brick-break",
            url: "https://pokeapi.co/api/v2/move/280/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "knock-off",
            url: "https://pokeapi.co/api/v2/move/282/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "secret-power",
            url: "https://pokeapi.co/api/v2/move/290/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
          ],
        },
        {
          move: {
            name: "fake-tears",
            url: "https://pokeapi.co/api/v2/move/313/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "signal-beam",
            url: "https://pokeapi.co/api/v2/move/324/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "covet",
            url: "https://pokeapi.co/api/v2/move/343/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "volt-tackle",
            url: "https://pokeapi.co/api/v2/move/344/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "calm-mind",
            url: "https://pokeapi.co/api/v2/move/347/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "lets-go-pikachu-lets-go-eevee",
                url: "https://pokeapi.co/api/v2/version-group/19/",
              },
            },
          ],
        },
        {
          move: {
            name: "shock-wave",
            url: "https://pokeapi.co/api/v2/move/351/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ruby-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/5/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "emerald",
                url: "https://pokeapi.co/api/v2/version-group/6/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "firered-leafgreen",
                url: "https://pokeapi.co/api/v2/version-group/7/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "colosseum",
                url: "https://pokeapi.co/api/v2/version-group/12/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "xd",
                url: "https://pokeapi.co/api/v2/version-group/13/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "natural-gift",
            url: "https://pokeapi.co/api/v2/move/363/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
          ],
        },
        {
          move: {
            name: "feint",
            url: "https://pokeapi.co/api/v2/move/364/",
          },
          version_group_details: [
            {
              level_learned_at: 29,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 29,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 29,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 34,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 34,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 34,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 21,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 21,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 21,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 16,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 16,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "fling",
            url: "https://pokeapi.co/api/v2/move/374/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "magnet-rise",
            url: "https://pokeapi.co/api/v2/move/393/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "nasty-plot",
            url: "https://pokeapi.co/api/v2/move/417/",
          },
          version_group_details: [
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "discharge",
            url: "https://pokeapi.co/api/v2/move/435/",
          },
          version_group_details: [
            {
              level_learned_at: 37,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 37,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 37,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 42,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 42,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 42,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 34,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 34,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 34,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 32,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 32,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "captivate",
            url: "https://pokeapi.co/api/v2/move/445/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
          ],
        },
        {
          move: {
            name: "grass-knot",
            url: "https://pokeapi.co/api/v2/move/447/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "charge-beam",
            url: "https://pokeapi.co/api/v2/move/451/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "diamond-pearl",
                url: "https://pokeapi.co/api/v2/version-group/8/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "platinum",
                url: "https://pokeapi.co/api/v2/version-group/9/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "heartgold-soulsilver",
                url: "https://pokeapi.co/api/v2/version-group/10/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "electro-ball",
            url: "https://pokeapi.co/api/v2/move/486/",
          },
          version_group_details: [
            {
              level_learned_at: 18,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 18,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 18,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 13,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 13,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 13,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 12,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 12,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "round",
            url: "https://pokeapi.co/api/v2/move/496/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
          ],
        },
        {
          move: {
            name: "echoed-voice",
            url: "https://pokeapi.co/api/v2/move/497/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "volt-switch",
            url: "https://pokeapi.co/api/v2/move/521/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "electroweb",
            url: "https://pokeapi.co/api/v2/move/527/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
          ],
        },
        {
          move: {
            name: "wild-charge",
            url: "https://pokeapi.co/api/v2/move/528/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-white",
                url: "https://pokeapi.co/api/v2/version-group/11/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "black-2-white-2",
                url: "https://pokeapi.co/api/v2/version-group/14/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 50,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "disarming-voice",
            url: "https://pokeapi.co/api/v2/move/574/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "draining-kiss",
            url: "https://pokeapi.co/api/v2/move/577/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "play-rough",
            url: "https://pokeapi.co/api/v2/move/583/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "play-nice",
            url: "https://pokeapi.co/api/v2/move/589/",
          },
          version_group_details: [
            {
              level_learned_at: 7,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 7,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 7,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 7,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "confide",
            url: "https://pokeapi.co/api/v2/move/590/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "eerie-impulse",
            url: "https://pokeapi.co/api/v2/move/598/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "electric-terrain",
            url: "https://pokeapi.co/api/v2/move/604/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "nuzzle",
            url: "https://pokeapi.co/api/v2/move/609/",
          },
          version_group_details: [
            {
              level_learned_at: 23,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "x-y",
                url: "https://pokeapi.co/api/v2/version-group/15/",
              },
            },
            {
              level_learned_at: 29,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "omega-ruby-alpha-sapphire",
                url: "https://pokeapi.co/api/v2/version-group/16/",
              },
            },
            {
              level_learned_at: 29,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sun-moon",
                url: "https://pokeapi.co/api/v2/version-group/17/",
              },
            },
            {
              level_learned_at: 29,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "laser-focus",
            url: "https://pokeapi.co/api/v2/move/673/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "ultra-sun-ultra-moon",
                url: "https://pokeapi.co/api/v2/version-group/18/",
              },
            },
          ],
        },
        {
          move: {
            name: "rising-voltage",
            url: "https://pokeapi.co/api/v2/move/804/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "tutor",
                url: "https://pokeapi.co/api/v2/move-learn-method/3/",
              },
              version_group: {
                name: "sword-shield",
                url: "https://pokeapi.co/api/v2/version-group/20/",
              },
            },
          ],
        },
        {
          move: {
            name: "tera-blast",
            url: "https://pokeapi.co/api/v2/move/851/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "trailblaze",
            url: "https://pokeapi.co/api/v2/move/885/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
      ],
      name: "pikachu",
      order: 35,
      past_types: [],
      species: {
        name: "pikachu",
        url: "https://pokeapi.co/api/v2/pokemon-species/25/",
      },
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        back_female:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
        back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
        back_shiny_female:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        front_female:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
        front_shiny_female:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
            front_female: null,
          },
          home: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/25.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/25.png",
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/25.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/25.png",
              back_gray:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/25.png",
              back_transparent:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/25.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/25.png",
              front_gray:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/25.png",
              front_transparent:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/25.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/25.png",
              back_gray:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/25.png",
              back_transparent:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/25.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/25.png",
              front_gray:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/25.png",
              front_transparent:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/25.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/25.png",
              back_shiny_transparent:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/25.png",
              back_transparent:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/25.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/25.png",
              front_shiny_transparent:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/25.png",
              front_transparent:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/25.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/25.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/25.png",
              front_transparent:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/25.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/25.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/25.png",
              front_transparent:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/25.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/25.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/25.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/25.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/25.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/25.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/25.png",
              back_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/25.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/25.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/25.png",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/25.png",
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/25.png",
              back_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/25.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/25.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/25.png",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/25.png",
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/25.png",
              back_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/25.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/25.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/25.png",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/25.png",
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif",
                back_female:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/25.gif",
                back_shiny:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/25.gif",
                back_shiny_female:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/25.gif",
                front_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif",
                front_female:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/25.gif",
                front_shiny:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/25.gif",
                front_shiny_female:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/25.gif",
              },
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/25.png",
              back_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/25.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/25.png",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/25.png",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/25.png",
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/25.png",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/25.png",
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/25.png",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/25.png",
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/25.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/25.png",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/25.png",
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/25.png",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/female/25.png",
            },
          },
        },
      },
      stats: [
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 90,
          effort: 2,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
      ],
      weight: 60,
    },
    speciesData: {
      base_happiness: 50,
      capture_rate: 190,
      color: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/pokemon-color/10/",
      },
      egg_groups: [
        {
          name: "ground",
          url: "https://pokeapi.co/api/v2/egg-group/5/",
        },
        {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/egg-group/6/",
        },
      ],
      evolution_chain: {
        url: "https://pokeapi.co/api/v2/evolution-chain/10/",
      },
      evolves_from_species: {
        name: "pichu",
        url: "https://pokeapi.co/api/v2/pokemon-species/172/",
      },
      flavor_text_entries: [
        {
          flavor_text:
            "When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "red",
            url: "https://pokeapi.co/api/v2/version/1/",
          },
        },
        {
          flavor_text:
            "When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "blue",
            url: "https://pokeapi.co/api/v2/version/2/",
          },
        },
        {
          flavor_text:
            "It keeps its tail\nraised to monitor\nits surroundings.\fIf you yank its\ntail, it will try\nto bite you.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version/3/",
          },
        },
        {
          flavor_text:
            "This intelligent\nPOKéMON roasts\nhard BERRIES with\felectricity to\nmake them tender\nenough to eat.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "gold",
            url: "https://pokeapi.co/api/v2/version/4/",
          },
        },
        {
          flavor_text:
            "It raises its tail\nto check its sur­\nroundings. The\ftail is sometimes\nstruck by light­\nning in this pose.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "silver",
            url: "https://pokeapi.co/api/v2/version/5/",
          },
        },
        {
          flavor_text:
            "When it is anger­\ned, it immediately\ndischarges the\fenergy stored in\nthe pouches in its\ncheeks.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version/6/",
          },
        },
        {
          flavor_text:
            "Whenever PIKACHU comes across\nsomething new, it blasts it with a jolt\nof electricity.\fIf you come across a blackened berry,\nit’s evidence that this POKéMON\nmistook the intensity of its charge.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "ruby",
            url: "https://pokeapi.co/api/v2/version/7/",
          },
        },
        {
          flavor_text:
            "This POKéMON has electricity-storing\npouches on its cheeks. These appear to\nbecome electrically charged during the\fnight while PIKACHU sleeps.\nIt occasionally discharges electricity\nwhen it is dozy after waking up.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "sapphire",
            url: "https://pokeapi.co/api/v2/version/8/",
          },
        },
        {
          flavor_text:
            "It stores electricity in the electric sacs\non its cheeks. When it releases pent-up\nenergy in a burst, the electric power is\nequal to a lightning bolt.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version/9/",
          },
        },
        {
          flavor_text:
            "It has small electric sacs on both its\ncheeks. If threatened, it looses electric\ncharges from the sacs.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "firered",
            url: "https://pokeapi.co/api/v2/version/10/",
          },
        },
        {
          flavor_text:
            "When several of these POKéMON gather,\ntheir electricity can build and cause\nlightning storms.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "leafgreen",
            url: "https://pokeapi.co/api/v2/version/11/",
          },
        },
        {
          flavor_text:
            "It lives in forests with others.\nIt stores electricity in the\npouches on its cheeks.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "diamond",
            url: "https://pokeapi.co/api/v2/version/12/",
          },
        },
        {
          flavor_text:
            "If it looses crackling power from\nthe electric pouches on its\ncheeks, it is being wary.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "pearl",
            url: "https://pokeapi.co/api/v2/version/13/",
          },
        },
        {
          flavor_text:
            "It occasionally uses an electric\nshock to recharge a fellow PIKACHU\nthat is in a weakened state.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version/14/",
          },
        },
        {
          flavor_text:
            "This intelligent Pokémon roasts\nhard berries with electricity to\nmake them tender enough to eat.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "heartgold",
            url: "https://pokeapi.co/api/v2/version/15/",
          },
        },
        {
          flavor_text:
            "It raises its tail to check its\nsurroundings. The tail is sometimes\nstruck by lightning in this pose.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "soulsilver",
            url: "https://pokeapi.co/api/v2/version/16/",
          },
        },
        {
          flavor_text:
            "Il lui arrive de remettre d’aplomb\nun Pikachu allié en lui envoyant\nune décharge électrique.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "black",
            url: "https://pokeapi.co/api/v2/version/17/",
          },
        },
        {
          flavor_text:
            "It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "black",
            url: "https://pokeapi.co/api/v2/version/17/",
          },
        },
        {
          flavor_text:
            "Il lui arrive de remettre d’aplomb\nun Pikachu allié en lui envoyant\nune décharge électrique.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "white",
            url: "https://pokeapi.co/api/v2/version/18/",
          },
        },
        {
          flavor_text:
            "It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "white",
            url: "https://pokeapi.co/api/v2/version/18/",
          },
        },
        {
          flavor_text:
            "It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "black-2",
            url: "https://pokeapi.co/api/v2/version/21/",
          },
        },
        {
          flavor_text:
            "It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "white-2",
            url: "https://pokeapi.co/api/v2/version/22/",
          },
        },
        {
          flavor_text:
            "しっぽを　たてて　まわりの\nようすを　さぐっていると　ときどき\nかみなりが　しっぽに　おちてくる。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "꼬리를 세우고 주변의\n상황을 살피다 보면 가끔\n꼬리에 번개가 친다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "Il élève sa queue pour surveiller les environs.\nElle attire souvent la foudre dans cette position.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "Es streckt seinen Schweif nach oben, um seine\nUmgebung zu prüfen. Häufig fährt ein Blitz hinein.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "Levanta su cola para vigilar los alrededores. A veces,\npuede ser alcanzado por un rayo en esa pose.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "Solleva la coda per esaminare l’ambiente circostante.\nA volte la coda è colpita da un fulmine quando è in\nquesta posizione.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "It raises its tail to check its surroundings.\nThe tail is sometimes struck by lightning\nin this pose.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "尻尾を　立てて　まわりの　様子を\n探っていると　ときどき\n雷が　尻尾に　落ちてくる。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          flavor_text:
            "ほっぺたの　りょうがわに\nちいさい　でんきぶくろを　もつ。\nピンチのときに　ほうでんする。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "뺨의 양쪽에\n작은 전기 주머니가 있다.\n위기 상황일 때 방전한다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "Pikachu a de petites poches pleines d’électricité sur\nses joues. S’il se sent menacé, il laisse s’échapper\ndes décharges électriques.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "Es hat kleine Backentaschen, die mit Elektrizität\ngefüllt sind. Bei Gefahr entlädt es sie.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "Las bolsas de las mejillas están llenas de electricidad,\nque libera cuando se siente amenazado.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "Se spaventato, perde scariche elettriche dalle due\nsacche che ha sulle guance.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "It has small electric sacs on both its cheeks.\nIf threatened, it looses electric charges from\nthe sacs.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "ほっぺたの　両側に\n小さい　電気袋を　持つ。\nピンチのときに　放電する。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          flavor_text:
            "はじめて　みる　ものには　でんげきを　あてる。\nくろこげの　きのみが　おちていたら　それは\nでんげきの　つよさを　まちがえた　しょうこだよ。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "처음 보는 것에게는 전격을 맞춘다.\n새까맣게 탄 나무열매가 떨어져 있다는 것은\n전격의 세기를 조절하지 못했다는 증거다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "Chaque fois que Pikachu découvre quelque chose de\nnouveau, il envoie un arc électrique. Lorsqu’on tombe\nsur une Baie carbonisée, ça signifie sans doute qu’un\nde ces Pokémon a envoyé une charge trop forte.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "Immer wenn Pikachu auf etwas Neues stößt, jagt es\neinen Elektroschock hindurch. Wenn du eine verkohlte\nBeere findest, hat dieses Pokémon seine elektrische\nLadung falsch eingeschätzt.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "Cada vez que un Pikachu se encuentra con algo nuevo, le\nlanza una descarga eléctrica. Cuando se ve alguna baya\nchamuscada, es muy probable que sea obra de un Pikachu,\nya que a veces no controlan la intensidad de la descarga.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "Quando Pikachu incontra qualcosa che non conosce, lo\ncolpisce con una scarica elettrica. Quando si vede una bacca\nannerita, è evidente che questo Pokémon ha emesso una\nscossa troppo forte.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "Whenever Pikachu comes across something new,\nit blasts it with a jolt of electricity. If you come across a\nblackened berry, it’s evidence that this Pokémon mistook the\nintensity of its charge.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "はじめて　みる　ものには　電撃を　当てる。\n黒こげの　きのみが　落ちていたら　それは\n電撃の　強さを　間違えた　証拠だよ。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          flavor_text:
            "ほっぺの　でんきぶくろの　でんきは　まよなか\nねている　あいだに　ためられている　らしいよ。\nねぼけて　ほうでんしてしまう　ことが　ある。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "뺨의 전기 주머니에 있는 전기는 한밤중\n자는 동안 축적되는 것 같다.\n잠이 덜 깨서 방전하기도 한다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "Ce Pokémon dispose de petites poches dans les joues pour\nstocker de l’électricité. Elles semblent se charger pendant\nque Pikachu dort. Il libère parfois un peu d’électricité\nlorsqu’il n’est pas encore bien réveillé.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "Dieses Pokémon kann in seinen Backentaschen Elektrizität\nspeichern. Diese laden sich nachts auf, während Pikachu\nschläft. Es entlädt manchmal seine elektrische Ladung,\nwenn es gerade aufgewacht und noch schläfrig ist.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "Este Pokémon tiene unas bolsas en las mejillas donde\nalmacena electricidad. Parece ser que se recargan por la\nnoche, mientras Pikachu duerme. A veces, cuando se acaba\nde despertar y está aún medio dormido, descarga un poco.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "Pikachu immagazzina l’elettricità nelle guance. Pare che\nqueste si ricarichino durante la notte quando dorme.\nTalvolta emette delle scariche elettriche al risveglio mentre\nè ancora assonnato.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "This Pokémon has electricity-storing pouches on its cheeks.\nThese appear to become electrically charged during the night\nwhile Pikachu sleeps. It occasionally discharges electricity\nwhen it is dozy after waking up.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "ほっぺの　電気袋の　電気は　真夜中\n寝ている　間に　ためられている　らしいよ。\n寝ぼけて　放電してしまう　ことが　ある。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          flavor_text:
            "たくさんの　ピカチュウを　あつめ\nはつでんしょを　つくる　けいかくが\nさいきん　はっぴょう　された。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "많은 피카츄를 모아서\n발전소를 만들 계획이\n최근 발표되었다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text: "最近發表了聚集大量皮卡丘\n來建造發電廠的計畫。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "Un projet de centrale électrique fonctionnant\nen rassemblant une foule de Pikachu a été\nrécemment annoncé.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "Vor Kurzem wurden Pläne verkündet,\nmithilfe einer großen Anzahl an Pikachu\nein ganzes Kraftwerk zu betreiben.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "Recientemente se ha presentado un proyecto\npara reunir numerosos Pikachu y crear con ellos\nuna central eléctrica.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "Recentemente è stato presentato un progetto\nper riunire numerosi Pikachu e costruire\nuna centrale elettrica.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "A plan was recently announced to gather\nmany Pikachu and make an electric power plant.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "たくさんの　ピカチュウを　集め\n発電所を　造る　計画が\n最近　発表　された。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text: "最近发表了聚集大量皮卡丘，\n建造发电厂的计划。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          flavor_text:
            "でんきを　ためる　せいしつ。\nときどき　おもいきり　ほうでん\nしないと　ストレスを　かんじる。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "전기를 모으는 성질을 가졌다.\n가끔 마음껏 방전하지\n않으면 스트레스를 받는다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "有積聚電力的特質。\n不時常盡情釋放電力的話，\n就會倍感壓力。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "Un Pokémon capable de condenser l’électricité.\nIl doit décharger l’énergie accumulée de temps\nen temps au risque d’accroître son stress.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "Es liegt in seiner Natur, konstant Elektrizität in\nsich anzustauen. Kann es diese nicht regelmäßig\nentladen, löst dies Stress aus.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "Pikachu almacena electricidad en su cuerpo.\nSi no la libera de vez en cuando y se desfoga,\npuede sufrir estrés.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "Accumula naturalmente elettricità. Se ogni tanto\nnon si sfoga emettendo scariche elettriche,\nrischia di essere sopraffatto dallo stress.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "電気を　溜める　性質。\n時々　思い切り　放電\nしないと　ストレスを　感じる。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "有积聚电力的特质。\n不时常尽情释放电力的话，\n就会倍感压力。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          flavor_text:
            "でんきを　ためこむ　せいしつ。\nピカチュウが　むれて　くらす　もりは\nらくらいが　たえず　キケンだ。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "전기를 모으는 성질을 띠고 있다.\n피카츄가 무리 지어 사는 숲은\n낙뢰가 끊이지 않아 위험하다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "擁有儲蓄電力的特性。\n皮卡丘群居的森林裡\n會不斷落雷，十分危險。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "Son corps peut accumuler de l’électricité.\nLes forêts abritant des groupes de Pikachu\nsont d’ailleurs souvent frappées par la foudre.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "Es liegt in seiner Natur, konstant Elektrizität zu\nspeichern. Die Wälder, in denen Pikachu leben,\nbergen stets die Gefahr eines Blitzgewitters.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "Acumulan electricidad de forma natural. Los\nbosques donde habitan en grupos están en\npeligro constante de ser alcanzados por rayos.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "Accumula naturalmente elettricità. I boschi\npopolati da gruppi di Pikachu sono pericolosi\nperché continuamente colpiti dai fulmini.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "Its nature is to store up electricity. Forests\nwhere nests of Pikachu live are dangerous,\nsince the trees are so often struck by lightning.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "電気を　ため込む　性質。\nピカチュウが　群れて　暮らす　森は\n落雷が　絶えず　危険だ。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "有积存电力的特质。\n在皮卡丘群居的森林里\n会落雷不断，十分危险。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          flavor_text:
            "ねてる　あいだに　ほっぺの　ふくろで\nでんきを　つくる。　ねぶそく　だと\nよわい　でんきしか　だせなくなるぞ。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "자는 동안 볼의 주머니에서\n전기를 만든다. 잠이 부족하면\n약한 전기밖에 낼 수 없게 된다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "會在睡覺時用臉頰上的囊\n製造電力。如果睡眠不足，\n就只能放出微弱的電力。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "Quand il dort, il génère de l’électricité dans les\npoches de ses joues. S’il manque de sommeil,\nil ne peut plus émettre qu’un faible courant.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "Seine Backentaschen laden sich elektrisch auf,\nwährend es schläft. Bei Schlafmangel kann es\nnur Schwachstrom entladen.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "Mientras duerme, acumula electricidad en las\nbolsas de sus mejillas. Si no logra conciliar el\nsueño, solo puede emitir débiles descargas.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "Mentre dorme produce energia elettrica nelle\nsacche che ha sulle guance. Se non riposa\nabbastanza può emettere solo deboli scariche.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "While sleeping, it generates electricity in the\nsacs in its cheeks. If it’s not getting enough\nsleep, it will be able to use only weak electricity.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "寝てる　間に　ほっぺの　袋で\n電気を　作る。　寝不足　だと\n弱い　電気しか　出せなくなるぞ。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "会在睡着时用脸颊上的袋子\n制造电力。如果睡眠不足，\n就只能放出微弱的电力。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
        {
          flavor_text:
            "もりに　すむ　ポケモン。　ほっぺの\nふくろは　でんきを　ためるので\nさわると　パチパチ　しびれるぞ。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "숲에 사는 포켓몬. 볼에 있는\n주머니에 전기를 모으고 있어\n만지면 저릿저릿 저리다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "棲息在森林裡的寶可夢。\n臉頰上的囊能夠儲存電力，\n用手去摸會被電得麻麻的。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "Ce Pokémon des bois accumule de l’électricité\ndans les poches de ses joues. Il ne faut pas les\ntoucher sous peine de recevoir une décharge.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "Pikachu ist in Wäldern zu Hause. Da es in seinen\nBackentaschen Elektrizität speichert, bekommt\nman einen Schlag, wenn man diese berührt.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "Los bosques son su hábitat natural. En las bolsas\nde las mejillas acumula electricidad, por lo que\nquien las toque puede recibir una descarga.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "Vive nelle foreste. Accumula elettricità nelle\nsacche sulle guance, e chiunque le tocchi\nprende la scossa.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "This forest-dwelling Pokémon stores electricity\nin its cheeks, so you’ll feel a tingly shock\nif you touch it.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "森に　棲む　ポケモン。　ほっぺの\nふくろは　電気を　ためるので\n触ると　パチパチ　痺れるぞ。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "栖息在森林中的宝可梦。由于\n它脸颊上的袋子中储存了电能，\n触摸了之后会觉得麻麻的。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "lets-go-pikachu",
            url: "https://pokeapi.co/api/v2/version/31/",
          },
        },
        {
          flavor_text:
            "もりに　すむ　ポケモン。　ほっぺの\nふくろは　でんきを　ためるので\nさわると　パチパチ　しびれるぞ。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "숲에 사는 포켓몬. 볼에 있는\n주머니에 전기를 모으고 있어\n만지면 저릿저릿 저리다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "棲息在森林裡的寶可夢。\n臉頰上的囊能夠儲存電力，\n用手去摸會被電得麻麻的。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "Ce Pokémon des bois accumule de l’électricité\ndans les poches de ses joues. Il ne faut pas les\ntoucher sous peine de recevoir une décharge.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "Pikachu ist in Wäldern zu Hause. Da es in seinen\nBackentaschen Elektrizität speichert, bekommt\nman einen Schlag, wenn man diese berührt.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "Los bosques son su hábitat natural. En las bolsas\nde las mejillas acumula electricidad, por lo que\nquien las toque puede recibir una descarga.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "Vive nelle foreste. Accumula elettricità nelle\nsacche sulle guance, e chiunque le tocchi\nprende la scossa.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "This forest-dwelling Pokémon stores electricity\nin its cheeks, so you’ll feel a tingly shock\nif you touch it.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "森に　棲む　ポケモン。　ほっぺの\nふくろは　電気を　ためるので\n触ると　パチパチ　痺れるぞ。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "栖息在森林中的宝可梦。由于\n它脸颊上的袋子中储存了电能，\n触摸了之后会觉得麻麻的。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version/32/",
          },
        },
        {
          flavor_text:
            "つくる　でんきが　きょうりょくな\nピカチュウほど　ほっぺの　ふくろは\nやわらかく　よく　のびるぞ。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "만들어 내는 전기가 강력한\n피카츄일수록 볼의 주머니가\n부드럽고 잘 늘어난다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "越是能製造出強大電流的\n皮卡丘，臉頰上的囊就越\n柔軟，同時也越有伸展性。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "Plus la puissance électrique de Pikachu est élevée,\nplus les poches de ses joues sont extensibles.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "Je stärker die Elektrizität ist, die Pikachu\nproduziert, desto weicher und elastischer\nsind seine Backentaschen.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "Cuanto más potente es la energía eléctrica que\ngenera este Pokémon, más suaves y elásticas se\nvuelven las bolsas de sus mejillas.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "Più potente è l’energia elettrica prodotta dal\nPokémon, più le sacche sulle sue guance sono\nmorbide ed elastiche.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "Pikachu that can generate powerful electricity\nhave cheek sacs that are extra soft and\nsuper stretchy.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "つくる　電気が　強力な\nピカチュウほど　ほっぺの　袋は\n軟らかく　よく　伸びるぞ。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "越是能制造出强大电流的\n皮卡丘，脸颊上的囊就越\n柔软，同时也越有伸展性。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "sword",
            url: "https://pokeapi.co/api/v2/version/33/",
          },
        },
        {
          flavor_text:
            "おたがいの　しっぽを　くっつけて\nでんきを　ながしあうのが\nピカチュウ　どうしの　あいさつだ。",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "서로의 꼬리를 붙여서\n전기를 흐르게 하는 게\n피카츄 사이의 인사법이다.",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "皮卡丘們把尾巴\n貼在一起交換電流，\n其實是在互相打招呼。",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "Les Pikachu se disent bonjour en se frottant\nla queue et en y faisant passer du courant\nélectrique.",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "Pikachu begrüßen einander, indem sie ihre\nSchweife aneinanderreiben und eine Ladung\nStrom durch diese gleiten lassen.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "Los miembros de esta especie se saludan entre\nsí uniendo sus colas y transmitiéndose corriente\neléctrica.",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "I Pikachu si salutano fra loro unendo le code\ne facendovi passare elettricità attraverso.",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "When Pikachu meet, they’ll touch their tails\ntogether and exchange electricity through them\nas a form of greeting.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "おたがいの　しっぽを　くっつけて\n電気を　流しあうのが\nピカチュウ　同士の　挨拶だ。",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "皮卡丘们把尾巴\n贴在一起交换电流，\n其实是在互相打招呼。",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          version: {
            name: "shield",
            url: "https://pokeapi.co/api/v2/version/34/",
          },
        },
        {
          flavor_text:
            "Possesses cheek sacs in which it stores electricity. This clever\nforest-dweller roasts tough berries with an electric shock before\nconsuming them.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          version: {
            name: "legends-arceus",
            url: "https://pokeapi.co/api/v2/version/39/",
          },
        },
      ],
      form_descriptions: [],
      forms_switchable: false,
      gender_rate: 4,
      genera: [
        {
          genus: "ねずみポケモン",
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
        },
        {
          genus: "쥐포켓몬",
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
        },
        {
          genus: "鼠寶可夢",
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
        },
        {
          genus: "Pokémon Souris",
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
        },
        {
          genus: "Maus-Pokémon",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
        },
        {
          genus: "Pokémon Ratón",
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
        },
        {
          genus: "Pokémon Topo",
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
        },
        {
          genus: "Mouse Pokémon",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
        },
        {
          genus: "ねずみポケモン",
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
        },
        {
          genus: "鼠宝可梦",
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
        },
      ],
      generation: {
        name: "generation-i",
        url: "https://pokeapi.co/api/v2/generation/1/",
      },
      growth_rate: {
        name: "medium",
        url: "https://pokeapi.co/api/v2/growth-rate/2/",
      },
      habitat: {
        name: "forest",
        url: "https://pokeapi.co/api/v2/pokemon-habitat/2/",
      },
      has_gender_differences: true,
      hatch_counter: 10,
      id: 25,
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      name: "pikachu",
      names: [
        {
          language: {
            name: "ja-Hrkt",
            url: "https://pokeapi.co/api/v2/language/1/",
          },
          name: "ピカチュウ",
        },
        {
          language: {
            name: "roomaji",
            url: "https://pokeapi.co/api/v2/language/2/",
          },
          name: "Pikachu",
        },
        {
          language: {
            name: "ko",
            url: "https://pokeapi.co/api/v2/language/3/",
          },
          name: "피카츄",
        },
        {
          language: {
            name: "zh-Hant",
            url: "https://pokeapi.co/api/v2/language/4/",
          },
          name: "皮卡丘",
        },
        {
          language: {
            name: "fr",
            url: "https://pokeapi.co/api/v2/language/5/",
          },
          name: "Pikachu",
        },
        {
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
          name: "Pikachu",
        },
        {
          language: {
            name: "es",
            url: "https://pokeapi.co/api/v2/language/7/",
          },
          name: "Pikachu",
        },
        {
          language: {
            name: "it",
            url: "https://pokeapi.co/api/v2/language/8/",
          },
          name: "Pikachu",
        },
        {
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
          name: "Pikachu",
        },
        {
          language: {
            name: "ja",
            url: "https://pokeapi.co/api/v2/language/11/",
          },
          name: "ピカチュウ",
        },
        {
          language: {
            name: "zh-Hans",
            url: "https://pokeapi.co/api/v2/language/12/",
          },
          name: "皮卡丘",
        },
      ],
      order: 26,
      pal_park_encounters: [
        {
          area: {
            name: "forest",
            url: "https://pokeapi.co/api/v2/pal-park-area/1/",
          },
          base_score: 80,
          rate: 10,
        },
      ],
      pokedex_numbers: [
        {
          entry_number: 25,
          pokedex: {
            name: "national",
            url: "https://pokeapi.co/api/v2/pokedex/1/",
          },
        },
        {
          entry_number: 25,
          pokedex: {
            name: "kanto",
            url: "https://pokeapi.co/api/v2/pokedex/2/",
          },
        },
        {
          entry_number: 22,
          pokedex: {
            name: "original-johto",
            url: "https://pokeapi.co/api/v2/pokedex/3/",
          },
        },
        {
          entry_number: 156,
          pokedex: {
            name: "hoenn",
            url: "https://pokeapi.co/api/v2/pokedex/4/",
          },
        },
        {
          entry_number: 104,
          pokedex: {
            name: "original-sinnoh",
            url: "https://pokeapi.co/api/v2/pokedex/5/",
          },
        },
        {
          entry_number: 104,
          pokedex: {
            name: "extended-sinnoh",
            url: "https://pokeapi.co/api/v2/pokedex/6/",
          },
        },
        {
          entry_number: 22,
          pokedex: {
            name: "updated-johto",
            url: "https://pokeapi.co/api/v2/pokedex/7/",
          },
        },
        {
          entry_number: 16,
          pokedex: {
            name: "conquest-gallery",
            url: "https://pokeapi.co/api/v2/pokedex/11/",
          },
        },
        {
          entry_number: 36,
          pokedex: {
            name: "kalos-central",
            url: "https://pokeapi.co/api/v2/pokedex/12/",
          },
        },
        {
          entry_number: 163,
          pokedex: {
            name: "updated-hoenn",
            url: "https://pokeapi.co/api/v2/pokedex/15/",
          },
        },
        {
          entry_number: 25,
          pokedex: {
            name: "original-alola",
            url: "https://pokeapi.co/api/v2/pokedex/16/",
          },
        },
        {
          entry_number: 25,
          pokedex: {
            name: "original-melemele",
            url: "https://pokeapi.co/api/v2/pokedex/17/",
          },
        },
        {
          entry_number: 32,
          pokedex: {
            name: "updated-alola",
            url: "https://pokeapi.co/api/v2/pokedex/21/",
          },
        },
        {
          entry_number: 32,
          pokedex: {
            name: "updated-melemele",
            url: "https://pokeapi.co/api/v2/pokedex/22/",
          },
        },
        {
          entry_number: 25,
          pokedex: {
            name: "letsgo-kanto",
            url: "https://pokeapi.co/api/v2/pokedex/26/",
          },
        },
        {
          entry_number: 194,
          pokedex: {
            name: "galar",
            url: "https://pokeapi.co/api/v2/pokedex/27/",
          },
        },
        {
          entry_number: 85,
          pokedex: {
            name: "isle-of-armor",
            url: "https://pokeapi.co/api/v2/pokedex/28/",
          },
        },
        {
          entry_number: 56,
          pokedex: {
            name: "hisui",
            url: "https://pokeapi.co/api/v2/pokedex/30/",
          },
        },
        {
          entry_number: 74,
          pokedex: {
            name: "paldea",
            url: "https://pokeapi.co/api/v2/pokedex/31/",
          },
        },
      ],
      shape: {
        name: "quadruped",
        url: "https://pokeapi.co/api/v2/pokemon-shape/8/",
      },
      varieties: [
        {
          is_default: true,
          pokemon: {
            name: "pikachu",
            url: "https://pokeapi.co/api/v2/pokemon/25/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-rock-star",
            url: "https://pokeapi.co/api/v2/pokemon/10080/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-belle",
            url: "https://pokeapi.co/api/v2/pokemon/10081/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-pop-star",
            url: "https://pokeapi.co/api/v2/pokemon/10082/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-phd",
            url: "https://pokeapi.co/api/v2/pokemon/10083/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-libre",
            url: "https://pokeapi.co/api/v2/pokemon/10084/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-cosplay",
            url: "https://pokeapi.co/api/v2/pokemon/10085/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-original-cap",
            url: "https://pokeapi.co/api/v2/pokemon/10094/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-hoenn-cap",
            url: "https://pokeapi.co/api/v2/pokemon/10095/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-sinnoh-cap",
            url: "https://pokeapi.co/api/v2/pokemon/10096/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-unova-cap",
            url: "https://pokeapi.co/api/v2/pokemon/10097/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-kalos-cap",
            url: "https://pokeapi.co/api/v2/pokemon/10098/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-alola-cap",
            url: "https://pokeapi.co/api/v2/pokemon/10099/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-partner-cap",
            url: "https://pokeapi.co/api/v2/pokemon/10148/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-starter",
            url: "https://pokeapi.co/api/v2/pokemon/10158/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-world-cap",
            url: "https://pokeapi.co/api/v2/pokemon/10160/",
          },
        },
        {
          is_default: false,
          pokemon: {
            name: "pikachu-gmax",
            url: "https://pokeapi.co/api/v2/pokemon/10199/",
          },
        },
      ],
    },
  });

  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState({
    basicData: null,
    speciesData: null,
  });

  const onError = (error, location) => {
    console.error(
      `Something went wrong while executing - ${location}: ${error}`
    );
  };

  const fetchPokemonDetails = async (pokemonQuery) => {
    try {
      const basicData = await pokemonService.getPokemonBasicData(pokemonQuery);
      const speciesData = await pokemonService.getPokemonSpeciesData(
        pokemonQuery
      );
      if (basicData === null || basicData === undefined) {
        console.error("getPokemonBasicData did not return any data");
      } else if (speciesData === null || speciesData === undefined) {
        console.error("getPokemonSpeciesData did not return any data");
      } else {
        const selectedPokemonData = {
          basicData: basicData,
          speciesData: speciesData,
        };
        setSelected(selectedPokemonData);
        const dataString = JSON.stringify(selectedPokemonData); ///convert the object into a JSON string
        window.sessionStorage.setItem(basicData.name, dataString); // Store the newly searched Pokemon in sessionStorage is a JSON string
      }
    } catch (err) {
      onError(err, "fetchPokemonDetails");
    }
  };

  const querySessionStorage = (pokemonQuery) => {
    const storedDataString = window.sessionStorage.getItem(pokemonQuery); // check to see if the pokemon has already be searched and stored in sessionStorage

    const storedDataObject = JSON.parse(storedDataString);

    return storedDataObject; // this will return an object or null
  };

  const handleEnterKeyPressOnSearch = (e) => {
    if (e.key === "Enter") {
      const pokemonStoredData = querySessionStorage(search);
      if (pokemonStoredData !== null) {
        setSelected(pokemonStoredData);
      } else {
        fetchPokemonDetails(search);
      }
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const pokemonStoredData = querySessionStorage(search);
    if (pokemonStoredData !== null) {
      setSelected(pokemonStoredData);
    } else {
      fetchPokemonDetails(search);
    }
  };

  // const mapPokemonTab = (pokemonObj) => {
  //   let upperCaseFirstLetter = upperFirstLetter(pokemonObj.name);
  //   let pokemonId = pokemonObj.url.split("/")[6];

  //   return (
  //     <Card
  //       onClick={() => {
  //         console.log("tab clicked...");
  //       }}
  //       id={pokemonId}
  //       key={"Poketab-" + pokemonObj.name}
  //       className="my-2 poke-tab fs-3"
  //     >
  //       <Card.Body className="card-body">
  //         <Row>
  //           <Col>
  //             <span>{upperCaseFirstLetter}</span>
  //           </Col>
  //           <Col className="text-end">
  //             <FontAwesomeIcon size="xl" icon={faGreaterThan} />
  //           </Col>
  //         </Row>
  //       </Card.Body>
  //     </Card>
  //   );
  // };
  // function sortByUrlInteger(array) {
  //   array.sort((a, b) => {
  //     const intA = parseInt(a.url.split("/")[6]);
  //     const intB = parseInt(b.url.split("/")[6]);
  //     return intA - intB;
  //   });
  // }

  useEffect(() => {
    console.log("Selected has changed", typeof selected);
  }, [selected]);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        {/* <div className="searchbar-container">
        <div className="searchbar">
            <Form>
              <Form.Control
                type="text"
                placeholder="Search a Pokemon by name..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Button
                className="ms-3"
                variant="warning"
                style={{ verticalAlign: 0 }}
                onClick={() => {
                  fetchPokemonDetails(search);
                }}
              >
                Submit
              </Button>
            </Form>
          </div> 

          <Col>
            <div className="generation-buttons-outer">
              <Button
                className="generation-button"
                onClick={handleGenertionClicked}
                data-generation="1"
              >
                Kanto
              </Button>
              <Button
                className="generation-button"
                onClick={handleGenertionClicked}
                data-generation="2"
              >
                Johto
              </Button>
              <Button
                className="generation-button"
                onClick={handleGenertionClicked}
                data-generation="3"
              >
                Hoenn
              </Button>
            </div>
          </Col> 
        </div> */}
        <div className="searchbar">
          <input
            type="text"
            placeholder="Ex. Pikachu"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={handleEnterKeyPressOnSearch}
          />
          <button
            className="search-button"
            type="button"
            variant="warning"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      {selected.basicData && selected.speciesData ? (
        <PokemonInfoCard info={selected} />
      ) : (
        "test"
      )}
    </div>
  );
}

export default App;
