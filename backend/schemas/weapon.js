
import { Schema } from "mongoose";

export default new Schema({
  name:    { type: String },
  skill:   { type: String },
  damage:  { type: Number },
  range:   { type: Number },
  crit:    { type: Number },
  special: { type: String }
});
