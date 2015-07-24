
import { Schema } from "mongoose";

export default new Schema({
  name:     { type: String, required: true },
  location: { type: String, required: true },
  characters: [ { type: Schema.ObjectId, ref: 'Characters' } ],
  destinyPool: {
    light: { type: Number, required: true },
    dark:  { type: Number, required: true }
  }
});
