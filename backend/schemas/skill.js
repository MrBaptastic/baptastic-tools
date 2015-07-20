
import { Schema } from "mongoose";

export default new Schema({
  name:     { type: String, required: true },
  category: { type: String, required: true, enum: { values: [ 'General', 'Combat', 'Knowledge', 'Custom' ] } },
  career:   { type: String, required: true },
  rank:     { type: Number, required: true }
});
