
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
  hullTrauma: {
    threshold: { type: Number, required: true },
    current:   { type: Number, required: true },
  },
  systemStrain: {
    threshold:  { type: Number, required: true },
    current:    { type: Number, required: true },
  },
  defense: {
    fore:      { type: Number, required: true },
    starboard: { type: Number, required: true },
    aft:       { type: Number, required: true },
    port:      { type: Number, required: true },
  },
  weapons: [ vehicleWeapon ],
  cargo: [ { type: String } ]
});
