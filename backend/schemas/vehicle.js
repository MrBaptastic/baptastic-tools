
import { Schema } from "mongoose";

import vehicleWeapon from "./vehicle_weapon";

export default new Schema({
  name:                   { type: String, required: true },
  hardPoints:             { type: Number, required: true }, // Number?
  encumbrance:            { type: Number, required: true },
  silhouette:             { type: Number, required: true },
  speed:                  { type: Number, required: true },
  handling:               { type: Number, required: true },
  armor:                  { type: Number, required: true },
  hullTraumaThreshold:    { type: Number, required: true },
  hullTraumaCurrent:      { type: Number, required: true },
  systemStrainThreshold:  { type: Number, required: true },
  systemStrainCurrent:    { type: Number, required: true },
  defenseFore:            { type: Number, required: true },
  defenseStarboard:       { type: Number, required: true },
  defenseAft:             { type: Number, required: true },
  defensePort:            { type: Number, required: true },
  weapons: [ vehicleWeapon ],
  cargo: [ { type: String } ]
});
