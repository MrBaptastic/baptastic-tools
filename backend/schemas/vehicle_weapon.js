
import { Schema } from "mongoose";

export default new Schema({
  name:      { type: String },
  firingArc: { type: Number },
  damage:    { type: Number },
  range:     { type: Number },
  crit:      { type: Number },
  special:   { type: String }
});
