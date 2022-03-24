import Crownlands from "./RegionImages/crown.webp";
import Stormlands from "./RegionImages/Baratheon.webp";
import Vale from "./RegionImages/Arryn.webp";
import North from "./RegionImages/Bolton.webp";
import iron from "./RegionImages/Greyjoy.webp";
import westerlands from "./RegionImages/westerlands.webp";
import reach from "./RegionImages/Tyrell.webp";
import Riverlands from "./RegionImages/Tully.webp";
import Dorne from "./RegionImages/Martell.webp";
import neck from "../images/GAME-OF-THRONES.jpg";
const regionData = [
  { region: "The Crownlands", image: Crownlands },
  { region: "The North", image: North },
  { region: "The Vale", image: Vale },
  { region: "Iron Islands", image: iron },
  { region: "The Westerlands", image: westerlands },
  { region: "The Reach", image: reach },
  { region: "The Stormlands", image: Stormlands },
  { region: "Dorne", image: Dorne },
  { region: "The Riverlands", image: Riverlands },
  { region: "The Neck", image: neck },
];
const regionSelectionState = [
  { region: "crownlands", selected: false, name: "The Crownlands" },
  { region: "north", selected: false, name: "The North" },
  { region: "vale", selected: false, name: "The Vale" },
  { region: "ironIslands", selected: false, name: "Iron Islands" },
  { region: "westerlands", selected: false, name: "The Westerlands" },
  { region: "reach", selected: false, name: "The Reach" },
  { region: "stormlands", selected: false, name: "The Stormlands" },
  { region: "dorne", selected: false, name: "Dorne" },
  { region: "riverlands", selected: false, name: "The Riverlands" },
  { region: "neck", selected: false, name: "The Neck" },
];
export { regionData, regionSelectionState };
